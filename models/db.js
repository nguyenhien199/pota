// Import module
const mysql = require('mysql');

// Tạo kết nối
const connection = mysql.createConnection({
    host: 'localhost', // Địa chỉ máy chủ MySQL
    user: 'root',      // Tên người dùng MySQL
    password: '', // Mật khẩu người dùng MySQL
    database: 'pota'     // Tên cơ sở dữ liệu MySQL
});

// Kết nối đến cơ sở dữ liệu
connection.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối:', err.stack);
        return;
    }
    console.log('Kết nối thành công với ID:', connection.threadId);
});

// Thực thi truy vấn
connection.query('SELECT * FROM table_name', (err, results) => {
    if (err) throw err;
    console.log('Kết quả:', results);
});

// Đóng kết nối
connection.end((err) => {
    if (err) {
        console.error('Lỗi đóng kết nối:', err.message);
        return;
    }
    console.log('Kết nối đã đóng');
});
