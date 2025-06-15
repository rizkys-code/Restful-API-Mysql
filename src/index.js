const express = require('express');
const cors = require('cors'); // Tambahkan ini
const app = express();

const mahasiswaRoutes = require('./routes/mahasiswa');

// Middleware
app.use(cors()); // Aktifkan CORS untuk semua origin (termasuk 127.0.0.1:5500)
app.use(express.json());

// Routes
app.use('/', mahasiswaRoutes);

// Start server
app.listen(3000, () => {
    console.log('Server jalan di http://localhost:3000');
});
