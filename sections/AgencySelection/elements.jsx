import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";
import '@fortawesome/fontawesome-free/css/all.css';

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  background-image: url('/img/background.png');
  margin: 0;
  display:flex;
  flex-direction: column;
`;

export const StyledCard = styled((props) => <Button {...props} color="gray" />)`
display: flex;
flex-direction: row;
gap: 0.5em;
  color: black;
  margin-block: 1em;
  padding-inline: 0.5em;
  width: ${props => props.width};
  &:hover {
    border: 2px solid blue;

   h2 {
      text-decoration: underline;
      color: blue;
    }
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
  margin-inline: auto;
  padding: 0;
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

export const StyledCardTitle = styled((props) => <h2 {...props} />)`
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  color: black;
  text-align: left;
`;

export const StyledCardText = styled((props) => <p {...props} />)`
margin: 0;
padding: 0;
font-weight: 400;
  font-size: 1em;
  color: black;
  text-align: left;
`;

export const StyledIcon = styled((props) => <div {...props} />)`
font-size: 3em;
`;
