const BASE_URL = "http://localhost:3000/";

// const url = `${BASE_URL}monsters/?_limit=50&_page=1`;
// fetch(url)
// .then(resp => resp.json())
// .then(data => console.log(data));

function getMonsters(page) {
    const url = `${BASE_URL}monsters/?_limit=50&_page=${page}`;
return fetch(url)
.then(resp => resp.json())
.then(data => console.log(data));
}
// const monsters = getMonsters();
// console.log(monsters);
getMonsters(3).then(data => console.log(data));