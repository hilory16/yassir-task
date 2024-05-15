export const preventMultipleWhiteSpaces = (str) => {
  if (str)
    return str
      ?.split("")
      .filter(
        (val1, index, arr) =>
          index === 0 || val1 !== " " || arr[index - 1] !== " "
      )
      .join("");

  return "";
};
