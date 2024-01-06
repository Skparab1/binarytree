
function startplay(ix){
  audio = new Audio('audio/'+largebeatarr[ix][2]);
  audio.play();
}

function startplayorig(ix){
  audio = new Audio('audio/'+origlargebeat[ix][2]);
  audio.play();
}

function startplaysec(ix){
  audio = new Audio('audio/'+secbeats[ix][2]);
  audio.play();
}

function playtoggle(){
  let pl = document.getElementById('playimg');
  let ps = document.getElementById('pauseimg');

  if (playing){
    playing = false;
    audio.pause();
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    (async () => {
      let dimmer = 0;
      while (dimmer <= 100){
        pl.style.opacity = dimmer/100;
        ps.style.opacity = 1-(dimmer/100);
        dimmer += 1;
        await sleep(2);
      }
      await sleep(2000);
      dimmer = 0;
      while (dimmer <= 100){
        pl.style.opacity = 1-(dimmer/100);
        dimmer += 1;
        await sleep(2);
      }
    })();
  } else {
    playing = true;
    audio.play();
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    (async () => {
      let dimmer = 0;
      while (dimmer <= 100){
        pl.style.opacity = 1-(dimmer/100);
        ps.style.opacity = dimmer/100;
        dimmer += 1;
        await sleep(2);
      }
      await sleep(2000);
      dimmer = 0;
      while (dimmer <= 100){
        ps.style.opacity = 1-(dimmer/100);
        dimmer += 1;
        await sleep(2);
      }
    })();
  }
}

function playnextbeat(){
  // finished the beat
  //console.log('finsiehd beat')

  if (playingqueue && !finishedqueue){
    queue.splice(0,1);
    renderqueue();

    if (queue.length > 0){
      playingqueue = false;
      playqueue();
    } else {
      finishedqueue = true;
      alert('Queue has finished!');
      closequeue();
      finishedqueue = false;
      playingqueue = false;
    }
  } else if (insecpl && !finishedqueue){ //vault
    if (audiomode == 'playonce'){
      // do nothing
    } else if (audiomode == 'repeat'){
      playbeatsec(currentbeat);
    } else if (audiomode == 'playnext' && currentbeat + 2 < largebeatarr.length){ // dont run out
      playbeatsec(currentbeat+1);
    } else if (audiomode == 'random' || audiomode == 'randomx'){
      let rand = Math.floor(Math.random() * secbeats.length);
      playbeatsec(rand);
    }
  } else if (currentplaylist == -1 && !finishedqueue){
    // not in a playlist
    if (audiomode == 'playonce'){
      // do nothing
    } else if (audiomode == 'repeat'){
      playbeat(currentbeat);
    } else if (audiomode == 'playnext' && currentbeat + 2 < largebeatarr.length){ // dont run out
      playbeat(currentbeat+1);
    } else if (audiomode == 'random'){
      let rand = Math.floor(Math.random() * largebeatarr.length);
      playbeat(rand);
    } else if (audiomode == 'randomx'){
      // basically we need to keep a list of beats thatve been played
      // lets just makeit one time for now
      // stored in randomxplayed
      
      randomxplayed.push(sortpath[currentbeat]);

      if (randomxplayed.length >= largebeatarr.length){ // resets at 55 apperantly
        randomxplayed = []; // played all the beats, can reset
      }
      let thebeat = -1;
      while (thebeat == -1 || arrincludes(randomxplayed,thebeat)){
        thebeat = Math.floor(Math.random() * largebeatarr.length);
        //console.log('gonna play'+thebeat)
      }
      //console.log(randomxplayed);
      playbeatorig(thebeat);
    }
  } else if (!finishedqueue){
    //in playlist cpl
    if (audiomode == 'playonce'){
      // do nothing
    } else if (audiomode == 'repeat'){
      playbeat(currentbeat);
    } else if (audiomode == 'playnext'){ 
      try{ // dont break if its the last beat
        playbeat(currentplaylistsongs[currentplaylistsongs.indexOf(currentbeat)+1]);
      } catch {
        console.log('end of beat');
      }
    } else if (audiomode == 'random'){
      let rand = Math.floor(Math.random() * currentplaylistsongs.length);
      playbeat(currentplaylistsongs[rand]);
    } else if (audiomode == 'randomx'){
      // this is the list of the played songs
      randomxplayed.push(sortpath[currentbeat]);

      // reset if at limit
      if (randomxplayed.length >= currentplaylistsongs.length){ // reset at pl length
        randomxplayed = []; // played all the beats, can reset
      }
      
      let thebeat = -1;
      while (thebeat == -1 || arrincludes(randomxplayed,sortpath[thebeat])){
        thebeat = Math.floor(Math.random() * currentplaylistsongs.length);
        thebeat = currentplaylistsongs[thebeat];
        console.log('gonna play'+sortpath[thebeat]);
      }
      console.log(randomxplayed);

      playbeat(thebeat);
      // check this lmao cud be inf loop
    } 
  }
}

function showplaypause(){
  let pl = document.getElementById('playimg');
  let ps = document.getElementById('pauseimg');
  
  // if its playing and playing is opacity 0 or not playing and pause opacity 0;
  if ((playing && pl.style.opacity == 0) || (!playing && ps.style.opacity == 0)){
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    (async () => {
      let dimmer = 0;
      while (dimmer <= 100){
        if (playing){
          ps.style.opacity = dimmer/100;
        } else {
          pl.style.opacity = dimmer/100;
        }
        dimmer += 1;
        await sleep(2);
      }
    })();
  }
}

