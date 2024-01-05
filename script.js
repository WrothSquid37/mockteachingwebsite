var email1 = document.getElementById('email1');
var email2 = document.getElementById('email2');
var email3 = document.getElementById('email1');
var email4 = document.getElementById('email2');

email1.style.display = 'none';
email2.style.display = 'none';
email3.style.display = 'none';
email4.style.display = 'none';

function displayEmail(int index) {
    hideAllEmails();
    switch(index) {
      case 0:
        email1.style.display = 'block';
      break;
      case 1:
        email2.style.display = 'block';
      break;
      case 2:
        email3.style.display = 'block';
      break;
      case 3:
        email4.style.display = 'block';
      break;
      default:
        console.log("Error invalid index");
    }
}

function hideAllEmails() {
    email1.style.display = 'none';
    email2.style.display = 'none';
    email3.style.display = 'none';
    email4.style.display = 'none';
}
