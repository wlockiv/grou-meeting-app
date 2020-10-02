/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEventByGroup = /* GraphQL */ `
  subscription OnCreateEventByGroup($groupId: String!) {
    onCreateEventByGroup(groupId: $groupId) {
      id
      title
      date
      description
      groupId
      group {
        id
        name
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
      id
      name
      events {
        nextToken
      }
      members {
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
      id
      name
      events {
        nextToken
      }
      members {
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
      id
      name
      events {
        nextToken
      }
      members {
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroupMember = /* GraphQL */ `
  subscription OnCreateGroupMember {
    onCreateGroupMember {
      id
      groupId
      userId
      group {
        id
        name
        owner
        createdAt
        updatedAt
      }
      user {
        id
        firstName
        lastName
        email
        mobileNumber
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroupMember = /* GraphQL */ `
  subscription OnUpdateGroupMember {
    onUpdateGroupMember {
      id
      groupId
      userId
      group {
        id
        name
        owner
        createdAt
        updatedAt
      }
      user {
        id
        firstName
        lastName
        email
        mobileNumber
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroupMember = /* GraphQL */ `
  subscription OnDeleteGroupMember {
    onDeleteGroupMember {
      id
      groupId
      userId
      group {
        id
        name
        owner
        createdAt
        updatedAt
      }
      user {
        id
        firstName
        lastName
        email
        mobileNumber
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      firstName
      lastName
      email
      mobileNumber
      groups {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      firstName
      lastName
      email
      mobileNumber
      groups {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      firstName
      lastName
      email
      mobileNumber
      groups {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
      id
      title
      date
      description
      groupId
      group {
        id
        name
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
      id
      title
      date
      description
      groupId
      group {
        id
        name
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
      id
      title
      date
      description
      groupId
      group {
        id
        name
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
