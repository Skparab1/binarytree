"use strict";

// hehe
var playing = false;
var clearmemory = false; // basically a reset

function makestring(inp) {
  var j = 0;
  var oup = '';

  while (j < inp.length) {
    oup = oup + inp[j] + ' ';
    j += 1;
  }

  return oup;
}

function makestringand(inp) {
  var j = 0;
  var oup = '';

  while (j < inp.length) {
    oup = oup + inp[j] + '&next&';
    j += 1;
  }

  return oup;
}

function arrincludes(arr, cont) {
  var y = 0;

  while (y < arr.length) {
    if (arr[y] == cont) {
      return true;
    }

    y += 1;
  }

  return false;
}

function sortbyfavs() {
  var id1 = 0;
  var firstbeats = [];
  var lastbeats = [];
  var newfavsfirst = [];
  var newfavslast = [];
  var sortpathfirst = [];
  var sortpathlast = [];

  while (id1 < largebeatarr.length) {
    if (favs[id1] == 'red') {
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

  largebeatarr = firstbeats.concat(lastbeats);
  accessfavs = newfavsfirst.concat(newfavslast);
  sortpath = sortpathfirst.concat(sortpathlast);
} // this is the one time wipe cuz we changed names


var otw = localStorage.getItem('otw');

if (otw == null) {
  // wipe
  clearmemory = true;
  localStorage.setItem('otw', 'something');
} // define the beats
// 2d arr of all beat data
// like this [beatname,imgsrc,beatsrc,length]


var largebeatarr = [['Yeat Type Beat - "Rope"', 'beat.png', 'cut the rope type beat.wav', '1:38'], ['Ken Carson x Yeat Type Beat - "Demon Time"', 'beat.png', 'demon beat 5.wav', '2:13'], ['Yeat x Lyfe type beat - "Madness"', 'beat.png', 'demon beat 6.wav', '1:39'], ['void Type Beat - "Mystic"', 'beat.png', 'demon beat 7.wav', '1:32'], ['Yeat x Lyfe Type Beat - "Movin"', 'beat.png', 'demon beat 8.wav', '1:58'], ['Lil Yachty Type Beat - "South Pole"', 'beat.png', 'demon beat 9.mp3', '2:01'], ['Pop Smoke x Fivio Foreign Type Beat - "Streets"', 'beat.png', 'drill beat 2.wav', '1:49'], ['Yeat x Ken Carson Type Beat - "Rager"', 'beat.png', 'fire rage beat.mp3', '1:43'], ['Summrs Type Beat - "Pac"', 'beat.png', 'first plugg beat.wav', '1:33'], ['Playboi Carti Flatbed Freestyle Remake', 'beat.png', 'flatbed freestyle remake.wav', '0:56'], ['Playboi Carti x Self Titled Type Beat - "Pour it up"', 'beat.png', 'flute beat 1.mp3', '1:35'], ['Yeat Type Beat - "Happy Bout That"', 'beat.png', 'generic yeat type beat.wav', '1:06'], ['Yeat Type Beat - "Busy"', 'beat.png', 'get busy type beat.wav', '1:44'], ['Playboi Carti x Die Lit Type Beat - "Feelings"', 'beat.png', 'goofy beat 2.wav', '1:39'], ['Pierre Bourne Type Beat - "Heaven"', 'beat.png', 'heavenly beat.wav', '1:57'], ['Jazz Type Beat', 'beat.png', 'jazz type beat.wav', '1:16'], ['Yeat Type Beat - "Mapping"', 'beat.png', 'lava_map_pacman.mp3', '3:34'], ['Playboi Carti Long Time Remake', 'beat.png', 'long time remake.wav', '1:20'], ['Trippie Redd x Pierre Bourne Type Beat - "X\'s"', 'beat.png', 'mellow beat 3.wav', '2:16'], ['Lil Uzi Vert Type Beat - "Eternal"', 'beat.png', 'mellow beat 4.wav', '1:56'], ['Playboi Carti x Die Lit Type Beat - "Emotions"', 'beat.png', 'mellow beat 5.wav', '2:26'], ['Lil Baby Type Beat - "Cash"', 'beat.png', 'mellow beat 7.wav', '1:58'], ['Playboi Carti Type Beat - "Cash"', 'beat.png', 'mellow beat 8.wav', '1:02'], ['Lil Tecca x Lil Baby Type Beat - "Let it Go"', 'beat.png', 'mellow beat 9.wav', '1:12'], ['J. Cole x Lil Baby Type Beat - "False"', 'beat.png', 'mellow beat 11.wav', '1:17'], ['Lil Uzi Vert x Trippie Redd Type Beat - "Lost Cause"', 'beat.png', 'mellow beat 12.mp3', '2:24'], ['Yeat x Ken Carson Type Beat - "Stacks"', 'beat.png', 'money so big type beat.wav', '2:10'], ['Phonk Type Beat', 'beat.png', 'morbius type beat (phonk).wav', "0:51"], ['Playboi Carti x Self Titled Type Beat - "Summer Days"', 'summerdays.png', 'organ beat.wav', '2:15'], ['Video Game Type Beat - "Stars"', 'beat.png', 'pacman_racetrack_map.mp3', '2:41'], ['Playboi Carti Type Beat - "WLR"', 'carti.png', 'playboi carti wlr type beat.wav', '2:08'], ['Autumn! Type Beat - "Sleep"', 'beat.png', 'plugg beat 3 (sleepy beat).wav', '1:01'], ['Kankan x Summrs Type Beat - "Temptations"', 'beat.png', 'plugg beat 4.wav', '1:34'], ['Summrs Type Beat - "iPhone"', 'beat.png', 'plugg beat 5.wav', '2:02'], ['Autumn! x Kankan Type Beat - "Pipes"', 'beat.png', 'plugg beat 6.wav', '1:20'], ['Baby Santana x PnB Rock Type Beat - "God"', 'beat.png', 'plugg beat 7.wav', '1:00'], ['Autumn! x Summrs type beat - "over"', 'beat.png', 'plugg beat 8.wav', '1:28'], ['Autumn! x Summrs Type Beat - "Heart Break" ', 'beat.png', 'plugg beat 9.wav', '2:11'], ['Kankan Type Beat - "L34N"', 'beat.png', 'plugg beat 10.wav', '1:07'], ['Kankan Type Beat - "Fans"', 'beat.png', 'plugg beat 11.wav', '1:16'], ['Summrs x Autumn! type beat - "Equation"', 'beat.png', 'plugg beat 13.mp3', '2:05'], ['Summrs x Autumn! type beat - "Life"', 'beat.png', 'plugg beat 14.mp3', '1:31'], ['Lil Uzi Vert x Trippie Redd Type Beat - "Tripping"', 'beat.png', 'rage type beat 10.wav', '2:02'], ['Playboi Carti x Self Titled Type Beat - "Pour it up 2"', 'beat.png', 'reversed melody beat.wav', '1:55'], ['Summrs Type Beat - "Plug"', 'beat.png', 'second_plugg_beat.wav', '2:48'], ['J. Cole Type Beat - "Brass"', 'beat.png', 'simple victory beat.wav', '0:52'], ['Yeat Type Beat - "Halloween"', 'beat.png', 'spooky_beat.mp3', '5:23'], ['Playboi Carti x Pierre Bourne Type Beat - "Rich"', 'beat.png', 'synth beat 1.mp3', '1:54'], ['Lil Baby x NBA Youngboy Type Beat - "To the Lost Homies"', 'beat.png', 'to the lost homies.wav', '0:50'], ['Lil Baby x Lil Durk Type Beat - "Trenches"', 'beat.png', 'trap sad piano beat.wav', '2:06'], ['Pop Smoke Type Beat - "Twinkle"', 'beat.png', 'twinkle drill.mp3', "3:26"], ['Kanye West Type Beat - "Dear Matthew"', 'beat.png', 'Untitled_song-11.wav', '1:01'], ['Playboi Carti x UnoTheActivist Type Beat - "Nostalgia"', 'beat.png', 'video game type beat 2.wav', '1:58'], ['Lil Baby x Gunna Type Beat - "Wavy"', 'beat.png', 'Wavy beat.wav', '1:03'], ['Playboi Carti Type Beat - "Fangs"', 'beat.png', 'wlr type beat 2.wav', '1:56'], ['Ken Carson Type Beat - "I\'m Winning"', 'beat.png', 'wlr type beat 3.wav', '1:30'], ['Kankan Type Beat - "H1GH3R TH4N G0D"', 'beat.png', 'arcade_type_beat.mp3', '2:12'], ['Lil Durk x NBA Youngboy Type Beat - "To the Lost Homies 2"', 'beat.png', 'emotional_piano_beat.mp3', '3:15'], ['Playboi Carti x Self Titled Type Beat - “Marigold”', 'beat.png', 'flute_beat_2(1).mp3', '2:09'], ['Gunna Type Beat - "Litty"', 'beat.png', 'guitar_beat_fire.mp3', '2:31'], ['Playboi Carti x Pierre Bourne Type Beat - "Drank"', 'beat.png', 'mellow_beat_13.mp3', '3:56'], ['Plants vs. Zombies Type Beat', 'beat.png', 'pvz_type_beat.mp3', '4:25'], ['Yeat Type Beat - "Spooky"', 'beat.png', 'spooky_beat2.mp3', '3:05'], ['Yeat Type Beat - "Alive"', 'beat.png', 'yeat_beat_alive_2.mp3', '1:24'], ['Juice Wrld Type Beat - "Fallen Soldiers"', 'beat.png', 'beautiful_guitar_synth_beat.mp3', '2:12'], ['Playboi Carti x Die Lit Type Beat - "Soda"', 'beat.png', 'mellow_beat_14.mp3', '2:46'], ['NBA Youngboy Type Beat - "Darkness"', 'beat.png', 'fire_piano_beat.mp3', '3:42'], ['Summrs Type Beat - "Problem"', 'beat.png', 'pluggnb_type_beat_-_problems.mp3', '2:45'], ['Trippie Redd Type Beat - "Jarring"', 'beat.png', 'rage_finale.mp3', '2:34'], ['Yeat Type Beat - "Revival"', 'beat.png', 'alive_yeat_beat_part_2.mp3', '3:01'], ['Playboi Carti x Whole Lotta Red Type Beat - "0P1UM"', 'beat.png', 'opium.mp3', '3:25'], ['Playboi Carti Type Beat - "M3D$"', 'beat.png', 'bobraja_freestyle_beat_remake.mp3', '2:06'], ['Pierre Bourne Type Beat - "Demonic"', 'beat.png', 'demon_10.mp3', '2:23'], ['Trippie Redd Type Beat - "Tomorrow"', 'beat.png', 'rage_type_beat_5_9.mp3', '3:06'], ['Trippie Redd Type Beat - "Miss the Rage"', 'beat.png', 'mtr_rip_off_beat.mp3', '3:17'], ['UnoTheActivist x Mexikodro Type Beat - "Future"', 'beat.png', 'UnoTheActivist_x_Mexikodro_Type_Beat_-_future.mp3', '2:28'], ['Lil Pump Type Beat - "War"', 'beat.png', 'war_type_beat.mp3', '2:10'], ['Kankan Type Beat - "Trap"', 'beat.png', 'kankan_type_beat_-_trap.mp3', '2:15'], ['Kankan Type Beat - "Clouds"', 'beat.png', 'kankan_type_beat_-_clouds.mp3', '2:46'], ['Trippie Redd Type Beat - "Cartoon"', 'beat.png', 'rage_type_beat_3_album(2).mp3', '2:29'], ['Pierre Bourne Type Beat - "Location"', 'beat.png', 'Pierre_Bourne_Type_Beat_-_Location.mp3', '2:33']];
var origlargebeat = largebeatarr;
var secbeats = [['Bob Raja Ultimate Mix', 'raja.png', 'abhinav_raja_ultimate_mix.mp3', '4:05'], ['Summrs x Autumn! type beat - "Equation" ft. Bob Raja', 'raja.png', 'plugg_beat_13-2.mp3', '1:32'], ['Rage Type Beat 2 ft. Bob Raja', 'raja.png', 'rage_type_beat_2_album_ft_bobraja.mp3', '4:07'], ['"To the lost homies" ft. Bob Raja', 'raja.png', 'Bob_-_to_the_lost_homies_Prod._AGP_1.mp3', '1:24'], ['Demon Beat 8 ft. Bob Raja', 'raja.png', 'bobraja_demon_8.mp3', '2:02'], ['"To the lost Homies 2" ft. Bob Raja Eshwar', 'raja.png', 'bobraja_ft_eshwar_-_to_the_lost_homies_pt2.mp3', '4:22'], ['"Emotional Guitar Beat" ft. Bob Raja', 'raja.png', 'emotional_guitar_beat__bobraja.mp3', '3:09'], ['"Heavenly Beat 2" ft. Bob Raja', 'raja.png', 'heavenly_beat_2__bobraja.mp3', '4:58'], ['"Mellow Beat 10" ft. Bob Raja', 'raja.png', 'mellow_beat_10_bobraja_second_version.mp3', '2:33'], ['"Mellow Beat 12" ft. Bob Raja', 'raja.png', 'mellow_beat_12_ft_bobraja.mp3', '2:24'], ['"Plugg Beat 14" ft. Bob Raja', 'raja.png', 'plugg_beat_14_bobraja.mp3', '1:33'], ['"To the lost Homies" ft. Bob Raja 2"', 'raja.png', 'to_the_lost_homies_2.mp3', '1:40'], ['"To the lost Homies 3" ft. Bob Raja', 'raja.png', 'to_the_lost_homies_3.mp3', '1:40'], ['"To the lost Homies" meme version ft. Bob Raja', 'raja.png', 'to_the_lost_homies_meme_version.mp3', '1:40'], ['"To the lost Homies" official version ft. Bob Raja', 'raja.png', 'to_the_lost_homies_official_version.mp3', '1:40'], ['"Twinkle Drill" ft. Bob Raja', 'raja.png', 'twinkle_drill_bobraja.mp3', '3:27'], ['"4bobraja" ft. Bob Raja', 'raja.png', 'bobraja4.mp3', '1:05'], ['"Twinkle drill 2" ft. Bob Raja', 'raja.png', 'twinkle_drill_bobraja_2.mp3', '3:39'], ['"Twinkle drill 3" ft. Bob Raja', 'raja.png', 'twinkle_drill_bobraja3.mp3', '3:27'], ['NBA Youngboy Type Beat "Darkness" ft. Bob Raja', 'raja.png', 'fire_piano_beat_ft_bobraja.mp3', '4:02'], ['Kankan Type Beat "Clouds" ft. Bob Raja', 'raja.png', 'kankan_type_beat_-_clouds_ft_bobraja.mp3', '2:46'], ['"Mtr rip off" ft. Bob Raja', 'raja.png', 'mtr_rip_off_ft_bobraka.mp3', '3:17'], ['"War" ft. Bob Raja', 'raja.png', 'bobraja_war.mp3', '2:10'], ['"1H4T3V3G" ft. Bob Raja', 'raja.png', 'Bobraja_corn.mp3', '2:15'], ['Trippie Redd Type Beat - “Demonic” ft Bobraja', 'raja.png', 'demon_beat_10_ft_bobraja.mp3', '2:23'], ['Aarit synth beat song ft Bobraja', 'raja.png', 'aarit_synth_beat_song.mp3', '2:00'], ['Bobraja freestyle ft Bobraja', 'raja.png', 'bobraja_freestyle.mp3', '1:29'], ['Emotional piano beat 2 ft bobraka', 'raja.png', 'emotional_piano_beat_2_ft_bobraka.mp3', '2:38'], ['"Fallen Soldiers" ft Bobraja', 'raja.png', 'fallen_soldiers_ft_bobraja.mp3', '2:12'], ['"Problem" ft Bobraja', 'raja.png', 'problem_ft_bobraja.mp3', '2:45'], ['Rage type beat "Million" ft Bobraja', 'raja.png', 'rage_type_beat_million_ft_bobraja.mp3', '2:14'], ['"revival" ft Bobraja"', 'raja.png', 'revival_ft_bobraja.mp3', '3:01'], ['"Dunk on the opps" ft Bobraja"', 'raja.png', 'dunk_on_the_opps_ft_bobraja.mp3', '2:02'], ['Rage 7 ft Bobraja', 'raja.png', 'rage_7_prototype_ft_bobraja(1).mp3', '3:00'], ['"Opps be talkin" ft. Bobraja', 'raja.png', 'opps_be_talkin_ft_bobraja.mp3', '1:53'], ['"Plugg 18" ft. Bobraja', 'raja.png', 'plugg_beat_18_ft_bobraja.mp3', '2:19'], ['"Where we at" ft. Bobraja', 'raja.png', 'bobraja_-_where_we_at.mp3', '3:29'], ['"memories" ft. Bobraja', 'raja.png', 'plugg_beat_-_memories_ft_bobraja(1).mp3', '3:08'], ['"Sorry from the bottom of my heart" ft. Bobraja', 'raja.png', 'sorry_from_the_bottom_of_my_heart_-_bobraja.mp3', '2:46'], ['"Trappin" ft. Bobraja', 'raja.png', 'raka.png', 'bobraja_-_trappin.mp3', '2:13']];
var insecpl = false;
var keybindarr = ["", "", "", "", "", "", "", ""];
var currentpc = 0;
var queue = [];
var currenthover = -1;
var openedqueue = false;
var playingqueue = false;
var finishedqueue = false; // dont do stuff

var justplayed = -1;
var startedbeat = 0;
var openedpl = false; // station hosting 

var hoststatus = "";
var satelitestatus = ""; // or a particular station

var syncedbeat = -1;
console.log(largebeatarr.length);
var playcounts = [];
var playcountssec = [];
var returndata = [0, 0, 0];
fetch("https://pst652.deta.dev/?GET1").then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data);
  returndata[0] = data;
});
fetch("https://pst652.deta.dev/?GET2").then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data);
  returndata[1] = data;
});
fetch("https://pst652.deta.dev/?GET3").then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data);
  returndata[2] = data;
});
fetch("https://pst652.deta.dev/?GET4").then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data);
  playcountssec = data;
});
var sortpath = [];
var favs = localStorage.getItem('favbeats');

