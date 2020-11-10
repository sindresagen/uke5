
// model

var spiller;
var datamaskin;
var poengSpiller;
var poengDatamaskin;
var result;

// const poeng = document.querySelector('.poeng');
// const melding = document.querySelector('.melding');
// const vinnerPoeng = [0,0];

// view
// show();
// function show() {
//     document.getElementById('app').innerHTML = `
    
//     `;
// }
// controller

function startSpill()


datamaskinValg();
function datamaskinValg() {
    var select = Math.floor(Math.random() * 3)
    if (select == 0) {
        datamaskin = 'Stein'
       
    } else if (select == 1) {
        datamaskin = 'Saks'
       
    } else {
        datamaskin = 'Papir';
        
    }
}

function spillerValg(tall) {

    var select = tall;
    if (select == 0) {
        spiller = 'Stein'
        
    } else if (select == 1) {
        spiller = 'Saks'
        
    } else {
        spiller = 'Papir';
        
    }

    // // let result = sjekkVinner(spillerValg(), datamaskinValg());
    // if (result === 'Spiller'){
    //     result += ' vinner!';
    //     // vinnerPoeng[0]++;
    // }
    // if (result === 'Datamaskin'){
    //     result += ' vinner!';
    //     // vinnerPoeng[1]++;
    // }
    // if (result === 'Uavgjort'){
    //     result += ' vinner!';
    // }

    // poeng.innerHTML = 'Spiller: [ ' + vinnerPoeng[0]+ ' ] Datamaskin: [ ' + vinnerPoeng[1] + ']';

    // melding('Spiller: <strong>' + spillerValg + '</strong> Datamaskin: <strong>' + datamaskinValg + '</strong><br>' + result);
}


// function melding(selectionMessage) {
//     melding.innerHTML = selectionMessage;
// }

function sjekkVinner(spiller, datamaskin) {

    

    // Sjekker om datamaskin vinner
    if (((spiller === 'Stein' && datamaskin === 'Papir')
        || (spiller === 'Papir' && datamaskin === 'Saks'))
        || (spiller === 'Saks' && datamaskin === 'Stein')) {
        result = 'Datamaskin';
        poengDatamaskin += 1;
        // alert('Datamaskinen vinner denne runden');
    }

    // Sjekker om spiller vinner
    if (((datamaskin === 'Stein' && spiller === 'Papir')
        || (datamaskin === 'Papir' && spiller === 'Saks'))
        || (datamaskin === 'Saks' && spiller === 'Stein')) {
        result = 'Spiller';
        poengSpiller += 1;
        // alert('Spilleren vinner denne runden');
    }
    
    // if (spiller === 'Stein'{
    //     if(datamaskin === 'Papir'){
    //         return 'Datamaskin';
    //     } else {
    //         return 'Spiller';
    //     }
    // }
    // if (spiller === 'Saks'{
    //     if(datamaskin === 'Stein'){
    //         return 'Datamaskin';
    //     } else {
    //         return 'Spiller';
    //     }
    // }
    // if (spiller === 'Papir'{
    //     if (datamaskin === 'Saks'){
    //         return 'Datamaskin';
    //     } else {
    //         return 'Spiller';
    //     }
    // }

    // Uavgjort
    if (spiller === datamaskin) {
        result = 'Uavgjort';
    }

    // show();
}
