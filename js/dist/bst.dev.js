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
  function treenode(value, left, right, par, xc) {
    _classCallCheck(this, treenode);

    this.value = value;
    this.left = left;
    this.right = right;
    this.xcoord = xc;
    this.parent = par;
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
    key: "setxcoord",
    value: function setxcoord(x) {
      this.xcoord = x;
    }
  }, {
    key: "setparent",
    value: function setparent(p) {
      this.parent = p;
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
  }, {
    key: "getxcoord",
    get: function get() {
      return this.xcoord;
    }
  }, {
    key: "getparent",
    get: function get() {
      return this.parent;
    }
  }]);

  return treenode;
}();

var treeholder = document.getElementById('treeholder');
var nodesadded = 0;
var badnode = null;
var explanation = "";
var resl = true;
var badid = '';
var type = 'alpha';
var onsomeselector = false;

function drawnode(node, x, y) {
  var div = document.createElement('div');

  if (!nodearr.includes(node)) {// add a new one
    // nodearr[nodesadded] = node;
    // console.log('pushed in '+node.getvalue+' with '+nodearr.length +' and '+ nodesadded);
    // addedone = true;
  }

  var thisnum = nodearr.indexOf(node);
  div.innerHTML = "\n    <h2 style='margin-top: 5px;'>".concat(node.getvalue, "</h2>\n    ");
  var theleft = node.getleft;
  node.setxcoord(x);
  div.style.marginLeft = x + '%';
  div.style.marginTop = y + 'px';
  div.style.position = 'absolute';
  div.id = 'thenode' + String(thisnum);

  if (node == badnode) {
    div.setAttribute('id', 'badone');
  } //div.onclick = function() {document.getElementById(div.id).style.zIndex = rnzindex; rnzindex += 1;};


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
  var newnode = new treenode(0, null, null, nodearr[num]);
  nodearr[num].setleft(newnode);
  nodesadded += 1; // add a new one

  nodearr[nodesadded] = newnode;
  console.log(nodearr);
  redrawtree();
}

