
import User from "../models/user.js";

export async function getUsers(req, res) {
    try {
        const users = await User.find();
        if (!users) {
            return res.status(404).json({ message: 'No users found' });
        }

        res.status(200).json(users);

    } catch (error) {

        res.status(500).json({ message: error.message });
    }
}

export async function createUser(req, res) {
    try {
        const { name, email, password } = req.body;

        const newUser = new User({ name, email, password });
        await newUser.save();
        if (!newUser) {
            return res.status(400).json({ message: 'User not created' });

        }
        return res.status(201).json({ newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const { name, email,password } = req.body;
        const user = await User.findByIdAndUpdate(id, { name, email, password }, { new: true });
        return res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}


export  async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        console.log(id);
        await User.findByIdAndDelete(id);
        console.log(id);
         res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
}


export async function getUserById(req, res) {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({message: 'no user found' });

        }
        return res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
}