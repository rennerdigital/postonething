const BASE_URL = "/user";

async function create(post) {
  return await fetch(BASE_URL + '/create', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(post)
  }).then(res => (res.json()));
  // (res.json)
}

function update(post) {
  return fetch(BASE_URL + '/update', {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(post)
  }).then(res => (res.json()));
}

function deleteOne(post) {
  return fetch(BASE_URL + '/del', {
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

export default {
  create, 
  update,
  deleteOne,
  getAll
};