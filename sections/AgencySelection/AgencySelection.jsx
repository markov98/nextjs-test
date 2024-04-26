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
                    <StyledBtn width={btns[0].width}>
                        <h2>{btns[0].title}</h2>
                        <p>{btns[0].text}</p>
                    </StyledBtn>
                    <StyledBtn width={btns[1].width}>
                        <h2>{btns[1].title}</h2>
                        <p>{btns[1].text}</p>
                    </StyledBtn>
                    <StyledBtn width={btns[2].width}>
                        <h2>{btns[2].title}</h2>
                        <p>{btns[2].text}</p>
                    </StyledBtn>
                </StyledLeftContainer>
            </StyledInnerContainer>
        </StyledContainer>
    )
}