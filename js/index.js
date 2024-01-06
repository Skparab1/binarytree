// binary tree shot

// ive neevr made a class before lmfao

// this is a treenode

class treenode {
    constructor(value, left, right) {
      this.value = value;
      this.left = left;
      this.right = right;
    }

    get getvalue() {
        return this.value;
    }

    get getleft(){
        return this.left;
    }

    get getright(){
        return this.right;
    }

    setvalue(val){
        this.value = val;
    }

    setleft(l){
        this.left = l;
    }

    setright(r){
        this.right = r;
    }
}

let treeholder = document.getElementById('treeholder');

let nodesadded = 0;

function drawnode(node,x,y){
    const div = document.createElement('div');
    
    if (!nodearr.includes(node)){
        // add a new one
        // nodearr[nodesadded] = node;
        // console.log('pushed in '+node.getvalue+' with '+nodearr.length +' and '+ nodesadded);
        // addedone = true;
    }

    let thisnum = nodearr.indexOf(node);
      
    div.innerHTML = `
    <input id='val${thisnum}' type='text' class='nodeval' value='${node.getvalue}' onchange="modvalue(${thisnum});">
    `;

    let theleft = node.getleft;

    if (theleft == null || theleft.getvalue == 'deleted'){
        div.innerHTML += ` <button id='leftadder${thisnum}' class='nodeadderleft' onclick='addleft(${thisnum});'>left</button>`
    } else {
        div.innerHTML += ` <button id='leftadder${thisnum}' class='nodeadderleft' style='opacity: 0;'>left</button>`
    }

    let theright = node.getright;

    if (theright == null || theright.getvalue == 'deleted'){
        div.innerHTML += `<button id='rightadder${thisnum}' class='nodeadderright' onclick='addright(${thisnum});'>right</button>`;
    } else {
        div.innerHTML += `<button id='rightadder${thisnum}' class='nodeadderright' style='opacity: 0;'>right</button>`;
    }

    if ((theright == null || theright.getvalue == 'deleted') && (theleft == null || theleft.getvalue == 'deleted') && node != root){
        div.innerHTML += ` <button id='deletenode${thisnum}' onclick='delnode(${thisnum});' class='deletenode'>del</button>`
    } else {
        div.innerHTML += ` <button id='deletenode${thisnum}' class='deletenode' style='opacity: 0;'>del</button>`
    }

    div.style.marginLeft = x+'%';
    div.style.marginTop = y+'px';
    div.style.position = 'absolute';

    div.id = 'thenode'+String(thisnum);

    div.onclick = function() {document.getElementById(div.id).style.zIndex = rnzindex; rnzindex += 1;};

    rnzindex += 1;

    div.className = 'node';

    // if (addedone){
    //     nodesadded += 1;
    // }

    treeholder.appendChild(div);
}

function modvalue(n){
    let el = document.getElementById('val'+n);
    nodearr[n].setvalue(el.value);

    storetree();
}

function delnode(n){
    console.log(nodearr,n,nodearr[n].getvalue);
    //nodearr[n].setvalue('deleted');

    let thing = nodearr[n];
    thing.setvalue('deleted');

    nodearr[n] = null;
    nodearr.splice(n,1);
    //nodearr[n] = null;

    // go through and find whos left or right this is
    // console.log(findnode(root,nodearr[n]));

    //delnodes.push(n);
    console.log(root.getleft);

    nodesadded -= 1;

    redrawtree();
}

function storetree(){
    // store the tree in localstorage
    let tostore = preorderwithnullpointers(root);

    localStorage.setItem("binarytreestorage",tostore);
}

function redrawtree(){
    console.log(nodearr);
    treeholder.innerHTML = "";
    connectors.innerHTML = "";

    storetree();
    
    drawtree(root, 50, 0, 50);
}

