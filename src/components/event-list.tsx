import React, { useEffect, useState } from 'react';
import {
  Skeleton,
  Text,
  Box,
  Heading,
  Divider,
  IconButton,
  Flex,
} from '@chakra-ui/core';
import { DeleteIcon } from '@chakra-ui/icons';
import { MeetingList } from '~/graphql/types';
import { formatAWSDateTimeString } from '~/services/util';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { ListMeetingsQuery } from '~/API';

type EventListProps = {
  groupId: string;
};

const query = /* GraphQL */ `
  query ListMeetings($filter: ModelMeetingFilterInput) {
    listMeetings(filter: $filter) {
      items {
        id
        title
        date
        description
        groupId
      }
    }
  }
`;

const subscription = /* GraphQL */ `
  subscription OnCreateMeetingByGroup($groupId: String!) {
    onCreateMeetingByGroup(groupId: $groupId) {
      id
      title
      date
      description
      groupId
    }
  }
`;

const deleteMutation = /* GraphQL */ `
  mutation DeleteMeeting(
    $input: DeleteMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    deleteMeeting(input: $input, condition: $condition) {
      id
      title
      date
      description
      groupId
    }
  }
`;

const EventList: React.FC<EventListProps> = ({ groupId }) => {
  const [meetings, setMeetings] = useState<MeetingList['items']>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMeetings().then(data => {
      if (data && data.listMeetings) setMeetings(data.listMeetings.items);
      setLoading(false);
    });
  }, [groupId]);

  useEffect(() => {
    const meetingSubscription = API.graphql({
      query: subscription,
      variables: {
        groupId,
      },
      // @ts-ignore
    }).subscribe({
      next: ({ value }: { value: any }) => {
        setMeetings(oldMeetings => [
          ...oldMeetings,
          value.data.onCreateMeetingByGroup,
        ]);
      },
    });
    return () => meetingSubscription.unsubscribe();
  }, [groupId]);

  async function fetchMeetings(): Promise<ListMeetingsQuery | undefined> {
    try {
      const { data, errors } = (await API.graphql(
        graphqlOperation(query, {
          filter: { groupId: { eq: groupId } },
        }),
      )) as GraphQLResult<ListMeetingsQuery>;

      if (errors) {
        throw new Error(errors.map(e => e.message).join('\n'));
      }

      if (data && data.listMeetings && data.listMeetings.items) {
        return data;
      }
    } catch (error) {
      console.error('There was a problem fetching groups:\n', error);
      return undefined;
    }
  }

  async function handleDelete(id: string) {
    await API.graphql(graphqlOperation(deleteMutation, { input: { id } }));
    const data = await fetchMeetings();
    if (data && data.listMeetings) setMeetings(data.listMeetings.items);
  }

  if (loading) {
    return <Skeleton height="110px" />;
  }

  if (!meetings || meetings.length == 0) {
    return <Text>No events yet!</Text>;
  }

  const meetingList: React.ReactNode = meetings.map(meeting => {
    if (!meeting) return null;
    return (
      <Box
        key={meeting.id}
        borderWidth="1px"
        borderRadius="md"
        padding={2}
        mt={2}
      >
        <Flex>
          <Heading size="md">{meeting.title}</Heading>
          <IconButton
            size={'xs'}
            ml={'auto'}
            aria-label={`delete event ${meeting.title}`}
            variant={'outline'}
            onClick={async () => {
              await handleDelete(meeting.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Flex>
        <Text fontSize="sm">
          {meeting.date ? formatAWSDateTimeString(meeting.date) : 'TBD'}
        </Text>
        {meeting.description ? (
          <>
            <Divider my={2} />
            <Text>{meeting.description}</Text>
          </>
        ) : null}
      </Box>
    );
  });

  return <>{meetingList}</>;
};

export default EventList;
