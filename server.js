import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js"

dotenv.config();

import app from "./src/index.js";

const PORT = process.env.PORT || 8000;  

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});