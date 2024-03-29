import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/AppTheme'


interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion: (valor: string) => void;
}

export const BotonCalc = ({texto, color = "#2D2D2D", ancho = false, accion}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => accion(texto)}
    >
      <View style={{
          ...styles.boton, 
          backgroundColor: color,
          width: (ancho ? 180 : 80)
        }}>
          <Text style={{
              ...styles.botonTexto,
              color: (color === '#9B9B9B' ? "black" : "white")
            }}>{texto}</Text>
      </View>
    </TouchableOpacity>
  )
}
