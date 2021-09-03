const circunferenciaArea = radio => {
    if(!Number(radio) || radio <= 0) return `Valor inválido, tenga en cuenta que tiene que ser un número mayor que 0`
    return(((radio**2) * Math.PI).toFixed(2))
}

circunferenciaArea(2)