import { GraphQLResult } from '@aws-amplify/api';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/core';
import { DeleteIcon } from '@chakra-ui/icons';
import { RouteComponentProps } from '@reach/router';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { ListGroupsQuery } from '~/API';
import Layout from '~/components/layout';
import SEO from '~/components/seo';
import { createGroup, deleteGroup } from '~/graphql/mutations';
import { listGroups } from '~/graphql/queries';
import { getUser, isLoggedIn } from '~/services/auth';

const GroupsRoute: React.FC<RouteComponentProps> = () => {
  const [formState, setFormState] = useState({ name: '' });
  const [groups, setGroups] = useState<Array<any>>([]);
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
      )) as GraphQLResult<ListGroupsQuery>;

      if (data && data.listGroups) {
        setGroups(data.listGroups.items as Array<any> | []);
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

  const GroupRow = ({
    groupId,
    name,
    editable,
  }: {
    groupId: string;
    name: string;
    editable: boolean;
  }) => {
    return (
      <HStack as={Box} p={2} shadow="sm" borderWidth="1px" borderRadius="md">
        <Text textTransform="uppercase">{name}</Text>
        <IconButton
          size="xs"
          icon={<DeleteIcon />}
          aria-label={`Delete ${name}`}
          style={{ marginLeft: 'auto' }}
          onClick={() => {
            handleDelete(groupId);
          }}
          disabled={!editable}
        />
      </HStack>
    );
  };

  const generateGroupList = (groups: any[], userSub: string) => {
    return (
      <Stack>
        {groups.map(({ id, name, owner }) => (
          <GroupRow
            key={id}
            groupId={id}
            editable={userSub === owner}
            name={name}
          />
        ))}
      </Stack>
    );
  };

  return (
    <Layout currentUser={currentUser}>
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
            {generateGroupList(groups, currentUser ? currentUser.username : '')}
          </Box>
        </>
      )}
    </Layout>
  );
};

export default GroupsRoute;
