import { Box, Card, CardContent, Link, Typography } from '@mui/material';
import { Fragment, memo, type JSX } from 'react';

type Appendix = {
  id: number;
  text: string;
  url: string;
};

const appendixList: Appendix[] = [
  { id: 1, text: 'Jest 公式ドキュメント', url: 'https://jestjs.io/' },
  { id: 2, text: 'Jestでテストを書こう', url: 'https://typescriptbook.jp/tutorials/jest' },
  {
    id: 3,
    text: '初めての自動テスト ―Webシステムのための自動テスト基礎',
    url: 'https://www.oreilly.co.jp/books/9784873118161',
  },
  {
    id: 4,
    text: 'フロントエンド開発のためのテスト入門 今からでも知っておきたい自動テスト戦略の必須知識',
    url: 'https://www.shoeisha.co.jp/book/detail/9784798178639',
  },
];

const AppendixPage = (): JSX.Element => {
  return (
    <Fragment>
      <Box mt={5} ml={3}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Appendix
        </Typography>
      </Box>
      <Box mt={5} ml={3}>
        {appendixList.map(appendix => (
          <Card key={appendix.id} sx={{ marginTop: '8px' }}>
            <CardContent>
              <Typography fontWeight="bold">{appendix.text}</Typography>
              <Link href={appendix.url} target="_blank" rel="noopener">
                {appendix.url}
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Fragment>
  );
};

export default memo(AppendixPage);
