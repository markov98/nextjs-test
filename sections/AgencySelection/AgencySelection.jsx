import Image from "next/image"
import {
    StyledBtn,
    StyledContainer,
    StyledImageContainer,
    StyledInnerContainer,
    StyledLeftContainer,
    StyledSubTitle,
    StyledTextContainer,
    StyledTitle
} from "./elements"

export const AgencySelection = ({ title, subtitle, image, btns, ...props }) => {
    return (
        <StyledContainer {...props}>
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledSubTitle>{subtitle}</StyledSubTitle>
            </StyledTextContainer>
            <StyledInnerContainer>
                <StyledImageContainer>
                    <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
                </StyledImageContainer>
                <StyledLeftContainer>
                    <StyledBtn width={btns[0].width}>Test</StyledBtn>
                    <StyledBtn width={btns[1].width}>Test</StyledBtn>
                    <StyledBtn width={btns[2].width}>Test</StyledBtn>
                </StyledLeftContainer>
            </StyledInnerContainer>
        </StyledContainer>
    )
}