import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  background-image: url('../../resources/background.png');
  background-size: cover;
  margin: 0;
`;

export const StyledGetStartedBtn = styled((props) => <Button {...props} variant="contained" color="main" />)`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin-top: 1em;
  font-size: 3em;
  color: black;
`;

export const StyledSubTitle = styled((props) => <SectionSubheading {...props} />)`
 font-size: 1em;
  color: gray;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  text-align: center;
  color: black;
  width: 100%;
  margin: auto;
  font-family: sans-serif;
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
`;
