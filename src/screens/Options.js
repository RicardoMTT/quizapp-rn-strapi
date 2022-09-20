import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants';
import axios from 'axios';

import {useNavigation} from '@react-navigation/native';

const Options = () => {
  const navigation = useNavigation();
  const [options, setOptions] = useState([]);
  const handleNavigator = tipo => {
    navigation.navigate('Quiz', {
      tipo,
    });
  };
  useEffect(() => {
    getOptions();
  }, []);

  const getOptions = () => {
    axios
      .get('http://192.168.1.4:3002/api/type-quizs')
      // .get('http://192.168.1.4:3001/tipo-cuestionarios')
      .then(resp => {
        setOptions(resp.data.data);
      })
      .catch(err => {
        console.log('ERROR -> ', err);
      });
  };
  //Aca se mostraran los tipos de cuestionarios
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 16,
        backgroundColor: COLORS.background,
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
      }}>
      {options.length > 0 ? (
        options.map(option => {
          return (
            <View
              key={option.attributes.createdAt}
              style={{
                width: '40%',
                backgroundColor: '#7B42DB',
                height: 120,
                borderRadius: 20,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }}>
              <TouchableOpacity
                onPress={() => handleNavigator(option.attributes.tipo)}
                style={{
                  width: 110,
                  height: 110,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: COLORS.white}}>
                  {option.attributes.tipo}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })
      ) : (
        <ActivityIndicator color={'skyblue'} size="large" />
      )}
    </View>
  );
};
export default Options;
