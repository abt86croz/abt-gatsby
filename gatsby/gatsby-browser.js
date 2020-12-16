/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Layout from './src/components/Layout';

// Gatsby automatically wraps each site/pages inside layout
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
