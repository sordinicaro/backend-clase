<h1 align="center"> Prácticas con TypeScript </h1>

Antes de comenzar con los ejercicios que vamos a hacer en esta práctica, les quiero mostrar la solución que ofrece TypeScript para tipar a los objetos. Pero antes de ver algo nuevo, repasemos un poco lo que vimos hasta el momento.

<p align="center"> <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*7QwRdAxb9Q8wejjQJiFJsQ.png" /> </p>

<h2 align="center"> Anotaciones de tipo ó Type annotations </h2>

Las anotaciones de tipo permiten establecer el tipo de dato que queremos que una variable o función tenga. Por ejemplo, si tenemos `const suma = (a: number, b: number): number => a + b;`, le indicamos al intérprete que la función **suma()** tiene dos parámetros, y queremos que éstos sean datos de tipo _number_. Además, la función retornará un dato de tipo _number_.

- [Type Annotations](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#type-annotations)
- [¿Siempre es necesario tipar?](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables)

<h2 align="center"> Afirmaciones de tipo ó Type assertions </h2>

Cuando **TypeScript** no tiene forma de saber el tipo de dato en cuestión, pero nosostros sí, entonces hacemos uso de esta herramienta. Por ejemplo, imaginemos que queremos obtener la cantidad de planetas del Sistema Solar, y para esto solicitamos data a la API de la NASA:

`const planetsData = getDataFromURL('https://api.nasa.gov/planets.json);`

Vamos a suponer que la función _getDataFromURL()_ hace todo el trabajo necesario por nosotros, y nos retorna un **JSON** en formato **string**. Primero tendríamos que parsear esos datos para poder convertirlo a un _objeto_ manipulable con **TypeScript**, para luego acceder a una de sus propiedades, supongamos `quantity`, y finalmente acceder al dato:

`const planetsDataObj = JSON.parse(planetsData);`

`const numberOfPlanets = planetsDataObj.quantity;`

Y voilà! ya accedimos al dato que estábamos buscando. Ahora, nosotros, podemos saber de antemano que se trata de un dato tipo _number_. Pero, **TypeScript**, ¿tiene forma de saberlo? Por supuesto que **no**. Es en este caso hacemos uso del operador `as` para indicar el tipo que _sabemos_ que es el dato en cuestión:

`const numberOfPlanets = planetsDataObj.quantity as number;`

**¡OJO!** tengan en cuenta que básicamente le están diciendo a **TS** _confiá... yo se lo que estoy haciendo!_, así que asegúrense de saber bien! ya que pueden introducir errores al código. En los links les dejo un artículo para que lean un poco más acerca de ésto.

- [Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

<h2 align="center"> tsconfig.json </h2>

Para poder trabajar con **TypeScript**, es necesario crear un archivo de configuración básico. Para este propósito existe el comando `tsc --init` que nos crea el archivo de configuración _tsconfig.json_ con todas las configuraciones posibles, pero con la mayoría de ellas comentadas. Recuerden que para que les funcione este comando, teniendo instalado **TypeScript** únicamente de forma local, tienen que incluir el comando _npx_ delante: `npx tsc --init`. En el archivo **tsconfig.json** creado, sólamente están operativas las opciones más básicas. Por el momento vamos a dejarlo así:

    "target": "ESNext",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "alwaysStrict": true

<h2 align="center"> package.json </h2>

Ahora, en el package.json vamos a tener que incluir un comando para poder transpilar todo el código de **TypeScript** a **JavaScript**. Para ésto, agregamos un script llamado _compile_ con el comando _tsc_: `"compile": "tsc"`.

Recuerden incluír `"type": "module"` para poder usar la sintáxis de **ECMAScript** para importar/exportar módulos. Al incluír esto, ts-node nos va a traer problemas, prueben. Para solucionar el error tienen que agregar el flag `--esm` al **script** _"dev"_: `"dev": "ts-node --esm index.ts"`.

<h2 align="center"> Interfaces </h2>

A la hora de definir la forma de un objeto, la solución que nos ofrece TypeScript es la **interfaz**. Es como un contrato que detalla qué propiedades y métodos debe tener un objeto para cumplir con la forma determinada en la interfaz:

    interface User {
        name: string,
        id: number,
        active: boolean,
        location?: string
    }

En este ejemplo definimos una interfaz llamada User, que especifica que un objeto tiene que tener una propiedad _name_ de tipo _string_, _id_ de tipo _number_, _active_ de tipo _boolean_, y una propiedad opcional _location_ de tipo _string_. Así, a la hora de crear un nuevo objeto, vamos a poder tiparlo según la interface creada:

    const vitoCorleone: User = {
        name: 'Vito Corleone',
        id: 654789,
        active: true,
    }

También podríamos aprovechar la interfaz **User** para tipar una _collection_ con objetos de tipo **User**:

    const users: User[] = [
        {
            name: 'Vito Corleone',
            id: 654789,
            active: true
        },
        {
            name: 'Alfredo Corleone',
            id: 666333,
            active: true
        }
    ]

<h2 align="center"> ¡A PRACTICAR! </h2>

Resolvé los ejercicios de este repositorio. En caso de que se te complique, tenés al final de cada módulo la documentación correspondiente.
Fijate bien en el package.json con qué comando ejecutarlos.

:boom: Éxitos! :boom:

<h1 align="center"> LINKS </h1>

- [¿Por qué evitar usar las afirmaciones de tipos?](https://netbasal.com/why-you-should-avoid-using-type-assertion-in-typescript-e44e8217cae5)
- [Ejercicios interactivos de TypeScript](https://typescript-exercises.github.io/#exercise=3&file=%2Findex.ts)
