// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      id
      name
      events {
        nextToken
      }
      members {
        nextToken
      }
      owner
    }
  }
`;
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      name
      events {
        nextToken
      }
      members {
        nextToken
      }
      owner
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      name
      events {
        nextToken
      }
      members {
        nextToken
      }
      owner
    }
  }
`;
export const createGroupMember = /* GraphQL */ `
  mutation CreateGroupMember(
    $input: CreateGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    createGroupMember(input: $input, condition: $condition) {
      id
      groupId
      userId
      group {
        id
        name
        owner
      }
      user {
        id
        firstName
        lastName
        email
        mobileNumber
      }
    }
  }
`;
export const updateGroupMember = /* GraphQL */ `
  mutation UpdateGroupMember(
    $input: UpdateGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    updateGroupMember(input: $input, condition: $condition) {
      id
      groupId
      userId
      group {
        id
        name
        owner
      }
      user {
        id
        firstName
        lastName
        email
        mobileNumber
      }
    }
  }
`;
export const deleteGroupMember = /* GraphQL */ `
  mutation DeleteGroupMember(
    $input: DeleteGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    deleteGroupMember(input: $input, condition: $condition) {
      id
      groupId
      userId
      group {
        id
        name
        owner
      }
      user {
        id
        firstName
        lastName
        email
        mobileNumber
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      mobileNumber
      groups {
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      mobileNumber
      groups {
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      mobileNumber
      groups {
        nextToken
      }
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      title
      date
      description
      groupId
      group {
        id
        name
        owner
      }
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      title
      date
      description
      groupId
      group {
        id
        name
        owner
      }
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      title
      date
      description
      groupId
      group {
        id
        name
        owner
      }
    }
  }
`;
