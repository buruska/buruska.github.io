document.querySelectorAll('.utvonalak-button').forEach(button => {
  button.addEventListener('click', () => {

    button.classList.toggle('utvonalak-button--active');

  });
});

document.querySelectorAll('.telepulesek-button').forEach(button => {
  button.addEventListener('click', () => {

    button.classList.toggle('telepulesek-button--active');

  });
});

document.querySelectorAll('.latnivalok-button').forEach(button => {
  button.addEventListener('click', () => {

    button.classList.toggle('latnivalok-button--active');

  });
});

document.querySelectorAll('.turisztika-button').forEach(button => {
  button.addEventListener('click', () => {

    button.classList.toggle('turisztika-button--active');

  });
});


const countries = [
  {name: 'Nagyvárad', id: 001, link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', id: 002,  link: '<a href="#nagyvaradturisztika">Nagyváradi turisztikai információs központ</a>'},
  {name: 'Nagyvárad', id: 003, link: '<a href="#nagyvarad01">1. Nagyváradi Városi Múzeum-Kulturális Komplexum</a>'},
  /*{name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'},
  {name: 'Nagyvárad', link: '<a href="#nagyvarad">Nagyvárad</a>'}*/
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
    div.addEventListener("click", function(){
      if(suggested.id === 001) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
      }
      if(suggested.id === 002) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvaradturisztika');
        turisztika.classList.toggle('turisztika-button--active');
      }
    });
  });

  if (input === '') {
    suggestionsPanel.innerHTML = '';
  }
})
