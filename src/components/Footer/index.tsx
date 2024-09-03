import logo from '../../assets/logo.svg';
import facebookIcon from '../../assets/facebook-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';
import upArrow from '../../assets/up-icon.svg';

import { FooterContainer, FooterText, SocialLinks, UpButton } from "./styled"

export default function Footer() {
    function scrollToTop() {
        document.body.scrollTo({top: 0, behavior: 'smooth'});
        document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
    }

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
            <UpButton type='button' onClick={() => scrollToTop()}><img src={upArrow} alt='^' /></UpButton>
            <FooterText>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
            </FooterText>
        </FooterContainer>
    )
}