import { useRef, useState } from "react"

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('0')

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0')
        setNumeroAnterior('0')
    }


    const botonDividir = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.dividir
    }

    const botonMultiplicar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.multiplicar
    }

    const botonRestar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.restar
    }

    const botonSumar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.sumar
    }

    const calcular = () => { 
        if (numero === '0' && numeroAnterior === '0') return;
        const numero1 = Number ( numero )
        const numero2 = Number ( numeroAnterior)

        switch ( ultimaOperacion.current ) {
            case Operadores.sumar:
                setNumero( `${numero1 + numero2}` )
                break;
            case Operadores.restar:
                setNumero( `${numero2 - numero1}` )
                break;
            case Operadores.multiplicar:
                setNumero( `${numero1 * numero2}` )
                break;
            case Operadores.dividir:
                setNumero( `${numero2 / numero1}` )
                break;

        }
        setNumeroAnterior('0')
     }



    const armarNumero = (numeroTexto: string) => { 
        // no aceptar doble punto
        if ( numero.includes('.') && numeroTexto === '.') return;
        
        if ( numero.startsWith('0') || numero.startsWith('-0') ) {

            // evaluar punto decimal
            if ( numeroTexto === '.' ) {
                setNumero ( numero + numeroTexto )

                // evaluar punto decima
            } else if ( numeroTexto === '0' && numero.includes('.') ) {
                setNumero(numero + numeroTexto)

                // evaluar numero diferente de 0 sin punto
            } else if ( numeroTexto !== '0' && !numero.includes('.') ) {
                setNumero(numeroTexto)

                // evitar ceros innecesarios al inicio
            } else if ( numeroTexto === '0' && !numero.includes('.') ) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto)
            }

        } else {
            setNumero(numero + numeroTexto)
        }

    }

    const positivoNegativo = () => { 
        if ( numero.includes('-') ){
            setNumero( numero.replace('-', '') )
        } else {
            setNumero('-' + numero)
        }
     }

     const eliminarNumero = () => { 
        if (numero.length < 2 || (numero.includes('-') && numero.length < 3) ) {
            setNumero('0')
        } else {
            setNumero(numero.slice(0, -1))
        }
      }

      const cambiarNumeroPorAnterior = () => { 
        if (numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0,-1))
        } else {
            setNumeroAnterior(numero)
        }
        setNumero('0')
       }

       return {
        numero,
        numeroAnterior,
        limpiar,
        calcular,
        positivoNegativo,
        eliminarNumero,
        botonDividir,
        botonMultiplicar,
        botonRestar,
        botonSumar,
        armarNumero
       }

}
