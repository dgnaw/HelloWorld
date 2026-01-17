import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Square from './component/Square';
export default function App() {
  return (
    <SafeAreaProvider>
      <Square/>
    </SafeAreaProvider>
  );
};

