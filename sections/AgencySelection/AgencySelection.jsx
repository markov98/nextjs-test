import { StyledContainer, StyledTextContainer, StyledTitle } from "./elements"

export const AgencySelection = ({ title, ...props }) => {
    return (
        <StyledContainer {...props}>
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
            </StyledTextContainer>
        </StyledContainer>
    )
}