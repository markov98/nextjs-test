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
  margin-block: 1em;
  padding: 0.5em;
  width: ${props => props.width};
  text-align: left;
  &:hover {
    border: 2px solid blue;

    h2 {
      text-decoration: underline;
      color: blue;
    }
  }

  h2 {
    font-size: 1.2em;
    padding: 0;
    margin: 0;
  }

  p {
    font-size: 0.9em;
    padding: 0;
    margin: 0;
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

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center

  }
`;

export const StyledLeftContainer = styled(({ ...props }) => <div {...props} />)`
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
width: 300px;
height: 504px;
`;
