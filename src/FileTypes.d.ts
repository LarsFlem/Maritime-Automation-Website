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

interface Window {
  MSStream?: any;
}
