// 1 car class
class Car {
    model: string;
    year: number;

    constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }
    
    // 2 methor of class
    getCarInfo()
    {
        console.log(
            'Car model is: ' + this.model + '\n'
            + 'Car year is: ' + this.year
            );
    }
}

//result of work
let result = new Car('Toyota', 2020);
result.getCarInfo();