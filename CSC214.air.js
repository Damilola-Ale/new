document.addEventListener('DOMContentLoaded', function() {
    const levelRadioButtons = document.querySelectorAll('input[name="air-type"]');
    const degreeSelect = document.querySelector('select[name="Destination"]');
    const degreeQuestion = document.querySelector('.question:nth-child(4)');
  
    // Initially disable the degree question and its inputs
    degreeQuestion.classList.add('disabled');
    const inputsToDisable = degreeQuestion.querySelectorAll('input, select');
    inputsToDisable.forEach(input => {
        input.disabled = true;
      });
  
    levelRadioButtons.forEach(radio => {
      radio.addEventListener('change', function() {
        if (this.value === 'flight') {
          // Enable the degree question and its inputs if "None" is selected
          degreeQuestion.classList.remove('disabled');
          inputsToDisable.forEach(input => {
            input.disabled = false;
          });
        } else {
          // Disable the degree question and its inputs for other level selections
          degreeQuestion.classList.add('disabled');
          inputsToDisable.forEach(input => {
            input.disabled = true;
          });
        }
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const levelRadioButtons = document.querySelectorAll('input[name="air-type"]');
    const degreeSelect = document.querySelector('select[name="Route"]');
    const degreeQuestion = document.querySelector('.question:nth-child(5)');
  
    // Initially disable the degree question and its inputs
    degreeQuestion.classList.add('disabled');
    const inputsToDisable = degreeQuestion.querySelectorAll('input, select');
    inputsToDisable.forEach(input => {
        input.disabled = true;
      });
  
    levelRadioButtons.forEach(radio => {
      radio.addEventListener('change', function() {
        if (this.value === 'cruise') {
          // Enable the degree question and its inputs if "None" is selected
          degreeQuestion.classList.remove('disabled');
          inputsToDisable.forEach(input => {
            input.disabled = false;
          });
        } else {
          // Disable the degree question and its inputs for other level selections
          degreeQuestion.classList.add('disabled');
          inputsToDisable.forEach(input => {
            input.disabled = true;
          });
        }
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const levelRadioButtons = document.querySelectorAll('input[name="air-type"]');
    const degreeSelect = document.querySelector('select[name="ship-type"]');
    const degreeQuestion = document.querySelector('.question:nth-child(6)');
  
    // Initially disable the degree question and its inputs
    degreeQuestion.classList.add('disabled');
    const inputsToDisable = degreeQuestion.querySelectorAll('input, select');
    inputsToDisable.forEach(input => {
        input.disabled = true;
      });
  
    levelRadioButtons.forEach(radio => {
      radio.addEventListener('change', function() {
        if (this.value === 'cruise') {
          // Enable the degree question and its inputs if "None" is selected
          degreeQuestion.classList.remove('disabled');
          inputsToDisable.forEach(input => {
            input.disabled = false;
          });
        } else {
          // Disable the degree question and its inputs for other level selections
          degreeQuestion.classList.add('disabled');
          inputsToDisable.forEach(input => {
            input.disabled = true;
          });
        }
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const linkButton = document.querySelector('.button'); // Get reference to the anchor tag
  
    const radioButtons = document.querySelectorAll('input[name="air-type"]'); // Select all radio buttons
    radioButtons.forEach(radio => {
      radio.addEventListener('change', function() {
        if (this.checked) {
          // Change the href attribute of the anchor tag based on the selected value
          if (this.value === 'flight') {
            linkButton.href = 'CSC214.airline.html'; // Update href for Student selection
          } else if (this.value === 'cruise') {
            linkButton.href = 'CSC214.accomodation.html'; // Update href for Employee selection
          }
        }
      });
    });
  });
  