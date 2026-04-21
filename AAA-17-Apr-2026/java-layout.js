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
    img.style.borderRadius = "10px";
    img.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    header.appendChild(img);

    return header;
}

// 2. ASIDE (The Sidebar)
function createAside() {
    const aside = document.createElement('aside');
    aside.style.width = '250px';
    aside.style.backgroundColor = '#f9f9f9'; // Light gray background
    aside.style.padding = '20px';
    aside.style.borderRight = '2px solid #2563eb';
    
    aside.innerHTML = `
        <h3 style="color: #2563eb;">Menu</h3>
        <ul style="list-style: none; padding: 0; line-height: 2.5;">
            <li><a href="./input-remove-data-buttons.html" onclick="loadDashboardContent(); return false;" style="text-decoration: none; color: #333; font-weight: bold;"> Dashboard </a></li>
            <li><a href="" onclick="loadMyCoursesContent(); return false;" style="text-decoration: none; color: #333; font-weight: bold;">My Courses</a></li>
            <li><a href="./settings.html" onclick="loadSettingsContent(); return false;" style="text-decoration: none; color: #333; font-weight: bold;">Settings</a></li>
        </ul>
    `;
    return aside;
}

// 3. MAIN (With 2 Parts)
function createMain() {
    const main = document.createElement('main');
    main.style.flex = '1';
    main.style.padding = '30px';
    main.style.display = 'flex'; 
    main.style.gap = '20px';
    main.style.backgroundColor = '#e6e20e70';

    // Part 1: Main Content
    const part1 = document.createElement('div');
    part1.style.flex = '2'; 
    part1.innerHTML = `
        <h2 style="color: #2b4dc0;">Welcome to the Funny School</h2>
        <p>This is your primary area for lessons and content.</p>
        <div style="background: #ed83f7; height: 300px; border-radius: 12px; border: 2px dashed #2563eb; display: flex; align-items: center; justify-content: center;">
            <p style="color: #2563eb;">[ Main Video or Lesson Content Here ]</p>
        </div>
    `;

    // Part 2: Right Sidebar Widget
    const part2 = document.createElement('div');
    part2.style.flex = '1'; 
    part2.style.background = '#178120';
    part2.style.padding = '20px';
    part2.style.borderRadius = '12px';
    part2.style.border = '1px solid #ffe58f';
    part2.innerHTML = `
        <h4 style="margin-top: 0;">Latest News</h4>
        <p style="font-size: 0.9rem; color: #856404;">The school trip is scheduled for next Friday! Don't forget your permission slips.</p>
    `;

    main.appendChild(part1);
    main.appendChild(part2);
    return main;
}

// 4. FOOTER
function createFooter() {
    const footer = document.createElement('footer');
    footer.style.backgroundColor = '#0c1f5e';
    footer.style.color = 'white';
    footer.style.padding = '40px 20px';
    footer.style.textAlign = 'center';
    footer.innerHTML = `
        <p>&copy; 2026 The Funny School. All rights reserved.</p>
    `;
    return footer;
}

// 5. THE MASTER ASSEMBLY (Runs everything)
function assemblePage() {
    // Clear the body first to prevent doubling
    document.body.innerHTML = '';
    document.body.style.margin = '0';

    // Create the sections
    const header = createHeader();
    const footer = createFooter();
    
    // Create the middle row (Aside + Main)
    const middleRow = document.createElement('div');
    middleRow.style.display = 'flex';
    middleRow.style.minHeight = '60vh'; 
    
    middleRow.appendChild(createAside());
    middleRow.appendChild(createMain());

    // Add them to the page in order
    document.body.appendChild(header);
    document.body.appendChild(middleRow);
    document.body.appendChild(footer);
}

// Run the application
assemblePage();