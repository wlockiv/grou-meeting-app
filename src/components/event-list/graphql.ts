// Types
export type Event = {
  id: string;
  title: string;
  date: string;
  description: string | null;
  groupId: string;
};

export type ListEventsQuery = {
  listEvents: {
    items: Array<Event>;
  };
};

// Operations
export const listEvents = /* GraphQL */ `
  query ListEvents($filter: ModelEventFilterInput) {
    listEvents(filter: $filter) {
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

export const onCreateEventByGroup = /* GraphQL */ `
  subscription OnCreateEventByGroup($groupId: String!) {
    onCreateEventByGroup(groupId: $groupId) {
      id
      title
      date
      description
      groupId
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
    }
  }
`;
