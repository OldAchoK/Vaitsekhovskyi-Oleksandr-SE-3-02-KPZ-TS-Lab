// 1 generic function
function identity<T>(value: T): T
{
    return value;
}

// 2 testing function
console.log('number test ' + typeof identity(5));
console.log('string test ' + typeof identity('test'));
console.log('boolean test ' + typeof identity(true));