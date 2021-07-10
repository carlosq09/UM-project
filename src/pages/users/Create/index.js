import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
//API
import Api from '../../../api'
//components
import Form from '../../../components/Form'
import { Title } from '../../../components/common'
import { Container, FormContainer } from './styles'

function Create({ history }) {
    const [feedback, setFeedback] = useState('')
    const formItems = [
        { name: 'email', placeholder: 'Insert Email' },
        { name: 'name', placeholder: 'Insert name' },
        { name: 'surname', placeholder: 'Insert surname' },
    ]

    const handleRegister = async (event) => {
        event.preventDefault()

        const {
            email: { value: email },
            name: { value: name },
            surname: { value: surname },
        } = event.target

        try {
            await Api.createUser(email, name, surname)
            history.push(`/users?created=${email}`)
        } catch ({ message }) {
            setFeedback(message)
        }
    }

    return <Container>
        <FormContainer>
            <Title>Register a new user!</Title>
            <Form fields={formItems} onSubmit={handleRegister} />
            <h3 className="feedback">{feedback}</h3>
        </FormContainer>
    </Container>
}

export default withRouter(Create);
