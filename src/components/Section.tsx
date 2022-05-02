import React from 'react';
import './Section.scss';
import slugify from 'slugify';

const Section = ({ title, columnHeaders, columnData }) => {
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>
      <ul>
        {columnData.map((array, index) => (
          <React.Fragment key={index}>
            {index === 0 && (
              <div
                className={`section__headers section__headers--${slugify(
                  title.toLowerCase()
                )}`}
              >
                {columnHeaders.map(header => (
                  <div key={title + header}>{header}</div>
                ))}
              </div>
            )}
            <li
              className={`section__data section__data--${slugify(
                title.toLowerCase()
              )}`}
            >
              {array.map((item, index) => (
                <React.Fragment key={index}>
                  {index === 1 ? (
                    <h3
                      className="section__data__item"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ) : (
                    <div
                      className="section__data__item"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  )}
                </React.Fragment>
              ))}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export default Section;
