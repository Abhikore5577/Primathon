// 


function* testGenerator() {
    const two = yield 2;
    return two;
    }
    const it = testGenerator();
    console.log(it);
    console.log(it.next());
    console.log(it.next());
