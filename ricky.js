const $containerCharacters = document.querySelector(".container-characters");
let url = "https://rickandmortyapi.com/api/character";

async function loadCharacters(url) {
  try {
    let res = await fetch(url);
    let json = await res.json();
    let $template = "";

    //console.log(res);
    //console.log(json);

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    for (let i = 0; i < json.results.length; i++) {
      //console.log(json.results[i]);
      $template += `
        <div class="card-container" >
            <div class="card-image">
              <img class="" src="${json.results[i].image}">
            </div>
            <div class="card-name">
              <p><b>${json.results[i].name}</b></p>
            </div>
            <div class="card-details">
             <p class="">${json.results[i].species},&nbsp${json.results[i].gender},&nbsp${json.results[i].status}<b></b></p>
            </div> 
          </div>
        `;
      $containerCharacters.innerHTML=$template;
    }
  } catch (err) {
    console.log(err);
  }
}

loadCharacters(url);
