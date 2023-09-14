import { Bank, CreditCard, Money } from 'phosphor-react';
import { MethodPaymentContainer, MethodPaymentLabel, Radio } from './styles'

interface MethodPaymentProps {
  method: "credit" | "debit" | "cash";
}

enum Methods {
  credit = "Cartão de crédito",
  debit = "Cartão de débito",
  cash = "Dinheiro"
}

export function MethodPayment({ method }: MethodPaymentProps) {
  return (
    <MethodPaymentContainer>
      <Radio name="paymentMethod" value={method} />
      <div>
        {
          method === "credit" ? <CreditCard size={16} /> : method === "debit" ? <Bank size={16} /> : <Money size={16} />
        }
        <MethodPaymentLabel> {Methods[method]}</MethodPaymentLabel>
      </div>
    </MethodPaymentContainer>
  )
}