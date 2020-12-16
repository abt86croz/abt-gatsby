import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
export default {
  siteMetadata: {
    title: `ABT Site`,
    siteUrl: `https://www.abtdance.org/`,
    description: 'Albemarle Ballet Theatre (ABT)',
  },

  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this the name of the added plugin
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'hx50v4b4',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
