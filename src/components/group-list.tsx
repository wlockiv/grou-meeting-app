import { Box, Button, Stack, Text } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { Group } from '~/graphql/types';
import { Link, useLocation } from '@reach/router';

type GroupRowProps = {
  group: Group;
  editable: boolean; // ? Repurpose "belongsToGroup"?
  onClick?(): void;
};

const GroupRow: React.FC<GroupRowProps> = props => {
  const { group, onClick } = props;
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const destination = `/app/group/${group.id}`;

  useEffect(() => {
    setIsActive(location.pathname === destination);
  }, [location]);

  const getIsActiveProps = () => ({
    variant: isActive ? 'solid' : 'outline',
    colorScheme: isActive ? 'teal' : undefined,
    shadow: isActive ? 'me' : 'sm',
  });

  return (
    <Box>
      <Button
        as={Link}
        to={destination}
        p={2}
        borderRadius="md"
        width="100%"
        onClick={onClick}
        {...getIsActiveProps()}
      >
        <Text textTransform="uppercase" width={'100%'} textAlign={'left'}>
          {group.name}
        </Text>
      </Button>
    </Box>
  );
};

type GroupListProps = {
  groups: Array<Group>;
  userSub: string;
  onItemClick?(): void;
};

const GroupList: React.FC<GroupListProps> = ({
  groups,
  userSub,
  onItemClick,
}) => {
  return (
    <Stack>
      {groups.map(group => {
        return (
          <GroupRow
            key={group.name}
            group={group}
            editable={userSub === group.owner}
            onClick={onItemClick}
          />
        );
      })}
    </Stack>
  );
};

export default GroupList;
