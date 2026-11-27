import UserService from '../services/UserService.js';

const createUser = async (req, res) => {
    const userData = await UserService.createUser(req.body);
    res.status(201).json(userData);
};

const getAllUsers = async (req, res) => {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
};

const getUserById = async (req, res) => {

    const id = req.params.id;
    const user = await UserService.getUserById(id);
    if (!user) res.status(404).json({ message: 'User not found' });
    res.json(user);
};

export default {
    createUser,
    getAllUsers,
    getUserById
};
