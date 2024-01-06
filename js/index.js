// hehe
let playing = false;
let clearmemory = false; // basically a reset

function makestring(inp){
  let j = 0;
  let oup = '';
  while (j < inp.length){
    oup = oup+inp[j]+' ';
    j += 1;
  }
  return oup;
}

function makestringand(inp){
  let j = 0;
  let oup = '';
  while (j < inp.length){
    oup = oup+inp[j]+'&next&';
    j += 1;
  }
  return oup;
}

function arrincludes(arr,cont){
  let y = 0;
  while (y < arr.length){
    if (arr[y] == cont){
      return true;
    }
    y += 1;
  }
  return false;
}

function sortbyfavs(){
  let id1 = 0;
  let firstbeats = [];
  let lastbeats = [];
  let newfavsfirst = [];
  let newfavslast = [];
  let sortpathfirst = [];
  let sortpathlast = [];
  while (id1 < largebeatarr.length){
    if (favs[id1] == 'red'){
      firstbeats.push(largebeatarr[id1]);
      newfavsfirst.push('red');
      sortpathfirst.push(id1);
    } else {
      lastbeats.push(largebeatarr[id1]);
      newfavslast.push('white');
      sortpathlast.push(id1);
    }
    id1 += 1;
  }
  largebeatarr =  firstbeats.concat(lastbeats);
  accessfavs = newfavsfirst.concat(newfavslast);
  sortpath = sortpathfirst.concat(sortpathlast);
}

// this is the one time wipe cuz we changed names
let otw = localStorage.getItem('otw');
if (otw == null){
  // wipe
  clearmemory = true;
  localStorage.setItem('otw','something');
}

