import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./auth/routes/AuthRoute.js";

const app = express();

// Atur CORS untuk mengizinkan permintaan dari origin yang telah ditentukan
app.use(cors({
  origin: "http://www.tokodonatalvinoo.my.id",
  credentials: true, // Jika Anda perlu mengirimkan cookie atau header autentikasi
}));

app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);
app.use("/auth", AuthRoute);

app.listen(5000, () => console.log('Server Up and Running...'));
