/*--variabili iniziali--*/
let startButton = document.createElement('button');
let counterContainer = document.createElement('div');
let counterTitle = document.createElement('div');
let counterNum = document.createElement('div');
let counterControls = document.createElement('div');
let counterPlus = document.createElement('div');
let counterMinus = document.createElement('div');
let minusTen = document.createElement('div');
let plusTen = document.createElement('div');
let value = 0;
counterNum.innerHTML = value;

/*--assegnazione elementi e classi--*/
document.body.style.cssText = 'background: #008080;';
startButton.innerHTML = 'Start';
startButton.style.cssText = `font-family: 'Microsoft Sans Serif', sans-serif; ; font-size: 60px; width: 300px; position: relative; top: 50%; left:50%; transform: translate(-50%, -50%); padding: 20px;`;
document.body.append(startButton);

/*--eventi--*/
startButton.addEventListener('click', startCounter);
counterPlus.addEventListener('click', increaseCounter);
counterMinus.addEventListener('click', decreaseCounter);

/*--funzioni--*/
function startCounter() {
    startButton.style.display = 'none';
    document.body.append(counterContainer);
    setFirstCounter();
    showDialog();
}

function increaseCounter() {
    counterNum.innerHTML++;
}

function decreaseCounter() {
    if (counterNum.innerHTML > 0 ) {
        counterNum.innerHTML--;
    } else {return};
}

/*--primo counter--*/
function setFirstCounter() {
    counterContainer.style.cssText = `width: 300px; height: 300px; background: lightgrey; border-width:2px; border-style:solid; border-color:#FFFFFF #808080 #808080 #FFFFFF; position: relative; top: 50%; left:50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; justify-content: center;`;

    /*--assegnazione degli elementi del counter al suo container--*/
    counterContainer.append(counterNum);
    counterContainer.append(counterControls);
    counterControls.append(counterMinus);
    counterControls.append(counterPlus);
    counterContainer.append(counterTitle);

    /*--Stili per gli elementi--*/
    counterNum.style.cssText = `width: 100% ; height: 75%; padding-top: 17%; background: #dadada; position: absolute; top: 0; left: 0; font-size: 8em; text-align: center;  border-width:2px; border-style:solid; border-color:#808080 #FFFFFF #FFFFFF #808080; `;
    counterTitle.style.cssText = `color: white; padding-left: 5px; padding-top: 2px; width:292px; height: 25px; background-color: #000080; z-index: 2 ;position: absolute; left: 2px; top: 2px; border-bottom: 1px solid #fff; `;
    counterTitle.innerHTML = `'95 Counter`;

    /*--Zona controlli--*/
    counterControls.style.cssText = `height: 25%; width: 100%; position: absolute; bottom: 0; left: 0; z-index: 10;`;

    /*--tasto meno--*/
    counterMinus.innerHTML = '-1';
    counterMinus.style.cssText = `height: 100%; width: 50%; position: absolute; bottom: 0; left: 0; font-size: 32px; text-align: center; padding-top: 20px;`;

    /*--tasto più--*/
    counterPlus.innerHTML = '+1';
    counterPlus.style.cssText = `height: 100%; width: 50%; position: absolute; bottom: 0; left: 50%; font-size: 32px; text-align: center; border-left: 2px solid grey; z-index: 2; padding-top: 20px`;
}

/*--mostra messaggio transizione--*/
function showDialog (){
    let messageDialog = document.createElement('div');
    document.body.append(messageDialog);    

    /*--Domanda--*/
    messageDialog.innerHTML = 'Si potrebbe fare di più non trovi?';messageDialog.style.cssText = `color: black; width: 300px; height: fit-content; background-color: lightgrey; font-size: 18px; position: absolute; top: 0; left: 50%; transform: translate(-50%, -150px); text-align: center; padding: 20px 10px; animation-name: moveDialog; animation-delay: 2s; animation-duration: 0.01s; animation-fill-mode: both; border-width:2px; border-style:solid; border-color:#FFFFFF #808080 #808080 #FFFFFF;`;

    /*--Timer per azzerare messaggio e vecchio counter*/
    setTimeout(() => {
        counterContainer.style.fontFamily = 'Montserrat';
        setModernCounter();
        messageDialog.style.animation="hideBtn 5s ease-in both";
        counterTitle.style.animation="counterTitle 1s 1s ease-in-out both";
    }, 10000);
}
/*-- Modern Counter --*/
function setModernCounter() {

    /*-- Animazioni Counter --*/
    counterNum.style.animation="counterNum 1s 1s ease-in both";
    counterContainer.style.animation="counterContainer 1s 1s ease-in both";
    counterMinus.style.animation="counterPlusMinus 1s 1s ease-in both";
    counterPlus.style.animation="counterPlusMinus 1s 1s ease-in both";
    counterControls.style.animation="counterControls 1s 1s ease-in both";
    document.body.style.animation="setBG 2s 2s ease-in both";

    /*--Bottone -10 --*/
    minusTen.innerHTML = '-10';
    minusTen.style.cssText = `width:40px; height:40px; background-color: var(--bg2); font-size:14px; border-radius: 50%; line-height: 40px;`;
       
    /*--Bottone +10 --*/
    plusTen.innerHTML = '+10';
    plusTen.style.cssText = `width:40px; height:40px; background-color: var(--bg2); font-size:14px; border-radius: 50%; line-height: 40px;`;
    counterMinus.append(minusTen);
    counterPlus.append(plusTen);
    minusTen.style.animation="counterPlusMinus2 1s 2s linear both";
    plusTen.style.animation="counterPlusMinus2 1s 2s linear both";
    plusTen.addEventListener('click', plusTenCounter);
    minusTen.addEventListener('click', minusTenCounter);
    counterTitle.innerHTML = `iCounter`;
}
/*--Funzione + 10--*/
function plusTenCounter(e) {
    counterNum.innerHTML = Number(+counterNum.innerHTML + 10);
    e.stopPropagation();
}

/*--Funzione - 10--*/
function minusTenCounter(e) {
    if (counterNum.innerHTML > 10 ) {
        counterNum.innerHTML = Number(+counterNum.innerHTML - 10);
    } else {counterNum.innerHTML = 0 };
    e.stopPropagation();
}