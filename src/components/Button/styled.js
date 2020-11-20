import styled from 'styled-components';

export const ButtonWrapper = styled.TouchableOpacity`
  ${(props) => (!props.reset ? `
    width: 70%;
    margin: 0 auto;
    background-color: #ffa378;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-top: 20px;
  ` : '')}
`;

export const ButtonTitle = styled.Text`
  color: #fff;
  font-size: 18px;
`;
