import user from "../models/user.schema.js";

// handle home page.
export const handleHomepage = (req, res) => {
  res.send("Hello World home");
};

// handle get request.
export const handleGetReq = async (req, res) => {
  try {
    const result = await user.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

//handle post request.
export const handlePostReq = async (req, res) => {
  try {
    const { name, email } = req.body;
    const result = await user.create({
      Name: name,
      Email: email,
    });
    res.send({ message: "success", user: result });
  } catch (error) {
    res.status(500).send({ message: "Error creating user", error });
  }
};

//handle get request by id.
export const handleGetReqById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await user.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};

//handle delete request.
export const handleDeleteReq = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await user.findById(id);
    if (result) {
      await user.deleteOne({ _id: id });
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "User not found" });
    }
    // const result = await user.findByIdAndDelete(id);
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

//handle patch request.
export const handlePatchReq = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const result = await user.findById(id);
    if (result) {
      const updatedUser = await user.findByIdAndUpdate(id, {
        Name: name,
        Email: email,
      }, { new: true });
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};
