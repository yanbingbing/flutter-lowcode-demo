import * as React from 'react';
import { createElement } from 'react';

export interface ContainerProps {
  backgroundColor?: string;
  margin?: string;
  padding?: string;
  direction?: 'horizontal' | 'vertical';
}

const Container: React.FC<ContainerProps> = function Container({
  children,
  backgroundColor,
  margin,
  padding,
  direction,
}) {
  return (
    <div className="container" style={{
      display: 'flex',
      margin: `${margin ?? 0}px`,
      backgroundColor: backgroundColor ?? '#fff',
      padding: `${padding ?? 0}px`,
      flexDirection: direction === 'horizontal' ? 'row' : 'column',
    }}>
      {children}
    </div>
  );
};

Container.displayName = 'Container';
export default Container;


