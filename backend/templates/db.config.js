module.exports = {
  HOST: "localhost",
  USER: "{{ backend_db_user }}",
  PASSWORD: "{{ backend_db_password }}",
  DB: "{{ backend_db_name }}",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
