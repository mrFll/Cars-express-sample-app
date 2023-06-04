const Users = require('../model/users');

const getUsers = async (req, res, next) => {
  try {
    const users = await Users.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

const getUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const users = await Users.getUser(userId);
    if (!users) {
      res.status(404).json({message: "User not found!"});
    } else {
      res.json(users);
    }
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

const createUser = async (req, res, next) => {
  try {
    const {first_name, last_name, age, email, password} = req.body;
    const insertionResult = await Users.createUser(first_name, last_name, age, email, password);
    res.json({
      message: "user successfully created.",
      insertedId: insertionResult.insertId
    });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const {first_name, last_name, age, email, password} = req.body;
    await Users.updateUser(userId, first_name, last_name, age, email, password);
    res.json({
      message: "user successfully updated."
    });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    console.log('userId :>> ', userId);
    const deleteResult = await Users.deleteUser(userId);
    if (!deleteResult.affectedRows) {
      res.status(404).json({message: "User not exists!"});
    } else {
      res.json({message: "User successfully deleted."});
    }
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}




module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
