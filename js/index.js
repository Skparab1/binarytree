// binary tree builder and visualizer

// class for a treenode that makes up the tree
class treenode {

    // basic constructor with value, left, and right
    constructor(value, left, right) {
      this.value = value;
      this.left = left;
      this.right = right;
    }


    // getter functions
    get getvalue() {
        return this.value;
    }

    get getleft(){
        return this.left;
    }

    get getright(){
        return this.right;
    }


    // setter functions
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

// get the div that holds the tree
let treeholder = document.getElementById('treeholder');
let nodesadded = 0;

// draw a specific node at the coordinates x,y (by creating an element for it)
function drawnode(node,x,y){

    // create element
    const div = document.createElement('div');

    // get the value that should be in the node
    let thisnum = nodearr.indexOf(node);
      
    // put the value into the element
    div.innerHTML = `
    <input id='val${thisnum}' type='text' class='nodeval' value='${node.getvalue}' onchange="modvalue(${thisnum});">
    `;

    // put in the left adder button, if there isnt already a left child
    let theleft = node.getleft;
    if (theleft == null || theleft.getvalue == 'deleted'){
        div.innerHTML += ` <button id='leftadder${thisnum}' class='nodeadderleft' onclick='addleft(${thisnum});'>left</button>`
    } else {
        div.innerHTML += ` <button id='leftadder${thisnum}' class='nodeadderleft' style='opacity: 0;'>left</button>`
    }

    // put in the right adder button, if there isnt already a right child
    let theright = node.getright;
    if (theright == null || theright.getvalue == 'deleted'){
        div.innerHTML += `<button id='rightadder${thisnum}' class='nodeadderright' onclick='addright(${thisnum});'>right</button>`;
    } else {
        div.innerHTML += `<button id='rightadder${thisnum}' class='nodeadderright' style='opacity: 0;'>right</button>`;
    }

    // put in the delete button, if the node has no children
    if ((theright == null || theright.getvalue == 'deleted') && (theleft == null || theleft.getvalue == 'deleted') && node != root){
        div.innerHTML += ` <button id='deletenode${thisnum}' onclick='delnode(${thisnum});' class='deletenode'>del</button>`
    } else {
        div.innerHTML += ` <button id='deletenode${thisnum}' class='deletenode' style='opacity: 0;'>del</button>`
    }

    // position the element
    div.style.position = 'absolute';
    div.style.marginLeft = x+'%';
    div.style.marginTop = y+'px';

    // set the id and classname
    div.id = 'thenode'+String(thisnum);
    div.className = 'node';


    // if a node is clicked then bring it to the brong
    div.onclick = function() {document.getElementById(div.id).style.zIndex = rnzindex; rnzindex += 1;};

    // rnzindex is the z index
    // this should be the highest for the most recently clicked elements
    rnzindex += 1;

    // put the element in
    treeholder.appendChild(div);
}

// if the value is edited, then modify the array and store the tree
function modvalue(n){
    let el = document.getElementById('val'+n);
    nodearr[n].setvalue(el.value);

    storetree();
}

// deleting a node
function delnode(n){
    //console.log(nodearr,n,nodearr[n].getvalue);
    //nodearr[n].setvalue('deleted');

    // set the value
    let thing = nodearr[n];
    thing.setvalue('deleted');

    //and remove it
    nodearr[n] = null;
    nodearr.splice(n,1);
    //nodearr[n] = null;

    // go through and find whos left or right this is
    // console.log(findnode(root,nodearr[n]));

    //delnodes.push(n);
    // console.log(root.getleft);

    // update
    nodesadded -= 1;

    // redraw
    redrawtree();
}

// store the tree in localstorage so that it can be fetched upon reload
function storetree(){
    // store the tree in localstorage
    let tostore = preorderwithnullpointers(root);

    localStorage.setItem("binarytreestorage",tostore);
}

// erase and draw tree
function redrawtree(){
    //console.log(nodearr);

    // erase
    treeholder.innerHTML = "";
    connectors.innerHTML = "";

    // store
    storetree();
    
    // draw
    drawtree(root, 50, 0, 50);
}

// add a left child node to whatever node
function addleft(num){
    //console.log('addleft on '+num+' with '+nodearr);

    // create a new node
    let newnode = new treenode(0,null,null);
    nodearr[num].setleft(newnode);

    // update
    nodesadded += 1;


    // add to the array
    nodearr[nodesadded] = newnode;
    //console.log(nodearr);

    // redraw
    redrawtree();

    return nodesadded;
}

// add a right child to the node
function addright(num){

    // create the node
    let newnode = new treenode(0,null,null);
    nodearr[num].setright(newnode);

    // update
    nodesadded += 1;
    
    // add to array
    nodearr[nodesadded] = newnode;

    // draw again
    redrawtree();
}

// draw the tree recursively
function drawtree(root, x, y, prevx){

    // if current node has been deleted, treat it like its a null (dont draw it or anything)
    if (root.getvalue == 'deleted'){
        root = null;
    }

    // if its not null or deleted do this
    // root.getvalue != 'deleted' shouldnt be needed idk why its there but not gonna change it
    if (root != null && root.getvalue != 'deleted'){
        
        // draw the current node
        drawnode(root,x,y);

        //figure out the x and y coordinates at which the child nodes should be located
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
            // console.log(leftx);
        }

        // leftx = leftx-(5000/window.innerWidth);
        // rightx = rightx-(5000/window.innerWidth);


        // create the connector line for the left side
        const div = document.createElement('div');
        let wid = Math.abs(leftx-x);
        div.className = 'connector';
        div.style.width = wid+'%';
        div.style.height = '75px'
        div.style.left = (leftx+(5000/window.innerWidth))+'%';
        div.style.top = (y+150)+'px';
        div.style.zIndex = -1;

        // create the connector line for the right side 
        const div1 = document.createElement('div');
        div1.className = 'connector';
        div1.style.borderRight = '7px solid var(--contrast)';
        div1.style.borderLeft = '0px solid white';
        div1.style.width = wid+'%';
        div1.style.height = '75px'
        div1.style.left = (x+(5000/window.innerWidth))+'%';
        div1.style.top = (y+150)+'px';
        div1.style.zIndex = -1;

        // as long as the left child isnt null or deleted, draw it
        if (root.getleft != null && root.getleft.getvalue != 'deleted'){
            document.getElementById('connectors').appendChild(div);
            drawtree(root.getleft,leftx,newy, x);
        }

        // as long as the right child isnt null or deleted, draw it
        if (root.getright != null && root.getright.getvalue != 'deleted'){
            document.getElementById('connectors').appendChild(div1);
            drawtree(root.getright,rightx,newy, x);
        }
    }
}

