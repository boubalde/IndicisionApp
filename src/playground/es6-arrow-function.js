const multiplier= {
    numbers: [1, 2, 5, 10, 14, 45],
    multiplyBy: 2,
multiply(){
    return this.numbers.map((number) => this.multiplyBy *  number)
}
};
console.log(multiplier.multiply());