const pool = require("../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            'INSERT INTO register(Username, Email, Password) VALUES (?, ?, ?)',
            [
                data.Username,
                data.Email,
                data.Password,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                 callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
          `update registration set Username=?,Email=?,Password=?,Id=?`,
          [
            data.Username,
            data.Email,
            data.Password,
            data.Id
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      getUserByUserId: (id, callBack) => {
        pool.query(
        `select id,registration set Username=?,Email=?,Password=?,number from registration where id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      getUsers: callBack => {
        pool.query(
          `SELECT id, Username, Email, Password, number FROM registration`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      
    deleteUser: (data, callBack) => {
        pool.query(
          `delete from registration where id = ?`,
          [data],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
    }
};
