// ----------- Sólamente modificar los tipos ----------- //

/*

Ejercicio:

    Dados los datos, definir la interfaz User y usarlo correctamente. 

*/

type User = unknown;

const users: unknown[] = [
	{
		name: 'Max Mustermann',
		age: 25,
		occupation: 'Chimney sweep',
	},
	{
		name: 'Kate Müller',
		age: 23,
		occupation: 'Astronaut',
	},
];

function logPerson(user: unknown) {
	console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);

// En caso de que estés trabada:
// https://www.typescriptlang.org/docs/handbook/2/objects.html
