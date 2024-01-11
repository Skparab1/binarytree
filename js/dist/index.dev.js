"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// binary tree builder and visualizer
// class for a treenode that makes up the tree
var treenode =
/*#__PURE__*/
function () {
  // basic constructor with value, left, and right
  function treenode(value, left, right) {
    _classCallCheck(this, treenode);

    this.value = value;
    this.left = left;
    this.right = right;
  } // getter functions


  _createClass(treenode, [{
    key: "setvalue",
    // setter functions
    value: function setvalue(val) {
      this.value = val;
    }
  }, {
    key: "setleft",
    value: function setleft(l) {
      this.left = l;
    }
  }, {
    key: "setright",
    value: function setright(r) {
      this.right = r;
    }
  }, {
    key: "getvalue",
    get: function get() {
      return this.value;
    }
  }, {
    key: "getleft",
    get: function get() {
      return this.left;
    }
  }, {
    key: "getright",
    get: function get() {
      return this.right;
    }
  }]);

  return treenode;
}(); // get the div that holds the tree


var treeholder = document.getElementById('treeholder');
var nodesadded = 0; // draw a specific node at the coordinates x,y (by creating an element for it)

function drawnode(node, x, y) {
  // create element
  var div = document.createElement('div'); // get the value that should be in the node

  var thisnum = nodearr.indexOf(node); // put the value into the element

  div.innerHTML = "\n    <input id='val".concat(thisnum, "' type='text' class='nodeval' value='").concat(node.getvalue, "' onchange=\"modvalue(").concat(thisnum, ");\">\n    "); // put in the left adder button, if there isnt already a left child

  var theleft = node.getleft;

  if (theleft == null || theleft.getvalue == 'deleted') {
    div.innerHTML += " <button id='leftadder".concat(thisnum, "' class='nodeadderleft' onclick='addleft(").concat(thisnum, ");'>left</button>");
  } else {
    div.innerHTML += " <button id='leftadder".concat(thisnum, "' class='nodeadderleft' style='opacity: 0;'>left</button>");
  } // put in the right adder button, if there isnt already a right child


  var theright = node.getright;

  if (theright == null || theright.getvalue == 'deleted') {
    div.innerHTML += "<button id='rightadder".concat(thisnum, "' class='nodeadderright' onclick='addright(").concat(thisnum, ");'>right</button>");
  } else {
    div.innerHTML += "<button id='rightadder".concat(thisnum, "' class='nodeadderright' style='opacity: 0;'>right</button>");
  } // put in the delete button, if the node has no children


  if ((theright == null || theright.getvalue == 'deleted') && (theleft == null || theleft.getvalue == 'deleted') && node != root) {
    div.innerHTML += " <button id='deletenode".concat(thisnum, "' onclick='delnode(").concat(thisnum, ");' class='deletenode'>del</button>");
  } else {
    div.innerHTML += " <button id='deletenode".concat(thisnum, "' class='deletenode' style='opacity: 0;'>del</button>");
  } // position the element


  div.style.position = 'absolute';
  div.style.marginLeft = x + '%';
  div.style.marginTop = y + 'px'; // set the id and classname

  div.id = 'thenode' + String(thisnum);
  div.className = 'node'; // if a node is clicked then bring it to the brong

  div.onclick = function () {
    document.getElementById(div.id).style.zIndex = rnzindex;
    rnzindex += 1;
  }; // rnzindex is the z index
  // this should be the highest for the most recently clicked elements


  rnzindex += 1; // put the element in

  treeholder.appendChild(div);
} // if the value is edited, then modify the array and store the tree


function modvalue(n) {
  var el = document.getElementById('val' + n);
  nodearr[n].setvalue(el.value);
  storetree();
} // deleting a node


