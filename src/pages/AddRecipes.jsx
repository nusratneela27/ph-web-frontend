import { Button, Label, TextInput, Select } from "flowbite-react";
import Container from "../components/Shared/Container";
import img from "../assets/SuccessStories/img2.jpg";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AddRecipes = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle image upload
    if (data.image[0]) {
      const file = data.image[0];
      const formData = new FormData();
      formData.append("image", file);
      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_KEY
      }`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imageData) => {
          const imageUrl = imageData.data.display_url;
          const addRecipe = {
            ...data,
            image: imageUrl,
            host: {
              email: user?.email,
            },
            watchCount: 0,
            purchased_by: [],
          };
          // console.log("Form Data with Image URL:", addRecipe);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center">
          <img
            src={img}
            alt="success"
            className="rounded-2xl w-[650px] h-[600px] md:block hidden"
          />
        </div>

        <div className="max-w-md bg-lime-50 rounded-2xl shadow-sm p-10 mx-20 my-20">
          <h1 className="text-2xl italic font-semibold mb-8 text-center">
            Add Your Favorite Items
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" color="success" value="Recipe Name" />
              </div>
              <TextInput
                type="text"
                id="name"
                placeholder="Name"
                required
                color="success"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="image" color="success" value="Recipe Image" />
              </div>
              <input
                type="file"
                id="image"
                required
                className="text-sm text-gray-500
                           file:rounded-full file:border-0
                           file:text-sm file:font-semibold
                           file:bg-lime-50 file:text-lime-700
                           hover:file:bg-lime-100"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="details"
                  color="success"
                  value="Recipe Details"
                />
              </div>
              <TextInput
                type="text"
                id="details"
                placeholder="Details"
                required
                color="success"
                {...register("details", { required: true })}
              />
              {errors.details && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="country" color="success" value="Country" />
              </div>
              <TextInput
                type="text"
                id="country"
                placeholder="Country"
                required
                color="success"
                {...register("country", { required: true })}
              />
              {errors.country && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="category" color="success" value="Category" />
              </div>
              <Select
                id="category"
                required
                color="success"
                {...register("category", { required: true })}
              >
                <option value="">Select Category</option>
                <option value="pizza">Pizza</option>
                <option value="pasta">Pasta</option>
              </Select>
              {errors.category && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <Button
              type="submit"
              gradientDuoTone="tealToLime"
              className="w-full"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AddRecipes;
