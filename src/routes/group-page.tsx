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
import { EventList, CreateEventModal, SEO } from '~/components';
import { Group } from '~/graphql/types';

type GroupPageURLParams = {
  groupId?: string;
};

const query = `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      name  
    }
  }
`;

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
        graphqlOperation(query, { id: groupId }),
      )) as GraphQLResult<GetGroupQuery>;

      if (data && data.getGroup) {
        setGroup(data.getGroup);
      }
    } catch (error) {
      console.error('There was a problem fetching groups:\n', error);
    }
  }

  if (!groupId || (!loading && !group)) {
    return (
      <Center h="25vh">
        <Box>
          <Text>{`Sorry! I couldn't find that group.`}</Text>
        </Box>
      </Center>
    );
  }

  async function onModalClose() {
    setLoading(true);
    createModalControl.onClose();
    setLoading(false);
  }

  return (
    <Container maxW="100vw">
      <SEO title={group && group.name ? group.name : 'Error'} />
      <CreateEventModal
        groupId={groupId}
        isOpen={createModalControl.isOpen}
        onClose={onModalClose}
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
                <EventList groupId={groupId} />
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
