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
  grid-gap: 5rem;
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

// export const ImgCard = styled.img`
//   position: absolute;
//   border-radius: 0.5rem;
//   width: 100%;
// `
