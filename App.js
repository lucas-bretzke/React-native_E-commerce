import { StatusBar } from 'react-native';
import React from 'react';
import Routes from './src/routes';
import { makeServer } from './src/server';

const server = makeServer();

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#38a69d" style="light" translucent={true} />
      <Routes />
    </>
  );
}