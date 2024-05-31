import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';
import postRoute from './routes/post.route.js';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';

// TEST
import testRoute from './routes/test.route.js';

const PORT = process.env.PORT || 8800;

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use('/api/post', postRoute);
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

// TEST
app.use('/api/test', testRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});