function delnode(n) {
  //console.log(nodearr,n,nodearr[n].getvalue);
  //nodearr[n].setvalue('deleted');
  // set the value
  var thing = nodearr[n];
  thing.setvalue('deleted'); //and remove it

  nodearr[n] = null;
  nodearr.splice(n, 1); //nodearr[n] = null;
  // go through and find whos left or right this is
  // console.log(findnode(root,nodearr[n]));
  //delnodes.push(n);
  // console.log(root.getleft);
  // update

  nodesadded -= 1; // redraw

  redrawtree();
} // store the tree in localstorage so that it can be fetched upon reload


function storetree() {
  // store the tree in localstorage
  var tostore = preorderwithnullpointers(root);
  localStorage.setItem("binarytreestorage", tostore);
} // erase and draw tree


function redrawtree() {
  //console.log(nodearr);
  // erase
  treeholder.innerHTML = "";
  connectors.innerHTML = ""; // store

  storetree(); // draw

  drawtree(root, 50, 0, 50);
} // add a left child node to whatever node


function addleft(num) {
  //console.log('addleft on '+num+' with '+nodearr);
  // create a new node
  var newnode = new treenode(0, null, null);
  nodearr[num].setleft(newnode); // update

  nodesadded += 1; // add to the array

  nodearr[nodesadded] = newnode; //console.log(nodearr);
  // redraw

  redrawtree();
  return nodesadded;
} // add a right child to the node


function addright(num) {
  // create the node
  var newnode = new treenode(0, null, null);
  nodearr[num].setright(newnode); // update

  nodesadded += 1; // add to array

  nodearr[nodesadded] = newnode; // draw again

  redrawtree();
} // draw the tree recursively


function drawtree(root, x, y, prevx) {
  // if current node has been deleted, treat it like its a null (dont draw it or anything)
  if (root.getvalue == 'deleted') {
    root = null;
  } // if its not null or deleted do this
  // root.getvalue != 'deleted' shouldnt be needed idk why its there but not gonna change it


  if (root != null && root.getvalue != 'deleted') {
    // draw the current node
    drawnode(root, x, y); //figure out the x and y coordinates at which the child nodes should be located

    var newy = y + 75;
    var leftx;
    var rightx;

    if (x == 50) {
      leftx = 25;
      rightx = 75;
    } else {
      // distance from middle Math.abs(50-x)
      leftx = x - Math.abs(prevx - x) / 2;
      rightx = x + Math.abs(prevx - x) / 2; // console.log(leftx);
    } // leftx = leftx-(5000/window.innerWidth);
    // rightx = rightx-(5000/window.innerWidth);
    // create the connector line for the left side


    var div = document.createElement('div');
    var wid = Math.abs(leftx - x);
    div.className = 'connector';
    div.style.width = wid + '%';
    div.style.height = '75px';
    div.style.left = leftx + 5000 / window.innerWidth + '%';
    div.style.top = y + 150 + 'px';
    div.style.zIndex = -1; // create the connector line for the right side 

    var div1 = document.createElement('div');
    div1.className = 'connector';
    div1.style.borderRight = '7px solid var(--contrast)';
    div1.style.borderLeft = '0px solid white';
    div1.style.width = wid + '%';
    div1.style.height = '75px';
    div1.style.left = x + 5000 / window.innerWidth + '%';
    div1.style.top = y + 150 + 'px';
    div1.style.zIndex = -1; // as long as the left child isnt null or deleted, draw it

    if (root.getleft != null && root.getleft.getvalue != 'deleted') {
      document.getElementById('connectors').appendChild(div);
      drawtree(root.getleft, leftx, newy, x);
    } // as long as the right child isnt null or deleted, draw it


    if (root.getright != null && root.getright.getvalue != 'deleted') {
      document.getElementById('connectors').appendChild(div1);
      drawtree(root.getright, rightx, newy, x);
    }
  }
} // the output when traversing the tree using preorder


function traversepreorder(node) {
  if (node == null) {
    return "";
  }

  var st = "";
  st += node.getvalue + " ";
  st += traversepreorder(node.getleft) + " ";
  st += traversepreorder(node.getright) + " ";
  return st;
} // the output when traversing the tree using inorder


