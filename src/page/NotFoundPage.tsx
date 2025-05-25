import { Box, Typography } from '@mui/material';
import { memo, type JSX } from 'react';

const NotFoundPage = (): JSX.Element => {
  return (
    <Box mt={5} ml={3}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        何もありません
      </Typography>
    </Box>
  );
};

export default memo(NotFoundPage);
