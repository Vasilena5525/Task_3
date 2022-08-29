const endpoint = `https://www.boredapi.com/api/activity`;
const container = document.getElementById("container");
const btn = document.getElementById("btn");
const numOfActivities = 8;

let results = [];

const getActivities = async () => {
  for (let index = 0; index < numOfActivities; index++) {
    const response = await fetch(endpoint);
    const json = await response.json();
    const {activity} = json;
    results.push(activity);
  }
  displayer();
}

const displayer = ()=>{
  container.innerHTML = "";
  for (let index = 0; index < results.length; index++) {
    container.innerHTML += `<div class="activity"><h2>${results[index]}</h2></div>`;
  }
}

getActivities();
  

btn.addEventListener("click", ()=>{
  container.innerHTML = `<h1>Loading Results...</h1>`;
  results = [];
  getActivities();
});