function traverseinorder(node) {
  if (node == null) {
    return "";
  }

  var st = "";
  st += traverseinorder(node.getleft) + " ";
  st += node.getvalue + " ";
  st += traverseinorder(node.getright) + " ";
  return st;
} // the output when traversing the tree using postorder


function traversepostorder(node) {
  if (node == null) {
    return "";
  }

  var st = "";
  st += traversepostorder(node.getleft) + " ";
  st += traversepostorder(node.getright) + " ";
  st += node.getvalue + " ";
  return st;
} // check all the solutions


function checkall() {
  // get the correct solutions
  var preorder = traversepreorder(root).replaceAll('deleted', '');
  var inorder = traverseinorder(root).replaceAll('deleted', '');
  var postorder = traversepostorder(root).replaceAll('deleted', ''); // fill the solutions display with the solutions

  var sols = document.getElementById('solutions');
  sols.innerHTML = "\n    <h1 style='font-size: 25px'>Solutions</h1>\n    <h1 style='font-size: 15px'>Pre order: ".concat(preorder, "</h1>\n    <h1 style='font-size: 15px'>In order: ").concat(inorder, "</h1>\n    <h1 style='font-size: 15px'>Post order: ").concat(postorder, "</h1>\n    <div class=\"close\" onclick=\"closesolutions(); closescreen();\">Close</div>\n    "); // format them so that they can be compared to the user responses

  preorder = preorder.replaceAll(' ', '');
  inorder = inorder.replaceAll(' ', '');
  postorder = postorder.replaceAll(' ', ''); // check preorder answers

  var userpreorder = document.getElementById('preorder').value;
  userpreorder = userpreorder.replaceAll(' ', '').replaceAll(',', '');

  if (userpreorder.toUpperCase() == preorder.toUpperCase()) {
    document.getElementById('preorder').style.border = '3px solid rgba(0,245,0)';
  } else {
    document.getElementById('preorder').style.border = '3px solid rgba(245,0,0)';
  } // check inorder answers


  var userinorder = document.getElementById('inorder').value;
  userinorder = userinorder.replaceAll(' ', '').replaceAll(',', '');

  if (userinorder.toUpperCase() == inorder.toUpperCase()) {
    document.getElementById('inorder').style.border = '3px solid rgba(0,245,0)';
  } else {
    document.getElementById('inorder').style.border = '3px solid rgba(245,0,0)';
  } // check postorder answers


  var userpostorder = document.getElementById('postorder').value;
  userpostorder = userpostorder.replaceAll(' ', '').replaceAll(',', '');

  if (userpostorder.toUpperCase() == postorder.toUpperCase()) {
    document.getElementById('postorder').style.border = '3px solid rgba(0,245,0)';
  } else {
    document.getElementById('postorder').style.border = '3px solid rgba(245,0,0)';
  }
} // show the solutions dialog


function showsolutions() {
  checkall();
  document.getElementById('solutions').style.display = 'block';
  document.getElementById('solutions').style.opacity = 1;
  document.getElementById('solutions').style.top = '25%';
} // show the preferences dialog


function openprefs() {
  document.getElementById('preferences').style.display = 'block';
  document.getElementById('preferences').style.opacity = 1;
  document.getElementById('preferences').style.top = '25%';
} // open whatever dialog


function openel(el) {
  document.getElementById(el).style.display = 'block';
  document.getElementById(el).style.opacity = 1;
  document.getElementById(el).style.top = '25%';
} // change the theme from dark to light or override for setting it to whatever the saved theme is


