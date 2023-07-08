import { useState } from 'react';

import states from './countryStates';

export type FormValuesTypes = {
  fullName: string,
  email: string,
  CPF: string,
  type: string,
  state: string,
  term: boolean,
};

const initialFormValues = {
  fullName: '',
  email: '',
  CPF: '',
  type: 'house',
  state: 'Acre',
  term: false,
};

function App() {
  const [formValues, setFormValues] = useState<FormValuesTypes>(initialFormValues);
  const { fullName, email, CPF, term, state } = formValues;

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, type } = event.target;
    const value = type === 'checkbox'
      ? (event.target as HTMLInputElement).checked
      : event.target.value;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  return (
    <>
      <h1>
        React Form
      </h1>
      <form>
        <fieldset>
          <label htmlFor="fullName">Nome</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            onChange={ handleChange }
            value={ fullName }
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={ handleChange }
            value={ email }
          />
          <label htmlFor="CPF">CPF</label>
          <input
            type="text"
            name="CPF"
            id="CPF"
            onChange={ handleChange }
            value={ CPF }
          />
        </fieldset>
        <fieldset>
          <input
            type="radio"
            name="type"
            id="house"
            value="house"
            onChange={ handleChange }
            defaultChecked
          />
          <label htmlFor="house">Casa</label>
          <input
            type="radio"
            name="type"
            id="condo"
            value="condo"
            onChange={ handleChange }
          />
          <label htmlFor="condo">Apartamento</label>
          <label htmlFor="state">Estado</label>
          <select
            id="state"
            name="state"
            onChange={ handleChange }
            value={ state }
          >
            {states.map((s) => (
              <option key={ s } value={ s }>{s}</option>
            ))}
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="term">Termo</label>
          <input
            type="checkbox"
            name="term"
            id="term"
            checked={ term }
            onChange={ handleChange }
          />
        </fieldset>
      </form>
    </>
  );
}

export default App;