if (favs == null || clearmemory) {
  var c = 0;
  favs = [];

  while (c < largebeatarr.length) {
    favs.push('white');
    c += 1;
  }

  localStorage.setItem('favbeats', makestring(favs));
} else {
  favs = favs.split(' ');
} // get the playlists


var playlists = localStorage.getItem('playlists');

if (playlists == null || clearmemory) {
  playlists = [];
  localStorage.setItem('playlists', makestringand(playlists));
} else {
  playlists = playlists.split('&next&');
}

var playlistcontent = localStorage.getItem('playlistcontent');
console.log(playlistcontent);

if (playlistcontent == null || clearmemory) {
  var _c = 0;
  playlistcontent = [];

  while (_c < playlists.length) {
    playlistcontent.push('');
    _c += 1;
  }

  localStorage.setItem('playlistcontent', makestring(playlistcontent));
} else {
  playlistcontent = playlistcontent.split('&next&');
}

console.log(playlistcontent);
var currentplaylist = -1;
var currentplaylistsongs = [];
var gottem = false; // access accesfavs but change favs

var accessfavs = favs; //basically whenever you want to get the fav of something get it from accessfavs
// but when you wanna write then convert it using sortpath and then write to favs
// the actual original order is sortpath[new order] previos order
//console.log(favs);

