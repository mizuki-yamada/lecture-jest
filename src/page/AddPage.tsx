import { memo, type JSX } from 'react';
import { Answer } from '../components/Answer';

const AddPage = (): JSX.Element => {
  const codeString = `import { add } from '../add';

※aとbに何の数字を入れるかは自由です
describe('add関数のテスト', () => {
  test('aとbの合計が100を超える場合、1000を返すこと', () => {
    expect(add(50, 51)).toBe(1000);
  });
  test('aとbの合計が100の場合、100を返すこと', () => {
    expect(add(50, 50)).toBe(100);
  });
  test('aとbの合計が0を下回る場合、-1000を返すこと', () => {
    expect(add(-3, 0)).toBe(-1000);
  });
  test('aとbの合計が0の場合、0を返すこと', () => {
    expect(add(-3, 3)).toBe(0);
  });
  test('それ以外は、aとbの合計値を返すこと', () => {
    expect(add(5, 5)).toBe(10);
  });
})`;

  const points = [{ content: 'add関数内の条件分岐を全て網羅できるかがポイントです' }];

  return <Answer title="add関数のユニットテスト" codeString={codeString} points={points} />;
};

export default memo(AddPage);
