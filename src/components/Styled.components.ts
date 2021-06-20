import styled from "styled-components";
import background from "../images/kelly-sikkema-unsplash.jpg";



export const Container = styled.div`
    
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    /* height:1000vh ;
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
    background-attachment:fixed;
    background-image: url(${background}); */
    
`;

export const MainWrapper = styled.div`
    
    /* background-color: green; */
    display: flex;
    flex:none;
    justify-content: center;
    align-items:center;
    margin-top:2rem;
    gap: 25rem;
`;
export const Wrapper = styled.div`
    width: 200px;
    height: 100%;
    
    
`;
export const StyledButton = styled.button`
    width: 180px;
    height: 2rem;
    background-color: aliceblue;
    margin-top: 30px;
    border-radius:1rem;
    align-self:center;
    margin-left:5rem;
    border: 0.1rem solid lightblue;
    color:blueviolet;
    font-weight:bold;
    font-size:1.1rem;
    
`;
export const StyledInput = styled.input`
    width: 20rem;
    height: 2rem;
    border-radius:1rem;
    border: 0.1rem solid lightblue;
    padding-left: 1rem;
    outline:none;
    
`;
export const StyledCheckInput = styled.input`
    height: 1.5rem;
    margin-left:1rem;
    
`;


export const TodoContainer = styled.div`
    
    
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin-top:3rem;
    
    
   
    
    
    
`;
export const StyledTodoWrapper = styled.div`
   display: flex;
   margin:1rem;
   width: 40rem;
   height: 5rem;
   border-width:3rem;
   border-color:black;
   /* background-color:green; */
   border-radius:1rem;
   align-items:center;
   justify-content: center;
   
   
  
`;
export const StyledTodo = styled.div`
    
   font-size:20px;
   border-radius:10px;
   padding:0.5rem; 
   height:1.5rem; 
   width:25rem;
   color: blueviolet;
   font-weight:700;
   
   

   
  
`;
export const StyledDelButton = styled.button`
    height:2rem;
    margin-left:1rem;
    width:4rem;
    border: 0px solid red;
    border-radius:5rem;
    background-color:red;
    color: wheat;
    font-weight:bold;
    
`;