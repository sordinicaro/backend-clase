// ----------- Sólamente modificar los tipos ----------- //

/*

Intro:

	Inicialmente, sólo teníamos usuarios en la base de datos.
	Despues de introducir algunos administradores, tenemos 
	que arreglar los tipos para que todo funcione bien.
	
Ejercicio:

	El tipo "Person" está perdido. Por favor definilo y usalo
	en el array de personas y en la funcion logPerson para poder
	arreglar todos los problemas de TS.

*/

interface NormalUser {
	name: string;
	age: number;
	occupation: string;
}

interface Admin {
	name: string;
	age: number;
	role: string;
}

type Person = unknown;

const persons: unknown = [
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

function logPerson(user: unknown) {
	console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);

// En caso de que estés trabada:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
