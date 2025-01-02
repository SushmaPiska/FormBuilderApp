import axios from 'axios'

export const getForms=async(req,res)=>{
  try {
    const token = localStorage.getItem("token"); 
    const response = await axios.get(
      `http://localhost:8000/api/form/getForms`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data; 
  }  catch (error) {
    console.error("Error in getForms:", error); 
    res.status(500).json({ message: "Error retrieving forms", error: error.message });
  }
    // const forms=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/form/getForms`)

    // return forms;
}