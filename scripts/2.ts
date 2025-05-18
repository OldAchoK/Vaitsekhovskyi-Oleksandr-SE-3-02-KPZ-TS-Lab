// 1 interface declaration
interface Person
{
    name: string;
    age: number;
    address: string;
}

//2 function to print Person info
function printPerson(individual: Person)
{
    console.log(
    'Person has name: ' + individual.name + '\n'
    + 'Person at age: ' + individual.age + '\n'
    + 'Person at address: ' + individual.address
    );
}

// result of task
let dude: Person = {
    name: 'Master',
    age: 30,
    address: 'Japan',
};
printPerson(dude);