// define the beats
// 2d arr of all beat data
// like this [beatname,imgsrc,beatsrc,length]
let largebeatarr = [['Yeat Type Beat - "Rope"','beat.png','cut the rope type beat.wav','1:38'],['Ken Carson x Yeat Type Beat - "Demon Time"','beat.png','demon beat 5.wav','2:13'],['Yeat x Lyfe type beat - "Madness"','beat.png','demon beat 6.wav','1:39'],['void Type Beat - "Mystic"','beat.png','demon beat 7.wav','1:32'],['Yeat x Lyfe Type Beat - "Movin"','beat.png','demon beat 8.wav','1:58'],['Lil Yachty Type Beat - "South Pole"','beat.png','demon beat 9.mp3','2:01'],['Pop Smoke x Fivio Foreign Type Beat - "Streets"','beat.png','drill beat 2.wav','1:49'],['Yeat x Ken Carson Type Beat - "Rager"','beat.png','fire rage beat.mp3','1:43'],['Summrs Type Beat - "Pac"','beat.png','first plugg beat.wav','1:33'],['Playboi Carti Flatbed Freestyle Remake','beat.png','flatbed freestyle remake.wav','0:56'],['Playboi Carti x Self Titled Type Beat - "Pour it up"','beat.png','flute beat 1.mp3','1:35'],['Yeat Type Beat - "Happy Bout That"','beat.png','generic yeat type beat.wav','1:06'],['Yeat Type Beat - "Busy"','beat.png','get busy type beat.wav','1:44'],['Playboi Carti x Die Lit Type Beat - "Feelings"','beat.png','goofy beat 2.wav','1:39'],['Pierre Bourne Type Beat - "Heaven"','beat.png','heavenly beat.wav','1:57'],['Jazz Type Beat','beat.png','jazz type beat.wav','1:16'],['Yeat Type Beat - "Mapping"','beat.png','lava_map_pacman.mp3','3:34'],['Playboi Carti Long Time Remake','beat.png','long time remake.wav','1:20'],['Trippie Redd x Pierre Bourne Type Beat - "X\'s"','beat.png','mellow beat 3.wav','2:16'],['Lil Uzi Vert Type Beat - "Eternal"','beat.png','mellow beat 4.wav','1:56'],['Playboi Carti x Die Lit Type Beat - "Emotions"','beat.png','mellow beat 5.wav','2:26'],['Lil Baby Type Beat - "Cash"','beat.png','mellow beat 7.wav','1:58'],['Playboi Carti Type Beat - "Cash"','beat.png','mellow beat 8.wav','1:02'],['Lil Tecca x Lil Baby Type Beat - "Let it Go"','beat.png','mellow beat 9.wav','1:12'],['J. Cole x Lil Baby Type Beat - "False"','beat.png','mellow beat 11.wav','1:17'],['Lil Uzi Vert x Trippie Redd Type Beat - "Lost Cause"','beat.png','mellow beat 12.mp3','2:24'],['Yeat x Ken Carson Type Beat - "Stacks"','beat.png','money so big type beat.wav','2:10'],['Phonk Type Beat','beat.png','morbius type beat (phonk).wav',"0:51"],['Playboi Carti x Self Titled Type Beat - "Summer Days"','summerdays.png','organ beat.wav','2:15'],['Video Game Type Beat - "Stars"','beat.png','pacman_racetrack_map.mp3','2:41'],['Playboi Carti Type Beat - "WLR"','carti.png','playboi carti wlr type beat.wav','2:08'],['Autumn! Type Beat - "Sleep"','beat.png','plugg beat 3 (sleepy beat).wav','1:01'],['Kankan x Summrs Type Beat - "Temptations"','beat.png','plugg beat 4.wav','1:34'],['Summrs Type Beat - "iPhone"','beat.png','plugg beat 5.wav','2:02'],['Autumn! x Kankan Type Beat - "Pipes"','beat.png','plugg beat 6.wav','1:20'],['Baby Santana x PnB Rock Type Beat - "God"','beat.png','plugg beat 7.wav','1:00'],['Autumn! x Summrs type beat - "over"','beat.png','plugg beat 8.wav','1:28'],['Autumn! x Summrs Type Beat - "Heart Break" ','beat.png','plugg beat 9.wav','2:11'],['Kankan Type Beat - "L34N"','beat.png','plugg beat 10.wav','1:07'],['Kankan Type Beat - "Fans"','beat.png','plugg beat 11.wav','1:16'],['Summrs x Autumn! type beat - "Equation"','beat.png','plugg beat 13.mp3','2:05'],['Summrs x Autumn! type beat - "Life"','beat.png','plugg beat 14.mp3','1:31'],['Lil Uzi Vert x Trippie Redd Type Beat - "Tripping"','beat.png','rage type beat 10.wav','2:02'],['Playboi Carti x Self Titled Type Beat - "Pour it up 2"','beat.png','reversed melody beat.wav','1:55'],['Summrs Type Beat - "Plug"','beat.png','second_plugg_beat.wav','2:48'],['J. Cole Type Beat - "Brass"','beat.png','simple victory beat.wav','0:52'],['Yeat Type Beat - "Halloween"','beat.png','spooky_beat.mp3','5:23'],['Playboi Carti x Pierre Bourne Type Beat - "Rich"','beat.png','synth beat 1.mp3','1:54'],['Lil Baby x NBA Youngboy Type Beat - "To the Lost Homies"','beat.png','to the lost homies.wav','0:50'],['Lil Baby x Lil Durk Type Beat - "Trenches"','beat.png','trap sad piano beat.wav','2:06'],['Pop Smoke Type Beat - "Twinkle"','beat.png','twinkle drill.mp3',"3:26"],['Kanye West Type Beat - "Dear Matthew"','beat.png','Untitled_song-11.wav','1:01'],['Playboi Carti x UnoTheActivist Type Beat - "Nostalgia"','beat.png','video game type beat 2.wav','1:58'],['Lil Baby x Gunna Type Beat - "Wavy"','beat.png','Wavy beat.wav','1:03'],['Playboi Carti Type Beat - "Fangs"','beat.png','wlr type beat 2.wav','1:56'],['Ken Carson Type Beat - "I\'m Winning"','beat.png','wlr type beat 3.wav','1:30'],['Kankan Type Beat - "H1GH3R TH4N G0D"','beat.png','arcade_type_beat.mp3','2:12'],['Lil Durk x NBA Youngboy Type Beat - "To the Lost Homies 2"','beat.png','emotional_piano_beat.mp3','3:15'],['Playboi Carti x Self Titled Type Beat - “Marigold”','beat.png','flute_beat_2(1).mp3','2:09'],['Gunna Type Beat - "Litty"','beat.png','guitar_beat_fire.mp3','2:31'],['Playboi Carti x Pierre Bourne Type Beat - "Drank"','beat.png','mellow_beat_13.mp3','3:56'],['Plants vs. Zombies Type Beat','beat.png','pvz_type_beat.mp3','4:25'],['Yeat Type Beat - "Spooky"','beat.png','spooky_beat2.mp3','3:05'],['Yeat Type Beat - "Alive"','beat.png','yeat_beat_alive_2.mp3','1:24'],['Juice Wrld Type Beat - "Fallen Soldiers"','beat.png','beautiful_guitar_synth_beat.mp3','2:12'],['Playboi Carti x Die Lit Type Beat - "Soda"','beat.png','mellow_beat_14.mp3','2:46'],['NBA Youngboy Type Beat - "Darkness"','beat.png','fire_piano_beat.mp3','3:42'],['Summrs Type Beat - "Problem"','beat.png','pluggnb_type_beat_-_problems.mp3','2:45'],['Trippie Redd Type Beat - "Jarring"','beat.png','rage_finale.mp3','2:34'],['Yeat Type Beat - "Revival"','beat.png','alive_yeat_beat_part_2.mp3','3:01'],['Playboi Carti x Whole Lotta Red Type Beat - "0P1UM"','beat.png','opium.mp3','3:25'],['Playboi Carti Type Beat - "M3D$"','beat.png','bobraja_freestyle_beat_remake.mp3','2:06'],['Pierre Bourne Type Beat - "Demonic"','beat.png','demon_10.mp3','2:23'],['Trippie Redd Type Beat - "Tomorrow"','beat.png','rage_type_beat_5_9.mp3','3:06'],['Trippie Redd Type Beat - "Miss the Rage"','beat.png','mtr_rip_off_beat.mp3','3:17'],['UnoTheActivist x Mexikodro Type Beat - "Future"','beat.png','UnoTheActivist_x_Mexikodro_Type_Beat_-_future.mp3','2:28'],['Lil Pump Type Beat - "War"','beat.png','war_type_beat.mp3','2:10'],['Kankan Type Beat - "Trap"','beat.png','kankan_type_beat_-_trap.mp3','2:15'],['Kankan Type Beat - "Clouds"','beat.png','kankan_type_beat_-_clouds.mp3','2:46'],['Trippie Redd Type Beat - "Cartoon"','beat.png','rage_type_beat_3_album(2).mp3','2:29'],['Pierre Bourne Type Beat - "Location"','beat.png','Pierre_Bourne_Type_Beat_-_Location.mp3','2:33']];
let origlargebeat = largebeatarr;
let secbeats = [['Bob Raja Ultimate Mix','raja.png','abhinav_raja_ultimate_mix.mp3','4:05'],['Summrs x Autumn! type beat - "Equation" ft. Bob Raja','raja.png','plugg_beat_13-2.mp3','1:32'],['Rage Type Beat 2 ft. Bob Raja','raja.png','rage_type_beat_2_album_ft_bobraja.mp3','4:07'],['"To the lost homies" ft. Bob Raja','raja.png','Bob_-_to_the_lost_homies_Prod._AGP_1.mp3','1:24'],['Demon Beat 8 ft. Bob Raja','raja.png','bobraja_demon_8.mp3','2:02'],['"To the lost Homies 2" ft. Bob Raja Eshwar','raja.png','bobraja_ft_eshwar_-_to_the_lost_homies_pt2.mp3','4:22'],['"Emotional Guitar Beat" ft. Bob Raja','raja.png','emotional_guitar_beat__bobraja.mp3','3:09'],['"Heavenly Beat 2" ft. Bob Raja','raja.png','heavenly_beat_2__bobraja.mp3','4:58'],['"Mellow Beat 10" ft. Bob Raja','raja.png','mellow_beat_10_bobraja_second_version.mp3','2:33'],['"Mellow Beat 12" ft. Bob Raja','raja.png','mellow_beat_12_ft_bobraja.mp3','2:24'],['"Plugg Beat 14" ft. Bob Raja','raja.png','plugg_beat_14_bobraja.mp3','1:33'],['"To the lost Homies" ft. Bob Raja 2"','raja.png','to_the_lost_homies_2.mp3','1:40'],['"To the lost Homies 3" ft. Bob Raja','raja.png','to_the_lost_homies_3.mp3','1:40'],['"To the lost Homies" meme version ft. Bob Raja','raja.png','to_the_lost_homies_meme_version.mp3','1:40'],['"To the lost Homies" official version ft. Bob Raja','raja.png','to_the_lost_homies_official_version.mp3','1:40'],['"Twinkle Drill" ft. Bob Raja','raja.png','twinkle_drill_bobraja.mp3','3:27'],['"4bobraja" ft. Bob Raja','raja.png','bobraja4.mp3','1:05'],['"Twinkle drill 2" ft. Bob Raja','raja.png','twinkle_drill_bobraja_2.mp3','3:39'],['"Twinkle drill 3" ft. Bob Raja','raja.png','twinkle_drill_bobraja3.mp3','3:27'],['NBA Youngboy Type Beat "Darkness" ft. Bob Raja','raja.png','fire_piano_beat_ft_bobraja.mp3','4:02'],['Kankan Type Beat "Clouds" ft. Bob Raja','raja.png','kankan_type_beat_-_clouds_ft_bobraja.mp3','2:46'],['"Mtr rip off" ft. Bob Raja','raja.png','mtr_rip_off_ft_bobraka.mp3','3:17'],['"War" ft. Bob Raja','raja.png','bobraja_war.mp3','2:10'],['"1H4T3V3G" ft. Bob Raja','raja.png','Bobraja_corn.mp3','2:15'],['Trippie Redd Type Beat - “Demonic” ft Bobraja','raja.png','demon_beat_10_ft_bobraja.mp3','2:23'],['Aarit synth beat song ft Bobraja','raja.png','aarit_synth_beat_song.mp3','2:00'],['Bobraja freestyle ft Bobraja','raja.png','bobraja_freestyle.mp3','1:29'],['Emotional piano beat 2 ft bobraka','raja.png','emotional_piano_beat_2_ft_bobraka.mp3','2:38'],['"Fallen Soldiers" ft Bobraja','raja.png','fallen_soldiers_ft_bobraja.mp3','2:12'],['"Problem" ft Bobraja','raja.png','problem_ft_bobraja.mp3','2:45'],['Rage type beat "Million" ft Bobraja','raja.png','rage_type_beat_million_ft_bobraja.mp3','2:14'],['"revival" ft Bobraja"','raja.png','revival_ft_bobraja.mp3','3:01'],['"Dunk on the opps" ft Bobraja"','raja.png','dunk_on_the_opps_ft_bobraja.mp3','2:02'],['Rage 7 ft Bobraja','raja.png','rage_7_prototype_ft_bobraja(1).mp3','3:00'],['"Opps be talkin" ft. Bobraja','raja.png','opps_be_talkin_ft_bobraja.mp3','1:53'],['"Plugg 18" ft. Bobraja','raja.png','plugg_beat_18_ft_bobraja.mp3','2:19'],['"Where we at" ft. Bobraja','raja.png','bobraja_-_where_we_at.mp3','3:29'],['"memories" ft. Bobraja','raja.png','plugg_beat_-_memories_ft_bobraja(1).mp3','3:08'],['"Sorry from the bottom of my heart" ft. Bobraja','raja.png','sorry_from_the_bottom_of_my_heart_-_bobraja.mp3','2:46'],['"Trappin" ft. Bobraja','raja.png','raka.png','bobraja_-_trappin.mp3','2:13']];
let insecpl = false;
let keybindarr = ["","","","","","","",""];
let currentpc = 0;