// the output when traversing the tree using preorder
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

// the output when traversing the tree using inorder
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

// the output when traversing the tree using postorder
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

// check all the solutions
function checkall(){
    // get the correct solutions
    let preorder = traversepreorder(root).replaceAll('deleted','');
    let inorder = traverseinorder(root).replaceAll('deleted','');
    let postorder = traversepostorder(root).replaceAll('deleted','');

    // fill the solutions display with the solutions
    let sols = document.getElementById('solutions');
    sols.innerHTML = `
    <h1 style='font-size: 25px'>Solutions</h1>
    <h1 style='font-size: 15px'>Pre order: ${preorder}</h1>
    <h1 style='font-size: 15px'>In order: ${inorder}</h1>
    <h1 style='font-size: 15px'>Post order: ${postorder}</h1>
    <div class="close" onclick="closesolutions(); closescreen();">Close</div>
    `

    // format them so that they can be compared to the user responses
    preorder = preorder.replaceAll(' ','');
    inorder = inorder.replaceAll(' ','');
    postorder = postorder.replaceAll(' ','');

    // check preorder answers
    let userpreorder = document.getElementById('preorder').value;
    userpreorder = userpreorder.replaceAll(' ','').replaceAll(',','');
    if (userpreorder.toUpperCase() == preorder.toUpperCase()){
        document.getElementById('preorder').style.border = '3px solid rgba(0,245,0)';
    } else {
        document.getElementById('preorder').style.border = '3px solid rgba(245,0,0)';
    }

    // check inorder answers
    let userinorder = document.getElementById('inorder').value;
    userinorder = userinorder.replaceAll(' ','').replaceAll(',','');
    if (userinorder.toUpperCase() == inorder.toUpperCase()){
        document.getElementById('inorder').style.border = '3px solid rgba(0,245,0)';
    } else {
        document.getElementById('inorder').style.border = '3px solid rgba(245,0,0)';
    }

    // check postorder answers
    let userpostorder = document.getElementById('postorder').value;
    userpostorder = userpostorder.replaceAll(' ','').replaceAll(',','');
    if (userpostorder.toUpperCase() == postorder.toUpperCase()){
        document.getElementById('postorder').style.border = '3px solid rgba(0,245,0)';
    } else {
        document.getElementById('postorder').style.border = '3px solid rgba(245,0,0)';
    }
}

