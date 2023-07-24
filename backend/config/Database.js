// Database.js: File ini berisi konfigurasi koneksi database menggunakan Sequelize. 
// Melakukan koneksi ke database MySQL dengan mengatur nama database, 
// username, password, host, dan jenis dialect.

import { Sequelize } from "sequelize";
const db = new Sequelize('tokodona_upload_db','tokodona_admin','$m0A75%V0Tnv',{
    host: 'api.tokodonatalvinoo.my.id',
    dialect: "mysql"
});

export default db;