var queue = [];
var currenthover = -1;
var openedqueue = false;
var playingqueue = false;
var finishedqueue = false;


// dont do stuff
var justplayed = -1;
var startedbeat = 0;

var openedpl = false;

// station hosting 
let hoststatus = "";
let satelitestatus = ""; // or a particular station
let syncedbeat = -1;

console.log(largebeatarr.length);

var playcounts = [];
var playcountssec = [];

var returndata = [0,0,0];
fetch(("https://pst652.deta.dev/?GET1"))
  .then(response => {
      return response.json();
  })
  .then(data => {
      console.log(data);
      returndata[0] = data;
  })
fetch(("https://pst652.deta.dev/?GET2"))
  .then(response => {
      return response.json();
  })
  .then(data => {
      console.log(data);
      returndata[1] = data;
  })
fetch(("https://pst652.deta.dev/?GET3"))
  .then(response => {
      return response.json();
  })
  .then(data => {
      console.log(data);
      returndata[2] = data;
  })
fetch(("https://pst652.deta.dev/?GET4"))
  .then(response => {
      return response.json();
  })
  .then(data => {
      console.log(data);
      playcountssec = data;
  })


let sortpath = [];
let favs = localStorage.getItem('favbeats');
if (favs == null || clearmemory){
  let c = 0;
  favs = [];
  while (c < largebeatarr.length){
    favs.push('white');
    c += 1;
  }
  localStorage.setItem('favbeats',makestring(favs));
} else {
  favs = favs.split(' ');
}