sortbyfavs();
console.log(sortpath); // basically sortpath is like this
// sortpath(x) where x is index in current sort will be original index

var squery = '';
var lquery = '';
var currentresults = '';
var searcheron = -1;
var searcheropen = false;
var dialogueopened = false;
var randomxplayed = [];
var currentadder = 0;
var triggeredfav = false;
var triggerdaddbeat = false;
var currentbeat = 0;
var audio = new Audio(largebeatarr[0][2]); // this shudnt be overriden
// for importing plauylist

var addingname = '';
var addingcont = ''; // for editing

var optionspl = 0;
var audiomode = localStorage.getItem('audiomode');

if (audiomode == null) {
  localStorage.setItem('audiomode', 'playonce');
  audiomode = 'playonce';
}

var md = document.getElementById('mode');
md.value = audiomode;
var notif1 = localStorage.getItem('notif1');

if (notif1 == null || notif1 == 'again') {
  openelement('notif1');
}

var storedvol = parseInt(localStorage.getItem('storedvol'));

if (storedvol == null) {
  storedvol = 100;
  localStorage.setItem('storedvol', '100');
}

audio = new Audio('rage_type_beat_1_album.mp3');
var pw;
var tk;

(function _callee() {
  var data1, data2;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('tokens/tk.json').then(function (r) {
            return r.json();
          }));

        case 2:
          data1 = _context.sent;
          pw = data1.data[0];
          pw = JSON.stringify(pw);
          pw = pw.replace('{"pwd":"', '').replace('"}', '');
          _context.next = 8;
          return regeneratorRuntime.awrap(fetch('tokens/tk2.json').then(function (r) {
            return r.json();
          }));

        case 8:
          data2 = _context.sent;
          tk = data2.data[0];
          tk = JSON.stringify(tk);
          tk = tk.replace('{"pwd":"', '').replace('"}', ''); //console.log('THIS',pw);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
})();

