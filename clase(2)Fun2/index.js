//Ejercicios 0 🌸

// const welcome = (nombre) => {
//     console.log (`Hola! Bien venida ${nombre}`)
// }
// welcome("Yamila")

//Ejercicios 1 🌸

// const sumar = (a, b) => {
//     return a + b
// }
// const restar = (a, b) => {
//     return a - b
// }
// const dividir = (a, b) => {
//     return a / b
// }
// const multiplicar = (a, b) => {
//     return a * b
// }
// document.write(`El resultado de la suma es: ${sumar (5, 2)}. `)
// document.write(`El resultado de la resta es: ${restar (5, 2)}. `)
// document.write(`El resultado de la divicion es: ${dividir (5, 2)}. `)
// document.write(`El resultado de la multiplicacion es: ${multiplicar (5, 2)}. `)

//Ejercicios 2 🌸

// const aumentarSueldo = (suledo) => {
//     const resultado = 9 * suledo / 100
//     return resultado + suledo
// }

//Ejercicio 3 🌸

// const datosPersonales = (nombre, edad, profesion, pais) => {
//     return `Hola mi nombre es: ${nombre} tengo ${edad}, vivo en ${pais} y soy ${profesion}.`
// }
// console.log(datosPersonales("Yamila", 26, "Estudiante", "Argentina"))

//Ejercicio 4 🌸

// const iva = (precio) => {
//     const resultado = 21 * precio / 100
//     return resultado + precio
// }

//Ejercicio 5🌸

const primerNumero = Number(prompt("Ingresa un numero"))
const segundoNumero = Number(prompt("Ingresa tu segundo numero"))

const sumar = () => {
    const resultado = primerNumero + segundoNumero
    return resultado
}
const restar = () => {
    const resultado = primerNumero - segundoNumero
    return resultado
}
const dividir = () => {
    const resultado = primerNumero / segundoNumero
    return resultado
}
const multiplicar = () => {
    const resultado = primerNumero * segundoNumero
    return resultado
}
document.write(`El resultado de la suma es: ${sumar()}. `)
document.write(`El resultado de la resta es: ${restar()}. `)
document.write(`El resultado de la divicion es: ${dividir()}. `)
document.write(`El resultado de la multiplicacion es: ${multiplicar()}. `)



