// Restaurer la dernière couleur sauvegardée
const savedColor = localStorage.getItem("selectedColor");
if (savedColor) {
    document.body.style.backgroundColor = savedColor;
}

// Message
document.getElementById("alertBtn").onclick = () =>
    alert("Dracoul is the Best!");

// Générer la palette complète
const palette = document.getElementById("palette");

for (let h = 0; h < 360; h += 15) {
    for (let s = 40; s <= 100; s += 15) {
        for (let l = 35; l <= 70; l += 15) {

            const div = document.createElement("div");
            const color = `hsl(${h}, ${s}%, ${l}%)`;

            div.className = "color-cell";
            div.style.backgroundColor = color;
            div.dataset.color = color;

            div.onclick = () => {
                document.body.style.backgroundColor = color;

                // Sauvegarde
                localStorage.setItem("selectedColor", color);
            };

            palette.appendChild(div);
        }
    }
}
