import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import postRoute from './routes/post.route.js';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';

const PORT = process.env.PORT || 8800;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200,
  })
);

app.use('/api/post', postRoute);
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});