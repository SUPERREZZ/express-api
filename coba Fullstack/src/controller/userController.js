const db = require('../config/db');
exports.getAllUsers = async (req, res) => {
  try {
    const users = await db.query("SELECT * FROM user");
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
exports.getUserById = async (req, res) => {
  let { id } = req.params;
  id = id.replace(/\D/g, '');
  try {
    const user = await db.query("SELECT * FROM user WHERE id = ?", [parseInt(id)]);
    if (user.length === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(user[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
exports.createUser = async (req, res) => {
  const { nama, pass,role } = req.body;
  try {
    if (!nama || !pass || !role) {
      return res.status(400).json({ message: 'All fields are required' });
      
    }
    const newUser = await db.query("INSERT INTO user (nama, password,role) VALUES (?, ?,?)", [nama, pass,role]);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}
exports.updateUser = async (req, res) => {
  let { id } = req.params;
  id = id.replace(/\D/g, '');
  const { nama, pass,role } = req.body;
  try {
    const updateUser = await db.query("UPDATE user SET nama = ?, password = ?, role = ? WHERE id = ?", [nama, pass,role,parseInt(id)]);
    if (updateUser.affectedRows === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ message: 'User updated successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}
exports.deleteUser = async (req, res) => {
  let { id } = req.params;
  id = id.replace(/\D/g, '');
  try {
    const deleteUser = await db.query("DELETE FROM user WHERE id = ?", [parseInt(id)]);
    if (deleteUser.affectedRows === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}