// GO! (check the 'TASK *' html comments for the relevant elements to manipulate )


/* TASK 1 -- Show/Hide Nav */

document.querySelector(".btn-toggle-menu").addEventListener('click',function(){

  if(document.querySelector(".answer-box nav").className === 'nav-menu'){

    document.querySelector(".answer-box nav").className = 'nav-menu-hidden';

    document.querySelector(".btn-toggle-menu").innerHTML = "show now";

  } else{

    document.querySelector(".answer-box nav").className = 'nav-menu';

    document.querySelector(".btn-toggle-menu").innerHTML = "hide now";
	}
 })

/* TASK 2 -- Select/Deslect an Icon */
//seleccionamos a todos los que tienen la clase .option
document.querySelectorAll('.option').forEach(function(div){
//le agregamos el evento click a todos los que tienen la clase .option
//la letra e significa evento
  div.addEventListener('click', function(e) {
//currentTarget selecciona todos los elementos del div
    if (e.currentTarget.className === 'option'){
//utilizamos currentTarget para agregarle a los divs una clase
//cuando se les de click
      e.currentTarget.classList.add('selected');

    } else {
//currentTarget tambien nos sirve para remover clases
      e.currentTarget.classList.remove('selected');
    }
  })
})



/* TASK 3 -- Increase total number*/
//querySelectorAll para seleccionar a todos los que tienen la misma clase
document.querySelectorAll('.point').forEach(function(btn){
//btn.addEventListener para darles el evento click
  btn.addEventListener('click',function(){
//hacemos una variable para poder sumar los numeros mas facil
    var total = document.querySelector('.total-points');
//parseInt suma los valores de los botones
    total.textContent = parseInt(total.textContent) + parseInt(btn.textContent);
  })
})


/* TASK 4 (Adventure Mode)-- Move Item List to List */
document.querySelectorAll('.individual').forEach(li => {
  li.addEventListener('click', () => {
    if (li.parentNode.className === "good-standing-list") {
      document.querySelector('.probation-list').appendChild(li)

    } else if (li.parentNode.className === "probation-list") {
      document.querySelector('.good-standing-list').appendChild(li)
    }

  })
})


/* TASK 5 (Adventure Mode) -- Change Text Background Color From Palette */
