import { ReactNode, createContext, useEffect, useState } from "react";
import { Address } from "../interface";


export type PaymentMethod = "credit" | "debit" | "cash";
interface UserContextType {
  addressData: Address,
  paymentMethod: PaymentMethod
  setAddressData: (data: Address) => void
  setPaymentMethod: (method: PaymentMethod) => void;
  loadedAddressData: {
    city: string
    state: string
  };
}

interface UserContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>()
  const [addressData, setAddressData] = useState<Address>({
    zip: "",
    street: "",
    number: 0,
    addition: "",
    district: "",
    city: "",
    state: ""
  })
  const [loadedAddressData, setLoadedAddressData] = useState({
    city: "",
    state: ""
  });

  useEffect(() => {
    function handleUpdateLoadedAdressData() {
      let loadedData = localStorage.getItem("userAdressData");
      if (loadedData && loadedData !== undefined !== null) {
        loadedData = JSON.parse(loadedData)
        setLoadedAddressData(loadedData)
      }
    } handleUpdateLoadedAdressData()
  }, [addressData])

  return (
    <UserContext.Provider value={{
      paymentMethod,
      setPaymentMethod,
      setAddressData,
      addressData,
      loadedAddressData
    }}>
      {children}
    </UserContext.Provider>
  )
}