import styled from 'styled-components'


const FormField = styled.div`
    padding: 5px;
    margin-bottom: 10px;
`

const FormInput = styled.input`
    width: 90%;
    height: 30px;
    border-bottom: 1px solid rgba(lightblue, 0.5);
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.11em;
`

const FormButton = styled.button`
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

export { FormField, FormInput, FormButton }