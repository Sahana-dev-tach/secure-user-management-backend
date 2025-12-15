import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js"
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();
app.use(helmet()); //Help secure Express apps by setting HTTP response headers

app.use(cors({
    origin: ["http://localhost:8000", "http://localhost:3000"],
    credentials: true,
  }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev')); //HTTP request logger middleware

//When the limit is exceeded, the client gets an HTTP 429 Too Many Requests
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests. Try again later.",
  });
app.use(limiter);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

export default app;






