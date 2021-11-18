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
        position:relative;
        &::after{
            content:"";
            position: absolute;
            left: 33%;
            bottom: -1.25rem;
            background: rgb(55, 55, 55);
            width: 6rem;
            height: 3px;
        }
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
    h3{
        position:relative;
        &::before{
            content:"";
            position: absolute;
            left: 35%;
            bottom: 3rem;
            background: rgb(55, 55, 55);
            width: 2.5rem;
            height: 3px;
        }
    }
`;

/////////////////////////////
export const AboutSection = styled.section`
    display:flex;

    img{
        width:100%;
    }
    figure{
        height:42rem;
        width:50vw;
    }
    div{
     
        width:50vw;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    span{
        width:70%;
        height:60%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }
    h2{
        height:20%;
        font-size:2rem;
        text-transform:uppercase;
        position:relative;
        &::after{
            content:"";
            position: absolute;
            left: 24.5%;
            bottom: 1.9rem;
            background: rgb(55, 55, 55);
            width: 3.8rem;
            height: 3px;
        }
    }
    p{
        margin:1rem;
        font-size:1.25rem;
        
    }
`;
export const SubsSection = styled.section`
    background:#00000029;
    display:flex;
    align-items:center;
    justify-content:center;
    height:20rem;
    div{
        width:30rem;
        height:15rem;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }
    h2{
        margin:0.25rem;
        text-transform:uppercase;
        font-weight:lighter;
    }
    p{
        margin:0.25rem;
        font-size:1.10rem;
    }
    input{
        background:#EFF1EE;
        margin:0.25rem;
        height:3rem;
        width:19rem;
        border:none;
        padding:0.5rem;
    }
    button{
        margin:0.25rem;
        background:none;
        font-size:0.8rem;
        text-transform:uppercase;
        height:2rem;
        width:7rem;
        border:solid 2px;
    }
`;