function addleft(num){
    console.log('addleft on '+num+' with '+nodearr);
    let newnode = new treenode(0,null,null);
    nodearr[num].setleft(newnode);

    nodesadded += 1;
    // add a new one
    nodearr[nodesadded] = newnode;
    console.log(nodearr);

    redrawtree();

    return nodesadded;
}

function addright(num){
    let newnode = new treenode(0,null,null);
    nodearr[num].setright(newnode);

    nodesadded += 1;
    // add a new one
    nodearr[nodesadded] = newnode;

    redrawtree();
}

// draw the tree recursive
function drawtree(root, x, y, prevx){

    if (root.getvalue == 'deleted'){
        root = null;
    }
    if (root != null && root.getvalue != 'deleted'){
        drawnode(root,x,y);

        let newy = y + 75;
        let leftx;
        let rightx;
        if (x == 50){
            leftx = 25;
            rightx = 75;
        } else {
            // distance from middle Math.abs(50-x)
            leftx = x-Math.abs(prevx-x)/2;
            rightx = x+Math.abs(prevx-x)/2;
            console.log(leftx);
        }

        // leftx = leftx-(5000/window.innerWidth);
        // rightx = rightx-(5000/window.innerWidth);

        const div = document.createElement('div');
    
        let wid = Math.abs(leftx-x);
        div.className = 'connector';
        div.style.width = wid+'%';
        div.style.height = '75px'
        div.style.left = (leftx+(5000/window.innerWidth))+'%';
        div.style.top = (y+150)+'px';
        div.style.zIndex = -1;

        // line for right   
        const div1 = document.createElement('div');

        div1.className = 'connector';
        div1.style.borderRight = '7px solid var(--contrast)';
        div1.style.borderLeft = '0px solid white';
        div1.style.width = wid+'%';
        div1.style.height = '75px'
        div1.style.left = (x+(5000/window.innerWidth))+'%';
        div1.style.top = (y+150)+'px';
        div1.style.zIndex = -1;



        if (root.getleft != null && root.getleft.getvalue != 'deleted'){
            document.getElementById('connectors').appendChild(div);
            drawtree(root.getleft,leftx,newy, x);
        }

        if (root.getright != null && root.getright.getvalue != 'deleted'){
            document.getElementById('connectors').appendChild(div1);
            drawtree(root.getright,rightx,newy, x);
        }
    }
}

function traversepreorder(node){
    if (node == null){
        return "";
    }
    let st = "";
    st += node.getvalue+" ";
    st += traversepreorder(node.getleft)+" ";
    st += traversepreorder(node.getright)+" ";

    return st;
}

function traverseinorder(node){
    if (node == null){
        return "";
    }
    let st = "";
    st += traverseinorder(node.getleft)+" ";
    st += node.getvalue+" ";
    st += traverseinorder(node.getright)+" ";

    return st;
}

function traversepostorder(node){
    if (node == null){
        return "";
    }
    let st = "";
    st += traversepostorder(node.getleft)+" ";
    st += traversepostorder(node.getright)+" ";
    st += node.getvalue+" ";
    return st;
}

