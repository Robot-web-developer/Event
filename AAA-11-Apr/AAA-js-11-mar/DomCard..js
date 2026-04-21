let heading = document.querySelector("h1");

heading.style.color = "blue";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "40px";

console.log(heading);
 let allButtons = document.querySelectorAll("colorbtn");
document.getElementById('colorBtn').addEventListener('click', function () {
            try {
                const newColor = getRandomColor();
                document.body.style.backgroundColor = newColor;
                console.log("Background changed to:", newColor);
            } catch (error) {
                console.error("Error changing background:", error);
            }

// let allButtons = document.querySelectorAll("button");
// const card = document.getElementsByTagNam("card");
// card.style.width = "300px";
// card.style.height = "180px";
// card.style.border = "2px solid #333";
// card.style.borderRadius = "10px";
// card.style.fontFamily = "Arial, sans-serif";
// card.style.overflow = "hidden";
// card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
// card.style.background = "#f9f9f9";
// card.style.display = "flex";
// card.style.flexDirection = "column";
// card.style.alignItems = "center";
// card.style.padding = "10px";
// console.log(card);