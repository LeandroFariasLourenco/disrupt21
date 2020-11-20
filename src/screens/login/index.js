import React, { useState, useEffect } from 'react';
import { SafeAreaView, AsyncStorage } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import axios from 'axios';

import Button from '@Components/Button';

import { formFields } from '@Resources/login';

import * as S from './styled';

const Login = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const [error, setError] = useState(false);
  const [dataFilled, setDataFilled] = useState(false);

  const onSubmit = ({ username, password }) => {
    if (!username || !password) {
      setDataFilled(true);
      return;
    }

    setError(false);
    setDataFilled(false);
    axios.post('https://jarvan-api.herokuapp.com/auth', {
      username,
      password,
    })
      .then(async (response) => {
        const { data: { id } } = response;
        await AsyncStorage.setItem('AccessToken', id);
        navigation.navigate('Home');
        return response;
      })
      .catch((err) => {
        setError(true);
        return err;
      });
  };

  return (
    <SafeAreaView>
      <S.LoginWrapper>
        <S.Heading>
          <S.HeadingText>
            Jarvan
          </S.HeadingText>
        </S.Heading>

        {error && (
          <S.ErrorMessage>
            Ops... Os dados estão corretos?
          </S.ErrorMessage>
        )}

        {dataFilled && (
          <S.ErrorMessage>
            Favor preencher todos os campos
          </S.ErrorMessage>
        )}

        {formFields.map(({ id, name, placeholder }) => (
          <Controller
            key={id}
            control={control}
            render={({ onChange, onBlur, renderValue }) => (
              <S.TextInput
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={renderValue}
                placeholder={placeholder}
                secureTextEntry={name === 'password'}
              />
            )}
            name={name}
            defaultValue=''
          />
        ))}

        <Button
          onPress={handleSubmit(onSubmit)}
          text='Login'
        />
      </S.LoginWrapper>
    </SafeAreaView>
  );
};

Login.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
