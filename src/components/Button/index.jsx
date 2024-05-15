import { elementType, string, bool } from "prop-types";
import { ButtonWrapper } from "./Button.style";

export default function Button({
  text,
  template,
  variant,
  border,
  children,
  loading,
  disabled,
  ...rest
}) {
  return (
    <ButtonWrapper
      template={template}
      disabled={disabled || loading}
      variant={variant}
      border={border}
      {...rest}
    >
      {loading && "Loading..."}
      {text}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  text: string,
  template: string,
  children: elementType,
  loading: bool,
  disabled: bool,
  variant: string,
  border: string,
};
