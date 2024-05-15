// Kindly read more https://zellwk.com/blog/media-query-units/

const mediaQueries = {
  small: "@media (min-width: 320px) and (max-width: 480px)",
  medium: "@media (min-width: 481px) and (max-width: 767px)",
  allMedium: "@media (max-width: 767px)",
  semiLarge: "@media (min-width: 768px) and (max-width: 1024px)",
  landscapeScreen:
    "(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)",
  large: "@media (min-width: 1025px)",
};

export { mediaQueries };
