//Step 1
const menuDiv = document.querySelector('.menu');
const headerElement = document.querySelector('header');
const footerElement = document.querySelector('footer');

console.log('Child elements of .menu:');
menuDiv.childNodes.forEach(node => {
    if (node.nodeType === Node.ELEMENT_NODE) {
        console.log(node);
    }
});
//Node.ELEMENT_NODE constant is used to compare with the nodeType to ensure that only HTML elements are logged.
//childNodes property to access the child nodes of each selected element.

console.log('Child elements of header:');
headerElement.childNodes.forEach(node => {
    if (node.nodeType === Node.ELEMENT_NODE) {
        console.log(node);
    }
});

console.log('Child elements of footer:');
footerElement.childNodes.forEach(node => {
    if (node.nodeType === Node.ELEMENT_NODE) {
        console.log(node);
    }
});

const containerDiv = document.createElement('div');
containerDiv.className = 'container';

const paragraph = document.createElement('p');
paragraph.textContent = 'Hello, World!';
//appending the new element as a child to an existing element to insert it it into the DOM tree.
containerDiv.appendChild(paragraph);
document.body.appendChild(containerDiv);


containerDiv.style.backgroundColor = "blue";
paragraph.style.color = "white";
paragraph.style.fontSize = "24px";
paragraph.style.fontFamily = "Helvetica, sans-serif";
paragraph.style.border = "1px solid black";
containerDiv.style.padding = "20px";
let headingTags = document.querySelectorAll ('h1,h3');
for (let i=0; i<headingTags.length; i++) {
    headingTags[i].style.fontStyle = 'italic';
}

//step2

//const btn = document.createElement('button');
//btn.textContent = 'Click me!';
//btn.style.height = "50px";
//btn.style.width = "50%";
//document.body.appendChild(btn);
const btn = document.getElementById('btn');
btn.addEventListener('mouseover',  () => {
    btn.style.backgroundColor = 'red';
    btn.style.color = 'white';
  });
  btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = '';
    btn.style.color = '';
  });

  let buttonContainer = document.getElementById('buttonContainer');
  buttonContainer.addEventListener('click', function(event) {
    let clickedElement = event.target;
    if (clickedElement.tagName === 'BUTTON') {
      console.log('Clicked button text:', clickedElement.textContent);
    }
  });


  let form = document.getElementById('Form');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      let nameInput = document.getElementById('name');
      let emailInput = document.getElementById('email');

      let name = nameInput.value;
      let email = emailInput.value;

      console.log('Submitted data:');
      console.log('Name:', name);
      console.log('Email:', email);
    });


    //step 3
    
    const originalDiv = document.getElementById('original');
    const cloneButton = document.getElementById('clone-btn');
    
    const clonedDiv = originalDiv.cloneNode(true);
    const originalH1 = document.querySelector('h1');
    originalH1.textContent = 'Cloned';
    document.body.appendChild(clonedDiv);
    
    function toggleClonedDiv() {
        if (clonedDiv.style.display === 'none') {
            clonedDiv.style.display = 'block';
        } else {
            clonedDiv.style.display = 'none';
        }
    }
    
    cloneButton.addEventListener('click', toggleClonedDiv);
  

   
    