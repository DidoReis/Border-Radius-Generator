let shape = document.querySelector('.shape');
let topInp = document.querySelector('.top')
let rightInp = document.querySelector('.right')
let bottomInp = document.querySelector('.bottom')
let leftInp = document.querySelector('.left')
let codecont = document.querySelector('.code-value')

//select all inputs
let rangeInps = document.querySelectorAll('.range')

rangeInps.forEach((inp) =>{
	inp.addEventListener('change', () =>{
		codecont.innerHTML = `${topInp.value}px ${
			rightInp.value}px	${bottomInp.value}px ${leftInp.value}px`


		shape.style.borderRadius = 	`${topInp.value}px ${
			rightInp.value}px	${bottomInp.value}px ${leftInp.value}px`
	})
})