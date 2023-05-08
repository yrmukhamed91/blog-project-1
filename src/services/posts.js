import axios from 'axios'
const URL = 'http://localhost:3001/posts/'
 
const getPosts = (number) => {
    return axios.get(URL)
}

const createPost = (newPost) => {
    return axios.post(URL, newPost)
}

const editPost = (changedPost, id) => {
    return axios.put(`${URL}/${id}`, changedPost)
}

const getPost = (id) => {
    return axios.get(`http://localhost:3001/posts/${id}`)
}

export default { getPosts, createPost, editPost, getPost  }