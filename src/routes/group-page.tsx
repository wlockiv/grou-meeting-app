import React, { useEffect, useState } from 'react';
import {
  Box,
  Center,
  Container,
  Heading,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Skeleton,
  Divider,
} from '@chakra-ui/core';
import { SettingsIcon } from '@chakra-ui/icons';
import { RouteComponentProps } from '@reach/router';
import { Group } from '~/graphql/types';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { getGroup } from '~/graphql/queries';
import { GetGroupQuery } from '~/API';
import { formatAWSDateTimeString } from '~/services/util';

type GroupPageURLParams = {
  groupId?: string;
};

type EventListProps = {
  meetings: Group['meetings'];
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
        <Box key={meeting.id} borderWidth="1px" borderRadius="md" padding={2}>
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

const GroupPage: React.FC<RouteComponentProps & GroupPageURLParams> = ({
  groupId,
}) => {
  // @ts-ignore
  const [group, setGroup] = useState<Group>({ name: '' });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchGroup().then(res => {
      setLoading(false);
    });
  }, [groupId]);

  async function fetchGroup(): Promise<void> {
    try {
      const { data } = (await API.graphql(
        graphqlOperation(getGroup, { id: groupId }),
      )) as GraphQLResult<GetGroupQuery>;
      console.log(data);
      if (data && data.getGroup) {
        setGroup(data.getGroup);
      }
    } catch (error) {
      console.error('There was a problem fetching groups:\n', error);
    }
  }

  return (
    <Container maxW="100vw">
      <Center>
        <Box width="100%" maxW="lg" borderWidth="1px" p={4} borderRadius="md">
          <Skeleton isLoaded={!loading}>
            <Heading size="lg" mb={4} isTruncated>
              {group.name ? group.name : 'loading'}
            </Heading>
          </Skeleton>
          <Tabs>
            <TabList>
              <Tab>Events</Tab>
              <Tab ml="auto">
                <SettingsIcon />
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel px={1}>
                <EventList meetings={group.meetings} hasLoaded={!loading} />
              </TabPanel>
              <TabPanel px={1}>
                <Text>Settings</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Center>
    </Container>
  );
};

export default GroupPage;
