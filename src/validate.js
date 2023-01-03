const inputValidate = (query) => {
  const showRe = /^show\$(all|todo|doing|done)$/;
  const addRe = /^add\$.+\$\[\".+\"\]$/;
  const deleteRe = /^delete\$[0-9]+$/;
  const updateRe = /^update\$[0-9]+\$(todo|doing|done)$/;

  return showRe.test(query) || addRe.test(query) || deleteRe.test(query) || updateRe.test(query);
};

module.exports = inputValidate;
