// Romain GILOT 
// Programme JS : Calculatrice
// Github : RomainGilot

    const touches = document.querySelectorAll('.button'); // Selection de tous les boutons
    const defaut = document.querySelector('.ecran'); // Selection de l'écran d'affichage
    var arr = []; // tableau vide qui contriendra le calcul

    touches.forEach((item) => {
        item.onclick = () => {
            if (item.id == 'AC') {
                defaut.innerText = '';
                arr = [];
            } else {
                defaut.innerText += item.id;

                switch(item.id) {
                    case "+": arr.push(item.id); break;
                    case "-": arr.push(item.id); break;
                    case "/": arr.push(item.id); break;
                    case "x": arr.push(item.id); break;
                    case "=": arr.push(item.id); break;
                    default:
                        arr.push(parseInt(item.id)); 
                    break;
                }
                
                if(item.id == '=') {
                    const calcul = defaut.textContent.replace("=", "").replace("x", "*").replace(",", ".");
                    if(calcul == "") {
                       defaut.innerText = ''; 
                    } else {
                        const result = eval(calcul);
                        defaut.innerText = result;
                    }   
                }
            }
        }
    });