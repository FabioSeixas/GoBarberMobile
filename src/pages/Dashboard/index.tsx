import React from 'react';

import { View, Button, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View>
      <Text
        style={{
          fontSize: 50,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#999',
        }}
      >
        Autenticado!
      </Text>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
