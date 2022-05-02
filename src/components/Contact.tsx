import { graphql, useStaticQuery } from 'gatsby';

import React from 'react';
import './Contact.scss';

const Contact = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            email
          }
        }
      }
    `
  );

  const data = [
    {
      key: `E-mail`,
      val: site.siteMetadata.email,
      url: `mailto:${site.siteMetadata.email}`,
    },
    {
      key: `Twitter`,
      val: `@${site.siteMetadata.author}`,
      url: `https://twitter.com/${site.siteMetadata.author}`,
    },
    {
      key: `Linkedin`,
      val: `/in/${site.siteMetadata.author}`,
      url: `https://www.linkedin.com/in/${site.siteMetadata.author}/`,
    },
    {
      key: `Github`,
      val: `/${site.siteMetadata.author}`,
      url: `https://github.com/${site.siteMetadata.author}`,
    },
  ];

  return (
    <section className="contact">
      <h2 className="contact__title">Contact</h2>
      <ul className="contact__list">
        {data.map(({ key, val, url }) => (
          <li className="contact__list-item" key={key}>
            <div className="contact__key">{key}</div>
            <div className="contact__val">
              <a href={url}>{val}</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
