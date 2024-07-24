// most of the stuff here i used here can be found either on the cheat sheet or on google
// this took alot of googling and is a good project to learn js

// script to add or subtract the prices of the items from the total price
// when the content loads the price updates to 0 

document.addEventListener('DOMContentLoaded', () => {
    const updateTotalPrice = () => {
      let total = 0;
      // for each card we select our variables (quantity and total price)
      document.querySelectorAll('.card').forEach(card => { // this allows us to select the unit price for every single item
        const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace(' $', ''));
        // and this is the quantity of each one of the items
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        // we update the total of each card and add em up
        total += unitPrice * quantity; // math
      });
      // then we update the overall total
      document.querySelector('.total').textContent = `${total} $`;
    };
  
    // QUANTITY SYSTEM
  // we listen for the + icon if it's pressed we add ++quantity
    document.querySelectorAll('.fa-plus-circle').forEach(button => { // again we use forEach button press as we did before since it's better than checking all of them at once
      button.addEventListener('click', () => {
        const quantityElement = button.nextElementSibling; // this is better than selecting the span element for quantity
        let quantity = parseInt(quantityElement.textContent);// ye idk what this does but it fixed it
        quantityElement.textContent = ++quantity;
        updateTotalPrice(); // keeps the price from glitching
      });
    });
  // we listen for the - icon if it's pressed we subtract --quantity
    document.querySelectorAll('.fa-minus-circle').forEach(button => {
      button.addEventListener('click', () => {
        const quantityElement = button.previousElementSibling;// more time saved 
        let quantity = parseInt(quantityElement.textContent);
      // problem is that it goes below 0 if we keep subtracting, this should fix it
        if (quantity > 0) {
          quantityElement.textContent = --quantity;
          updateTotalPrice();// again this is the best solution to keep the price from glitching
        }
      });
    });
  
    // DELETION SYSTEM
    document.querySelectorAll('.fa-trash-alt').forEach(button => {
      button.addEventListener('click', () => {
        const card = button.closest('.card');
        card.remove(); 
      });
    });
  
    // FAVORITE SYSTEM
    document.querySelectorAll('.fa-heart').forEach(button => {
      button.addEventListener('click', () => {
        button.classList.toggle('liked');
        button.style.color = button.classList.contains('liked') ? 'red' : 'black';
      });
    });
  });
// ALL DONE