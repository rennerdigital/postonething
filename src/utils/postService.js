const BASE_URL = "/user";

async function create(post) {
  return await fetch(BASE_URL + '/create', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(post)
  }).then(res => (res.json()));
  // (res.json)
}

function update(id, title) {
  return fetch(BASE_URL + `/update/${id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({title})
  }).then(res => (res.json()));
}

function deleteOne(id) {
  return fetch(BASE_URL + `/del/${id}`, {
    method: 'DELETE',
  }).then(res => (res.json()));
}

async function getAll() {
  return await fetch(BASE_URL + '/all', {
    method: 'GET',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify()
  }).then(res => (res.json()));
  // (res.json)
}

async function getUserPosts(id) {
  return await fetch(BASE_URL + `/posts/${id}`, {
    method: 'GET',
    headers: {'content-type': 'application/json'},
  }).then(res => (res.json()));
  // (res.json)
}

export default {
  create, 
  update,
  deleteOne,
  getAll,
  getUserPosts
};