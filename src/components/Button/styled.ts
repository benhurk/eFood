import styled from "styled-components"
import { colors } from "../../globalStyles"

import { Props } from "."

const Btn = styled.button<Props>`
    background-color: ${(props) => (props.color === 'cream' ? colors.cream : colors.red)};
    color: ${(props) => (props.color === 'cream' ? colors.red : colors.cream)};
    opacity: ${(props) => (props.disabled ? 0.25 : 1)};
    font-size: 14px;
    font-weight: 700;
    border: none;
    padding: 4px 6px;
    width: ${(props) => (props.width)};
    cursor: pointer;
`

export default Btn