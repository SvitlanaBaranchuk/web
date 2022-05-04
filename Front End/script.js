const selectEl = document.getElementById('select');
const registrationImage = document.getElementById('people-img');


selectEl.addEventListener('change', function() {
	switch(true){
		case this.value === 'first': registrationImage.src = "./Assets/Мельник.png";
		break;
		case this.value === 'second': registrationImage.src = "./Assets/Мартинюк.png";
		break;
		case this.value === 'third': registrationImage.src = "./Assets/Ткач.png";
		break;
		case this.value === 'fourth': registrationImage.src = "./Assets/Мудра.png";
		break;
		case this.value === 'fifth': registrationImage.src = "./Assets/Пилипчук.png";
		break;
		default: console.log("На жаль, фотографії цього лікаря немає.");
	}
})

