declare module "react-css-modules" {
  export default function CSSModules(component?: any, styles?: any, options?: any): any
}

declare module __React {
   interface HTMLAttributes {
     styleName?: string;
   }

   interface Props<T> {
     styleName?: string;
   }
}
