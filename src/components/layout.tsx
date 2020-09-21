/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import {
  Button,
  Flex,
  HStack,
  Text,
  IconButton,
  useDisclosure,
} from '@chakra-ui/core';
import { HamburgerIcon } from '@chakra-ui/icons';

import { navigate } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { logout } from '~/services/auth';
import { NavDrawer } from '~/components';

type LayoutProps = {
  children: React.ReactNode;
  currentUser?:
    | {
        email: string;
      }
    | undefined;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  currentUser,
  title,
}: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const {
    isOpen: isNavOpen,
    onOpen: onNavOpen,
    onClose: onNavClose,
  } = useDisclosure();

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
          <IconButton
            icon={<HamburgerIcon />}
            aria-label={'Open menu'}
            size={'sm'}
            onClick={onNavOpen}
          />
          <Text pl={3} color="white">
            Groups {`/ ${title ? title : data.site.siteMetadata.title}`}
          </Text>
        </HStack>
        {currentUser ? (
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
      <NavDrawer isOpen={isNavOpen} onOpen={onNavOpen} onClose={onNavClose} />
      <main>{children}</main>
      <footer>
        {/* © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      </footer>
    </>
  );
};

export default Layout;
