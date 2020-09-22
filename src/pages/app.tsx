import { Router } from '@reach/router';
import React, { useEffect, useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import GroupsHome from '~/routes/groups-home';
import { GroupList, Layout, NavDrawer } from '~/components';
import {
  Center,
  Container,
  useDisclosure,
  Spinner,
  IconButton,
} from '@chakra-ui/core';
import { Group } from '~/graphql/types';
import { getUser, isLoggedIn } from '~/services/auth';
import { API, graphqlOperation } from 'aws-amplify';
import { listGroups } from '~/graphql/queries';
import { GraphQLResult } from '@aws-amplify/api';
import * as APIt from '~/API';
import { ChevronRightIcon } from '@chakra-ui/icons';
import GroupPage from '~/routes/group-page';

const AppPage: React.FC = () => {
  const [groups, setGroups] = useState<Array<Group>>([]);
  const [currentUser, setCurrentUser] = useState<CognitoUserInfo>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchUser = async () => {
      const status = await isLoggedIn();
      if (mounted && status) {
        setCurrentUser(await getUser());
        setLoading(false);
      }
    };

    fetchUser();
    fetchGroups();

    return () => {
      mounted = false;
    };
  }, []);

  async function fetchGroups(): Promise<void> {
    try {
      const { data } = (await API.graphql(
        graphqlOperation(listGroups),
      )) as GraphQLResult<APIt.ListGroupsQuery>;

      if (data && data.listGroups) {
        setGroups(data.listGroups.items as Array<Group> | []);
      }
    } catch (error) {
      console.error('There was a problem fetching groups:\n', error);
    }
  }

  const {
    isOpen: isNavOpen,
    onOpen: onNavOpen,
    onClose: onNavClose,
  } = useDisclosure();

  return (
    <Layout>
      {loading ? (
        <Center height={'50vh'}>
          <Spinner size={'lg'} />
        </Center>
      ) : (
        <Container maxW={'100vw'}>
          <IconButton
            icon={<ChevronRightIcon />}
            aria-label={'Open menu'}
            onClick={onNavOpen}
            borderRadius="full"
            colorScheme="pink"
            shadow={'md'}
          />
          <NavDrawer isOpen={isNavOpen} onOpen={onNavOpen} onClose={onNavClose}>
            <GroupList
              groups={groups}
              userSub={currentUser ? currentUser.username : ''}
              onItemClick={onNavClose}
            />
          </NavDrawer>
          <Router>
            <GroupsHome path="/app/groups" />
            <GroupPage path="/app/group/:groupId" />
          </Router>
        </Container>
      )}
    </Layout>
  );
};

export default withAuthenticator(AppPage, { usernameAlias: 'email' });
