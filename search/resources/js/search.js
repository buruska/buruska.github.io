//alert('0');

const countries = [
  {name: 'USA', link: '<a href="https://www.facebook.com/" target="_blank">USA</a>'},
  {name: 'India', link: '<a href="https://www.facebook.com/" target="_blank">India</a>'},
  {name: 'Argentina', link: '<a href="https://www.facebook.com/" target="_blank">Argentina</a>'},
  {name: 'Armenia', link: '<a href="https://www.facebook.com/" target="_blank">Armenia</a>'}
];

const searchInput = document.querySelector('.search-input');
const suggestionsPanel = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', function() {
  suggestionsPanel.innerHTML = '';
  const input = searchInput.value.toLowerCase();
  const suggestions = countries.filter(function(country) {
    return country.name.toLowerCase().startsWith(input);
  });
  suggestions.forEach(function(suggested) {
    const div = document.createElement('div');
    div.innerHTML = suggested.link;
    suggestionsPanel.appendChild(div);
  });
  if (input === '') {
    suggestionsPanel.innerHTML = '';
  }
})
