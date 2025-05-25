import { memo, type JSX } from 'react';
import { Answer } from '../components/Answer';

const MockApiResponsePage = (): JSX.Element => {
  const codeString = `import * as mockApiResponse from '../mockApiResponse';
import { getFirstUsersName } from '../mockApiResponse';

// mockApiResponse ファイルのモックを準備
jest.mock('../mockApiResponse');
// mockApiResponse 内の getFirstUsersName 関数のモックを準備
const mockData = jest.spyOn(mockApiResponse, 'getFirstUsersName');

describe('getFirstUsersNameのテスト', () => {
  describe('取得に成功した時のテスト', () => {
    test('ユーザ名を返す', async () => {
      // 取得に成功した時に期待するレスポンスを記述する
      mockData.mockResolvedValueOnce('Leanne Graham');
      // getFirstUsersNameが成功した時の値を記述する
      await expect(getFirstUsersName()).resolves.toBe('Leanne Graham');
    });
    test('実行されたことの検証', () => {
      // 関数のモックを定義する
      const mockFunction = jest.fn();
      mockFunction();
      // getFirstUsersNameが実行された時の値を記述する
      expect(mockFunction).toHaveBeenCalled;
    });
    test('実行回数の検証', () => {
      // 関数のモックを定義する
      const mockFunction = jest.fn();
      mockFunction();
      // getFirstUsersNameが実行された回数の期待値を記述する
      expect(mockFunction).toHaveBeenCalledTimes(1);
    });
  });
  describe('取得に失敗した時のテスト', () => {
    test('ユーザは存在しませんを返す', async () => {
      // 取得に失敗した時に期待するレスポンスを記述する
      mockData.mockRejectedValueOnce('ユーザは存在しません');
      // getFirstUsersNameが失敗した時の値を記述する
      await expect(getFirstUsersName()).rejects.toBe('ユーザは存在しません');
    });
  });
});
`;

  const points = [
    {
      content: 'Mock Functions',
      urls: ['https://jestjs.io/docs/mock-functions', 'https://jestjs.io/docs/mock-function-api'],
    },
    {
      content: 'モックとスタブの違いを聞かれて即答できなかったので調べました',
      urls: ['https://zenn.dev/k0kishima/articles/b290a9027ca039'],
    },
  ];

  return (
    <Answer
      title="mockApiResponse関数のユニットテスト"
      codeString={codeString}
      points={points}
      hintText="★APIにリクエストする部分をモックする必要があります"
    />
  );
};

export default memo(MockApiResponsePage);
