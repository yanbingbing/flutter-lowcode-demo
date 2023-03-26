import * as React from 'react';
import { createElement } from 'react';
import { Button as NextButton } from '@alifd/next';

export interface ButtonProps {
  /**
   * 类型
   */
  type?: "primary" | "secondary" | "normal";
  content: string;
}

const Button: React.FC<ButtonProps> = function ColorfulButton({
  type = 'primary',
  content = ''
}) {
  return (
    <NextButton type={type} style={{
      display: 'block',
      margin: '0 auto',
      height: '36px',
    }}>{content || 'Click here'}</NextButton>
  );
};

Button.displayName = 'Button';
export default Button;


