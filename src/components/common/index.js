import styled from 'styled-components'

const Title = styled.h1`
    letter-spacing: 3px;
    font-weight: 700;
    font-size: 15px;
`
const Button = styled.button`
    width: 90%;
    height: 30px;
    border: 0;
    outline: 0;
    color: white;
    font-size: 15px;
    font-weight: 300;
    position: relative;
    z-index: 3;
    letter-spacing: 2px;
    background-color: lightblue;
    cursor: pointer;
    margin-bottom: 10px;
`

export { Title, Button }