import Container from "./Shared/Container";
import { Button, Card } from "flowbite-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { setCoinValue } from "../api/auth";

const RecipeCard = ({ recipe }) => {
  const { user, coin, setCoin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    if (user) {
      if (user.email === recipe.host.email) {
        navigate(`/details/${recipe._id}`);
      } else if (coin < 10) {
        navigate("/coins");
        toast.error(
          "You do not have enough coins. Please purchase more coins."
        );
      } else {
        const confirmation = window.confirm(
          "Are you sure you want to spend 10 coins to view this recipe?"
        );
        if (confirmation) {
          const newCoinValue = coin - 10;
          // update coin in the server
          setCoinValue(user.email, newCoinValue);
          setCoin(newCoinValue);
          toast.success("10 coins added to the create user");
          navigate(`/details/${recipe._id}`);
        }
      }
    } else {
      toast.error("Please log in with Google");
    }
  };

  return (
    <Container>
      <Card className="max-w-sm" imgSrc={recipe.image} imgAlt={recipe.name}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
          {recipe.name}
        </h5>
        <p className="font-normal text-gray-700">
          Create By : {recipe.host.email}
        </p>
        <p className="font-normal text-gray-700">Country : {recipe.country}</p>

        <p className="font-normal text-gray-700">
          Purchased By : {recipe.purchased_by}
        </p>
        <Button
          onClick={handleGoogleSignIn}
          size="xs"
          outline
          gradientDuoTone="tealToLime"
        >
          View Details
        </Button>
      </Card>
    </Container>
  );
};

export default RecipeCard;

// import Container from "./Shared/Container";
// import { Button, Card } from "flowbite-react";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";
// import toast from "react-hot-toast";

// const RecipeCard = ({ recipe }) => {
//   const { user, coin } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleGoogleSignIn = () => {
//     if (user) {
//       if (user.email === recipe.host.email) {
//         navigate(`/details/${recipe._id}`);
//       } else if (coin < 10) {
//         navigate("/coins");
//         toast.error("You don't have enough coins. Please purchase more coins.");
//       } else {
//         toast.error("You are not the creator of this recipe.");
//       }
//     } else {
//       toast.error("please google login");
//     }
//   };

//   return (
//     <Container>
//       <Card className="max-w-sm" imgSrc={recipe.image} imgAlt={recipe.name}>
//         <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
//           {recipe.name}
//         </h5>
//         <p className="font-normal text-gray-700">
//           Create By : {recipe.host.email}
//         </p>
//         <p className="font-normal text-gray-700">Country : {recipe.country}</p>

//         <p className="font-normal text-gray-700">
//           Purchased By : {recipe.purchased_by}
//         </p>
//         <Button
//           onClick={handleGoogleSignIn}
//           size="xs"
//           outline
//           gradientDuoTone="tealToLime"
//         >
//           View Details
//         </Button>
//       </Card>
//     </Container>
//   );
// };

// export default RecipeCard;