// get the playlists
let playlists = localStorage.getItem('playlists');
if (playlists == null || clearmemory){
  playlists = [];
  localStorage.setItem('playlists',makestringand(playlists));
} else {
  playlists = playlists.split('&next&');
}

let playlistcontent = localStorage.getItem('playlistcontent');
console.log(playlistcontent);
if (playlistcontent == null || clearmemory){
  let c = 0;
  playlistcontent = [];
  while (c < playlists.length){
    playlistcontent.push('');
    c += 1;
  }
  localStorage.setItem('playlistcontent',makestring(playlistcontent));
} else {
  playlistcontent = playlistcontent.split('&next&');
}

console.log(playlistcontent);

let currentplaylist = -1;
let currentplaylistsongs = [];
let gottem = false;

// access accesfavs but change favs
let accessfavs = favs;
//basically whenever you want to get the fav of something get it from accessfavs
// but when you wanna write then convert it using sortpath and then write to favs
// the actual original order is sortpath[new order] previos order

//console.log(favs);
sortbyfavs();
console.log(sortpath);
// basically sortpath is like this
// sortpath(x) where x is index in current sort will be original index

let squery = '';
let lquery = '';
let currentresults = '';
let searcheron = -1;
let searcheropen = false;
let dialogueopened = false;
let randomxplayed = [];
let currentadder = 0;
let triggeredfav = false;
let triggerdaddbeat = false;
let currentbeat = 0;
var audio = new Audio(largebeatarr[0][2]); // this shudnt be overriden

// for importing plauylist
var addingname = '';
var addingcont = '';
// for editing
var optionspl = 0;

var audiomode = localStorage.getItem('audiomode');
if (audiomode == null){
  localStorage.setItem('audiomode','playonce');
  audiomode = 'playonce';
}
let md = document.getElementById('mode');
md.value = audiomode;

var notif1 = localStorage.getItem('notif1');
if (notif1 == null || notif1 == 'again'){
  openelement('notif1');
}

var storedvol = parseInt(localStorage.getItem('storedvol'));
if (storedvol == null){
 storedvol = 100;
 localStorage.setItem('storedvol','100');
}

