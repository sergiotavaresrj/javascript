var val = [1, 2, 3, 4, 5]

for(pos in val) {
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
} let num1 = val.indexOf(2)
    if (num1 == -1) {
        console.log('O valor não foi encontrado')
    } else {console.log(`O valor está na posição ${num1}`) }

    console.log(`O vetor tem ${val.length} posições`)
/*let valores = [2, 9, 7, 3, 5, 8]
console.log(valores)
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/


/*for(let pos = 0; pos<num.length; pos++) {
    console.log(num[pos])
}*/ 

/*val[6] = 6
val.push(7)
val.length
val.sort()*/