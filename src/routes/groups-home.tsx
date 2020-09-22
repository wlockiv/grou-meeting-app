import { Center, Container, Heading } from '@chakra-ui/core';
import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { SEO } from '~/components';

const GroupsHome: React.FC<RouteComponentProps> = () => {
  // const [formState, setFormState] = useState({ name: '' });
  // const [groups, setGroups] = useState<Array<Group>>([]);
  // const [currentUser, setCurrentUser] = useState<CognitoUserInfo>();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   let mounted = true;
  //   const fetchUser = async () => {
  //     const status = await isLoggedIn();
  //     if (mounted && status) {
  //     if (mounted && status) {
  //       setCurrentUser(await getUser());
  //       setLoading(false);
  //     }
  //   };
  //
  //   fetchUser();
  //   fetchGroups();
  //
  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  // const {
  //   isOpen: isNavOpen,
  //   onOpen: onNavOpen,
  //   onClose: onNavClose,
  // } = useDisclosure();

  // async function fetchGroups(): Promise<void> {
  //   try {
  //     const { data } = (await API.graphql(
  //       graphqlOperation(listGroups),
  //     )) as GraphQLResult<APIt.ListGroupsQuery>;
  //
  //     if (data && data.listGroups) {
  //       setGroups(data.listGroups.items as Array<Group> | []);
  //     }
  //   } catch (error) {
  //     console.error('There was a problem fetching groups:\n', error);
  //   }
  // }

  // function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
  //   const { name, value } = event.target;
  //   setFormState({ ...formState, [name]: value });
  // }
  //
  // function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
  //   event.preventDefault();
  //   addGroup();
  // }

  // async function handleDelete(id: string) {
  //   await API.graphql(graphqlOperation(deleteGroup, { input: { id } }));
  //   await fetchGroups();
  // }

  // async function addGroup(): Promise<void> {
  //   if (!formState.name) return;
  //   try {
  //     const group = { ...formState };
  //     setFormState({ name: '' });
  //     await API.graphql(graphqlOperation(createGroup, { input: group }));
  //     await fetchGroups();
  //   } catch (error) {
  //     console.error('There was a problem adding a group:\n', error);
  //   }
  // }

  return (
    <Container maxW="100vw">
      <SEO title={'Groups Home'} />
      <Center maxWidth="sm" margin="auto" height={'50vh'}>
        <Heading mb={4} textAlign="center">
          Pick a Group from the drawer.
        </Heading>
      </Center>
    </Container>
  );
};

export default GroupsHome;
