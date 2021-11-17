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
        font-size:1rem;
        display:flex;
        background:none;
        border:none;
        text-transform:uppercase;
        &:hover{
            color:rgba(110,110,110.1);
        }
    }
`;