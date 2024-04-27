import Image from "next/image"
import {
    StyledCard,
    StyledContainer,
    StyledImageContainer,
    StyledInnerContainer,
    StyledLeftContainer,
    StyledSubTitle,
    StyledTextContainer,
    StyledTitle
} from "./elements"

export const AgencySelection = ({ title, subtitle, image, cards, ...props }) => {
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
                    <StyledCard width={cards[0].width}>
                        <h2>{cards[0].title}</h2>
                        <p>{cards[0].text}</p>
                    </StyledCard>
                    <StyledCard width={cards[1].width}>
                        <h2>{cards[1].title}</h2>
                        <p>{cards[1].text}</p>
                    </StyledCard>
                    <StyledCard width={cards[2].width}>
                        <h2>{cards[2].title}</h2>
                        <p>{cards[2].text}</p>
                    </StyledCard>
                </StyledLeftContainer>
            </StyledInnerContainer>
        </StyledContainer>
    )
}