function fadeplaypause(){
  console.log('fadeout');
  let pl = document.getElementById('playimg');
  let ps = document.getElementById('pauseimg');

  if ((playing && ps.style.opacity != 0) || (!playing && pl.style.opacity != 0)){
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    (async () => {
      dimmer = 0;
      while (dimmer <= 100){
        if (playing){
          ps.style.opacity = 1-(dimmer/100);
        } else {
          pl.style.opacity = 1-(dimmer/100);
        }
        dimmer += 1;
        await sleep(2);
      }
    })();
  }
}

function showfadeplaypause(){
  let pl = document.getElementById('playimg');
  let ps = document.getElementById('pauseimg');
  console.log('playpause');
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    let dimmer = 0;
    while (dimmer <= 100){
      if (playing){
        ps.style.opacity = dimmer/100;
      } else {
        pl.style.opacity = dimmer/100;
      }
      dimmer += 1;
      await sleep(2);
    }
    dimmer = 0;
    while (dimmer <= 100){
      if (playing){
        ps.style.opacity = 1-(dimmer/100);
      } else {
        pl.style.opacity = 1-(dimmer/100);
      }
      dimmer += 1;
      await sleep(2);
    }
  })();
}

function selectbeat(ix){
  try{
    let j = 0;
    let box;
    while (j < largebeatarr.length){
      try {
        box = document.getElementById('beat'+j);
        if (j == ix){
          box.style.boxShadow = '0px 0px 10px 10px rgb(121, 121, 121)';
        } else {
          box.style.boxShadow = 'none';
        }
      } catch (error) {
        // pass
      }
      j += 1;
    }
  } catch {
    // pass
  }
}

async function playsyncedbeat(ix){
  
  //wait for a good time and then play it

  openelement('syncer');

  let realbeat;
  if (ix < 999){// not a sec
    syncdb(hoststatus,'playing',sortpath[ix]);
  } else {
    syncdb(hoststatus,'playing',ix);
    realbeat = parseInt(String(ix).replace('999',''));
  }

  const sleep = ms => new Promise(res => setTimeout(res, ms));

  
  if (ix < 999){// not a sec
    document.getElementById('nowplayingname').textContent = largebeatarr[ix][0];
  } else {
    document.getElementById('nowplayingname').textContent = secbeats[realbeat][0];
  }
  playing = true;
  document.getElementById('playtimeline').style.display = 'block';
  document.getElementById('controlsbox').style.display = 'block';
  document.getElementById('playnow').style.opacity = 1;
  document.getElementById('controlsbox').style.zIndex = 14;

  let bm = document.getElementById('beatimg');

  if (ix < 999){// not a sec
    bm.src = 'images/'+largebeatarr[ix][1];
    currentbeat = ix;
    document.title = largebeatarr[ix][0]+' - AGP Beats';
    audio.pause();
    showfadeplaypause();
    selectbeat(ix);
    startplay(ix);
    audio.volume = parseInt(localStorage.getItem('storedvol'))/100;
    audio.pause();
  } else {
    bm.src = secbeats[realbeat][1];
    currentbeat = realbeat; // this can have issues
    document.title = secbeats[realbeat][0]+' - AGP Beats';
    audio.pause();
    showfadeplaypause();
    selectbeat(ix);
    startplaysec(realbeat);
    audio.volume = parseInt(localStorage.getItem('storedvol'))/100;
    audio.pause();
  }

  while (!synced){
    var d = new Date();
    var synced = false;
    if (d.getSeconds() % 10 == 0 && !synced){
      // time to check
      await fetch((`https://pst652.deta.dev/?SPECIFIC=astation${hoststatus}`)) //ur own station
      .then(response => {
          return response.json();
      })
      .then(data => {
          console.log(data);
          console.log(data.plays);
          // plays is the current beat
          // name is the playing or not

          if (data.name == 'playing'){
            //you got it  
            synced = true;
          }
      })
    }
    
    await sleep(500); // try not to lag
  }

  // wait until it hits like 2 or smth
  while (true){
    var d = new Date();
    if (d.getSeconds() % 10 == 3){
      break;
    }
    await sleep(2); // dont lag
  }

  closedialogue('syncer');

  audio.play();
}

