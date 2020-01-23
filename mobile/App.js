import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes'
import { StatusBar } from 'react-native'

export default function App() {
  return (
    <>
    <StatusBar barStyle = "light-content" backgroundColor="#7D40E7" />
    <Routes />
    </>
  );
}
