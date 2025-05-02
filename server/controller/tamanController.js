import TamanNasional from "../model/tamanModel.js"

export const create = async(req, res) => {
  try {
    const newTamanNasional = new TamanNasional(req.body);
    const {nama} = newTamanNasional;

    const TamanNasionalExist = await TamanNasional.findOne({nama});
    if(TamanNasionalExist){
      return res.status(400).json({ message: "Taman Nasional already exist."});
    }
    const savedData = await newTamanNasional.save();
    res.status(200).json(savedData);

  } catch (error) {
    res.status(500).json({ errorMessage:error.message });
  }
};

export const update =  async(req, res) => {
  try {
    const id = req.params.id;
    const TamanNasionalExist = await TamanNasional.findById(id);
    
    if(!TamanNasionalExist) {
      return res.status(404).json({ message: "Taman Nasional data not found."});
    }
    const updatedData = await TamanNasional.findByIdAndUpdate(id, req.body, {
      new:true,
    });
    res.status(200).json(updatedData);
    

  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteTamanNasional = async(req, res) => {
  try {
    const id = req.params.id;
    const TamanNasionalExist = await TamanNasional.findById(id);
    
    if(!TamanNasionalExist) {
      return res.status(404).json({ message: "Taman Nasional not found."});
    }

    await TamanNasional.findByIdAndDelete(id);
    res.status(200).json({message:"TamanNasional deleted succesfully."});
    
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};