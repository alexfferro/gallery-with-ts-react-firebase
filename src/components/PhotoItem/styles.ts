import styled from "styled-components";

export const Container = styled.div`
  background-color: #3D3F43;
  border-radius: 10px;
  padding: 10px;
  img {
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  input[type=button]{
    background-color: red;
    color: #FFF;
    margin: 10px;
    border-radius: 10px;
    border: 0;
    padding: 10px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`