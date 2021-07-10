import React from 'react'
//styles
import { FormField, FormInput, FormButton } from './styles'

const Form = ({ fields = [], onSubmit }) =>
    <form onSubmit={onSubmit}>
        {
            fields.length && fields.map(({ name, placeholder, type = 'text', label = true }) =>
                <FormField class="field is-horizontal">
                    {label && <label class="label boldtext">{name}</label>}
                    <div class="field-body">
                        <FormInput name={name} placeholder={placeholder} type={type} required />
                    </div>
                </FormField>
            )
        }
        <FormButton type="submit" required >Send</FormButton>

    </form>

export default Form;
