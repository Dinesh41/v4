import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
          }
        }
      }
    `,
  );

  const { defaultTitle } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <html lang="en" />
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
};

Head.defaultProps = {
  title: null,
};
