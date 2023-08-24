//step 1
const button = document.createElement('button');
button.textContent = 'Click me!';
document.body.appendChild(button);

button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.backgroundColor = '#3498db';
button.style.color = '#ffffff';
button.style.border = 'none';
button.style.cursor = 'pointer';

button.addEventListener("click", function() {
    button.style.backgroundColor = "red";
    button.style.color = "white";
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    button.textContent = "Clicked " + randomNumber + "!";
  });

  //step 2
  const h1 = document.createElement('h1');
  h1.style.border = '10px dotted green';
  h1.textContent = 'Hello world!';
  document.body.appendChild(h1);

  document.addEventListener("keydown", function(event) {
    switch (event.key) {
      case "A":
        h1.style.backgroundColor = "red";
        break;
      case "S":
        h1.style.marginLeft = (parseInt(h1.style.marginLeft) || 0) + 10 + "px";
        break;
      case "D":
        const newParagraph = document.createElement("p");
        newParagraph.textContent = "Key D was pressed!";
        document.body.appendChild(newParagraph);
        break;
      case "W":
        h1.style.display = h1.style.display === "none" ? "block" : "none";
        break;
      case " ":
        h1.style.fontSize = (parseInt(h1.style.fontSize) || 16) + 5 + "px";
        break;
      default:
        break;
    }
  });

