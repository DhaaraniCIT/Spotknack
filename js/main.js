var app = new Vue({
  el:'#app',
  data:{
    image:'/image/face.jpg',
    name:'Maciej',
    plan:'Free'
  }
})

var drag = new Vue({
  el: '#drag',
  data: {
    product: 'Chinese meat dumbling',
    image: '/image/du.jpg',
    description: '672 calaries per portion',
    price: '$5,99',
    ingridien:'/image/meat.jpg'
  }
})
var drag1 = new Vue({
  el: '#drag1',
  data: {
    product: 'Bio Musli with Peach',
    image: '/image/peach.jpg',
    description: '348 calaries per portion',
    price: '$3,49',
    ingridien:'/image/d.png',
    ingridien1:'/image/dd.jpg'
  }
})
var drag2 = new Vue({
  el: '#drag2',
  data: {
    product: 'Fresh Sandwich with Hum',
    image: '/image/image.png',
    description: '552 calaries per porsion',
    price: '$4,29',
    ingridien:'/image/meat.jpg',
    ingridien1:'/image/bread.jpeg'
  }
})
function allowDrop(ev) {ev.preventDefault();}
function drag(ev) {ev.dataTransfer.setData("text/html", ev.target.id);}
function drop(ev) {
ev.preventDefault();
var data = ev.dataTransfer.getData("text/html");
ev.target.appendChild(document.getElementById(data));
}
var side = new Vue({
  el: '#side',
  data: {
    product: 'TomatoOmelette',
    image: '/image/tomato.jpg',
    description: '489 kcal',
    price: '$4,99',
  }
})
var side1 = new Vue({
  el: '#side1',
  data: {
    product: 'Fruit Yoghurt',
    image: '/image/yogurt.jpg',
    description: '489 kcal',
    price: '$2,29',
  }
})
