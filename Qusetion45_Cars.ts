interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function create_car(manufacturer: string, model: string, ...extras: [string, any][]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    for (let [key, value] of extras) {
        car[key] = value;
    }

    return car;
}

let myCar = create_car("Toyota", "Camry", ["color", "Blue"], ["year", 2022]);

console.log(myCar);
