const mapArray = ["ancient", "anubis", "dust2", "inferno", "mirage", "nuke", "vertigo"];

function toggleMapData(selectedMap) {
    mapArray.forEach(map => {
        let element = document.getElementById(map);
        if (map === selectedMap) {
            element.style.display = (element.style.display === "none" || element.style.display === "") ? "table-cell" : "none";
        } else {
            element.style.display = "none";
        }
    });
}

// console.log(document.getElementById(mapArray[1].toString()))
/*
function iterateThroughMaps() {
    for (let i = 0; i < mapArray.length; i++) {
        let n = document.getElementById(mapArray[i]);
        if (n.style.display == "none") {
            n.style.display = "table-cell";
        } else {
            n.style.display = "none";
        }
    }
}*/


/*
function loadAncient() {
    const ancientID = document.getElementById("ancient")
    if (ancientID.style.display == "none") {
        ancientID.style.display = "table-cell";
    } else {
        ancientID.style.display = "none";
    }
};
*/