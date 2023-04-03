import express from "express";
import { Image } from "../models/models.js";

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const getImages = async (req, res) => {
  const db = await Image.findAll();
  res.status(200).json(db);
};
