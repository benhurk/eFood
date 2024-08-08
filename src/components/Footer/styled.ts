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
    margin-top: 32px;
    margin-bottom: 80px;
`

export const FooterText = styled.p`
    font-size: 10px;
    color: ${colors.red}
`