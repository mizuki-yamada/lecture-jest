import { memo, type JSX } from 'react';
import { Answer } from '../components/Answer';

const MockMonth = (): JSX.Element => {
  const codeString = `import { getCurrentSeason } from '../mockMonth';

describe('getCurrentSeasonのテスト', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  test('1~3月の日付には春という文字列を返す', () => {
    jest.setSystemTime(new Date(2025, 1, 1, 0, 0));
    expect(getCurrentSeason()).toBe('春');
  });
  test('4~6月の日付には夏という文字列を返す', () => {
    jest.setSystemTime(new Date(2025, 4, 1, 0, 0));
    expect(getCurrentSeason()).toBe('夏');
  });
  test('7~9月の日付には秋という文字列を返す', () => {
    jest.setSystemTime(new Date(2025, 7, 1, 0, 0));
    expect(getCurrentSeason()).toBe('秋');
  });
  test('10~12月の日付には冬という文字列を返す', () => {
    jest.setSystemTime(new Date(2025, 10, 1, 0, 0));
    expect(getCurrentSeason()).toBe('冬');
  });
});
`;

  const points = [
    { content: 'Timer Mocks', urls: ['https://archive.jestjs.io/docs/en/24.x/timer-mocks'] },
    {
      content: 'Jestで時間に依存する処理のテストを書く',
      urls: ['https://zenn.dev/dev_commune/articles/f04b8ba2b48df3'],
    },
  ];
  return (
    <Answer
      title="mockMonth関数のユニットテスト"
      codeString={codeString}
      points={points}
      hintText="★日付を取得する部分をモックする必要があります"
    />
  );
};

export default memo(MockMonth);
