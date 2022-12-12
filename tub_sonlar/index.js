function tub(n) {
    for (let l = 1; l < n + 1; l++) {
     
        let k = 0;

        for (let i = 1; i < l + 1; i++) {
            if (l % i == 0)
             k++;
        }
        if (k == 2) {
            console.log(l)
        }
    }
}
tub(100)