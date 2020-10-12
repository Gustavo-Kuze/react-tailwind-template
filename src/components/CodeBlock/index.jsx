import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  materialLight,
  materialOceanic,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useSelector } from 'react-redux';

const CodeBlock = (props) => {
  const { language, value } = props;
  const theme = useSelector((state) => state.settings.theme);

  return (
    <SyntaxHighlighter
      language={language}
      style={theme.themeName === 'dark' ? materialOceanic : materialLight}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
