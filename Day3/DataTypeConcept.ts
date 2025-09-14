//Data type concept in TS
//1. Primitive data types
    //number
    //string
    //boolean
    //null
    //undefined
    //symbol
    //Any
    //void
    //bigint
    //union
    
//2. Non-Primitive data types
    //array
    //tuple
    //enum
    //object
    //function
    //class


    //string type
    let firstName:string = "Ankush";
    let lastName:string = 'Gupta';
    // let fullName:string = `Full name is : ${firstName} ${lastName}`;
    // console.log(fullName);
    // console.log(typeof fullName);
    console.log(`Full name is : ${firstName} ${lastName}`);
    console.log(`Type of fullName is : ${typeof fullName}`);

    //number type
    let age:number = 30;
    let price:number = 99.99;
    let bigInt:number = 9007199254;
    console.log(`Age is : ${age}`);
    console.log(`Type of age is : ${typeof age}`);

    //undefined and null
    let u:undefined = undefined;
    let n:null = null;
    console.log(`Value of u is : ${u} and type is : ${typeof u}`);
    console.log(`Value of n is : ${n} and type is : ${typeof n}`);

    let age1:number; //declaration
    console.log(`Value of age1 is : ${age1} and type is : ${typeof age1}`);


    //Any type
    //It can hold value of any data type and can be reassigned to any data type
    //It is super set of all data types
    let randomValue:any = 10;
    console.log(`Value of randomValue is : ${randomValue} and type is : ${typeof randomValue}`);

    randomValue = "Ankush";
    console.log(`No compilation issue. Value of randomValue is : ${randomValue} and type is : ${typeof randomValue}`);

    randomValue = true;
    console.log(`No compilation issue. Value of randomValue is : ${randomValue} and type is : ${typeof randomValue}`);

    //union type
    //It can hold more than one data type
    //It is used when we want to restrict a variable to hold only few data types
    let multiType: number | boolean;
    multiType = 20;
    console.log(`Value of multiType is : ${multiType} and type is : ${typeof multiType}`);

    multiType = true;
    console.log(`Value of multiType is : ${multiType} and type is : ${typeof multiType}`);

    //    multiType = "Hello"; // compile time error

    //void type
    //It is used when a function does not return any value
    function sayHello():void{
        console.log("Hello");
        // return "Hello"; // compile time error
    }
    
    sayHello();
