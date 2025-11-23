let userName = "panna"
function HelloMessage() {
    console.log("hey there" + userName);
}

HelloMessage();

function ShowPrime(n) {
    for (let i = 2; i <= n /2; i++) {
        if (n % i === 0) {
            console.log(n + " is not a prime number");
            return;
        } else {
            console.log("the no is prime");
        }
}
}

ShowPrime(10);

function PowerOn(a, n) {
    let ans = 1;
   for (let  i = 0; i < n; i++) {
    ans = ans * a;
   }
   console.log(ans);
}

PowerOn(2, 100);

let datas;
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        datas = await response.json();
        console.log(datas);
    }
    catch(err) {
        console.log("data", err);
    }
}

fetchData();

