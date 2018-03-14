function uuidGenerator() {
  function quad() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16).slice(1);
  }

  let output = quad() + quad() + '-' + quad() + '-' + quad() + '-' + quad() + '-' + quad() + quad() + quad();
  return output;
}

module.exports = uuidGenerator;