const firstNames = ['Luke', 'Darth', 'Leia', 'Owen'];
const lastNames = ['Skywalker', 'Vader', 'Organa', 'Lars'];

const getName = () => {
	let _firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
	let _lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
	return `${_firstName} ${_lastName}`;
};

exports.getName = getName;