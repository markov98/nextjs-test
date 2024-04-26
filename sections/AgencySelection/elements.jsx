import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  background-image: url('/img/background.png');
  margin: 0;
  display:flex;
  flex-direction: column;
`;

export const StyledGetStartedBtn = styled((props) => <Button {...props} variant="contained" color="main" />)`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin-top: 1em;
  margin-bottom: 0;
  font-size: 2em;
  color: black;
`;

export const StyledSubTitle = styled((props) => <SectionSubheading {...props} />)`
margin: 0;
 font-size: 1em;
  color: black;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  text-align: center;
  color: black;
  width: 100%;
  margin: auto;
  font-family: sans-serif;
`;

export const StyledInnerContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  with: 100%;
  height: 100%;
  justify-content: center;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
width: 300px;
height: 504px;
`;
