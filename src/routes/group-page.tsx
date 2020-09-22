import React from 'react';
import { Box, Center, Container, Heading, Text } from '@chakra-ui/core';
import { RouteComponentProps } from '@reach/router';

type GroupPageURLParams = {
  groupId?: string;
};

const GroupPage: React.FC<RouteComponentProps & GroupPageURLParams> = ({
  groupId,
}) => {
  return (
    <Container maxW="100vw">
      <Center maxWidth="sm" margin="auto" height={'50vh'}>
        <Box>
          <Heading mb={4} textAlign="center">
            This is a group page.
          </Heading>
          <Text>{groupId}</Text>
        </Box>
      </Center>
    </Container>
  );
};

export default GroupPage;
