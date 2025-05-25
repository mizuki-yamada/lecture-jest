import { memo, type JSX } from 'react';
import { Answer } from '../components/Answer';

const FizzBuzzPage = (): JSX.Element => {
  const codeString = `import { fizzbuzz } from '../fizzbuzz';

describe('fizzbuzz', () => {
  test('3の倍数の場合は "Fizz" を返す', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
    expect(fizzbuzz(6)).toBe('Fizz');
    expect(fizzbuzz(9)).toBe('Fizz');
  });

  test('5の倍数の場合は "Buzz" を返す', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
    expect(fizzbuzz(10)).toBe('Buzz');
    expect(fizzbuzz(20)).toBe('Buzz');
  });

  test('3と5の倍数の場合は "FizzBuzz" を返す', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
    expect(fizzbuzz(30)).toBe('FizzBuzz');
    expect(fizzbuzz(45)).toBe('FizzBuzz');
  });

  test('3の倍数でも5の倍数でもない場合は、その数を文字列として返す', () => {
    expect(fizzbuzz(1)).toBe('1');
    expect(fizzbuzz(2)).toBe('2');
    expect(fizzbuzz(4)).toBe('4');
    expect(fizzbuzz(7)).toBe('7');
  });
})`;

  const points = [{ content: 'fizzbuzzとは', urls: ['https://sitest.jp/blog/?p=3822'] }];

  return <Answer title="fizzbuzz関数のユニットテスト" codeString={codeString} points={points} />;
};

export default memo(FizzBuzzPage);
