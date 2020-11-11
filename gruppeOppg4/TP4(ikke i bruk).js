
// model

// var spiller;
// var datamaskin;
// var poengSpiller;
// var poengDatamaskin;
// var result;



// controller

function startSpill(){
    datamaskinValg();
    sjekkVinner(spiller, datamaskin) 
    updateView();
}


function sjekkVinner(spiller, datamaskin) {
    // Sjekker om datamaskin vinner
    if (((spiller === 'Stein' && datamaskin === 'Papir')
        || (spiller === 'Papir' && datamaskin === 'Saks'))
        || (spiller === 'Saks' && datamaskin === 'Stein')) {
        resultat = 'Datamaskin';
        poengDatamaskin += 1;
        // alert('Datamaskinen vinner denne runden');
    }
    // Sjekker om spiller vinner
    else if (((datamaskin === 'Stein' && spiller === 'Papir')
        || (datamaskin === 'Papir' && spiller === 'Saks'))
        || (datamaskin === 'Saks' && spiller === 'Stein')) {
        resultat = 'Spiller';
        poengSpiller += 1;
        // alert('Spilleren vinner denne runden');
    }
    // Uavgjort
    else if (spiller === datamaskin) {
        result = 'Uavgjort';
    }

    // show();
}


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
    datamaskin = '';
    var select = tall;
    if (select == 0) {
        spiller = 'Stein'
        
    } else if (select == 1) {
        spiller = 'Saks'
        
    } else {
        spiller = 'Papir';
        
    }
    
    updateView();
    
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

// function melding(selectionMessage) {
//     melding.innerHTML = selectionMessage;
// }


