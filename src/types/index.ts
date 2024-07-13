export interface IProduct {
  id: string;
  title: string;
  category: string;
  image: string;
  price: number;
  description: string;
}

export interface IOrder {
  items: string[];
  total: number;
  address: string;
  payment: string;
  email: string;
	phone: string;
}

export interface IOrderSuccess {
  id: string;
  total: number;
}

export interface IOrderResult extends IOrder {
  id: string;
  error?: string
}

export interface IShopAPI {
  getProductList: () => Promise<IProduct[]>;
  getProduct: (id: string) => Promise<IProduct>;
  createOrder: (order: IOrder) => Promise<IOrderSuccess>;
}

export interface IAppState {
  catalog: IProduct[];
  selectedProduct: IProduct | null;
  order: IOrder | null;
  basket: string[] | null;
  preview: string | null;
  formErrors: FormErrors;
  
  // Пользовательские действия
  selectProduct(id: string): void;
  addProduct(id: string): void;
  removeProduct(id: string): void;
  
  // Вспомогательные методы
  clearBasket(): void;
  clearOrder(): void;
  validateOrder(data: FormErrors): boolean;

  // Работа с API
  setCatalog(): Promise<IProduct[]>;
  orderProduct(): Promise<IOrderSuccess>;
}

// Тип для обобщенной структуры ошибок в форме
export type FormErrors = Partial<Record<keyof IOrder, string>>;