import React from 'react';
import {
  Box,
  HStack,
  useRadio,
  Text,
  IconButton,
  useRadioGroup,
  Stack,
} from '@chakra-ui/core';
import { DeleteIcon } from '@chakra-ui/icons';
import { Group } from '~/graphql/types';

type GroupRowProps = {
  group: Group;
  editable: boolean;
  onDelete(id: string): void;
};

const GroupRow: React.FC<GroupRowProps> = props => {
  const { group, onDelete: handleDelete, editable } = props;
  const { getInputProps, getCheckboxProps } = useRadio(
    // @ts-ignore
    props,
  );

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <HStack
        {...checkbox}
        cursor="pointer"
        as={Box}
        p={2}
        shadow="sm"
        borderWidth="1px"
        borderRadius="md"
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
      >
        <Text textTransform="uppercase">{group.name}</Text>
        <IconButton
          size="xs"
          icon={<DeleteIcon />}
          aria-label={`Delete ${group.name}`}
          style={{ marginLeft: 'auto' }}
          onClick={() => {
            handleDelete(group.id);
          }}
          disabled={!editable}
        />
      </HStack>
    </Box>
  );
};

type GroupListProps = {
  groups: Array<Group>;
  userSub: string;
  handleDelete(id: string): void;
};

const GroupList: React.FC<GroupListProps> = ({
  groups,
  userSub,
  handleDelete,
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'group',
    defaultValue: 'unnamed',
  });

  const radioGroup = getRootProps();

  return (
    <Stack {...radioGroup}>
      {groups.map(group => {
        const radio = getRadioProps({ value: group.name });
        return (
          <GroupRow
            key={group.name}
            group={group}
            editable={userSub === group.owner}
            onDelete={handleDelete}
            {...radio}
          />
        );
      })}
    </Stack>
  );
};

export default GroupList;