function checkall(){
    // first run each
    let preorder = traversepreorder(root).replaceAll('deleted','');
    let inorder = traverseinorder(root).replaceAll('deleted','');
    let postorder = traversepostorder(root).replaceAll('deleted','');

    let sols = document.getElementById('solutions');
    sols.innerHTML = `
    <h1 style='font-size: 25px'>Solutions</h1>
    <h1 style='font-size: 15px'>Pre order: ${preorder}</h1>
    <h1 style='font-size: 15px'>In order: ${inorder}</h1>
    <h1 style='font-size: 15px'>Post order: ${postorder}</h1>
    <div class="close" onclick="closesolutions();">Close</div>
    `

    preorder = preorder.replaceAll(' ','');
    inorder = inorder.replaceAll(' ','');
    postorder = postorder.replaceAll(' ','');


    let userpreorder = document.getElementById('preorder').value;
    userpreorder = userpreorder.replaceAll(' ','').replaceAll(',','');
    
    let porder = document.getElementById('preorder');
    let res = document.getElementById('res');
    if (userpreorder.toUpperCase() == preorder.toUpperCase()){
        document.getElementById('preorder').style.border = '3px solid rgba(0,245,0)';
    } else {
        porder.style.border = '3px solid rgba(245,0,0)';
        // let thex = document.getElementById('x1');
        // thex.style.left = porder.offsetLeft+'px';
        // thex.style.top = porder.offsetTop+res.offsetTop+'px';
    }

    let userinorder = document.getElementById('inorder').value;
    userinorder = userinorder.replaceAll(' ','').replaceAll(',','');
    if (userinorder.toUpperCase() == inorder.toUpperCase()){
        document.getElementById('inorder').style.border = '3px solid rgba(0,245,0)';
    } else {
        document.getElementById('inorder').style.border = '3px solid rgba(245,0,0)';
    }

    let userpostorder = document.getElementById('postorder').value;
    userpostorder = userpostorder.replaceAll(' ','').replaceAll(',','');
    if (userpostorder.toUpperCase() == postorder.toUpperCase()){
        document.getElementById('postorder').style.border = '3px solid rgba(0,245,0)';
    } else {
        document.getElementById('postorder').style.border = '3px solid rgba(245,0,0)';
    }
}

function showsolutions(){
    checkall();
    document.getElementById('solutions').style.display = 'block';
    document.getElementById('solutions').style.opacity = 1;
    document.getElementById('solutions').style.top = '25%';
}

function openprefs(){
    document.getElementById('preferences').style.display = 'block';
    document.getElementById('preferences').style.opacity = 1;
    document.getElementById('preferences').style.top = '25%';
}

function openel(el){
    document.getElementById(el).style.display = 'block';
    document.getElementById(el).style.opacity = 1;
    document.getElementById(el).style.top = '25%';
}

function toggletheme(override){
    var r = document.querySelector(':root');

    let endtime = new Date();
    var timediff = endtime - lasttoggle; 
    lasttoggle = endtime;

    if (timediff < 333 && !override){
        return;
    }

    console.log('changeing from  '+theme);
    if (theme == 'dark'){
        // make light
        theme = 'light';
        localStorage.setItem('bttheme','light');
        document.getElementById('theme').textContent = "Theme: (light)";
        r.style.setProperty('--bg', 'white');
        r.style.setProperty('--contrast', 'black');
        r.style.setProperty('--main', '#0d6efd');
        r.style.setProperty('--slight', 'rgb(220,220,220)');
    } else {
        // make dark
        theme = 'dark';
        localStorage.setItem('bttheme','dark');
        document.getElementById('theme').textContent = "Theme: (dark)";
        r.style.setProperty('--bg', 'black');
        r.style.setProperty('--contrast', 'white');
        r.style.setProperty('--main', '#0d6efd');
        r.style.setProperty('--slight', 'rgb(40, 40, 40)');
    }
}

function forcedark(){
    theme = 'dark';
    localStorage.setItem('bttheme','dark');
    document.getElementById('theme').textContent = "Theme: (dark)";
    
    var r = document.querySelector(':root');
    r.style.setProperty('--bg', 'black');
    r.style.setProperty('--contrast', 'white');
    r.style.setProperty('--main', '#0d6efd');
    r.style.setProperty('--slight', 'rgb(40, 40, 40)');

}

function toggleangle(override){
    var r = document.querySelector(':root');

    let endtime = new Date();
    var timediff = endtime - lasttoggle; 
    lasttoggle = endtime;

    if (timediff < 333 && !override){
        console.log('returned');
        return;
    }

    if (angle == 'cornered'){
        // make light
        angle = 'curved';
        localStorage.setItem('btangle','curved');
        document.getElementById('lines').textContent = "Lines: (Curved)";
        r.style.setProperty('--br', '25px');
    } else {
        // make dark
        angle = 'cornered';
        localStorage.setItem('btangle','cornered');
        document.getElementById('lines').textContent = "Lines: (Cornered)";
        r.style.setProperty('--br', '0px');
    }
}

