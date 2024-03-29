//navbar handler
function topnav() {
    var x = document.getElementById("navLinks")
    var y = document.getElementById("menu")
    var z = document.getElementById("nav")
    if (x.style.display === "block") {
        x.style.display = "none"
        y.innerText = "menu"
        y.style.fontSize = "25px"
        y.style.borderRadius = "13px"
        y.style.margin = "0";
        z.style.padding = "2px"
        z.style.margin = "6px"
        z.style.height = "auto"
        z.style.width = "auto"
        z.style.margin = "6px"
        z.style.borderRadius = "13px"
    } else {
        x.style.display = "block"
        y.innerText = "close"
        y.style.fontSize = "19px"
        y.style.margin = "20px"
        y.style.background = "none"
        z.style.backgroundColor = "rgba(--blackbg .5)"
        z.style.height = "100%"
        z.style.borderRadius = "0"
        z.style.width = "100%"
        z.style.margin = "0"
    }
}
async function init() {
    const json = await fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&page=1&nowplaying="true"&user=maddieisme&api_key=ea951fd34f50fdaf09f0c8e7bc8f184d&format=json');
    let { recenttracks } = await json.json();
    if (document.getElementById("url") != recenttracks.track[0].url) {

        document.getElementById("url").href = recenttracks.track[0].url;
        document.getElementById("album").src = recenttracks.track[0].image[3]["#text"];

        if (document.getElementById("trackname") != recenttracks.track[0]["name"]) { document.getElementById("trackname").innerText = recenttracks.track[0]["name"]; }
        if (document.getElementById("artist") != recenttracks.track[0].artist["#text"]) { document.getElementById("artist").innerText = `${recenttracks.track[0].artist["#text"]} - ${recenttracks.track[0].album["#text"]}`; }

    }
    setTimeout(init, 3000);
}
