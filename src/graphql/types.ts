import * as APIt from '~/API';

export type Group = Omit<
  Exclude<APIt.GetGroupQuery['getGroup'], null>,
  '__typename'
>;
