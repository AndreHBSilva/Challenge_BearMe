import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Glory:wght@100&family=Gravitas+One&family=Lemon&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Glory:wght@100&family=Gravitas+One&family=Lemon&family=Mirza:wght@600&display=swap');
`;

export const Button = styled.button`

  background-image: ${props => props.backgroundImage || "linear-gradient(to right, rgb(146, 72, 192) , rgb(240, 150, 234))"};
  border: none;
  border-radius: 2rem;
  width: 20vw;
  height: 75px;
  color: #f8f8f8;
  font-weight: bold;
  cursor: pointer;
`;

export const CardButton = styled(Button)`
  width: 250px;
  position: relative;
  display: block;
  margin: 0 auto;
  width: 100%;

  :hover {
    background-image: ${props => props.hover || ''};
  }
`;

export const StyledHome = styled.div`
  h3 {
    margin-top: 5vh;
    text-align: center;
    color:rgb(161, 48, 167);
    font-size:1.8vw;
  }

  h4 {
    margin-top: 0;
    margin-left: 5vw;
    margin-right: 5vw;
    text-align: center;
    color:rgb(159, 74, 165);
    font-size:1.3vw;
    font-family: 'Arial';
    font-weight: bolder;
    letter-spacing: .2rem;
  }

  h5 {
    margin-top: 0;
    margin-left: 5vw;
    margin-right: 5vw;
    text-align: center;
    color:rgb(85, 31, 113);
    font-size:1vw;
    font-family: 'Arial';
    font-weight: bolder;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  width: 75%;
  grid-template-columns: repeat( auto-fit, minmax( min( (60rem - 100%) * 999, 100%), 1fr ) );
  column-gap: 35px;
  row-gap: 1.5rem;
  align-items: center;
  margin: 0 auto;

  @media(max-width: 1279px) {
    width: 50%;
    margin: auto;
  }
`;

export const CardAtividade = styled.div`
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgb(50 50 50 / 22%);
  padding: .5rem;
  background-color: white;
  img {
    display: block;
    margin: 0 auto;
    padding-bottom: 0.5rem;
    border-radius: 0.5rem;
    width: 100%;
  }

`;

export const Form = styled.form`

`;

export const Input = styled.input`
  display: block;
  border-radius: 0.5rem; 
`;

export const StyledHeader = styled.div`
  .menu-principal{
    margin-top: 0;
    text-align: start;
    width: 100%;
    background-color: rgb(49, 1, 97);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card a {
    text-decoration: none;
    color:rgb(217, 176, 220);
  }
  .card a:hover {
    text-decoration: none;
    color:white;
  }
  .links ul li{
    display: inline-block;
    margin-inline: 2.0vw;
    font-size: 2.5vw;
  }

  .bear-me {
    margin-right: 1vw;
    font-size: 2.1vw;
  }

  .imagem{
    max-width: 4vw;
    max-height: 4vw;
    margin-top: 1.5vh;
  }
  .menu-login{
    margin-top: 0;
    text-align: start;
    width: 100%;
    background-color: rgb(64, 41, 133);
    display: flex;
    justify-content: right;
    align-items: center;

  }
  .sub{
    display: inline-block;
    margin: 0.5vw;
    color: lightsteelblue;
    font-size: 1.1vw;
  }

  .sub a{
    text-decoration: none;
    color: #FFF;
  }

  .btn{
    background-image: linear-gradient(to right, rgb(235, 245, 240), rgb(206, 203, 243));
    border: none;
    border-radius:2rem;
    width: 10vw;
    height: 4vh;
    color:rgb(112, 112, 158);
    font-weight: bolder;
    font-size: 1vw;
  }

  .btn:hover{
    background-image: linear-gradient(to left, rgb(235, 245, 240), rgb(206, 203, 243));
    color:rgb(37, 37, 51);
    cursor:pointer;
  }
`;

export const StyledFooter = styled.footer`
  text-align: center; 
  background-color: rgb(49, 1, 97);
  color: rgb(217, 176, 220);
    /* margin: 5vh 0vw; */
  margin-top: 54px; 
  p{
    font-size: 0.9vw;
    margin-inline-end: 0;
    margin-block-end: 0;
  }
` ;

export const Container = styled.div`
    /* margin-left: .5vw;
    margin-right: .5vw; */
    background-color:#DDA0DD;
    min-width: 385px;
    font-family: cursive;
    font-weight: 400;
    list-style-position: inside;
    h2 {
        font-size: 1.3em;
    }
`;

export const StyledChatElement = styled.div`
  height: 600px;
  width: 50%;
  margin: 0 auto;
  padding: 1rem;
  margin-top: 30px;
`

export const StyledYoutubeVideo = styled.div`

`;

export const FormatedSouAnsioso = styled.div`
  .imagem{
      display: block;
      margin-top: auto;
      margin-left: auto;
      margin-right: auto;
      width: 50%; 
  }
  p {
      margin-left: 5vw;
      margin-right: 5vw;
      font-size: 1vw;
  }

  ol li{
      margin-left: 5vw;
      margin-right: 5vw;
      font-size: 1vw;
  }

  ul li{
      margin-left: 5vw;
      margin-right: 5vw;
      font-size: 1vw;
  }
  h3{
      margin-top: 5vh;
      text-align: center;
      color:rgb(161, 48, 167);
      font-size:1.8vw;
  }

  h4{
      margin-top: 10vh;
      margin-left: 5vw;
      margin-right: 5vw;
      text-align: left;
      color:rgb(159, 74, 165);
      font-size:1.3vw;
      font-family: 'Arial';
      font-weight: bolder;
      letter-spacing: .2rem;
  }

  h5{
      margin-top: 0;
      margin-left: 5vw;
      margin-right: 5vw;
      text-align: center;
      color:rgb(85, 31, 113);
      font-size:1vw;
      font-family: 'Arial';
      font-weight: bolder;
  }

`;

export const FormatedNossaMissao = styled.div`

  .imagem{
        display: block;
        margin-top: auto;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        height: 50%;
    }

  p {
      margin-left: 5vw;
      margin-right: 5vw;
      font-size: 1vw;
  }

  
  h3{
      margin-top: 5vh;
      text-align: center;
      color:rgb(161, 48, 167);
      font-size:1.8vw;
  }

  h4{
      margin-top: 10vh;
      margin-left: 5vw;
      margin-right: 5vw;
      text-align: left;
      color:rgb(159, 74, 165);
      font-size:1.3vw;
      font-family: 'Arial';
      font-weight: bolder;
      letter-spacing: .2rem;
  }

  h5{
      margin-top: 0;
      margin-left: 5vw;
      margin-right: 5vw;
      text-align: center;
      color:rgb(85, 31, 113);
      font-size:1vw;
      font-family: 'Arial';
      font-weight: bolder;
  }

`;

export const VideosMeditacao = styled.div`
  text-align: center;
`;