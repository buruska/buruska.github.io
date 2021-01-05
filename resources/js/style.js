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
  {name: 'Nagyvárad', id: 004, link: '<a href="#nagyvarad02">2. Kanonok-sor</a>'},
  {name: 'Kanonok-sor', id: 0041, link: '<a href="#nagyvarad02">2. Kanonok-sor</a>'},
  {name: 'Nagyvárad', id: 005, link: '<a href="#nagyvarad03">3. Római katolikus székesegyház</a>'},
  {name: 'Római katolikus székesegyház', id: 0051, link: '<a href="#nagyvarad03">3. Római katolikus székesegyház</a>'},
  {name: 'Nagyvárad', id: 006, link: '<a href="#nagyvarad04">4. I. László királybronzszobra</a>'},
  {name: 'I. László királybronzszobra', id: 0061, link: '<a href="#nagyvarad04">4. I. László királybronzszobra</a>'},
  {name: 'Nagyvárad', id: 007, link: '<a href="#nagyvarad05">5. Nagyváradi római katolikus püspöki palota</a>'},
  {name: 'Nagyvárad', id: 008, link: '<a href="#nagyvarad06">6. Várad-olaszi Szentlélek kiáradása plébániatemplom</a>'},
  {name: 'Várad-olaszi Szentlélek kiáradása plébániatemplom', id: 0081, link: '<a href="#nagyvarad06">6. Várad-olaszi Szentlélek kiáradása plébániatemplom</a>'},
  {name: 'Nagyvárad', id: 009, link: '<a href="#nagyvarad07">7. Ady Endre-emlékmúzeum</a>'},
  {name: 'Ady Endre-emlékmúzeum', id: 0091, link: '<a href="#nagyvarad07">7. Ady Endre-emlékmúzeum</a>'},
  {name: 'Nagyvárad', id: 010, link: '<a href="#nagyvarad08">8. Szent György görög katolikus templom</a>'},
  {name: 'Szent György görög katolikus templom', id: 0101, link: '<a href="#nagyvarad08">8. Szent György görög katolikus templom</a>'},
  {name: 'Nagyvárad', id: 011, link: '<a href="#nagyvarad09">9. Olaszi református templom</a>'},
  {name: 'Olaszi református templom', id: 0111, link: '<a href="#nagyvarad09">9. Olaszi református templom</a>'},
  {name: 'Nagyvárad', id: 012, link: '<a href="#nagyvarad10">10. Iosif Vulcan Emlékmúzeum</a>'},
  {name: 'Iosif Vulcan Emlékmúzeum', id: 0121, link: '<a href="#nagyvarad10">10. Iosif Vulcan Emlékmúzeum</a>'},
  {name: 'Nagyvárad', id: 013, link: '<a href="#nagyvarad11">11. Szacsvay Imre szobra</a>'},
  {name: 'Szacsvay Imre szobra', id: 0131, link: '<a href="#nagyvarad11">11. Szacsvay Imre szobra</a>'},
  {name: 'Nagyvárad', id: 014, link: '<a href="#nagyvarad12">12. Nagysándor József szülőháza</a>'},
  {name: 'Nagysándor József szülőháza', id: 0141, link: '<a href="#nagyvarad12">12. Nagysándor József szülőháza</a>'},
  {name: 'Nagyvárad', id: 015, link: '<a href="#nagyvarad13">13. Szigligeti Színház</a>'},
  {name: 'Szigligeti Színház', id: 0151, link: '<a href="#nagyvarad13">13. Szigligeti Színház</a>'},
  {name: 'Nagyvárad', id: 016, link: '<a href="#nagyvarad14">14. Orsolya-rendi kolostor</a>'},
  {name: 'Orsolya-rendi kolostor', id: 0161, link: '<a href="#nagyvarad14">14. Orsolya-rendi kolostor</a>'},
  {name: 'Nagyvárad', id: 017, link: '<a href="#nagyvarad15">15. Szent László római katolikus templom</a>'},
  {name: 'Szent László római katolikus templom', id: 0171, link: '<a href="#nagyvarad15">15. Szent László római katolikus templom</a>'},
  {name: 'Nagyvárad', id: 018, link: '<a href="#nagyvarad16">16. Városháza</a>'},
  {name: 'Városháza', id: 0181, link: '<a href="#nagyvarad16">16. Városháza</a>'},
  {name: 'Nagyvárad', id: 019, link: '<a href="#nagyvarad17">17. Görögkatolikus püspöki palota</a>'},
  {name: 'Görögkatolikus püspöki palota', id: 0191, link: '<a href="#nagyvarad17">17. Görögkatolikus püspöki palota</a>'},
  {name: 'Nagyvárad', id: 020, link: '<a href="#nagyvarad18">18. Szent Miklós görög katolikus püspöki székesegyház</a>'},
  {name: 'Szent Miklós görög katolikus püspöki székesegyház', id: 0201, link: '<a href="#nagyvarad18">18. Szent Miklós görög katolikus püspöki székesegyház</a>'},
  {name: 'Nagyvárad', id: 021, link: '<a href="#nagyvarad19">19. „Mária elszenderedése” ortodox templom/„Holdas templom”</a>'},
  {name: 'Mária elszenderedése ortodox templom/„Holdas templom”', id: 0211, link: '<a href="#nagyvarad19">19. „Mária elszenderedése” ortodox templom/„Holdas templom”</a>'},
  {name: 'Nagyvárad', id: 022, link: '<a href="#nagyvarad20">20. Fekete Sas-palota</a>'},
  {name: 'Fekete Sas-palota', id: 0221, link: '<a href="#nagyvarad20">20. Fekete Sas-palota</a>'},
  {name: 'Nagyvárad', id: 023, link: '<a href="#nagyvarad21">21. Nagyváradi evangélikus templom</a>'},
  {name: 'Nagyvárad', id: 024, link: '<a href="#nagyvarad22">22. Újvárosi református templom</a>'},
  {name: 'Újvárosi református templom', id: 0241, link: '<a href="#nagyvarad22">22. Újvárosi református templom</a>'},
  {name: 'Nagyvárad', id: 025, link: '<a href="#nagyvarad23">23. Neológ zsinagóga/Cion-templom</a>'},
  {name: 'Neológ zsinagóga/Cion-templom', id: 0251, link: '<a href="#nagyvarad23">23. Neológ zsinagóga/Cion-templom</a>'},
  {name: 'Nagyvárad', id: 026, link: '<a href="#nagyvarad24">24. Szakszervezetek Művelődési Háza</a>'},
  {name: 'Szakszervezetek Művelődési Háza', id: 0261, link: '<a href="#nagyvarad24">24. Szakszervezetek Művelődési Háza</a>'},
  {name: 'Nagyvárad', id: 027, link: '<a href="#nagyvarad25">25. Kapucinus templom</a>'},
  {name: 'Kapucinus templom', id: 0271, link: '<a href="#nagyvarad25">25. Kapucinus templom</a>'},
  {name: 'Nagyvárad', id: 028, link: '<a href="#nagyvarad26">26. Nagyváradi vár</a>'},
  {name: 'Nagyvárad', id: 029, link: '<a href="#nagyvarad27">27. Nicolae Bălcescu park</a>'},
  {name: 'Nicolae Bălcescu park', id: 0291, link: '<a href="#nagyvarad27">27. Nicolae Bălcescu park</a>'},
  {name: 'Nagyvárad', id: 030, link: '<a href="#nagyvarad28">28. Rulikowski temető</a>'},
  {name: 'Rulikowski temető', id: 0301, link: '<a href="#nagyvarad28">28. Rulikowski temető</a>'},
  {name: 'Nagyvárad', id: 031, link: '<a href="#nagyvarad29">1. A város és környékének panorámája</a>'},
  {name: 'Félixfürdő', id: 032, link: '<a href="#felixfurdo">2. Utazás Félix- és Püspök fürdőre (Május 1. fürdő)</a>'},
  {name: 'Püspökfürdő', id: 0321, link: '<a href="#felixfurdo">2. Utazás Félix- és Püspök fürdőre (Május 1. fürdő)</a>'},
  {name: 'Fekete-Körös völgye', id: 033, link: '<a href="#feketekoros">3. Utazás a Fekete-Körös völgyébe</a>'},
  {name: 'Belényes', id: 034, link: '<a href="#belenyes">4. Belényes (Beiuș)</a>'},

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
      if(suggested.id === 003) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad01');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 004) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad02');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0041) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad02');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 005) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad03');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0051) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad03');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 006) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad04');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0061) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad04');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 007) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad05');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 008) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad06');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0081) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad06');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 009) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad07');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0091) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad07');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 010) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad08');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0101) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad07');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 011) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad09');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0111) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad09');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 012) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad10');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0121) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad10');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 013) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad11');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0131) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad11');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 014) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad12');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0141) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad12');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 015) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad13');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0151) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad13');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 016) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad14');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0161) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad14');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 017) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad15');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0171) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad15');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 018) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad16');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0181) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad16');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 019) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad17');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0191) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad17');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 020) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad18');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0201) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad18');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 021) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad19');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0211) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad19');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 022) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad20');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0221) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad20');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 023) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad21');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 024) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad22');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0241) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad22');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 025) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad23');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0251) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad23');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 026) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad24');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0261) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad24');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 027) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad25');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0271) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad25');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 028) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad26');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 029) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad27');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0291) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad27');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 030) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad028');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0301) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad0');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad28');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 031) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad1');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('nagyvarad29');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 032) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad1');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('felixfurdo');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 0321) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad1');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('felixfurdo');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 033) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad1');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('feketekoros');
        latnivalo.classList.toggle('latnivalok-button--active');
      }
      if(suggested.id === 034) {
        var utvonal = document.getElementById("nagyvaradbrasso");
        utvonal.classList.toggle('utvonalak-button--active');
        var varos = document.getElementById("nagyvarad");
        varos.classList.toggle('telepulesek-button--active');
        var turisztika = document.getElementById('nagyvarad1');
        turisztika.classList.toggle('turisztika-button--active');
        var latnivalo = document.getElementById('belenyes');
        latnivalo.classList.toggle('latnivalok-button--active');
      }

    });
  });

  if (input === '') {
    suggestionsPanel.innerHTML = '';
  }
})
