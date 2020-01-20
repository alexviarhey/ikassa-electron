import React from 'react'
import {AddInput, InputsFormWrapper, CenterInputsWrapper, InputsOuter} from "./add-form-style";
import {useForm} from 'react-hook-form'
import {Form} from "../../../styles/Container";
import {AddProductButton} from "../../../styles/Buttons";
import {AddButtonContainer} from "../sale-page-styles";


const AddProductForm = ({addItem}) => {

    const {handleSubmit, register, setValue} = useForm();

    const onSubmit = (formData) => {
        addItem(formData);
        setValue('name', '');
        setValue('number', '');
        setValue('amount', '');
        setValue('sale', '')
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputsOuter>
                <InputsFormWrapper>
                    <AddInput ref={register} name='name' placeholder='Название'/>
                    <CenterInputsWrapper>
                        <AddInput ref={register} name='number' placeholder='0'/>
                        <AddInput ref={register} name='sale' placeholder='0%'/>
                    </CenterInputsWrapper>
                    <AddInput ref={register} name='amount' noBorder placeholder='0 BYN'/>
                </InputsFormWrapper>
            </InputsOuter>
            <AddButtonContainer>
                <AddProductButton type='submit'>Добавить товар</AddProductButton>
            </AddButtonContainer>
        </Form>
    )
};


export default AddProductForm