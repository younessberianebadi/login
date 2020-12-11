class Person{
	constructor(username, passw){
	this.username = username;
	this.passw = passw;
	}

	getStatment(){
		console.log(`username : ${this.username}\npassword : ${this.passw}`)
	}
}
const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.querySelector('.button');

button.addEventListener("click", (event) => {
	person1 = new Person(username.value, password.value);
	person1.getStatment();
});