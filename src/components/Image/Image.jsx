import './Image.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Image = ({ src, alt, className, width, height, ...attrs }) => {
  const classes = classNames(className);

  if (!src) src = `https://via.placeholder.com/${width}x${height}`;

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      width={width}
      height={height}
      {...attrs}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
Image.defaultProps = {
  src: '',
  alt: 'image name',
  className: '',
  width: 100,
  height: 100,
};

export default Image;
