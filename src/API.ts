/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGroupInput = {
  name: string,
};

export type ModelGroupConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateGroupInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
};

export type DeleteGroupInput = {
  id?: string | null,
};

export type CreateGroupMemberInput = {
  groupId: string,
  userId: string,
};

export type ModelGroupMemberConditionInput = {
  groupId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelGroupMemberConditionInput | null > | null,
  or?: Array< ModelGroupMemberConditionInput | null > | null,
  not?: ModelGroupMemberConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateGroupMemberInput = {
  id: string,
  groupId?: string | null,
  userId?: string | null,
};

export type DeleteGroupMemberInput = {
  id?: string | null,
};

export type CreateEventInput = {
  groupId: string,
  title: string,
  description: string,
  date?: string | null,
};

export type ModelEventConditionInput = {
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type UpdateEventInput = {
  id: string,
  title?: string | null,
  date?: string | null,
  description?: string | null,
  groupId?: string | null,
};

export type DeleteEventInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email: string,
  mobileNumber?: string | null,
  groupId?: string | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  mobileNumber?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  mobileNumber?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  mobileNumber?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup:  {
    __typename: "Group",
    id: string,
    name: string,
    events:  {
      __typename: "ModelEventConnection",
      nextToken: string | null,
    } | null,
    members:  {
      __typename: "ModelGroupMemberConnection",
      nextToken: string | null,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup:  {
    __typename: "Group",
    id: string,
    name: string,
    events:  {
      __typename: "ModelEventConnection",
      nextToken: string | null,
    } | null,
    members:  {
      __typename: "ModelGroupMemberConnection",
      nextToken: string | null,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup:  {
    __typename: "Group",
    id: string,
    name: string,
    events:  {
      __typename: "ModelEventConnection",
      nextToken: string | null,
    } | null,
    members:  {
      __typename: "ModelGroupMemberConnection",
      nextToken: string | null,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupMemberMutationVariables = {
  input: CreateGroupMemberInput,
  condition?: ModelGroupMemberConditionInput | null,
};

export type CreateGroupMemberMutation = {
  createGroupMember:  {
    __typename: "GroupMember",
    id: string,
    groupId: string,
    userId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      email: string,
      mobileNumber: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupMemberMutationVariables = {
  input: UpdateGroupMemberInput,
  condition?: ModelGroupMemberConditionInput | null,
};

export type UpdateGroupMemberMutation = {
  updateGroupMember:  {
    __typename: "GroupMember",
    id: string,
    groupId: string,
    userId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      email: string,
      mobileNumber: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupMemberMutationVariables = {
  input: DeleteGroupMemberInput,
  condition?: ModelGroupMemberConditionInput | null,
};

export type DeleteGroupMemberMutation = {
  deleteGroupMember:  {
    __typename: "GroupMember",
    id: string,
    groupId: string,
    userId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      email: string,
      mobileNumber: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string | null,
    description: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string | null,
    description: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string | null,
    description: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    firstName: string | null,
    lastName: string | null,
    email: string,
    mobileNumber: string | null,
    groups:  {
      __typename: "ModelGroupMemberConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    firstName: string | null,
    lastName: string | null,
    email: string,
    mobileNumber: string | null,
    groups:  {
      __typename: "ModelGroupMemberConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    firstName: string | null,
    lastName: string | null,
    email: string,
    mobileNumber: string | null,
    groups:  {
      __typename: "ModelGroupMemberConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup:  {
    __typename: "Group",
    id: string,
    name: string,
    events:  {
      __typename: "ModelEventConnection",
      nextToken: string | null,
    } | null,
    members:  {
      __typename: "ModelGroupMemberConnection",
      nextToken: string | null,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string,
      name: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    firstName: string | null,
    lastName: string | null,
    email: string,
    mobileNumber: string | null,
    groups:  {
      __typename: "ModelGroupMemberConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      email: string,
      mobileNumber: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string | null,
    description: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      title: string,
      date: string | null,
      description: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateEventByGroupSubscriptionVariables = {
  groupId: string,
};

export type OnCreateEventByGroupSubscription = {
  onCreateEventByGroup:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string | null,
    description: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup:  {
    __typename: "Group",
    id: string,
    name: string,
    events:  {
      __typename: "ModelEventConnection",
      nextToken: string | null,
    } | null,
    members:  {
      __typename: "ModelGroupMemberConnection",
      nextToken: string | null,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup:  {
    __typename: "Group",
    id: string,
    name: string,
    events:  {
      __typename: "ModelEventConnection",
      nextToken: string | null,
    } | null,
    members:  {
      __typename: "ModelGroupMemberConnection",
      nextToken: string | null,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup:  {
    __typename: "Group",
    id: string,
    name: string,
    events:  {
      __typename: "ModelEventConnection",
      nextToken: string | null,
    } | null,
    members:  {
      __typename: "ModelGroupMemberConnection",
      nextToken: string | null,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupMemberSubscription = {
  onCreateGroupMember:  {
    __typename: "GroupMember",
    id: string,
    groupId: string,
    userId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      email: string,
      mobileNumber: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupMemberSubscription = {
  onUpdateGroupMember:  {
    __typename: "GroupMember",
    id: string,
    groupId: string,
    userId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      email: string,
      mobileNumber: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupMemberSubscription = {
  onDeleteGroupMember:  {
    __typename: "GroupMember",
    id: string,
    groupId: string,
    userId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      email: string,
      mobileNumber: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    firstName: string | null,
    lastName: string | null,
    email: string,
    mobileNumber: string | null,
    groups:  {
      __typename: "ModelGroupMemberConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    firstName: string | null,
    lastName: string | null,
    email: string,
    mobileNumber: string | null,
    groups:  {
      __typename: "ModelGroupMemberConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    firstName: string | null,
    lastName: string | null,
    email: string,
    mobileNumber: string | null,
    groups:  {
      __typename: "ModelGroupMemberConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string | null,
    description: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string | null,
    description: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string | null,
    description: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
