import { Request, Response } from 'express';
import User, { IUser } from '../models/User';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).send({ message: 'Name and email are required.' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: 'Email already in use.' });
    }

    const newUser: IUser = new User({ name, email });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};