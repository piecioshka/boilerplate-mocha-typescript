module.exports = (cb) => {
  setTimeout(() => {
    cb("mode: async");
  }, 500);
};
