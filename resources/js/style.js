$(document).ready(function() {

  const dataList = document.getElementById('dataList');
  const searchBar = document.getElementById('searchBar');
  let ujEletDatas = [];

//Szukites év szerint

  const ev1958 = document.getElementById('ev1958');
  const ev1959 = document.getElementById('ev1959');
  const ev1960 = document.getElementById('ev1960');
  const ev1961 = document.getElementById('ev1961');
  const ev1962 = document.getElementById('ev1962');
  const ev1963 = document.getElementById('ev1963');
  const ev1964 = document.getElementById('ev1964');
  const ev1965 = document.getElementById('ev1965');
  const ev1966 = document.getElementById('ev1966');
  const ev1967 = document.getElementById('ev1967');
  const ev1968 = document.getElementById('ev1968');
  const ev1969 = document.getElementById('ev1969');

  ev1958.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.includes('1958.');
    });
    displayDatas(szukitettDatas);
  });
  ev1959.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.includes('1959.');
    });
    displayDatas(szukitettDatas);
  });
  ev1960.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.includes('1960.');
    });
    displayDatas(szukitettDatas);
  });
  ev1961.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.includes('1961.');
    });
    displayDatas(szukitettDatas);
  });
  ev1962.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.includes('1962.');
    });
    displayDatas(szukitettDatas);
  });
  ev1963.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.includes('1963.');
    });
    displayDatas(szukitettDatas);
  });
  ev1964.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.includes('1964.');
    });
    displayDatas(szukitettDatas);
  });
  ev1965.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.includes('1965.');
    });
    displayDatas(szukitettDatas);
  });
  ev1966.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.includes('1966.');
    });
    displayDatas(szukitettDatas);
  });
  ev1967.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.includes('1967.');
    });
    displayDatas(szukitettDatas);
  });
  ev1968.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.includes('1968.');
    });
    displayDatas(szukitettDatas);
  });
  ev1969.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.includes('1969.');
    });
    displayDatas(szukitettDatas);
  });

