export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 DateTime](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) string. In other words, this scalar type accepts datetime strings of the form `YYYY-MM-DDThh:mm:ss.SSSZ`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-01-01T00:00Z**" and "**-9999-01-01T00:00Z**" are both valid datetime strings.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**1970-01-01T12:00:00.2Z**", "**1970-01-01T12:00:00.277Z**" and "**1970-01-01T12:00:00.123456789Z**" are all valid datetime strings.  The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  The [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) is compulsory for this scalar. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDateTime: any;
};


export type CreateGroupInput = {
  name: Scalars['String'];
};

export type CreateMeetingInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  groupId: Scalars['ID'];
};

export type CreateMemberInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  mobileNumber: Scalars['String'];
  groupId: Scalars['ID'];
};

export type DeleteGroupInput = {
  id?: Maybe<Scalars['ID']>;
};

export type DeleteMeetingInput = {
  id?: Maybe<Scalars['ID']>;
};

export type DeleteMemberInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Group = {
  id: Scalars['ID'];
  name: Scalars['String'];
  meetings?: Maybe<ModelMeetingConnection>;
  members?: Maybe<ModelMemberConnection>;
  createdAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
};


export type GroupMeetingsArgs = {
  filter?: Maybe<ModelMeetingFilterInput>;
  sortDirection?: Maybe<ModelSortDirection>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};


