import { StyledButton, StyledButtonText } from "./elements";

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};
