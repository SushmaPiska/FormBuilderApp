import Form from "../models/form.model.js";
export const createForm = async (req, res) => {

  try {
    const { name, creator, createdAt } = req.body;

    const form = new Form({
      name,
      creator,
      createdAt,
    });
    await form.save();

    res.status(201).json({ message: "Form created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
  
  // try {
  //   const { name, elements, creator, sharedWith, createdAt } = req.body;

  //   const form = new Form({
  //     name,
  //     elements,
  //     creator,
  //     sharedWith,
  //     createdAt,
  //   });
  //   await form.save();

  //   res.status(200).json({ message: "Form created successfully" });
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ message: "Form not created" });
  // }
};
export const updateForm=async(req,res)=>{
  try {
    const { id } = req.params;
    const { name,elements } = req.body;

    
    let form = await Form.findById(id);
    console.log(form);
    if (!form) {
      return res.status(400).json({ message: "form not found" });
    }
    form = await Form.findByIdAndUpdate(
      id,
      { name,elements },
      { new: true }
    );

    res.status(200).json(form);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "form not updated" });
  }

}
export const getForms = async (req, res) => {
  try {
    const forms = await Form.find(
        // { userId: req.user.userId }
    );
    if (!forms) {
      return res.status(404).json({ message: "Forms not found" });
    }
    res.status(200).json(forms);
  } catch (error) {
    res.status(400).json({ message: "Error retrieving forms" });
  }
};
