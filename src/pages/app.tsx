import { Router } from '@reach/router';
import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import GroupsRoute from '~/routes/groups';

const AppPage: React.FC = () => {
  return (
    <Router>
      <GroupsRoute path="/app/groups" />
    </Router>
  );
};

export default withAuthenticator(AppPage, { usernameAlias: 'email' });
