import styled from "styled-components";

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
`;

export const MainPage = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax( min( (60rem - 100%) * 999, 100%), 1fr ) );
  column-gap: 35px;
  row-gap: 1.5rem;
  align-items: center;
`;

export const CardAtividade = styled.div`
  img {
    display: block;
    margin: 0 auto;
    padding-bottom: 0.5rem;
    border-radius: 0.5rem;
    /* width: 250px; */
    width: clamp(250px, 5vw, 20vw);
  }
`;

export const Form = styled.form`

`;

export const Input = styled.input`
  display: block;

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
  color:rgb(217, 176, 220);
    /* margin: 5vh 0vw; */
  p{
      font-size: 0.9vw;
  }
` ;
// export const ImgCard = styled.img`
//   position: absolute;
//   border-radius: 0.5rem;
//   width: 100%;
// `
