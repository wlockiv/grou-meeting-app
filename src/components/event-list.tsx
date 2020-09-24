import React, { useEffect, useState } from 'react';
import { Skeleton, Text, Box, Heading, Divider } from '@chakra-ui/core';
import { MeetingList } from '~/graphql/types';
import { formatAWSDateTimeString } from '~/services/util';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { ListMeetingsQuery } from '~/API';
import { group } from 'gatsby/dist/schema/resolvers';

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

const EventList: React.FC<EventListProps> = ({ groupId }) => {
  const [meetings, setMeetings] = useState<MeetingList>({
    nextToken: null,
    items: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMeetings().then(data => {
      setLoading(false);
    });
  }, [groupId]);

  useEffect(() => {
    console.log(meetings);
    const meetingSubscription = API.graphql({
      query: subscription,
      variables: {
        groupId,
      },
    }).subscribe({
      next: ({ value }: { value: any }) => {
        console.log(value);
        // console.log(meetings.items);
        // const newMeetingItems = meetings.items?.push(
        //   value.data.onCreateMeetingByGroup,
        // );
        // setMeetings({
        //   nextToken: meetings.nextToken,
        //   items: newMeetingItems,
        // });
      },
    });
    return () => meetingSubscription.unsubscribe();
  }, [groupId]);

  async function fetchMeetings(): Promise<void> {
    try {
      const { data, errors } = (await API.graphql(
        graphqlOperation(query, {
          filter: { groupId: { eq: groupId } },
        }),
      )) as GraphQLResult<ListMeetingsQuery>;

      if (errors) throw new Error(errors.map(e => e.message).join('\n'));

      if (data && data.listMeetings && data.listMeetings.items) {
        setMeetings(data.listMeetings);
      }
    } catch (error) {
      console.error('There was a problem fetching groups:\n', error);
    }
  }

  if (loading) {
    return <Skeleton height="110px" />;
  }

  if (!meetings.items || meetings.items.length == 0) {
    return <Text>No events yet!</Text>;
  }

  const meetingList: React.ReactNode = meetings.items.map(meeting => {
    if (!meeting) return null;
    return (
      <Box
        key={meeting.id}
        borderWidth="1px"
        borderRadius="md"
        padding={2}
        mt={2}
      >
        <Heading size="md">{meeting.title}</Heading>
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
