import { Button, Navbar } from "flowbite-react";
import Container from "./Container";

const Header = () => {
  return (
    <Container>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <h1 className="text-xl font-semibold">Recipes</h1>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Google Login</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="#">Recipes</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
