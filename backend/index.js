import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from "dotenv"
import TodoModel from "./models/Todo.js";

dotenv.config();

const app = express();
app.use(express.json())
app.use(cors());


const PORT= process.env.PORT || 6000;
const URL=process.env.MONGOURL 

//method
app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err=>res.json(err))
})

app.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTask = await TodoModel.findByIdAndUpdate(id, { done: true }, { new: true });
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/delete/:id', (req,res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err=>res.json(err))
})



app.post('/add',(req,res)=>{
    const task = req.body.task;
    if(!task)
        return res.status(400).json({error:"Task is required"})
    TodoModel.create({
        task:task
    }).then(result =>res.json(result))
    .catch(err=>res.json(err))
})





mongoose.connect(URL).then(()=>{
    console.log("Db Connected");

    app.listen(PORT,()=>{
        console.log(`Server is Running on port:${PORT}`);
    })
}).catch(error=>console.log(error));
