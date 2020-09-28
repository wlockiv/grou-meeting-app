import * as APIt from '~/API';

export type Group = Omit<
  Exclude<APIt.GetGroupQuery['getGroup'], null>,
  '__typename'
>;

export type Meeting = Omit<
  Exclude<APIt.GetEventQuery['getEvent'], null>,
  '__typename'
>;

export type MeetingList = Omit<
  Exclude<APIt.ListEventsQuery['listEvents'], null>,
  '__typename'
>;
