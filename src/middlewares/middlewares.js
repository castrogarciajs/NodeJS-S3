import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const verifyToken = (req, res, next) => {
  const token = req.cookies.session;

  if (!token) return res.status(401).redirect("/login");

  try {
    const decoded = jwt.verify(token, process.env.MY_SECRET_KEY);
    req.user = decoded.userId;

    next();
  } catch (error) {
    res.status(500).send("error Internal server");
  }
};
