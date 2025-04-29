import fauna from "../model/faunaModel.js"

export const create = async(req, res) => {
  try {
    const newFauna = new fauna(req.body);
    const {nama_ilmiah} = newFauna;

    const faunaExist = await fauna.findOne({nama_ilmiah});
    if(faunaExist){
      return res.status(400).json({ message: "fauna already exist."});
    }
    const savedData = await newFauna.save();
    res.status(200).json(savedData);

  } catch (error) {
    res.status(500).json({ errorMessage:error.message });
  }
};

export const getAllFaunas = async(req, res) => {
  try {
    const faunaData = await fauna.find();

    if(!faunaData || faunaData.length === 0){
      return res.status(404).json({ message: "fauna data not found"});
    }
    res.status(200).json(faunaData);
    
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const update =  async(req, res) => {
  try {
    const id = req.params.id;
    const faunaExist = await fauna.findById(id);
    
    if(!faunaExist) {
      return res.status(404).json({ message: "fauna data not found."});
    }
    const updatedData = await fauna.findByIdAndUpdate(id, req.body, {
      new:true,
    });
    res.status(200).json(updatedData);
    

  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteFauna = async(req, res) => {
  try {
    const id = req.params.id;
    const faunaExist = await fauna.findById(id);
    
    if(!faunaExist) {
      return res.status(404).json({ message: "fauna not found."});
    }

    await fauna.findByIdAndDelete(id);
    res.status(200).json({message:"fauna deleted succesfully."});
    
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};