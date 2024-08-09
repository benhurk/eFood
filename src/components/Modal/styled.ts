import styled from "styled-components";
import { colors } from "../../globalStyles";

export const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;

    &::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: .8;
    }
`

export const ModalContent =  styled.div`
    position: relative;
    background-color: ${colors.red};
    padding: 32px;
    display: flex;
    gap: 24px;

    img {
        max-width: 280px;
        object-fit: cover;
        object-position: center center;
    }

    .modal__inner {
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: ${colors.cream};

        h3 {
            font-size: 18px;
            font-weight: 900;
        }

        p {
            font-size: 14px;
            line-height: 22px;
        }
    }
`

export const CloseBtn = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`