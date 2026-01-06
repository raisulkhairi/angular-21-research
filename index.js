class myClass {
    constructor() {}
    
    myField = "foo"
    
    myMethod() {}
    
    static myStaticField = "bar"
    static myStaticMethod() {}
    
    // static block
    static {}
    
    #myPrivateField = "bar"
}

const myInstance = new myClass();

console.log(myInstance.myField);

// this commit feature 1
// this commit feature 2