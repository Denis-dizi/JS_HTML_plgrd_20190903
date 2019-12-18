//  W3D5 (2:13:) W4D1 (0:29:)
//  JavaScript HTML DOM Document
//  https://www.w3schools.com/js/js_htmldom_document.asp
//  https://dom-tutorials.appspot.com/static/index.html


const CFG = {       // globals objekts               //W4D1 (0:39:) CFG - config
    MAXPAR : 5,     // pieliekamo elementu skaits
    backgroundColor: "aqua",
    height: "50vh"
}

function main() {                                              //W3D5(2:36:)
    //first we find the element that we will add new elements: //W3D5(2:14:)
    //const myApp = document.getElementById('app-1');          //W3D5(2:16:)
    
    //We can style the element:
    //myApp.style.backgroundColor = "green";                   //W3D5(2:16:)
    //myApp.style.height = "70vh";                             //W3D5(2:16:)

    //tris soli ka izveidot jauno elementu:                    //W3D5(2:17:)
    //we can add new elements (children)                       //W3D5(2:17:)
    //first we create a new element NOT attached to anything
    // before changing to "for loop" (W3D5(2:27:))
    // 1. const newP = document.createElement('p');            // W3D5(2:19:)
    // 2. newP.innerText = "Lorem";
    // 3. myApp.appendChild(newP);
    
    const myApp = styleMainParent("#app-1", CFG);      //W4D1 (0:52:)

    createChildren("#app-1");                          //W4D1 (0:43:)
    createPlainChild('body', 'footer', "(c)2019");     //W4D1 (1:06:)
    //setTimeout(deleteAllChildren, 5000, "#app-1");   //W4D1 (0:33:)
    //if we want to delete immediately: deleteAllChildren('#app-1'); //W3D5(0:30:)

    //adding Event Handlers  v2                               //W4D1 (1:37:)
    const myResetBtn = document.querySelector('#reset-btn');
    myResetBtn.onclick = onResetBtnClick;
    //adding Event Handlers  v3                               //W4D1 (1:40:)
    document.querySelector('#btn-V3').onclick = onBtnV3;
    //arrow syntax example on adding handler underneath
    //adding Event Handlers  v4                               //W4D1 (1:42:)(2:17)
    document.querySelector('#random-btn').onclick = (event) => {
        console.log("Random was clicked");
        //event.target gets me the element responsible for firing the event
        event.target.innerText = "R"+Math.floor(Math.random()*100); //W4D1 (2:19)
    };

    document.querySelector('#app-1').onclick = (event) => { //W4D1 (2:23)
        console.log("You clicked my app div "+event.target.id);
    }

    document.querySelector('#p-2').onclick = (event) => { //W4D1 (2:25)
        console.log("You clicked paragraph "+event.target.id);
    }

    //example on how to stop bubbling up
    document.querySelector('#p-3').onclick = (event) => { //W4D1 (2:31)
        console.log("You clicked paragraph "+event.target.id);
        console.log("Stoping bubbling (propagation) toward parent");
        event.stopPropagation();
    }


    //addEventListener for adding multiple function callbacks
    //adding Event Handlers  v5(v3 pēc VS)                    //W4D1 (1:45:)
    const myUpdateBtn = document.querySelector('#update-btn');
    myUpdateBtn.addEventListener('click', () => {console.log("Updating");});
    myUpdateBtn.addEventListener('click', onUpdateButtonClick);
    myUpdateBtn.addEventListener('click', onResetBtnClick);

    /*document.onkeydown = (event) => {                         //W4D1 (2:03:)
        //console.log("You pressed keycode: "+ event.code);
        console.log("You pressed key: "+ event.code);
        console.log("Keycode is: "+ event.key);
    }*/
    /*
    //mouse event hendler
    //document.onmousemove = (event) => {                        //W4D1 (2:12:)
    document.querySelector('#app-1').onmousemove = (event) => {  //W4D1 (2:15:)
        console.log("Mouse X: "+ event.clientX);
        console.log("Mouse Y: "+ event.clientY);
    }*/

    // calc v1                                                  //W4D2 (:10:)
    const mySubmitBtn = document.querySelector('.btn-submit');
    mySubmitBtn.onclick = (event) => {
        /*
        const inp1 = document.querySelector(".inp1");
        const val1 = parseFloat(inp1.value);
        console.log("Value 1 is: " +val1);
    
        const inp2 = document.querySelector(".inp2");
        const val2 = parseFloat(inp2.value);
        console.log("Value 2 is: " +val2);
        
        const inp3 = document.querySelector(".inp3");
        const val3 = val1 + val2;
        console.log("Value 3 is: " +val3);
        inp3.value = val3;  
        */
        //above in one line below   calc v2                   //W4D2 (:42:)
        /*
        document.querySelector(".inp3").value = parseFloat(document.querySelector(".inp1").value) +
        parseFloat(document.querySelector(".inp2").value);
        */
       // calc v3                                                  //W4D2 (:45:)
       //same one  line as above except we use our own helper function
       vs(".inp3").value = parseFloat(vs(".inp1").value) + parseFloat(vs(".inp2").value);
    }

    //onchange only fires on when you commit to change (mouseup or finger up):
    document.querySelector("#range1").onchange = (ev) => {    //W4D2 (1:21:)
        addRanges();
    }
    //oninput fires on each little change :
    document.querySelector("#range2").oninput = (ev) => {    //W4D2 (1:22:)
        addRanges();
    }

    init();
}

