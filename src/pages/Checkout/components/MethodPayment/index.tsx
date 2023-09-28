import { Bank, CreditCard, Money } from 'phosphor-react';
import { MethodPaymentContainer, MethodPaymentLabel, Radio } from './styles'
import { useRef, useState } from 'react';

interface MethodPaymentProps {
  method: "credit" | "debit" | "cash";
}

enum Methods {
  credit = "Cartão de crédito",
  debit = "Cartão de débito",
  cash = "Dinheiro"
}

export function MethodPayment({ method }: MethodPaymentProps) {
  const [isHover, setIsHover] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const radioRef = useRef<HTMLInputElement>(null);

  function handleHover() {
    setIsHover(true)
  }

  function handlerIsNotHover() {
    setIsHover(false)
  }

  function handleClick() {
    if (radioRef.current !== null) {
      setIsChecked(radioRef.current.checked);
    }
  }

  return (
    <MethodPaymentContainer
      onMouseOver={handleHover}
      ishover={isHover}
      ischecked={isChecked}
      onMouseOut={handlerIsNotHover}
    >
      <Radio
        name="paymentMethod"
        value={method}
        ref={radioRef}
        onClick={handleClick}
      />
      <div>
        {
          method === "credit" ?
            <CreditCard size={16} /> : method === "debit" ?
              <Bank size={16} /> :
              <Money size={16} />
        }
        <MethodPaymentLabel> {Methods[method]}</MethodPaymentLabel>
      </div>
    </MethodPaymentContainer>
  )
}