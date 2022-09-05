const jumpButton = document.getElementById("jump-button")
const searchField = document.getElementById('search-field')


const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

jumpButton.addEventListener("click", scrollToTop)

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    jumpButton.classList.remove('hidden')
  } else {
    jumpButton.classList.add('hidden')
  }
});


const baseURL = 'https://prod.only.com/da-dk/search?useNewIndex=true&q='

const produktListe = ["jakker", "overgangsjakker", "trenchcoats", "shackets", "læder og læderlook jakker", "denimjakker", "regnjakker", "veste", "jeans", "skinny jeans", "flared jeans", "straight jeans", "wide jeans", "high waist jeans", "normal waist jeans", "low waist jeans", "ripped jeans", "kjoler", "midikjoler", "maxikjoler", "slå-om-kjoler", "denimkjoler", "skjortekjoler", "sweatkjoler", "cardigans", "striktrøjer", "toppe", "armløse", "kortærmede trøjer", "tshirts", "langærmede trøjer", "printede toppe", "bodystockings", "crop-top", "crop-toppe", "bukser", "klassiske bukser", "leggings", "sweatpants", "poptrash", "bukser med vidde", "skjorter", "denimskjorter", "skjorter med detaljer", "blazere", "sweatshirts", "crewnecks", "hoodies", "hættetrøjer", "nederdele", "midinederdele", "lange nederdele", "lædernederdele", "denimnederdele", "jumpsuits", "shorts", "denimshorts", "bikeshorts", "højtaljede shorts", "sweatshorts", "accessories", "tasker", "bælter", "solbriller", "sko", "støvler", "sneakers", "høje hæle", "sandaler", "lingeri", "nattøj", "badetøj", "loungewear"]

const searchDropdown = document.getElementById('search-dropdown')
const hiddenDropdown = document.querySelector('.search-item.hidden')
let produkter = [];

searchField.addEventListener('focusout', () => {
  setTimeout(() => {
    searchDropdown.classList.add('hidden')
  }, 150)
})

searchField.addEventListener('focus', () => {
  if (produkter.length > 0) {
    searchDropdown.classList.remove('hidden')
  }
})

searchField.addEventListener('keyup', (event) => {
  searchDropdown.innerHTML = ''
  produkter = []
  const searchTerm = searchField.value;

  produktListe.forEach((product) => {
    if (product.substring(0, searchTerm.length) == searchTerm) {
      produkter.push(product)
    }
  })

  if (produkter.length == 0) {
    searchDropdown.classList.add('hidden')
  } else {
    searchDropdown.classList.remove('hidden')
  }

  produkter.forEach((product) => {
    let element = hiddenDropdown.cloneNode(true)
    element.querySelector('.search-item-text').innerText = product
    element.querySelector('.hidden').classList.remove('hidden')

    element.addEventListener('click', () => {
      window.open(baseURL + product, '_blank').focus();
    })

    element.classList.remove('hidden');
    searchDropdown.append(element)
  })

  if (event.key == 'Enter') {
    window.open(baseURL + searchTerm, '_blank').focus()
  }
})



// let slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
// 
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
