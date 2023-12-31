import express from 'express'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'
import useRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import bodyParser from 'body-parser'
import answerRoutes from "./routes/Answers.js";
import dotenv from "dotenv";


const app= express();
dotenv.config();
app.use(express.json( {limit:"30mb", extended:true}))
app.use(express.urlencoded({ limit:"30mb", extended:true}))
//app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());

app.get('/',(req,res)=>{
    res.send("this is an stackoverflow clone")
  })
  app.use("/user",useRoutes)
  app.use("/questions",questionRoutes)
  app.use("/answer", answerRoutes);
  
  
  //const PORT= process.env.PORT;
  const PORT= 5000;
  
 // const DATABASE_URL=process.env.CONNECTION_URL
  const CONNECTION_URL = "mongodb+srv://kritigarg2002:kriti706@stack-overflow-clone.xcd6jti.mongodb.net/?retryWrites=true&w=majority"
  mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(() => app.listen(PORT,()=>{console.log(`server running on ${ PORT}`)}))
  .catch((err)=> console.log(err.message))



