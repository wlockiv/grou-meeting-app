import { GraphQLResult } from '@aws-amplify/api';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Stack,
} from '@chakra-ui/core';
import { RouteComponentProps } from '@reach/router';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import * as APIt from '~/API';
import { GroupList } from '~/components';
import Layout from '~/components/layout';
import SEO from '~/components/seo';
import { createGroup, deleteGroup } from '~/graphql/mutations';
import { listGroups } from '~/graphql/queries';
import { Group } from '~/graphql/types';
import { getUser, isLoggedIn } from '~/services/auth';

const GroupsRoute: React.FC<RouteComponentProps> = () => {
  const [formState, setFormState] = useState({ name: '' });
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

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    addGroup();
  }

  async function handleDelete(id: string) {
    await API.graphql(graphqlOperation(deleteGroup, { input: { id } }));
    await fetchGroups();
  }

  async function addGroup(): Promise<void> {
    if (!formState.name) return;
    try {
      const group = { ...formState };
      setFormState({ name: '' });
      await API.graphql(graphqlOperation(createGroup, { input: group }));
      await fetchGroups();
    } catch (error) {
      console.error('There was a problem adding a group:\n', error);
    }
  }

  return (
    <Layout currentUser={currentUser} title={'Home'}>
      <SEO title="Home" />
      {loading ? (
        <Center h="50vh">
          <Spinner size="xl" />
        </Center>
      ) : (
        <>
          <Box as="form" maxW="sm" mb={12} mx="auto" onSubmit={handleSubmit}>
            <Stack spacing={3} m="auto">
              <FormControl id="name">
                <FormLabel htmlFor="name">Group Name</FormLabel>
                <Input
                  name="name"
                  isRequired
                  value={formState.name}
                  onChange={handleInputChange}
                  aria-describedby="What would you like to name the group?"
                  placeholder="Ravenclaw"
                />
                <FormHelperText>
                  What would you like to name your new group?
                </FormHelperText>
              </FormControl>
              <Button colorScheme="teal" type="submit">
                Create Group!
              </Button>
            </Stack>
          </Box>
          <Box id="group-list" maxWidth="sm" margin="auto">
            <Heading mb={4} textAlign="center">
              Existing Groups
            </Heading>
            <GroupList
              groups={groups}
              userSub={currentUser ? currentUser.username : ''}
              handleDelete={handleDelete}
            />
          </Box>
        </>
      )}
    </Layout>
  );
};

export default GroupsRoute;
