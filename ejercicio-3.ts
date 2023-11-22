/*

Intro:

    Parece un buen momento para generar un output como la gente...

Ejercicio:

    Arreglar los errores de tipado en la función logPerson.

    logPerson debería aceptar tanto User como Admin, y debería
    retornar información relevante de acuerdo con la entrada:
        occupation para el usuario y role para el admin.

*/

interface CommonUser {
	name: string;
	age: number;
	occupation: string;
}

interface Admin {
	name: string;
	age: number;
	role: string;
}

type PersonType = unknown;

const personsCollection: PersonType[] = [
	{
		name: 'Max Mustermann',
		age: 25,
		occupation: 'Chimney sweep',
	},
	{
		name: 'Jane Doe',
		age: 32,
		role: 'Administrator',
	},
	{
		name: 'Kate Müller',
		age: 23,
		occupation: 'Astronaut',
	},
	{
		name: 'Bruce Willis',
		age: 64,
		role: 'World saver',
	},
];

function printPerson(person: PersonType) {
	let additionalInformation: string;

	if (person.role) {
		additionalInformation = person.role;
	} else {
		additionalInformation = person.occupation;
	}

	console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

personsCollection.forEach(printPerson); // --> Es la forma abreviada de escibir: personsCollection.forEach((personObj) => printPerson(personObj));

// En caso de que estés trabada:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing
