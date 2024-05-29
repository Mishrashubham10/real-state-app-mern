import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.js';

// REGISTER USER
const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // HASH THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE A NEW USER AND SAVE TO DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ message: 'User created successfully!' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to create user' });
  }
};

// LOGIN USER
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // CHECK IF USER EXISTS
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) return res.status(401).json({ message: 'Invalid Credentials!' });

    // CHECK IF THE PASSWORD IS CORRECT
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: 'Invalid Credentials!' });

    // JWT TOKEN
    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    // GENERATE COOKIE TOKEN AND SEND TO THE USER
    res
      .cookie('token', token, {
        httpOnly: true,
        // secure: true
        maxAge: age,
      })
      .status(200)
      .json({ message: 'Login Successfull' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'User Failed to login' });
  }
};

// LOGOUT
const logout = (req, res) => {
  res.clearCookie('token').status(200).json({ message: 'Logout successful' });
};

export { register, login, logout };