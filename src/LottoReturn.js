class LottoReturn {
  #purchasedAmount;
  #amount = {
    3: 5000,
    4: 50000,
    5: 1500000,
    6: 2000000000,
    bonus: 30000000,
  };

  constructor(purchasedAmount, winningRank) {
    this.#purchasedAmount = purchasedAmount;
    this.winningRank = winningRank;
  }

  #caculatelWinningAmount() {
    const winningAmount =
      this.winningRank[3] * this.#amount[3] +
      this.winningRank[4] * this.#amount[4] +
      this.winningRank[5] * this.#amount[5] +
      this.winningRank[6] * this.#amount[6] +
      this.winningRank.bonus * amount.bonus;
    return winningAmount;
  }

  caculateReturn() {
    const winningAmount = this.#caculatelWinningAmount();
    return (winningAmount / this.#purchasedAmount) * 100;
  }
}
export default LottoReturn;