//Szukites szerzo szerint

  const szerzoA = document.getElementById('szerzoA');
  const szerzoAA = document.getElementById('szerzoAA');
  const szerzoB = document.getElementById('szerzoB');
  const szerzoC = document.getElementById('szerzoC');
  const szerzoD = document.getElementById('szerzoD');
  const szerzoE = document.getElementById('szerzoE');
  const szerzoEE = document.getElementById('szerzoEE');
  const szerzoF = document.getElementById('szerzoF');
  const szerzoG = document.getElementById('szerzoG');
  const szerzoH = document.getElementById('szerzoH');
  const szerzoI = document.getElementById('szerzoI');
  const szerzoII = document.getElementById('szerzoII');
  const szerzoJ = document.getElementById('szerzoJ');
  const szerzoK = document.getElementById('szerzoK');
  const szerzoL = document.getElementById('szerzoL');
  const szerzoM = document.getElementById('szerzoM');
  const szerzoN = document.getElementById('szerzoN');
  const szerzoO = document.getElementById('szerzoO');
  const szerzoOO = document.getElementById('szerzoOO');
  const szerzoOOO = document.getElementById('szerzoOOO');
  const szerzoOOOO = document.getElementById('szerzoOOOO');
  const szerzoP = document.getElementById('szerzoP');
  const szerzoQ = document.getElementById('szerzoQ');
  const szerzoR = document.getElementById('szerzoR');
  const szerzoS = document.getElementById('szerzoS');
  const szerzoT = document.getElementById('szerzoT');
  const szerzoU = document.getElementById('szerzoU');
  const szerzoUU = document.getElementById('szerzoUU');
  const szerzoUUU = document.getElementById('szerzoUUU');
  const szerzoUUUU = document.getElementById('szerzoUUUU');
  const szerzoV = document.getElementById('szerzoV');
  const szerzoW = document.getElementById('szerzoW');
  const szerzoZ = document.getElementById('szerzoZ');
  const szerzoIsmeretlen = document.getElementById('szerzoIsmeretlen');

  szerzoA.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.includes('UE02223') + data.kiirni.includes('UE03088')
       + data.kiirni.includes('UE00667') + data.kiirni.includes('UE04759')
       + data.kiirni.includes('UE04762') + data.kiirni.includes('UE03728')
       + data.kiirni.includes('UE00622') + data.kiirni.includes('UE02348')
       + data.kiirni.includes('UE00345') + data.kiirni.includes('UE03568')
       + data.kiirni.includes('UE00467') + data.kiirni.includes('UE00595')
       + data.kiirni.includes('UE00851') + data.kiirni.includes('UE01181')
       + data.kiirni.includes('UE01558') + data.kiirni.includes('UE01685')
       + data.kiirni.includes('UE01724') + data.kiirni.includes('UE01798')
       + data.kiirni.includes('UE01866') + data.kiirni.includes('UE01927')
       + data.kiirni.includes('UE01964') + data.kiirni.includes('UE02026')
       + data.kiirni.includes('UE02214') + data.kiirni.includes('UE02225')
       + data.kiirni.includes('UE02819') + data.kiirni.includes('UE02820')
       + data.kiirni.includes('UE03478') + data.kiirni.includes('UE04408')
       + data.kiirni.includes('UE04544') + data.kiirni.includes('UE04560')
       + data.kiirni.includes('UE00198') + data.kiirni.includes('UE01555')
       + data.kiirni.includes('UE01897') + data.kiirni.includes('UE03081')
       + data.kiirni.includes('UE07527') + data.kiirni.includes('UE07785')
       + data.kiirni.includes('UE00100') + data.kiirni.includes('UE00450')
       + data.kiirni.includes('UE02529') + data.kiirni.includes('UE04331')
       + data.kiirni.includes('UE02812') + data.kiirni.includes('UE04883')
       + data.kiirni.includes('UE04962') + data.kiirni.includes('UE01131')
       + data.kiirni.includes('UE01410') + data.kiirni.includes('UE03091')
       + data.kiirni.includes('UE04230') + data.kiirni.includes('UE02052')
       + data.kiirni.includes('UE04869') + data.kiirni.includes('UE05425')
       + data.kiirni.includes('UE02813') + data.kiirni.includes('UE02297')
       + data.kiirni.includes('UE02332') + data.kiirni.includes('UE02364')
       + data.kiirni.includes('UE00349') + data.kiirni.includes('UE05920')
       + data.kiirni.includes('UE03266') + data.kiirni.includes('UE04657')
       + data.kiirni.includes('UE05184') + data.kiirni.includes('UE05718')
       + data.kiirni.includes('UE05775') + data.kiirni.includes('UE05776')
       + data.kiirni.includes('UE06169') + data.kiirni.includes('UE07002')
       + data.kiirni.includes('UE07105') + data.kiirni.includes('UE07748')
       + data.kiirni.includes('UE05515') + data.kiirni.includes('UE06837')
       + data.kiirni.includes('UE07670') + data.kiirni.includes('UE07725')
       + data.kiirni.includes('UE07795') + data.kiirni.includes('UE07969')
       + data.kiirni.includes('UE07955') + data.kiirni.includes('UE00502')
       + data.kiirni.includes('UE06368') + data.kiirni.includes('UE05586')
       + data.kiirni.includes('UE05587') + data.kiirni.includes('UE00584')
       + data.kiirni.includes('UE07873') + data.kiirni.includes('UE07400')
       + data.kiirni.includes('UE07461') + data.kiirni.includes('UE08304')
       + data.kiirni.includes('UE00600') + data.kiirni.includes('UE05037')
       + data.kiirni.includes('UE06088') + data.kiirni.includes('UE02189')
       + data.kiirni.includes('UE02439') + data.kiirni.includes('UE02471')
       + data.kiirni.includes('UE03591') + data.kiirni.includes('UE04881')
       + data.kiirni.includes('UE04912') + data.kiirni.includes('UE06307')
       + data.kiirni.includes('UE06403') + data.kiirni.includes('UE01856')
       + data.kiirni.includes('UE03495') + data.kiirni.includes('UE04250')
       + data.kiirni.includes('UE03239') + data.kiirni.includes('UE03863')
       + data.kiirni.includes('UE08379') + data.kiirni.includes('UE00399')
       + data.kiirni.includes('UE00405') + data.kiirni.includes('UE00464')
       + data.kiirni.includes('UE00636') + data.kiirni.includes('UE00748')
       + data.kiirni.includes('UE00895') + data.kiirni.includes('UE01347')
       + data.kiirni.includes('UE01375') + data.kiirni.includes('UE01572')
       + data.kiirni.includes('UE01596') + data.kiirni.includes('UE01751')
       + data.kiirni.includes('UE01871') + data.kiirni.includes('UE01902')
       + data.kiirni.includes('UE02114') + data.kiirni.includes('UE02155')
       + data.kiirni.includes('UE02203') + data.kiirni.includes('UE02238')
       + data.kiirni.includes('UE02418') + data.kiirni.includes('UE02450')
       + data.kiirni.includes('UE02483') + data.kiirni.includes('UE02519')
       + data.kiirni.includes('UE03222') + data.kiirni.includes('UE03719')
       + data.kiirni.includes('UE03752') + data.kiirni.includes('UE03786')
       + data.kiirni.includes('UE03815') + data.kiirni.includes('UE03847')
       + data.kiirni.includes('UE03887') + data.kiirni.includes('UE03918')
       + data.kiirni.includes('UE03950') + data.kiirni.includes('UE03994')
       + data.kiirni.includes('UE04028') + data.kiirni.includes('UE04068')
       + data.kiirni.includes('UE04107') + data.kiirni.includes('UE01121')
       + data.kiirni.includes('UE04852') + data.kiirni.includes('UE05655')
       + data.kiirni.includes('UE00333') + data.kiirni.includes('UE02285')
       + data.kiirni.includes('UE03018') + data.kiirni.includes('UE03097')
       + data.kiirni.includes('UE03252') + data.kiirni.includes('UE03303')
       + data.kiirni.includes('UE03614');
    });
    displayDatas(szukitettDatas);
  });
  szerzoAA.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.includes('UE00806') + data.kiirni.includes('UE06838')
       + data.kiirni.includes('UE06371') + data.kiirni.includes('UE01157')
       + data.kiirni.includes('UE01309') + data.kiirni.includes('UE01267')
       + data.kiirni.includes('UE02422') + data.kiirni.includes('UE03305')
       + data.kiirni.includes('UE08048') + data.kiirni.includes('UE08119')
       + data.kiirni.includes('UE08152') + data.kiirni.includes('UE08344')
       + data.kiirni.includes('UE07474');
    });
    displayDatas(szukitettDatas);
  });
  szerzoB.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>b');
    });
    displayDatas(szukitettDatas);
  });
  szerzoC.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>c');
    });
    displayDatas(szukitettDatas);
  });
  szerzoD.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>d');
    });
    displayDatas(szukitettDatas);
  });
  szerzoE.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>e');
    });
    displayDatas(szukitettDatas);
  });
  szerzoEE.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>é');
    });
    displayDatas(szukitettDatas);
  });
  szerzoF.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>f');
    });
    displayDatas(szukitettDatas);
  });
  szerzoG.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>g');
    });
    displayDatas(szukitettDatas);
  });
  szerzoH.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>h');
    });
    displayDatas(szukitettDatas);
  });
  szerzoI.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>i');
    });
    displayDatas(szukitettDatas);
  });
  szerzoII.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>í');
    });
    displayDatas(szukitettDatas);
  });
  szerzoJ.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>j');
    });
    displayDatas(szukitettDatas);
  });
  szerzoK.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>k');
    });
    displayDatas(szukitettDatas);
  });
  szerzoL.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>l');
    });
    displayDatas(szukitettDatas);
  });
  szerzoM.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>m');
    });
    displayDatas(szukitettDatas);
  });
  szerzoN.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>n');
    });
    displayDatas(szukitettDatas);
  });
  szerzoO.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>o');
    });
    displayDatas(szukitettDatas);
  });
  szerzoOO.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>ó');
    });
    displayDatas(szukitettDatas);
  });
  szerzoOOO.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>ö');
    });
    displayDatas(szukitettDatas);
  });
  szerzoOOOO.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>ő');
    });
    displayDatas(szukitettDatas);
  });
  szerzoP.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>p');
    });
    displayDatas(szukitettDatas);
  });
  szerzoQ.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>q');
    });
    displayDatas(szukitettDatas);
  });
  szerzoR.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>r');
    });
    displayDatas(szukitettDatas);
  });
  szerzoS.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>s');
    });
    displayDatas(szukitettDatas);
  });
  szerzoT.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>t');
    });
    displayDatas(szukitettDatas);
  });
  szerzoU.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>u');
    });
    displayDatas(szukitettDatas);
  });
  szerzoUU.addEventListener('click', (e) => {
      const szukitettDatas = ujEletDatas.filter( data => {
        return data.kiirni.toLowerCase().includes('<strong>ú');
      });
      displayDatas(szukitettDatas);
    });  szerzoUUU.addEventListener('click', (e) => {
        const szukitettDatas = ujEletDatas.filter( data => {
          return data.kiirni.toLowerCase().includes('<strong>ü');
        });
        displayDatas(szukitettDatas);
      });
  szerzoUUUU.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>ű');
    });
    displayDatas(szukitettDatas);
  });
  szerzoV.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>v');
    });
    displayDatas(szukitettDatas);
  });
  szerzoW.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>w');
    });
    displayDatas(szukitettDatas);
  });
  szerzoZ.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>z');
    });
    displayDatas(szukitettDatas);
  });
  szerzoIsmeretlen.addEventListener('click', (e) => {
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes('<strong>***');
    });
    displayDatas(szukitettDatas);
  });


  searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes(searchString);
    });
    displayDatas(szukitettDatas);
  });

  const loadDatas = async () => {
      try {
          const res = await fetch('data.json');
          ujEletDatas = await res.json();
          displayDatas(ujEletDatas);
      } catch (err) {
          console.error(err);
      }
  };

  const displayDatas = (datas) => {
      const htmlString = datas
          .map((data) => {

            data.kiirni = '<strong>';

            if(data.szerzo != undefined) {
              data.kiirni += data.szerzo.trim();
            }

            if(data.cim != undefined) {
              data.kiirni += ': ' + data.cim + '</strong> ';
            }

            if(data.teljesadatok != undefined) {
              data.kiirni += data.teljesadatok.trim() + ', ';
            }

            if(data.oldalszam != undefined) {
              data.kiirni += data.oldalszam + '. oldal, ';
            }

            if((data.rovat != undefined) && (data.rovat != '')) {
              data.kiirni += data.rovat + ', ';
            }

            if(data.mufaj != undefined) {
              data.kiirni += data.mufaj;
            }

            if((data.muvek != undefined) && (data.muvek != '')) {
              data.kiirni += '<br>- ' + data.muvek + '. ';
            }
            if((data.megjegyzes != undefined) && (data.megjegyzes != '')) {
              data.kiirni += ', ' + data.megjegyzes;
            }

            data.kiirni += '<!--' + data.kod + '-->';


              return `
              <li class="data" id=${data.kod}>
                  <p>${data.kiirni}</p>
              </li>
          `;
          })
          .join('');
      dataList.innerHTML = htmlString;
  };

  loadDatas();

/*  fetch('data.json')
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
          kiirni += '<br>- ' + adat.muvek + '. ';
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

    })*/


});
