import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export const Video = styled.video`
  width: 100%;
`;

export const Message = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 700px;
  margin: 0 auto;
  padding: 30px;

  font-size: 46px;
  color: #c5c6c7;
`;
