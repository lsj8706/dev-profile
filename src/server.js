import path from "path";
import express from "express";


const PORT = 5500;
const app = express();
app.set("view engine","pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "static")));
app.get("/", (req,res) => res.render("home"));



const handleListening = () => console.log(`✅ Server running : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