function init(){
    addRanges();
}

function addRanges() {                                    //W4D2 (1:20:)
    const v1 = parseFloat(document.querySelector("#range1").value);
    const v2 = parseFloat(document.querySelector("#range2").value);
    console.log("Range values are: ", v1, v2, v1+v2);

    document.querySelector("#res1").innerText = "Result is " + (v1+v2);
}


//helper function (think mega simple $ in jQuery)
function vs (selector) {
    return document.querySelector(selector);
}

//function createMainParent(selector)                     //W4D1 (0:48:)
function styleMainParent(selector, mystyle) {             //W4D1 (0:52:)
    //const myApp = document.getElementById("app-1");
    const myApp = document.querySelector(selector);
    myApp.style.backgroundColor = mystyle.backgroundColor;
    myApp.style.height = mystyle.height;
    return myApp;
}

function createChildren(selector){                         //W4D1(0:36:)(42)
    const parent = document.querySelector(selector);
    //we can add new elements (children)                   //W3D5(2:17:)
    for (let i = 0; i < CFG.MAXPAR; i++ ) {                //W3D5(2:27:)
        const newP = document.createElement('p');
        newP.id = "p-"+i;
        newP.classList.add("my-text");
        newP.style.height = (i*2 + 20) + "px";              //W3D5(2:31:)
        newP.style.fontSize = 15 + i*3 + "px";              //W3D5(2:46:)
        newP.style.backgroundColor = "hsl("+(i*360/CFG.MAXPAR)+", 30%, 40%)" //W3D5(2:33:)
        newP.innerText = "Lorem " +i;
        parent.appendChild(newP);
    }
}
                                                            //W4D1 (1:03:)(2:39)
function createPlainChild (selector, tag, text, className = "my-text") {
    const parent = document.querySelector(selector);  
    const newElement = document.createElement(tag);
    newElement.innerText = text;                            //W4D1 (1:08:)
    newElement.classList.add(className);                    //W4D1 (2:40:)
    parent.appendChild(newElement);
}
//setTimeout(deleteAllChildren, 5000, "#app-1");            //W4D1(0:34:)
//deleteAllChildren("#app-1");//immediately

function deleteAllChildren(selector) {                      //W4D1(0:27:)(37)
    const parent = document.querySelector(selector)
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    console.log("All children should be done");
}

//Event Handlers v1 (button click) //W4D1 (1:16:)
function onButtonClick() {
    console.log("A 'Click' button was clicked");
    //alert('You clicked Me?!');
}
/*
function onButtonClickAdd() {
    console.log("An 'Add' button was clicked");
    //alert('You want to Add?!');
}*/
function onButtonClickAdd(event) {              //W4D1 (2:37:)
    console.log("An 'Add' button was clicked");
    console.log("Target id is " + event.target.id);
    createPlainChild("#app-1", "p", "Lorem");   //W4D1 (2:42:)
    //alert('You want to Add?!');
}
function onButtonClickDelete() {                //W4D1 ~(1:35:)(2:44)
    console.log("A 'Delete' button was clicked");
    const myel = document.querySelector("#app-1");//W4D1(2:44)
    myel.removeChild(myel.lastChild);             //W4D1(2:44)
    //alert('You wana Delete?!');
}
function onResetBtnClick() {                    //W4D1 (1:35:)(2:47)
    console.log("A 'Reset' button was clicked");
    deleteAllChildren("#app-1");                //W4D1 (2:47)
    createChildren("#app-1");                   //W4D1 (2:47)
    //alert('do You wana to Reset?!');
}
function onBtnV3() {                            //W4D1 (1:40:)
    console.log("BtnV3 was clicked");
    //alert(' ');
}
function onUpdateButtonClick() {                //W4D1 (1:49:)
    console.log("Handling Udate.. (add button v5)");
    //alert(' ');
}


main();                                         //W3D5(2:36:)

