import User from '../models/User.js';

// Function to create a new user
async function createUser(userData) {
    return await User.create(userData);
}

// Function to get all users
async function getAllUsers() {
    return await User.findAll();
}

// Function to get a user by ID
async function getUserById(id) {
    return await User.findByPk(id);
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById
};