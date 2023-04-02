import express from "express";

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const dashboard = (req, res) => {
  const token = req.cookies.session;
  res.render("dashboard", { title: "Dashboard -S3", token });
};
