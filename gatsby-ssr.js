/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement('script', {
      key: 'umami-script',
      defer: true,
      src: 'https://cloud.umami.is/script.js',
      'data-website-id': '8dd8dc3b-5c98-46e1-a293-5b15a1437df0',
    }),
  ]);
};