(function _callee5() {
  var counter, counter2, counter3, counter4, sleep, positify, setoverlay, setoverlaylite, setoverlayicon, formatsec, revealmore, h1, h2, h3, fav, title, nav, head, head1, head2, nowplaying, mainimg, beatimg, ctime, ttime, playimg, pauseimg, voldisp, volumer, timekeeper, playnow, nowname, controls, allbeats, hc, hol, htop, cl, cl2, dimclr, dimclr2, d, f, _f, n, b, y, mutelineclr, brightlineclr, _c2;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          revealmore = function _ref6(x) {
            var l = document.getElementById('more');
            l.style.display = 'block';
            l.style.opacity = 0; // nvm ignore the opacity stuff

            var c = 0;

            (function _callee2() {
              return regeneratorRuntime.async(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(c < 100)) {
                        _context2.next = 7;
                        break;
                      }

                      l.style.opacity = 0;
                      _context2.next = 4;
                      return regeneratorRuntime.awrap(sleep(2));

                    case 4:
                      c += 1;
                      _context2.next = 0;
                      break;

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              });
            })();
          };

          formatsec = function _ref5(sec) {
            sec = Math.floor(sec);
            var mins = Math.floor(sec / 60);
            sec = sec % 60;

            if (String(sec).length == 1) {
              sec = '0' + String(sec);
            }

            return mins + ":" + sec;
          };

          setoverlayicon = function _ref4(ovl, dv, pushback, pushl) {
            ovl.style.position = 'absolute';
            ovl.style.top = dv.offsetTop + 25 - pushback + 'px';
            ovl.style.left = dv.offsetLeft + 100 + pushl + 'px';
          };

          setoverlaylite = function _ref3(ovl, dv) {
            ovl.style.position = 'absolute';
            ovl.style.top = dv.offsetTop + 25 + 'px';
            ovl.style.left = dv.offsetLeft + 100 + 'px';
          };

          setoverlay = function _ref2(ovl, dv) {
            ovl.style.top = dv.offsetTop + 'px';
            ovl.style.left = dv.offsetLeft + 'px';
            ovl.style.height = dv.offsetHeight + 'px';
            ovl.style.width = dv.offsetWidth + 'px';
          };

          positify = function _ref(x) {
            if (x >= 0) {
              return x;
            } else {
              return 0;
            }
          };

          counter = -50;
          counter2 = -3 * window.innerWidth / 4 + 2000;
          counter3 = 0;
          counter4 = 0;

          sleep = function sleep(ms) {
            return new Promise(function (res) {
              return setTimeout(res, ms);
            });
          };

          // def all teh consts
          h1 = document.getElementById('header1');
          h2 = document.getElementById('header2');
          h3 = document.getElementById('header3'); //h1.addEventListener('mouseover',colorize(h1));

          fav = document.getElementById('fav');
          title = document.getElementById('title');
          nav = document.getElementById('nav1');
          head = document.getElementById('head');
          head1 = document.getElementById('head1');
          head2 = document.getElementById('head2');
          nowplaying = document.getElementById('nowplaying');
          mainimg = document.getElementById('mainimg');
          beatimg = document.getElementById('beatimg'); //beatimg.addEventListener('mouseover', showplaypause() , false);

          ctime = document.getElementById('currenttime');
          ttime = document.getElementById('totaltime');
          playimg = document.getElementById('playimg');
          pauseimg = document.getElementById('pauseimg');
          voldisp = document.getElementById('volumedisp');
          volumer = document.getElementById('volumer');
          timekeeper = document.getElementById('timekeeper');

          timekeeper.oninput = function () {
            var pc = this.value / 100;
            audio.currentTime = Math.floor(audio.duration * pc);
          };

          playnow = document.getElementById('playnow');
          nowname = document.getElementById('nowplayingname');
          controls = document.getElementById('controlsbox');
          controls.style.position = 'absolute';
          controls.style.left = window.innerWidth * 75 / 100 + 'px';
          ;
          controls.style.marginTop = '112px';
          controls.style.zIndex = 8;
          allbeats = document.getElementById('allbeats');
          hc = document.getElementById('hcontainer');
          hol = document.getElementById('headoverlay');
          hol.style.top = head.offsetTop + 'px';
          hol.style.left = head.offsetLeft + 'px';
          hol.style.height = head.offsetHeight + 'px';
          hol.style.width = head.offsetWidth + 'px';
          htop = head.offsetTop; // for cool effect
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

        case 59:
          if (!true) {
            _context5.next = 106;
            break;
          }

          if (!(counter <= 100)) {
            _context5.next = 77;
            break;
          }

          cl = counter / 100 * 255;
          cl2 = cl * 2 - 255 / 2;
          dimclr = 'rgb(' + cl + ',' + cl + ',' + cl + ')';
          dimclr2 = 'rgb(' + cl2 + ',' + cl2 + ',' + cl2 + ')'; // header fade

          h1.style.color = dimclr;
          h2.style.color = dimclr;
          h3.style.color = dimclr;
          fav.style.opacity = cl / 255;
          title.style.color = dimclr;
          nav.style.borderColor = dimclr; //head.style.color = 'rgb('+cl+','+cl+','+cl+')';
          //hol.style.width = head.offsetWidth*(counter/100) +'px';
          //hol.style.backgroundImage = 'linear-gradient(to right,rgba(0,0,0,'+(1-(counter/100))+'),rgba(0,0,0,'+(1-(counter/1000))+'))';

          if (!(!window.location.href.includes('nointro') || true)) {
            _context5.next = 74;
            break;
          }

          _context5.next = 74;
          return regeneratorRuntime.awrap(sleep(2));

        case 74:
          if (counter <= 100) {
            counter = counter + (105 - counter) / 100;
          }

          _context5.next = 80;
          break;

        case 77:
          counter += 1;
          _context5.next = 80;
          return regeneratorRuntime.awrap(sleep(2));

        case 80:
          if (playingqueue) {
            document.getElementById('progressbar').style.width = audio.currentTime / audio.duration * 100 + '%';
          }

          if (!(satelitestatus != "")) {
            _context5.next = 86;
            break;
          }

          // connected to a station
          d = new Date();

          if (!(d.getSeconds() % 10 == 0)) {
            _context5.next = 86;
            break;
          }

          _context5.next = 86;
          return regeneratorRuntime.awrap(fetch("https://pst652.deta.dev/?SPECIFIC=astation".concat(satelitestatus)).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
            console.log(data.plays); // plays is the current beat
            // name is the playing or not

            if (data.name == 'offline') {
              alert('Station "' + satelitestatus + '" has ended its broadcast');
              terminatesatelite();
            }

            if (data.name == "playing" && data.plays != syncedbeat) {
              (function _callee3() {
                var d;
                return regeneratorRuntime.async(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        playbeatorig(data.plays);
                        audio.pause();

                      case 2:
                        if (!true) {
                          _context3.next = 10;
                          break;
                        }

                        d = new Date();

                        if (!(d.getSeconds() % 10 == 3)) {
                          _context3.next = 6;
                          break;
                        }

                        return _context3.abrupt("break", 10);

                      case 6:
                        _context3.next = 8;
                        return regeneratorRuntime.awrap(sleep(2));

                      case 8:
                        _context3.next = 2;
                        break;

                      case 10:
                        audio.play();

                      case 11:
                      case "end":
                        return _context3.stop();
                    }
                  }
                });
              })();
            }
          }));

        case 86:
          if (returndata[0] != 0 && returndata[1] != 0 && returndata[2] != 0) {
            (function () {
              //gottem all
              playcounts = returndata[0].concat(returndata[1].concat(returndata[2]));
              console.log(playcounts);
              var s = 0;

              (function _callee4() {
                var g;
                return regeneratorRuntime.async(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!(s < largebeatarr.length)) {
                          _context4.next = 7;
                          break;
                        }

                        try {
                          g = document.getElementById('playct' + s);
                          g.textContent = "▷ " + playcounts[sortpath[s]].plays;
                        } catch (error) {// its fine
                        }

                        _context4.next = 4;
                        return regeneratorRuntime.awrap(sleep(15));

                      case 4:
                        s += 1;
                        _context4.next = 0;
                        break;

                      case 7:
                      case "end":
                        return _context4.stop();
                    }
                  }
                });
              })();

              returndata = [0, 0, 0, 0]; //dont do it again
            })();
          }

          counter2 -= 6;
          f = document.getElementById('pwd');

          if (f.value == pw || window.location.href == 'file:///Users/homemac/Desktop/Programming/Otherprograms/agpbeats/index.html' && f.value == 'a') {
            // so i can aceess it hehe
            f.value = "";
            closedialogue('pwdask');
            opensecret(); // validate the ls

            localStorage.setItem('rajavault', 'validated');
          }

          if (counter2 > -3 * window.innerWidth / 4) {
            // ends when 2000-counter2 == 3*window.innerWidth/4
            //so from counter2 = 0 to counter == -3*window.innerwidth/4+2000
            // we want start at that
            document.body.style.background = 'black';
            hol.style.left = counter / 50 + 'px';
            hol.style.width = 2000 - counter2 + 'px';
          } else {
            head.style.display = 'none';
            nowplaying.style.display = 'inline-block';
            counter3 += 1;
            nowplaying.style.opacity = counter3 / 100;
            hol.style.display = 'none';
            _f = document.getElementById('plc');
            _f.style.opacity = counter3 / 300;
            n = document.getElementById('nav'); // nav.style.backgroundColor = 'black';

            nav.style.opacity = counter3 / 100; //document.body.style.backgroundImage = 'url("bg.png")';

            b = document.getElementById('bg1');
            b.style.opacity = counter3 / 550;
            y = document.getElementById('nowplaying');
            y.style.top = document.getElementById('placeholder').offsetTop + "px";

            if (window.scrollY > y.offsetTop) {//console.log('hitter');
              // let z = document.getElementById('placeholder');
              // z.style.display = 'block';
              // t = y.offsetLeft;
              // y.style.position = 'fixed';
              // y.style.top = document.getElementById('placeholder').offsetTop/4+"px";
              // y.style.left = 3*t/4+'px';
            }

            controls.style.top = -80 + 'px';
            beatimg.style.position = 'absolute';
            setoverlayicon(beatimg, y, document.getElementById('placeholder').offsetTop / 2, 100);
            playimg.style.position = 'absolute';
            setoverlayicon(playimg, y, document.getElementById('placeholder').offsetTop / 2, 100);
            pauseimg.style.position = 'absolute';
            setoverlayicon(pauseimg, y, document.getElementById('placeholder').offsetTop / 2, 100);
            allbeats.style.opacity = counter3 / 200;
          }

          counter4 += 1;
          mutelineclr = 'rgb(50,50,50)';
          brightlineclr = 'rgb(100,100,100)'; // basically glow the buttons sequentially
          // so we have the button
          // bt1
          // the intensity is distance from mid = 50
          // upgrade the button stuff

          buttonglower += 0.5;

          if (buttonglower >= 500) {
            buttonglower = 0;
          }

          if (lquery != document.getElementById('query').textContent) {
            console.log('hit');
            _c2 = document.getElementById('query');
            lquery = _c2.textContent;
            searcher(_c2.textContent);
          }

          localStorage.setItem('storedvol', String(volumer.value));
          audio.volume = volumer.value / 100;
          voldisp.textContent = 'Vol: ' + String(volumer.value) + '%'; // controls.style.left = window.innerWidth*70/100 +'px';;

          ctime.textContent = formatsec(audio.currentTime);
          ttime.textContent = formatsec(audio.duration); //detadb(('song'+sortpath[ix]),(largebeatarr[ix][0].replaceAll(" ",'').replaceAll('"','').replaceAll("-",'')),cp);

          if (audio.currentTime >= audio.duration && !finishedqueue) {
            playnextbeat();
          } // let n1 = document.getElementById('nav1');
          // if (window.scrollY > n1.offsetHeight){
          //   nowplaying.style.position = 'fixed';
          //   nowplaying.style.top = n1.offsetHeight+'px';
          // }
          //let pc = Math.floor(timekeeper.value/100);
          //audio.currentTime = audio.duration*pc;


          timekeeper.value = audio.currentTime / audio.duration * 100;
          _context5.next = 59;
          break;

        case 106:
        case "end":
          return _context5.stop();
      }
    }
  });
})(); // we can generate the lengths


