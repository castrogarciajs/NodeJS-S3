import express from 'express'


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
export const index = (req, res) => {
  res.render("index", { default: "main", title: 'HOME - S3' });
};
