import { memo, type JSX } from 'react';
import { Answer } from '../components/Answer';

const AsynchronousPage = (): JSX.Element => {
  const codeString = `import { timeOut, wait } from '../Asynchronous';

describe('wait関数のテスト', () => {
  describe('Promiseをreturnする書き方', () => {
    test('指定時間待つと、経過時間をもってresolveされる', () => {
      return wait(5).then((time) => {
        expect(time).toBe(5);
      });
    });
  });

  describe('rejectsマッチャーを使用した書き方', () => {
    test('指定時間待つと、経過時間をもってresolveされる', () => {
      const answer = wait(5);
      return expect(answer).resolves.toBe(5);
    });
  });

  describe('async/awaitを使用した書き方', () => {
    test('指定時間待つと、経過時間をもってresolveされる', async () => {
      const answer = wait(5);
      return await expect(answer).resolves.toBe(5);
    });
  });

  describe('Promiseの解決を待った書き方', () => {
    test('指定時間待つと、経過時間をもってresolveされる', async () => {
      const answer = await wait(5);
      return expect(answer).toBe(5);
    });
  });
});

describe('timeOut関数のテスト', () => {
  describe('Promiseをreturnする書き方', () => {
    test('指定時間待つと、経過時間をもってrejectされる', () => {
      return timeOut(5).catch((time) => {
        expect(time).toBe(5);
      });
    });
  });

  describe('resolvesを使用した書き方', () => {
    test('指定時間待つと、経過時間をもってrejectされる', () => {
      const answer = timeOut(5);
      return expect(answer).rejects.toBe(5);
    });
  });

  describe('async/awaitを使用した書き方', () => {
    test('指定時間待つと、経過時間をもってrejectされる', async () => {
      const answer = timeOut(5);
      return await expect(answer).rejects.toBe(5);
    });
  });

  describe('try..catch文を使った書き方', () => {
    // アサーションが実行されること自体を検証する
    expect.assertions(1);
    test('指定時間待つと、経過時間をもってrejectされる', async () => {
      try {
        await timeOut(5);
      } catch (error) {
        expect(error).toBe(5);
      }
    });
  });
});
`;

  const points = [
    {
      content: '非同期処理について',
      urls: [
        'https://zenn.dev/nameless_sn/articles/javascript_async_tutorial',
        'https://qiita.com/UTDoi/items/d49ea919818d9b519f93',
        'https://jsprimer.net/basic/async/',
      ],
    },
    {
      content: 'Testing Asynchronous Code',
      urls: ['https://jestjs.io/docs/asynchronous'],
    },
  ];
  return (
    <Answer title="asynchronous関数のユニットテスト" codeString={codeString} points={points} />
  );
};

export default memo(AsynchronousPage);
