import styled from "styled-components"

export const Container = styled.section`
    nav{
        height:10rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
        background-color:#DFE4DE;
    }
    div{
        margin:2rem;
        display:flex;
        width:11rem;
        justify-content:space-around;
    }
    img{
        width:100%;
    }
    figure{
        width:2rem;
    }
    ul{
        margin:2rem;
        width:35rem;
        display:flex;
        justify-content:space-around;
    }
    button{
        background:none;
        color:rgba(90,90,90.1);
        border:none;
        font-size:1.2rem;
    }
`;
export const CopyR = styled.section`
    background:#446061;
    height:2rem;
    color:#eee;
    font-size:0.75rem;
    display:flex;
    align-items:center;
    justify-content:center;
`;