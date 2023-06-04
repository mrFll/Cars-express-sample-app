const Database = require('../core/database');

const getUsers = async () => {
  const query = `
    select * from cars.users;
  `;
  const [rows, fields] = await Database.query(query);
  return rows;
}

const getUser = async (userId) => {
  const query = `
    select * from cars.users where id = ?;
  `;
  const [rows, fields] = await Database.query(query, [userId]);
  return rows[0];
}

const createUser = async (firstName, lastName, age, email, password) => {
  const query = `
    INSERT INTO cars.users (first_name, last_name, age, email, password) VALUES (?, ?, ?, ?);
  `;
  const params = [firstName, lastName, age, email, password];
  const [result] = await Database.query(query, params);
  return result;
}

const updateUser = async (userId, firstName, lastName, age, email, password) => {
  const updateData = {
    first_name: firstName,
    last_name: lastName,
    age,
    email,
    password
  };
  
  const params = [];
  const updateStatements = [];

  
  for (const [key, value] of Object.entries(updateData)) {
    if (value !== undefined) {
      updateStatements.push(`${"`" + key + "`"} = ?`);
      params.push(value);
    }
  }
  const query = `
    UPDATE cars.users SET ${updateStatements.join(',')} WHERE id = ?;
  `;
  params.push(userId);
  const [result] = await Database.query(query, params);
  return result;
}

const deleteUser = async (userId) => {
  const query = `
    delete from cars.users where id = ?;
  `;
  const [result] = await Database.query(query, [userId]);
  return result;
}




module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
