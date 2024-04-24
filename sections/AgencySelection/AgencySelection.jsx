import { StyledContainer, StyledSubTitle, StyledTextContainer, StyledTitle } from "./elements"

export const AgencySelection = ({ title, subtitle, ...props }) => {
    return (
        <StyledContainer {...props}>
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledSubTitle>{subtitle}</StyledSubTitle>
            </StyledTextContainer>
        </StyledContainer>
    )
}