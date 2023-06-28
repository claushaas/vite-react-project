const user = {
  name: 'Claus',
  lastName: 'Haas',
};

function Header() {
  return (
    <h1>
      Olá,
      {' '}
      {`${user.name} ${user.lastName}`}
    </h1>
  );
}

export default Header;
