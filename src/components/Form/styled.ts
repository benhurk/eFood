import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const FormRow = styled.div`
    width: 100%;

    &.half-half {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 32px;
    }

    &.lg-sm {
        display: grid;
        grid-template-columns: 70% 25%;
        column-gap: 5%;
    }
`

export const ButtonArea = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`