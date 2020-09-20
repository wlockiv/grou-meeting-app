/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Avatar, Button, Flex, HStack, Text } from '@chakra-ui/core';
import { navigate } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { logout } from '~/services/auth';

type LayoutProps = {
  children: React.ReactNode;
  currentUser:
    | {
        email: string;
      }
    | undefined;
};

const Layout: React.FC<LayoutProps> = ({ children, currentUser }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  async function handleLogout(): Promise<void> {
    await logout();
    await navigate('/');
  }

  async function handleSignIn(): Promise<void> {
    await navigate('/app/groups');
  }

  return (
    <>
      <Flex
        mb={6}
        w="100%"
        px={5}
        py={4}
        bg="gray.700"
        justifyContent="space-between"
      >
        <HStack>
          <Text pl={3} color="white">
            Group App
          </Text>
        </HStack>
        {currentUser ? (
          <HStack>
            <Button mr={2} size="sm" onClick={handleLogout}>
              Log Out
            </Button>
            <Avatar name={currentUser.email} size="sm" />
          </HStack>
        ) : (
          <Button mr={2} size="sm" onClick={handleSignIn}>
            Sign In
          </Button>
        )}
      </Flex>
      <main>{children}</main>
      <footer>
        {/* © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
