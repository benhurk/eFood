import styled from "styled-components";
import { colors } from "../../globalStyles";

export const Label = styled.span`
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.cream};
    margin-bottom: 8px;
`

export const Container = styled.div`
    position: relative;
    width: 160px;
    background-color: ${colors.cream};
    padding: 9px 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`

export const Value = styled.span`
    color: ${colors.dark};
    font-weight: 700;
    text-transform: capitalize;
`

export const ExpandIcon = styled.img`
    width: 16px;
`

export const OptionsList = styled.ul`
    position: absolute;
    width: 100%;
    background-color: ${colors.bgLight};
    border: 1px solid ${colors.cream};
    border-top: none;
    top: 100%;
    left: 0;
    padding-block: 2px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;
`

export const Option = styled.li`
    color: ${colors.red};
    text-transform: capitalize;
    padding: 8px;
    cursor: pointer;

    &:hover, &:focus {
        background-color: ${colors.red};
        color: ${colors.cream};
    }
`