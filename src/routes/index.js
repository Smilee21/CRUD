import sqlite3 from "sqlite3";

const db = new sqlite3.Database(
  "./db/servicios.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.render("index", { title: "Home " }));

router.get("/about", (req, res) => res.render("about", { title: "Conoceme" }));

router.get("/public", (req, res) =>
  res.render("public", { title: "Publica Tu Servico" })
);

router.get(
  "/services",
  (req, res) => {
    let sql = `select * from service`;
    try {
      db.all(sql, [], (err, rows) => {
        if (err) return res.json({ status: 300, succes: false, error: err });
        
        if (rows.length < 1) res.redirect("/vacio")
        
        res.render("services", { title: "Servicios Disponibles", data: rows });
      });
    } catch (error) {
      return res.json({ status: 400, success: false });
    }
  }
);

router.get(
  "/vacio",
  (req, res) => {res.render("vacio", {title: "Sevicios"})}
);

router.get(
  "/vacio",
  (req, res) => {res.render("vacio", {title: "Sevicios"})}
);



router.get(
  "/services/:id",
  (req, res) => {
    const id = req.params.id;
    let sql = `select * from service where id = ${id}`;
    try {
      db.all(sql, [], (err, rows) => {
        if (err) return res.json({ status: 300, succes: false, error: err });

        if (rows.length < 1) res.redirect("/vacio")

        res.render("service", { title: "Servicios Disponibles", data: rows });
      });
    } catch (error) {
      return res.json({ status: 400, succes: false });
    }
  }
  //
);

router.get(
  "/edit/:uid",
  (req, res) => {
    const UserId = req.params.uid;
    let sql = `select * from service where created_by = "${UserId}"`;
    try {
      db.all(sql, [], (err, rows) => {
        if (err) return res.json({ status: 300, succes: false, error: err });

        if (rows.length < 1)
          return res.json({ status: 300, succes: false, error: "no match" });

        res.render("edit", { title: "Editar Servicios", data: rows });
      });
    } catch (error) {
      return res.json({ status: 400, succes: false });
    }
  }
  //
);

router.get(
  "/deleteService/:id",
  (req, res) => {
    const id = req.params.id;
    let sql = `delete from service where id = ${id}`;
    try {
      db.all(sql, [], (err, rows) => {
        if (err) return res.json({ status: 300, succes: false, error: err });
        res.redirect("/services");
      });
    } catch (error) {
      return res.json({ status: 400, succes: false });
    }
  }
  //
);
router.get(
  "/editService/:id",
  (req, res) => {
    const id = req.params.id;
    let sql = `select * from service where id = ${id}`;
    try {
      db.all(sql, [], (err, rows) => {
        if (err) return res.json({ status: 300, succes: false, error: err });
        if (rows.length < 1) return res.json({ status: 300, succes: false, error: "no match" });
      
        res.render("editService", { title: "Editar", data: rows });
      
      });
    } catch (error) {
      return res.json({ status: 400, succes: false });
    }
  }
  //
);





export default router;
