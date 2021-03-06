import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components/atoms';
import {RootStackParamList} from '../../navigations';
import {AuthStackParamList} from '../../navigations/auth-navigator';

interface Props {
  navigation: CompositeNavigationProp<
    StackNavigationProp<RootStackParamList, 'Authentication'>,
    StackNavigationProp<AuthStackParamList, 'LogIn'>
  >;
}

const LogInScreen = (props: Props) => {
  const {navigation} = props;
  return (
    <View>
      <Text>Hello LogInScreen!</Text>
      <Button title="לחץ" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

export default LogInScreen;
