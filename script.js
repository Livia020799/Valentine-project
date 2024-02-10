// main.js
var noCount =  0;
var yesPressed = false;
var yesButtonSize = noCount *  20 +  16;

var noGifs = [
"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGczazFwYmFsc2ZzNXlqMm83eTl1aTJ5N3lkeDljdDJsMXB1Ym83OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dJ3Fhbss0pegJE6h57/giphy.gif",
  "https://media.giphy.com/media/DxGrZ1vY3I7OnA2SJp/giphy.gif", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2ZpZjVtMm4xNXFwbmF0c29wMTZpd256MDFlMnVpeDNwZW1mdDlreiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AdqYefsn2gp2ntmn9G/giphy.gif",
  "https://media.giphy.com/media/f9BU5XaqJEDONLgtAX/giphy.gif",
  "https://media.giphy.com/media/Sf7VG0ODkwkQ7P9N3a/giphy.gif",
  "https://media.giphy.com/media/i7Bi7uJz4SgsKNyFGP/giphy.gif",
  "https://media.giphy.com/media/uQeD9Z747wHH6DvQjr/giphy.gif", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTgwbTI4cGFtcjJmbmRhZ282YWo0cDVweGEyZXY3ZGh0NDVhNmZkeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UzWcMXc4biOouz5PDr/giphy.gif",
  //"https://media.giphy.com/media/a9a64w8UYWOvImkzdc/giphy.gif",
  "https://media.giphy.com/media/NubDxhSINCrlP99WsZ/giphy.gif",
  "https://media.giphy.com/media/hR0K2ihWQD63pWFlrB/giphy.gif",
  "https://media.giphy.com/media/H33qhUPbaxww2AkFyz/giphy.gif",
  "https://media.giphy.com/media/SDXUaQuG6cJf6JtJjs/giphy.gif",
  "https://media.giphy.com/media/P9xqihIxP1BvU5BBDk/giphy.gif", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXAzMjFjNHQyb2t0ZnkzcGo2MzM0MXlvYTJzMTJwMm9qNHdtYnk5dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CeNuBAIjvH7CmaKzQD/giphy.gif", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTBnN3VhMjk3OHZoOGQ2MHZjcXB1NTJhc2lrbzdmeHZmZTYzcGdzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bip1IyfvpRvaqSLVdp/giphy.gif",
  "https://media.giphy.com/media/8MxvuVVJHvuMW86A64/giphy.gif",
];

function handleNoClick() {
  noCount++;
  yesButtonSize +=  noCount *  1 +  0.6; // Increase the size of the "Yes" button by  20 pixels
  updateApp();
  var index = noCount % noGifs.length; // Calculate the index
  var selectedGif = noGifs[index]; // Select the GIF URL based on the index
  var noGifElement = document.getElementById('noGif'); // Get the GIF element
  if (noGifElement) {
    noGifElement.src = selectedGif; // Update the GIF source
  } else {
    console.error("No element with id 'noGif' found.");
  }
  
  // Now update the text next to the "No" button
  var noButtonTextElement = document.getElementById('noButtonText');
  if (noButtonTextElement) {
    // Clear the existing text content before setting the new text
    //noButtonTextElement.textContent = '';
    noButtonTextElement.textContent = getNoButtonText(); // Set the new text
    
  } else {
    console.error("No element with id 'noButtonText' found.");
  }
}

// Helper function to create a text node if it doesn't exist
function createTextNode(parentElement) {
  var textNode = document.createTextNode('');
  parentElement.appendChild(textNode);
  return textNode;
}


// Event listener for the "No" button
document.getElementById('noButton').addEventListener('click', handleNoClick);

function getNoButtonText() {
  var phrases = [
        "No",
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart 😔"
      ];
  
      // Check if we have reached the last phrase and reset if necessary
  if (noCount >= phrases.length) {
    noCount =  0; // Reset the count
    yesButtonSize = 15; // Reset the button size
    updateApp(); // Refresh the app state
  }
  return phrases[Math.min(noCount, phrases.length -  1)];
}

function updateApp() {
  var app = document.getElementById('app');
  app.innerHTML = ''; // Clear current content

  if (yesPressed) {
    app.innerHTML += '<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzZlZm93dDA5dnA2bTVxc3o2OGt1dzdjb28wcXVjbG5vbmIxb2psMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lqPZLGWcXJHS21kubp/giphy.gif"><div class="text-4xl font-bold my-4">yay 🥰🥰</div>';
    document.body.style.backgroundColor = "#FFCAEC"; // Set background color to #FFCAEC
  }  else {
    app.innerHTML += `<img id="noGif" class="h-[200px]" src="${noGifs[0]}"><h1 class="text-4xl my-4">Will you be my Valentine?</h1><div><button onclick="setYesPressed()" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4" style="font-size:${yesButtonSize}px;">Yes</button><button onclick="handleNoClick()" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" id="noButton">${getNoButtonText()}</button></div>`;
    var noButtonTextElement = document.getElementById('noButton');
    if (noButtonTextElement) {
      noButtonTextElement.textContent = getNoButtonText(); // Set the new text
    } else {
      console.error("No element with id 'noButton' found.");
    }
    var yesButton = document.querySelector('.bg-green-500');
    if (yesButton) {
      yesButton.style.fontSize = `${yesButtonSize}px`; // Update the font size of the "Yes" button
    }    
  }
}

function setYesPressed() {
  yesPressed = true;
  updateApp();
}

updateApp(); // Initial render