import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES, MATCH_COUNT } from './constants.js';

class LottoResult {
  #lottoWinningNumbers;
  #lottoBonusNumber;

  constructor(purchasedLottos) {
    this.purchasedLottos = purchasedLottos;
    this.winningRank = {
      [MATCH_COUNT.three]: 0,
      [MATCH_COUNT.four]: 0,
      [MATCH_COUNT.five]: 0,
      [MATCH_COUNT.six]: 0,
      bonus: 0,
    };
  }

  async #getLottoWinningNumbers() {
    return await Console.readLineAsync(INPUT_MESSAGES.matchNumberInput);
  }

  async #getBonusNumbers() {
    return await Console.readLineAsync(INPUT_MESSAGES.bonusNumberInput);
  }

  #countWinningNumber(purchasedLotto, winningNumber, count) {
    if (purchasedLotto.includes(Number(winningNumber))) {
      return (count += 1);
    }
    return count;
  }

  #compareLottoNumbers(purchasedLotto) {
    let count = 0;
    this.#lottoWinningNumbers.forEach((winningNumber) => {
      count = this.#countWinningNumber(purchasedLotto, winningNumber, count);
    });
    return count;
  }

  #bonus(purchasedLotto) {
    if (purchasedLotto.includes(this.#lottoBonusNumber)) {
      this.winningRank.bonus += 1;
    } else this.winningRank[MATCH_COUNT.five] += 1;
  }

  #toRank(matchCount, purchasedLotto) {
    if (matchCount === MATCH_COUNT.three)
      this.winningRank[MATCH_COUNT.three] += 1;
    if (matchCount === MATCH_COUNT.four)
      this.winningRank[MATCH_COUNT.four] += 1;
    if (matchCount === MATCH_COUNT.five) this.#bonus(purchasedLotto);
    if (matchCount === MATCH_COUNT.six) this.winningRank[MATCH_COUNT.six] += 1;
  }

  #getWinningResult() {
    this.purchasedLottos.map((purchasedLotto) => {
      const matchCount = this.#compareLottoNumbers(purchasedLotto);
      this.#toRank(matchCount, purchasedLotto);
    });
  }

  async lottoResult() {
    const winningNumbers = await this.#getLottoWinningNumbers();
    this.#lottoWinningNumbers = winningNumbers.split(',');
    this.#lottoBonusNumber = await this.#getBonusNumbers();
    this.#getWinningResult();
  }
}

export default LottoResult;
