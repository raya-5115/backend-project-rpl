import flora from "../model/floraModel.js"

export const create = async(req, res) => {
  try {
    const newFlora = new flora(req.body);
    const {nama_ilmiah} = newFlora;

    const floraExist = await flora.findOne({nama_ilmiah});
    if(floraExist){
      return res.status(400).json({ message: "flora already exist."});
    }
    const savedData = await newFlora.save();
    res.status(200).json(savedData);

  } catch (error) {
    res.status(500).json({ errorMessage:error.message });
  }
};

export const getAllFloras = async(req, res) => {
  try {
    const floraData = await flora.find();

    if(!floraData || floraData.length === 0){
      return res.status(404).json({ message: "flora data not found"});
    }
    res.status(200).json(floraData);
    
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const update =  async(req, res) => {
  try {
    const id = req.params.id;
    const floraExist = await flora.findById(id);
    
    if(!floraExist) {
      return res.status(404).json({ message: "flora data not found."});
    }
    const updatedData = await flora.findByIdAndUpdate(id, req.body, {
      new:true,
    });
    res.status(200).json(updatedData);
    

  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteFlora = async(req, res) => {
  try {
    const id = req.params.id;
    const floraExist = await flora.findById(id);
    
    if(!floraExist) {
      return res.status(404).json({ message: "flora not found."});
    }

    await flora.findByIdAndDelete(id);
    res.status(200).json({message:"flora deleted succesfully."});
    
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};