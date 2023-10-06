function fib(n) {
        if (n === 0) return [0];
        if (n < 2) { // If n is less than 2, return the initial Fibonacci array [0,1]
            return [0,1]
        }
        else {
            var a = fib(n-1); // For n greater than or equal to 2, recursively call fib(n-1)
            a.push(a[n -1] + a[n -2]); // Add the next Fibonacci number to the array
        return a; //returns the updated array
        }
    }

    // Tested with this example
    console.log(fib(7))

    /*
    Sources used: 
    TA in lab time: For some reason, I was using 2 recursive call, one to test positive and one to test negative. But TA helped me realised that I could do that in much simpler way and use only one recursive call. 
    Ziyu wang - Classmate
    https://www.geeksforgeeks.org/loop-invariant-condition-examples-sorting-algorithms/
    https://stackoverflow.com/questions/51847970/fibonacci-using-recursion

    */
