"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// binary tree shot
// ive neevr made a class before lmfao
// this is a treenode
var treenode =
/*#__PURE__*/
function () {
  function treenode(value, left, right) {
    _classCallCheck(this, treenode);

    this.value = value;
    this.left = left;
    this.right = right;
  }

  _createClass(treenode, [{
    key: "setvalue",
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
}();

var treeholder = document.getElementById('treeholder');
var nodesadded = 0;

function drawnode(node, x, y) {
  var div = document.createElement('div');

  if (!nodearr.includes(node)) {// add a new one
    // nodearr[nodesadded] = node;
    // console.log('pushed in '+node.getvalue+' with '+nodearr.length +' and '+ nodesadded);
    // addedone = true;
  }

  var thisnum = nodearr.indexOf(node);
  div.innerHTML = "\n    <input id='val".concat(thisnum, "' type='text' class='nodeval' value='").concat(node.getvalue, "' onchange=\"modvalue(").concat(thisnum, ");\">\n    ");
  var theleft = node.getleft;

  if (theleft == null || theleft.getvalue == 'deleted') {
    div.innerHTML += " <button id='leftadder".concat(thisnum, "' class='nodeadderleft' onclick='addleft(").concat(thisnum, ");'>left</button>");
  } else {
    div.innerHTML += " <button id='leftadder".concat(thisnum, "' class='nodeadderleft' style='opacity: 0;'>left</button>");
  }

  var theright = node.getright;

  if (theright == null || theright.getvalue == 'deleted') {
    div.innerHTML += "<button id='rightadder".concat(thisnum, "' class='nodeadderright' onclick='addright(").concat(thisnum, ");'>right</button>");
  } else {
    div.innerHTML += "<button id='rightadder".concat(thisnum, "' class='nodeadderright' style='opacity: 0;'>right</button>");
  }

  if ((theright == null || theright.getvalue == 'deleted') && (theleft == null || theleft.getvalue == 'deleted') && node != root) {
    div.innerHTML += " <button id='deletenode".concat(thisnum, "' onclick='delnode(").concat(thisnum, ");' class='deletenode'>del</button>");
  } else {
    div.innerHTML += " <button id='deletenode".concat(thisnum, "' class='deletenode' style='opacity: 0;'>del</button>");
  }

  div.style.marginLeft = x + '%';
  div.style.marginTop = y + 'px';
  div.style.position = 'absolute';
  div.id = 'thenode' + String(thisnum);

  div.onclick = function () {
    document.getElementById(div.id).style.zIndex = rnzindex;
    rnzindex += 1;
  };

  rnzindex += 1;
  div.className = 'node'; // if (addedone){
  //     nodesadded += 1;
  // }

  treeholder.appendChild(div);
}

function modvalue(n) {
  var el = document.getElementById('val' + n);
  nodearr[n].setvalue(el.value);
}

function delnode(n) {
  console.log(nodearr, n, nodearr[n].getvalue); //nodearr[n].setvalue('deleted');

  var thing = nodearr[n];
  thing.setvalue('deleted');
  nodearr[n] = null;
  nodearr.splice(n, 1); //nodearr[n] = null;
  // go through and find whos left or right this is
  // console.log(findnode(root,nodearr[n]));
  //delnodes.push(n);

  console.log(root.getleft);
  nodesadded -= 1;
  redrawtree();
}

function redrawtree() {
  console.log(nodearr);
  treeholder.innerHTML = "";
  connectors.innerHTML = "";
  drawtree(root, 50, 0, 50);
}

function addleft(num) {
  console.log('addleft on ' + num + ' with ' + nodearr);
  var newnode = new treenode(0, null, null);
  nodearr[num].setleft(newnode);
  nodesadded += 1; // add a new one

  nodearr[nodesadded] = newnode;
  console.log(nodearr);
  redrawtree();
  return nodesadded;
}

function addright(num) {
  var newnode = new treenode(0, null, null);
  nodearr[num].setright(newnode);
  nodesadded += 1; // add a new one

  nodearr[nodesadded] = newnode;
  redrawtree();
} // draw the tree recursive


function drawtree(root, x, y, prevx) {
  if (root.getvalue == 'deleted') {
    root = null;
  }

  if (root != null && root.getvalue != 'deleted') {
    drawnode(root, x, y);
    var newy = y + 75;
    var leftx;
    var rightx;

    if (x == 50) {
      leftx = 25;
      rightx = 75;
    } else {
      // distance from middle Math.abs(50-x)
      leftx = x - Math.abs(prevx - x) / 2;
      rightx = x + Math.abs(prevx - x) / 2;
      console.log(leftx);
    } // leftx = leftx-(5000/window.innerWidth);
    // rightx = rightx-(5000/window.innerWidth);


    var div = document.createElement('div');
    var wid = Math.abs(leftx - x);
    div.className = 'connector';
    div.style.width = wid + '%';
    div.style.height = '75px';
    div.style.left = leftx + 5000 / window.innerWidth + '%';
    div.style.top = y + 150 + 'px';
    div.style.zIndex = -1; // line for right   

    var div1 = document.createElement('div');
    div1.className = 'connector';
    div1.style.borderRight = '7px solid var(--contrast)';
    div1.style.borderLeft = '0px solid white';
    div1.style.width = wid + '%';
    div1.style.height = '75px';
    div1.style.left = x + 5000 / window.innerWidth + '%';
    div1.style.top = y + 150 + 'px';
    div1.style.zIndex = -1;

    if (root.getleft != null && root.getleft.getvalue != 'deleted') {
      document.getElementById('connectors').appendChild(div);
      drawtree(root.getleft, leftx, newy, x);
    }

    if (root.getright != null && root.getright.getvalue != 'deleted') {
      document.getElementById('connectors').appendChild(div1);
      drawtree(root.getright, rightx, newy, x);
    }
  }
}

function traversepreorder(node) {
  if (node == null) {
    return "";
  }

  var st = "";
  st += node.getvalue + " ";
  st += traversepreorder(node.getleft) + " ";
  st += traversepreorder(node.getright) + " ";
  return st;
}

function traverseinorder(node) {
  if (node == null) {
    return "";
  }

  var st = "";
  st += traverseinorder(node.getleft) + " ";
  st += node.getvalue + " ";
  st += traverseinorder(node.getright) + " ";
  return st;
}

function traversepostorder(node) {
  if (node == null) {
    return "";
  }

  var st = "";
  st += traversepostorder(node.getleft) + " ";
  st += traversepostorder(node.getright) + " ";
  st += node.getvalue + " ";
  return st;
}

function checkall() {
  // first run each
  var preorder = traversepreorder(root).replaceAll('deleted', '');
  var inorder = traverseinorder(root).replaceAll('deleted', '');
  var postorder = traversepostorder(root).replaceAll('deleted', '');
  var sols = document.getElementById('solutions');
  sols.innerHTML = "\n    <h1 style='font-size: 25px'>Solutions</h1>\n    <h1 style='font-size: 15px'>Pre order: ".concat(preorder, "</h1>\n    <h1 style='font-size: 15px'>In order: ").concat(inorder, "</h1>\n    <h1 style='font-size: 15px'>Post order: ").concat(postorder, "</h1>\n    <div class=\"close\" onclick=\"closesolutions();\">Close</div>\n    ");
  preorder = preorder.replaceAll(' ', '');
  inorder = inorder.replaceAll(' ', '');
  postorder = postorder.replaceAll(' ', '');
  var userpreorder = document.getElementById('preorder').value;
  userpreorder = userpreorder.replaceAll(' ', '').replaceAll(',', '');

  if (userpreorder.toUpperCase() == preorder.toUpperCase()) {
    document.getElementById('preorder').style.border = '3px solid rgba(0,245,0)';
  } else {
    document.getElementById('preorder').style.border = '3px solid rgba(245,0,0)';
  }

  var userinorder = document.getElementById('inorder').value;
  userinorder = userinorder.replaceAll(' ', '').replaceAll(',', '');

  if (userinorder.toUpperCase() == inorder.toUpperCase()) {
    document.getElementById('inorder').style.border = '3px solid rgba(0,245,0)';
  } else {
    document.getElementById('inorder').style.border = '3px solid rgba(245,0,0)';
  }

  var userpostorder = document.getElementById('postorder').value;
  userpostorder = userpostorder.replaceAll(' ', '').replaceAll(',', '');

  if (userpostorder.toUpperCase() == postorder.toUpperCase()) {
    document.getElementById('postorder').style.border = '3px solid rgba(0,245,0)';
  } else {
    document.getElementById('postorder').style.border = '3px solid rgba(245,0,0)';
  }
}

function showsolutions() {
  checkall(); //document.getElementById('solutions').style.display = 'block';

  document.getElementById('solutions').style.opacity = 1;
  document.getElementById('solutions').style.left = '25%';
}

function openprefs() {
  document.getElementById('preferences').style.opacity = 1;
  document.getElementById('preferences').style.left = '25%';
}

function openel(el) {
  document.getElementById(el).style.opacity = 1;
  document.getElementById(el).style.left = '25%';
}

function toggletheme(override) {
  var r = document.querySelector(':root');
  var endtime = new Date();
  var timediff = endtime - lasttoggle;
  lasttoggle = endtime;

  if (timediff < 333 && !override) {
    return;
  }

  console.log('changeing from  ' + theme);

  if (theme == 'dark') {
    // make light
    theme = 'light';
    localStorage.setItem('bttheme', 'light');
    document.getElementById('theme').textContent = "Theme: (light)";
    r.style.setProperty('--bg', 'white');
    r.style.setProperty('--contrast', 'black');
    r.style.setProperty('--main', 'rgb(12, 34, 162)');
  } else {
    // make dark
    theme = 'dark';
    localStorage.setItem('bttheme', 'dark');
    document.getElementById('theme').textContent = "Theme: (dark)";
    r.style.setProperty('--bg', 'black');
    r.style.setProperty('--contrast', 'white');
    r.style.setProperty('--main', 'rgb(7, 176, 176)');
  }
}

function toggleangle(override) {
  var r = document.querySelector(':root');
  var endtime = new Date();
  var timediff = endtime - lasttoggle;
  lasttoggle = endtime;

  if (timediff < 333 && !override) {
    console.log('returned');
    return;
  }

  if (angle == 'cornered') {
    // make light
    angle = 'curved';
    localStorage.setItem('btangle', 'curved');
    document.getElementById('lines').textContent = "Lines: (Curved)";
    r.style.setProperty('--br', '25px');
  } else {
    // make dark
    angle = 'cornered';
    localStorage.setItem('btangle', 'cornered');
    document.getElementById('lines').textContent = "Lines: (Cornered)";
    r.style.setProperty('--br', '0px');
  }
}

function closeprefs() {
  //document.getElementById('solutions').style.display = 'none';
  document.getElementById('preferences').style.opacity = 0;
  document.getElementById('preferences').style.left = '-100%';
}

function closeel(el) {
  //document.getElementById('solutions').style.display = 'none';
  document.getElementById(el).style.opacity = 0;
  document.getElementById(el).style.left = '-100%';
}

function closesolutions() {
  //document.getElementById('solutions').style.display = 'none';
  document.getElementById('solutions').style.opacity = 0;
  document.getElementById('solutions').style.left = '-100%';
}

function closeinstructions() {
  document.getElementById('instructions').style.left = '125%';
  document.getElementById('instructions').style.opacity = 0;
}

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
          idx = nodearr.indexOf(start);
          nd = document.getElementById('thenode' + String(idx));
          nd.style.boxShadow = '7px 7px 5px rgba(255, 255, 0, 0.7)';
          _context.next = 7;
          return regeneratorRuntime.awrap(sleep(350));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(glowtreepreorder(start.getleft));

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(sleep(350));

        case 11:
          _context.next = 13;
          return regeneratorRuntime.awrap(glowtreepreorder(start.getright));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}

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
          return regeneratorRuntime.awrap(sleep(350));

        case 6:
          _context2.next = 8;
          return regeneratorRuntime.awrap(glowtreeinorder(start.getleft));

        case 8:
          nd.style.boxShadow = '7px 7px 5px rgba(255, 255, 0, 0.7)';
          _context2.next = 11;
          return regeneratorRuntime.awrap(sleep(350));

        case 11:
          _context2.next = 13;
          return regeneratorRuntime.awrap(glowtreeinorder(start.getright));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function disableplay() {
  document.getElementById('playpost').style.color = 'rgba(125,125,125,0.6)';
  document.getElementById('playin').style.color = 'rgba(125,125,125,0.6)';
  document.getElementById('playpre').style.color = 'rgba(125,125,125,0.6)';
  disabled = true;
}

function enableplay() {
  document.getElementById('playpost').style.color = 'yellow';
  document.getElementById('playin').style.color = 'yellow';
  document.getElementById('playpre').style.color = 'yellow';
  disabled = false;
}

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
          return regeneratorRuntime.awrap(sleep(350));

        case 8:
          _context3.next = 10;
          return regeneratorRuntime.awrap(glowtreepostorder(start.getright));

        case 10:
          _context3.next = 12;
          return regeneratorRuntime.awrap(sleep(350));

        case 12:
          nd.style.boxShadow = '7px 7px 5px rgba(255, 255, 0, 0.7)'; //enableplay();

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  });
} // rules