function addright(num) {
  var newnode = new treenode(0, null, null, nodearr[num]);
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
    console.log('set xcoord as ', x, 'but', root.getxcoord);
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
    var clr1 = "black";

    if (theme == "light") {
      clr1 = 'black';
    } else {
      clr1 = "white";
    }

    div1.style.borderRight = '7px solid ' + clr1;
    div1.style.borderLeft = '0px solid ' + clr1;
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

function outputlevelorder(node) {
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

  if (userpreorder == preorder) {
    document.getElementById('preorder').style.border = '3px solid rgba(0,245,0)';
  } else {
    document.getElementById('preorder').style.border = '3px solid rgba(245,0,0)';
  }

  var userinorder = document.getElementById('inorder').value;
  userinorder = userinorder.replaceAll(' ', '').replaceAll(',', '');

  if (userinorder == inorder) {
    document.getElementById('inorder').style.border = '3px solid rgba(0,245,0)';
  } else {
    document.getElementById('inorder').style.border = '3px solid rgba(245,0,0)';
  }

  var userpostorder = document.getElementById('postorder').value;
  userpostorder = userpostorder.replaceAll(' ', '').replaceAll(',', '');

  if (userpostorder == postorder) {
    document.getElementById('postorder').style.border = '3px solid rgba(0,245,0)';
  } else {
    document.getElementById('postorder').style.border = '3px solid rgba(245,0,0)';
  }
}

function showsolutions() {
  checkall(); //document.getElementById('solutions').style.display = 'block';

  document.getElementById('solutions').style.opacity = 1;
  document.getElementById('solutions').style.top = '25%';
}

function openel(el) {
  console.log('shud have opened it opener');
  document.getElementById(el).style.display = 'block';
  document.getElementById(el).style.opacity = 1;
  document.getElementById(el).style.top = '25%';
  document.getElementById(el).style.left = '25%';
}

function closeprefs() {
  //document.getElementById('solutions').style.display = 'none';
  document.getElementById('preferences').style.opacity = 0;
  document.getElementById('preferences').style.top = '100%';
}

function closeel(e) {
  document.getElementById(e).style.opacity = 0;
  document.getElementById(e).style.left = '-100%';
}

function closesolutions() {
  //document.getElementById('solutions').style.display = 'none';
  document.getElementById('solutions').style.opacity = 0;
  document.getElementById('solutions').style.left = '-100%';
}

function closeinstructions() {
  document.getElementById('instructions').style.top = '100%';
  document.getElementById('instructions').style.opacity = 0;
} // rules


var bt1 = localStorage.getItem('binarytree');

if (bt1 == null) {
  localStorage.setItem('binarytree', 'opened'); // document.getElementById('instructions').style.display = 'block';
  // document.getElementById('instructions').style.opacity = 1;
  // document.getElementById('instructions').style.left = '25%';
}

var theme = localStorage.getItem('bttheme');
var angle = localStorage.getItem('btangle');
var lasttoggle = new Date();

if (theme == null) {
  localStorage.setItem("bttheme", 'light');
  theme = 'light';
} else if (theme == 'dark') {
  forcedark();
}

var root = new treenode('root', null, null, null); // dont think this is needed
// function isbst(root){
//     if (root.getleft != null && root.getleft.getvalue > root.getvalue){
//         // not fine
//         return false;
//     }
//     if (root.getright != null && root.getright.getvalue > root.getvalue){
//         // also not fine
//         return false;
//     }
// }

function genlist(l) {
  var i = 0;
  var arr = [];
  var n = 0;

  while (i < l) {
    n += Math.floor(Math.random() * 10) + 1;
    arr.push(n);
    i += 1;
  }

  type = 'numeric';
  return arr;
}

function genlistabc(l) {
  var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // so now we need to remove (26-l) elements from it

  if (l > 26) {
    // we cant make a alphabetical tree out of this, get a new one
    location.reload();
  }

  while (abc.length > l) {
    //console.log(Math.floor(Math.random()*abc.length),abc);
    abc.splice(Math.floor(Math.random() * abc.length), 1);
  }

  console.log(l, abc);
  type = 'alpha';
  return abc;
}

function createl(root, arr) {
  if (arr.length == 0) {
    return null;
  }

  var mid = arr[Math.floor(arr.length / 2)];
  var left = arr.slice(0, Math.floor(arr.length / 2));
  var right = arr.slice(Math.floor(arr.length / 2) + 1, arr.length);
  var mnode = new treenode(mid, null, null);
  mnode.setleft(createl(mnode, right));
  mnode.setright(createl(mnode, left));
  return mnode;
}

function reversearr(arr) {
  var newarr = [];
  var e = arr.length - 1;

  while (e >= 0) {
    newarr.push(arr[e]);
    e -= 1;
  }

  return newarr;
}

function genbst() {
  // suppose u have an arr
  //let arr = [1,7,9,15,20,23,32,45,55,62,64,75,88,99];
  var arr = genlist(document.getElementById('numnodes').value);
  console.log('arr before ', arr); // arr = reversearr(arr);

  console.log('arr after ', arr);
  var mid = arr[Math.floor(arr.length / 2)];
  var left = arr.slice(0, Math.floor(arr.length / 2));
  var right = arr.slice(Math.floor(arr.length / 2) + 1, arr.length);
  var mnode = new treenode(mid, null, null);
  mnode.setleft(createl(mnode, right));
  mnode.setright(createl(mnode, left));
  console.log(mnode);
  return mnode;
}

function adderror(root) {
  // not rlly garunteeing an error add but yeah
  // now shall we put an error or not
  var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  console.log('abclength', abc.length);
  thetree = root;
  var rand = Math.floor(Math.random() * 10);
  var changednode = null;

  if (rand < 5) {
    // yup were putting error
    // what kind of error
    var rand2 = Math.floor(Math.random() * 10);

    if (rand2 == 0) {
      // head is too low
      var newhead;

      if (type != "alpha") {
        newhead = thetree.getleft.getvalue - (Math.floor(Math.random() * 5) + 1);
        thetree.setvalue(newhead);
        changednode = thetree;
      } else {
        // lower than thetree.getleft.getvalue
        var base = abc.indexOf(thetree.getleft.getvalue); // now add a rand to the base

        base = Math.floor(base * Math.random());
        newhead = abc[base];
        thetree.setvalue(newhead);
        changednode = thetree;
        console.log('changed1 index ', base);
      }

      explanation = "The root valued " + newhead + " is too low, making the left child's value (" + thetree.getleft.getvalue + ") larger than it.";
    } else if (rand2 == 1) {
      // head is too high
      var _newhead;

      if (type != "alpha") {
        _newhead = thetree.getright.getvalue + (Math.floor(Math.random() * 5) + 1);
        thetree.setvalue(_newhead);
        changednode = thetree;
      } else {
        // lower than thetree.getleft.getvalue
        var _base = abc.indexOf(thetree.getright.getvalue); // now add a rand to the base


        _base = Math.floor(_base + Math.random() * (26 - _base));
        _newhead = abc[_base];
        thetree.setvalue(_newhead);
        changednode = thetree;
        console.log('changed2 index ', _base);
      }

      explanation = "The root valued " + _newhead + " is too high, making the right child's value (" + thetree.getright.getvalue + ") smaller than it.";
    } else if (rand2 == 2) {
      // the second level left is too high
      // make it higher than the head
      var _newhead2;

      if (type != "alpha") {
        _newhead2 = thetree.getvalue + (Math.floor(Math.random() * 5) + 1);
        thetree.getleft.setvalue(_newhead2);
        changednode = thetree.getleft;
      } else {
        var _base2 = abc.indexOf(thetree.getvalue); // now add a rand to the base


        _base2 = Math.floor(_base2 + Math.random() * (26 - _base2));
        _newhead2 = abc[_base2];
        thetree.getleft.setvalue(_newhead2);
        changednode = thetree.getleft;
        console.log('changed3 index ', _base2);
      }

      explanation = "The node valued " + _newhead2 + " is too high, making it higher than the parent (" + thetree.getvalue + "), which it is the left child of.";
    } else if (rand2 == 3) {
      // the second level right is too low
      // make it lower than the head
      var _newhead3;

      if (type != "alpha") {
        _newhead3 = thetree.getvalue - (Math.floor(Math.random() * 5) + 1);
        thetree.getright.setvalue(_newhead3);
        changednode = thetree.getright;
      } else {
        var _base3 = abc.indexOf(thetree.getvalue); // now add a rand to the base


        _base3 = Math.floor(_base3 * Math.random());
        _newhead3 = abc[_base3];
        thetree.getright.setvalue(_newhead3);
        changednode = thetree.getright;
        console.log('changed4 index ', _base3);
      }

      explanation = "The node valued " + _newhead3 + " is too low, making it lower than the parent (" + thetree.getvalue + "), which it is the right child of.";
    } else if (rand2 >= 4) {
      // make a last node bigger or smaller than parent
      var lastnode = null;
      var lastlastnode = null;
      var tn = thetree;
      var lastdir = '0';
      var lastlastdir = '0';

      while (tn != null) {
        lastlastdir = lastdir;
        lastlastnode = lastnode;
        lastnode = tn;

        var _rand = Math.random();

        if (_rand < 0.5) {
          tn = tn.getleft;
          lastdir = 'l';
        } else {
          tn = tn.getright;
          lastdir = 'r';
        }
      }

      var _newhead4;

      if (lastlastdir == 'r') {
        if (type != "alpha") {
          _newhead4 = lastlastnode.getvalue - (Math.floor(Math.random() * 5) + 1);
          console.log(lastlastnode.getvalue, 'minus smth');
        } else {
          var _base4 = abc.indexOf(lastlastnode.getvalue); // now add a rand to the base


          _base4 = Math.floor(_base4 * Math.random());
          _newhead4 = abc[_base4];
          console.log('changed5 index ', _base4);
        }

        explanation = "The node valued " + _newhead4 + " is too low, making it lower than its parent (" + lastlastnode.getvalue + "), which it is the right child of.";
      } else {
        if (type != "alpha") {
          _newhead4 = lastlastnode.getvalue + (Math.floor(Math.random() * 5) + 1);
          console.log(lastlastnode.getvalue, 'plus smth');
        } else {
          var _base5 = abc.indexOf(lastlastnode.getvalue); // now add a rand to the base


          _base5 = Math.floor(_base5 + Math.random() * (26 - _base5));
          _newhead4 = abc[_base5];
          console.log('changed6 index ', _base5);
        }

        explanation = "The node valued " + _newhead4 + " is too high, making it higher than its parent (" + lastlastnode.getvalue + "), which it is the left child of.";
      }

      console.log('modified', _newhead4);
      lastnode.setvalue(_newhead4);
      changednode = lastnode;
    }
  } else {
    // nope were good to go
    explanation = "This follows the rules of a binary search tree";
  }

  badnode = changednode;
  return thetree;
}

function iscorrect() {
  if (badnode == null) {
    // correct
    document.getElementById('correct').style.border = '3px solid rgb(0,255,0)';
    document.getElementById('wrong').style.border = '3px solid rgb(255,0,0)';
    openel('corr');
  } else {
    // has an error
    document.getElementById('correct').style.border = '3px solid rgb(255,0,0)';
    document.getElementById('wrong').style.border = '3px solid rgb(0,255,0)';
    resl = true;
    document.getElementById('badone').style.border = '3px solid red';
    document.getElementById('explanation').innerHTML = explanation;
    openel('wr');
  } //document.getElementById('wrong').style.left = '50%';
  //document.getElementById('explanation').textContent = 'Explanation: '+explanation;

}

function iswrong() {
  return regeneratorRuntime.async(function iswrong$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (badnode == null) {
            // doesnt have an error
            document.getElementById('wrong').style.border = '3px solid rgb(255,0,0)';
            document.getElementById('correct').style.border = '3px solid rgb(0,255,0)';
            document.getElementById('explanation').innerHTML = explanation;
            openel('wr');
          } else {
            // has an error
            document.getElementById('wrong').style.border = '3px solid rgb(0,255,0)';
            document.getElementById('correct').style.border = '3px solid rgb(255,0,0)';
            resl = true;
            document.getElementById('badone').style.border = '3px solid red';
            openel('corr');
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

function countnodes(root) {
  if (root == null) {
    return 0;
  }

  return 1 + countnodes(root.getleft) + countnodes(root.getright);
}

function getrandtree() {
  var mnode = new treenode('root', null, null);
  var nleft = new treenode('left', null, null);
  var nright = new treenode('right', null, null);
  mnode.setleft(nleft);
  mnode.setright(nright);
  var totalnodes = 1;
  totalnodes += addlevel75(nleft, 0);
  totalnodes += addlevel75(nright, 0);
  drawtree(mnode, x, y, 50);
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
    addlevel75(newnode, level + 1);
  }

  if (Math.floor(Math.random() * 4) > 0) {
    newnode = new treenode(0, null, null);
    root.setright(newnode);
    addlevel75(newnode, level + 1);
  }
}

function raiseresults() {
  if (stayingup) {
    return;
  }

  var res = document.getElementById("res");
  res.style.top = (1 - res.offsetHeight / window.innerHeight) * 100 + "%";
}

function lowerresults() {
  if (stayingup || onsomeselector) {
    return;
  }

  var res = document.getElementById("res");
  res.style.top = "90%";
}

function updatetreetype() {
  var alphabetical = document.getElementById("alphabetical").checked;
  var numeric = document.getElementById("numeric").checked;

  if (alphabetical && numeric) {
    localStorage.setItem('treetype', "rand");
  } else if (alphabetical) {
    localStorage.setItem('treetype', "alpha");
  } else if (numeric) {
    localStorage.setItem('treetype', "numeric");
  }

  console.log(localStorage.getItem("treetype"));
}

function openprefs() {
  document.getElementById('preferences').style.display = 'block';
  document.getElementById('preferences').style.opacity = 1;
  document.getElementById('preferences').style.top = '25%';
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
    r.style.setProperty('--main', '#0d6efd');
    r.style.setProperty('--bgslight', 'rgba(255,255,255,0.6)');
    r.style.setProperty('--slight', 'rgb(220,220,220)');
  } else {
    // make dark
    theme = 'dark';
    localStorage.setItem('bttheme', 'dark');
    document.getElementById('theme').textContent = "Theme: (dark)";
    r.style.setProperty('--bg', 'black');
    r.style.setProperty('--contrast', 'white');
    r.style.setProperty('--main', '#0d6efd');
    r.style.setProperty('--bgslight', 'rgba(0,0,0,0.6)');
    r.style.setProperty('--slight', 'rgb(40, 40, 40)');
  }
}

function forcedark() {
  theme = 'dark';
  localStorage.setItem('bttheme', 'dark');
  document.getElementById('theme').textContent = "Theme: (dark)";
  var r = document.querySelector(':root');
  r.style.setProperty('--bg', 'black');
  r.style.setProperty('--contrast', 'white');
  r.style.setProperty('--main', '#0d6efd');
  r.style.setProperty('--bgslight', 'rgba(0,0,0,0.6)');
  r.style.setProperty('--slight', 'rgb(40, 40, 40)');
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

function preorderwithnullpointers(node) {
  if (node == null) {
    return "NULL";
  }

  var st = "";
  st += node.getvalue + " ";
  st += preorderwithnullpointers(node.getleft) + " ";
  st += preorderwithnullpointers(node.getright) + " ";
  return st.replaceAll("deleted", ""); //recreatetree("a b NULL c NULL NULL   NULL ");
}

function createshareURL() {
  var query = preorderwithnullpointers(theroot);
  query = query.replaceAll(" ", "%20");
  document.getElementById("shareurldisp").textContent = location.href + "/share?data=" + query;
} // let left = new treenode('left',new treenode('leftleft',new treenode('leftleftleft',null,null),null),new treenode('leftright',new treenode('leftrightleft',null,null),null));
// let right = new treenode('right',null,null);
// let rightright = new treenode('rightright',null,new treenode('rightrightright',null,null));
// let rightleft = new treenode('rightleft',null,null);
// root.setleft(left);
// root.setright(right);
// right.setleft(rightleft);
// right.setright(rightright);


var leftbuttons = [];
var delnodes = [];
var nodearr = [root, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // intialx

var x = 50;
var y = 0;
var rnzindex = 10;
var stayingup = false; //drawtree(root, x, y, 50);
//let start = genbst();
//console.log(start);
//drawtree(start, x, y, 50);

function initnums() {
  var tv = document.getElementById('numnodes').value;

  if (tv == "" || isNaN(parseInt(tv))) {
    document.getElementById('numnodes').value = 3;
  }

  document.getElementById("levelsdisplay").innerHTML = "Max number of levels (" + tv + ")";
  localStorage.setItem('levels', String(document.getElementById('numnodes').value));
}

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
}

var thl = localStorage.getItem('levels');

if (thl == null) {
  initnums();
} else {
  document.getElementById('numnodes').value = parseInt(thl);
}

initnums(); // let actualtree = runtree();

var theroot = getrandtree();
var ncount = countnodes(theroot); // now gen an arr with those many nums
// shud it be alhpabetical or numeric
// yes the audi

var ttrs = localStorage.getItem('treetype');

if (ttrs == null) {
  document.getElementById('numeric').checked = true;
  document.getElementById('alphabetical').checked = false;
  localStorage.setItem('treetype', 'numeric');
  ttrs = 'numeric';
} else {
  if (ttrs == 'rand') {
    document.getElementById('numeric').checked = true;
    document.getElementById('alphabetical').checked = true;
  } else if (ttrs == 'numeric') {
    document.getElementById('numeric').checked = true;
    document.getElementById('alphabetical').checked = false;
  } else if (ttrs == "alphabetical") {
    document.getElementById('numeric').checked = false;
    document.getElementById('alphabetical').checked = true;
  }
}

var genedarr;
var tp = ttrs;

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

theroot = putnums(theroot, genedarr);
theroot = adderror(theroot);
drawtree(theroot, x, y, 50); // now put att the things into the tree
//theroot.setvalue(countnodes(theroot));
// update the coubnt without interfereing with the stuff

(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          fetch("https://pst652.deta.dev/?UPDATECOUNTER=bst").then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
          });

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
})();