audio = new Audio('rage_type_beat_1_album.mp3');

let pw;
let tk;
(async () => {
  const data1 = await fetch('tokens/tk.json').then(r => r.json());
  pw = data1.data[0];
  pw = JSON.stringify(pw);
  pw = pw.replace('{"pwd":"','').replace('"}','');

  const data2 = await fetch('tokens/tk2.json').then(r => r.json());
  tk = data2.data[0];
  tk = JSON.stringify(tk);
  tk = tk.replace('{"pwd":"','').replace('"}','');
  //console.log('THIS',pw);
})();

(async () => {
  let counter = -50;
  let counter2 = -3*window.innerWidth/4+2000;
  let counter3 = 0;
  let counter4 = 0;

  const sleep = ms => new Promise(res => setTimeout(res, ms));

  function positify(x){
    if (x >= 0){ 
      return x 
    } else {
      return 0
    }
  }

  function setoverlay(ovl,dv){
    ovl.style.top = dv.offsetTop +'px';
    ovl.style.left = dv.offsetLeft +'px';
    ovl.style.height = dv.offsetHeight +'px';
    ovl.style.width = dv.offsetWidth +'px';
  }

  function setoverlaylite(ovl,dv){
    ovl.style.position = 'absolute';
    ovl.style.top = dv.offsetTop+25 +'px';
    ovl.style.left = dv.offsetLeft+100 +'px';
  }

  function setoverlayicon(ovl,dv,pushback,pushl){
    ovl.style.position = 'absolute';
    ovl.style.top = (dv.offsetTop+25-pushback) +'px';
    ovl.style.left = dv.offsetLeft+100+pushl +'px';
  }

  function formatsec(sec){
    sec = Math.floor(sec);
    let mins = Math.floor(sec/60);
    sec = sec % 60;
    if (String(sec).length == 1){
      sec = '0'+String(sec);
    }

    return mins+":"+sec;
  }

  function revealmore(x){
    let l = document.getElementById('more');
    l.style.display = 'block';
    l.style.opacity = 0;
    // nvm ignore the opacity stuff
    let c = 0;
    (async () => {
      while (c < 100){
        l.style.opacity = 0;
        await sleep(2);
        c += 1;
      }
    })();
  }

  // def all teh consts
  let h1 = document.getElementById('header1');
  let h2 = document.getElementById('header2');
  let h3 = document.getElementById('header3');
  //h1.addEventListener('mouseover',colorize(h1));

  let fav = document.getElementById('fav');
  let title = document.getElementById('title');
  let nav = document.getElementById('nav1');
  let head = document.getElementById('head');
  let head1 = document.getElementById('head1');
  let head2 = document.getElementById('head2');

  let nowplaying = document.getElementById('nowplaying');

  let mainimg = document.getElementById('mainimg');

  let beatimg = document.getElementById('beatimg');
  //beatimg.addEventListener('mouseover', showplaypause() , false);

  let ctime = document.getElementById('currenttime');
  let ttime = document.getElementById('totaltime');

  let playimg = document.getElementById('playimg');
  let pauseimg = document.getElementById('pauseimg');

  let voldisp = document.getElementById('volumedisp');
  let volumer = document.getElementById('volumer');


  let timekeeper = document.getElementById('timekeeper');

  timekeeper.oninput = function() {
    let pc = this.value/100;
    audio.currentTime = Math.floor(audio.duration*pc);
  } 

  let playnow = document.getElementById('playnow');
  let nowname = document.getElementById('nowplayingname');

  let controls = document.getElementById('controlsbox')
  controls.style.position = 'absolute';
  controls.style.left = window.innerWidth*75/100 +'px';;
  controls.style.marginTop = '112px';
  
  controls.style.zIndex = 8;

  let allbeats = document.getElementById('allbeats');

  let hc = document.getElementById('hcontainer');
  let hol = document.getElementById('headoverlay');
  hol.style.top = head.offsetTop +'px';
  hol.style.left = head.offsetLeft +'px';
  hol.style.height = head.offsetHeight +'px';
  hol.style.width = head.offsetWidth +'px';

  let htop = head.offsetTop;


  // for cool effect


  // canvas

  // this is the base
  //ctx.fillRect(ps.offsetLeft,ps.offsetTop,ps.offsetWidth,ps.offsetHeight);
  buttonglower = 0;

  linemaker = 0;
  linemaker2 = 0;
  savelmaker1 = 0;
  brightner1 = 0;
  brightner2 = 0;
  brightner3 = 0;
  brightner4 = 0;
  brightner5 = 0;
  brightner6 = 0;
  brightner7 = 0;
  brightner8 = 0;


  while (true){
    if (counter <= 100){
      let cl = (counter/100)*255;
      let cl2 = cl*2-255/2;
      let dimclr = 'rgb('+cl+','+cl+','+cl+')';
      let dimclr2 = 'rgb('+cl2+','+cl2+','+cl2+')';

      // header fade
      h1.style.color = dimclr;
      h2.style.color = dimclr;
      h3.style.color = dimclr;

      fav.style.opacity = cl/255;
      title.style.color = dimclr;
      nav.style.borderColor = dimclr;
      //head.style.color = 'rgb('+cl+','+cl+','+cl+')';


      //hol.style.width = head.offsetWidth*(counter/100) +'px';
      //hol.style.backgroundImage = 'linear-gradient(to right,rgba(0,0,0,'+(1-(counter/100))+'),rgba(0,0,0,'+(1-(counter/1000))+'))';

    
      if (!window.location.href.includes('nointro') || true){
        await sleep(2);
      }



      if (counter <= 100){
        counter = counter + (105-counter)/100;
      }
    } else {
      counter += 1;
      await sleep(2);
    }

    if (playingqueue){
      document.getElementById('progressbar').style.width = (audio.currentTime/audio.duration)*100+'%';
    }

    if (satelitestatus != ""){ // connected to a station
      var d = new Date();

      if (d.getSeconds() % 10 == 0){
        // time to check
        await fetch((`https://pst652.deta.dev/?SPECIFIC=astation${satelitestatus}`))
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(data.plays);
            // plays is the current beat
            // name is the playing or not

            if (data.name == 'offline'){
              alert('Station "'+satelitestatus+'" has ended its broadcast')
              terminatesatelite();
            }

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
        })
      }
    }

    if (returndata[0] != 0 && returndata[1] != 0 && returndata[2] != 0){ //gottem all
      playcounts = returndata[0].concat(returndata[1].concat(returndata[2]));
      console.log(playcounts);
      let s = 0;

      (async () => {

        while (s < largebeatarr.length){
          try {
            let g = document.getElementById('playct'+s);
            g.textContent = "▷ "+playcounts[sortpath[s]].plays;  
          } catch (error) {
            // its fine
          }

          await sleep(15);
          s += 1;
        }
      })();
      returndata = [0,0,0,0]; //dont do it again
    }

    counter2 -= 6;

    let f = document.getElementById('pwd');
    if (f.value == pw || (window.location.href == 'file:///Users/homemac/Desktop/Programming/Otherprograms/agpbeats/index.html' && f.value == 'a')){ // so i can aceess it hehe
      f.value = "";
      closedialogue('pwdask');
      opensecret();
      // validate the ls
      localStorage.setItem('rajavault','validated');
    }

    if (counter2 > -3*window.innerWidth/4){
      // ends when 2000-counter2 == 3*window.innerWidth/4
      //so from counter2 = 0 to counter == -3*window.innerwidth/4+2000
      // we want start at that

      document.body.style.background = 'black';
      
      hol.style.left = counter/50+'px';
      hol.style.width = (2000-counter2)+'px';
      
    } else {
      head.style.display = 'none';
      nowplaying.style.display = 'inline-block';
      counter3 += 1;
      nowplaying.style.opacity = counter3/100;
      hol.style.display = 'none';

      let f = document.getElementById('plc');
      f.style.opacity = counter3/300;

      let n = document.getElementById('nav');
      // nav.style.backgroundColor = 'black';
      nav.style.opacity = counter3/100;

      //document.body.style.backgroundImage = 'url("bg.png")';
      let b = document.getElementById('bg1');
      b.style.opacity = (counter3/550);

      let y = document.getElementById('nowplaying');
      y.style.top = document.getElementById('placeholder').offsetTop+"px";
      if (window.scrollY > y.offsetTop){
        //console.log('hitter');
        // let z = document.getElementById('placeholder');
        // z.style.display = 'block';
        // t = y.offsetLeft;
        // y.style.position = 'fixed';
        // y.style.top = document.getElementById('placeholder').offsetTop/4+"px";
        // y.style.left = 3*t/4+'px';
      }

      controls.style.top = (-80)+'px';

      beatimg.style.position = 'absolute';
      setoverlayicon(beatimg,y,document.getElementById('placeholder').offsetTop/2,100);
      playimg.style.position = 'absolute';
      setoverlayicon(playimg,y,document.getElementById('placeholder').offsetTop/2,100);
      pauseimg.style.position = 'absolute';
      setoverlayicon(pauseimg,y,document.getElementById('placeholder').offsetTop/2,100);

      allbeats.style.opacity = counter3/200;
    }

    counter4 += 1;


    var mutelineclr = 'rgb(50,50,50)';
    var brightlineclr = 'rgb(100,100,100)';

    // basically glow the buttons sequentially
    // so we have the button
    // bt1
    // the intensity is distance from mid = 50

    // upgrade the button stuff
    buttonglower += 0.5;
    
    if (buttonglower >= 500){
      buttonglower = 0;
    }

    
    if (lquery != document.getElementById('query').textContent){
      console.log('hit');
      let c = document.getElementById('query');
      lquery = c.textContent;
      searcher(c.textContent);
    }

    localStorage.setItem('storedvol',String(volumer.value));
    audio.volume = volumer.value/100;
    voldisp.textContent = 'Vol: '+String(volumer.value)+'%';

    // controls.style.left = window.innerWidth*70/100 +'px';;

    ctime.textContent = formatsec(audio.currentTime);
    ttime.textContent = formatsec(audio.duration);


    //detadb(('song'+sortpath[ix]),(largebeatarr[ix][0].replaceAll(" ",'').replaceAll('"','').replaceAll("-",'')),cp);

    if (audio.currentTime >= audio.duration && !finishedqueue){
      playnextbeat();
    }

    // let n1 = document.getElementById('nav1');

    // if (window.scrollY > n1.offsetHeight){
    //   nowplaying.style.position = 'fixed';
    //   nowplaying.style.top = n1.offsetHeight+'px';
    // }

    //let pc = Math.floor(timekeeper.value/100);
    //audio.currentTime = audio.duration*pc;
    timekeeper.value = (audio.currentTime/audio.duration)*100;
  }
})();


