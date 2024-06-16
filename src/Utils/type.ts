export type AuthRegisterProps = {
  firstName: string;
  lastName: string;
  pseudo: string;
  age: number;
  city: string;
  email: string;
  password: string;
  confirmPassword: string;
  prompCode?: string;
};

export type AuthLoginProps = {
  email: string;
  password: string;
};

export type RoleCreateOrUpdateProps = {
  id?: string;
  name: string;
};

export type CryptoCreateOrUpdateProps = {
  id?: string;
  name: string;
  value: number;
  quantity: number;
  image: string;
};

export type CryptoBuyOrOfferOrUpdateProps = {
  id?: string;
  id_crypto: string;
  amount: number;
};

export type CryptoDeleteProps = {
  id: string;
};

export type TradeProps = {
  id_offer: string;
};

export type PromoCodeCreateOrUpdateProps = {
  id?: string;
  name: string;
  value: number;
};

export type CryptoAllProps = {
  id?: string;
  name: string;
  value: string;
  image: string;
  quantity: string;
  created_at: string;
  updated_at?: string;
};

export type ButtonProps = {
  title: string;
};

export type CryptoProps = {
  created_at: string;
  id: string;
  image: string;
  name: string;
  quantity: number;
  updated_at: string;
  value: number;
};

export type OffersProps = {
  id: string;
  User: {
    pseudo: string;
  };
  amount: number;
  created_at: string;
  id_user: string;
  Crypto: CryptoProps;
};
