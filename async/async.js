// async & await
// clear style of using promise !
// 깔끔하게 promise를 사용할 수 있는 방법
// 무조건 promise가 나쁘고, async와 await으로 대체해야하는건 아님.
// promise를 유지해서 사용할 떄도 있음.

// 1. async
async function fetchUser(){
    // do network request in 10 secs ...
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await 🧡
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// promise 사용 시 콜백지옥이 됨 !
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}

pickFruits().then(console.log);

// async 사용
async function pickFruits2(){
    const applePromise = getApple();
    const bananaPromiwe = getBanana();
    // 바로 실행되게 하기위해서.
    const apple = await applePromise;
    const banana = await bananaPromiwe;
    return `${apple} + ${banana}`;
}
pickFruits2().then(console.log);

// 3. useful promise APIs promise 🤍 all, race
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
// 바나나만 호출됨 (먼저 호출되는것)