/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import Amplify from 'aws-amplify';
import awsExports from './src/aws-exports';
import RootElementWrapper from './wrap-root-element';
import React from 'react';

Amplify.configure(awsExports);

export const wrapRootElement = ({ element }) => {
  return <RootElementWrapper>{element}</RootElementWrapper>;
};
