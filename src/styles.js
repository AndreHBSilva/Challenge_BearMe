import styled from "styled-components";

export const Button = styled.button`
  background-image: ${props => props.backgroundImage || "linear-gradient(to right, rgb(146, 72, 192) , rgb(240, 150, 234))"};
  border: none;
  border-radius: 2rem;
  width: 20vw;
  height: 75px;
  color: #f8f8f8;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  display: block;
  margin: 0 auto;
`

export const MainPage = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 5rem;
  align-items: center;
`

export const CardAtividade = styled.div`
  img {
    display: block;
    margin: 0 auto;
    border-radius: 0.5rem;
    width: 250px;
  }
`

// export const ImgCard = styled.img`
//   position: absolute;
//   border-radius: 0.5rem;
//   width: 100%;
// `
