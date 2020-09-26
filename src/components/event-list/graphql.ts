// Types
export type Meeting = {
  id: string;
  title: string;
  date: string;
  description: string | null;
  groupId: string;
};

export type ListMeetingsQuery = {
  listMeetings: {
    items: Array<Meeting> | [];
  };
};

// Operations
export const listMeetings = /* GraphQL */ `
  query ListMeetings($filter: ModelMeetingFilterInput) {
    listMeetings(filter: $filter) {
      items {
        id
        title
        date
        description
        groupId
      }
    }
  }
`;

export const onCreateMeetingByGroup = /* GraphQL */ `
  subscription OnCreateMeetingByGroup($groupId: String!) {
    onCreateMeetingByGroup(groupId: $groupId) {
      id
      title
      date
      description
      groupId
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
      date
      description
      groupId
    }
  }
`;