function closeprefs(){
    //document.getElementById('solutions').style.display = 'none';
    document.getElementById('preferences').style.opacity = 0;
    document.getElementById('preferences').style.top = '100%';
}

function closeel(el){
    //document.getElementById('solutions').style.display = 'none';
    document.getElementById(el).style.opacity = 0;
    document.getElementById(el).style.top = '100%';
}

function raiseresults(){
    if (stayingup){
        return;
    }
    let res = document.getElementById("res");
    res.style.top = (1-(res.offsetHeight/window.innerHeight))*100+"%"
}

function lowerresults(){
    if (stayingup){
        return;
    }
    let res = document.getElementById("res");
    res.style.top = "90%"
}

function closesolutions(){
    //document.getElementById('solutions').style.display = 'none';
    document.getElementById('solutions').style.opacity = 0;
    document.getElementById('solutions').style.top = '100%';
}

function closeinstructions(){
    document.getElementById('instructions').style.top = '100%';
    document.getElementById('instructions').style.opacity = 0;
}

async function glowtreepreorder(start){
    if (start == null){
        return;
    }
    

    let idx = nodearr.indexOf(start);
    let nd = document.getElementById('thenode'+String(idx));

    try {
        nd.style.boxShadow = '7px 7px 5px rgba(255, 0, 0, 0.7)';
    } catch (error) {
        
    }    

    await sleep(500);

    await glowtreepreorder(start.getleft);

    await sleep(500);

    await glowtreepreorder(start.getright);

    //enableplay();
}

async function glowtreeinorder(start){
    if (start == null){
        return;
    }

    let idx = nodearr.indexOf(start);
    let nd = document.getElementById('thenode'+String(idx));

    await sleep(500);

    await glowtreeinorder(start.getleft);

    try {
        nd.style.boxShadow = '7px 7px 5px rgba(255, 0, 0, 0.7)';
    } catch (error) {
        
    }

    await sleep(500);

    await glowtreeinorder(start.getright);

    //enableplay();
}



function getlevel(level, node, currentlevel, gotnodes){
    if (node == null){
        gotnodes.push(null);
        return gotnodes;
    }
    if (currentlevel == level){
        gotnodes.push(node);
        return gotnodes;
    }
    
    gotnodes = getlevel(level, node.getleft, currentlevel+1,gotnodes);
    gotnodes = getlevel(level, node.getright, currentlevel+1,gotnodes);

    return gotnodes;
}


function getlevelorder(){
    let res = [0];
    let final = [];
    let lev = 0;
    while (res.length != 0){
        res = getlevel(lev, root, 0, []);
        
        if (res.length == 0){
            break;
        }
        
        for(i of res){
            final.push(i);
        }

        lev += 1;

    }

    return final;
}


function preorderwithnullpointers(node){
    if (node == null){
        return "NULL";
    }
    let st = "";
    st += node.getvalue+" ";
    st += preorderwithnullpointers(node.getleft)+" ";
    st += preorderwithnullpointers(node.getright)+" ";

    return st.replaceAll("deleted","");

    //recreatetree("a b NULL c NULL NULL   NULL ");
}


function createshareURL(){
    let query = preorderwithnullpointers(root);

    query = query.replaceAll(" ","%20"); 
    
    document.getElementById("shareurldisp").textContent = location.href+"/share?data="+query;
}




let universalrecreator = 0;

function recreatenode(sequence, num){
    if (num > sequence.length){
        return null;
    }

    let newnode = new treenode(sequence[num],null,null);

    nodesadded += 1;
    // add a new one
    nodearr[nodesadded] = newnode;


    universalrecreator += 1;

    if (sequence[universalrecreator] != "NULL"){
        newnode.setleft(recreatenode(sequence, universalrecreator));
    } else {
        universalrecreator += 1;
    }

    if (sequence[universalrecreator] != "NULL"){
        newnode.setright(recreatenode(sequence, universalrecreator));
    } else {
        universalrecreator += 1;
    }


    return newnode;
}


