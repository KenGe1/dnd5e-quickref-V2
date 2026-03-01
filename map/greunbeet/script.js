const name = "Greunbeet"

const backArrow = document.getElementById("backArrow")
const hamburger = document.getElementById("hamburger")
const sideBar = document.getElementById("sideBar")
let sideBarOpen = false

const titelText = name
const headerText = name

document.title = titelText;
document.getElementById("PageHeader").textContent = headerText;

var map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -1.75,
    maxZoom: 1,
    zoomSnap: 0.1
    });

fetch(`https://pub-254bba07fa6840d4811b027ba5135175.r2.dev/json/${name}.json`)
    .then(res => {
        if (!res.ok) {
            throw new Error("HTTP Fehler: " + res.status);
        }
        return res.json();
    })
    .then(data => {

        console.log("Geladen:", data);

        // ==============================
        // 1️⃣ Sidebar Icons (nur Marker!)
        // ==============================

        const iconLabels = {
            house: "Haus",
            bed: "Unterkunft",
            person: "Person",
            shop: "Shop",
            smith: "Schmiede",
            "magic-swirl": "Magiergilde",
            scales: "Händlergilde",
            abenteurer: "Abenteurergilde",
            help: "Unbekannt",
            "Beer-stein": "Spelunke"
        };

        // Nur Marker filtern
        const markerData = data.filter(item => item.type === "Marker");

        const iconList = markerData.map(item => item.icon);
        const uniqueIcons = [...new Set(iconList)];

        sideBar.innerHTML = "";

        uniqueIcons.forEach(iconName => {

            const div = document.createElement("div");
            div.classList.add("item");

            const img = document.createElement("img");
            img.src = `../src/icon/${iconName}.png`;

            const p = document.createElement("p");
            p.textContent = iconLabels[iconName] 
                || iconName.charAt(0).toUpperCase() + iconName.slice(1);

            div.appendChild(img);
            div.appendChild(p);
            sideBar.appendChild(div);
        });


        // ==============================
        // 2️⃣ Marker & Areas erzeugen
        // ==============================

        data.forEach(item => {

            // ======================
            // MARKER
            // ======================
            if (item.type === "Marker") {

                const icon = L.icon({
                    iconUrl: `../src/icon/${item.icon}.png`,
                    iconSize: [item.iconSize, item.iconSize],
                    iconAnchor: [16, 32],
                    popupAnchor: [0, -32],
                    className: "icon"
                });

                L.marker([item.y, item.x], { icon: icon })
                    .addTo(map)
                    .bindPopup(`
                        <div class="popupText">
                            <h3><b><u>${item.name}</u></b></h3>
                            <p>${item.text}</p>
                        </div>
                    `);
            }


            // ======================
            // AREA (Rectangle)
            // ======================
            if (item.type === "Area") {

                const minX = Math.min(item.start.x, item.end.x);
                const maxX = Math.max(item.start.x, item.end.x);
                const minY = Math.min(item.start.y, item.end.y);
                const maxY = Math.max(item.start.y, item.end.y);

                const bounds = [
                    [minY, minX],
                    [maxY, maxX]
                ];

                const rectangle = L.rectangle(bounds, {
                    color: "#00000000",   // unsichtbarer Rand
                    weight: 2,
                    fillOpacity: 0        // komplett unsichtbar
                }).addTo(map);

                rectangle.bindTooltip(item.name);

                rectangle.on('click', function() {
                    window.location.href = item.link;
                });

                rectangle.on('mouseover', function () {
                    this.setStyle({ fillOpacity: 0.3 });
                });

                rectangle.on('mouseout', function () {
                    this.setStyle({ fillOpacity: 0 });
                });
            }

        });

    })
    .catch(err => console.error("Fetch Fehler:", err));

var bounds = [[0,0], [1536, 2048]]; // an Bildgröße anpassen!

L.imageOverlay(`https://pub-254bba07fa6840d4811b027ba5135175.r2.dev/maps/${name}.avif`, bounds).addTo(map);

map.fitBounds(bounds);

function OpenSidebar() {
    sideBarOpen = true
    sideBar.style.display = "flex"
}

function CloseSidebar() {
    sideBarOpen = false
    sideBar.style.display = "none"
}

hamburger.addEventListener("click", function() {
    if (sideBarOpen) {
        CloseSidebar()
    }
    else {
        OpenSidebar()
    }
})

backArrow.addEventListener("click", function() {
    window.location.href = "../"
})

