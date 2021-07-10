import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
//API
import Api from '../../api'
//components
import Form from '../../components/Form'
import { Title } from '../../components/common'
import { Container, FormContainer } from './styles'
import { FormButton } from '../../components/Form/styles'

function Register({ history }) {
    const [feedback, setFeedback] = useState('')
    const formItems = [
        { name: 'email', placeholder: 'Insert Email' },
        { name: 'password', placeholder: 'Insert Password', type: 'password' },
        { name: 'repassword', placeholder: 'Repeat Password', type: 'password', label: false },
    ]

    const handleRegister = async (event) => {
        event.preventDefault()

        const {
            email: { value: email },
            password: { value: password },
            repassword: { value: repassword },
        } = event.target

        try {
            await Api.register(email, password, repassword)
            history.push('/login')
        } catch ({ message }) {
            setFeedback(message)
        }
    }

    return <Container>
        <FormContainer>
            <Title>Register</Title>
            <Form fields={formItems} onSubmit={handleRegister} />
            <FormButton onClick={() => history.push('/login')}>Already registered?</FormButton>
            <h3 className="feedback">{feedback}</h3>
        </FormContainer>
    </Container>
}

export default withRouter(Register);
