

var etage = prompt("Quel est le nombre d'étages de ta pyramide ?");


if (etage >=1 & etage <= 25)
{
    dessinerPyramide(etage);
}

else {console.log("Le nombre d etages doit être compris entre 1 et 25");}

function dessinerPyramide(n) {
    var width = (2 * n) -1; 
    var midpoint = Math.floor(width / 2); 
    let level = ''; 

    for(var i = 0; i < n; i++) { 
        level = '';
        for(var j = 0; j < width; j++) {
            if(j < midpoint-i || j > midpoint+i) {
                level += ' ';
            } else {
                level += '#';
            }
        }
        console.log(level);
                    
    }
}