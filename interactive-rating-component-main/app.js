const ratings = document.querySelectorAll('.ratingsNumber');
const submitb = document.querySelector('.go');
const result = document.querySelector('.result');
const ratingCard = document.querySelector('.ratingCard')
const choose = document.querySelector('.rting')

ratings.forEach(function(rating) {
  rating.addEventListener('click', function(event) {
    const isActive = this.classList.contains('actived');

    ratings.forEach(function(element) {
      element.classList.remove('actived');
    });

    if (!isActive) {
      this.classList.add('actived');
      submitb.disabled = false;
      choose.textContent = ' ' + this.textContent + ' ';
    }



  });
});
submitb.addEventListener('click', function() {
  result.style.display = 'flex';
  ratingCard.style.display = 'none';

});
