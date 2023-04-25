const filterDesc = (desc) => {
    return desc.length < 27 ? desc : `${desc.substring(0, 23)}...`
}

const formattedMoney = (value) => (value / 100).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const calculatesTheDiscount = (value, discount) => {
    return (value - (parseFloat(discount) / 100 * value)).toFixed(0)
}


export { filterDesc, formattedMoney, calculatesTheDiscount }