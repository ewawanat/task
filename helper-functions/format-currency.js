export const formatCurrency = (amount, currency = "GBP") =>
    new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: currency,
    }).format(amount);
