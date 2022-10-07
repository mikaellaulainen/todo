import axios from "axios";
const baseUrl = '/api/todos'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(res=>res.data)
}

const create =async newObject => {
  console.log(newObject)
  const res= await axios.post(baseUrl,newObject)
  return res.data
}
const update = (id,newObject) => {
  const req = axios.put(`${baseUrl}/${id}`, newObject)
  return req.then(res => res.data)
}
export default {getAll,create,update}