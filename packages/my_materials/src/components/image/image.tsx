import * as React from 'react';
import { createElement } from 'react';
import './image.less'

export interface ImageProps {
  src: string;
  width?: string;
  height?: string;
}

const Image: React.FC<ImageProps> = function Image({
  src = '',
  width = '200',
  height = '200',
}) {
  return (
    <img className="my-image" src={src} style={{
      width: `${width}px`,
      height: `${height}px`,
    }} />
  );
};

Image.displayName = 'Image';
export default Image;


