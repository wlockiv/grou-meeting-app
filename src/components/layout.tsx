/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Button, Flex, HStack, Text } from '@chakra-ui/core';
import { navigate } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { logout, isLoggedIn } from '~/services/auth';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }: LayoutProps) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    async function fetchLoginStatus() {
      setLoggedIn(await isLoggedIn());
    }

    fetchLoginStatus();
  }, []);

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
        px={3}
        py={4}
        bg="gray.700"
        justifyContent="space-between"
      >
        <HStack>
          <Text pl={3} color="white">
            Groups {`/ ${title ? title : data.site.siteMetadata.title}`}
          </Text>
        </HStack>
        {loggedIn ? (
          <HStack>
            <Button mr={2} size="sm" onClick={handleLogout}>
              Log Out
            </Button>
          </HStack>
        ) : (
          <Button mr={2} size="sm" onClick={handleSignIn}>
            Sign In
          </Button>
        )}
      </Flex>
      <main>{children}</main>
      {/*<footer></footer>*/}
    </>
  );
};

export default Layout;
