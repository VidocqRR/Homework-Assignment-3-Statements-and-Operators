/*All men are mortal
Socrates is a man.
Therefore, socrates is mortal.
*/



function Mortal([arg1]) {
  let AllMen = 'mortal';
  let Socrat = arg1;
  if (Socrat == 'mortal')  {
    console.log('All men are mortal.Socrat is a men. Therefore, socrates is mortal.')
  }
  else {
    console.log('You have Error!')
  }
  
}

Mortal(['mortal'])
Mortal(['immortal'])

/*This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.
*/

 function Cake([arg]) {
  let cake = arg;
  if (cake == 'chocolate') {
    console.log('The Cake is a chocolate');
  }
  else if (cake == 'vanilla') {
    console.log('The Cake is a Vanilla')
  } else {
    console.log('Please enter one of these: chocolate and vanilla!');
  }
}
Cake(['chocolate'])
Cake(['vanilla'])
Cake(['gfgf'])


