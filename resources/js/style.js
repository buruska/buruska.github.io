$(document).ready(function() {

  const dataList = document.getElementById('dataList');
  let ujEletDatas = [];
  let szerzomutatoDatas = [];

  const loadDatas = async () => {
      try {
          const res = await fetch('data.json');
          ujEletDatas = await res.json();
          displayDatas(ujEletDatas);
      } catch (err) {
          console.error(err);
      }

      try {
          const res1 = await fetch('szerzomutato.json');
          szerzomutatoDatas = await res1.json();
          //displaySzerzoDatas(szerzomutatoDatas);
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

  const displaySzerzoDatas = (datas) => {
      const htmlString = datas
          .map((data) => {

            data.kiirni = data.szerzoMutato;

            return `
            <li class="data" id=${data.kod}>
                <p>${data.kiirni}</p>
            </li>
        `;
        })
        .join('');
    dataList.innerHTML = htmlString;
};

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

  //Szukites szerzok szerint
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
  const szerzoAll = document.getElementById('szerzoAll');

  szerzoAll.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato;
    });
    displaySzerzoDatas(szukitettDatas);
  });

  szerzoA.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('a');
    });
    displaySzerzoDatas(szukitettDatas);
  });

  szerzoAA.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('á');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoB.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('b');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoC.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('c');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoD.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('d');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoE.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('e');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoEE.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('é');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoF.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('f');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoG.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('g');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoH.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('h');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoI.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('i');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoII.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('í');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoJ.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('j');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoK.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('k');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoL.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('l');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoM.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('m');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoN.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('n');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoO.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('o');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoOO.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('ó');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoOOO.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('ö');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoOOOO.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('ő');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoP.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('p');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoQ.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('q');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoR.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('r');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoS.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('s');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoT.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('t');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoU.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('u');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoUU.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('ú');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoUUU.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('ü');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoUUUU.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('ű');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoV.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('v');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoW.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('w');
    });
    displaySzerzoDatas(szukitettDatas);
  });
  szerzoZ.addEventListener('click', (e) => {
    const szukitettDatas = szerzomutatoDatas.filter( data => {
      return data.szerzoMutato.toLowerCase().startsWith('z');
    });
    displaySzerzoDatas(szukitettDatas);
  });



  //Kereses

  const searchBar = document.getElementById('searchBar');
  searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const szukitettDatas = ujEletDatas.filter( data => {
      return data.kiirni.toLowerCase().includes(searchString);
    });
    displayDatas(szukitettDatas);
  });


  loadDatas();

});
