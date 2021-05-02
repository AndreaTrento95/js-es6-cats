// CONSEGNA:
/* -Milestone 1
Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
-Milestone 2
Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
-Milestone 3
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto. */

// --------------------------- SVOLGIMENTO ------------------------------------------------

$(document).ready(function(){

    // ---- MIlestone 1 -------

    // creo array di oggetti (cat)
    const cats = [
        {
            name: 'Grace',
            age: 1.5,
            color: '#964180',
            gender: 'female'
        },
        {
            name: 'Giove',
            age: 1,
            color: '#494146',
            gender: 'male'
        },
        {
            name: 'Bomber',
            age: 0.3,
            color: '#CAA446',
            gender: 'male'
        },
        {
            name: 'Urano',
            age: 0.4,
            color: '#1E110A',
            gender: 'male'
        },
        {
            name: 'Jade',
            age: 3.5,
            color: '#6E4B35',
            gender: 'female'
        }
    ];

    // funzione forEach per stampare a pagina i gattini con il proprio colore e nome
    cats.forEach((cat) => {
        $('#milestone-1 ul').append(liGenerator(cat.color, cat.name));
    });


    // ----- Milestone 2 ------
    // uso map per dare la nuova proprietà ribbon ai gatti, creando un nuovo array
    const pink = '#ff08e6';
    const blue = '#0884ff';

    const newCats = cats.map((cat) => {
        let color = (cat.gender === 'male') ? blue : pink;
        let opacity = cat.age / 10;
        return {
            ...cat,
            ribbon: {
                color,
                opacity
            }
        };
    });

    // filtro per creare due array diversi in base al sesso dei gattini
    const maleCats = newCats.filter((cat) => cat.gender === 'male');
    const femaleCats = newCats.filter((cat) => cat.gender === 'female');

    // stampo a schermo usando il forEach per prendere ciascun 'gatto'
    maleCats.forEach((cat) => {
        $('#milestone-2-male ul').append(liGenerator(cat.color, cat.name, cat.ribbon.color, cat.ribbon.opacity));
    });
    femaleCats.forEach((cat) => {
        $('#milestone-2-female ul').append(liGenerator(cat.color, cat.name, cat.ribbon.color, cat.ribbon.opacity));
    });
    

    // ------- Milestone 3 ---------

    // creo un array ordinato con al suo interno prima i gatti femmine poi i maschi
    const orderedCats = [...femaleCats, ...maleCats];
    

    // generare un array con all'interno nome colore e ribbon
    const filterCats = orderedCats.map((cat) => {
        const {name, color, ribbon} = cat;
        return {name, color, ribbon};
    });
    
    // stampo a video
    /* filterCats.forEach((cat) => {
        $('#milestone-3 ul').append(liGenerator())
    }) */

    











})

//  --------- functions ---------

function liGenerator (catColor, catName, ...ribbon){
    let ribbonTag = "";
    if(ribbon.length > 0){
        ribbonTag = `
                        <i class="fas fa-ribbon" 
                        style="color:${ribbon[0]}
                               opacity:${ribbon[1]}" </i>
                    `
    };
    let html = `
        <li>
            <i class="fas fa-cat" style="color:${catColor}"></i>
            ${ribbonTag}
            <span>${catName}</span>
        </li>    
    `;
    return html;
}