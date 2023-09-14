       
       const notepadTextarea = document.querySelector('.notepad');
       const saveButton = document.querySelector('.save');
       const clearButton = document.querySelector('.clear');

       
       const savedText = localStorage.getItem('notepadText');
       if (savedText) {
           notepadTextarea.value = savedText;
       }

      
       saveButton.addEventListener('click', function () {
           const textToSave = notepadTextarea.value;
           localStorage.setItem('notepadText', textToSave);
           //alert('Text saved successfully!');
       });

       
       clearButton.addEventListener('click', function () {
           notepadTextarea.value = '';
           localStorage.removeItem('notepadText');
           alert('Text cleared successfully!');
       });