function purgesequence(sequence){
    let newsequence = [];
    for(i of sequence){
        if (i != ""){
            newsequence.push(i);
        }
    }
    return newsequence;
}

function recreatetree(sequence){
    sequence = sequence.replaceAll("%20"," ");
    sequence = sequence.replaceAll("  "," ");

    sequence = sequence.split(" ");

    sequence = purgesequence(sequence);

    console.log(sequence);

    universalrecreator = 0;

    root = new treenode(sequence[universalrecreator],null,null);

    nodearr[0] = root;

    universalrecreator += 1;

    if (sequence[universalrecreator] != "NULL"){
        root.setleft(recreatenode(sequence, universalrecreator));
    } else {
        universalrecreator += 1;
    }

    if (sequence[universalrecreator] != "NULL"){
        root.setright(recreatenode(sequence, universalrecreator));
    } else {
        universalrecreator += 1;
    }

}

function disableplay(){
    let post = document.getElementById('playpost');
    let ino = document.getElementById('playin');
    let pre = document.getElementById('playpre');

    post.style.color = 'rgba(125,125,125,0.6)';
    post.style.cursor = "wait";
    ino.style.color = 'rgba(125,125,125,0.6)';
    ino.style.cursor = "wait";    
    pre.style.color = 'rgba(125,125,125,0.6)';
    pre.style.cursor = "wait";    

    disabled = true;
}

function enableplay(){

    let post = document.getElementById('playpost');
    let ino = document.getElementById('playin');
    let pre = document.getElementById('playpre');

    post.style.color = 'yellow';
    post.style.cursor = "pointer";
    ino.style.color = 'yellow';
    ino.style.cursor = "pointer";    
    pre.style.color = 'yellow';
    pre.style.cursor = "pointer";   

    disabled = false;
}

async function glowtreepostorder(start){
    if (start == null){
        return;
    }

    let idx = nodearr.indexOf(start);
    let nd = document.getElementById('thenode'+String(idx));

    await glowtreepostorder(start.getleft);

    await sleep(500);

    await glowtreepostorder(start.getright);

    await sleep(500);

    try {
        nd.style.boxShadow = '7px 7px 5px rgba(255, 0, 0, 0.7)';
    } catch (error) {
        
    }

    //enableplay();

}


// rules
let bt1 = localStorage.getItem('binarytree');
if (bt1 == null){
    localStorage.setItem('binarytree','opened');
    document.getElementById('instructions').style.display = 'block';
    document.getElementById('instructions').style.opacity = 1;
    document.getElementById('instructions').style.left = '25%';
}

let theme = localStorage.getItem('bttheme');
let angle = localStorage.getItem('btangle');

let lasttoggle = new Date();

if (theme == null){
    localStorage.setItem("bttheme",'light');
    theme = 'light';
} else if (theme == 'dark'){
    forcedark();
}

if (angle == null){
    localStorage.setItem("btangle",'cornered');
} else if (angle == 'curved'){
    angle = 'cornered';
    toggleangle(true);
}

function getrandtree(){
    // let mnode = new treenode('root', null, null);
    let mnode = root;

    let nleft = new treenode('left', null, null);
    let nright = new treenode('right', null, null);

    mnode.setleft(nleft);

    nodesadded += 1;
    // add a new one
    nodearr[nodesadded] = nleft;

    mnode.setright(nright);

    nodesadded += 1;
    // add a new one
    nodearr[nodesadded] = nright;

    let totalnodes = 1;
    totalnodes += addlevel75(nleft, 0);
    totalnodes += addlevel75(nright, 0);

    return mnode;
}


