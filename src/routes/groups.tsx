import { GraphQLResult } from '@aws-amplify/api';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Stack,
  HStack,
  Text,
} from '@chakra-ui/core';
import { DeleteIcon } from '@chakra-ui/icons';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { ListGroupsQuery } from '~/API';
import Layout from '~/components/layout';
import SEO from '~/components/seo';
import { createGroup, deleteGroup } from '~/graphql/mutations';
import { listGroups } from '~/graphql/queries';
import { Group } from '~/graphql/types';
import { RouteComponentProps } from '@reach/router';

const GroupsRoute: React.FC<RouteComponentProps> = () => {
  const [formState, setFormState] = useState({ name: '' });
  const [groups, setGroups] = useState<Array<Group>>([]);

  useEffect(() => {
    fetchGroups();
  }, []);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    addGroup();
  }

  async function fetchGroups(): Promise<void> {
    try {
      const { data } = (await API.graphql(
        graphqlOperation(listGroups)
      )) as GraphQLResult<ListGroupsQuery>;

      if (data && data.listGroups) {
        setGroups(data.listGroups.items as Array<Group> | []);
      }
    } catch (error) {
      console.error('There was a problem fetching groups:\n', error);
    }
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

  const GroupBox = ({ groupId, name }: { groupId: string; name: string }) => {
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
        />
      </HStack>
    );
  };

  const generateGroupList = (groups: Group[]) => (
    <Stack>
      {groups.map(({ id, name }) => (
        <GroupBox key={id} groupId={id} name={name} />
      ))}
    </Stack>
  );

  return (
    <Layout>
      <SEO title="Home" />
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
        {generateGroupList(groups)}
      </Box>
    </Layout>
  );
};

export default GroupsRoute;
