import Sequelize from "sequelize";
import { DB_NAME, DB_USER, DB_PASS } from "../config.js";

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: "localhost",
  dialect: "postgres",
});