function playbeat(ix){

  if (triggeredfav){
    let heart = document.getElementById('heart'+ix);
    if (accessfavs[ix] == 'red'){
      accessfavs[ix] = 'white';
      heart.style.color = 'white';
      favs[sortpath[ix]] = 'white';
      // write to favs but aafter converting
    } else if (accessfavs[ix] == 'white'){
      accessfavs[ix] = 'red';
      heart.style.color = 'red';
      favs[sortpath[ix]] = 'red';
    }
    console.log(sortpath[ix]);
    localStorage.setItem('favbeats',makestring(favs));
    console.log(localStorage.getItem('favbeats'));
    triggeredfav = false;
  } else if (triggerdaddbeat){
    console.log('trig: origbeat='+sortpath[ix]);
    let bt = document.getElementById('beat'+ix);
    let bt1 = document.getElementById('addbeat');
    setoverlaylite(bt1,bt);
    bt1.style.display = 'block';
    bt1.style.opacity = 1;
    triggerdaddbeat = false;
    currentadder = ix;

  } else if (hoststatus != ""){ // is it connected
    playsyncedbeat(ix);
  } else {
    try{
        let endTime = new Date();
        let beatplayedtime = (endTime - startedbeat)/1000;
        // actually play it
        document.getElementById('nowplayingname').textContent = largebeatarr[ix][0];
        playing = true;
        document.getElementById('playtimeline').style.display = 'block';
        document.getElementById('controlsbox').style.display = 'block';
        document.getElementById('playnow').style.opacity = 1;
        document.getElementById('controlsbox').style.zIndex = 14;

        let bm = document.getElementById('beatimg');
        bm.src = 'images/'+largebeatarr[ix][1];
        currentbeat = ix;
        document.title = largebeatarr[ix][0]+' - AGP Beats';
        audio.pause();
        showfadeplaypause();
        selectbeat(ix);
        startplay(ix);
        audio.volume = parseInt(localStorage.getItem('storedvol'))/100;
        // LMAOO
        if (window.location.href.includes('x2')){
          audio.playbackRate = 2;
        }
        
        const sleep = ms => new Promise(res => setTimeout(res, ms));

        // this is in real playbeat no bs
        if (justplayed != ix || beatplayedtime > 30){ // dont spam 
          (async () => {

            let cp = dbstore(('song'+sortpath[ix]),(largebeatarr[ix][0].replaceAll(" ",'').replaceAll('"','').replaceAll("-",'')),21,true);
            // cp is null here ignore it
            // so db store will get the actual thing to update it on the frotnend but that wont actually matter
            
            dbincrement(('song'+sortpath[ix]),(largebeatarr[ix][0].replaceAll(" ",'').replaceAll('"','').replaceAll("-",'')));
          })();
        }
        justplayed = ix;
        startedbeat = endTime;
      } catch {
      //console.log('beat didnt exist');
      // presumably cuz end of playlist
      playbeat(currentplaylistsongs[0]);
    }
  }
}

function dbincrement(id,name){
  (async () => {
    fetch((`https://pst652.deta.dev/?INCREMENT=key${id}&beat=${name}`))
      .then(response => {
          return response.json();
      })
      .then(data => {
          console.log(data);
      })
  })();

}

function detadb(id,name,plays){
  //only used for hosts now
  (async () => {
    fetch((`https://pst652.deta.dev/?key=${id}&beat=${name}&plays=${plays}`))
      .then(response => {
          return response.json();
      })
      .then(data => {
          console.log(data);
      })
  })();
}

function syncdb(id,name,plays){
  //only used for hosts now
  (async () => {
    //      https://pst652.deta.dev/?SYNC=user=astationnigli&status=offline&song=40
    fetch((`https://pst652.deta.dev/?SYNC=user=astation${id}&status=${name}&song=${plays}`))
      .then(response => {
          return response.json();
      })
      .then(data => {
          console.log(data);
      })
  })();
}

function stationdb(id,name,plays){
  (async () => {
    fetch((`https://pst652.deta.dev/?key=${id}&beat=${name}&plays=${plays}`))
      .then(response => {
          return response.json();
      })
      .then(data => {
          console.log(data);
      })
  })();
}

function dbstore(id,name,plays,gettingcounts){
  // not the plays
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    let gottenplays = 0;

    await fetch((`https://pst652.deta.dev/?SPECIFIC=${id}`))
    .then(response => {
        return response.json();
    })
    .then(data => {
        gottenplays = data.plays+1;
        console.log(data);
        console.log(data.plays);
        console.log(gottenplays);
        // store it
        playcounts[parseInt(id.replace('song',''))] = gottenplays;
        if (gettingcounts){
          let g = document.getElementById('playct'+sortpath.indexOf(parseInt(id.replace('song',''))));
          console.log(g.textContent);
          g.textContent = "▷ "+gottenplays;
          // i got it basically sotre it in an arr iwth the correspoding names
        }
    })
  })();
}

function dbstoresec(id,name,plays){
  // not the plays
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    let gottenplays = 0;

    await fetch((`https://pst652.deta.dev/?SPECIFIC=${id}`))
    .then(response => {
        return response.json();
    })
    .then(data => {
        gottenplays = data.plays+1;
        console.log(data);
        console.log(data.plays);
        console.log(gottenplays);
        // store it
        playcountssec[parseInt(id.replace('songSEC',''))] = gottenplays;
        let g = document.getElementById('playctsec'+id.replace('songSEC',''));
        g.textContent = "▷ "+gottenplays;
        // i got it basically sotre it in an arr iwth the correspoding names
    })
  })();
}

function playbeatsec(ix){
  try{

    if (hoststatus != ""){ // is it connected
      playsyncedbeat(parseInt("999"+String(ix)));
    } else {
      document.getElementById('nowplayingname').textContent = secbeats[ix][0];
      playing = true;
      document.getElementById('playtimeline').style.display = 'block';
      document.getElementById('controlsbox').style.display = 'block';
      document.getElementById('playnow').style.opacity = 1;
      document.getElementById('controlsbox').style.zIndex = 14;

      let bm = document.getElementById('beatimg');
      bm.src = 'images/'+secbeats[ix][1];
      currentbeat = ix; // this is objectionable no its fine
      document.title = secbeats[ix][0]+' - AGP Beats';
      audio.pause();
      showfadeplaypause();
      selectbeat(ix); // objectionable, but in theory shud work cuz its the only one existing
      startplaysec(ix);
      audio.volume = parseInt(localStorage.getItem('storedvol'))/100;
      // LMAOO
      if (window.location.href.includes('x2')){
        audio.playbackRate = 2;
      }
      
      // ok we can do dbs now
      const sleep = ms => new Promise(res => setTimeout(res, ms));

      (async () => {

        // where ix is the index with respect to the sec list
        let cp = dbstoresec(('songSEC'+ix),(secbeats[ix][0].replaceAll(" ",'').replaceAll('"','').replaceAll("-",'')),21);
        // cp is null here ignore it

        // again dbsotresec is just for showing it on the frontend
        
        dbincrement(('songSEC'+ix),(secbeats[ix][0].replaceAll(" ",'').replaceAll('"','').replaceAll("-",'')));
      })();
    }

  } catch {
    //console.log('beat didnt exist');
    // presumably cuz end of playlist
    playbeat(currentplaylistsongs[0]);
  }
}

