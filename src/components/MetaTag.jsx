import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const MetaTag = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta name='keywords' content='여행, 레저, 호텔, 항공' />
      
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content='https://1st-come-on-trip-app.vercel.app' />
      <meta property='og:image' content='https://1st-come-on-trip-app.vercel.app/ad.png' />
      <meta property='og:image:width' content='600' />
      <meta property='og:image:height' content='400' />
    </Helmet>
  );
};

export default MetaTag;

MetaTag.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
