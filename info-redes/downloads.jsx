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
  ArrowRight, ExternalLink 
} from 'lucide-react';

// Subcomponente para organizar as linhas de tags
const TagItem = ({ code, desc }) => (
  <div className="tag-item">
    <code>{code}</code>
    <span className="tag-desc">{desc}</span>
  </div>
);

const ferramentas = [
  
    {
      nome: "Cisco Packet Tracer",
      desc: "Simulador de redes para configuração e testes de topologias Cisco.",
      link: "https://www.netacad.com/courses/packet-tracer"
    },
    {
      nome: "Hyper-V",
      desc: "Plataforma de virtualização da Microsoft para criação e gerenciamento de máquinas virtuais.",
      link: "https://learn.microsoft.com/virtualization/hyper-v-on-windows/"
    },
    {
      nome: "VirtualBox",
      desc: "Software de virtualização multiplataforma para execução de sistemas operacionais em máquinas virtuais.",
      link: "https://www.virtualbox.org/"
    },
    {
      nome: "VMware",
      desc: "Solução de virtualização para execução e gerenciamento de ambientes virtuais.",
      link: "https://www.vmware.com/"
    },
    {
      nome: "Proxmox",
      desc: "Plataforma de virtualização open source para gerenciamento de máquinas virtuais e containers.",
      link: "https://www.proxmox.com/"
    },
    {
      nome: "Windows Server",
      desc: "Sistema operacional da Microsoft voltado para servidores e gerenciamento de redes corporativas.",
      link: "https://www.microsoft.com/windows-server"
    },
    {
      nome: "Windows 10/11",
      desc: "Sistema operacional da Microsoft para estações de trabalho e ambientes corporativos.",
      link: "https://www.microsoft.com/windows"
    },
    {
      nome: "Ubuntu Server",
      desc: "Sistema operacional Linux voltado para servidores, baseado em Debian.",
      link: "https://ubuntu.com/server"
    },
    {
      nome: "Debian",
      desc: "Distribuição Linux estável e amplamente utilizada em servidores.",
      link: "https://www.debian.org/"
    },
    {
      nome: "Fedora",
      desc: "Distribuição Linux focada em inovação e tecnologias recentes.",
      link: "https://getfedora.org/"
    },
    {
      nome: "CentOS",
      desc: "Distribuição Linux voltada para servidores, baseada no Red Hat Enterprise Linux.",
      link: "https://www.centos.org/"
    },
    {
      nome: "Mikrotik",
      desc: "Sistema RouterOS para gerenciamento e configuração avançada de redes.",
      link: "https://mikrotik.com/"
    },
    {
      nome: "pfSense",
      desc: "Firewall e roteador open source baseado em FreeBSD.",
      link: "https://www.pfsense.org/"
    },
    {
      nome: "TrueNAS",
      desc: "Sistema operacional para armazenamento em rede (NAS).",
      link: "https://www.truenas.com/"
    },
    {
      nome: "PuTTY",
      desc: "Cliente SSH e Telnet para acesso remoto a servidores.",
      link: "https://www.putty.org/"
    },
    {
      nome: "WinSCP",
      desc: "Cliente SFTP e FTP para transferência segura de arquivos.",
      link: "https://winscp.net/"
    },
    {
      nome: "Microsoft 365 / Teams",
      desc: "Plataforma de produtividade e colaboração com ferramentas como Teams, Outlook e Office online.",
      link: "https://www.microsoft.com/microsoft-365"
    }
  
];


const Downloads = () => {

  return (
    <div className="bg-body-tertiary min-vh-100">

      <div className="container pt-4 pb-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            <header className="page-header text-center mb-5">
              {/* <span className="badge-html">Senac Limeira</span> */}
              <img className="logo" src="https://www.sp.senac.br/o/senac-theme/images/logo_senac_default.png" alt="" />
              <h1 className="display-6 ">
                Curso Técnico em <span className="_text-primary fw-bold2">Redes de Computadores</span>
              </h1>
              <span className="badge-html">Senac Limeira</span>
              {/* <p className="text-muted fs-2 fw-bold">Curso Técnico em Desenvolvimento de Sistemas.</p> */}
            </header>

{/* transforme o código abaixo em card bootstrap e elimine as repetições */}

<div className="card shadow-sm mb-4">
  <div className="card-header bg-light d-flex align-items-center">
    <Layers className="me-2 text-primary" />
    <strong>Links de acesso e downloads das ferramentas</strong>
  </div>

  <div className="card-body">
    <ul className="list-unstyled mb-0">
      {ferramentas.map((item, index) => (
        <li key={index} className="mb-2 d-flex align-items-start">
          <ArrowRight className="me-2 text-primary mt-1" size={18} />

          <span>
            <strong>{item.nome}:</strong> {item.desc}{" "}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-1 text-decoration-none"
            >
              Acessar <ExternalLink size={14} />
            </a>
          </span>
        </li>
      ))}
    </ul>
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

export default Downloads;