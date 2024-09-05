import styled from "styled-components";
import { colors } from "../../globalStyles";

export const FooterContainer = styled.footer`
    padding-block: 40px;
    text-align: center;
    background-color: ${colors.cream};
`

export const SocialLinks = styled.ul`
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 24px;
    margin-bottom: 48px;
`

export const FooterText = styled.p`
    font-size: 10px;
    color: ${colors.red};
`

export const UpButton = styled.button`
    display: flex;
    align-items: center;
    color: ${colors.cream};
    font-weight: 700;
    padding: 2px 6px 2px 0;
    margin-inline: auto;
    margin-bottom: 16px;
    background-color: ${colors.red};
    border: none;
    border-radius: 8px;
    cursor: pointer;

    img {
        width: 28px;
    }
`