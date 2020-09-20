/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
      id
      name
      meetings {
        items {
          id
          title
          description
          groupId
          createdAt
          updatedAt
        }
        nextToken
      }
      members {
        items {
          id
          firstName
          lastName
          email
          mobileNumber
          groupId
          createdAt
          updatedAt
        }
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
      meetings {
        items {
          id
          title
          description
          groupId
          createdAt
          updatedAt
        }
        nextToken
      }
      members {
        items {
          id
          firstName
          lastName
          email
          mobileNumber
          groupId
          createdAt
          updatedAt
        }
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
      meetings {
        items {
          id
          title
          description
          groupId
          createdAt
          updatedAt
        }
        nextToken
      }
      members {
        items {
          id
          firstName
          lastName
          email
          mobileNumber
          groupId
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMeeting = /* GraphQL */ `
  subscription OnCreateMeeting {
    onCreateMeeting {
      id
      title
      description
      groupId
      group {
        id
        name
        meetings {
          nextToken
        }
        members {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMeeting = /* GraphQL */ `
  subscription OnUpdateMeeting {
    onUpdateMeeting {
      id
      title
      description
      groupId
      group {
        id
        name
        meetings {
          nextToken
        }
        members {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMeeting = /* GraphQL */ `
  subscription OnDeleteMeeting {
    onDeleteMeeting {
      id
      title
      description
      groupId
      group {
        id
        name
        meetings {
          nextToken
        }
        members {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
      id
      firstName
      lastName
      email
      mobileNumber
      groupId
      group {
        id
        name
        meetings {
          nextToken
        }
        members {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
      id
      firstName
      lastName
      email
      mobileNumber
      groupId
      group {
        id
        name
        meetings {
          nextToken
        }
        members {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
      id
      firstName
      lastName
      email
      mobileNumber
      groupId
      group {
        id
        name
        meetings {
          nextToken
        }
        members {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
