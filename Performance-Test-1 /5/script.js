let nomeColegio = "Colegio cave";
let fundacao = 2000;

const colegio = {
  nome: nomeColegio,
  anoDeFundacao: fundacao,
  nomeDiretor: "Alice",
  numeroAlunos: 593,
  telefone: 3299479942,

  obterDiretor: function () {
    alert(this.nomeDiretor);
  },
};
console.log(colegio);
colegio.obterDiretor();