export type GroupMembersArgs = {
  filter?: Maybe<ModelMemberFilterInput>;
  sortDirection?: Maybe<ModelSortDirection>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Meeting = {
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  groupId: Scalars['ID'];
  group?: Maybe<Group>;
  createdAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
};

export type Member = {
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  mobileNumber: Scalars['String'];
  groupId: Scalars['ID'];
  group?: Maybe<Group>;
  createdAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
};

export enum ModelAttributeTypes {
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet',
  Null = '_null'
}

export type ModelBooleanInput = {
  ne?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['Boolean']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ModelFloatInput = {
  ne?: Maybe<Scalars['Float']>;
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<Array<Maybe<Scalars['Float']>>>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ModelGroupConditionInput = {
  name?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelGroupConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelGroupConditionInput>>>;
  not?: Maybe<ModelGroupConditionInput>;
};

export type ModelGroupConnection = {
  items?: Maybe<Array<Maybe<Group>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelGroupFilterInput = {
  id?: Maybe<ModelIdInput>;
  name?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelGroupFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelGroupFilterInput>>>;
  not?: Maybe<ModelGroupFilterInput>;
};

export type ModelIdInput = {
  ne?: Maybe<Scalars['ID']>;
  eq?: Maybe<Scalars['ID']>;
  le?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  ge?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  contains?: Maybe<Scalars['ID']>;
  notContains?: Maybe<Scalars['ID']>;
  between?: Maybe<Array<Maybe<Scalars['ID']>>>;
  beginsWith?: Maybe<Scalars['ID']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
  size?: Maybe<ModelSizeInput>;
};

export type ModelIntInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ModelMeetingConditionInput = {
  title?: Maybe<ModelStringInput>;
  description?: Maybe<ModelStringInput>;
  groupId?: Maybe<ModelIdInput>;
  and?: Maybe<Array<Maybe<ModelMeetingConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelMeetingConditionInput>>>;
  not?: Maybe<ModelMeetingConditionInput>;
};

export type ModelMeetingConnection = {
  items?: Maybe<Array<Maybe<Meeting>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelMeetingFilterInput = {
  id?: Maybe<ModelIdInput>;
  title?: Maybe<ModelStringInput>;
  description?: Maybe<ModelStringInput>;
  groupId?: Maybe<ModelIdInput>;
  and?: Maybe<Array<Maybe<ModelMeetingFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelMeetingFilterInput>>>;
  not?: Maybe<ModelMeetingFilterInput>;
};

export type ModelMemberConditionInput = {
  firstName?: Maybe<ModelStringInput>;
  lastName?: Maybe<ModelStringInput>;
  email?: Maybe<ModelStringInput>;
  mobileNumber?: Maybe<ModelStringInput>;
  groupId?: Maybe<ModelIdInput>;
  and?: Maybe<Array<Maybe<ModelMemberConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelMemberConditionInput>>>;
  not?: Maybe<ModelMemberConditionInput>;
};

export type ModelMemberConnection = {
  items?: Maybe<Array<Maybe<Member>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelMemberFilterInput = {
  id?: Maybe<ModelIdInput>;
  firstName?: Maybe<ModelStringInput>;
  lastName?: Maybe<ModelStringInput>;
  email?: Maybe<ModelStringInput>;
  mobileNumber?: Maybe<ModelStringInput>;
  groupId?: Maybe<ModelIdInput>;
  and?: Maybe<Array<Maybe<ModelMemberFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelMemberFilterInput>>>;
  not?: Maybe<ModelMemberFilterInput>;
};

export type ModelSizeInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  notContains?: Maybe<Scalars['String']>;
  between?: Maybe<Array<Maybe<Scalars['String']>>>;
  beginsWith?: Maybe<Scalars['String']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
  size?: Maybe<ModelSizeInput>;
};

export type Mutation = {
  createGroup?: Maybe<Group>;
  updateGroup?: Maybe<Group>;
  deleteGroup?: Maybe<Group>;
  createMeeting?: Maybe<Meeting>;
  updateMeeting?: Maybe<Meeting>;
  deleteMeeting?: Maybe<Meeting>;
  createMember?: Maybe<Member>;
  updateMember?: Maybe<Member>;
  deleteMember?: Maybe<Member>;
};


export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
  condition?: Maybe<ModelGroupConditionInput>;
};


export type MutationUpdateGroupArgs = {
  input: UpdateGroupInput;
  condition?: Maybe<ModelGroupConditionInput>;
};


export type MutationDeleteGroupArgs = {
  input: DeleteGroupInput;
  condition?: Maybe<ModelGroupConditionInput>;
};


export type MutationCreateMeetingArgs = {
  input: CreateMeetingInput;
  condition?: Maybe<ModelMeetingConditionInput>;
};


export type MutationUpdateMeetingArgs = {
  input: UpdateMeetingInput;
  condition?: Maybe<ModelMeetingConditionInput>;
};


export type MutationDeleteMeetingArgs = {
  input: DeleteMeetingInput;
  condition?: Maybe<ModelMeetingConditionInput>;
};


export type MutationCreateMemberArgs = {
  input: CreateMemberInput;
  condition?: Maybe<ModelMemberConditionInput>;
};


export type MutationUpdateMemberArgs = {
  input: UpdateMemberInput;
  condition?: Maybe<ModelMemberConditionInput>;
};


export type MutationDeleteMemberArgs = {
  input: DeleteMemberInput;
  condition?: Maybe<ModelMemberConditionInput>;
};

export type Query = {
  getGroup?: Maybe<Group>;
  listGroups?: Maybe<ModelGroupConnection>;
  getMeeting?: Maybe<Meeting>;
  listMeetings?: Maybe<ModelMeetingConnection>;
  getMember?: Maybe<Member>;
  listMembers?: Maybe<ModelMemberConnection>;
};


export type QueryGetGroupArgs = {
  id: Scalars['ID'];
};


export type QueryListGroupsArgs = {
  filter?: Maybe<ModelGroupFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};


export type QueryGetMeetingArgs = {
  id: Scalars['ID'];
};


export type QueryListMeetingsArgs = {
  filter?: Maybe<ModelMeetingFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};


export type QueryGetMemberArgs = {
  id: Scalars['ID'];
};


export type QueryListMembersArgs = {
  filter?: Maybe<ModelMemberFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Subscription = {
  onCreateGroup?: Maybe<Group>;
  onUpdateGroup?: Maybe<Group>;
  onDeleteGroup?: Maybe<Group>;
  onCreateMeeting?: Maybe<Meeting>;
  onUpdateMeeting?: Maybe<Meeting>;
  onDeleteMeeting?: Maybe<Meeting>;
  onCreateMember?: Maybe<Member>;
  onUpdateMember?: Maybe<Member>;
  onDeleteMember?: Maybe<Member>;
};

export type UpdateGroupInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type UpdateMeetingInput = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['ID']>;
};

export type UpdateMemberInput = {
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['ID']>;
};

export type CreateGroupMutationVariables = Exact<{
  input: CreateGroupInput;
  condition?: Maybe<ModelGroupConditionInput>;
}>;


export type CreateGroupMutation = { createGroup?: Maybe<(
    Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
    & { meetings?: Maybe<(
      Pick<ModelMeetingConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<Pick<Meeting, 'id' | 'title' | 'description' | 'groupId' | 'createdAt' | 'updatedAt'>>>> }
    )>, members?: Maybe<(
      Pick<ModelMemberConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<Pick<Member, 'id' | 'firstName' | 'lastName' | 'email' | 'mobileNumber' | 'groupId' | 'createdAt' | 'updatedAt'>>>> }
    )> }
  )> };

export type UpdateGroupMutationVariables = Exact<{
  input: UpdateGroupInput;
  condition?: Maybe<ModelGroupConditionInput>;
}>;


export type UpdateGroupMutation = { updateGroup?: Maybe<(
    Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
    & { meetings?: Maybe<(
      Pick<ModelMeetingConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<Pick<Meeting, 'id' | 'title' | 'description' | 'groupId' | 'createdAt' | 'updatedAt'>>>> }
    )>, members?: Maybe<(
      Pick<ModelMemberConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<Pick<Member, 'id' | 'firstName' | 'lastName' | 'email' | 'mobileNumber' | 'groupId' | 'createdAt' | 'updatedAt'>>>> }
    )> }
  )> };

