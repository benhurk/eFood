import logo from '../../assets/logo.svg';
import facebookIcon from '../../assets/facebook-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';

import { FooterContainer, FooterText, SocialLinks } from "./styled"

export default function Footer() {
    return (
        <FooterContainer>
            <img src={logo} alt='eFood'></img>
            <SocialLinks>
                <li>
                    <a href='#'><img src={instagramIcon} /></a>
                </li>
                <li>
                    <a href='#'><img src={facebookIcon} /></a>
                </li>
                <li>
                    <a href='#'><img src={twitterIcon} /></a>
                </li>
            </SocialLinks>
            <FooterText>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
            </FooterText>
        </FooterContainer>
    )
}