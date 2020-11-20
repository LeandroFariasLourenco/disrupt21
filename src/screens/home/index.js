import React, { useState, useRef } from 'react';
import { SafeAreaView, AsyncStorage } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

import * as S from './styled';

const Home = () => {
  const { control, handleSubmit } = useForm();

  const messageScrollRef = useRef();

  const [error, setError] = useState(false);
  const [messages, setMessages] = useState([]);
  const [awaitingResponse, setAwaitingResponse] = useState(false);

  const onSubmit = ({ mensagem }) => {
    if (!mensagem) return;

    const newMessages = [...messages];

    newMessages.push({
      user: 'current',
      id: messages.length,
      text: mensagem,
    });

    setMessages(newMessages);
    setError(false);
    setAwaitingResponse(true);
    /* eslint-disable */
    AsyncStorage.getItem('AccessToken').then((token) => {
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      axios.post('https://jarvan-api.herokuapp.com/assistant', {
        message: mensagem,
      }).then((response) => {
        const { data } = response;
        newMessages.push({
          user: 'bot',
          id: messages.length,
          text: data[0],
        });

        console.log(data);
        setMessages([...newMessages]);
        setAwaitingResponse(false);
        return response;
      }).catch((err) => {
        setError(true);
        setAwaitingResponse(false);
        return err;
      })
    });

  };

  return (
    <SafeAreaView>
      <S.HomeWrapper>
        <S.Heading>
          Jarvan
        </S.Heading>

        <S.Messages
          ref={messageScrollRef}
          onContentSizeChange={() => messageScrollRef.current.scrollToEnd()}
        >
          <S.MessagesWrapper>
            <S.UserMessages>
              {!!messages.length && messages.map(({ text, id, user }) => (
                user === 'current' ? (
                  <S.UserTextMessage
                    key={id}
                  >
                    {text}
                  </S.UserTextMessage>
                ) : (
                    <S.BotMessages
                      key={id + 1}
                    >
                      {text}
                    </S.BotMessages>
                  )
              ))}
            </S.UserMessages>

            {awaitingResponse && (
              <S.BotMessages>
                Espere um minuto que estamos processando sua mensagem :)
              </S.BotMessages>
            )}

            {error && (
              <S.BotMessages>
                Ocorreu um erro...
              </S.BotMessages>
            )}
          </S.MessagesWrapper>
        </S.Messages>

        <S.MessageWrapper>
          <Controller
            control={control}
            render={({ onChange, onBlur, renderValue }) => (
              <S.MessageInput
                onBlur={onBlur}
                placeholder='Digite sua mensagem'
                placeholderTextColor='#fff'
                value={awaitingResponse ? 'Aguarde...' : renderValue}
                onChangeText={(value) => onChange(value)}
                editable={!awaitingResponse}
              />
            )}
            name='mensagem'
            defaultValue=''
          />

          <S.SubmitButton
            onPress={handleSubmit(onSubmit)}
            reset
            disabled={awaitingResponse}
          >
            <S.ButtonText>
              Enviar
            </S.ButtonText>
          </S.SubmitButton>
        </S.MessageWrapper>
      </S.HomeWrapper>
    </SafeAreaView>
  );
};

export default Home;