async function playbeatorig(ix){
  let realbeat;
  if (ix > 999){ // its a sec fs
    realbeat = parseInt(String(ix).replace('999',''));
    document.getElementById('nowplayingname').textContent = secbeats[realbeat][0];
  } else {
    document.getElementById('nowplayingname').textContent = origlargebeat[ix][0];
  }
  playing = true;
  document.getElementById('playtimeline').style.display = 'block';
  document.getElementById('controlsbox').style.display = 'block';
  document.getElementById('playnow').style.opacity = 1;
  document.getElementById('controlsbox').style.zIndex = 14;

  syncedbeat = ix;

  let bm = document.getElementById('beatimg');

  if (ix > 999){ // its a sec
    bm.src = secbeats[realbeat][1];
    currentbeat = ix; // this is prob wrong
    document.title = secbeats[realbeat][0]+' - AGP Beats';
    audio.pause();
    showfadeplaypause();
    //selectbeat(realbeat); this wont work
    startplaysec(realbeat);
    audio.volume = parseInt(localStorage.getItem('storedvol'))/100;
  } else {
    bm.src = 'images/'+origlargebeat[ix][1];
    currentbeat = sortpath.indexOf(ix); // this is wrong
    document.title = origlargebeat[ix][0]+' - AGP Beats';
    audio.pause();
    showfadeplaypause();
    selectbeat(sortpath.indexOf(ix));
    startplayorig(ix);
    audio.volume = parseInt(localStorage.getItem('storedvol'))/100;
  }
  
  
  // (async () => {
  //   let cp = dbstore(('song'+sortpath[ix]),(largebeatarr[ix][0].replaceAll(" ",'').replaceAll('"','').replaceAll("-",'')),21);


  // setTimeout(function () {
  //   detadb(('song'+sortpath[ix]),(largebeatarr[ix][0].replaceAll(" ",'').replaceAll('"','').replaceAll("-",'')),cp);
  // }, 3000);

  // cp = dbstore(('song'+sortpath[ix]),(largebeatarr[ix][0].replaceAll(" ",'').replaceAll('"','').replaceAll("-",'')),21);
}

function openvault(){
  if (localStorage.getItem('rajavault') == 'validated'){
    opensecret();
  } else {
    openelement('pwdask');
  }
}

function colorize(h,r,g,b){
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      document.getElementById(h).style.color = 'rgb('+(255-(255-r)*(dimmer/100))+','+(255-(255-g)*(dimmer/100))+','+(255-(255-b)*(dimmer/100))+')';
      dimmer += 1;
      await sleep(2);
    }
  })();
}
function decolorize(h,r,g,b){
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      document.getElementById(h).style.color = 'rgb('+(r+(255-r)*(dimmer/100))+','+(g+(255-g)*(dimmer/100))+','+(b+(255-b)*(dimmer/100))+')';
      dimmer += 1;
      await sleep(2);
    }
  })();
}

function changevolume(){
  let vol = document.getElementById('volumer').value;
  audio.volume = vol/100;
  let voldisp = document.getElementById('volumedisp');
  voldisp.textContent = 'Vol: '+vol+'%'
  localStorage.setItem('storedvol',String(vol));
}

function changedmode(){
  let moder = document.getElementById('mode').value;
  audiomode = moder;
  localStorage.setItem('audiomode',moder);
}

function skipahead(sec){
  if (Math.ceil(audio.currentTime+sec) > 0 && Math.round(audio.currentTime+sec) <= audio.duration){
    audio.currentTime = Math.round(audio.currentTime+sec);
  } else if (Math.ceil(audio.currentTime+sec) <= 0){
    audio.currentTime = 0;
  }
}

function favbeat(){
  triggeredfav = true;
}

function openplaylistmaker(){
  dialogueopened = true;
  let ps = document.getElementById('playlistmaker');
  let ovl = document.getElementById('alloverlay');
  ps.style.display = 'block';
  ovl.style.display = 'block';
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      ps.style.opacity = dimmer/100;
      ovl.style.opacity = dimmer/200;
      dimmer += 1;
      await sleep(2);
    }
  })();
}

function openfinder(){
  searcheropen = true;
  let ps = document.getElementById('finder');
  let ovl = document.getElementById('alloverlay');
  ps.style.display = 'block';
  ovl.style.display = 'block';
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      ps.style.opacity = dimmer/100;
      ovl.style.opacity = dimmer/200;
      dimmer += 1;
      await sleep(2);
    }
    dialogueopened = true;
  })();
}

function closefinder(){
  dialogueopened = false;
  searcheropen = false;
  let ps = document.getElementById('finder');
  let ovl = document.getElementById('alloverlay');
  ps.style.display = 'block';
  ovl.style.display = 'block';
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      ps.style.opacity = 1-dimmer/100;
      ovl.style.opacity = ((100-dimmer)/200);
      dimmer += 1;
      await sleep(2);
    }
    ovl.style.display = 'none';
    ps.style.display = 'none';
  })();
}

