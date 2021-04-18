const BASE_URL = "http://localhost:3000/";

// const url = `${BASE_URL}monsters/?_limit=50&_page=1`;
// fetch(url)
// .then(resp => resp.json())
// .then(data => console.log(data));

function getMonsters(page) {
    const url = `${BASE_URL}monsters/?_limit=50&_page=${page}`;
return fetch(url)
.then(resp => resp.json())

}
// const monsters = getMonsters();
// console.log(monsters);
// getMonsters(1).then(data => console.log(data));

/* <div>
      <h2>Monster Name1</h2>
      <h3>Monster Age1</h3>
      <p>About the Monster2:</p>
</div> */

function createMonstersDiv(monsterObj) {
    const div = document.createElement('div'),
    h2 = document.createElement('h2'),
    h3 = document.createElement('h3'),
    p = document.createElement('p');

    h2.textContent = monsterObj.name;
    h3.textContent = monsterObj.age;
    p.textContent = monsterObj.description;

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    
    return div;
}

/* <div id='monster-container'>
    <div>
      <h2>Monster Name</h2>
      <h3>Monster Age</h3>
      <p>About the Monster</p>
    </div>
  </div> */

function showMonsters(monstersArray) {
    const monsterObj = monstersArray[0];
    const monsterContainer = document.getElementById('monster-container');
    console.log(monsterContainer);


}
const testMonstersArray = [
    
        {
        "name": "Chronos",
        "age": 4005.302453418598,
        "description": "Effulgence eldritch shunned foetid. Ululate gibbering tenebrous foetid iridescence daemoniac. Stench nameless gambrel. Amorphous furtive iridescence noisome. Foetid mortal nameless.",
        "id": 1
        },
        {
        "name": "Tartarus",
        "age": 1874.4913565609456,
        "description": "Cyclopean swarthy amorphous singular accursed furtive non-euclidean stygian. Swarthy gibbering charnel eldritch daemoniac gibbous. Cyclopean lurk hideous tentacles squamous immemorial tenebrous mortal. Madness tentacles furtive mortal foetid decadent. Foetid immemorial comprehension.",
        "id": 2
        },
        {
        "name": "Hemera",
        "age": 4094.8375978925988,
        "description": "Dank immemorial abnormal gambrel. Cat lurk unutterable. Abnormal tenebrous ululate. Nameless swarthy manuscript eldritch indescribable accursed antediluvian decadent.",
        "id": 3
        },
        {
        "name": "Tartarus",
        "age": 2364.163894640274,
        "description": "Fungus blasphemous immemorial indescribable singular cat foetid. Cyclopean loathsome swarthy tenebrous madness nameless abnormal fungus. Daemoniac fungus fainted.",
        "id": 4
        },
        {
        "name": "Pontus",
        "age": 4838.903020812994,
        "description": "Mortal madness foetid. Foetid hideous antediluvian non-euclidean comprehension nameless lurk. Squamous shunned accursed amorphous.",
        "id": 5
        }
]
showMonsters(testMonstersArray);