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
`

export const ModalOverlay = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: .8;
`

export const ModalContent = styled.div`
    position: relative;
    background-color: ${colors.red};
    padding: 32px;
    display: flex;
    gap: 24px;

    @media (max-width: 767px) {
        flex-direction: column;
        padding-inline: 16px;
    }

    .close_btn {
        position: absolute;
        top: 8px;
        right: 8px;
    }

    .product_img {
        width: 280px;
        height: 280px;
        object-fit: cover;
        object-position: center center;
        
        @media (max-width: 767px) {
            max-width: 280px;
            width: 100%;
            align-self: center;
        }
    }

    .modal__inner {
        display: flex;
        flex-direction: column;
        gap: 16px;
        justify-content: center;
        color: ${colors.cream};

        h3 {
            font-size: 18px;
            font-weight: 900;

            @media (max-width: 767px) {
            text-align: center;
            } 
        }

        p {
            font-size: 14px;
            line-height: 22px;
        }

        @media (max-width: 767px) {
            button {
                margin-inline: auto;
            }

            small {
                margin-inline: auto;
            }
        }
    }
`

export const Quantity = styled.div`
    display: flex;
    align-items: center;

    label {
        font-size: 16px;
        font-weight: 700;
        margin-right: 8px;
    }

    input {
        padding: 4px;
        border: none;
        background-color: ${colors.cream};
        color: ${colors.dark};
        font-weight: 700;
        font-size: 14px;

        &:focus {
            outline: none;
        }
    }

    @media (max-width: 767px) {
        margin-inline: auto;
    }
`