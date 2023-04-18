// Nama
let user = prompt('Siapa namamu?')

if (user != '') document.getElementById('name-header').innerText = user
else user = 'Internet'

// Slideshow image
let slideIndex = 1

showDivs(slideIndex)

function showDivs(n) {
  let i
  const imgList = document.getElementsByClassName('img-slideshow')

  if (n > imgList.length) slideIndex = 1
  else if (n < 1) slideIndex = imgList.length

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = 'none'
  }

  imgList[slideIndex - 1].style.display = 'block'
}

function plusDivs(n) {
  showDivs(slideIndex += n)
}

setInterval(() => {
  plusDivs(1)
}, 3000)

// Validasi form
function validateForm() {
  const name = document.forms['message-form']['full-name'].value
  const date = document.forms['message-form']['birth-date'].value
  const gender = document.forms['message-form']['gender'].value
  const messages = document.forms['message-form']['messages'].value

  if (name == '' || date == '' || gender == '' || messages == '') {
    alert('Input tidak boleh kosong')
    return false
  }

  document.getElementById('sender-full-name').innerText = name;
  document.getElementById('sender-birth-date').innerText = date;
  document.getElementById('sender-gender').innerText = gender;
  document.getElementById('sender-messages').innerText = messages;
  return false;
}
