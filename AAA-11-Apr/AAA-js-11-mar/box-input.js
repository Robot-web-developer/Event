 
    const input = document.getElementById('inputText');
    const saveBtn = document.getElementById('saveBtn');
    const savedValuesDiv = document.getElementById('savedValues');

    saveBtn.addEventListener('click'> () {
      const value = input.value.trim()
      if (value) {
        const p = document.createElement('p');
        p.textContent = value;
        savedValuesDiv.appendChild(p);
        input.value = ''; // clear input after saving
      }
    });

