import "dotenv/config";
import "./db";
import "./models/User";
import app from "./server";


const PORT = 5500;
const handleListening = () => console.log(`✅ Server running : http://localhost:${PORT}`);

app.listen(PORT, handleListening);