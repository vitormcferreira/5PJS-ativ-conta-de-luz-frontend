import styled from 'styled-components';

export const CadastrarContaContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 40px;
  max-width: 600px;
  justify-items: center;

  flex-wrap: wrap;

  .fields {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 5px;

    input:focus {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    input {
      width: 100%;
      margin-bottom: 30px;
    }

    .field-group {
      display: grid;
      grid-template-areas:
        'old-field-name . field-name'
        '.............. . errors'
        'old-field      . field';
      grid-template-rows: auto auto auto;
      grid-template-columns: 1fr 50px 1fr;

      & > :nth-child(1) {
        grid-area: old-field-name;
      }
      & > :nth-child(2) {
        grid-area: old-field;
      }
      & > :nth-child(3) {
        grid-area: field-name;
      }
      & > :nth-child(4) {
        grid-area: errors;
      }
      & > :nth-child(5) {
        grid-area: field;
      }
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;

    button {
      width: 40%;
    }
  }
`;
