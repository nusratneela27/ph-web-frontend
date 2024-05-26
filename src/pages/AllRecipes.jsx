import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { getAllRecipes } from "../api/recipes";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getAllRecipes().then((data) => {
      setRecipes(data);
    });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mx-20 my-16">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
