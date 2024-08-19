import styled from "styled-components";

import headerBg from '../assets/headerBg.png';

const HeaderContainer = styled.header`
    background-image: url(${headerBg});
    background-size: cover;
    text-align: center;
    padding-top: 64px;

    @media (max-width: 768px) {
        padding-top: 32px;
    }
`

export default HeaderContainer;