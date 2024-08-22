import styled from "styled-components";
import { colors } from "../../globalStyles";

export const SidebarContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
`

export const SidebarOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.8;
`

export const SidebarContent = styled.aside`
    position: fixed;
    width: 360px;
    height: 100%;
    top: 0;
    right: 0px;
    background-color: ${colors.red};
    padding: 32px 8px;

    @media (max-width: 767px) {
        width: 100%;
    }

    .close_btn {
        margin-bottom: 16px;
    }

    .empty_warn {
        color: ${colors.cream};
        display: block;
    }
`