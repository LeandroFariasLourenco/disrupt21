import styled from 'styled-components/native';

export const SubmitWrapper = styled.View`
  flex-flow: column;
  align-items: center;
  width: 80%;
  margin: 40px auto;
`;

export const TextInput = styled.TextInput`
  width: 80%;
  height: 40px;
  border-radius: 10px;
  background-color: #d5dfdc;
  padding: 10px;
  margin: 5px auto 5px;
`;

export const LoginWrapper = styled.View`
  background-color: #1d1d25;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 175px;
`;

export const Heading = styled.View`
  margin: 40px 0;
`;

export const HeadingText = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-size: 40px;
`;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 18px;
  width: 80%;
  text-align: center;
`;
