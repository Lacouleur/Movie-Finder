import styled from '@emotion/styled';
import { phoneQuery } from '../../../styles/media-queries';

const Sizer = styled.div`
max-width: calc(100% - 10%);
margin: auto;
${phoneQuery`
    max-width: 315px;
  `}
`;

export default Sizer;
