const main = document.querySelector('.main');

// creating header element
let header = document.createElement('div');
header.style.minHeight = '10vh'; // Örneğin, daha yüksek bir minHeight belirleyebilirsiniz
header.style.minWidth = '100vw';
header.style.background = 'rgba(0,0,0,0.5)';
header.style.position = 'Fixed';
header.style.zIndex = '1';
let logo = document.createElement('h2');
logo.textContent = 'MAK Travel';

logo.style.fontSize = '2rem';
logo.style.letterSpacing = '5px';
logo.style.marginLeft = '20px';
logo.style.color = 'white';
header.appendChild(logo);
main.appendChild(header);

// creating image section
let image = document.createElement('section'); // Section'dan div'e değiştirildi
image.style.position = 'absolute';
image.style.top = '0';
// image.style.zIndex = '-1';
image.style.width = '100vw';
image.style.height = '50vh';
image.style.background =
  "Linear-gradient(rgba(0,0,0,0.5),transparent),url('./image/image.jpg') no-repeat";
image.style.backgroundSize = 'cover';
image.style.backgroundPosition = 'top';
image.style.objectFit = 'cover';
image.style.objectPosition = 'center';
image.style.display = 'flex';
image.style.justifyContent = 'center';
image.style.alignItems = 'center';
image.style.cursor = 'pointer';
main.appendChild(image);

// creating slogan

let Slogan = document.createElement('h1');
Slogan.textContent = 'Explore your Nearest Forest with a single Reservation';
Slogan.style.fontSize = '3rem';
Slogan.style.color = 'white';
Slogan.style.letterSpacing = '2px';
Slogan.style.minWidth = '100vw';
Slogan.style.textAlign = 'center';
Slogan.style.textShadow = '5px 5px 5px black';
image.appendChild(Slogan);

// creating reservation button

let button = document.createElement('div');
button.textContent = 'Explore Now';
button.style.position = 'absolute';
button.style.top = '70%';
button.style.padding = '0.5rem 2rem';
button.style.color = 'white';
button.style.fontSize = '1.5rem';
button.style.border = '2px solid white';
button.style.cursor = 'pointer';
image.appendChild(button);

// creating reservation section

let sectionbooking = document.createElement('section');
sectionbooking.style.position = 'absolute';
sectionbooking.style.top = '50%';
sectionbooking.style.height = '40vh';
sectionbooking.style.minWidth = '100vw';
main.appendChild(sectionbooking);

// creating booking
let booking = document.createElement('div');
booking.style.height = '100%';
booking.style.width = '50%';
booking.style.margin = 'auto';
booking.style.display = 'flex';
booking.style.justifyContent = 'center';
sectionbooking.appendChild(booking);
// =================================>
let imagediv = document.createElement('div');
imagediv.style.width = '600px';
imagediv.style.borderRight = '1px solid rgba(0,0,0,0.2';
let imagebooking = document.createElement('img');
imagebooking.src = './image/img.jpg';
imagebooking.style.height = '100%';
imagebooking.style.padding = '0.5rem 0.5rem';
imagediv.appendChild(imagebooking);
booking.appendChild(imagediv);

// creating inputdiv

let inputdiv = document.createElement('div');
inputdiv.style.width = '600px';
inputdiv.style.padding = '0.5rem 2rem';
inputdiv.style.display = 'flex';
inputdiv.style.flexDirection = 'column';
inputdiv.style.justifyContent = 'center';
inputdiv.style.alignItems = 'center';
// ================================>
let inputInfos = ['Name', 'Surname', 'Phone', 'E-mail'];
for (let i = 1; i <= 4; i++) {
  let input = document.createElement('input');
  input.placeholder = inputInfos[i - 1];
  input.style.padding = '0.5rem';
  input.style.outline = 'none';
  input.style.border = '1px solid rgba(0,0,0,0.2)';
  input.style.fontSize = '1rem';
  input.style.marginTop = '20px';
  inputdiv.appendChild(input);
  booking.appendChild(inputdiv);
}
// ----------------------------->
let submitbutton = document.createElement('div');
submitbutton.textContent = 'SUBMIT';
submitbutton.style.padding = '0.5rem 5rem';
submitbutton.style.marginTop = '50px';
submitbutton.style.background = 'green';
submitbutton.style.color = 'white';
submitbutton.style.fontSize = '1.2rem';
submitbutton.style.letterSpacing = '5px';
submitbutton.style.cursor = 'pointer';
inputdiv.appendChild(submitbutton);
// creating contact section
let sectioncontact = document.createElement('section');
sectioncontact.style.position = 'absolute';
sectioncontact.style.minHeight = '50vh';
sectioncontact.style.minWidth = '50vw';
sectioncontact.style.left = '50%';
sectioncontact.style.transform = 'translateX(-50%)';
sectioncontact.style.top = '90%';
sectioncontact.style.marginTop = '20px';
sectioncontact.style.borderTop = '1px solid rgba(0,0,0,0.2)';
main.appendChild(sectioncontact);

let contact = document.createElement('div');
contact.style.position = 'absolute';
contact.style.minWidth = '50vh';
contact.style.minHeight = '100%';
contact.style.display = 'flex';
contact.style.flexDirection = 'column';
contact.style.textAlign = 'center';
contact.style.alignItems = 'center';
sectioncontact.appendChild(contact);

let contactheader = document.createElement('h1');
contactheader.style.letterSpacing = '5px';
contactheader.style.fontSize = '5rem';
contactheader.style.opacity = '0,4';
contactheader.textContent = 'CONTACT';
contact.appendChild(contactheader);

let addressparagraph = document.createElement('p');
addressparagraph.style.width = '25%';
addressparagraph.textContent = 'Sharifzade 104 kuc. No. 012-432-432 Baku';
contact.appendChild(addressparagraph);

let phoneparagraph = document.createElement('p');
phoneparagraph.style.width = '50%';
phoneparagraph.textContent = '  Phone (pbx):(055) 00 00';
contact.appendChild(phoneparagraph);

let emailparagraph = document.createElement('p');
emailparagraph.style.width = '50%';
emailparagraph.textContent = 'E-Mail: info@worldtravel.com';
contact.appendChild(emailparagraph);

document.querySelectorAll('p').forEach((item) => {
  item.style.marginTop = '10px';
});
