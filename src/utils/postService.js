const BASE_URL = "/user";

export function create(post) {
  return fetch(BASE_URL/create, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(post)
  }).then(res => res.json());
}

export function create(post) {
  return fetch(BASE_URL/update, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(post)
  }).then(res => res.json());
}

export function deleteOne(post) {
  return fetch(BASE_URL/del, {
    method: 'DELETE',
  }).then(res => res.json());
}