export type DeleteGroupMutationVariables = Exact<{
  input: DeleteGroupInput;
  condition?: Maybe<ModelGroupConditionInput>;
}>;


export type DeleteGroupMutation = { deleteGroup?: Maybe<(
    Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
    & { meetings?: Maybe<(
      Pick<ModelMeetingConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<Pick<Meeting, 'id' | 'title' | 'description' | 'groupId' | 'createdAt' | 'updatedAt'>>>> }
    )>, members?: Maybe<(
      Pick<ModelMemberConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<Pick<Member, 'id' | 'firstName' | 'lastName' | 'email' | 'mobileNumber' | 'groupId' | 'createdAt' | 'updatedAt'>>>> }
    )> }
  )> };

export type CreateMeetingMutationVariables = Exact<{
  input: CreateMeetingInput;
  condition?: Maybe<ModelMeetingConditionInput>;
}>;


export type CreateMeetingMutation = { createMeeting?: Maybe<(
    Pick<Meeting, 'id' | 'title' | 'description' | 'groupId' | 'createdAt' | 'updatedAt'>
    & { group?: Maybe<(
      Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { meetings?: Maybe<Pick<ModelMeetingConnection, 'nextToken'>>, members?: Maybe<Pick<ModelMemberConnection, 'nextToken'>> }
    )> }
  )> };

export type UpdateMeetingMutationVariables = Exact<{
  input: UpdateMeetingInput;
  condition?: Maybe<ModelMeetingConditionInput>;
}>;


export type UpdateMeetingMutation = { updateMeeting?: Maybe<(
    Pick<Meeting, 'id' | 'title' | 'description' | 'groupId' | 'createdAt' | 'updatedAt'>
    & { group?: Maybe<(
      Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { meetings?: Maybe<Pick<ModelMeetingConnection, 'nextToken'>>, members?: Maybe<Pick<ModelMemberConnection, 'nextToken'>> }
    )> }
  )> };

export type DeleteMeetingMutationVariables = Exact<{
  input: DeleteMeetingInput;
  condition?: Maybe<ModelMeetingConditionInput>;
}>;


export type DeleteMeetingMutation = { deleteMeeting?: Maybe<(
    Pick<Meeting, 'id' | 'title' | 'description' | 'groupId' | 'createdAt' | 'updatedAt'>
    & { group?: Maybe<(
      Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { meetings?: Maybe<Pick<ModelMeetingConnection, 'nextToken'>>, members?: Maybe<Pick<ModelMemberConnection, 'nextToken'>> }
    )> }
  )> };

export type CreateMemberMutationVariables = Exact<{
  input: CreateMemberInput;
  condition?: Maybe<ModelMemberConditionInput>;
}>;


export type CreateMemberMutation = { createMember?: Maybe<(
    Pick<Member, 'id' | 'firstName' | 'lastName' | 'email' | 'mobileNumber' | 'groupId' | 'createdAt' | 'updatedAt'>
    & { group?: Maybe<(
      Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { meetings?: Maybe<Pick<ModelMeetingConnection, 'nextToken'>>, members?: Maybe<Pick<ModelMemberConnection, 'nextToken'>> }
    )> }
  )> };

export type UpdateMemberMutationVariables = Exact<{
  input: UpdateMemberInput;
  condition?: Maybe<ModelMemberConditionInput>;
}>;


