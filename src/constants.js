const ERROR_MESSAGES = {
  lottoAmountError: '[ERROR] 로또 구입 금액은 1,000단위로 입력해주세요.',
  lottoCountError: '[ERROR] 로또 번호는 6개여야 합니다.',
  lottoRangeError: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  numberSeparatorError:
    '[ERROR] 당첨 번호는 쉼표(,)를 기준으로 구분해야 합니다.',
};

const INPUT_MESSAGES = {
  lottoAmountInput: '구입 금액을 입력해 주세요.',
  matchNumberInput: '당첨 번호를 입력해 주세요.',
  bonusNumberInput: '보너스 번호를 입력해 주세요.',
};

const OUTPUT_MESSAGES = {
  matchStatistics: '당첨 통계',
};

const SIGNS = {
  hyphen: '-',
  threeHyphen: '---',
};

export { ERROR_MESSAGES, INPUT_MESSAGES, OUTPUT_MESSAGES, SIGNS };
