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
