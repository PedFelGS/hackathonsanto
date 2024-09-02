# Lógica de Programação (Desafio 0)

## Exercício I:

### Solução em JS:

``` js
function gerarAsteriscos(quantidade) {
    let asteriscos = [];
    for (let i = 1; i <= quantidade; i++) {
        asteriscos.push('*'.repeat(i));
    }
    return asteriscos;
}

console.log(gerarAsteriscos(5));
```

***
## Exercício II:

### ### Solução em JS:

``` js
function encontrarParesComMenorDiferenca(arranjo) {
    arranjo.sort((a, b) => a - b);
    let menorDiferenca = Infinity;
    let pares = [];

    for (let i = 1; i < arranjo.length; i++) {
        let diferenca = arranjo[i] - arranjo[i - 1];

        if (diferenca < menorDiferenca) {
            menorDiferenca = diferenca;
            pares = [[arranjo[i - 1], arranjo[i]]];
        } else if (diferenca === menorDiferenca) {
            pares.push([arranjo[i - 1], arranjo[i]]);
        }
    }

    return pares;
}

const arranjo_teste = [4, 9, 1, 32, 13, 8, 3, 25, 21, 5];
const resultado = encontrarParesComMenorDiferenca(arranjo_teste);
resultado;
```

***
## Exercício III:

### Solução em JS:

``` javascript
function subconjuntos(numeros) {
    const resultado = [];

    const gerarSubconjuntos = (indice, atual) => {
        if (indice === numeros.length) {
            resultado.push([...atual]);
            return;
        }

        gerarSubconjuntos(indice + 1, atual);

        atual.push(numeros[indice]);
        gerarSubconjuntos(indice + 1, atual);

        atual.pop();
    };

    gerarSubconjuntos(0, []);
    return resultado;
}

console.log(subconjuntos([1, 2]));

```

***

## Exercício II (Avançado):

### Solução em JS:

``` javascript
function encontrarParesComMenorDiferenca(numeros, permitirDuplicatas = false, paresOrdenados = false, paresUnicos = false) {
    numeros.sort((a, b) => a - b);
    
    let menorDif = Infinity;
    let paresMinimos = [];
    
    for (let i = 0; i < numeros.length - 1; i++) {
        for (let j = i + 1; j < numeros.length; j++) {
            let diferenca = Math.abs(numeros[i] - numeros[j]);
            
            if (diferenca < menorDif) {
                menorDif = diferenca;
                paresMinimos = [[numeros[i], numeros[j]]];
            } else if (diferenca === menorDif) {
                paresMinimos.push([numeros[i], numeros[j]]);
            }
        }
    }
    
    if (!permitirDuplicatas) {
        paresMinimos = paresMinimos.filter(par => par[0] !== par[1]);
    }
    
    if (paresUnicos) {
        paresMinimos = paresMinimos.map(par => par[0] < par[1] ? par : [par[1], par[0]]);
        paresMinimos = Array.from(new Set(paresMinimos.map(par => par.toString()))).map(par => par.split(',').map(Number));
    }
    
    if (paresOrdenados) {
        paresMinimos.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    }
    
    return paresMinimos;
}

const casosDeTeste = [
    {numeros: [4, 2, 1, 3], permitirDuplicatas: false, paresOrdenados: false, paresUnicos: false},
    {numeros: [10, 20, 30, 40], permitirDuplicatas: false, paresOrdenados: false, paresUnicos: false},
    {numeros: [1, 3, 3, 6], permitirDuplicatas: true, paresOrdenados: false, paresUnicos: false},
    {numeros: [1, 3, 3, 6], permitirDuplicatas: false, paresOrdenados: true, paresUnicos: true},
    {numeros: [5, 1, 2, 6, 3], permitirDuplicatas: false, paresOrdenados: false, paresUnicos: true}
];

casosDeTeste.forEach((casoDeTeste, indice) => {
    const resultado = encontrarParesComMenorDiferenca(casoDeTeste.numeros, casoDeTeste.permitirDuplicatas, casoDeTeste.paresOrdenados, casoDeTeste.paresUnicos);
    console.log(`Caso de teste ${indice + 1}:`, resultado);
});
```

***
## Exercício III (Avançado):

### Solução em JS:

``` javascript
function obterSubconjuntos(numeros, tamanhoMaximo = Infinity, tamanhoMinimo = 0, apenasDistintos = false, ordenarSubconjuntos = false) {
    function gerarSubconjuntos(indiceAtual, subconjuntoAtual) {
        if (indiceAtual === numeros.length) {
            if (ordenarSubconjuntos) {
                subconjuntoAtual.sort((a, b) => a - b);
            }
            return [subconjuntoAtual];
        }

        const subconjuntos = [];
        
        const novoSubconjunto = [...subconjuntoAtual, numeros[indiceAtual]];
        subconjuntos.push(...gerarSubconjuntos(indiceAtual + 1, novoSubconjunto));

        subconjuntos.push(...gerarSubconjuntos(indiceAtual + 1, subconjuntoAtual));

        return subconjuntos;
    }

    function filtrarSubconjuntos(subconjuntos) {
        if (!apenasDistintos) return subconjuntos;

        const subconjuntosUnicos = new Set();
        return subconjuntos.filter(subconjunto => {
            const subconjuntoOrdenado = [...subconjunto].sort((a, b) => a - b);
            const chave = subconjuntoOrdenado.join(',');
            if (!subconjuntosUnicos.has(chave)) {
                subconjuntosUnicos.add(chave);
                return true;
            }
            return false;
        });
    }

    const subconjuntos = gerarSubconjuntos(0, []);
    
    let subconjuntosFiltrados = subconjuntos;
    if (tamanhoMaximo !== Infinity) {
        subconjuntosFiltrados = subconjuntosFiltrados.filter(subconjunto => subconjunto.length <= tamanhoMaximo);
    }
    if (tamanhoMinimo > 0) {
        subconjuntosFiltrados = subconjuntosFiltrados.filter(subconjunto => subconjunto.length >= tamanhoMinimo);
    }
    if (apenasDistintos) {
        subconjuntosFiltrados = filtrarSubconjuntos(subconjuntosFiltrados);
    }

    return subconjuntosFiltrados;
}

const casosDeTeste = [
    { numeros: [1, 2], tamanhoMaximo: 2, tamanhoMinimo: 0, apenasDistintos: false, ordenarSubconjuntos: false },
    { numeros: [1, 2, 2], tamanhoMaximo: 2, tamanhoMinimo: 1, apenasDistintos: true, ordenarSubconjuntos: true },
    { numeros: [3, 3, 3], tamanhoMaximo: 3, tamanhoMinimo: 2, apenasDistintos: true, ordenarSubconjuntos: true },
    { numeros: [1, 2, 3], tamanhoMaximo: 3, tamanhoMinimo: 0, apenasDistintos: false, ordenarSubconjuntos: true },
    { numeros: [5, 5], tamanhoMaximo: 1, tamanhoMinimo: 1, apenasDistintos: true, ordenarSubconjuntos: true }
];

casosDeTeste.forEach((caso, indice) => {
    const resultado = obterSubconjuntos(caso.numeros, caso.tamanhoMaximo, caso.tamanhoMinimo, caso.apenasDistintos, caso.ordenarSubconjuntos);
    console.log(`Caso de Teste ${indice + 1}:`, resultado);
});
```