var iterator = 0;
var ix = 0;

while (ix < largebeatarr.length) {
  var div = document.createElement('div');
  div.innerHTML = "\n  <div id='beat" + ix + "' class=\"beatblock\" onclick=\"playbeat(" + ix + ");\" onmouseover=\"beathover('beat" + ix + "')\" onmouseout=\"beatunhover('beat" + ix + "')\">\n  <div class=\"fullwidth\" onmouseover=\"currenthover=" + ix + "\">\n\n    <div class=\"leftblock\"><h1 class=\"beattitle\">" + largebeatarr[ix][0] + "</h1></div>\n    <div class=\"rightblockfav\" onclick='favbeat()';><h1 id='heart" + ix + "' class=\"beatheart\" onclick='favbeat();' style='color: " + accessfavs[ix] + ";'>\u2661</h1></div>\n    <div class=\"rightblockmore\" onclick='addtoplaylist()';><h1 id='ellipses" + ix + "' class=\"beatmore\"  style='color: white'>\u2026</h1></div>\n\n    <div class='rightblock'><h1 class=\"beatlength\">" + largebeatarr[ix][3] + "</h1></div>\n    <div class='rightblockpc' id='pcb" + ix + "'><h1 class=\"beatlength\" id='playct" + ix + "'>\u25B7 </h1></div>\n\n  </div>\n  </div>";
  allbeats.appendChild(div);
  ix += 1;
}

