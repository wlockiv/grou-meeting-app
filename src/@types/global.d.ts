import * as API from '~/API';

type Group = Omit<Exclude<API.GetGroupQuery['getGroup'], null>, '__typename'>;
