import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

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
    res.status(500).json({ message: "Failed to create user" })
  }
};

// LOGIN 
const login = (req, res) => {
  res.status(200).json({ message: 'User logged in successfully!' });
};

// LOGOUT
const logout = (req, res) => {
  res.status(200).json({ message: 'User logout!' });
};

export { register, login, logout };
