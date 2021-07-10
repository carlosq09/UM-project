import React from 'react'
import { withRouter } from 'react-router-dom'
//styles
import { Paginator, Page } from './styles'

const Pagination = ({ history, number, url }) =>
    <Paginator>
        {
            Array(number).fill().map((_, index) =>
                <Page onClick={() => history.push(`${url}${index + 1}`)}>
                    {index + 1}
                </Page>)
        }
    </Paginator>


export default withRouter(Pagination);