var plc = document.getElementById('allplaylists');
var allp = document.getElementById('alloptions');
ix = 0;

while (ix < playlists.length) {
  var _div = document.createElement('div');

  if (playlists[ix] != '') {
    _div.innerHTML = "<div class=\"playlist\" onclick='openplaylist(" + ix + ");'>" + playlists[ix] + "</div>";
    plc.appendChild(_div);
  }

  if (ix >= 0 && playlists[ix] != '') {
    var div2 = document.createElement('div');
    div2.innerHTML = "  <input id='check" + ix + "' type=\"checkbox\">\n    <label style='font-size: 15px; color: white;'>" + playlists[ix] + "</label><br>";
    allp.appendChild(div2);
  }

  ix += 1;
}

var sleep = function sleep(ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};

(function _callee6() {
  var url, ur, content, listname, endcontent, y, stcont, g, station, urmom;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          // if u wanna play using url path
          url = window.location.href; //console.log(ur);

          ur = url.replace('file:///Users/homemac/Desktop/Programming/Otherprograms/agpbeats/index.html?', '');
          ur = ur.replace('https://skparab1.github.io/agpbeats/?', '');
          ur = ur.replace('https://skparab1.github.io/agpbeats?', '');
          ur = ur.replaceAll('%20', ' '); // ok u know my laptop directories so what

          if (ur.includes('addpl=')) {
            // ur importing a playlist
            ur = ur.replace('addpl=', '');
            content = ur.split('&next&');
            listname = content[0];
            content = content[1];
            content = content.replaceAll('D1', '-');
            content = content.replaceAll('Q1', '"');
            content = content.split('&');
            endcontent = '';
            y = 0;

            while (y < content.length) {
              endcontent += origlargebeat[parseInt(content[y])];
              y += 1;
            }

            stcont = content.length - 1;
            content = endcontent;
            openplaylistadder();
            g = document.getElementById('addornot');
            g.textContent = 'Do you want to add the playlist "' + listname + '" (' + stcont + ' beats)?';
            addingname = listname;
            addingcont = content;
          }

          if (ur.includes('joinstation=')) {
            // ur importing a playlist
            ur = ur.replace('joinstation=', '');
            station = document.getElementById('stationname');
            station.value = ur; // ur is the station

            openelement('satelitemode');
          }

          _context6.next = 9;
          return regeneratorRuntime.awrap(sleep(2000));

        case 9:
          urmom = 0;

          while (urmom < largebeatarr.length && url != 'file:///Users/homemac/Desktop/Programming/Otherprograms/agpbeats/index.html' && url != 'https://skparab1.github.io/agpbeats' && url != 'https://skparab1.github.io/agpbeats/' && !url.includes('nointro') && !url.includes('addpl')) {
            if (largebeatarr[urmom][0].toLowerCase().includes(ur.toLowerCase())) {
              // thats the beat
              playbeat(urmom);
              playtoggle();
            }

            console.log(ur, largebeatarr[urmom][0].toLowerCase());
            urmom += 1;
          }

          if (ur.includes('play=')) {
            ur = ur.replace('play=', '');
            ur = parseInt(ur);
            urmom = 0;

            while (urmom < origlargebeat.length && url != 'file:///Users/homemac/Desktop/Programming/Otherprograms/agpbeats/index.html' && url != 'https://skparab1.github.io/agpbeats' && url != 'https://skparab1.github.io/agpbeats/' && !url.includes('nointro') && !url.includes('addpl')) {
              if (ur == urmom) {
                // thats the beat
                playbeatorig(urmom);
                playtoggle();
              }

              urmom += 1;
            }
          }

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  });
})();

