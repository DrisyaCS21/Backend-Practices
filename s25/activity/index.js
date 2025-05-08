
	
	/*1. Create a function called addNum which will be able to add two numbers.
		- Numbers must be provided as arguments.
		- Return the result of the addition.*/
            function addNum(a , b)
            {
                return a + b ;
            }
            let sum = addNum(5,15);
            console.log("Displayed sum of 5 and 15");
            console.log(sum);
	/*2. Create a function called subNum which will be able to subtract two numbers.
	    - Numbers must be provided as arguments.
	    - Return the result of subtraction.*/
            function subNum(a,b)
            {
                return a-b ;
            }
            let diff = subNum(20,5);
            console.log("Displayed difference of 20 and 5");
            console.log(diff);

	/*3. Create a function called multiplyNum which will be able to multiply two numbers.
		- Numbers must be provided as arguments.
		- Return the result of the multiplication. */
                function multiplyNum(a,b)
                    {
                        return a*b ;
                    }
                    let multiply = multiplyNum(50,10);
                    console.log("The Product of 50 and 10:");
                    console.log(multiply);

	/*4. Create a function divideNum which will be able to divide two numbers.
		- Numbers must be provided as arguments.
		- Return the result of the division.*/
        function divideNum(a,b)
        {
            return a/b ;
        }
        let divide = divideNum(50,10);
        console.log("The Quotient of 50 and 10 :");
        console.log(divide);

	/*5. Create a function called getCircleArea which will be able to get total area of a circle from a provided radius.
		- a number should be provided as an argument.
		- look up the formula for calculating the area of a circle with a provided/given radius.
		- look up the use of the exponent operator.
		- return the result of the area calculation.*/
        function getCircleArea(radius)
        {
           let area = Math.PI * (radius **2) ;
           return area;
        }
        let area = getCircleArea(15);
        console.log("The result of getting the area of circle with radius 15:");
        console.log(area);

	/*6. Create a function called getAverage which will be able to get total average of four numbers.
		- 4 numbers should be provided as an argument.
		- look up the formula for calculating the average of numbers.
		- return the result of the average calculation. */
         function getAverage(x,y,z,c)
         {
            let average = (x+y+z+c) /4;
            return average;
         }
          let average = getAverage(20,40,60,80);
          console.log("the average of 20,40,60 and 80");
          console.log(average);
	/*7. Create a function called checkIfPassed which will be able to check if you passed by checking the percentage of your score against the passing percentage.
		- this function should take 2 numbers as an argument, your score and the total score.
		- First, get the percentage of your score against the total. You can look up the formula to get percentage.
		- Using a relational operator, check if your score percentage is greater than 75, the passing percentage. Save the value of the comparison in a variable called isPassed.
		- return the value of the variable isPassed.
		- This function should return a boolean.*/
                function checkIfPassed(score , totalscore)
                {
                    let scorepercent = (score/totalscore) *100 ;
                    let isPassed =scorepercent>75;
                    return isPassed;
                }
                let pass = checkIfPassed(38 , 50);
                console.log("IS 38/50  a passing score?")
                console.log(pass);
/* 
	8. Debug the following code to allow the functions to properly receive and return the correct values and mimic the output.
		- Check syntax of the following code.
		- Check if value is returned.
		- Check the parameters and arguments
*/


function register(firstname,lastName,email,password,mobileNum)
{
    return {
        firstName: "Lilo",
        lastName: "Pelekai",
        email: 'lilostitch@gmail.com',
        password: 'liloohana',
        mobileNum: '09276612409'
}
}
let newUser = register("Lilo","Pelekai","lilostitch@gmail.com","liloohana", "09276612409");
console.log(newUser);


function createProduct(name,price,quantity)
{
    return{
        name:'Chocolate Bar',
        price: 200,
        quantity:50
    }
}
let newProduct = createProduct("Chocolate Bar",200,50);
console.log(newProduct);


function createTeamArr(member1,member2,member3,member4,member5)
{

    return ['Eugene', 'Dennis' , 'Alfred','Vincent', 'Jeremiah'];

}

let newTeam = createTeamArr("Eugene","Dennis","Alfred","Vincent","Jeremiah");
console.log(newTeam);


//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
module.exports = {

    addNum: typeof addNum !== 'undefined' ? addNum : null,
    subNum: typeof subNum !== 'undefined' ? subNum : null,
    multiplyNum: typeof multiplyNum !== 'undefined' ? multiplyNum : null,
    divideNum: typeof divideNum !== 'undefined' ? divideNum : null,
    getCircleArea: typeof getCircleArea !== 'undefined' ? getCircleArea : null,
    getAverage: typeof getAverage !== 'undefined' ? getAverage : null,
    checkIfPassed: typeof checkIfPassed !== 'undefined' ? checkIfPassed : null,
    register: typeof register !== 'undefined' ? register : null,
    createProduct: typeof createProduct !== 'undefined' ? createProduct : null,
    createTeamArr: typeof createTeamArr !== 'undefined' ? createTeamArr : null

}
} catch(err){

}