import express from "express";

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const dashboard = (req, res) => {
  res.render("dashboard")
};
