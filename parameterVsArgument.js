function fruitName(x, y) //Parameter
{
    console.log(`Fruit Name Are: ${x}, ${y}`);
}

fruitName('apple', 'mango'); //Argument

// Another example(Default)

function fruitName(name='apple') //Parameter
{
    console.log(name);
}

fruitName();
fruitName('mango');
fruitName('banana');
fruitName('lichy');