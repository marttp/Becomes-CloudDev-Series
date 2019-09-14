const axios = require('axios');

/**
 * ส่วนนี้เป็นแค่ตัวอย่าง data เพื่อยกตัวอย่างประกอบเท่านั้นนะครับ
 */
const userList = [
  {
    name: 'Mr First',
    company: '1st company'
  },
  {
    name: 'Mr Second',
    company: '2nd company'
  }
];

const getUsers = async (req, res) => {
  return res.status(200).json({
    users: userList,
    length: userList.length
  });
};

const addUsers = async (req, res) => {
  const { name, company } = req.body;
  const data = {
    name,
    company
  };
  userList.push(data);

  return res.status(200).json({
    user: data
  });
};

const getUsersFromJsonPlaceholder = async (req, res) => {
  const jsonPlaceholderUsers = await axios.default.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  const users = jsonPlaceholderUsers.data;

  return res.status(200).json({
    users,
    length: users.length
  });
};

module.exports = {
  getUsers,
  addUsers,
  getUsersFromJsonPlaceholder
};