function openplaylistadder(){
  dialogueopened = true;
  let ps = document.getElementById('addplaylist');
  let ovl = document.getElementById('alloverlay');
  ps.style.display = 'block';
  ovl.style.display = 'block';
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      ps.style.opacity = dimmer/100;
      ovl.style.opacity = dimmer/200;
      dimmer += 1;
      await sleep(2);
    }
  })();
}

function openelement(el){
  dialogueopened = true;
  let ps = document.getElementById(el);
  let ovl = document.getElementById('alloverlay');
  ps.style.display = 'block';
  ovl.style.display = 'block';
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      ps.style.opacity = dimmer/100;
      ovl.style.opacity = dimmer/200;
      dimmer += 1;
      await sleep(2);
    }
  })();
}

async function closedialogue(el){
  dialogueopened = false;
  let ps = document.getElementById(el);
  let ovl = document.getElementById('alloverlay');
  ps.style.display = 'block';
  ovl.style.display = 'block';
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      ps.style.opacity = 1-dimmer/100;
      ovl.style.opacity = ((100-dimmer)/200);
      dimmer += 1;
      await sleep(2);
    }
    ovl.style.display = 'none';
    ps.style.display = 'none';
  })();
  gottem = false;
}

function openbanner(el){
  let ps = document.getElementById(el);
  ps.style.display = 'block';
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      ps.style.opacity = dimmer/100;
      dimmer += 1;
      await sleep(2);
    }
  })();
}

function closebanner(el){
  let ps = document.getElementById(el);
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      ps.style.opacity = (1-dimmer/100);
      dimmer += 1;
      await sleep(2);
    }
    ps.style.display = 'none';
  })();
}

function addplaylist(){
  // we have addingname and addingcont
  playlists.push(addingname);
  playlistcontent.push(addingcont);
  localStorage.setItem('playlists',makestringand(playlists));
  localStorage.setItem('playlistcontent',makestringand(playlistcontent));
  closelistadder();
  window.location.href = 'https://skparab1.github.io/agpbeats';
}

function searcher(query){
  let gg = 0;
  currentresults = [];
  let disp = document.getElementById('resultholder');
  disp.innerHTML = `<div class="playlist"></div>`;
  let resultpl = 0;

  while (gg < largebeatarr.length){
    console.log(query);
    const div2 = document.createElement('div');
    if (largebeatarr[gg][0].toLowerCase().includes(query.toLowerCase()) && query != '' && query != ' '){
      console.log('worked');
      div2.innerHTML = `
      <div class="playlist" onclick="playbeat(`+gg+`); closefinder();"><h1 style='color: white; font-size: 12.5px;' id='resultspl`+resultpl+`'>`+largebeatarr[gg][0]+`</h1></div>
      `;
      resultpl += 1;
      disp.appendChild(div2);
      currentresults.push(String(gg));
    }
    gg += 1;
  }
}

function updaterhighlight(last,rpl){
  try {
    let f = document.getElementById('resultspl'+last);
    f.style.color = 'white';
  } catch (error) {
    // do nothing
  }
  try {
    f = document.getElementById('resultspl'+rpl);
    f.style.color = 'rgb(200, 100, 69)';
  } catch (error) {
    // do nothing
  }

  // doesnt work rn
  // f = document.getElementById('finder');
  // f.scrollY = 50+50*rpl+'px';
}

async function closemaker(){
  dialogueopened = false;
  let ps = document.getElementById('playlistmaker');
  let ovl = document.getElementById('alloverlay');
  ps.style.display = 'block';
  ovl.style.display = 'block';
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      ps.style.opacity = 1-dimmer/100;
      ovl.style.opacity = ((100-dimmer)/200);
      dimmer += 1;
      await sleep(2);
    }
    ovl.style.display = 'none';
    ps.style.display = 'none';
  })();
}

async function closeexporter(){
  dialogueopened = false;
  let ps = document.getElementById('plexporter');
  let ovl = document.getElementById('alloverlay');
  ps.style.display = 'block';
  ovl.style.display = 'block';
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      ps.style.opacity = 1-dimmer/100;
      ovl.style.opacity = ((100-dimmer)/200);
      dimmer += 1;
      await sleep(2);
    }
    ovl.style.display = 'none';
    ps.style.display = 'none';
  })();
}

async function closesettings(){
  dialogueopened = false;
  let ps = document.getElementById('plsettings');
  let ovl = document.getElementById('alloverlay');
  ps.style.display = 'block';
  ovl.style.display = 'block';
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      ps.style.opacity = 1-dimmer/100;
      ovl.style.opacity = ((100-dimmer)/200);
      dimmer += 1;
      await sleep(2);
    }
    ovl.style.display = 'none';
    ps.style.display = 'none';
  })();
}

async function closelistadder(){
  dialogueopened = false;
  let ps = document.getElementById('addplaylist');
  let ovl = document.getElementById('alloverlay');
  ps.style.display = 'block';
  ovl.style.display = 'block';
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      ps.style.opacity = 1-dimmer/100;
      ovl.style.opacity = ((100-dimmer)/200);
      dimmer += 1;
      await sleep(2);
    }
    ovl.style.display = 'none';
    ps.style.display = 'none';
    window.location.href = 'https://skparab1.github.io/agpbeats';
  })();
}

