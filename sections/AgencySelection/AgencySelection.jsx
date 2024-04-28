import Image from "next/image";
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
} from "./elements";

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
                    {cards.map((card, index) => (
                        <StyledCard key={index} width={card.width}>
                            <StyledIcon>{card.icon}</StyledIcon>
                            <StyledTextContainer>
                                <StyledCardTitle>{card.title}</StyledCardTitle>
                                <StyledCardText>{card.text}</StyledCardText>
                            </StyledTextContainer>
                        </StyledCard>
                    ))}
                </StyledLeftContainer>
            </StyledInnerContainer>
        </StyledContainer>
    );
};