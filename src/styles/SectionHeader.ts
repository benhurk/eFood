import styled from "styled-components";
import { colors } from "../globalStyles";

const ContentHeader = styled.section`
    margin-bottom: 32px;
    padding-block: 32px;
    border-bottom: 2px solid ${colors.dark};
    background-color: ${colors.red};

    .search_area {
        display: flex;
        gap: 32px;
        justify-content: center;

        @media (max-width: 767px) {
            display: block;
        }
    }
`

export default ContentHeader;