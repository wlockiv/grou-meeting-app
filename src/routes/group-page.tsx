import { GraphQLResult } from '@aws-amplify/api';
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Skeleton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from '@chakra-ui/core';
import { SettingsIcon } from '@chakra-ui/icons';
import { RouteComponentProps } from '@reach/router';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { GetGroupQuery } from '~/API';
import { EventList, CreateEventModal } from '~/components';
import { getGroup } from '~/graphql/queries';
import { Group } from '~/graphql/types';

type GroupPageURLParams = {
  groupId?: string;
};

const GroupPage: React.FC<RouteComponentProps & GroupPageURLParams> = ({
  groupId,
}) => {
  // @ts-ignore
  const [group, setGroup] = useState<Group | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const createModalControl = useDisclosure();

  useEffect(() => {
    fetchGroup().then(() => {
      setLoading(false);
    });
  }, [groupId]);

  async function fetchGroup(): Promise<void> {
    try {
      const { data } = (await API.graphql(
        graphqlOperation(getGroup, { id: groupId }),
      )) as GraphQLResult<GetGroupQuery>;

      if (data && data.getGroup) {
        setGroup(data.getGroup);
      }
    } catch (error) {
      console.error('There was a problem fetching groups:\n', error);
    }
  }

  if (!loading && !group) {
    return (
      <Center>
        <Text>Could not find the selected group</Text>
      </Center>
    );
  }

  return (
    <Container maxW="100vw">
      <CreateEventModal
        groupId={groupId}
        isOpen={createModalControl.isOpen}
        onClose={createModalControl.onClose}
      />
      <Center>
        <Box width="100%" maxW="lg" borderWidth="1px" p={4} borderRadius="md">
          <Skeleton isLoaded={!loading}>
            <Heading size="lg" mb={4} isTruncated>
              {group && group.name ? group.name : 'Hidden'}
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
                <Button
                  w="100%"
                  variant="outline"
                  colorScheme="teal"
                  onClick={createModalControl.onOpen}
                >
                  Create Event
                </Button>
                <EventList
                  meetings={group && group.meetings}
                  hasLoaded={!loading}
                />
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
