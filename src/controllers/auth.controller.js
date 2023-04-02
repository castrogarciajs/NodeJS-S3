import express from "express";
import { User } from "../models/models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const register = (req, res) => {
  res.status(200).render("auth/Register", {
    title: "Register - S3",
    submit: "Register",
  });
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const login = (req, res) => {
  res.status(200).render("auth/Login", {
    title: "Login - S3",
    submit: "Login",
  });
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!username || !password)
      return res.status(400).render("auth/Register", {
        title: "Register - S3",
        submit: "Register",
        error: "El usuario y la contraseña son requeridos",
      });

    if (user)
      return res.status(400).render("auth/Register", {
        title: "Register - S3",
        submit: "Register",
        error: "El usuario ya existe !",
      });

    await User.create({
      username: username.toLowerCase().trim(),
      password: (await bcrypt.hash(password, 10)).trim(),
    });

    return res.redirect("/");
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("error del servidor");
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const loginUsers = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });

    if (!username || !password)
      return res.render("auth/Login", {
        title: "Login - S3",
        submit: "Login",
        error: "Ingresa un nombre y una contraseña",
      });

    if (!user)
      return res.status(401).render("auth/Login", {
        title: "Login - S3",
        submit: "Login",
        error: "El usuario y la contraseña agregadas no existen",
      });

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword)
      return res.status(401).render("auth/Login", {
        title: "Login - S3",
        submit: "Login",
        error: "contraseña Incorrecta",
      });

    const token = jwt.sign({ userId: user.id }, process.env.MY_SECRET_KEY);

    res.cookie("session", token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 100,
    });
    return res.redirect("/dashboard");
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("error del servidor");
  }
};
