const formatPrices = (price: number) => {
    const formatedPrice = price.toFixed(2).replace(".", ",");

    return formatedPrice;
};

export default formatPrices;
