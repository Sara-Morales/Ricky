let url = "https://rickandmortyapi.com/api/character";
const $containerCharacters = document.querySelector("show-characters");
async function loadCharacters(url) {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}
document.addEventListener("click", async (e) => {
  const characters = await loadCharacters(url);
  if (e.target.matches(".show-characters")) {
    console.log(characters);
  }
});
