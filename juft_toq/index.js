function juft_toq() {
    let a;
    for (let i = 1; i < 101; i++) {
        if (i % 2 == 0) {
            a = 'toq'
        }
        else {
            a = 'juft';
        }
        console.log(`${i} - ${a}`)
    }
}
juft_toq();