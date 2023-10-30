// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
// };

// const jsonStudent = JSON.stringify(student, null, 2);

// console.log(jsonStudent);
// console.log(student);

// const smth = new Date('May 21, 2020 12:15:30 UTC');

// const jsonDate = smth.toJSON();

// console.log(jsonDate);
// console.log(smth);

// const func = () => {
//     try {
//         console.log("starting the try block")
//         //Unexisting variable
//         hello
//         //not accessed if there is an error with the above code
//         console.log("finishing the try block")
//     } catch (err) {
//         console.log("starting the catch block")
//         console.log(err)
//     } finally {
//         console.log("Function done")
//     }
// }

// func()

// const func = () => {
//     try {
//         console.log("starting the try block")
//         hello
//         console.log("finishing the try block")
//     } catch (err) {
//         console.log("starting the catch block")
//         console.log(`
//         Error Name : ${err.name}, 
//         Error Msg : ${err.message},
//         Error Stack : ${err.stack}`)
//     } finally {
//         console.log("Function done")
//     }
// };
//     func()


const func = (a, b) => {
    let result;
    try {
        result = a / b
        if (b == 0) {
            throw new Error('Cannot divide by Zero');
        }
    } catch (err) {
        if (err instanceof ReferenceError) {
            console.log(`
                Error Name : ${err.name}, 
                Error Msg : ${err.message}`
            )
        } else {
            console.log("Other Error")
            console.log(`
                Error Name : ${err.name}, 
                Error Msg : ${err.message}`
            )
        }
    } finally {
        console.log("Function done")
    }
}

func(3, 0);