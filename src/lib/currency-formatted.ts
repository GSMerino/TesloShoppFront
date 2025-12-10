



export const currencyFormatted = (price: number) => {


    return price.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
    })
}