// we can generate the lengths
let iterator = 0;

let ix = 0;
while (ix < largebeatarr.length){
  const div = document.createElement('div');
  div.innerHTML = `
  <div id='beat`+ix+`' class="beatblock" onclick="playbeat(`+ix+`);" onmouseover="beathover('beat`+ix+`')" onmouseout="beatunhover('beat`+ix+`')">
  <div class="fullwidth" onmouseover="currenthover=`+ix+`">

    <div class="leftblock"><h1 class="beattitle">`+largebeatarr[ix][0]+`</h1></div>
    <div class="rightblockfav" onclick='favbeat()';><h1 id='heart`+ix+`' class="beatheart" onclick='favbeat();' style='color: `+accessfavs[ix]+`;'>♡</h1></div>
    <div class="rightblockmore" onclick='addtoplaylist()';><h1 id='ellipses`+ix+`' class="beatmore"  style='color: white'>…</h1></div>

    <div class='rightblock'><h1 class="beatlength">`+largebeatarr[ix][3]+`</h1></div>
    <div class='rightblockpc' id='pcb`+ix+`'><h1 class="beatlength" id='playct`+ix+`'>▷ </h1></div>

  </div>
  </div>`;

  allbeats.appendChild(div);
  ix += 1;
}

let plc = document.getElementById('allplaylists');
let allp = document.getElementById('alloptions');