var bt1 = localStorage.getItem('binarytree');

if (bt1 == null) {
  localStorage.setItem('binarytree', 'opened');
  document.getElementById('instructions').style.display = 'block';
  document.getElementById('instructions').style.opacity = 1;
  document.getElementById('instructions').style.left = '25%';
}

var theme = localStorage.getItem('bttheme');
var angle = localStorage.getItem('btangle');
var lasttoggle = new Date();

if (theme == null) {
  localStorage.setItem("bttheme", 'dark');
} else if (theme == 'light') {
  theme = 'dark';
  toggletheme(true);
}

if (angle == null) {
  localStorage.setItem("btangle", 'cornered');
} else if (angle == 'curved') {
  angle = 'cornered';
  toggleangle(true);
}

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
} // abcdefghijklmnop


function genlistabc(n) {
  // lets try smth
  var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lucidair = []; // yes the audi

  while (lucidair.length < n) {
    lucidair.push(abc[Math.floor(Math.random() * 26)]);
  }

  return lucidair; //hehe
} // just put in the facking nums


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
var delnodes = [];
var nodearr = [root, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var disabled = false; // intialx

var x = 50;
var y = 0;
var rnzindex = 10;
var stayingup = false;
drawtree(root, x, y, 50); //glowtree(root);
// update the coubnt without interfereing with the stuff

(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          fetch("https://pst652.deta.dev/?UPDATECOUNTER=binarytree").then(function (response) {
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