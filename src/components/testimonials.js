import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import './testimonials.scss';

const Testimonials = () => {
  const { testimonials } = useStaticQuery(
    graphql`
      query {
        testimonials: allFile(
          filter: { sourceInstanceName: { eq: "testimonials" } }
        ) {
          edges {
            node {
              id
              childMarkdownRemark {
                frontmatter {
                  name
                  role
                  company
                }
                html
              }
            }
          }
        }
      }
    `
  );

  return (
    <section className="testimonials">
      <h2 className="testimonials__title">Testimonials</h2>
      <ul>
        <li className="testimonials__list-headers">
          <div>Testimonial</div>
          <div>Written by</div>
          <div>Company</div>
        </li>
        {testimonials.edges.map(
          ({
            node: {
              id,
              childMarkdownRemark: {
                frontmatter: { name, role, company },
                html,
              },
            },
          }) => (
            <li className="testimonials__list-item" key={id}>
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <div>
                <h3>{name}</h3>
                {role}
              </div>
              <div>{company}</div>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default Testimonials;