ix = 0;
while (ix < playlists.length){
  const div = document.createElement('div');
  
  if (playlists[ix] != ''){
    div.innerHTML = `<div class="playlist" onclick='openplaylist(`+ix+`);'>`+playlists[ix]+`</div>`;
    plc.appendChild(div);
  }

  if (ix >= 0 && playlists[ix] != ''){
    const div2 = document.createElement('div');
    div2.innerHTML = `  <input id='check`+ix+`' type="checkbox">
    <label style='font-size: 15px; color: white;'>`+playlists[ix]+`</label><br>`;
    allp.appendChild(div2);
  }

  ix += 1;
}

const sleep = ms => new Promise(res => setTimeout(res, ms));
(async () => {

  // if u wanna play using url path
  let url = window.location.href;
  //console.log(ur);
  let ur = url.replace('file:///Users/homemac/Desktop/Programming/Otherprograms/agpbeats/index.html?','');
  ur = ur.replace('https://skparab1.github.io/agpbeats/?','');
  ur = ur.replace('https://skparab1.github.io/agpbeats?','');
  ur = ur.replaceAll('%20',' ');
  // ok u know my laptop directories so what

  if (ur.includes('addpl=')){
    // ur importing a playlist
    ur = ur.replace('addpl=','');
    let content = ur.split('&next&');
    let listname = content[0];
    content = content[1];
    content = content.replaceAll('D1','-');
    content = content.replaceAll('Q1','"');
    content = content.split('&');

    let endcontent = '';
    let y = 0;
    while (y < content.length){
      endcontent += origlargebeat[parseInt(content[y])];
      y += 1;
    }

    let stcont = content.length-1;
    content = endcontent;

    openplaylistadder();
    let g = document.getElementById('addornot');
    g.textContent = 'Do you want to add the playlist "'+listname+'" ('+stcont+' beats)?';
    addingname = listname;
    addingcont = content;
  }

  if (ur.includes('joinstation=')){
    // ur importing a playlist
    ur = ur.replace('joinstation=','');
    let station = document.getElementById('stationname');
    station.value = ur;
    // ur is the station
    openelement('satelitemode');

  }
  
  await sleep(2000);

  let urmom = 0;
  while (urmom < largebeatarr.length && url != 'file:///Users/homemac/Desktop/Programming/Otherprograms/agpbeats/index.html' && url != 'https://skparab1.github.io/agpbeats' && url != 'https://skparab1.github.io/agpbeats/' && !url.includes('nointro') && !url.includes('addpl')){
    if (largebeatarr[urmom][0].toLowerCase().includes(ur.toLowerCase())){
      // thats the beat
      playbeat(urmom);
      playtoggle();
    }
    console.log(ur,largebeatarr[urmom][0].toLowerCase());
    urmom += 1;
  }

  if (ur.includes('play=')){
    ur = ur.replace('play=','');
    ur = parseInt(ur);

    urmom = 0;
    while (urmom < origlargebeat.length && url != 'file:///Users/homemac/Desktop/Programming/Otherprograms/agpbeats/index.html' && url != 'https://skparab1.github.io/agpbeats' && url != 'https://skparab1.github.io/agpbeats/' && !url.includes('nointro') && !url.includes('addpl')){
      if (ur == urmom){
        // thats the beat

        playbeatorig(urmom);
        playtoggle();
      }
      urmom += 1;
    }
  }
  
})();