function toggletheme(override) {
  var r = document.querySelector(':root'); // get elapsed time since last time a toggle was clicked

  var endtime = new Date();
  var timediff = endtime - lasttoggle;
  lasttoggle = endtime; // if we are not changing to the saved theme and the user just pressed the theme change then dont change
  // this is there because something toggle theme used to get called two times in a row and cancel itself out

  if (timediff < 333 && !override) {
    return;
  } // console.log('changeing from  '+theme);


  if (theme == 'dark') {
    // make light
    theme = 'light';
    localStorage.setItem('bttheme', 'light');
    document.getElementById('theme').textContent = "Theme: (light)";
    r.style.setProperty('--bg', 'white');
    r.style.setProperty('--contrast', 'black');
    r.style.setProperty('--main', '#0d6efd');
    r.style.setProperty('--slight', 'rgb(220,220,220)');
  } else {
    // make dark
    theme = 'dark';
    localStorage.setItem('bttheme', 'dark');
    document.getElementById('theme').textContent = "Theme: (dark)";
    r.style.setProperty('--bg', 'black');
    r.style.setProperty('--contrast', 'white');
    r.style.setProperty('--main', '#0d6efd');
    r.style.setProperty('--slight', 'rgb(40, 40, 40)');
  }
} // force the theme to change to dark, if thats the saved theme


function forcedark() {
  theme = 'dark';
  localStorage.setItem('bttheme', 'dark');
  document.getElementById('theme').textContent = "Theme: (dark)";
  var r = document.querySelector(':root');
  r.style.setProperty('--bg', 'black');
  r.style.setProperty('--contrast', 'white');
  r.style.setProperty('--main', '#0d6efd');
  r.style.setProperty('--slight', 'rgb(40, 40, 40)');
} // toggle the angle of the connectors


function toggleangle(override) {
  var r = document.querySelector(':root'); // see the elapsed time since toggle was last clicked

  var endtime = new Date();
  var timediff = endtime - lasttoggle;
  lasttoggle = endtime; // prevent a double click of this

  if (timediff < 333 && !override) {
    // console.log('returned');
    return;
  }

  if (angle == 'cornered') {
    // make curved
    angle = 'curved';
    localStorage.setItem('btangle', 'curved');
    document.getElementById('lines').textContent = "Lines: (Curved)";
    r.style.setProperty('--br', '25px');
  } else {
    // make cornered
    angle = 'cornered';
    localStorage.setItem('btangle', 'cornered');
    document.getElementById('lines').textContent = "Lines: (Cornered)";
    r.style.setProperty('--br', '0px');
  }
} // close preferences dialog


function closeprefs() {
  //document.getElementById('solutions').style.display = 'none';
  document.getElementById('preferences').style.opacity = 0;
  document.getElementById('preferences').style.top = '100%';
} // close preferences dialog


function closeel(el) {
  //document.getElementById('solutions').style.display = 'none';
  document.getElementById(el).style.opacity = 0;
  document.getElementById(el).style.top = '100%';
} // make the results panel visible


function raiseresults() {
  if (stayingup) {
    return;
  }

  var res = document.getElementById("res");
  res.style.top = (1 - res.offsetHeight / window.innerHeight) * 100 + "%";
} // lower the results panel to hide it


function lowerresults() {
  if (stayingup) {
    return;
  }

  var res = document.getElementById("res");
  res.style.top = "90%";
} // close the solutions dialog


function closesolutions() {
  //document.getElementById('solutions').style.display = 'none';
  document.getElementById('solutions').style.opacity = 0;
  document.getElementById('solutions').style.top = '100%';
} // close the instructions dialog


function closeinstructions() {
  document.getElementById('instructions').style.top = '100%';
  document.getElementById('instructions').style.opacity = 0;
} // light up animation for preorder
// all this does is basically do the traversal but highlight each node when its visited, and wait a bit before doing that at each node


function glowtreepreorder(start) {
  var idx, nd;
  return regeneratorRuntime.async(function glowtreepreorder$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(start == null)) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(sleep(document.getElementById('waittime').value));

        case 4:
          idx = nodearr.indexOf(start);
          nd = document.getElementById('thenode' + String(idx));

          try {
            nd.style.boxShadow = '7px 7px 5px rgba(255, 0, 0, 0.7)';
          } catch (error) {}

          _context.next = 9;
          return regeneratorRuntime.awrap(glowtreepreorder(start.getleft));

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(glowtreepreorder(start.getright));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
} // light up animation for inorder


