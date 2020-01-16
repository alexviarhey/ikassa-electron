import React, {useState} from 'react'
import {
    RadioButton,
    RadioButtonLabel,
    RadioButtonsForm,
    RadioButtonsFormBottomBlock,
    RadioInputsWrapper
} from "./payment-card";
import TotalAmount from "./TotalAmount";
import {PaymentButton} from "../../../styles/Buttons";


const PaymentMethods = () => {
    const [paymentMethod, setPaymentMethod] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(paymentMethod)
    };

    return (
        <RadioButtonsForm onSubmit={handleSubmit}>
            <RadioInputsWrapper>
                <RadioButtonLabel title='Наличные' label='cash' paymentMethod={paymentMethod} htmlFor='cash'/>
                <RadioButton onChange={(e) => setPaymentMethod(e.currentTarget.value)} value='cash' id='cash'
                             name='paymentMethod' type='radio'/>

                <RadioButtonLabel title='Безнал' label='cashless' paymentMethod={paymentMethod} htmlFor='cashless'/>
                <RadioButton onChange={(e) => setPaymentMethod(e.currentTarget.value)} value='cashless' id='cashless'
                             name='paymentMethod' type='radio'/>

                <RadioButtonLabel title='Другие способы' paymentMethod={paymentMethod} label='another' htmlFor='another'/>
                <RadioButton onChange={(e) => setPaymentMethod(e.currentTarget.value)} value='another' id='another'
                             name='paymentMethod' type='radio'/>
            </RadioInputsWrapper>

            <RadioButtonsFormBottomBlock>
                <TotalAmount />
                <PaymentButton type='submit'>Оплатить</PaymentButton>
            </RadioButtonsFormBottomBlock>

        </RadioButtonsForm>
    )
};

export default PaymentMethods