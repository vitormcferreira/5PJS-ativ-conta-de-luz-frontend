import styled from 'styled-components';

export const CadastrarContaContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: grid;
  gap: 40px;
  width: 400px;
  justify-items: center;

  .fields {
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      width: 40%;
    }
  }
`;
