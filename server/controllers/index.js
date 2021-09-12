import mongoose from "mongoose";
import RecordData from "../models/models.js";
import jwtCheck from "../auth/authorizeAccessToken.js";



export const getRecords = async (jwtCheck, req, res) => {
   try {
    const records = await RecordData.find();

    res.status(200).json(records);
    
   } catch (error) {
    res.status(404).json({ message: error.message });
   }
}

export const getRecord = async (jwtCheck, req, res) => {
    try {
        const record = await RecordData.findById(req.params.id);
        res.status(200).json(record);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createRecord = async (req, res) => {
   const record = req.body;

   const newRecord = new RecordData(record);

    try {
        await newRecord.save();

        res.status(201).json({ message: "Record created successfully!" });
      
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateRecord = async (req, res) => {
    const record = req.body;
    const recordId = req.params.id;
    const updatedRecord = await RecordData.findByIdAndUpdate(recordId, record);
    res.status(200).json(updatedRecord);
}   


export const deleteRecord = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No record with id: ${id}`);

    await RecordData.findByIdAndRemove(id);
    
    res.json({ message: "Record deleted successfully." });
}