function addlevel75(root, level){

    if (level >= document.getElementById('numnodes').value-1){
        return;
    }
    let newnode;
    if (Math.floor(Math.random()*4) > 0){
        newnode = new treenode(0, null, null);
        root.setleft(newnode);

        nodesadded += 1;
        // add a new one
        nodearr[nodesadded] = newnode;

        addlevel75(newnode, level+1);
    }

    if (Math.floor(Math.random()*4) > 0){
        newnode = new treenode(0, null, null);
        root.setright(newnode);

        nodesadded += 1;
        // add a new one
        nodearr[nodesadded] = newnode;

        addlevel75(newnode, level+1);
    }
}

// counts the nodes
function countnodes(root){
    if (root == null){
        return 0;
    }
    return (1 + countnodes(root.getleft) + countnodes(root.getright));
}

// get an arr with n random numbers
function genlist(n){
    // lets try smth
    
    let ttrs = []; // yes the audi

    while (ttrs.length < n){
        ttrs.push(Math.floor(Math.random()*100));
    }

    return ttrs; // yes bring it back pls audi
}

// abcdefghijklmnop
function genlistabc(n){
    // lets try smth
    let abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    let lucidair = []; // yes the audi

    while (lucidair.length < n){
        lucidair.push(abc[Math.floor(Math.random()*26)]);
    }

    return lucidair; //hehe
}

// just put in the facking nums
function putnums(root,arr){

    if (arr.length == 0){
        return;
    }

    //get nums of nodes on left
    let leftcount = countnodes(root.getleft);
    let rightcount = countnodes(root.getright);
    
    // ideally leftcount+rightocount+1 shud = arr.length

    // so u have the arr
    let leftrange = arr.slice(0,leftcount);
    let rightrange = arr.slice(leftcount+1,arr.length);
    let thenum = arr[leftcount];

    root.setvalue(thenum);

    putnums(root.getleft, leftrange);
    putnums(root.getright, rightrange);

    return root;
}

// this is for a random tree
function randtree(){
    // first of all make a tree
    
    let theroot = getrandtree();

    let ncount = countnodes(theroot);

    // now gen an arr with those many nodes

    let genedarr;
    let tp = document.getElementById('treetype').value;
    if (tp == 'alpha'){
        type = 'alpha';
        genedarr = genlistabc(ncount);
    } else if (tp == 'numeric'){
        type = 'numeric';
        genedarr = genlist(ncount);
    } else {
        let rr = Math.floor(Math.random()*2);
        if (rr == 0){
            type = 'alpha';
            genedarr = genlistabc(ncount);
        } else {
            type = 'numeric';
            genedarr = genlist(ncount);
        }
    }

    putnums(theroot,genedarr);

    return theroot;
}


let root = new treenode('root',null,null);

// let left = new treenode('left',new treenode('leftleft',new treenode('leftleftleft',null,null),null),new treenode('leftright',new treenode('leftrightleft',null,null),null));

// let right = new treenode('right',null,null);

// let rightright = new treenode('rightright',null,new treenode('rightrightright',null,null));
// let rightleft = new treenode('rightleft',null,null);

// root.setleft(left);
// root.setright(right);

// right.setleft(rightleft);
// right.setright(rightright);

const sleep = ms => new Promise(res => setTimeout(res, ms));

let leftbuttons = [];
let delnodes = [];
let nodearr = [root,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let disabled = false;

// intialx
let x = 50;
let y = 0;

let rnzindex = 10;
let stayingup = false;


if (localStorage.getItem("binarytreestorage") != null){
    console.log('used made tree', localStorage.getItem("binarytreestorage"));
    recreatetree(localStorage.getItem("binarytreestorage"));
}
    
redrawtree();

//glowtree(root);

// update the coubnt without interfereing with the stuff
(async () => {
    fetch((`https://skparabapi-1-x8164494.deta.app/increment?key=binarytree`))
      .then(response => {
          return response.json();
      })
      .then(data => {
          console.log(data);
      })
  })();