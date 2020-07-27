import request from "./request.js";

const mainContent = document.querySelector("#main-content");

request("/api/albums")
.then(data=>mainContent.innerHTML = data.map(a=>`<div>${a.name}: ${a.artist}</div>`).join(""))