// show the solutions dialog
function showsolutions(){
    checkall();
    document.getElementById('solutions').style.display = 'block';
    document.getElementById('solutions').style.opacity = 1;
    document.getElementById('solutions').style.top = '25%';
}

// show the preferences dialog
function openprefs(){
    document.getElementById('preferences').style.display = 'block';
    document.getElementById('preferences').style.opacity = 1;
    document.getElementById('preferences').style.top = '25%';
}

// open whatever dialog
function openel(el){
    document.getElementById(el).style.display = 'block';
    document.getElementById(el).style.opacity = 1;
    document.getElementById(el).style.top = '25%';
}

// change the theme from dark to light or override for setting it to whatever the saved theme is
function toggletheme(override){
    var r = document.querySelector(':root');

    // get elapsed time since last time a toggle was clicked
    let endtime = new Date();
    var timediff = endtime - lasttoggle; 
    lasttoggle = endtime;

    // if we are not changing to the saved theme and the user just pressed the theme change then dont change
    // this is there because something toggle theme used to get called two times in a row and cancel itself out
    if (timediff < 333 && !override){
        return;
    }

    // console.log('changeing from  '+theme);
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

// force the theme to change to dark, if thats the saved theme
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

// toggle the angle of the connectors
function toggleangle(override){
    var r = document.querySelector(':root');

    // see the elapsed time since toggle was last clicked
    let endtime = new Date();
    var timediff = endtime - lasttoggle; 
    lasttoggle = endtime;

    // prevent a double click of this
    if (timediff < 333 && !override){
        // console.log('returned');
        return;
    }

    if (angle == 'cornered'){
        // make curved
        angle = 'curved';
        localStorage.setItem('btangle','curved');
        document.getElementById('lines').textContent = "Lines: (Curved)";
        r.style.setProperty('--br', '25px');
    } else {
        // make cornered
        angle = 'cornered';
        localStorage.setItem('btangle','cornered');
        document.getElementById('lines').textContent = "Lines: (Cornered)";
        r.style.setProperty('--br', '0px');
    }
}

// close preferences dialog
function closeprefs(){
    //document.getElementById('solutions').style.display = 'none';
    document.getElementById('preferences').style.opacity = 0;
    document.getElementById('preferences').style.top = '100%';
}

// close preferences dialog
function closeel(el){
    //document.getElementById('solutions').style.display = 'none';
    document.getElementById(el).style.opacity = 0;
    document.getElementById(el).style.top = '100%';
}

// make the results panel visible
function raiseresults(){
    if (stayingup){
        return;
    }
    let res = document.getElementById("res");
    res.style.top = (1-(res.offsetHeight/window.innerHeight))*100+"%"
}

// lower the results panel to hide it
function lowerresults(){
    if (stayingup){
        return;
    }
    let res = document.getElementById("res");
    res.style.top = "90%"
}

// close the solutions dialog
function closesolutions(){
    //document.getElementById('solutions').style.display = 'none';
    document.getElementById('solutions').style.opacity = 0;
    document.getElementById('solutions').style.top = '100%';
}

// close the instructions dialog
function closeinstructions(){
    document.getElementById('instructions').style.top = '100%';
    document.getElementById('instructions').style.opacity = 0;
}

// light up animation for preorder
// all this does is basically do the traversal but highlight each node when its visited, and wait a bit before doing that at each node
async function glowtreepreorder(start){
    if (start == null){
        return;
    }

    await sleep(document.getElementById('waittime').value);

    let idx = nodearr.indexOf(start);
    let nd = document.getElementById('thenode'+String(idx));

    try {
        nd.style.boxShadow = '7px 7px 5px rgba(255, 0, 0, 0.7)';
    } catch (error) {
        
    }    


    await glowtreepreorder(start.getleft);

    await glowtreepreorder(start.getright);

    //enableplay();
}

// light up animation for inorder
async function glowtreeinorder(start){
    if (start == null){
        return;
    }

    let idx = nodearr.indexOf(start);
    let nd = document.getElementById('thenode'+String(idx));

    await glowtreeinorder(start.getleft);


    await sleep(document.getElementById('waittime').value);
    try {
        nd.style.boxShadow = '7px 7px 5px rgba(255, 0, 0, 0.7)';
    } catch (error) {
        
    }

    await glowtreeinorder(start.getright);

    //enableplay();
}

// light up animation for postorder
async function glowtreepostorder(start){
    if (start == null){
        return;
    }

    let idx = nodearr.indexOf(start);
    let nd = document.getElementById('thenode'+String(idx));

    await glowtreepostorder(start.getleft);

    await glowtreepostorder(start.getright);

    await sleep(document.getElementById('waittime').value);

    try {
        nd.style.boxShadow = '7px 7px 5px rgba(255, 0, 0, 0.7)';
    } catch (error) {
        
    }

    //enableplay();

}

// not used functions
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

// put all the tree data into the url
function createshareURL(){

    document.getElementById("copysharelink").textContent = "Copy link";

    let query = preorderwithnullpointers(root);

    query = query.replaceAll(" ","%20"); 

    document.getElementById("shareurldisp").textContent = location.href.replace("/index.html","")+"/share?data="+query;
}

// get the share data 
function copyshare(){
    let query = preorderwithnullpointers(root);

    query = query.replaceAll(" ","%20"); 

    let shareurl = location.href.replace("/index.html","")+"/share?data="+query;

    // copy
    navigator.clipboard.writeText(shareurl);


    document.getElementById("copysharelink").textContent = "Copied!";
}

// this is there so that when you recreate it you know what node you are on
let universalrecreator = 0;

// based on the stored data, create a node
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

// purge the read stored data for blank elements
function purgesequence(sequence){
    let newsequence = [];
    for(i of sequence){
        if (i != ""){
            newsequence.push(i);
        }
    }
    return newsequence;
}

// recreate a tree based on stored data
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

// disable light up animation buttons until the current animation ends
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

// eanable light up animation buttons after the animations end
function enableplay(){

    let post = document.getElementById('playpost');
    let ino = document.getElementById('playin');
    let pre = document.getElementById('playpre');

    post.style.color = 'rgb(255, 51, 0)';
    post.style.cursor = "pointer";
    ino.style.color = 'rgb(255, 51, 0)';
    ino.style.cursor = "pointer";    
    pre.style.color = 'rgb(255, 51, 0)';
    pre.style.cursor = "pointer";   

    disabled = false;
}

// open the background backdrop when a dialog is opened
function openscreen(){
    let el = document.getElementById("screen");
    el.style.display = "block";
    el.style.opacity = 0.4;

    let res = document.getElementById("res");
    res.style.opacity = 0.4;
    stayingup = true;
}

// close the background backdrop
function closescreen(){
    console.log("called to close");
    let el = document.getElementById("screen");
    el.style.display = "none";
    el.style.opacity = 0;

    let res = document.getElementById("res");
    res.style.opacity = 1;
    stayingup = false;
}

// open the "how to use" if its the first time this user has opened this
let bt1 = localStorage.getItem('binarytree');
if (bt1 == null){
    localStorage.setItem('binarytree','opened');
    document.getElementById('instructions').style.display = 'block';
    document.getElementById('instructions').style.opacity = 1;
    document.getElementById('instructions').style.left = '25%';
}

// load the settings from localstorage
let theme = localStorage.getItem('bttheme');
let angle = localStorage.getItem('btangle');
let demospeed = localStorage.getItem('btspeed');

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

if (demospeed == null){
    localStorage.setItem("btspeed",500);
    demospeed = 500;
}
document.getElementById("waittime").value = demospeed;
document.getElementById('animwait').textContent = 'Light-up animation delay time: '+demospeed+'ms';


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

    if (level >= document.getElementById('numnodes').value-2){
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

// generate a list with only characters
function genlistabc(n){
    let abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    let u = [];

    while (u.length < n){
        u.push(abc[Math.floor(Math.random()*26)]);
    }

    return u;
}

// just put in the values into the tree
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

// i know having a set capacity generally isnt good but im confident this will be more than enough
// could be increased but may impact performance if there are a bunch of not used really
let nodearr = [root,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

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

// update the count without interfereing with the stuff
(async () => {
    fetch((`https://skparabapi-1-x8164494.deta.app/increment?key=binarytree`))
      .then(response => {
          return response.json();
      })
      .then(data => {
          console.log(data);
      })
  })();