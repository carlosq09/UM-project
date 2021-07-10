import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
//API
import Api from '../../api'
//components
import { Title } from '../../components/common'
import Form from '../../components/Form'
import { FormButton } from '../../components/Form/styles'
import { Container, FormContainer } from './styles'

function Register({ history }) {
    const [feedback, setFeedback] = useState('')
    const formItems = [
        { name: 'email', placeholder: 'Insert Email' },
        { name: 'password', placeholder: 'Insert Password', type: 'password' },
    ]

    const handlelogin = async (event) => {
        event.preventDefault()

        const {
            email: { value: email },
            password: { value: password },
        } = event.target

        try {
            await Api.login(email, password)
            history.push('/users')
        } catch ({ message }) {
            setFeedback(message)
        }
    }

    return <Container>
        <FormContainer>
            <Title>Login</Title>
            <Form fields={formItems} onSubmit={handlelogin} />
            <FormButton onClick={() => history.push('/register')}>Not registered?</FormButton>
            <h3 className="feedback">{feedback}</h3>
        </FormContainer>
    </Container>
}

export default withRouter(Register);
