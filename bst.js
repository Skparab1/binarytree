// binary tree shot

// ive neevr made a class before lmfao

// this is a treenode

class treenode {
    constructor(value, left, right, par, xc) {
      this.value = value;
      this.left = left;
      this.right = right;
      this.xcoord = xc;
      this.parent = par;
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

    get getxcoord(){
        return this.xcoord;
    }

    get getparent(){
        return this.parent;
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

    setxcoord(x){
        this.xcoord = x;
    }

    setparent(p){
        this.parent = p;
    }
}

let treeholder = document.getElementById('treeholder');

let nodesadded = 0;

let badnode = null;
let explanation = "";
let resl = true;
let badid = '';
let type = 'alpha';

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
    <h2 style='margin-top: 5px;'>${node.getvalue}</h2>
    `;

    let theleft = node.getleft;

    node.setxcoord(x);

    div.style.marginLeft = x+'%';
    div.style.marginTop = y+'px';
    div.style.position = 'absolute';

    div.id = 'thenode'+String(thisnum);

    if (node == badnode){
        div.setAttribute('id', 'badone');
    }

    //div.onclick = function() {document.getElementById(div.id).style.zIndex = rnzindex; rnzindex += 1;};

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

function redrawtree(){
    console.log(nodearr);
    treeholder.innerHTML = "";
    connectors.innerHTML = "";
    drawtree(root, 50, 0, 50);
}

function addleft(num){
    console.log('addleft on '+num+' with '+nodearr);
    let newnode = new treenode(0,null,null,nodearr[num]);
    nodearr[num].setleft(newnode);

    nodesadded += 1;
    // add a new one
    nodearr[nodesadded] = newnode;
    console.log(nodearr);

    redrawtree();
}

function addright(num){
    let newnode = new treenode(0,null,null,nodearr[num]);
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

        console.log('set xcoord as ',x,'but',root.getxcoord);

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
        div1.style.borderRight = '7px solid white';
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
    if (userpreorder == preorder){
        document.getElementById('preorder').style.border = '3px solid rgba(0,245,0)';
    } else {
        document.getElementById('preorder').style.border = '3px solid rgba(245,0,0)';
    }

    let userinorder = document.getElementById('inorder').value;
    userinorder = userinorder.replaceAll(' ','').replaceAll(',','');
    if (userinorder == inorder){
        document.getElementById('inorder').style.border = '3px solid rgba(0,245,0)';
    } else {
        document.getElementById('inorder').style.border = '3px solid rgba(245,0,0)';
    }

    let userpostorder = document.getElementById('postorder').value;
    userpostorder = userpostorder.replaceAll(' ','').replaceAll(',','');
    if (userpostorder == postorder){
        document.getElementById('postorder').style.border = '3px solid rgba(0,245,0)';
    } else {
        document.getElementById('postorder').style.border = '3px solid rgba(245,0,0)';
    }
}

function showsolutions(){
    checkall();
    //document.getElementById('solutions').style.display = 'block';
    document.getElementById('solutions').style.opacity = 1;
    document.getElementById('solutions').style.left = '25%';
}

function openel(e){
    console.log('shud have opened it');
    document.getElementById(e).style.display = 'block';
    document.getElementById(e).style.opacity = 1;
    document.getElementById(e).style.left = '25%';
}

function closeel(e){
    document.getElementById(e).style.opacity = 0;
    document.getElementById(e).style.left = '-100%';

}

function closesolutions(){
    //document.getElementById('solutions').style.display = 'none';
    document.getElementById('solutions').style.opacity = 0;
    document.getElementById('solutions').style.left = '-100%';
}

function closeinstructions(){
    document.getElementById('instructions').style.left = '125%';
    document.getElementById('instructions').style.opacity = 0;
}


// rules
let bt1 = localStorage.getItem('binarytree');
if (bt1 == null){
    localStorage.setItem('binarytree','opened');
    // document.getElementById('instructions').style.display = 'block';
    // document.getElementById('instructions').style.opacity = 1;
    // document.getElementById('instructions').style.left = '25%';
}

let root = new treenode('root',null,null,null);

// dont think this is needed
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

function genlist(l){
    let i = 0;
    let arr = [];
    let n = 0;
    while (i < l){
        n += Math.floor(Math.random()*10)+1;
        arr.push(n);
        i += 1;
    }

    type = 'numeric';

    return arr;
}

function genlistabc(l){
    let abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    // so now we need to remove (26-l) elements from it

    while (abc.length > l){
        //console.log(Math.floor(Math.random()*abc.length),abc);
        abc.splice(Math.floor(Math.random()*abc.length),1);
    }

    console.log(l, abc);

    type = 'alpha';
    return abc;
}

function createl(root, arr) {
    if (arr.length == 0){
        return null;
    }

    let mid = arr[Math.floor(arr.length/2)];
    let left = arr.slice(0,Math.floor(arr.length/2))
    let right = arr.slice(Math.floor(arr.length/2)+1,arr.length);

    let mnode = new treenode(mid, null, null);

    mnode.setleft(createl(mnode, right));
    mnode.setright(createl(mnode, left));

    return mnode;
}

function reversearr(arr){
    let newarr = [];
    let e = arr.length-1;
    while (e >= 0){
        newarr.push(arr[e]);
        e -= 1;
    }

    return newarr;
}

function genbst(){
    // suppose u have an arr
    //let arr = [1,7,9,15,20,23,32,45,55,62,64,75,88,99];
    let arr = genlist(document.getElementById('numnodes').value);

    console.log('arr before ',arr);
    // arr = reversearr(arr);
    console.log('arr after ',arr);

    let mid = arr[Math.floor(arr.length/2)];
    let left = arr.slice(0,Math.floor(arr.length/2))
    let right = arr.slice(Math.floor(arr.length/2)+1,arr.length);

    let mnode = new treenode(mid, null, null);

    mnode.setleft(createl(mnode, right));
    mnode.setright(createl(mnode, left));

    console.log(mnode);

    return mnode;
}

function adderror(root){
    // not rlly garunteeing an error add but yeah
    // now shall we put an error or not

    let abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    console.log('abclength',abc.length);

    thetree = root;
    
    let rand = Math.floor(Math.random()*10);

    let changednode = null;

    if (rand < 5){
        // yup were putting error
        // what kind of error

        let rand2 = Math.floor(Math.random()*10);
        if (rand2 == 0){
            // head is too low
            let newhead;
            if (type != "alpha"){
                newhead = thetree.getleft.getvalue-(Math.floor(Math.random()*5)+1);
                thetree.setvalue(newhead);
                changednode = thetree;
            } else {
                // lower than thetree.getleft.getvalue
                let base = abc.indexOf(thetree.getleft.getvalue);
                // now add a rand to the base
                base = Math.floor(base*Math.random());
                newhead = abc[base];

                thetree.setvalue(newhead);
                changednode = thetree;
                console.log('changed1 index ',base);
            }


            explanation = "The root valued "+newhead+" is too low, making the left child's value ("+thetree.getleft.getvalue+") larger than it.";

        } else if (rand2 == 1){
            // head is too high
            let newhead;
            if (type != "alpha"){
                newhead = thetree.getright.getvalue+(Math.floor(Math.random()*5)+1);
                thetree.setvalue(newhead);
                changednode = thetree;
            } else {
                // lower than thetree.getleft.getvalue
                let base = abc.indexOf(thetree.getright.getvalue);
                // now add a rand to the base
                base = Math.floor(base+Math.random()*(26-base));
                newhead = abc[base];

                thetree.setvalue(newhead);
                changednode = thetree;
                console.log('changed2 index ',base);
            }

            explanation = "The root valued "+newhead+" is too high, making the right child's value ("+thetree.getright.getvalue+") smaller than it.";

        } else if (rand2 == 2){
            // the second level left is too high
            // make it higher than the head

            let newhead;
            if (type != "alpha"){
                newhead = thetree.getvalue+(Math.floor(Math.random()*5)+1);
                thetree.getleft.setvalue(newhead);
                changednode = thetree.getleft;
            } else {
                let base = abc.indexOf(thetree.getvalue);
                // now add a rand to the base
                base = Math.floor(base+Math.random()*(26-base));
                newhead = abc[base];

                thetree.getleft.setvalue(newhead);
                changednode = thetree.getleft;
                console.log('changed3 index ',base);
            }

            explanation = "The node valued "+newhead+" is too high, making it higher than the parent ("+thetree.getvalue+"), which it is the left child of.";
        } else if (rand2 == 3){
            // the second level right is too low
            // make it lower than the head
            let newhead;
            if (type != "alpha"){
                newhead = thetree.getvalue-(Math.floor(Math.random()*5)+1);
                thetree.getright.setvalue(newhead);
                changednode = thetree.getright;
            } else {
                let base = abc.indexOf(thetree.getvalue);
                // now add a rand to the base
                base = Math.floor(base*Math.random());
                newhead = abc[base];

                thetree.getright.setvalue(newhead);
                changednode = thetree.getright;
                console.log('changed4 index ',base);
            }

            explanation = "The node valued "+newhead+" is too low, making it lower than the parent ("+thetree.getvalue+"), which it is the right child of.";
        } else if (rand2 >= 4){
            // make a last node bigger or smaller than parent
            let lastnode = null;
            let lastlastnode = null;
            let tn = thetree;
            let lastdir = '0';
            let lastlastdir = '0';
            while (tn != null){
                lastlastdir = lastdir;
                lastlastnode = lastnode;
                lastnode = tn;

                let rand2 = Math.random();
                if (rand2 < 0.5){
                    tn = tn.getleft;
                    lastdir = 'l';
                } else {
                    tn = tn.getright;
                    lastdir = 'r';
                }
            }

            let newhead;
            if (lastlastdir == 'r'){
                if (type != "alpha"){
                    newhead = lastlastnode.getvalue-(Math.floor(Math.random()*5)+1);
                    console.log(lastlastnode.getvalue,'minus smth');
                } else {
                    let base = abc.indexOf(lastlastnode.getvalue);
                    // now add a rand to the base
                    base = Math.floor(base*Math.random());
                    newhead = abc[base];
                    console.log('changed5 index ',base);
                }

                explanation = "The node valued "+newhead+" is too low, making it lower than its parent ("+lastlastnode.getvalue+"), which it is the right child of.";
            } else {
                if (type != "alpha"){

                    newhead = lastlastnode.getvalue+(Math.floor(Math.random()*5)+1);
                    console.log(lastlastnode.getvalue,'plus smth');
                } else {

                    let base = abc.indexOf(lastlastnode.getvalue);
                    // now add a rand to the base
                    base = Math.floor(base+Math.random()*(26-base));
                    newhead = abc[base];
                    console.log('changed6 index ',base);
                }

                explanation = "The node valued "+newhead+" is too high, making it higher than its parent ("+lastlastnode.getvalue+"), which it is the left child of.";
            }
            console.log('modified',newhead);
            lastnode.setvalue(newhead);

            changednode = lastnode;
        }
    } else {
        // nope were good to go
        explanation = "This follows the rules of a binary tree";
    }

    badnode = changednode;

    return thetree;
}

function iscorrect(){
    if (badnode == null){
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
    }

    //document.getElementById('wrong').style.left = '50%';
    //document.getElementById('explanation').textContent = 'Explanation: '+explanation;

}



async function iswrong(){
    if (badnode == null){
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
}

function countnodes(root){
    if (root == null){
        return 0;
    }
    return (1 + countnodes(root.getleft) + countnodes(root.getright));
}

function getrandtree(){
    let mnode = new treenode('root', null, null);

    let nleft = new treenode('left', null, null);
    let nright = new treenode('right', null, null);

    mnode.setleft(nleft);
    mnode.setright(nright);

    let totalnodes = 1;
    totalnodes += addlevel75(nleft, 0);
    totalnodes += addlevel75(nright, 0);
    drawtree(mnode, x, y, 50);

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
        addlevel75(newnode, level+1);
    }

    if (Math.floor(Math.random()*4) > 0){
        newnode = new treenode(0, null, null);
        root.setright(newnode);
        addlevel75(newnode, level+1);
    }
}

// let left = new treenode('left',new treenode('leftleft',new treenode('leftleftleft',null,null),null),new treenode('leftright',new treenode('leftrightleft',null,null),null));

// let right = new treenode('right',null,null);

// let rightright = new treenode('rightright',null,new treenode('rightrightright',null,null));
// let rightleft = new treenode('rightleft',null,null);

// root.setleft(left);
// root.setright(right);

// right.setleft(rightleft);
// right.setright(rightright);

let leftbuttons = [];
let delnodes = [];
let nodearr = [root,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// intialx
let x = 50;
let y = 0;

let rnzindex = 10;
let stayingup = false;

//drawtree(root, x, y, 50);

//let start = genbst();

//console.log(start);

//drawtree(start, x, y, 50);

function initnums(){
    let tv = document.getElementById('numnodes').value;
    if (tv == "" || isNaN(parseInt(tv))){
        document.getElementById('numnodes').value = 4;
    }

    localStorage.setItem('levels',String(document.getElementById('numnodes').value));

}

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

let thl = localStorage.getItem('levels');
if (thl == null){
    initnums();
} else {
    document.getElementById('numnodes').value = parseInt(thl);
}

// let actualtree = runtree();

let theroot = getrandtree();

let ncount = countnodes(theroot);

// now gen an arr with those many nums
// shud it be alhpabetical or numeric

// yes the audi
let ttrs = localStorage.getItem('treetype');

if (ttrs == null){
    document.getElementById('treetype').value = 'numeric';
    localStorage.setItem('treetype','numeric');
} else {
    document.getElementById('treetype').value = ttrs;
}

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



theroot = putnums(theroot, genedarr);

theroot = adderror(theroot);

drawtree(theroot, x, y, 50);

// now put att the things into the tree

//theroot.setvalue(countnodes(theroot));

// update the coubnt without interfereing with the stuff
(async () => {
    fetch((`https://pst652.deta.dev/?UPDATECOUNTER=bst`))
      .then(response => {
          return response.json();
      })
      .then(data => {
          console.log(data);
      })
  })();
  