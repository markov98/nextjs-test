import Image from "next/image"
import {
    StyledIcon,
    StyledCard,
    StyledCardText,
    StyledCardTitle,
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
                        <StyledIcon>{cards[0].icon}</StyledIcon>
                        <StyledTextContainer>
                            <StyledCardTitle>{cards[0].title}</StyledCardTitle>
                            <StyledCardText>{cards[0].text}</StyledCardText>
                        </StyledTextContainer>
                    </StyledCard>
                    <StyledCard width={cards[1].width}>
                        <StyledIcon>{cards[1].icon}</StyledIcon>
                        <StyledTextContainer>
                            <StyledCardTitle>{cards[1].title}</StyledCardTitle>
                            <StyledCardText>{cards[1].text}</StyledCardText>
                        </StyledTextContainer>
                    </StyledCard>
                    <StyledCard width={cards[2].width}>
                        <StyledIcon>{cards[2].icon}</StyledIcon>
                        <StyledTextContainer>
                            <StyledCardTitle>{cards[2].title}</StyledCardTitle>
                            <StyledCardText>{cards[2].text}</StyledCardText>
                        </StyledTextContainer>
                    </StyledCard>
                </StyledLeftContainer>
            </StyledInnerContainer>
        </StyledContainer>
    )
}