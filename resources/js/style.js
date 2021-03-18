$(document).ready(function() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      let adatok = [];

      data.record.forEach(element => {
        let adat = {};
        adat.id = element.id;
        adat.kod = element.kod;
        if(element.szerzo != undefined) {
          adat.szerzo = element.szerzo.trim();
        } else {
          adat.szerzo = '';
        }
        if(element.cim != undefined) {
          adat.cim = element.cim;
        } else {
          adat.cim = '';
        }
        if(element.rovat != undefined) {
          adat.rovat = element.rovat.trim();
        } else {
          adat.rovat = '';
        }
        if(element.mufaj != undefined) {
          adat.mufaj = element.mufaj.trim();
        } else {
          adat.mufaj = '';
        }
        if(element.oldalszam != undefined) {
          adat.oldalszam = element.oldalszam;
        } else {
          adat.oldalszam = '';
        }
        if(element.muvek != undefined) {
          adat.muvek = element.muvek.trim();
        } else {
          adat.muvek = '';
        }
        if(element.megjegyzes != undefined) {
          adat.megjegyzes = element.megjegyzes;
        } else {
          adat.megjegyzes = '';
        }
        if(element.teljesadatok != undefined) {
          adat.teljesadatok = element.teljesadatok.trim();
        } else {
          adat.teljesadatok = '';
        }
        //document.write(adat.id + ' ' + adat.kod + ' <strong>' + adat.szerzo + ': ' + adat.cim + '</strong> ' + adat.rovat + ' ' + adat.mufaj + ' ' + adat.oldalszam + ' ' + adat.muvek + ' ' + adat.megjegyzes + ' ' + adat.teljesadatok + '<br>');
        adatok.push(adat);

        let kiirni = '<strong>';

        if (adat.szerzo !== '') {
          kiirni += adat.szerzo + ': ';
        }

        kiirni += adat.cim + '. </strong>';

        kiirni += adat.teljesadatok + ', ';

        kiirni += adat.oldalszam + '. oldal, ';

        if (adat.rovat !== '') {
          kiirni += adat.rovat + ', ';
        }



        kiirni += adat.mufaj;



        if (adat.muvek !== '') {
          kiirni += '<br>-' + adat.muvek + '. ';
        }

        if(adat.megjegyzes !== '') {
          kiirni += ', ' + adat.megjegyzes  + ' ';
        }

        //kiirni += adat.teljesadatok;

        adat.kiirni = kiirni;

        //document.write(adat.kiirni + '<br>');

      });
      for(let i = 0; i < adatok.length; i++) {
        //document.write(adatok[i].kiirni + '<br>');
        let div = document.getElementsByClassName('content'),
            p = document.createElement("p");
        p.innerHTML = adatok[i].kiirni + '<br>';
        div[0].append(p);
      }

    })


});