async function closeadder(){
  dialogueopened = false;
  let ps = document.getElementById('addbeat');
  ps.style.display = 'block';
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      ps.style.opacity = 1-dimmer/100;
      dimmer += 1;
      await sleep(2);
    }
    ps.style.display = 'none';
  })();
}

function createlist(){
  let val = document.getElementById('listname').value;

  if (val != ''){
    playlists.push(val);
    localStorage.setItem('playlists',makestringand(playlists));

    let plc = document.getElementById('allplaylists');
    const div = document.createElement('div');
    div.innerHTML = `<div class="playlist">♫ `+val+`</div>`;

    plc.appendChild(div);

    // close the dialogue
    closemaker();

    window.location.href = window.location.href+'?nointro';
  }
}

function setoverlaylite(ovl,dv){
  ovl.style.position = 'absolute';
  ovl.style.top = dv.offsetTop+25 +'px';
  ovl.style.left = dv.offsetLeft+100 +'px';
}

function addtoplaylist(){
  triggerdaddbeat = true;
}

function addtopl(){
  let ij = 0;
  while (ij < playlists.length){
    try {
      let subj = document.getElementById('check'+ij);
      if (subj.checked){
        playlistcontent[ij] += largebeatarr[currentadder][0];
      }
    } catch (error) {
      // let it pass
    }
    ij += 1;
  }
  console.log(playlistcontent);
  localStorage.setItem('playlistcontent',makestringand(playlistcontent));
  console.log('stored',makestringand(playlistcontent));
  closeadder();
}

function openplaylist(pl){
  let allbeats = document.getElementById('allbeats');
  allbeats.innerHTML = "";

  insecpl = false;

  var div1 = document.createElement('div');
  // add playlist header
  if (pl != 'showallbeats' && pl != 'favorites'){
    div1.innerHTML = `
    <div id='playlistheader' class="beatblocklarge">
    <div class="middleslim" style='float: center;'>
      <div class="leftblock"><h1 class="playliststitle">Playlist: `+playlists[pl]+`</h1></div>
    </div>
    <div class='middleslim' style='z-index:15; padding-top: 2px;'><button class="smbutton" style='z-index:15; width: 40%;' onclick="exportpl(`+pl+`);"><h1 class="buttoncontent" style='z-index:15;'>Export Playlist</h1></button>    </div>
    <div class='middleslim' style='z-index:15; padding-top: 2px;'><button class="smbuttonnoheight" style='z-index:15; width: 40%;' onclick="ploptions(`+pl+`);"><h1 class="buttoncontent" style='z-index:15'>Rename/Delete</h1></button>  </div>
    </div>`;

    allbeats.appendChild(div1);
  }

  let amtadded = 0;
  let ix = 0;
  currentplaylistsongs = [];
  currentplaylist = pl;

  if (pl == 'showallbeats'){
    currentplaylist = -1;
  }

  while (ix < largebeatarr.length){
    const div = document.createElement('div');
    // only add div if its in playlist
    // cheap way but ok

    //console.log(playlistcontent[pl],largebeatarr[ix][0], pl, playlistcontent[pl].toLowerCase().includes(largebeatarr[ix][0].toLowerCase()));
    try {
      if (pl == 'showallbeats' || (pl == 'favorites' && favs[sortpath[ix]] == 'red') || playlistcontent[pl].toLowerCase().includes(largebeatarr[ix][0].toLowerCase())){
        console.log('hi in');

        // this is cuz db isnt working, we dont want it to break
        let ctr = "";
        try {
          ctr = playcounts[sortpath[ix]].plays;
        } catch (error) {
          console.log(error); // very likely due to db not returning stream counts, so its fine
        } 

        div.innerHTML = `
        <div id='beat`+ix+`' class="beatblock" onclick="playbeat(`+ix+`);" onmouseover="beathover('beat`+ix+`')" onmouseout="beatunhover('beat`+ix+`')">
        <div class="fullwidth" onmouseover="currenthover=`+ix+`">
      
          <div class="leftblock"><h1 class="beattitle">`+largebeatarr[ix][0]+`</h1></div>
          <div class="rightblockfav" onclick='favbeat()';><h1 id='heart`+ix+`' class="beatheart" onclick='favbeat();' style='color: `+accessfavs[ix]+`;'>♡</h1></div>
          <div class="rightblockmore" onclick='addtoplaylist()';><h1 id='ellipses`+ix+`' class="beatmore"  style='color: white'>…</h1></div>
      
          <div class='rightblock'><h1 class="beatlength">`+largebeatarr[ix][3]+`</h1></div>
          <div class='rightblockpc' id='pcb`+ix+`'><h1 class="beatlength" id='playct`+ix+`'>▷ `+ctr+`</h1></div>
      
        </div>
        </div>`;
        console.log('hi in');
  
        allbeats.appendChild(div);
        amtadded += 1;

        console.log('added',pl);

        if (pl != 'showalbeats'){
          currentplaylistsongs.push(ix);
        }
      }
    } catch (error) {
      console.log(error);
    }
    
    ix += 1;
  }

  const div = document.createElement('div');
  if (amtadded == 0){
    div.innerHTML = `
    <div id='beat`+ix+`' class="beatblock">
      <div class="fullwidth">
        <div class="leftblock"><h1 class="beattitle">No beats found in current selection :(</h1></div>
      </div>
    </div>`;

    allbeats.appendChild(div);
  }
}

