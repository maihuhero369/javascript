let x = 5;
let y = 10;
console.log("The sum of x and y is: " + (x + y));
console.log("The product of x and y is: " + (x * y));
console.log("The difference of x and y is: " + (x - y));
console.log("The quotient of x and y is: " + (x / y));  
console.log("The remainder of x divided by y is: " + (x % y));
console.log("The value of x raised to the power of y is: " + (x ** y));


// WAP to find the area of a triangle given its base and height
let base = 10;
let height = 5;
let area = (base * height) / 2;
console.log("The area of the triangle is: " + area);

// WAP to find area of a rectangle given its lengthand width
let length = 15;
let width = 8;
let areaOfRectangle = length * width;
console.log("The area of the rectangle is: " + areaOfRectangle);

 // WAP to swap two numbers using a temporary variable
let num1 = 4;
let num2 = 9;
console.log("Before swapping: num1 = " + num1 + ", num2 = " + num2);
let temp = num1; 
num1 = num2; 
num2 = temp; 
console.log("After swapping: num1 = " + num1 + ", num2 = " + num2);
  
// WAP to swap two numbers without using a temporary variable
let a = 3;
let b = 7;
console.log("Before swapping: a = " + a + ", b = " + b);
a = a + b; 
b = a - b; 
a = a - b; 
console.log("After swapping: a = " + a + ", b = " + b);