function glowtreeinorder(start) {
  var idx, nd;
  return regeneratorRuntime.async(function glowtreeinorder$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(start == null)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt("return");

        case 2:
          idx = nodearr.indexOf(start);
          nd = document.getElementById('thenode' + String(idx));
          _context2.next = 6;
          return regeneratorRuntime.awrap(glowtreeinorder(start.getleft));

        case 6:
          _context2.next = 8;
          return regeneratorRuntime.awrap(sleep(document.getElementById('waittime').value));

        case 8:
          try {
            nd.style.boxShadow = '7px 7px 5px rgba(255, 0, 0, 0.7)';
          } catch (error) {}

          _context2.next = 11;
          return regeneratorRuntime.awrap(glowtreeinorder(start.getright));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
} // light up animation for postorder


function glowtreepostorder(start) {
  var idx, nd;
  return regeneratorRuntime.async(function glowtreepostorder$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!(start == null)) {
            _context3.next = 2;
            break;
          }

          return _context3.abrupt("return");

        case 2:
          idx = nodearr.indexOf(start);
          nd = document.getElementById('thenode' + String(idx));
          _context3.next = 6;
          return regeneratorRuntime.awrap(glowtreepostorder(start.getleft));

        case 6:
          _context3.next = 8;
          return regeneratorRuntime.awrap(glowtreepostorder(start.getright));

        case 8:
          _context3.next = 10;
          return regeneratorRuntime.awrap(sleep(document.getElementById('waittime').value));

        case 10:
          try {
            nd.style.boxShadow = '7px 7px 5px rgba(255, 0, 0, 0.7)';
          } catch (error) {} //enableplay();


        case 11:
        case "end":
          return _context3.stop();
      }
    }
  });
} // not used functions
// function getlevel(level, node, currentlevel, gotnodes){
//     if (node == null){
//         gotnodes.push(null);
//         return gotnodes;
//     }
//     if (currentlevel == level){
//         gotnodes.push(node);
//         return gotnodes;
//     }
//     gotnodes = getlevel(level, node.getleft, currentlevel+1,gotnodes);
//     gotnodes = getlevel(level, node.getright, currentlevel+1,gotnodes);
//     return gotnodes;
// }
// function getlevelorder(){
//     let res = [0];
//     let final = [];
//     let lev = 0;
//     while (res.length != 0){
//         res = getlevel(lev, root, 0, []);
//         if (res.length == 0){
//             break;
//         }
//         for(i of res){
//             final.push(i);
//         }
//         lev += 1;
//     }
//     return final;
// }
// format the tree in a way in which it can be saved


function preorderwithnullpointers(node) {
  if (node == null) {
    return "NULL";
  }

  var st = "";
  st += node.getvalue + " ";
  st += preorderwithnullpointers(node.getleft) + " ";
  st += preorderwithnullpointers(node.getright) + " ";
  return st.replaceAll("deleted", ""); //recreatetree("a b NULL c NULL NULL   NULL ");
} // put all the tree data into the url


function createshareURL() {
  var query = preorderwithnullpointers(root);
  query = query.replaceAll(" ", "%20");
  document.getElementById("shareurldisp").textContent = location.href + "/share?data=" + query;
} // this is there so that when you recreate it you know what node you are on


var universalrecreator = 0; // based on the stored data, create a node

function recreatenode(sequence, num) {
  if (num > sequence.length) {
    return null;
  }

  var newnode = new treenode(sequence[num], null, null);
  nodesadded += 1; // add a new one

  nodearr[nodesadded] = newnode;
  universalrecreator += 1;

  if (sequence[universalrecreator] != "NULL") {
    newnode.setleft(recreatenode(sequence, universalrecreator));
  } else {
    universalrecreator += 1;
  }

  if (sequence[universalrecreator] != "NULL") {
    newnode.setright(recreatenode(sequence, universalrecreator));
  } else {
    universalrecreator += 1;
  }

  return newnode;
} // purge the read stored data for blank elements


