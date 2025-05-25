import { memo, type JSX } from 'react';
import { Answer } from '../components/Answer';

const IsPrime = (): JSX.Element => {
  const codeString = `import { isPrime } from '../isPrime'; // テスト対象の関数をインポート

describe('isPrimeのテスト', () => {
  // 素数ではないエッジケースのテスト
  test('1以下の場合、falseを返すこと', () => {
    expect(isPrime(-10)).toBe(false); // 負の数
    expect(isPrime(-1)).toBe(false); // 負の数
    expect(isPrime(0)).toBe(false); // 0
    expect(isPrime(1)).toBe(false); // 1
  });

  // 最小の素数である2のテスト
  test('2はtrueを返すこと', () => {
    expect(isPrime(2)).toBe(true);
  });

  // いくつかの素数のテスト
  test('素数の場合trueを返すこと', () => {
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(19)).toBe(true);
    expect(isPrime(23)).toBe(true);
    expect(isPrime(997)).toBe(true);
  });

  // いくつかの合成数（素数ではない数）のテスト
  test('素数でない場合はfalseを返すこと', () => {
    expect(isPrime(4)).toBe(false); // 2*2
    expect(isPrime(6)).toBe(false); // 2*3
    expect(isPrime(8)).toBe(false); // 2*4
    expect(isPrime(9)).toBe(false); // 3*3
    expect(isPrime(10)).toBe(false); // 2*5
    expect(isPrime(15)).toBe(false); // 3*5
    expect(isPrime(25)).toBe(false); // 5*5
    expect(isPrime(49)).toBe(false); // 7*7
    expect(isPrime(100)).toBe(false); // 10*10
    expect(isPrime(121)).toBe(false); // 11*11
  });

  // 平方根が整数の合成数のテスト (ループの終了条件の確認のため)
  test('平方根が整数の合成数にはfalseを返すこと', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(25)).toBe(false);
    expect(isPrime(49)).toBe(false);
    expect(isPrime(121)).toBe(false);
    expect(isPrime(169)).toBe(false);
  });
});
`;

  const points = [{ content: '全てのケースを網羅できるかがポイントです' }];
  return <Answer title="isPrime関数のユニットテスト" codeString={codeString} points={points} />;
};

export default memo(IsPrime);
