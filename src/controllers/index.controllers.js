import express from "express";

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const index = (req, res) => {
  const token = req.cookies.session;

  res.render("index", { default: "main", title: "HOME - S3", token });
};



/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const dashboard = (req, res) => {
  const token = req.cookies.session;
  res.render("dashboard", { title: "Dashboard -S3", token });
};