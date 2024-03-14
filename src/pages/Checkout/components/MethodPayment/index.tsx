import { Bank, CreditCard, Money } from 'phosphor-react';
import { MethodPaymentContainer, MethodPaymentLabel, Radio } from './styles'
import { useContext, useEffect, useRef, useState } from 'react';
import { PaymentMethod, UserContext } from '../../../../contexts/UserContext';
import { Methods } from '../../../../enum';

interface MethodPaymentProps {
  method: "credit" | "debit" | "cash";
}

export function MethodPayment({ method }: MethodPaymentProps) {
  const [isHover, setIsHover] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { setPaymentMethod, paymentMethod } = useContext(UserContext);
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
      const selectedMethod: PaymentMethod = radioRef.current.value as PaymentMethod;

      setPaymentMethod(selectedMethod);
    }
  }

  useEffect(() => {
  }, [paymentMethod])

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
        <MethodPaymentLabel>{Methods[method]}</MethodPaymentLabel>
      </div>
    </MethodPaymentContainer>
  )
}