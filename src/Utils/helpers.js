const filterDesc = (desc) => {
    return desc.length < 27 ? desc : `${desc.substring(0, 23)}...`
}

const formattedMoney = (value) => (value / 100).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const validateTheEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const calculatesTheDiscount = (value, discount) => {
    return (value - (parseFloat(discount) / 100 * value)).toFixed(0)
}


export { filterDesc, formattedMoney, calculatesTheDiscount, validateTheEmail }