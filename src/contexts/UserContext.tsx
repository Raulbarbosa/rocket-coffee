// import { ReactNode, createContext } from "react";
// import { Address } from "../interface";

// interface UserContextType {
//   address: Address,
//   paymentMethod: "credit" | "debit" | "cash",
//   setPaymentMethod: (method: "credit" | "debit" | "cash") => void;
// }

// interface UserContextProviderProps {
//   children: ReactNode
// }

// export const UserContext = createContext({} as UserContextType)

// export function UserContextProvider({ children }: UserContextProviderProps) {


//   return (
//     <UserContext.Provider>
//       {children}
//     </UserContext.Provider>
//   )
// }