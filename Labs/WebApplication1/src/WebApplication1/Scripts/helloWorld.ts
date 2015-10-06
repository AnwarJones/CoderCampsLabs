function calculateTax(price, taxRate?) {
    taxRate = taxRate || .08

    return price + (price * taxRate);
}




