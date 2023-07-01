import styled from 'styled-components';

const H1 = styled.h1`
  color: ${(props) => (props.color ? props.color : props.theme.main)};
`;

const user = {
  name: 'Claus',
  lastName: 'Haas',
};

function Header() {
  return (
    <H1>
      Olá,
      {' '}
      {`${user.name} ${user.lastName}`}
    </H1>
  );
}

export default Header;
