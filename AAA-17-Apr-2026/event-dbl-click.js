<script>
        const doubleClickArea = document.getElementById('double-click-area');

        doubleClickArea.addEventListener('dblclick', () => {
            alert('You double-clicked the area!');
        });
    </script>
// 1. HEADER
function createHeader() {
    const header = document.createElement('header');
    header.style.background = 'linear-gradient(135deg, #2b4dc0 0%, #2563eb 100%)';
    header.style.height = '60vh'; 
    header.style.display = 'flex';
    header.style.flexDirection = 'column'; 
    header.style.alignItems = 'center';     
    header.style.justifyContent = 'center'; 
    header.style.color = 'white';
    header.style.padding = '20px';
    header.style.textAlign = 'center';
    const title = document.createElement('div');
    title.innerHTML = '<strong>My Brand</strong>';
    title.style.fontSize = '2.5rem';
    title.style.marginBottom = '20px';
    header.appendChild(title);
    const img = document.createElement("img");
    img.src = "./images/header.JPG";
    img.alt = "The Funny school";
    img.style.width = "100%";
    img.style.maxWidth = "700px"; 
    img.style.height = "auto"; // Changed to auto to keep image proportions