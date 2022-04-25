let amigo = {
    nome: 'Tavares',
    peso: 90.5,
    sexo: 'M',
    cidade: 'Rio de Janeiro',
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
   }} 
   amigo.engordar(-10.5)
   console.log(`${amigo.nome} mora no ${amigo.cidade} e pesa ${amigo.peso}kg`)