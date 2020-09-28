import { GraphQLResult } from '@aws-amplify/api';
import {
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Skeleton,
  Text,
} from '@chakra-ui/core';
import { DeleteIcon } from '@chakra-ui/icons';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { formatAWSDateTimeString } from '~/services/util';
import {
  deleteEvent,
  listEvents,
  ListEventsQuery,
  Event,
  onCreateEventByGroup,
} from './graphql';
import { handleGqlError } from '~/services/error-logging';

type EventListProps = {
  groupId: string;
};

const EventList: React.FC<EventListProps> = ({ groupId }) => {
  const [events, setEvents] = useState<Array<Event>>(() => []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEvents().then(data => {
      if (data) {
        setEvents(
          data.listEvents.items.sort((a, b) => (a.date > b.date ? 1 : -1)),
        );
      }
      setLoading(false);
    });
  }, [groupId]);

  useEffect(() => {
    const eventSubscription = API.graphql({
      query: onCreateEventByGroup,
      variables: {
        groupId,
      },
      // @ts-ignore
    }).subscribe({
      next: ({ value }: { value: any }) => {
        setEvents(oldEvents => [...oldEvents, value.data.onCreateEventByGroup]);
      },
    });
    return () => eventSubscription.unsubscribe();
  }, [groupId]);

  async function fetchEvents(): Promise<ListEventsQuery | undefined> {
    try {
      const { data, errors } = (await API.graphql(
        graphqlOperation(listEvents, {
          filter: { groupId: { eq: groupId } },
        }),
      )) as GraphQLResult<ListEventsQuery>;

      if (errors) {
        handleGqlError(errors);
        return;
      }

      if (data && data.listEvents && data.listEvents.items) {
        return data;
      }
    } catch (error) {
      console.error('There was a problem fetching groups:\n', error);
      return;
    }
  }

  async function handleDelete(id: string) {
    await API.graphql(graphqlOperation(deleteEvent, { input: { id } }));
    const data = await fetchEvents();
    if (data && data.listEvents) setEvents(data.listEvents.items);
  }

  if (loading) {
    return <Skeleton height="110px" />;
  }

  if (!events || events.length == 0) {
    return <Text>No events yet!</Text>;
  }

  const eventList: React.ReactNode = events.map(event => {
    if (!event) return null;
    return (
      <Box
        key={event.id}
        borderWidth="1px"
        borderRadius="md"
        padding={2}
        mt={2}
      >
        <Flex>
          <Heading size="md">{event.title}</Heading>
          <IconButton
            size={'xs'}
            ml={'auto'}
            aria-label={`delete event ${event.title}`}
            variant={'outline'}
            onClick={async () => {
              await handleDelete(event.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Flex>
        <Text fontSize="sm">
          {event.date ? formatAWSDateTimeString(event.date) : 'TBD'}
        </Text>
        {event.description ? (
          <>
            <Divider my={2} />
            <Text>{event.description}</Text>
          </>
        ) : null}
      </Box>
    );
  });

  return <>{eventList}</>;
};

export default EventList;
