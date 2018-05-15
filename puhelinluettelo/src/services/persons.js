import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () =>
  axios
    .get(baseUrl)
    .then(res => res.data)

const create = (newObject) =>
  axios
    .post(baseUrl, newObject)
    .then(res => res.data)

const destroy = (id) =>
  axios
    .delete(`${baseUrl}/${id}`)


export default {getAll, create, destroy}
