
interface Product {
    productId: number;
    name: string;
    category: number;
    price: number;
}

const products: Product[] = [
    {
        productId: 1,
        name: "headphones",
        category: 1,
        price: 100,
    },
    {
        productId: 2,
        name: "Shoes Nike",
        category: 2,
        price: 300,
    },
    {
        productId: 3,
        name: "hamburger",
        category: 3,
        price: 10,
    },
    {
        productId: 4,
        name: "Fries",
        category: 3,
        price: 5,
    },
    {
        productId: 5,
        name: "Sandwich",
        category: 3,
        price: 10,
    },
    {
        productId: 6,
        name: "laptop",
        category: 1,
        price: 100,
    },
    {
        productId: 7,
        name: "keyboard",
        category: 1,
        price: 50,
    },
    {
        productId: 8,
        name: "t-shirt",
        category: 2,
        price: 16,
    },
];

const categories = [
    { id: 1, name: "Electronic" },
    { id: 2, name: "Clothes" },
    { id: 3, name: "Food" }
];

export const discountsHolyDays = [
    { category: 1, discountApply: true, value: 10 },
    { category: 2, discountApply: false, value: 0 },
    { category: 3, discountApply: true, value: 30 },
];

//// Activity

// cada solución debe de crearse con metodo que retorne el resultado esperado de cada punto
// y su llamda del metodo con un console.log donde muestre la información

/// 1 - ¿Cuál es el promedio de valor de cada tipo de producto?

/// 2 - ¿Cuál es el producto más costoso de cada categoria?

/// 3 - ¿Exite algún producto de tipo Electronico que cueste $100?

/// 4 - Obtener todos los productos que en nombre tengan las letra S. 

/// 5 - Crear un arreglo de objetos con la siguiente información: { productId: 7 ,nameProduct: 'keyboard', category: 'Electronic', discount: '10', applyDiscount: true}

/// 6. Crear un arreglo de objetos con la siguiente información: { productId: 7, priceWithDiscount: 45}

// 7. Agregar los siguientes productos, y crear un arreglo con el resultado, ejemplo: [{id: 9, status: 'succes', id:10: status: 'error': message: 'error message'}];
// errors: duplicated key

const newProducts = [
    {
        id: 9,
        name: 'Tucson',
        typeOfProcuct: 'Car',
        discount: 10,
    }, {
        id: 10,
        name: 'Jeep',
        typeOfProcuct: 'Car',
        discount: 10,
    }, {
        id: 10,
        name: 'Screen',
        typeOfProcuct: 'Electronic'
    }, {
        id: 1,
        name: 'Mouse',
        typeOfProcuct: 'Electronic'
    }
]




// UTILS FUNCTIONS

const average = (arr: Product[]) => arr.reduce((a, b) => a + b.price, 0) / arr.length;
const maxPriceProduct = (arr: Product[]):Number => {
    const prices = arr.map(product => {
        return product.price;
    });
    return Math.max(...prices)
}
const findProduct400 = (arr: Product[]):boolean =>{
    return arr.some(product => product.price === 100)
}

const findLetterS = (arr: Product[]): Product[] =>{
    return arr.filter(product => product.name.indexOf("s") > -1)
}

const changeArray = (arr: Product[]) => {
    return arr.map(product => ({productId: product.productId, nameProduct: product.name, category: product.category, discount: (product.price*0.1), applyDiscount: true }))
}

const changeArraySimple = (arr: Product[]) => {
    return arr.map(product => ({ productId: product.productId, priceWithDiscount: product.price}))
}

// Solutions
console.log(average(products))
console.log(maxPriceProduct)
console.log(findProduct400)
console.log(findLetterS(products))
console.log(changeArray(products))
console.log(changeArraySimple(products))