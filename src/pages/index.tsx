import { Box, Center, Divider, Heading, Text } from '@chakra-ui/core';
import React from 'react';
import Layout from '~/components/layout';
import SEO from '~/components/seo';

const IndexPage: React.FC = () => {
  return (
    <Layout title="Home">
      <SEO title="Home" />
      <Center h="65vh" mb={12} mx="auto">
        <Box textAlign="center">
          <Heading textTransform="uppercase">Group Site</Heading>
          <Divider />
          <Text>get together in person</Text>
        </Box>
      </Center>
    </Layout>
  );
};

export default IndexPage;
