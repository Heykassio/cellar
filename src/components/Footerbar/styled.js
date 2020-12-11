import styled from 'styled-components';
import { colorHover2 } from '../../configs/colors';

export const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
`;
export const FooterItem = styled.div`
    padding: 8px 0;
    text-align: center;
    cursor: pointer;

    &:hover {
        color: ${colorHover2};
    }
`;