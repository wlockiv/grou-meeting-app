import React from 'react';
import {
  Button,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  Text,
} from '@chakra-ui/core';

type NavDrawerProps = {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
};

const NavDrawer: React.FC<NavDrawerProps> = ({ isOpen, onOpen, onClose }) => {
  // @ts-ignore
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      // finalFocusRef={btnRef as any}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Groups</DrawerHeader>
          <DrawerBody>
            <Text>First Group Here</Text>
            <Text>Second Group Here</Text>
            <Text>Third Group Here</Text>
            <Text>Fourth Group Here</Text>
            <Text>Fifth Group Here</Text>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavDrawer;
