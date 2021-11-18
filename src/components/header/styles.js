import styled from "styled-components"

export const Container = styled.section`
    
`;
/////////////////Navigation///////////////////
export const RecipesMenu = styled.section`
    background: url(${props => props.back});
    background-size: cover;
    
    margin:1rem;
    height:47rem;
    display:flex;
    flex-direction:column;

    div{
        display:flex;
        align-items:center;
        justify-content:center;
        height:85%;
    }
    h1{ 
        color:rgba(90,90,90.1);
        height:50%; 
        display:flex;
        flex-direction:column-reverse;
        font-size:5rem;
        text-transform:uppercase;
    }
`;
export const NavBar = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-around;
    height:15%;
    span{
        width:50%;
        display:flex;   
    }
    img{
        width:70%;
    }
    ul{
        width:40%;
        display:flex;
        align-items:center;
        justify-content:space-around;
    }
    button{
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:1rem;
        display:flex;
        width:8rem;
        height:3rem;
        background:none;
        border:none;
        text-transform:uppercase;
        &:hover{
            border:solid 3px black;

        }
    }
`;