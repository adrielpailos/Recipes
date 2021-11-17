import styled from "styled-components"

export const Container = styled.section`
    
`;
/////////////////Section01///////////////////

export const LatestRC = styled.section`
    background-color:#DFE4DE;
`;
export const TitleLastest = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:15rem;
    h2{
        color:rgba(50,50,50.1);
        height:60%; 
        display:flex;
        flex-direction:column-reverse;
        font-size:2rem;
        text-transform:uppercase;
    }
`;
export const NavRC = styled.div`
    
    display:flex;
    align-items:center;
    justify-content:center;
    height:38rem;
    img{
        width:100%;
    }
    ul{
        display:flex;
        justify-content:space-around;
        width:70rem;
        height:28rem;
        margin-bottom:8rem;
    }
    div{
 
        width:20rem;
        background:#fff;
        display:flex;
        flex-direction:column;
        box-shadow: 1px 1px 5px 0 rgba(90,90,90.1);
    }
    figure{
        display:flex;
        height:50%;
  
    }
    span{
        height:50%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
`;