function opensecsongs(){ // openpl but a specific one
  console.log('opened sec',playcountssec);
  let allbeats = document.getElementById('allbeats');
  allbeats.innerHTML = "";

  var div1 = document.createElement('div');

  let amtadded = 0;
  let ix = 0;
  insecpl = true;

  while (ix < secbeats.length){
    const div = document.createElement('div');
    // only add div if its in playlist
    // cheap way but ok

    try {

        let writeplays;
        try {
          writeplays = playcountssec[ix].plays;
        } catch (error) {
          writeplays = '⟳';
        }

        div.innerHTML = `
        <div id='beat`+ix+`' class="beatblockplaylist" onclick="playbeatsec(`+ix+`);">
        <div class="fullwidth" onmouseover="currenthover='sec`+ix+`'">
          <div class="leftblock"><h1 class="beattitle">`+secbeats[ix][0]+`</h1></div>
          <div class='rightblock'><h1 class="beatlength">`+secbeats[ix][3]+`</h1></div>
          <div class='rightblockpc'><h1 class="beatlength" id='playctsec`+ix+`'>▷ `+writeplays+`</h1></div>
        </div>
        </div>`;
  
        allbeats.appendChild(div);

    } catch (error) {
      // it can pass
    }
    
    ix += 1;
  }
}

function exportpl(pl){
  let ps = document.getElementById('plexporter');

  let surl = document.getElementById('shareurl');
  let urc = '';
  let g = 0;
  while (g < largebeatarr.length){
    if (playlistcontent[pl].includes(origlargebeat[g][0])){
      urc = urc+g+'&';
    }
    g += 1;
  }
  console.log(urc);

  let sendurl = 'https://skparab1.github.io/agpbeats?addpl='+playlists[pl]+'&next&'+urc;
  surl.textContent = sendurl.replaceAll(' ','%20').replaceAll('-','D1').replaceAll('"','Q1');
  let ovl = document.getElementById('alloverlay');
  ps.style.display = 'block';
  ovl.style.display = 'block';
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      ps.style.opacity = dimmer/100;
      ovl.style.opacity = dimmer/200;
      dimmer += 1;
      await sleep(2);
    }
  })();
}

function modstation(){
  let station = document.getElementById('hoststationer');
  station = station.value;
  if (hoststatus == ""){
    starthost(station)
  } else {
    stophost();
  }
}

async function modsatelite(){
  y = document.getElementById('shost');
  if (y.textContent == "Join Station"){ // wants to join
    satelitestatus = "";
  }
  let station = document.getElementById('stationname');
  station = station.value;
  if (satelitestatus == ""){
    satelitestatus = station;
    // make the playnext to play once cuz we wanna rely on the broadcasters playlist
    let m = document.getElementById('mode');
    m.value = 'playonce';
    changedmode(); // hehe

    (async () => {
      openelement('connector');

      var d1 = new Date();

      await fetch((`https://pst652.deta.dev/?SPECIFIC=astation${satelitestatus}`))
      .then(response => {
        return response.json();
      })
      .then(data => {
          console.log(data);
          console.log(data.plays);
          // plays is the current beat
          // name is the playing or not

          if (data == undefined){
            closedialogue('connector');
            alert('Error: Station "'+station+'" does not exist');
          } else if (data.name == 'offline'){
            closedialogue('connector');
            alert('Error: Station "'+station+'" offline and currently not broadcasting');
          } else {
            // station ok
            closedialogue('connector');

            openbanner('sateliting');

            let y = document.getElementById('satelitemsg');
            y.textContent = 'Connected to "'+station+'"';
            y = document.getElementById('shost');
            y.textContent = 'Leave "'+station+'"';
            y = document.getElementById('satebanner');
            y.textContent = 'Connected to "'+station+'"';
    
            // start playing if we can
            if (data.name == "playing" && data.plays != syncedbeat){
              (async () => {
                playbeatorig(data.plays);
                audio.pause();
                while (true){
                  var d = new Date();
                  if (d.getSeconds() % 10 == 3){
                    break;
                  }
                  await sleep(2); // dont lag
                }
                audio.play();
              })();
            }
          }
      })

    })();

  } else {
    satelitestatus = "";
    let y = document.getElementById('satelitemsg');
    y.textContent = 'Join a station';
    y = document.getElementById('shost');
    y.textContent = 'Join Station';

    closebanner('sateliting');
  }
}

function terminatesatelite(){
  satelitestatus = "";
  let y = document.getElementById('satelitemsg');
  y.textContent = 'Join a station';
  y = document.getElementById('shost');
  y.textContent = 'Join Station';
  closebanner('sateliting');
}


function starthost(station){
  // basically we create a thing
  //     station name  status song number
  syncdb(station,'paused',currentbeat);
  hoststatus = station;


  openbanner('hosting');

  let y = document.getElementById('sessionmsg');
  y.textContent = 'Currently hosting "'+station+'", joinable at https://skparab1.github.io/agpbeats?joinstation='+station;
  y = document.getElementById('sshost');
  y.textContent = 'Stop hosting';
  y = document.getElementById('hostbanner');
  y.textContent = 'Currently hosting "'+station+'"';
}


function stophost(){
  syncdb(hoststatus,'offline',currentbeat);
  hoststatus = "";
  closebanner('hosting');

  let y = document.getElementById('sessionmsg');
  y.textContent = 'Currently not hosting';
  y = document.getElementById('sshost');
  y.textContent = 'Start hosting';
}

