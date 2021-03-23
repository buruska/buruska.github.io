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
      return data.kiirni.includes('UE00528') + data.kiirni.includes('UE01076')
      + data.kiirni.includes('UE06751') + data.kiirni.includes('UE06907')
      + data.kiirni.includes('UE06972') + data.kiirni.includes('UE07606')
      + data.kiirni.includes('UE00308') + data.kiirni.includes('UE00309')
      + data.kiirni.includes('UE02388') + data.kiirni.includes('UE02827')
      + data.kiirni.includes('UE03030') + data.kiirni.includes('UE03486')
      + data.kiirni.includes('UE03574') + data.kiirni.includes('UE03638')
      + data.kiirni.includes('UE03756') + data.kiirni.includes('UE04696')
      + data.kiirni.includes('UE05539') + data.kiirni.includes('UE05709')
      + data.kiirni.includes('UE07144') + data.kiirni.includes('UE07458')
      + data.kiirni.includes('UE07900') + data.kiirni.includes('UE07961')
      + data.kiirni.includes('UE00615') + data.kiirni.includes('UE00479')
      + data.kiirni.includes('UE00678') + data.kiirni.includes('UE01694')
      + data.kiirni.includes('UE01963') + data.kiirni.includes('UE02207')
      + data.kiirni.includes('UE02240') + data.kiirni.includes('UE02280')
      + data.kiirni.includes('UE02346') + data.kiirni.includes('UE02353')
      + data.kiirni.includes('UE02382') + data.kiirni.includes('UE02524')
      + data.kiirni.includes('UE02703') + data.kiirni.includes('UE02876')
      + data.kiirni.includes('UE03031') + data.kiirni.includes('UE03685')
      + data.kiirni.includes('UE04102') + data.kiirni.includes('UE04362')
      + data.kiirni.includes('UE07967') + data.kiirni.includes('UE02552')
      + data.kiirni.includes('UE05249') + data.kiirni.includes('UE03341')
      + data.kiirni.includes('UE06225') + data.kiirni.includes('UE01371')
      + data.kiirni.includes('UE01254') + data.kiirni.includes('UE03572')
      + data.kiirni.includes('UE00282') + data.kiirni.includes('UE02612')
      + data.kiirni.includes('UE00120') + data.kiirni.includes('UE00630')
      + data.kiirni.includes('UE05438') + data.kiirni.includes('UE03008')
      + data.kiirni.includes('UE03729') + data.kiirni.includes('UE04918')
      + data.kiirni.includes('UE05038') + data.kiirni.includes('UE05575')
      + data.kiirni.includes('UE05614') + data.kiirni.includes('UE05763')
      + data.kiirni.includes('UE06234') + data.kiirni.includes('UE06673')
      + data.kiirni.includes('UE06701') + data.kiirni.includes('UE06791')
      + data.kiirni.includes('UE06987') + data.kiirni.includes('UE08172')
      + data.kiirni.includes('UE08397') + data.kiirni.includes('UE08424')
      + data.kiirni.includes('UE01774') + data.kiirni.includes('UE01920')
      + data.kiirni.includes('UE00755') + data.kiirni.includes('UE03231')
      + data.kiirni.includes('UE04385') + data.kiirni.includes('UE00511')
      + data.kiirni.includes('UE07112') + data.kiirni.includes('UE07175')
      + data.kiirni.includes('UE07209') + data.kiirni.includes('UE07369')
      + data.kiirni.includes('UE07398') + data.kiirni.includes('UE07551')
      + data.kiirni.includes('UE07754') + data.kiirni.includes('UE00328')
      + data.kiirni.includes('UE00412') + data.kiirni.includes('UE00501')
      + data.kiirni.includes('UE01241') + data.kiirni.includes('UE01936')
      + data.kiirni.includes('UE04263') + data.kiirni.includes('UE04366')
      + data.kiirni.includes('UE06298') + data.kiirni.includes('UE06203')
      + data.kiirni.includes('UE02952') + data.kiirni.includes('UE04746')
      + data.kiirni.includes('UE04747') + data.kiirni.includes('UE02089')
      + data.kiirni.includes('UE05999') + data.kiirni.includes('UE00458')
      + data.kiirni.includes('UE00758') + data.kiirni.includes('UE01118')
      + data.kiirni.includes('UE01136') + data.kiirni.includes('UE01581')
      + data.kiirni.includes('UE01608') + data.kiirni.includes('UE01609')
      + data.kiirni.includes('UE01610') + data.kiirni.includes('UE02268')
      + data.kiirni.includes('UE02298') + data.kiirni.includes('UE02782')
      + data.kiirni.includes('UE03462') + data.kiirni.includes('UE03464')
      + data.kiirni.includes('UE04454') + data.kiirni.includes('UE04551')
      + data.kiirni.includes('UE05414') + data.kiirni.includes('UE04745')
      + data.kiirni.includes('UE06140') + data.kiirni.includes('UE06443')
      + data.kiirni.includes('UE06650') + data.kiirni.includes('UE06658')
      + data.kiirni.includes('UE06942') + data.kiirni.includes('UE07315')
      + data.kiirni.includes('UE07316') + data.kiirni.includes('UE06562')
      + data.kiirni.includes('UE06740') + data.kiirni.includes('UE06741')
      + data.kiirni.includes('UE07418') + data.kiirni.includes('UE07924')
      + data.kiirni.includes('UE06543') + data.kiirni.includes('UE06552')
      + data.kiirni.includes('UE02649') + data.kiirni.includes('UE03761')
      + data.kiirni.includes('UE04226') + data.kiirni.includes('UE05111')
      + data.kiirni.includes('UE05376') + data.kiirni.includes('UE05516')
      + data.kiirni.includes('UE07358') + data.kiirni.includes('UE07984')
      + data.kiirni.includes('UE08054') + data.kiirni.includes('UE08432')
      + data.kiirni.includes('UE04146') + data.kiirni.includes('UE06172')
      + data.kiirni.includes('UE02389') + data.kiirni.includes('UE03835')
      + data.kiirni.includes('UE04514') + data.kiirni.includes('UE05445')
      + data.kiirni.includes('UE06969') + data.kiirni.includes('UE07236')
      + data.kiirni.includes('UE07246') + data.kiirni.includes('UE07247')
      + data.kiirni.includes('UE07248') + data.kiirni.includes('UE01213')
      + data.kiirni.includes('UE01365') + data.kiirni.includes('UE03757')
      + data.kiirni.includes('UE04017') + data.kiirni.includes('UE04048')
      + data.kiirni.includes('UE07153') + data.kiirni.includes('UE04192')
      + data.kiirni.includes('UE04293') + data.kiirni.includes('UE04319')
      + data.kiirni.includes('UE04349') + data.kiirni.includes('UE04421')
      + data.kiirni.includes('UE04451') + data.kiirni.includes('UE04523')
      + data.kiirni.includes('UE04679') + data.kiirni.includes('UE04768')
      + data.kiirni.includes('UE04963') + data.kiirni.includes('UE05166')
      + data.kiirni.includes('UE05410') + data.kiirni.includes('UE05991')
      + data.kiirni.includes('UE06380') + data.kiirni.includes('UE06691')
      + data.kiirni.includes('UE07018') + data.kiirni.includes('UE07647')
      + data.kiirni.includes('UE08331') + data.kiirni.includes('UE00512')
      + data.kiirni.includes('UE02551') + data.kiirni.includes('UE07422')
      + data.kiirni.includes('UE00121') + data.kiirni.includes('UE03928')
      + data.kiirni.includes('UE05316') + data.kiirni.includes('UE07741')
      + data.kiirni.includes('UE07742') + data.kiirni.includes('UE00156')
      + data.kiirni.includes('UE00421') + data.kiirni.includes('UE00500')
      + data.kiirni.includes('UE00645') + data.kiirni.includes('UE00783')
      + data.kiirni.includes('UE02458') + data.kiirni.includes('UE02671')
      + data.kiirni.includes('UE02768') + data.kiirni.includes('UE02833')
      + data.kiirni.includes('UE03694') + data.kiirni.includes('UE04648')
      + data.kiirni.includes('UE05626') + data.kiirni.includes('UE07942')
      + data.kiirni.includes('UE08150') + data.kiirni.includes('UE08276')
      + data.kiirni.includes('UE01746') + data.kiirni.includes('UE07612')
      + data.kiirni.includes('UE07749') + data.kiirni.includes('UE00145')
      + data.kiirni.includes('UE01004') + data.kiirni.includes('UE01334')
      + data.kiirni.includes('UE03759') + data.kiirni.includes('UE05517')
      + data.kiirni.includes('UE07116') + data.kiirni.includes('UE05817')
      + data.kiirni.includes('UE03203') + data.kiirni.includes('UE04264')
      + data.kiirni.includes('UE07470') + data.kiirni.includes('UE03859')
      + data.kiirni.includes('UE00661') + data.kiirni.includes('UE05688')
      + data.kiirni.includes('UE07549') + data.kiirni.includes('UE04911')
      + data.kiirni.includes('UE07496') + data.kiirni.includes('UE03718')
      + data.kiirni.includes('UE06365') + data.kiirni.includes('UE06366')
      + data.kiirni.includes('UE03580') + data.kiirni.includes('UE00254')
      + data.kiirni.includes('UE06790') + data.kiirni.includes('UE07077')
      + data.kiirni.includes('UE05046') + data.kiirni.includes('UE06265')
      + data.kiirni.includes('UE03969') + data.kiirni.includes('UE02473')
      + data.kiirni.includes('UE04259') + data.kiirni.includes('UE04497')
      + data.kiirni.includes('UE06134') + data.kiirni.includes('UE06664')
      + data.kiirni.includes('UE07184') + data.kiirni.includes('UE07558')
      + data.kiirni.includes('UE01343') + data.kiirni.includes('UE01545')
      + data.kiirni.includes('UE01852') + data.kiirni.includes('UE02247')
      + data.kiirni.includes('UE03973') + data.kiirni.includes('UE04042')
      + data.kiirni.includes('UE05490') + data.kiirni.includes('UE06139')
      + data.kiirni.includes('UE06904') + data.kiirni.includes('UE07250')
      + data.kiirni.includes('UE07531') + data.kiirni.includes('UE08268')
      + data.kiirni.includes('UE02042') + data.kiirni.includes('UE06818')
      + data.kiirni.includes('UE05113') + data.kiirni.includes('UE06868')
      + data.kiirni.includes('UE00015') + data.kiirni.includes('UE00016')
      + data.kiirni.includes('UE00417') + data.kiirni.includes('UE00454')
      + data.kiirni.includes('UE00455') + data.kiirni.includes('UE00456')
      + data.kiirni.includes('UE01372') + data.kiirni.includes('UE02863')
      + data.kiirni.includes('UE06464') + data.kiirni.includes('UE06465')
      + data.kiirni.includes('UE06813') + data.kiirni.includes('UE06935')
      + data.kiirni.includes('UE06936') + data.kiirni.includes('UE06937')
      + data.kiirni.includes('UE06938') + data.kiirni.includes('UE08277')
      + data.kiirni.includes('UE08278') + data.kiirni.includes('UE08279')
      + data.kiirni.includes('UE08280') + data.kiirni.includes('UE08281')
      + data.kiirni.includes('UE08282') + data.kiirni.includes('UE08283')
      + data.kiirni.includes('UE08284') + data.kiirni.includes('UE08285')
      + data.kiirni.includes('UE08286') + data.kiirni.includes('UE08287')
      + data.kiirni.includes('UE00030') + data.kiirni.includes('UE00510')
      + data.kiirni.includes('UE02229') + data.kiirni.includes('UE02260')
      + data.kiirni.includes('UE02317') + data.kiirni.includes('UE04016')
      + data.kiirni.includes('UE05216') + data.kiirni.includes('UE05478')
      + data.kiirni.includes('UE08240') + data.kiirni.includes('UE00205')
      + data.kiirni.includes('UE00206') + data.kiirni.includes('UE00207')
      + data.kiirni.includes('UE00208') + data.kiirni.includes('UE03460')
      + data.kiirni.includes('UE04060') + data.kiirni.includes('UE05048')
      + data.kiirni.includes('UE06833') + data.kiirni.includes('UE07075')
      + data.kiirni.includes('UE08154') + data.kiirni.includes('UE08155')
      + data.kiirni.includes('UE04468') + data.kiirni.includes('UE00243')
      + data.kiirni.includes('UE00592') + data.kiirni.includes('UE01999')
      + data.kiirni.includes('UE07618') + data.kiirni.includes('UE00935')
      + data.kiirni.includes('UE02700') + data.kiirni.includes('UE07797')
      + data.kiirni.includes('UE02040') + data.kiirni.includes('UE02910')
      + data.kiirni.includes('UE08077') + data.kiirni.includes('UE08078')
      + data.kiirni.includes('UE04162') + data.kiirni.includes('UE06968')
      + data.kiirni.includes('UE07005') + data.kiirni.includes('UE07041')
      + data.kiirni.includes('UE07082') + data.kiirni.includes('UE07110')
      + data.kiirni.includes('UE07140') + data.kiirni.includes('UE07167')
      + data.kiirni.includes('UE07202') + data.kiirni.includes('UE07237')
      + data.kiirni.includes('UE07267') + data.kiirni.includes('UE07299')
      + data.kiirni.includes('UE07332') + data.kiirni.includes('UE07364')
      + data.kiirni.includes('UE07394') + data.kiirni.includes('UE07424')
      + data.kiirni.includes('UE07455') + data.kiirni.includes('UE07492')
      + data.kiirni.includes('UE07522') + data.kiirni.includes('UE07548')
      + data.kiirni.includes('UE05146') + data.kiirni.includes('UE06666')
      + data.kiirni.includes('UE06477') + data.kiirni.includes('UE00026')
      + data.kiirni.includes('UE00132') + data.kiirni.includes('UE00462')
      + data.kiirni.includes('UE00504') + data.kiirni.includes('UE00549')
      + data.kiirni.includes('UE07605') + data.kiirni.includes('UE07666')
      + data.kiirni.includes('UE00631') + data.kiirni.includes('UE00515')
      + data.kiirni.includes('UE00558') + data.kiirni.includes('UE07014')
      + data.kiirni.includes('UE05218') + data.kiirni.includes('UE03535')
      + data.kiirni.includes('UE04379') + data.kiirni.includes('UE04392')
      + data.kiirni.includes('UE04516') + data.kiirni.includes('UE04583')
      + data.kiirni.includes('UE04714') + data.kiirni.includes('UE04780')
      + data.kiirni.includes('UE04861') + data.kiirni.includes('UE04901')
      + data.kiirni.includes('UE04931') + data.kiirni.includes('UE05024')
      + data.kiirni.includes('UE02589') + data.kiirni.includes('UE04058')
      + data.kiirni.includes('UE07036') + data.kiirni.includes('UE07037')
      + data.kiirni.includes('UE00093') + data.kiirni.includes('UE00133')
      + data.kiirni.includes('UE00533') + data.kiirni.includes('UE01669')
      + data.kiirni.includes('UE02453') + data.kiirni.includes('UE02608')
      + data.kiirni.includes('UE02818') + data.kiirni.includes('UE03469')
      + data.kiirni.includes('UE03500') + data.kiirni.includes('UE04915')
      + data.kiirni.includes('UE05847') + data.kiirni.includes('UE05862')
      + data.kiirni.includes('UE07372') + data.kiirni.includes('UE07468')
      + data.kiirni.includes('UE08464') + data.kiirni.includes('UE06834')
      + data.kiirni.includes('UE03403') + data.kiirni.includes('UE04061')
      + data.kiirni.includes('UE01105') + data.kiirni.includes('UE03567')
      + data.kiirni.includes('UE05062') + data.kiirni.includes('UE07142')
      + data.kiirni.includes('UE08090') + data.kiirni.includes('UE08125')
      + data.kiirni.includes('UE08158') + data.kiirni.includes('UE08194')
      + data.kiirni.includes('UE08221') + data.kiirni.includes('UE08257')
      + data.kiirni.includes('UE08290') + data.kiirni.includes('UE08325')
      + data.kiirni.includes('UE08348') + data.kiirni.includes('UE08382')
      + data.kiirni.includes('UE08413') + data.kiirni.includes('UE01885')
      + data.kiirni.includes('UE04492') + data.kiirni.includes('UE02566')
      + data.kiirni.includes('UE03421') + data.kiirni.includes('UE04204')
      + data.kiirni.includes('UE04403') + data.kiirni.includes('UE05071')
      + data.kiirni.includes('UE05134') + data.kiirni.includes('UE05179')
      + data.kiirni.includes('UE05620') + data.kiirni.includes('UE08237')
      + data.kiirni.includes('UE04720') + data.kiirni.includes('UE05256')
      + data.kiirni.includes('UE06561') + data.kiirni.includes('UE04284')
      + data.kiirni.includes('UE02963') + data.kiirni.includes('UE05051')
      + data.kiirni.includes('UE08409') + data.kiirni.includes('UE03993')
      + data.kiirni.includes('UE06877') + data.kiirni.includes('UE06037')
      + data.kiirni.includes('UE00096') + data.kiirni.includes('UE00161')
      + data.kiirni.includes('UE00164') + data.kiirni.includes('UE05047')
      + data.kiirni.includes('UE05509') + data.kiirni.includes('UE06170')
      + data.kiirni.includes('UE01835') + data.kiirni.includes('UE00804')
      + data.kiirni.includes('UE06467') + data.kiirni.includes('UE06497')
      + data.kiirni.includes('UE06945') + data.kiirni.includes('UE02905')
      + data.kiirni.includes('UE07278') + data.kiirni.includes('UE07306')
      + data.kiirni.includes('UE07311') + data.kiirni.includes('UE07342')
      + data.kiirni.includes('UE07405') + data.kiirni.includes('UE07503')
      + data.kiirni.includes('UE07556') + data.kiirni.includes('UE07643')
      + data.kiirni.includes('UE08038') + data.kiirni.includes('UE00599')
      + data.kiirni.includes('UE02811') + data.kiirni.includes('UE08177')
      + data.kiirni.includes('UE05053') + data.kiirni.includes('UE06061')
      + data.kiirni.includes('UE05520') + data.kiirni.includes('UE07204')
      + data.kiirni.includes('UE08345') + data.kiirni.includes('UE05603')
      + data.kiirni.includes('UE02390') + data.kiirni.includes('UE02882')
      + data.kiirni.includes('UE02929') + data.kiirni.includes('UE02945')
      + data.kiirni.includes('UE03006') + data.kiirni.includes('UE03235')
      + data.kiirni.includes('UE03321') + data.kiirni.includes('UE03389')
      + data.kiirni.includes('UE03463') + data.kiirni.includes('UE03472')
      + data.kiirni.includes('UE03557') + data.kiirni.includes('UE03829')
      + data.kiirni.includes('UE04130') + data.kiirni.includes('UE04165')
      + data.kiirni.includes('UE04280') + data.kiirni.includes('UE04352')
      + data.kiirni.includes('UE04405') + data.kiirni.includes('UE04543')
      + data.kiirni.includes('UE04570') + data.kiirni.includes('UE04606')
      + data.kiirni.includes('UE04645') + data.kiirni.includes('UE04689')
      + data.kiirni.includes('UE04774') + data.kiirni.includes('UE04835')
      + data.kiirni.includes('UE04877') + data.kiirni.includes('UE04997')
      + data.kiirni.includes('UE05034') + data.kiirni.includes('UE05075')
      + data.kiirni.includes('UE05217') + data.kiirni.includes('UE05276')
      + data.kiirni.includes('UE05336') + data.kiirni.includes('UE05361')
      + data.kiirni.includes('UE05404') + data.kiirni.includes('UE05430')
      + data.kiirni.includes('UE05461') + data.kiirni.includes('UE05501')
      + data.kiirni.includes('UE05574') + data.kiirni.includes('UE05612')
      + data.kiirni.includes('UE05703') + data.kiirni.includes('UE05736')
      + data.kiirni.includes('UE05768') + data.kiirni.includes('UE05790')
      + data.kiirni.includes('UE05824') + data.kiirni.includes('UE02651')
      + data.kiirni.includes('UE02798') + data.kiirni.includes('UE05855')
      + data.kiirni.includes('UE05884') + data.kiirni.includes('UE05938')
      + data.kiirni.includes('UE06021') + data.kiirni.includes('UE06048')
      + data.kiirni.includes('UE06136') + data.kiirni.includes('UE06192')
      + data.kiirni.includes('UE06228') + data.kiirni.includes('UE06320')
      + data.kiirni.includes('UE06352') + data.kiirni.includes('UE06389')
      + data.kiirni.includes('UE06417') + data.kiirni.includes('UE06489')
      + data.kiirni.includes('UE06524') + data.kiirni.includes('UE06528')
      + data.kiirni.includes('UE06565') + data.kiirni.includes('UE06603')
      + data.kiirni.includes('UE06674') + data.kiirni.includes('UE06703')
      + data.kiirni.includes('UE06731') + data.kiirni.includes('UE06762')
      + data.kiirni.includes('UE06793') + data.kiirni.includes('UE06852')
      + data.kiirni.includes('UE06891') + data.kiirni.includes('UE06923')
      + data.kiirni.includes('UE06958') + data.kiirni.includes('UE06989')
      + data.kiirni.includes('UE07007') + data.kiirni.includes('UE07062')
      + data.kiirni.includes('UE07097') + data.kiirni.includes('UE07129')
      + data.kiirni.includes('UE07160') + data.kiirni.includes('UE07185')
      + data.kiirni.includes('UE07320') + data.kiirni.includes('UE07349')
      + data.kiirni.includes('UE07379') + data.kiirni.includes('UE07409')
      + data.kiirni.includes('UE07439') + data.kiirni.includes('UE07478')
      + data.kiirni.includes('UE07511') + data.kiirni.includes('UE07567')
      + data.kiirni.includes('UE07593') + data.kiirni.includes('UE07623')
      + data.kiirni.includes('UE07676') + data.kiirni.includes('UE07704')
      + data.kiirni.includes('UE07734') + data.kiirni.includes('UE07769')
      + data.kiirni.includes('UE07873') + data.kiirni.includes('UE07905')
      + data.kiirni.includes('UE07943') + data.kiirni.includes('UE07978')
      + data.kiirni.includes('UE08010') + data.kiirni.includes('UE08075')
      + data.kiirni.includes('UE08106') + data.kiirni.includes('UE08210')
      + data.kiirni.includes('UE08235') + data.kiirni.includes('UE08270')
      + data.kiirni.includes('UE08308') + data.kiirni.includes('UE08340')
      + data.kiirni.includes('UE08263') + data.kiirni.includes('UE08428')
      + data.kiirni.includes('UE08455') + data.kiirni.includes('UE06003')
      + data.kiirni.includes('UE04845') + data.kiirni.includes('UE06300');
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
