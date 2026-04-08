import React from 'react';
import { 
  Layers, 
  Network, // Substituindo o Sitemap que causou o erro
  Image as ImageIcon, 
  CheckSquare, 
  Code, 
  List, 
  Table as TableIcon, 
  Terminal,
  ArrowRight
} from 'lucide-react';

// Subcomponente para organizar as linhas de tags
const TagItem = ({ code, desc }) => (
  <div className="tag-item">
    <code>{code}</code>
    <span className="tag-desc">{desc}</span>
  </div>
);

// Subcomponente para as seções do acordeão
const AccordionSection = ({ id, title, icon: Icon, children, isFirst = false }) => (
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button 
        className={`accordion-button ${!isFirst ? 'collapsed' : ''}`} 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target={`#${id}`}
      >
        {Icon && <Icon size={20} className="me-2 text-primary" />}
        {title}
      </button>
    </h2>
    <div 
      id={id} 
      className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`} 
      data-bs-parent="#accordionHtml5"
    >
      <div className="accordion-body">
        {children}
      </div>
    </div>
  </div>
);

const Ucs = () => {
  const navLinks = ["HTML5", "CSS3", "Bootstrap", "Javascript", "React", "SQL", "Node.js", "Terminal"];

  return (
    <div className="bg-body-tertiary min-vh-100">
      {/* Navegação */}
      {/* <div className="nav-container text-center py-4 bg-white border-bottom">
        <div className="container d-flex flex-wrap justify-content-center gap-2">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className={`btn-tech ${link === 'HTML5' ? 'active' : ''}`}
            >
              {link}
            </a>
          ))}
        </div>
      </div> */}

      <div className="container pt-4 pb-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            <header className="page-header text-center mb-5">
              
              <img className="logo" src="https://www.sp.senac.br/o/senac-theme/images/logo_senac_default.png" alt="" />
              <h1 className="display-6 ">
                Curso Técnico em <span className="_text-primary fw-bold2">Redes de Computadores</span>
              </h1>
              <span className="badge-html">Senac Limeira</span>
              {/* <p className="text-muted fs-2 fw-bold">Curso Técnico em Redes de Computadores.</p> */}
            </header>

            <div className="accordion custom-accordion" id="accordionHtml5">
              
             {/* <AccordionSection id="uc1" title="UC1 - Planejar e executar a instalação de redes locais de 
computadores" icon={Layers} isFirst> */}
<AccordionSection id="uc1" title="UC1 - Planejar e executar a instalação de redes locais de computadores" icon={Layers} className="border border-start border-primary border-4">
  <strong>Conhecimentos:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Eletricidade aplicada a redes <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Arquiteturas de redes <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Modelo OSI e TCP/IP <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Teoria Geral de Redes <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Máscaras de endereços IP <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Comportamento dos dados em cabeamento <br/><br/>
  <strong>Habilidades/Atitude:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Planejar redes conforme o ambiente <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Interpretar requisitos técnicos <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Testar e corrigir funcionamento <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Postura profissional, sigilo, proatividade e trabalho em equipe <br/>
</AccordionSection>

<AccordionSection id="uc2" title="UC2 - Planejar e executar a manutenção de redes locais de computadores" icon={Layers} className="border border-start border-primary border-4">
  <strong>Conhecimentos:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Diagnóstico de falhas <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Ferramentas de testes de rede <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Manutenção preventiva e corretiva <br/><br/>
  <strong>Habilidades/Atitude:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Identificar falhas físicas e lógicas <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Testar conectividade <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Elaborar documentação técnica <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Responsabilidade, organização e zelo pelos equipamentos <br/>
</AccordionSection>

<AccordionSection id="uc3" title="UC3 - Planejar e executar a instalação, configuração e monitoramento de servidores" icon={Layers} className="border border-start border-primary border-4">
  <strong>Conhecimentos:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Windows Server e Linux Server <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Serviços de rede <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Monitoramento de servidores <br/><br/>
  <strong>Habilidades/Atitude:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Instalar e configurar servidores <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Monitorar desempenho <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Aplicar atualizações <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Sigilo, organização e postura profissional <br/>
</AccordionSection>

<AccordionSection id="uc4" title="UC4 - Projeto Integrador Assistente de Operação de Redes" icon={Layers} className="border border-start border-primary border-4">
  <strong>Conhecimentos:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Integração das UCs 1 a 3 <br/><br/>
  <strong>Habilidades/Atitude:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Desenvolver projeto prático integrado <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Aplicar soluções reais <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Trabalho em equipe, autonomia e responsabilidade <br/>
</AccordionSection>

<AccordionSection id="uc5" title="UC5 - Implementar protocolos de rede em roteadores e switches" icon={Layers} className="border border-start border-primary border-4">
  <strong>Conhecimentos:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Plataforma e protocolos Cisco <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> LAN e WAN <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Modelo OSI e TCP/IP <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> IPv4 e IPv6 <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Segurança em roteadores e switches <br/><br/>
  <strong>Habilidades/Atitude:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Configurar protocolos <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Calcular sub-redes <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Testar conectividade <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Proatividade, sigilo e trabalho em equipe <br/>
</AccordionSection>

<AccordionSection id="uc6" title="UC6 - Implementar roteamento e switching" icon={Layers} className="border border-start border-primary border-4">
  <strong>Conhecimentos:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Segmentação de redes <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> VLANs <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Roteamento estático e dinâmico <br/><br/>
  <strong>Habilidades/Atitude:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Configurar VLANs <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Implementar roteamento <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Testar segmentação de rede <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Organização e responsabilidade técnica <br/>
</AccordionSection>

<AccordionSection id="uc7" title="UC7 - Planejar e executar a manutenção de servidores" icon={Layers} className="border border-start border-primary border-4">
  <strong>Conhecimentos:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Backup <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Atualizações <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Monitoramento <br/><br/>
  <strong>Habilidades/Atitude:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Diagnosticar falhas em servidores <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Restaurar sistemas <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Responsabilidade e organização <br/>
</AccordionSection>

<AccordionSection id="uc8" title="UC8 - Implementar cabeamento estruturado e telefonia IP" icon={Layers} className="border border-start border-primary border-4">
  <strong>Conhecimentos:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Normas de cabeamento <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Padrões T568A/T568B <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Telefonia IP <br/><br/>
  <strong>Habilidades/Atitude:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Montar cabos <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Organizar racks <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Testar cabeamento <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Precisão técnica e zelo pelos equipamentos <br/>
</AccordionSection>

<AccordionSection id="uc9" title="UC9 - Implementar política de administração de redes e serviços de disponibilidade" icon={Layers} className="border border-start border-primary border-4">
  <strong>Conhecimentos:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Política de administração de redes <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Modelos de disponibilidade <br/><br/>
  <strong>Habilidades/Atitude:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Elaborar política de rede <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Implementar e divulgar políticas <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Sigilo, responsabilidade e uso consciente de recursos <br/>
</AccordionSection>

<AccordionSection id="uc10" title="UC10 - Projeto Integrador Assistente de Implantação e Administração de Infraestrutura" icon={Layers} className="border border-start border-primary border-4">
  <strong>Conhecimentos:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Integração das UCs técnicas de infraestrutura <br/><br/>
  <strong>Habilidades/Atitude:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Desenvolver projeto prático completo <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Aplicar soluções reais de infraestrutura <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Autonomia, responsabilidade e trabalho em equipe <br/>
</AccordionSection>

<AccordionSection id="uc11" title="UC11 - Planejar e implementar a segurança física e lógica em redes" icon={Layers} className="border border-start border-primary border-4">
  <strong>Conhecimentos:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Segurança física <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Segurança lógica <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Controle de acesso <br/><br/>
  <strong>Habilidades/Atitude:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Implementar controles <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Elaborar planos de segurança <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Ética e sigilo profissional <br/>
</AccordionSection>

<AccordionSection id="uc12" title="UC12 - Planejar e implementar a segurança em redes sem fio" icon={Layers} className="border border-start border-primary border-4">
  <strong>Conhecimentos:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Dispositivos wireless <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Normas de frequência <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Segurança WLAN <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Antenas e SNR <br/><br/>
  <strong>Habilidades/Atitude:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Configurar Access Point <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Diagnosticar sinal <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Elaborar documentação <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Postura profissional e cordialidade <br/>
</AccordionSection>

<AccordionSection id="uc13" title="UC13 - Planejar e implementar a criptografia de dados e certificados digitais" icon={Layers} className="border border-start border-primary border-4">
  <strong>Conhecimentos:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Criptografia simétrica e assimétrica <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Assinaturas digitais <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Autoridade certificadora <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Emissão e revogação de certificados <br/><br/>
  <strong>Habilidades/Atitude:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Implementar criptografia <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Instalar certificados <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Interpretar textos técnicos <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Segurança da informação e sigilo <br/>
</AccordionSection>

<AccordionSection id="uc14" title="UC14 - Planejar e implementar a segurança em servidores Windows e Linux" icon={Layers} className="border border-start border-primary border-4">
  <strong>Conhecimentos:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Segurança em Windows Server <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Segurança em Linux <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Políticas de acesso <br/><br/>
  <strong>Habilidades/Atitude:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Configurar segurança em servidores <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Aplicar boas práticas <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Ética e zelo pela integridade dos dados <br/>
</AccordionSection>

<AccordionSection id="uc15" title="UC15 - Implantar etapas de gerenciamento de projetos e governança de processos em TI" icon={Layers} className="border border-start border-primary border-4">
  <strong>Conhecimentos:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> ITIL <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> COBIT <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Green IT <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Estratégias de TI <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Ferramentas de gerenciamento de projetos <br/><br/>
  <strong>Habilidades/Atitude:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Implementar governança <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Utilizar métricas <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Elaborar documentação técnica <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Proatividade, colaboração e sigilo <br/>
</AccordionSection>

<AccordionSection id="uc16" title="UC16 - Projeto Integrador Assistente de Segurança em Redes de Computadores" icon={Layers} className="border border-start border-primary border-4">
  <strong>Conhecimentos:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Integração das UCs 11 a 15 <br/><br/>
  <strong>Habilidades/Atitude:</strong> <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Desenvolver projeto completo de segurança <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Aplicar soluções reais <br/>
  <ArrowRight className="ms-2 text-primary" size={18} /> Responsabilidade, autonomia e trabalho em equipe <br/>
</AccordionSection>

             
            </div>
{/* LEGENDA */}
<div className="card mt-5 shadow-sm">
  <div className="card-body">

    <h5 className="mb-3">Legenda das Qualificações</h5>

    <div className="d-flex flex-column gap-2">

      <span
        className="badge legenda-primary text-white"
        style={{ 
          lineHeight: "1.5",
          padding: "0.8rem 1.2rem",
          fontSize: "1.05rem"
        }}
      >
        Qualificação Profissional Técnica de Assistente de Operação de Redes de Computadores
      </span>

      <span
        className="badge legenda-success text-white"
        style={{ 
          lineHeight: "1.5",
          padding: "0.8rem 1.2rem",
          fontSize: "1.05rem"
        }}
      >
        Qualificação Profissional Técnica de Assistente de Implantação e Administração de Infraestrutura de Redes de Computadores
      </span>

      <span
        className="badge legenda-warning text-white"
        style={{ 
          lineHeight: "1.5",
          padding: "0.8rem 1.2rem",
          fontSize: "1.05rem"
        }}
      >
        Qualificação Profissional Técnica de Assistente de Segurança em Redes de Computadores
      </span>

    </div>

  </div>
</div>
            <footer className="text-center mt-5">
              <p className="small text-muted">Desenvolvido por Luis Ribeiro com React, JS e Bootstrap</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ucs;