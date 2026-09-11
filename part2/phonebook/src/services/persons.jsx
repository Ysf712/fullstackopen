import axios from 'axios'

const baseUrl = "http://127.0.0.1:3001/persons"

const getAll = () => {
    const respond = axios.get(baseUrl)
    return respond.then((r) => r.data)
}

const create = (person) => {
    const respond = axios.post(baseUrl, person)
    return respond.then((r) => r.data)
}

const remove = (id) => {
    const respond = axios.delete(`${baseUrl}/${id}`)
    return respond.then((r) => r.data)
}

const update = (person) => {
    const respond = axios.put(`${baseUrl}/${person.id}`, person)
    return respond.then((r) => r.data)
}

export default {
    getAll,
    create,
    remove,
    update
}