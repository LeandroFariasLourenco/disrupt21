import styled from 'styled-components';

import Button from '@Components/Button';

export const HomeWrapper = styled.View`
  background-color: #1d1d25;
  height: 100%;
  width: 100%;
`;

export const Heading = styled.Text`
  width: 100%;
  padding: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  z-index: 1;
`;

export const MessagesWrapper = styled.View`
  padding: 20px;
  padding-bottom: 150px;
`;

export const Messages = styled.ScrollView`
  width: 100%;
  padding-top: 50px;
`;

export const UserMessages = styled.View``;

const message = `
  text-align: center;
  padding: 20px;
  width: 80%;
  border-radius: 10px;
  color: #fff;
  margin: 5px 0;
`;

export const BotMessages = styled.Text`
  background-color: #2c2c39;
  ${message}
`;

export const MessageWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-flow: wrap;
  background-color: #000;
`;

export const MessageInput = styled.TextInput`
  flex: 0.8;
  background-color: #2c2c39;
  color: #fff;
  border-radius: 10px;
  padding: 10px;
  padding-left: 20px;
`;

export const SubmitButton = styled(Button)`
  flex: 0.2;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  background-color: #2c2c39;
  border-radius: 5px;
`;

export const UserTextMessage = styled.Text`
  background-color: #ff8a54;
  align-self: flex-end;
  ${message}
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
`;
