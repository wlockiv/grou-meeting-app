import { Center, Container, Heading } from '@chakra-ui/core';
import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { SEO } from '~/components';

const GroupsHome: React.FC<RouteComponentProps> = () => {
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
