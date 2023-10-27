//mongodb+srv://nouhaila_danouni:wWZnBmvfW33zSJju@projects.t6jxa5t.mongodb.net/?retryWrites=true&w=majority
const express=require("express");
const app=express();
const productrouter=require("./routes_server/products.routes");
const mongoose=require("mongoose");
const url="mongodb+srv://nouhaila_danouni:wWZnBmvfW33zSJju@projects.t6jxa5t.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url)
.then(result=>app.listen(5000,()=>console.log("server running"))) //demarer le serveur
.catch(err=>console.log(err));

app.use(express.json());
app.use("/products",productrouter);


