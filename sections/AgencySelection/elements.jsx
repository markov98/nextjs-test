import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  background-image: url('/img/background.png');
  margin: 0;
  display:flex;
  flex-direction: column;
`;

export const StyledBtn = styled((props) => <Button {...props} variant="contained" color="gray" />)`
  color: black;
  margin-block: 2em;
  padding-top: 0;
  padding-bottom: 0;
  width: ${props => props.width};

  &:hover {
    border: 2px solid blue;
  }
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
margin-top: 3em;
  display: flex;
  height: 100%;
  justify-content: center;
  gap: 3em;
`;

export const StyledLeftContainer = styled(({ ...props }) => <div {...props} />)`
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
width: 300px;
height: 504px;
`;
