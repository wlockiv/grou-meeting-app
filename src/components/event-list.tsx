import React from 'react';
import { Skeleton, Text, Box, Heading, Divider } from '@chakra-ui/core';
import { Group } from '~/graphql/types';
import { formatAWSDateTimeString } from '~/services/util';

type EventListProps = {
  meetings: Group['meetings'] | undefined | null;
  hasLoaded: boolean;
};

const EventList: React.FC<EventListProps> = ({ meetings, hasLoaded }) => {
  if (!hasLoaded) {
    return <Skeleton height="110px" />;
  }

  if (!meetings || !meetings.items || meetings.items.length == 0) {
    return <Text>No events yet!</Text>;
  }

  const eventList: Array<React.ReactNode> = [];

  meetings.items.forEach(meeting => {
    if (meeting != null) {
      eventList.push(
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
        </Box>,
      );
    }
  });

  return <>{eventList}</>;
};

export default EventList;
