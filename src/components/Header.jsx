const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

// Default properties for the header component if we have no idea what props would be sent.
Header.defaultProps = {
  title: "Default title",
};

export default Header;
