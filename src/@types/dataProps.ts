export interface DataProps {
  id: number;
  name: string;
  salePrice: number;
  promotionalPrice: number;
  imageUrl: string;
  description: string;
  stock: number;
  package: Object;
}

export interface RoutesDataProps {
  route: {
    params: {
      id: number;
      name: string;
      salePrice: number;
      promotionalPrice: number;
      imageUrl: string;
      description: string;
      stock: number;
      dimensions: {
        height: number;
        width: number;
        depth: number;
        weight: number;
      };
    };
  };
}
