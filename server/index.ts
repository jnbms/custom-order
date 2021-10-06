import express from "express";
import {renderToString} from "react-dom/server";
import path from "path";
import api from "./api";
// import {router} from "./routes"

const port = process.env.PORT || 3002;
const app = express();
const root = path.join("dist");

app.use(express.static(root));
app.use("/api",api);

app.get("*",(req,res) => {
    res.sendFile("index.html",{root});
});
app.listen(port,() => console.log(`http://localhost:${port}`))


