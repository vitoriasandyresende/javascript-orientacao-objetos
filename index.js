import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233344);

const cliente2 = new Cliente("Alice", 55566677788);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

const contaCorrenteAlice = new ContaCorrente(cliente2, 1001 );

console.log(contaCorrenteRicardo._saldo);
contaCorrenteRicardo.depositar(500);
console.log(contaCorrenteRicardo._saldo);
const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo._saldo);
console.log(valorSacado)
contaCorrenteRicardo.transferir(200, contaCorrenteAlice);

console.log(cliente1, cliente2);
console.log(contaCorrenteRicardo, contaCorrenteAlice);

console.log(ContaCorrente.numeroDeContas);