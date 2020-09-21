import * as APIt from '~/API';

type Group = Omit<Exclude<APIt.GetGroupQuery['getGroup'], null>, '__typename'>;
