import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardContent,
  Card,
  Link,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { type JSX } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type AnswerProps = {
  title: string;
  codeString: string;
  hintText?: string;
  points?: { content: string; urls?: string[] }[];
};

export const Answer = ({ title, codeString, hintText, points }: AnswerProps): JSX.Element => {
  return (
    <Box mt={5} ml={3}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        {title}
      </Typography>
      {hintText && (
        <Typography variant="h6" gutterBottom fontSize="14px">
          {hintText}
        </Typography>
      )}
      {points && (
        <Card>
          <CardContent>
            <ul>
              {points.map((point, index) => {
                return (
                  <li key={index}>
                    {point.content}
                    <ul>
                      {point.urls?.map(url => {
                        return (
                          <li>
                            <Link href={url} target="_blank" rel="noopener">
                              {url}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      )}
      <Accordion sx={{ marginTop: '8px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">解答例</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SyntaxHighlighter language="typescript" style={docco}>
            {codeString}
          </SyntaxHighlighter>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
