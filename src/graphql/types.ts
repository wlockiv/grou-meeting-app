import * as APIt from '~/API';

export type Group = Omit<
  Exclude<APIt.GetGroupQuery['getGroup'], null>,
  '__typename'
>;

export type Meeting = Omit<
  Exclude<APIt.GetMeetingQuery['getMeeting'], null>,
  '__typename'
>;

export type MeetingList = Omit<
  Exclude<APIt.ListMeetingsQuery['listMeetings'], null>,
  '__typename'
>;
