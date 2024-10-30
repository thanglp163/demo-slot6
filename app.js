const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Trang chủ
app.get('/', (req, res) => {
  const data = { title: 'Trang Chủ', message: 'Chào mừng đến với EJS Example' };
  res.render('index', data);
});

// Trang danh sách người dùng
app.get('/users', (req, res) => {
  const users = [
    { name: 'Nguyen Van A' },
    { name: 'Tran Thi B' },
    { name: 'Le Van C' }
  ];
  res.render('users', { title: 'Danh Sách Người Dùng', users });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
