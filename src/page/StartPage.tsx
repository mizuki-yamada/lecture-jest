import { Box, Typography, CardContent, Card } from '@mui/material';
import { memo, type JSX } from 'react';

const StartPage = (): JSX.Element => {
  return (
    <Box mt={5} ml={3}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        ユニットテスト演習解答例
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">このページの概要</Typography>
          <Typography variant="body1">
            このページは、ユニットテスト演習の解答例を載せているものです。
            <br />
            演習の解答例、演習を解くにあたり必要な知識をまとめています。
          </Typography>
          <Typography variant="h6" mt={2}>
            使い方
          </Typography>
          <Typography variant="body1">
            左上のメニューボタンをクリックすると、各演習問題の解答例に移動できます。
          </Typography>
          <Typography variant="h6" mt={2}>
            演習の内容
          </Typography>
          <Typography variant="body1">この演習で扱う内容は以下の通りです。</Typography>
          <ul>
            <li>シンプルな関数のユニットテスト</li>
            <li>現在時刻に依存した関数のユニットテスト</li>
            <li>非同期処理を含む関数のユニットテスト</li>
            <li>APIとの通信を含む関数のユニットテスト</li>
          </ul>
        </CardContent>
      </Card>
    </Box>
  );
};

export default memo(StartPage);
