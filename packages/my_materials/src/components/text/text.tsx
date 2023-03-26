import * as React from 'react';
import { createElement } from 'react';

export interface TextProps {
  content: string;
  color?: string;
  fontSize?: string;
  lineHeight?: string;
}

const Text: React.FC<TextProps> = function Text({
  content = '',
  color = '#000',
  fontSize = '16',
  lineHeight = '1.5',
}) {
  return (
    <p style={{
      maxWidth: '98vw',
      display: 'block',
      margin: '0 auto',
      color,
      fontSize: `${fontSize}px`,
      lineHeight: `${lineHeight}em`,
    }}>
      {content}
    </p>
  );
};

Text.displayName = 'Text';
export default Text;


