/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createMeeting = /* GraphQL */ `
  mutation CreateMeeting(
    $input: CreateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    createMeeting(input: $input, condition: $condition) {
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
export const updateMeeting = /* GraphQL */ `
  mutation UpdateMeeting(
    $input: UpdateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    updateMeeting(input: $input, condition: $condition) {
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
export const deleteMeeting = /* GraphQL */ `
  mutation DeleteMeeting(
    $input: DeleteMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    deleteMeeting(input: $input, condition: $condition) {
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
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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
