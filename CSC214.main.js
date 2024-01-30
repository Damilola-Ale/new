document.addEventListener('DOMContentLoaded', function() {
    const linkButton = document.querySelector('.button'); // Get reference to the anchor tag
  
    const radioButtons = document.querySelectorAll('input[name="person-type"]'); // Select all radio buttons
    radioButtons.forEach(radio => {
      radio.addEventListener('change', function() {
        if (this.checked) {
          // Change the href attribute of the anchor tag based on the selected value
          if (this.value === 'customer') {
            linkButton.href = 'CSC214.traveler.html'; // Update href for Student selection
          } else if (this.value === 'employee') {
            linkButton.href = 'CSC214.employee.html'; // Update href for Employee selection
          }
        }
      });
    });
  });
  