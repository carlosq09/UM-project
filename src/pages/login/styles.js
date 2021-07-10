import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FormContainer = styled.button`
    height: 400px;
    width: 30vw;
    background: white;
    padding: 20px;
    border: 1px solid lightgray;
    box-sizing: border-box;
    -webkit-box-shadow: 2px 2px 14px rgba(53, 49, 49, 0.15);
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.15);

    @media (max-width: 800px) {
        width: 80vw;
    }
`;

const RedirectLink = styled.a`
    color: lightblue;
    text-decoration: unset;
`;


export { Container, FormContainer, RedirectLink }