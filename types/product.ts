export interface Product {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
  };
  

 export type ProductsList = Product[]

 export enum Size {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL',
    XXL = 'XXL'
  }
  
  export type SizeList = Size[];
