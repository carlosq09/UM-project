import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SubmitIcon = styled.button`
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`


const Interface = styled.div`
    width: 50vw;    
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const List = styled.div`
    height: 90vh;
    width: 50vw;
    padding: 20px;
    overflow-y: scroll;
    border: 1px solid lightgray;
    box-sizing: border-box;
    -webkit-box-shadow: 2px 2px 14px rgba(53, 49, 49, 0.15);
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.15);

    @media (max-width: 700px) {
        width: 100vw;
    }
`;

const ListItem = styled.div`
    border-radius: 5px;
    margin: 3vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 25px;
    border: 1px solid lightgray;
    transition: all 0.3s;
    font-weight: 700;
    font-size: 15px;
    -webkit-box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.15);
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.15);
`;

const Avatar = styled.img`
    border-radius: 20%;
    margin: 2vw;

    @media (max-width: 700px) {
        width: 30%
    }
`;

export { Container, Interface, SubmitIcon, List, ListItem, Avatar }