function ploptions(pl){
  dialogueopened = true;
  let ps = document.getElementById('plsettings');
  let ovl = document.getElementById('alloverlay');

  let pln = document.getElementById('plname');
  pln.value = playlists[pl];
  optionspl = pl;

  ps.style.display = 'block';
  ovl.style.display = 'block';
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    dimmer = 0;
    while (dimmer <= 100){
      ps.style.opacity = dimmer/100;
      ovl.style.opacity = dimmer/200;
      dimmer += 1;
      await sleep(2);
    }
  })();
}

function deletepl(){
  playlists[optionspl] = '';
  playlistcontent[optionspl] = '';
  localStorage.setItem('playlists',makestringand(playlists));
  localStorage.setItem('playlistcontent',makestringand(playlistcontent));
  window.location.reload();
}

function renamepl(){
  playlists[optionspl] = document.getElementById('plname').value;
  localStorage.setItem('playlists',makestringand(playlists));
  closesettings();
  window.location.reload();
}

function opensecret(){ // hmm what is the secret
  console.log("ITS A SECRET BOZO");
  // in effect its openplaylist but special
  opensecsongs();
}

function addtoqueue(ix){
  //ix not sorted
  if (!openedqueue){
    openqueue();
  }

  if (String(ix).includes('sec')){ // is a secret
    // just keep it as is ig
  } else {
    ix = sortpath[ix];
  }

  //now sorted
  queue.push(ix);
  renderqueue();
}

function minimizequeue(){
  let y = document.getElementById('minimize');
  if (y.textContent == 'Minimize'){
    let r = document.getElementById('queuebox');
    r.style.top = '90%'
    r.style.height = '45%';
    y.textContent = 'Open';
  } else {
    let r = document.getElementById('queuebox');
    r.style.top = '66%'
    r.style.height = '33%';
    y.textContent = 'Minimize';
  }
}

function clearqueue(){
  queue = [];
  let r = document.getElementById('allqueued');
  r.innerHTML = "";
  closequeue();
}

function openqueue(){
  let r = document.getElementById('queuebox');
  r.style.display = 'block';
  openedqueue = true;
  
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    let u = 100; // this is the percentage of the top
    while (u > 66){
      r.style.top = u+'%';

      await sleep(2);
      u -= 1;
    }
  })();
}

function closequeue(){
  openedqueue = false;
  let r = document.getElementById('queuebox');  
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  (async () => {
    let u = 66; // this is the percentage of the top
    while (u < 100){
      r.style.top = u+'%';

      await sleep(2);
      u += 1;
    }
    r.style.display = 'none';
  })();
}

function queuekick(id,ix){
  // remove from the arr

  let u = queue.indexOf(ix);
  queue.splice(u, 1);
  renderqueue();
}

function renderqueue(){
  let r = document.getElementById('allqueued');

  r.innerHTML = "<div class='queue-overlay' id='progressbar'></div>"; //clear it

  let i = 0;
  while (i < queue.length){
    ix = queue[i];

    const div = document.createElement('div');
  
    let rnum = Math.floor(Math.random() * 1000);
  
    if (String(ix).includes('sec')){ // is a secret
      div.innerHTML = `
    <div id='queue`+rnum+`'class="queue-entry">`+secbeats[parseInt(ix.replace('sec',''))][0]+`</div>`;
    } else {
      div.innerHTML = `
      <div id='queue`+rnum+`'class="queue-entry">`+origlargebeat[ix][0]+`</div>`;  
    }
    
    r.appendChild(div);
  
    let h = document.getElementById('queue'+rnum);
    h = h.offsetTop+h.offsetHeight/6;
  
    const div2 = document.createElement('div');
  
    div2.innerHTML = `
    <div class="trashcan" onclick='queuekick("queue`+rnum+`",`+ix+`);' style='top:`+h+`px'>🗑️</div>`;
  
    r.appendChild(div2);

    i += 1;
  }
}

function playqueue(){
  // change the thing
  if (playingqueue){
    document.getElementById('pq').textContent = '▷';
    playingqueue = false;
    audio.pause();
  } else {
    document.getElementById('pq').textContent = '||';
    playingqueue = true;
    let m = document.getElementById('mode');
    m.value = 'playonce';
    changedmode(); // hehe

    // queue is the queue

    
    if (String(queue[0]).includes('sec')){ // is a secret
      playbeatsec(parseInt(queue[0].replace('sec','')));
    } else {
      playbeatorig(queue[0]);
    }
  }
}

function beathover(id){
  document.getElementById(id).style.backgroundColor = 'rgba(175,100,0,0.85)';
}

function beatunhover(id){
  document.getElementById(id).style.backgroundColor = 'rgba(0,0,0,0)';
}

function showplaylist(){
  let y = document.getElementById('plc');
  y.style.display = 'block';
  const sleep = ms => new Promise(res => setTimeout(res, ms));

  openedpl = true;

  let w = document.getElementById('everything');

  let t1 = document.getElementById('pcb0');
  let startt = t1.offsetLeft;

  (async () => {
    let e = 300;
    while (e > 1){
      e = 0.95*e;
      y.style.marginLeft = e+'px';

      let ix = 0;
      while (ix < largebeatarr.length){
        let t = document.getElementById('pcb'+ix);
        t.style.left = (startt-(10-((e/3)))-90)+'px';
        ix += 1;
      }

      w.style.width = (100-(10-(e/30)))+'%';
      await sleep(2);
    }
  })();
}