export type UpdateMemberMutation = { updateMember?: Maybe<(
    Pick<Member, 'id' | 'firstName' | 'lastName' | 'email' | 'mobileNumber' | 'groupId' | 'createdAt' | 'updatedAt'>
    & { group?: Maybe<(
      Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { meetings?: Maybe<Pick<ModelMeetingConnection, 'nextToken'>>, members?: Maybe<Pick<ModelMemberConnection, 'nextToken'>> }
    )> }
  )> };

export type DeleteMemberMutationVariables = Exact<{
  input: DeleteMemberInput;
  condition?: Maybe<ModelMemberConditionInput>;
}>;


export type DeleteMemberMutation = { deleteMember?: Maybe<(
    Pick<Member, 'id' | 'firstName' | 'lastName' | 'email' | 'mobileNumber' | 'groupId' | 'createdAt' | 'updatedAt'>
    & { group?: Maybe<(
      Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { meetings?: Maybe<Pick<ModelMeetingConnection, 'nextToken'>>, members?: Maybe<Pick<ModelMemberConnection, 'nextToken'>> }
    )> }
  )> };

export type GetGroupQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetGroupQuery = { getGroup?: Maybe<(
    Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
    & { meetings?: Maybe<(
      Pick<ModelMeetingConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<Pick<Meeting, 'id' | 'title' | 'description' | 'groupId' | 'createdAt' | 'updatedAt'>>>> }
    )>, members?: Maybe<(
      Pick<ModelMemberConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<Pick<Member, 'id' | 'firstName' | 'lastName' | 'email' | 'mobileNumber' | 'groupId' | 'createdAt' | 'updatedAt'>>>> }
    )> }
  )> };

export type ListGroupsQueryVariables = Exact<{
  filter?: Maybe<ModelGroupFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
}>;


export type ListGroupsQuery = { listGroups?: Maybe<(
    Pick<ModelGroupConnection, 'nextToken'>
    & { items?: Maybe<Array<Maybe<(
      Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { meetings?: Maybe<Pick<ModelMeetingConnection, 'nextToken'>>, members?: Maybe<Pick<ModelMemberConnection, 'nextToken'>> }
    )>>> }
  )> };

export type GetMeetingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetMeetingQuery = { getMeeting?: Maybe<(
    Pick<Meeting, 'id' | 'title' | 'description' | 'groupId' | 'createdAt' | 'updatedAt'>
    & { group?: Maybe<(
      Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { meetings?: Maybe<Pick<ModelMeetingConnection, 'nextToken'>>, members?: Maybe<Pick<ModelMemberConnection, 'nextToken'>> }
    )> }
  )> };

export type ListMeetingsQueryVariables = Exact<{
  filter?: Maybe<ModelMeetingFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
}>;


export type ListMeetingsQuery = { listMeetings?: Maybe<(
    Pick<ModelMeetingConnection, 'nextToken'>
    & { items?: Maybe<Array<Maybe<(
      Pick<Meeting, 'id' | 'title' | 'description' | 'groupId' | 'createdAt' | 'updatedAt'>
      & { group?: Maybe<Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>> }
    )>>> }
  )> };

export type GetMemberQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetMemberQuery = { getMember?: Maybe<(
    Pick<Member, 'id' | 'firstName' | 'lastName' | 'email' | 'mobileNumber' | 'groupId' | 'createdAt' | 'updatedAt'>
    & { group?: Maybe<(
      Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { meetings?: Maybe<Pick<ModelMeetingConnection, 'nextToken'>>, members?: Maybe<Pick<ModelMemberConnection, 'nextToken'>> }
    )> }
  )> };

export type ListMembersQueryVariables = Exact<{
  filter?: Maybe<ModelMemberFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
}>;


export type ListMembersQuery = { listMembers?: Maybe<(
    Pick<ModelMemberConnection, 'nextToken'>
    & { items?: Maybe<Array<Maybe<(
      Pick<Member, 'id' | 'firstName' | 'lastName' | 'email' | 'mobileNumber' | 'groupId' | 'createdAt' | 'updatedAt'>
      & { group?: Maybe<Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>> }
    )>>> }
  )> };

export type OnCreateGroupSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCreateGroupSubscription = { onCreateGroup?: Maybe<(
    Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
    & { meetings?: Maybe<(
      Pick<ModelMeetingConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<Pick<Meeting, 'id' | 'title' | 'description' | 'groupId' | 'createdAt' | 'updatedAt'>>>> }
    )>, members?: Maybe<(
      Pick<ModelMemberConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<Pick<Member, 'id' | 'firstName' | 'lastName' | 'email' | 'mobileNumber' | 'groupId' | 'createdAt' | 'updatedAt'>>>> }
    )> }
  )> };

