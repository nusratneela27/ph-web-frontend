import React from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../components/Shared/Container";
import { Card } from "flowbite-react";

const RecipeDetails = () => {
  const recipeData = useLoaderData();
  return (
    <div className="m-10 p-10">
      <Container>
        <div className="flex justify-center items-center">
          <Card imgSrc={recipeData.image} horizontal>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 ">
              {recipeData.name}
            </h5>
            <p className="font-bold text-gray-700 ">
              Create By : {recipeData.host.email}
            </p>
            <p className="font-normal text-gray-700">
              Category : {recipeData.category}
            </p>
            <p className="font-normal text-gray-700">
              Country : {recipeData.country}
            </p>

            <p className="font-normal text-gray-700">
              Purchased By : {recipeData.purchased_by}
            </p>
            <p className="font-normal text-gray-700">
              Watch Count : {recipeData.watchCount}
            </p>
          </Card>
        </div>

        <p className="font-normal px-20 pt-5 text-gray-700">
          <span className="font-bold">Recipe Details</span> :{" "}
          {recipeData.details}
        </p>
      </Container>
    </div>
  );
};

export default RecipeDetails;
