import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen'
import './src/theme/AppTheme'
import { styles } from './src/theme/AppTheme'

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'
      />
      <CalculadoraScreen/>
    </SafeAreaView>
  )
}

export default App;