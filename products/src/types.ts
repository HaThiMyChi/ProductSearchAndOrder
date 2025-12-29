export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  isPrescription: boolean;
}

export interface ICartItem extends IProduct {
  qty: number;
}
