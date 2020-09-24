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

export type CreateMeetingInput = {
  groupId: string,
  title: string,
  description: string,
  date?: string | null,
};

export type ModelMeetingConditionInput = {
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  and?: Array< ModelMeetingConditionInput | null > | null,
  or?: Array< ModelMeetingConditionInput | null > | null,
  not?: ModelMeetingConditionInput | null,
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

export type UpdateMeetingInput = {
  id: string,
  title?: string | null,
  date?: string | null,
  description?: string | null,
  groupId?: string | null,
};

export type DeleteMeetingInput = {
  id?: string | null,
};

export type CreateMemberInput = {
  firstName: string,
  lastName: string,
  email: string,
  mobileNumber: string,
  groupId: string,
};

export type ModelMemberConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  mobileNumber?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  and?: Array< ModelMemberConditionInput | null > | null,
  or?: Array< ModelMemberConditionInput | null > | null,
  not?: ModelMemberConditionInput | null,
};

export type UpdateMemberInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  mobileNumber?: string | null,
  groupId?: string | null,
};

export type DeleteMemberInput = {
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

export type ModelMeetingFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  and?: Array< ModelMeetingFilterInput | null > | null,
  or?: Array< ModelMeetingFilterInput | null > | null,
  not?: ModelMeetingFilterInput | null,
};

export type ModelMemberFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  mobileNumber?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  and?: Array< ModelMemberFilterInput | null > | null,
  or?: Array< ModelMemberFilterInput | null > | null,
  not?: ModelMemberFilterInput | null,
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
    meetings:  {
      __typename: "ModelMeetingConnection",
      items:  Array< {
        __typename: "Meeting",
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
    members:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        mobileNumber: string,
        groupId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
    meetings:  {
      __typename: "ModelMeetingConnection",
      items:  Array< {
        __typename: "Meeting",
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
    members:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        mobileNumber: string,
        groupId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
    meetings:  {
      __typename: "ModelMeetingConnection",
      items:  Array< {
        __typename: "Meeting",
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
    members:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        mobileNumber: string,
        groupId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMeetingMutationVariables = {
  input: CreateMeetingInput,
  condition?: ModelMeetingConditionInput | null,
};

export type CreateMeetingMutation = {
  createMeeting:  {
    __typename: "Meeting",
    id: string,
    title: string,
    date: string | null,
    description: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      meetings:  {
        __typename: "ModelMeetingConnection",
        nextToken: string | null,
      } | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMeetingMutationVariables = {
  input: UpdateMeetingInput,
  condition?: ModelMeetingConditionInput | null,
};

export type UpdateMeetingMutation = {
  updateMeeting:  {
    __typename: "Meeting",
    id: string,
    title: string,
    date: string | null,
    description: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      meetings:  {
        __typename: "ModelMeetingConnection",
        nextToken: string | null,
      } | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMeetingMutationVariables = {
  input: DeleteMeetingInput,
  condition?: ModelMeetingConditionInput | null,
};

export type DeleteMeetingMutation = {
  deleteMeeting:  {
    __typename: "Meeting",
    id: string,
    title: string,
    date: string | null,
    description: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      meetings:  {
        __typename: "ModelMeetingConnection",
        nextToken: string | null,
      } | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMemberMutationVariables = {
  input: CreateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type CreateMemberMutation = {
  createMember:  {
    __typename: "Member",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      meetings:  {
        __typename: "ModelMeetingConnection",
        nextToken: string | null,
      } | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMemberMutationVariables = {
  input: UpdateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type UpdateMemberMutation = {
  updateMember:  {
    __typename: "Member",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      meetings:  {
        __typename: "ModelMeetingConnection",
        nextToken: string | null,
      } | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMemberMutationVariables = {
  input: DeleteMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type DeleteMemberMutation = {
  deleteMember:  {
    __typename: "Member",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      meetings:  {
        __typename: "ModelMeetingConnection",
        nextToken: string | null,
      } | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
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
    meetings:  {
      __typename: "ModelMeetingConnection",
      items:  Array< {
        __typename: "Meeting",
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
    members:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        mobileNumber: string,
        groupId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
      meetings:  {
        __typename: "ModelMeetingConnection",
        nextToken: string | null,
      } | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMeetingQueryVariables = {
  id: string,
};

export type GetMeetingQuery = {
  getMeeting:  {
    __typename: "Meeting",
    id: string,
    title: string,
    date: string | null,
    description: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      meetings:  {
        __typename: "ModelMeetingConnection",
        nextToken: string | null,
      } | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMeetingsQueryVariables = {
  filter?: ModelMeetingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMeetingsQuery = {
  listMeetings:  {
    __typename: "ModelMeetingConnection",
    items:  Array< {
      __typename: "Meeting",
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
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMemberQueryVariables = {
  id: string,
};

export type GetMemberQuery = {
  getMember:  {
    __typename: "Member",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      meetings:  {
        __typename: "ModelMeetingConnection",
        nextToken: string | null,
      } | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMembersQueryVariables = {
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersQuery = {
  listMembers:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      mobileNumber: string,
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
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateMeetingByGroupSubscriptionVariables = {
  groupId: string,
};

export type OnCreateMeetingByGroupSubscription = {
  onCreateMeetingByGroup:  {
    __typename: "Meeting",
    id: string,
    title: string,
    date: string | null,
    description: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      meetings:  {
        __typename: "ModelMeetingConnection",
        nextToken: string | null,
      } | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
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
    meetings:  {
      __typename: "ModelMeetingConnection",
      items:  Array< {
        __typename: "Meeting",
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
    members:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        mobileNumber: string,
        groupId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
    meetings:  {
      __typename: "ModelMeetingConnection",
      items:  Array< {
        __typename: "Meeting",
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
    members:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        mobileNumber: string,
        groupId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
    meetings:  {
      __typename: "ModelMeetingConnection",
      items:  Array< {
        __typename: "Meeting",
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
    members:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        mobileNumber: string,
        groupId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMeetingSubscription = {
  onCreateMeeting:  {
    __typename: "Meeting",
    id: string,
    title: string,
    date: string | null,
    description: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      meetings:  {
        __typename: "ModelMeetingConnection",
        nextToken: string | null,
      } | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMeetingSubscription = {
  onUpdateMeeting:  {
    __typename: "Meeting",
    id: string,
    title: string,
    date: string | null,
    description: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      meetings:  {
        __typename: "ModelMeetingConnection",
        nextToken: string | null,
      } | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMeetingSubscription = {
  onDeleteMeeting:  {
    __typename: "Meeting",
    id: string,
    title: string,
    date: string | null,
    description: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      meetings:  {
        __typename: "ModelMeetingConnection",
        nextToken: string | null,
      } | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMemberSubscription = {
  onCreateMember:  {
    __typename: "Member",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      meetings:  {
        __typename: "ModelMeetingConnection",
        nextToken: string | null,
      } | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMemberSubscription = {
  onUpdateMember:  {
    __typename: "Member",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      meetings:  {
        __typename: "ModelMeetingConnection",
        nextToken: string | null,
      } | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMemberSubscription = {
  onDeleteMember:  {
    __typename: "Member",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      meetings:  {
        __typename: "ModelMeetingConnection",
        nextToken: string | null,
      } | null,
      members:  {
        __typename: "ModelMemberConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
