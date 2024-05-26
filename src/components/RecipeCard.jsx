import Container from "./Shared/Container";
import { Button, Card } from "flowbite-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const RecipeCard = ({ recipe }) => {
  const { user } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    if (user) {
    } else {
      toast.error("please google login");
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

        <Link to={`/details/${recipe._id}`}>
          <Button
            onClick={handleGoogleSignIn}
            size="xs"
            outline
            gradientDuoTone="tealToLime"
          >
            View Details
          </Button>
        </Link>
      </Card>
    </Container>
  );
};

export default RecipeCard;
