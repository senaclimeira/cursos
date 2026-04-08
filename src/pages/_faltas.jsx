import React from 'react';

const Faltas = () => {
  const unidadesCurriculares = [
    { uc: 1, nome: "Elaborar projetos de sistemas", aulas: 18, ch: "60h", falta25: "15h", qtdeDias: "4 dias" },
    { uc: 2, nome: "Elaborar documentação de sistemas", aulas: 11, ch: "36h", falta25: "9h", qtdeDias: "2 dias" },
    { uc: 3, nome: "Modelar e estruturar banco de dados", aulas: 18, ch: "60h", falta25: "15h", qtdeDias: "4 dias" },
    { uc: 4, nome: "Administrar e implantar servidores de banco de dados", aulas: 24, ch: "84h", falta25: "21h", qtdeDias: "6 dias" },
    { uc: 5, nome: "Desenvolver algoritmos e linguagem orientada a objetos", aulas: 31, ch: "108h", falta25: "27h", qtdeDias: "7 dias" },
    { uc: 6, nome: "Desenvolver interface de usuário e usabilidade de aplicação desktop", aulas: 28, ch: "96h", falta25: "24h", qtdeDias: "6 dias" },
    { uc: 7, nome: "Programar aplicação desktop com integração em servidores de banco de dados", aulas: 31, ch: "108h", falta25: "27h", qtdeDias: "7 dias" },
    { uc: 8, nome: "Executar testes, melhorias e versionamento de aplicativo desktop", aulas: 18, ch: "60h", falta25: "15h", qtdeDias: "4 dias" },
    { uc: 9, nome: "Desenvolver interface de usuário e usabilidade de aplicação web", aulas: 28, ch: "96h", falta25: "24h", qtdeDias: "6 dias" },
    { uc: 10, nome: "Programar aplicação web com integração em servidores de banco de dados", aulas: 31, ch: "108h", falta25: "27h", qtdeDias: "7 dias" },
    { uc: 11, nome: "Executar testes, melhoria e versionamento de aplicativo web", aulas: 18, ch: "60h", falta25: "15h", qtdeDias: "4 dias" },
    { uc: 12, nome: "Desenvolver elementos visuais, interface de usuário e usabilidade de aplicação mobile", aulas: 28, ch: "96h", falta25: "24h", qtdeDias: "6 dias" },
    { uc: 13, nome: "Programar aplicativo mobile com integração de banco de dados embarcado e serviços em nuvem", aulas: 31, ch: "108h", falta25: "27h", qtdeDias: "7 dias" },
    { uc: 14, nome: "Executar testes, melhorias e versionamento de aplicativo mobile.", aulas: 18, ch: "60h", falta25: "15h", qtdeDias: "4 dias" },
    { uc: 15, nome: "Projeto Integrador Técnico em Desenvolvimento de Sistemas", aulas: 18, ch: "60h", falta25: "15h", qtdeDias: "4 dias" },
  ];

  return (
    <div className="table-responsive shadow-sm rounded">
      <table className="table table-hover table-bordered mb-0 align-middle">
        <thead className="table-light">
          <tr className="text-center text-uppercase">
            <th style={{ width: '50px' }}>UC</th>
            <th>Unidade Curricular</th>
            <th>Qtde Aula</th>
            <th>CH</th>
            <th className="bg-warning-subtle text-warning-emphasis">25% Falta</th>
            <th className="bg-warning-subtle text-warning-emphasis">Qtde Aula (Dias)</th>
          </tr>
        </thead>
        <tbody>
          {unidadesCurriculares.map((item) => (
            <tr key={item.uc}>
              <td className="text-center fw-bold">{item.uc}</td>
              <td>{item.nome}</td>
              <td className="text-center">{item.aulas}</td>
              <td className="text-center">{item.ch}</td>
              <td className="text-center fw-bold bg-light">{item.falta25}</td>
              <td className="text-center fw-bold text-danger bg-light">{item.qtdeDias}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Faltas;