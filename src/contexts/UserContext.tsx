import { ReactNode, createContext, useState } from "react";
import { Address } from "../interface";


export type PaymentMethod = "credit" | "debit" | "cash";
interface UserContextType {
  addressData: Address,
  paymentMethod: PaymentMethod
  setAddressData: (data: Address) => void
  setPaymentMethod: (method: PaymentMethod) => void;
}

interface UserContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cash")
  const [addressData, setAddressData] = useState<Address>({
    zip: "",
    street: "",
    number: 0,
    addition: "",
    district: "",
    city: "",
    state: ""
  })

  return (
    <UserContext.Provider value={{
      paymentMethod,
      setPaymentMethod,
      setAddressData,
      addressData
    }}>
      {children}
    </UserContext.Provider>
  )
}