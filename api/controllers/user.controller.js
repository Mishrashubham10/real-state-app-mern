import prisma from '../lib/prisma.js';
import bcrypt from 'bcrypt';

// GET ALL USER
const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to get users' });
  }
};

// GET A SINGLE USER
const getUser = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ message: 'Id is required' });
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to get user' });
  }
};

// UPDATE USER
const updateUser = async (req, res) => {
  const { id } = req.params;
  const tokenUserId = req.userId;

  const { password, avatar, ...inputs } = req.body;

  if (id !== tokenUserId)
    return res.status(400).json({ message: 'Not Authorized' });

  let updatedPassword = null;
  try {
    if (password) {
      updatedPassword = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...inputs,
        ...(updatedPassword && { password: updatedPassword }),
        ...(avatar && { avatar }),
      },
    });

    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to update user' });
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const tokenUserId = req.userId;

  if (id !== tokenUserId)
    return res.status(400).json({ message: 'Not Authorized' });
  try {
    await prisma.user.delete({ where: { id } });

    res.status(200).json({ message: 'User deleted' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to delete user' });
  }
};

export { getUser, getUsers, updateUser, deleteUser };