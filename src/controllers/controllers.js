const model = require('../models/models')

const getAll = (req, res, next) => {
  const data = model.getAll()
  res.status(200).json({data})
}

const getOne = (req, res, next) => {
  const result = model.getOne(req.params.id)
  if (result.errors) {
    return next({status: 404, message: `Bad request`, errors: result.errors})
  }
  res.status(200).json({data: result})
}

const createSnack = (req, res, next) => {
  const result = model.createSnack(req.body)

  if (result.errors) {
    return next({status: 400, message: `Could not create new snack`, errors: result.errors})
  }
  res.status(201).json({data : result})
}

const updateSnack = (req, res, next) => {
  const id = req.params.id
  const body = req.body
  const result = model.updateSnack(id, body)
  if (result.errors) {
    return next({status: 400, message: `Could not create new snack`, errors: result.errors})
  }
  res.status(200).json({data: result})
}

const deleteSnack = (req, res, next) =>{
  const result = model.deleteSnack(req.params.id)
  if (result.errors) {
    return next({status: 404, message: `Bad request`, errors: result.errors})
  }
  res.status(204).json({data: result})
}

module.exports = {getAll, getOne, createSnack, updateSnack, deleteSnack}
