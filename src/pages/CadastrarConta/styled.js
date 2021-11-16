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

    input:focus {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    input {
      width: 100%;
      margin-bottom: 30px;
    }
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
