const calculatePrices = (value: string, months: number) => {
    const totalPrice = Number(value);
    const discount = totalPrice * 0.6;
    const monthlyValue = totalPrice / months;
    const discountValue = totalPrice - discount;

    return {
        totalPrice,
        discount,
        monthlyValue,
        discountValue,
    };
};

export default calculatePrices;
