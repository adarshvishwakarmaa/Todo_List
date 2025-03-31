import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }
})

export default mongoose.model("auth",TodoSchema)