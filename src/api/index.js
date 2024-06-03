import axios from "axios";

const image_api_key = import.meta.env.VITE_IMAGEBB_API_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_api_key}`;

//image upload
export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(image_hosting_url, formData);

  return data;
};
