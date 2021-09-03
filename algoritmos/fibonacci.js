let secuencia = []

const fibonacci = (primero, segundo) => {
    secuencia.push(primero, segundo)
    if(primero===144) {
        console.log(secuencia.join(' '))
        return 
    }
    fibonacci((segundo + primero), (primero+segundo+segundo))
}

console.log(fibonacci(1, 2))