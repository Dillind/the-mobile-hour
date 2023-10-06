import express from "express";
import access_control from "../access_control.js";
import * as Changelog from "../models/changelog.js";

const changelogController = express.Router();

changelogController.get(
  "/changelog_admin",
  access_control(["manager", "user"]),
  (req, res) => {
    Changelog.getAll().then((changelog) => {
      res.render("changelog_admin.ejs", {
        changelog,
        accessRole: req.session.user.accessRole,
      });
    });
  }
);

export default changelogController;
