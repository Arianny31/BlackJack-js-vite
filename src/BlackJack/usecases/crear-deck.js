import _ from 'underscore';



/**
 * 
 * @param {Array <string>} tiposDeCarta ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales ejemplo:  ['A','J','Q','K']
 * @returns {array} retorna un nuevo deck
 */
// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error('tiposDeCartas es obligatorio como arreglo');
    
    if( !tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tiposDeCartas es obligatorio como arreglo');

    let deck=[];


    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );
    return deck;
}