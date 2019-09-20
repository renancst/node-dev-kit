module.exports = async (app) => {
  return await Promise.all(
    Object.keys(app.db.models).map((key) => {
      return app.db.models[key].destroy({ where: {}, force: true })
    })
  )
}