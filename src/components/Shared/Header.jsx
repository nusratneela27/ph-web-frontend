import { Button, Navbar } from "flowbite-react";
import Container from "./Container";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <h1 className="text-xl font-semibold">Recipes</h1>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button gradientDuoTone="tealToLime">Google Login</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#646e19] border-b-4 border-[#646e19]"
                : "hover:text-[#646e19]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/recipes"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#646e19] border-b-4 border-[#646e19]"
                : "hover:text-[#646e19]"
            }
          >
            Recipes
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
