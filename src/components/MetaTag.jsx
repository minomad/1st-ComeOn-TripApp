import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const MetaTag = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content='https://1st-come-on-trip-app.vercel.app' />
      <meta property='og:image' content='https://1st-come-on-trip-app.vercel.app/ad.png' />
    </Helmet>
  );
};

export default MetaTag;

MetaTag.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