function purgesequence(sequence) {
  var newsequence = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sequence[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      i = _step.value;

      if (i != "") {
        newsequence.push(i);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return newsequence;
} // recreate a tree based on stored data


function recreatetree(sequence) {
  sequence = sequence.replaceAll("%20", " ");
  sequence = sequence.replaceAll("  ", " ");
  sequence = sequence.split(" ");
  sequence = purgesequence(sequence);
  console.log(sequence);
  universalrecreator = 0;
  root = new treenode(sequence[universalrecreator], null, null);
  nodearr[0] = root;
  universalrecreator += 1;

  if (sequence[universalrecreator] != "NULL") {
    root.setleft(recreatenode(sequence, universalrecreator));
  } else {
    universalrecreator += 1;
  }

  if (sequence[universalrecreator] != "NULL") {
    root.setright(recreatenode(sequence, universalrecreator));
  } else {
    universalrecreator += 1;
  }
} // disable light up animation buttons until the current animation ends


function disableplay() {
  var post = document.getElementById('playpost');
  var ino = document.getElementById('playin');
  var pre = document.getElementById('playpre');
  post.style.color = 'rgba(125,125,125,0.6)';
  post.style.cursor = "wait";
  ino.style.color = 'rgba(125,125,125,0.6)';
  ino.style.cursor = "wait";
  pre.style.color = 'rgba(125,125,125,0.6)';
  pre.style.cursor = "wait";
  disabled = true;
} // eanable light up animation buttons after the animations end


function enableplay() {
  var post = document.getElementById('playpost');
  var ino = document.getElementById('playin');
  var pre = document.getElementById('playpre');
  post.style.color = 'rgb(255, 51, 0)';
  post.style.cursor = "pointer";
  ino.style.color = 'rgb(255, 51, 0)';
  ino.style.cursor = "pointer";
  pre.style.color = 'rgb(255, 51, 0)';
  pre.style.cursor = "pointer";
  disabled = false;
} // open the background backdrop when a dialog is opened


function openscreen() {
  var el = document.getElementById("screen");
  el.style.display = "block";
  el.style.opacity = 0.4;
  var res = document.getElementById("res");
  res.style.opacity = 0.4;
  stayingup = true;
} // close the background backdrop


function closescreen() {
  console.log("called to close");
  var el = document.getElementById("screen");
  el.style.display = "none";
  el.style.opacity = 0;
  var res = document.getElementById("res");
  res.style.opacity = 1;
  stayingup = false;
} // open the "how to use" if its the first time this user has opened this


var bt1 = localStorage.getItem('binarytree');

if (bt1 == null) {
  localStorage.setItem('binarytree', 'opened');
  document.getElementById('instructions').style.display = 'block';
  document.getElementById('instructions').style.opacity = 1;
  document.getElementById('instructions').style.left = '25%';
} // load the settings from localstorage


var theme = localStorage.getItem('bttheme');
var angle = localStorage.getItem('btangle');
var demospeed = localStorage.getItem('btspeed');
var lasttoggle = new Date();

if (theme == null) {
  localStorage.setItem("bttheme", 'light');
  theme = 'light';
} else if (theme == 'dark') {
  forcedark();
}

if (angle == null) {
  localStorage.setItem("btangle", 'cornered');
} else if (angle == 'curved') {
  angle = 'cornered';
  toggleangle(true);
}

if (demospeed == null) {
  localStorage.setItem("btspeed", 500);
  demospeed = 500;
}

document.getElementById("waittime").value = demospeed;
document.getElementById('animwait').textContent = 'Light-up animation delay time: ' + demospeed + 'ms';

function getrandtree() {
  // let mnode = new treenode('root', null, null);
  var mnode = root;
  var nleft = new treenode('left', null, null);
  var nright = new treenode('right', null, null);
  mnode.setleft(nleft);
  nodesadded += 1; // add a new one

  nodearr[nodesadded] = nleft;
  mnode.setright(nright);
  nodesadded += 1; // add a new one

  nodearr[nodesadded] = nright;
  var totalnodes = 1;
  totalnodes += addlevel75(nleft, 0);
  totalnodes += addlevel75(nright, 0);
  return mnode;
}

function addlevel75(root, level) {
  if (level >= document.getElementById('numnodes').value - 1) {
    return;
  }

  var newnode;

  if (Math.floor(Math.random() * 4) > 0) {
    newnode = new treenode(0, null, null);
    root.setleft(newnode);
    nodesadded += 1; // add a new one

    nodearr[nodesadded] = newnode;
    addlevel75(newnode, level + 1);
  }

  if (Math.floor(Math.random() * 4) > 0) {
    newnode = new treenode(0, null, null);
    root.setright(newnode);
    nodesadded += 1; // add a new one

    nodearr[nodesadded] = newnode;
    addlevel75(newnode, level + 1);
  }
} // counts the nodes


function countnodes(root) {
  if (root == null) {
    return 0;
  }

  return 1 + countnodes(root.getleft) + countnodes(root.getright);
} // get an arr with n random numbers


function genlist(n) {
  // lets try smth
  var ttrs = []; // yes the audi

  while (ttrs.length < n) {
    ttrs.push(Math.floor(Math.random() * 100));
  }

  return ttrs; // yes bring it back pls audi
} // generate a list with only characters


function genlistabc(n) {
  var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var u = [];

  while (u.length < n) {
    u.push(abc[Math.floor(Math.random() * 26)]);
  }

  return u;
} // just put in the values into the tree


function putnums(root, arr) {
  if (arr.length == 0) {
    return;
  } //get nums of nodes on left


  var leftcount = countnodes(root.getleft);
  var rightcount = countnodes(root.getright); // ideally leftcount+rightocount+1 shud = arr.length
  // so u have the arr

  var leftrange = arr.slice(0, leftcount);
  var rightrange = arr.slice(leftcount + 1, arr.length);
  var thenum = arr[leftcount];
  root.setvalue(thenum);
  putnums(root.getleft, leftrange);
  putnums(root.getright, rightrange);
  return root;
} // this is for a random tree


function randtree() {
  // first of all make a tree
  var theroot = getrandtree();
  var ncount = countnodes(theroot); // now gen an arr with those many nodes

  var genedarr;
  var tp = document.getElementById('treetype').value;

  if (tp == 'alpha') {
    type = 'alpha';
    genedarr = genlistabc(ncount);
  } else if (tp == 'numeric') {
    type = 'numeric';
    genedarr = genlist(ncount);
  } else {
    var rr = Math.floor(Math.random() * 2);

    if (rr == 0) {
      type = 'alpha';
      genedarr = genlistabc(ncount);
    } else {
      type = 'numeric';
      genedarr = genlist(ncount);
    }
  }

  putnums(theroot, genedarr);
  return theroot;
}

var root = new treenode('root', null, null); // let left = new treenode('left',new treenode('leftleft',new treenode('leftleftleft',null,null),null),new treenode('leftright',new treenode('leftrightleft',null,null),null));
// let right = new treenode('right',null,null);
// let rightright = new treenode('rightright',null,new treenode('rightrightright',null,null));
// let rightleft = new treenode('rightleft',null,null);
// root.setleft(left);
// root.setright(right);
// right.setleft(rightleft);
// right.setright(rightright);

var sleep = function sleep(ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};

var leftbuttons = [];
var delnodes = []; // i know having a set capacity generally isnt good but im confident this will be more than enough
// could be increased but may impact performance if there are a bunch of not used really

var nodearr = [root, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var disabled = false; // intialx

var x = 50;
var y = 0;
var rnzindex = 10;
var stayingup = false;

if (localStorage.getItem("binarytreestorage") != null) {
  console.log('used made tree', localStorage.getItem("binarytreestorage"));
  recreatetree(localStorage.getItem("binarytreestorage"));
}

redrawtree(); //glowtree(root);
// update the count without interfereing with the stuff

(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          fetch("https://skparabapi-1-x8164494.deta.app/increment?key=binarytree").then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
          });

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
})();