/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata. */

//3 per ogni click su btn Play verrà generata una nuova griglia che sostituisce la precedente

//All'evento click sul btn Play verrà generata una griglia di gioco
    //creiamo una variabile per salvare l'elemento button Play al cui click si genererà la griglia
const btnPlay = document.querySelector("button");

    //impostiamo in una variabile il numero di celle della griglia
const squareNmbr = 100;

let gridDisplayer = false;

btnPlay.addEventListener( "click", function(){

    if(gridDisplayer===false){ 
                //generiamo un array dal quale creeremo la griglia. Lo generiamo dalla funzione -generateOrderArray-
        const progressiveNmbrs = generateOrderArray (squareNmbr);
        //per ogni numero dell'array creiamo dinamicamente una cella -square- attraverso un ciclo che scorra l'array

        for (let i = 0; i< progressiveNmbrs.length; i++){
            //prelevo l'elemento in cui verrano create le celle e lo salvo in variabile
            const grid = document.querySelector(".grid")
            //creo una funzione -generateSquare- che generi un elemento all'interno del quale andrà un contenuto (numero preso dall'array)
                //salvo il numero preso dall'array in una variabile -innerNmbrs-
            const innerNmbrs = progressiveNmbrs[i];
            const square = generateSquare (innerNmbrs);
            //inserisco l'elemento creato nell'elemento genitore salvato nella variabile -grid-
            grid.append(square);

            //ad ogni elemento creato in questo ciclo, assegniamo un evento che lo attiva(al click cambia colore e logga messaggio)
            square.addEventListener("click", function(){
                square.classList.add("ms_click_on_square_bg");
                console.log(innerNmbrs)
            })
        }

        gridDisplayer = true;

    } else { 
        
        gridDisplayer = false
    }

 })






/**
 * Description Funzione che genera array con numeri progressivi da 1 a 100
 * @param {number} --> numero della lunghezza dell'array 
 * @returns {array} --> la funzione genererà un array 
 */
function generateOrderArray (arrayLength) {
    const array1to100 = [];
    for(let nmbr = 1; nmbr <= arrayLength; nmbr++){
        array1to100.push(nmbr);
    }
    return array1to100;
}

/**
 * Description Funzione che crea un elemento con un contenuto testuale interno(insideNmbr)
 * @param {number} --> il contenuto dell'elemento sarà un numero da 1 a 100
 * @returns {object} --> la funzione genererà un elemento nel DOM
 */
function generateSquare (insideNmbr){
    const newElement = document.createElement("div");
    newElement.classList.add("square", "flex", "align-center", "justify-center");
    newElement.innerHTML = insideNmbr;
    return newElement;
}
