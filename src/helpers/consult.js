import sqlite3 from "sqlite3";

const db = new sqlite3.Database(
  "./db/servicios.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

let sql;

export const insertDataInService = (
  serviceName,
  serviceType,
  serviceDescripcion,
  serviceTel,
  serviceOtherContact,
  userData
) => {
  let sql =
    "insert into service(name,type,descripcion,contact, alt_contact,created_by) values (?,?,?,?,?,?)";
  db.run(
    sql,
    [
      serviceName,
      serviceType,
      serviceDescripcion,
      serviceTel,
      serviceOtherContact,
      userData,
    ],
    (err) => {
      if (err) return console.error(err.message);
    }
  );
};

export const updateDataInService = (
  serviceName,
  serviceType,
  serviceDescripcion,
  serviceTel,
  serviceOtherContact,
  serviceId
) => {
 let sql =
    `update service set name = ?,type = ?,descripcion = ?,contact = ?, alt_contact = ? where id = ?`
  db.run(
    sql,
    [
      serviceName,
      serviceType,
      serviceDescripcion,
      serviceTel,
      serviceOtherContact,
      serviceId
    ],
    (err) => {
      if (err) return console.error(err.message);
    }
  );
};

export const seeServices = () => {
  sql = "select * from service";
  db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
    console.log(rows)
  });
};

export const seeServicesOfUser = () => {
  sql = `select * from service where created_by = ${UserId}` ;
  db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
    return rows;
  });
};
