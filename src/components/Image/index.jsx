import { string } from "prop-types";

export function Image({ src, alt, ...rest }) {
  return <img src={src} alt={alt} {...rest} />;
}

Image.propTypes = { src: string, alt: string };