window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});

(async () => {
  window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      return;
    }
  
    let actkey = event.code.replace('Key','').replace('Digit','')
    let filterletters = 'QWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    //console.log('pressed'+actkey);

    keybindarr[0] = keybindarr[1];
    keybindarr[1] = keybindarr[2];
    keybindarr[2] = keybindarr[3];
    keybindarr[3] = keybindarr[4];
    keybindarr[4] = keybindarr[5];
    keybindarr[5] = keybindarr[6];
    keybindarr[6] = keybindarr[7];
    keybindarr[7] = actkey;

    console.log(keybindarr);

    if (keybindarr[5] == "Q" && keybindarr[6] == "W" && keybindarr[7] == "E" && currenthover != -1 && !dialogueopened){
      addtoqueue(currenthover);
      keybindarr = ["","","","","","","",""];
    }

    if (keybindarr[4] == "S" && keybindarr[5] == "K" && keybindarr[6] == "I" && keybindarr[7] == "P"){
      try {
        console.log('git it')
        playnextbeat();//hehe
      } catch {

      }
      keybindarr = ["","","",""];
    }

    //satelitemode
    if (keybindarr[4] == "S" && keybindarr[5] == "A" && keybindarr[6] == "T" && keybindarr[7] == "E" && hoststatus == ""){
      openelement('satelitemode');
      keybindarr = ["","","",""];
    }

    //satelitemode
    if (keybindarr[4] == "H" && keybindarr[5] == "O" && keybindarr[6] == "S" && keybindarr[7] == "T" && satelitestatus == ""){ // anyone can hmm
      openelement('stationhoster');
      keybindarr = ["","","",""];
    }

    if (keybindarr[1] == "R" && keybindarr[2] == "A" && keybindarr[3] == "K" && keybindarr[4] == "A" && keybindarr[5] == "1" && keybindarr[6] == "2" && keybindarr[7] == "3"){ // anyone can hmm
      opensecret();
    }

    if (actkey == 'Space' && !dialogueopened){
      playtoggle();
    }
    if (actkey == 'ArrowRight'){
      skipahead(5);
    }
    if (actkey == 'ArrowLeft'){
      skipahead(-5);    
    }

    if (actkey == 'F' && !dialogueopened){
      event.preventDefault();
      openfinder();
    } else { // you can do it if ur not invoking the opener
      let ascii = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ1234567890';
      if (searcheropen && (ascii.includes(actkey) || actkey == 'Space')){
        let q = document.getElementById('query');
        q.textContent = q.textContent+actkey.toLowerCase().replace('space',' ');
        searcheron = -1;
      } else if (searcheropen && actkey == 'Backspace'){
        let q = document.getElementById('query');
        q.textContent = q.textContent.substring(0,q.textContent.length-1);
        searcheron = -1;
      } else if (searcheropen && actkey == 'Enter'){
        if (searcheron == -1){
          closefinder();
        } else {
          playbeat(parseInt(currentresults[searcheron]));
          closefinder();
        }
      } else if (searcheropen && actkey == 'ArrowDown'){
        searcheron += 1;
        updaterhighlight(searcheron-1,searcheron);
        event.preventDefault();
      } else if (searcheropen && actkey == 'ArrowUp'){
        searcheron -= 1;
        updaterhighlight(searcheron+1,searcheron);
        event.preventDefault();
      } else if (searcheropen && actkey == 'Escape'){
        closefinder();
      }
    }

    if (searcheron < -1){
      searcheron = -1;
    }

    if (actkey == 'ArrowUp' && !dialogueopened){
      if (insecpl){
        playbeatsec(currentbeat-1);
      } else if (currentplaylist == -1){
        playbeat(currentbeat-1);
      } else {
        playbeat(currentplaylistsongs[currentplaylistsongs.indexOf(currentbeat)-1]);
      }
    }
    if (actkey == 'ArrowDown' && !dialogueopened ){
      if (insecpl){
        playbeatsec(currentbeat+1);
      } else if (currentplaylist == -1){
        playbeat(currentbeat+1);
      } else {
        playbeat(currentplaylistsongs[currentplaylistsongs.indexOf(currentbeat)+1]);
      }    
    }

    }, true);
  })();
