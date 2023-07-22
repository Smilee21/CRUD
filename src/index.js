import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js";
import dotenv from "dotenv";
import { insertDataInService, updateDataInService } from "./helpers/consult.js";
dotenv.config();

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

//configuraciones
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(indexRoutes);

// se obtiene el user id
app.post("/UID", async (req, res) => {
  const { userData, userEmail, elementosFormJSON } = req.body;
  const formElement = JSON.parse(elementosFormJSON);
  const {
    serviceName,
    serviceType,
    serviceDescripcion,
    serviceTel,
    serviceOtherContact,
  } = formElement;


  insertDataInService(
    serviceName,
    serviceType,
    serviceDescripcion,
    serviceTel,
    serviceOtherContact,
    userData
  );

});

app.post("/update", async (req, res) => {
  const { userData, elementosFormJSON } = req.body;
  const formElement = JSON.parse(elementosFormJSON);
  const {
    serviceName,
    serviceType,
    serviceDescripcion,
    serviceTel,
    serviceOtherContact,
    serviceId
  } = formElement;


  updateDataInService(
    serviceName,
    serviceType,
    serviceDescripcion,
    serviceTel,
    serviceOtherContact,
    serviceId
  );

});

app.use(express.static(join(__dirname, "public")));

const PORT = process.env.PORT || 3000;
console.log("server on port", PORT);

app.listen(PORT, () => {
  console.log("server in port:", PORT);
});