export type OnUpdateGroupSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnUpdateGroupSubscription = { onUpdateGroup?: Maybe<(
    Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
    & { meetings?: Maybe<(
      Pick<ModelMeetingConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<Pick<Meeting, 'id' | 'title' | 'description' | 'groupId' | 'createdAt' | 'updatedAt'>>>> }
    )>, members?: Maybe<(
      Pick<ModelMemberConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<Pick<Member, 'id' | 'firstName' | 'lastName' | 'email' | 'mobileNumber' | 'groupId' | 'createdAt' | 'updatedAt'>>>> }
    )> }
  )> };

export type OnDeleteGroupSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnDeleteGroupSubscription = { onDeleteGroup?: Maybe<(
    Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
    & { meetings?: Maybe<(
      Pick<ModelMeetingConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<Pick<Meeting, 'id' | 'title' | 'description' | 'groupId' | 'createdAt' | 'updatedAt'>>>> }
    )>, members?: Maybe<(
      Pick<ModelMemberConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<Pick<Member, 'id' | 'firstName' | 'lastName' | 'email' | 'mobileNumber' | 'groupId' | 'createdAt' | 'updatedAt'>>>> }
    )> }
  )> };

export type OnCreateMeetingSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCreateMeetingSubscription = { onCreateMeeting?: Maybe<(
    Pick<Meeting, 'id' | 'title' | 'description' | 'groupId' | 'createdAt' | 'updatedAt'>
    & { group?: Maybe<(
      Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { meetings?: Maybe<Pick<ModelMeetingConnection, 'nextToken'>>, members?: Maybe<Pick<ModelMemberConnection, 'nextToken'>> }
    )> }
  )> };

export type OnUpdateMeetingSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnUpdateMeetingSubscription = { onUpdateMeeting?: Maybe<(
    Pick<Meeting, 'id' | 'title' | 'description' | 'groupId' | 'createdAt' | 'updatedAt'>
    & { group?: Maybe<(
      Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { meetings?: Maybe<Pick<ModelMeetingConnection, 'nextToken'>>, members?: Maybe<Pick<ModelMemberConnection, 'nextToken'>> }
    )> }
  )> };

export type OnDeleteMeetingSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnDeleteMeetingSubscription = { onDeleteMeeting?: Maybe<(
    Pick<Meeting, 'id' | 'title' | 'description' | 'groupId' | 'createdAt' | 'updatedAt'>
    & { group?: Maybe<(
      Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { meetings?: Maybe<Pick<ModelMeetingConnection, 'nextToken'>>, members?: Maybe<Pick<ModelMemberConnection, 'nextToken'>> }
    )> }
  )> };

export type OnCreateMemberSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCreateMemberSubscription = { onCreateMember?: Maybe<(
    Pick<Member, 'id' | 'firstName' | 'lastName' | 'email' | 'mobileNumber' | 'groupId' | 'createdAt' | 'updatedAt'>
    & { group?: Maybe<(
      Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { meetings?: Maybe<Pick<ModelMeetingConnection, 'nextToken'>>, members?: Maybe<Pick<ModelMemberConnection, 'nextToken'>> }
    )> }
  )> };

export type OnUpdateMemberSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnUpdateMemberSubscription = { onUpdateMember?: Maybe<(
    Pick<Member, 'id' | 'firstName' | 'lastName' | 'email' | 'mobileNumber' | 'groupId' | 'createdAt' | 'updatedAt'>
    & { group?: Maybe<(
      Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { meetings?: Maybe<Pick<ModelMeetingConnection, 'nextToken'>>, members?: Maybe<Pick<ModelMemberConnection, 'nextToken'>> }
    )> }
  )> };

export type OnDeleteMemberSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnDeleteMemberSubscription = { onDeleteMember?: Maybe<(
    Pick<Member, 'id' | 'firstName' | 'lastName' | 'email' | 'mobileNumber' | 'groupId' | 'createdAt' | 'updatedAt'>
    & { group?: Maybe<(
      Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      & { meetings?: Maybe<Pick<ModelMeetingConnection, 'nextToken'>>, members?: Maybe<Pick<ModelMemberConnection, 'nextToken'>> }
    )> }
  )> };
