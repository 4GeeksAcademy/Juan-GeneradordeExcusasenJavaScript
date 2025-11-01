import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const excuseElement = document.querySelector('#excuse')
  function GetRandomData(array) {
    const RandomData = Math.floor(Math.random()* array.length);
    return array[RandomData]
  }
  
  const who = [
    'Mi perro',
    'Un duende navideño',
    'Santa Claus',
    'Mi vecino loco',
    'Un reno perdido',
    'El muñeco de nieve',
    'Un duende gruñón'
  ];
  const RandomWho = GetRandomData(who)

  const action = [
    'rompió',
    'escondió',
    'se comió',
    'quemó',
    'se llevó',
    'ensució',
    'robó'
  ];
  const RandomAction = GetRandomData(action)

  const what = [
    'mis regalos',
    'mi tarea',
    'la cena navideña',
    'mi árbol de Navidad',
    'mi teléfono',
    'las luces del árbol',
    'mi computadora'
  ];
  const RandomWhat = GetRandomData(what)

const when = [
    'esta mañana',
    'ayer en la noche',
    'durante la cena familiar',
    'mientras dormía',
    'en Nochebuena',
    'cuando estaba comprando regalos',
    'justo antes de venir aquí'
  ];
  const RandomWhen = GetRandomData(when)

  const excuse = RandomWho + " " + RandomAction + " " + RandomWhat + " " + RandomWhen
  excuseElement.innerText = excuse 
};
