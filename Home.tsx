import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, X, ChevronRight, Zap, Home as HomeIcon, Building2, Cpu, Wrench, Users, Award } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Minimalismo Robusto + Tecnologia
 * - Simplicidade como base (espaço em branco, tipografia limpa)
 * - Robustez visual (cores sólidas, elementos bem definidos)
 * - Tecnologia integrada (animações sutis, transições fluidas)
 */

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">Fiscina</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#projetos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projetos
            </a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="container py-4 flex flex-col gap-4">
              <a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Serviços
              </a>
              <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </a>
              <a href="#projetos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projetos
              </a>
              <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663386214140/Hc6dEd86sFCtkSVuy4jg5z/hero-galpao-bTnn9KsfwBh8i9WuYNdugu.webp')`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container text-center text-white max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Engenharia Sólida + Tecnologia Inteligente
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
            Montagem de galpões, telhados e estruturas metálicas integrados com automação industrial e residencial de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Solicitar Orçamento
              <ChevronRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Conhecer Projetos
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em engenharia civil e automação para empresas que buscam qualidade, confiança e inovação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Engenharia Civil */}
            <Card className="p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Engenharia Civil</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Montagem de galpões e estruturas metálicas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Instalação de telhados e coberturas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Projetos de engenharia personalizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Consultoria técnica e execução</span>
                </li>
              </ul>
            </Card>

            {/* Automação */}
            <Card className="p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="text-accent" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Automação Inteligente</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Automação industrial e IIoT</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Casas e prédios inteligentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Sistemas de controle e SCADA</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Integração de dispositivos e sensores</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Serviços Detalhados */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap size={24} />,
                title: "Eficiência Energética",
                desc: "Otimização de consumo e integração com energia renovável",
              },
              {
                icon: <Wrench size={24} />,
                title: "Manutenção Especializada",
                desc: "Suporte técnico contínuo e manutenção preventiva",
              },
              {
                icon: <HomeIcon size={24} />,
                title: "Soluções Personalizadas",
                desc: "Projetos adaptados às necessidades específicas do cliente",
              },
            ].map((service, idx) => (
              <div key={idx} className="p-6 bg-secondary rounded-lg">
                <div className="text-primary mb-4">{service.icon}</div>
                <h4 className="font-bold mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-white border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre a Fiscina</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                A Fiscina Serviços Técnicos é uma empresa com mais de 10 anos de experiência em engenharia civil e automação industrial. Somos especializados em oferecer soluções integradas que combinam a solidez da engenharia tradicional com a inovação da tecnologia moderna.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nossa equipe é composta por profissionais altamente qualificados, com expertise em CLPs, SCADA, automação residencial, IIoT e integração de sistemas. Trabalhamos com clientes em diversos setores, desde indústrias de bebidas até setores de petróleo e gás.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: "10+", label: "Anos de Experiência" },
                  { number: "50+", label: "Projetos Concluídos" },
                  { number: "3", label: "Regiões Atendidas" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="h-96 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663386214140/Hc6dEd86sFCtkSVuy4jg5z/automacao-industrial-DVBQ4YDvttKYYFrLY5YsM4.webp')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Expertise Técnica</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-primary">●</span> Engenharia Civil
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>✓ Montagem de estruturas metálicas</li>
                <li>✓ Instalação de telhados e coberturas</li>
                <li>✓ Projetos estruturais personalizados</li>
                <li>✓ Consultoria em engenharia</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-accent">●</span> Automação & IIoT
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>✓ CLPs, SCADA e sistemas de controle</li>
                <li>✓ Automação residencial (Home Assistant, Zigbee)</li>
                <li>✓ Internet Industrial das Coisas (IIoT)</li>
                <li>✓ Integração de sistemas e dados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 bg-white border-t border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projetos em Destaque</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Galpão Inteligente com Automação",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663386214140/Hc6dEd86sFCtkSVuy4jg5z/hero-galpao-bTnn9KsfwBh8i9WuYNdugu.webp",
                desc: "Montagem de estrutura metálica integrada com sistema de automação para controle de iluminação, ventilação e segurança.",
              },
              {
                title: "Casa Inteligente Residencial",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663386214140/Hc6dEd86sFCtkSVuy4jg5z/automacao-residencial-evikV5NRf7YrgzQKZACepx.webp",
                desc: "Implementação de sistema completo de automação residencial com controle de iluminação, climatização e segurança.",
              },
              {
                title: "Automação Industrial - Controle de Processo",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663386214140/Hc6dEd86sFCtkSVuy4jg5z/automacao-industrial-DVBQ4YDvttKYYFrLY5YsM4.webp",
                desc: "Sistema SCADA e CLPs para monitoramento em tempo real e otimização de processos industriais.",
              },
              {
                title: "Estrutura Metálica de Precisão",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663386214140/Hc6dEd86sFCtkSVuy4jg5z/estrutura-metalica-FXS6cRsBTo3FHUcwcekvRu.webp",
                desc: "Montagem de estrutura com soldagem de precisão e acabamento profissional para aplicação industrial.",
              },
            ].map((project, idx) => (
              <Card key={idx} className="overflow-hidden border border-border hover:shadow-lg transition-shadow">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Transformar seu Projeto?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para discutir como podemos ajudar sua empresa com soluções em engenharia civil e automação.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            Solicitar Orçamento
            <ChevronRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Entre em Contato</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Users size={24} />,
                title: "Telefone",
                value: "+55 (75) 99999-9999",
              },
              {
                icon: <Award size={24} />,
                title: "Email",
                value: "contato@fiscina.com.br",
              },
              {
                icon: <Building2 size={24} />,
                title: "Localização",
                value: "Alagoinhas, BA",
              },
            ].map((contact, idx) => (
              <Card key={idx} className="p-8 text-center border border-border">
                <div className="text-primary mb-4 flex justify-center">{contact.icon}</div>
                <h3 className="font-bold mb-2">{contact.title}</h3>
                <p className="text-muted-foreground">{contact.value}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 border border-border bg-white">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Seu Email"
                  className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="text"
                placeholder="Assunto"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Sua Mensagem"
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Fiscina Serviços Técnicos</h4>
              <p className="text-sm text-gray-400">Engenharia sólida + Tecnologia inteligente</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Engenharia Civil</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Automação Industrial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Automação Residencial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#projetos" className="hover:text-white transition-colors">Projetos</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Fiscina Serviços Técnicos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
