import { Avatar, Button, Navbar, Tooltip } from "flowbite-react";
import Container from "./Container";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const { user, signInWithGoogle, logOut } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        toast.success("Login successful");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const handleLogOut = () => {
    logOut()
      .then((result) => toast.success("successfully Logout"))
      .catch((err) => toast.error(err));
  };

  return (
    <Container>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <h1 className="text-xl font-semibold">Recipes</h1>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <>
              <div>
                <Tooltip content={user?.displayName} placement="left">
                  <Avatar
                    img={user?.photoURL}
                    className="mx-2"
                    status="online"
                  />
                </Tooltip>
              </div>
              <Button onClick={handleLogOut} gradientDuoTone="tealToLime">
                <NavLink>LogOut</NavLink>
              </Button>
            </>
          ) : (
            <Button onClick={handleGoogleSignIn} gradientDuoTone="tealToLime">
              Google Login
            </Button>
          )}
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
          {user && (
            <>
              <NavLink
                to={"/add-recipes"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#646e19] border-b-4 border-[#646e19]"
                    : "hover:text-[#646e19]"
                }
              >
                Add Recipes
              </NavLink>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
