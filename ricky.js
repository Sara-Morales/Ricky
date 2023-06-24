let json;
async function loadCharacters(url) {
  const $containerCharacters = document.querySelector("show-characters");
  let RickyAPI = "https://rickandmortyapi.com/api/character";
  try {
    const res = await fetch(RickyAPI);
    json = await res.json();
  } catch (err) {
    console.log(err);
  }
}
document.addEventListener("DOMContentLoaded", loadCharacters);
document.addEventListener("click", (e) => {
  if (e.target.matches(".show-characters")) {
    console.log(json);
  }
});
