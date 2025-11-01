function totalWaysToSum(n) {
    // Variavel da nossa array. 
    // n + 87 = 88 posições que são preenchidas com 0. Como so precisamos da 1 até 87, já que a primeiro possição se faz 0 !
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1; // (maneira de fazer 0)
    
    // Como não podemos fazer 87 + 0 = 87, ou seja chegando somente até 86, garantindo que sempre usamos pelo menos 2 números para fazer o cálculo. 
    for (let num = 1; num < n; num++) {         
        // Soma começa em num e vai até n, incrementando de 1 em 1. Quando ela bate o resultado 87, ela conta como uma resolução encontrada!
        for (let soma = num; soma <= n; soma++) {
        // Quando a soma atual atinge 87, ela calcula quantas novas combinações
        // podem ser formadas pegando maneiras de fazer (87 - num) e adicionando o número atual
            dp[soma] += dp[soma - num];
            // Isso incrementa o contador de soluções para 87 cada vez que encontra
            // uma nova forma de chegar no valor desejado
        }
    } // Ou seja, é mais inteligente pegar o valor total (87) e subtrair algum valor que não chegue a zero (87 - 87 = 0), e pegar esse valor subtraido + o resultado pq sabemos que irá dar 87 
    
    return dp[n];
}

console.log("Para 87:", totalWaysToSum(87)); // Resposta final!