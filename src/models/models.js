const snacks = []
const uuid = require('uuid/v4')


const getAll = () => snacks

const getOne = id => {
  let snack = snacks.find(snack => snack.id === id)
  return !snack ? {status: 404, errors: 'Could not find the specified snack'}: snack;
}

const createSnack = body => {
  const errors = []
  const name = body.name
  const type = body.snackType

  let response
  if (!name || !snackType) {
    errors.push('name is required')
    response = {errors}
  } else {
    const snack = {name}
    snack.id = uuid()
    snack.snackType = snackType
    snacks.push(snack)
    response = snack
  }
  return response
}

const updateSnack = (id, body) => {
    if (body.name === undefined || body.snackType === undefined) {
      return {status: 400, errors: 'Fields name and snackType are required'}
  }
    let reqSnack
    for(let i of snacks){
      if(i.id === id){
        i.name = body.name
        i.snackType = body.snackType
        reqSnack = i
    }
  }
    return !reqSnack ? {status: 404, errors : 'Could not find snack with id'}: reqSnack
}

const deleteSnack = id => {
  let reqSnack
  for(let i of snacks){
    if(i.id === id){
      reqSnack = i
      snacks.splice(i, 1)
  }
}
  return reqSnack ? reqSnack: {status: 404, errors : 'Could not find snack with id'};
}

module.exports = {getAll, getOne, createSnack, updateSnack, deleteSnack}
