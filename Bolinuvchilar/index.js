function bolinuvchi(n, m) {

    for (let i = 1; i < 101; i++) {
        if (i % n == 0 && i % m == 0) {

            console.log(i)
        }

    }
}
bolinuvchi(3, 5)