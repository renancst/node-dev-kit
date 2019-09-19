module.exports = () => {
  const findAll = (req, res) => {
    res.json([{ name: 'Renan', age: 25 }, { name: 'Gustavo', age: 26 }])
  }

  return { findAll }
}