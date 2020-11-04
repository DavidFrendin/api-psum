const firstNames = ['Luke', 'Darth', 'Leia', 'Owen', 'Beru', 'Biggs', 'Obi-Wan', 'Anakin', 'Wilhuff', 'Chewbacca', 'Han', 'Greedo', 'Jabba', 'Wedge', 'Jek Tono', 'Yoda', 'Sheev', 'Boba', 'Lando', 'Mon', 'Arvel', 'Wicket Systri', 'Nien', 'Qui-Gon', 'Nute', 'Finis', 'Jar Jar', 'Roos', 'Rugor', 'Ric', 'Quarsh', 'Shmi', 'Darth', 'Commander', 'General', 'Count', 'Lord', 'Senator', 'Captain', 'Bib', 'Ayla', 'Dud', 'Ben', 'Mace', 'Kit', 'Eeth', 'Adi', 'Saesee', 'Yarael', 'Plo', 'Mas', 'Gregar', 'Cliegg', 'Luminara', 'Barriss', 'Bail Prestor', 'Jango', 'Zam', 'Dexter', 'Lama', 'Taun', 'Jocasta', 'Ratts', 'Wat', 'San', 'Shaak', 'Raymus', 'Sly', 'Tion', 'Finn', 'Rey', 'Poe', 'Padmé'];
const lastNames = ['Skywalker', 'Vader', 'Organa', 'Lars', 'Whitesun', 'Darklighter', 'Kenobi', 'Tarkin', 'Solo', 'Desilijic Tiure', 'Antilles', 'Porkins', 'Palpatine', 'Fett', 'Bossk', 'Calrissian', 'Lobot', 'Ackbar', 'Mothma', 'Crynyd', 'Warrick', 'Nunb', 'Jinn', 'Gunray', 'Valorum', 'Binks', 'Tarpals', 'Nass', 'Olié', 'Sebulba', 'Panaka', 'Maul', 'Fortuna', 'Secura', 'Bolt', 'Quadinaros', 'Windu', 'Fisto', 'Koth', 'Gallia', 'Tiin', 'Poof', 'Koon', 'Amedda', 'Typho', 'Cordé', 'Unduli', 'Offee', 'Dormé', 'Dooku', 'Wesell', 'Jettster', 'Su', 'We', 'Nu', 'Tyerell', 'Tambor', 'Hill', 'Ti', 'Grievous', 'Tarfful', 'Antilles', 'Moore', 'Medon', 'Dameron', 'Phasma', 'Amidala'];

const getName = () => {
	let _firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
	let _lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
	return `${_firstName} ${_lastName}`;
};

exports.getName = getName;