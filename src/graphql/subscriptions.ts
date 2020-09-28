// tslint:disable
// eslint-disable
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
      }
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($owner: String) {
    onCreateGroup(owner: $owner) {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($owner: String) {
    onUpdateGroup(owner: $owner) {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($owner: String) {
    onDeleteGroup(owner: $owner) {
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
      }
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
      }
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
      }
    }
  }
`;
