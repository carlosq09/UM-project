import React, { useState, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'
//API
import Api from '../../api'
//icons 
import { TiPencil, TiCancel } from 'react-icons/ti'
//components
import { List, Container, ListItem, Interface, SubmitIcon, Avatar } from './styles'
import { Title, Button } from '../../components/common'
import { FormInput } from '../../components/Form/styles'
import Pagination from '../../components/Pagination'
//hook
import useQuery from '../../hooks/useQuery'

function Users({ history }) {
    const query = useQuery()
    const [users, setUsers] = useState([])
    const [feedback, setFeedback] = useState('')
    const [totalPages, setTotalPages] = useState()

    const handleLogout = () => {
        Api.logoutUser()
        history.replace('/login')
    }

    const handleDeleteUser = (id, email, indexToDelete) => {
        Api.deleteUser(id).then(() => {
            const updatedUsers = [...users]

            updatedUsers.splice(indexToDelete, 1)
            setFeedback(`User with email ${email} has been deleted!`)
            setUsers(updatedUsers)
        })
    }

    const handleCreateuser = () => {
        history.push('/users/create')
    }

    const handleEditUset = (event) => {
        event.preventDefault()
        const {
            index: { value: index },
            id: { value: id },
            email: { value: email },
            name: { value: name },
            surname: { value: surname },
        } = event.target

        Api.updateUser(name, surname, email, id).then((data) => {
            const updatedUsers = [...users]

            updatedUsers[index] = { ...updatedUsers[index], ...data }
            setFeedback(`User with email ${data.email} has been updated!`)
            setUsers(updatedUsers)
        })
    }

    const cleanLayout = () => {
        setFeedback('')
        setUsers([])
    }

    useEffect(() => {
        const currentPage = query.get('page')
        const createdEmail = query.get('created')

        cleanLayout()
        Api.getUsersList(currentPage).then(({ data, total_pages }) => {
            setTotalPages(total_pages)
            setUsers(data)
        })

        if (createdEmail) {
            setFeedback(`user with email ${createdEmail} has been registered!`)
        }
    }, [history.location])

    return <Container>
        <Interface>
            <Title>USERS LISTS</Title>
            <Button onClick={() => handleCreateuser()}>Create</Button>
            <Button onClick={() => handleLogout()}>Logout</Button>
            <h3 className="feedback">{feedback}</h3>
            <List>
                {
                    users.length > 0 ? users.map(({ id, email, first_name, last_name, avatar }, index) => {
                        return <ListItem>
                            <Avatar src={avatar} />
                            <form onSubmit={handleEditUset}>
                                <input type="hidden" name="id" value={id} />
                                <input type="hidden" name="index" value={index} />
                                <div>
                                    <label class="label boldtext">email</label>
                                    <FormInput name='email' defaultValue={email} />
                                </div>
                                <div>
                                    <label class="label boldtext">name</label>
                                    <FormInput name='name' defaultValue={first_name} />
                                </div>
                                <div>
                                    <label class="label boldtext">surname</label>
                                    <FormInput name='surname' defaultValue={last_name} />
                                </div>
                                <SubmitIcon type="submit">
                                    <TiPencil />
                                </SubmitIcon>
                            </form>
                            <TiCancel size={80} onClick={() => handleDeleteUser(id, email, index)} />
                        </ListItem>
                    }) : <div>Loading...</div>
                }
            </List>
            {totalPages && <Pagination number={totalPages} url='/users?page=' />}
        </Interface>
    </Container>
}

export default withRouter(Users);
