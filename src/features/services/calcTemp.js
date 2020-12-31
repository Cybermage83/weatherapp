const calc = (calc, type) => {
    if (!type) {
        return (calc * 1.8 + 32).toFixed(0);
    }
    return calc;
}
export default calc;