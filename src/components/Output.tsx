import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Section from './Section';
// import Seo from './Seo';
import Top from './Top';

const Output = () => {
  const { output } = useStaticQuery(
    graphql`
      query {
        output: allFile(
          filter: { sourceInstanceName: { eq: "projects" } }
          sort: { childMarkdownRemark: { frontmatter: { date: DESC } } }
        ) {
          nodes {
            id
            childMarkdownRemark {
              frontmatter {
                year: date(formatString: "Y")
                name
                agency
                type
                stack
                link
              }
              html
            }
          }
        }
      }
    `
  );

  // console.log(
  //   output.nodes.map(
  //     ({
  //       childMarkdownRemark: {
  //         frontmatter: { year, name, stack, agency, info },
  //       },
  //     }) => {
  //       console.log({ year, name, stack, agency, info });
  //       return [year, name, stack, agency, info];
  //     }
  //   )
  // );

  const fixLinkTitle = (link: string) => {
    let url: string;
    url = link.replace('www.', '').replace('https://', '');
    if (url.endsWith('/')) {
      url = url.slice(0, -1);
    }
    return url;
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* <Seo {...{ title, description }} /> */}
      <Top output>
        <div>Output</div>
        0001—{`${output.nodes.length}`.padStart(4, '0')}
      </Top>

      <Section
        title="Projects"
        columnHeaders={['Year', 'Name', 'Agency', 'Type', 'Stack', 'Info']}
        columnData={output.nodes.map(
          ({
            childMarkdownRemark: {
              frontmatter: { year, name, agency, type, stack, link },
              html,
            },
          }) => {
            const url = link
              ? `<a href="${link}" title="Visit ${fixLinkTitle(
                  link
                )}">${name}</a>`
              : name;
            return [year, url, agency, type, stack, html];
          }
        )}
      />
    </div>
  );
};

export default Output;