window.addEventListener('keydown', function (e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});

(function _callee7() {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
              return;
            }

            var actkey = event.code.replace('Key', '').replace('Digit', '');
            var filterletters = 'QWERTYUIOPASDFGHJKLZXCVBNM1234567890'; //console.log('pressed'+actkey);

            keybindarr[0] = keybindarr[1];
            keybindarr[1] = keybindarr[2];
            keybindarr[2] = keybindarr[3];
            keybindarr[3] = keybindarr[4];
            keybindarr[4] = keybindarr[5];
            keybindarr[5] = keybindarr[6];
            keybindarr[6] = keybindarr[7];
            keybindarr[7] = actkey;
            console.log(keybindarr);

            if (keybindarr[5] == "Q" && keybindarr[6] == "W" && keybindarr[7] == "E" && currenthover != -1 && !dialogueopened) {
              addtoqueue(currenthover);
              keybindarr = ["", "", "", "", "", "", "", ""];
            }

            if (keybindarr[4] == "S" && keybindarr[5] == "K" && keybindarr[6] == "I" && keybindarr[7] == "P") {
              try {
                console.log('git it');
                playnextbeat(); //hehe
              } catch (_unused) {}

              keybindarr = ["", "", "", ""];
            } //satelitemode


            if (keybindarr[4] == "S" && keybindarr[5] == "A" && keybindarr[6] == "T" && keybindarr[7] == "E" && hoststatus == "") {
              openelement('satelitemode');
              keybindarr = ["", "", "", ""];
            } //satelitemode


            if (keybindarr[4] == "H" && keybindarr[5] == "O" && keybindarr[6] == "S" && keybindarr[7] == "T" && satelitestatus == "") {
              // anyone can hmm
              openelement('stationhoster');
              keybindarr = ["", "", "", ""];
            }

            if (keybindarr[1] == "R" && keybindarr[2] == "A" && keybindarr[3] == "K" && keybindarr[4] == "A" && keybindarr[5] == "1" && keybindarr[6] == "2" && keybindarr[7] == "3") {
              // anyone can hmm
              opensecret();
            }

            if (actkey == 'Space' && !dialogueopened) {
              playtoggle();
            }

            if (actkey == 'ArrowRight') {
              skipahead(5);
            }

            if (actkey == 'ArrowLeft') {
              skipahead(-5);
            }

            if (actkey == 'F' && !dialogueopened) {
              event.preventDefault();
              openfinder();
            } else {
              // you can do it if ur not invoking the opener
              var ascii = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ1234567890';

              if (searcheropen && (ascii.includes(actkey) || actkey == 'Space')) {
                var q = document.getElementById('query');
                q.textContent = q.textContent + actkey.toLowerCase().replace('space', ' ');
                searcheron = -1;
              } else if (searcheropen && actkey == 'Backspace') {
                var _q = document.getElementById('query');

                _q.textContent = _q.textContent.substring(0, _q.textContent.length - 1);
                searcheron = -1;
              } else if (searcheropen && actkey == 'Enter') {
                if (searcheron == -1) {
                  closefinder();
                } else {
                  playbeat(parseInt(currentresults[searcheron]));
                  closefinder();
                }
              } else if (searcheropen && actkey == 'ArrowDown') {
                searcheron += 1;
                updaterhighlight(searcheron - 1, searcheron);
                event.preventDefault();
              } else if (searcheropen && actkey == 'ArrowUp') {
                searcheron -= 1;
                updaterhighlight(searcheron + 1, searcheron);
                event.preventDefault();
              } else if (searcheropen && actkey == 'Escape') {
                closefinder();
              }
            }

            if (searcheron < -1) {
              searcheron = -1;
            }

            if (actkey == 'ArrowUp' && !dialogueopened) {
              if (insecpl) {
                playbeatsec(currentbeat - 1);
              } else if (currentplaylist == -1) {
                playbeat(currentbeat - 1);
              } else {
                playbeat(currentplaylistsongs[currentplaylistsongs.indexOf(currentbeat) - 1]);
              }
            }

            if (actkey == 'ArrowDown' && !dialogueopened) {
              if (insecpl) {
                playbeatsec(currentbeat + 1);
              } else if (currentplaylist == -1) {
                playbeat(currentbeat + 1);
              } else {
                playbeat(currentplaylistsongs[currentplaylistsongs.indexOf(currentbeat) + 1]);
              }
            }
          }, true);

        case 1:
        case "end":
          return _context7.stop();
      }
    }
  });
})();