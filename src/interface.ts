export interface Coffee {
  id: string,
  name: string,
  price: string,
  type: string[],
  description: string,
  image: string
}

export interface Address {
  zip: string,
  street: string,
  state: string,
  city: string,
  district: string,
  number: number,
  addition?: string
}