import express from "express";
import { Image } from "../models/models.js";
import { v2 as cloudinary } from "cloudinary";

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const index = (req, res) => {
  res.render("index", { default: "main", title: "HOME - S3" });
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const dashboard = async (req, res) => {
  const token = req.cookies.session;

  res.render("dashboard", { title: "Dashboard -S3", token });
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const pin = async (req, res) => {
  const token = req.cookies.session;
  const images = await Image.findAll();
  
  res.render("pin", {
    title: "Pin - S3",
    token,
    images
  });
};
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const saveImage = async (req, res) => {
  const image = req.file.path;
  const id = req.cookies.id;
  try {
    const result = await cloudinary.uploader.upload(image);

    await Image.create({
      image: result.secure_url,
      userId: id,
    });
    return res.redirect("/pin");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error del servidor");
  }
};
