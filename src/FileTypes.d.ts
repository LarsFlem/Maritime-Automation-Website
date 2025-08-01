declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.pdf" {
  const src: string;
  export default src;
}

declare module 'react-pdf' {
  import * as React from 'react';
  export const Document: React.FC<any>;
  export const Page: React.FC<any>;
}
