module.exports = {
  source: {
    include: ["src"],
    includePattern: ".+\\.js(doc|x)?$)",
  },
  opts: {
    destination:  "./docs"
  }
};
