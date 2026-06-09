import { useEffect, useState } from "react";
import {
  Sparkles,
  Check,
  MapPin,
  ChevronDown,
  Download,
  Layers,
  Gem,
  ShieldCheck,
  MonitorPlay,
  Hand,
  ClipboardList,
  MessagesSquare,
  Instagram,
} from "lucide-react";

/**
 * Áurea Lentes Naturais — Página de Boas-vindas (institucional)
 * Versão para quem já se inscreveu. Sem CTA de conversão e sem datas.
 *
 * Abertura: selo de convite (igual à referência Lovable). Ao clicar no selo,
 * a landing é revelada.
 *
 * IMAGENS (coloque em /public):
 *   /aurea-logo.png   -> logo/selo da marca (dourado sobre fundo preto)
 *   /professora.jpg   -> retrato da Dra. Eveline (hero + seção Professora)
 *   /galeria-1.jpg ... /galeria-8.jpg -> fotos do curso (ver manifesto)
 *
 * Requer utilities em index.css: .font-script .tracking-luxe .text-gradient-gold
 *   .bg-gradient-gold .bg-gradient-gold-soft .bg-gradient-wine .bg-gradient-cream
 *   .frame-gold .shadow-elegant .shadow-gold .shadow-soft .bg-photo .logo-coin
 *   .aurea-intro .aurea-seal .aurea-bob
 */

const hideOnError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.display = "none";
};

const diferenciais = [
  { icon: Sparkles, title: "Naturalidade", desc: "Resultados que respeitam a essência do sorriso original." },
  { icon: Layers, title: "Anatomia & textura", desc: "Detalhes realistas que conferem vida e identidade." },
  { icon: Gem, title: "Acabamento premium", desc: "Polimento de alto padrão com brilho duradouro." },
  { icon: ShieldCheck, title: "Segurança clínica", desc: "Protocolos para aplicar com confiança no consultório." },
];

const publico = [
  "Dentistas que desejam atuar com estética dental",
  "Profissionais que querem melhorar acabamento em resina",
  "Dentistas que buscam mais previsibilidade clínica",
  "Quem deseja oferecer casos premium com aparência natural",
];

const experiencia = [
  { icon: MonitorPlay, title: "Demonstração guiada", desc: "Acompanhe cada etapa em alta resolução técnica." },
  { icon: Hand, title: "Hands-on", desc: "Pratique sob orientação direta, com feedback imediato." },
  { icon: ClipboardList, title: "Protocolos clínicos", desc: "Rotinas reproduzíveis para o seu consultório." },
  { icon: MessagesSquare, title: "Discussão de casos", desc: "Aprenda com situações reais e suas variações." },
];

const conteudo = [
  "Planejamento estético",
  "Seleção de cor",
  "Estratificação em resina",
  "Anatomia dental natural",
  "Texturização",
  "Acabamento e polimento",
  "Controle de brilho",
  "Fotografia e apresentação de casos",
];

const galeria = [
  { src: "/galeria-1.jpg", alt: "Demonstração — Dra. Eveline e aluna" },
  { src: "/galeria-2.jpg", alt: "Orientação prática" },
  { src: "/galeria-3.jpg", alt: "Acompanhamento individual" },
  { src: "/galeria-4.jpg", alt: "Aluna em prática hands-on" },
  { src: "/galeria-5.jpg", alt: "Estratificação em resina" },
  { src: "/galeria-6.jpg", alt: "Aplicação da faceta — detalhe" },
  { src: "/galeria-7.jpg", alt: "Escultura em resina — detalhe" },
  { src: "/galeria-8.jpg", alt: "Turma em aula" },
  { src: "/galeria-9.jpg", alt: "Direcionamento clínico" },
  { src: "/galeria-10.jpg", alt: "Dra. Eveline em demonstração" },
  { src: "/galeria-11.jpg", alt: "Prática guiada" },
  { src: "/galeria-12.jpg", alt: "Buffet Áurea" },
  { src: "/galeria-13.jpg", alt: "Boas-vindas Áurea" },
  { src: "/galeria-14.jpg", alt: "Kit de boas-vindas Áurea" },
  { src: "/galeria-15.jpg", alt: "Coffee break" },
  { src: "/galeria-16.jpg", alt: "Mesa de apoio" },
  { src: "/galeria-17.jpg", alt: "Mesa de doces" },
  { src: "/galeria-18.jpg", alt: "Buffet — detalhes" },
  { src: "/galeria-19.jpg", alt: "Coffee break — detalhes" },
];

const navLinks = [
  { href: "#sobre", label: "Sobre o curso" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#galeria", label: "Galeria" },
  { href: "#professora", label: "Professora" },
];

const WelcomeAurea = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  useEffect(() => {
    if (!opened) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [opened]);

  return (
    <div className="bg-background font-sans text-foreground">
      {/* ===== INTRO / SELO DE CONVITE ===== */}
      <div
        className="aurea-intro fixed inset-0 z-[100] grid place-items-center p-6"
        data-open={opened}
        aria-hidden={opened}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="env-scene">
            <div className="env" onClick={() => setOpened(true)}>
              <div className="env-base" />
              <div className="env-pocket" />
              <div className="env-flap" />
              <img
                src="/aurea-seal.png"
                alt="Lacre Áurea — clique para abrir"
                className="wax-seal"
                onError={hideOnError}
              />
            </div>
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl font-semibold text-[hsl(44_66%_76%)]">Bem-vindo ao Áurea</p>
            <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[hsl(40_28%_72%)]">
              Onde técnica e naturalidade se encontram
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[7%] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[hsl(44_58%_70%)]">
            Clique no lacre para abrir
          </p>
          <ChevronDown className="aurea-bob mx-auto mt-2.5 h-5 w-5 text-[hsl(44_58%_70%)]" />
        </div>
      </div>

      {/* ===== HEADER ===== */}
      <header className="fixed inset-x-0 top-0 z-50 pt-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center justify-between gap-4 rounded-full border border-border/70 bg-[hsl(var(--cream)/0.82)] px-3.5 py-2 shadow-soft backdrop-blur-md">
            <a href="#topo" className="flex items-center gap-3">
              <img src="/aurea-logo.png" alt="Áurea" className="logo-coin h-[46px] w-[46px]" onError={hideOnError} />
              <span className="hidden font-script text-2xl leading-none text-primary sm:block">Áurea</span>
            </a>

            <nav className="hidden items-center gap-9 text-sm font-medium text-foreground/80 lg:flex">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="transition-colors hover:text-[hsl(var(--gold-dark))]">
                  {l.label}
                </a>
              ))}
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--gold)/0.4)] bg-[hsl(var(--gold-light)/0.2)] px-4 py-2 text-[11px] font-semibold uppercase tracking-luxe text-[hsl(var(--gold-dark))]">
              <Sparkles className="h-3.5 w-3.5" />
              Bem-vindo(a)
            </span>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section id="topo" className="relative overflow-hidden bg-gradient-cream pb-24 pt-36 lg:pb-32 lg:pt-44">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[hsl(var(--gold-light)/0.22)] blur-3xl" />
        <div className="absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-[hsl(var(--gold)/0.1)] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--gold)/0.4)] bg-card px-4 py-2 text-xs font-semibold uppercase tracking-luxe text-[hsl(var(--gold-dark))] shadow-soft">
              <Sparkles className="h-3.5 w-3.5" />
              Seja bem-vindo(a)
            </span>

            <p className="mt-8 text-sm font-medium uppercase tracking-luxe text-[hsl(var(--gold-dark)/0.85)]">
              Você faz parte da
            </p>
            <h1 className="mt-1 font-serif text-7xl font-semibold leading-[0.92] tracking-tight sm:text-8xl">
              <span className="block text-gradient-gold">TURMA</span>
              <span className="block text-gradient-gold">ÁUREA</span>
            </h1>
            <p className="mt-5 font-serif text-2xl uppercase tracking-[0.4em] text-foreground/85 sm:text-3xl">
              Lentes Naturais
            </p>

            <span className="mt-6 inline-block rounded-full border border-border bg-card px-5 py-2 text-xs font-semibold uppercase tracking-luxe text-foreground/70 shadow-soft">
              Facetas em Resina
            </span>

            <p className="mt-8 font-script text-4xl leading-none text-[hsl(var(--gold))] sm:text-5xl">
              Que bom ter você aqui
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sua inscrição está confirmada. A partir de agora, você integra uma imersão dedicada a elevar o padrão
              estético dos seus casos — com acabamento, anatomia, brilho e naturalidade.
            </p>

            <div className="mt-9 flex max-w-md items-center gap-4 rounded-2xl bg-gradient-wine px-6 py-5 shadow-elegant">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-gold">
                <Check className="h-6 w-6 text-primary" strokeWidth={2.5} />
              </span>
              <div className="text-[hsl(var(--cream))]">
                <p className="text-[11px] font-semibold uppercase tracking-luxe text-[hsl(var(--gold-light))]">
                  Inscrição confirmada
                </p>
                <p className="font-serif text-xl leading-tight">Você integra a Turma Áurea</p>
              </div>
            </div>

            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-[hsl(var(--gold-soft))]" />
              Imersão presencial · Modelart · Poços de Caldas, MG
            </p>
          </div>

          {/* Portrait */}
          <div className="reveal flex justify-center lg:justify-end">
            <div className="frame-gold relative w-full max-w-md rounded-[2rem] p-[3px] shadow-elegant">
              <div className="bg-photo relative aspect-[4/5] w-full overflow-hidden rounded-[1.85rem]">
                <img
                  src="/professora.jpg"
                  alt="Dra. Eveline Leite"
                  className="h-full w-full object-cover [object-position:50%_16%]"
                  onError={hideOnError}
                />
                <span className="pointer-events-none absolute right-5 top-6 z-10 rotate-180 font-script text-3xl text-[hsl(var(--cream)/0.95)] [writing-mode:vertical-rl] [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
                  Eveline Leite
                </span>
                <span className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[hsl(var(--wine-deep)/0.75)] to-transparent px-6 py-6">
                  <span className="block font-serif text-2xl text-[hsl(var(--cream))]">Dra. Eveline Leite</span>
                  <span className="block text-xs uppercase tracking-luxe text-[hsl(var(--gold-light))]">CROMG 45408</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOBRE / PROMESSA ===== */}
      <section id="sobre" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-luxe text-[hsl(var(--gold-dark))]">
              Autoridade · Promessa
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-foreground sm:text-5xl">
              Aprenda uma técnica refinada para criar{" "}
              <span className="italic text-gradient-gold">lentes naturais</span> em resina
            </h2>
            <div className="mt-6 h-0.5 w-14 bg-[linear-gradient(90deg,hsl(var(--gold-soft)),transparent)]" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Uma imersão presencial para dentistas que desejam elevar o padrão estético dos seus casos, desenvolvendo
              facetas em resina com acabamento, anatomia, brilho e naturalidade.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {diferenciais.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="reveal rounded-2xl border border-border/70 bg-card p-7 shadow-soft transition-shadow hover:shadow-elegant"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold-soft text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-serif text-2xl text-foreground">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARA QUEM É ===== */}
      <section id="para-quem" className="bg-secondary/40 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal text-center">
            <p className="text-sm font-semibold uppercase tracking-luxe text-[hsl(var(--gold-dark))]">Para quem é</p>
            <h2 className="mt-4 font-serif text-4xl font-medium text-foreground sm:text-5xl">
              Pensado para quem busca <span className="italic text-gradient-gold">excelência</span>
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-16 bg-[linear-gradient(90deg,transparent,hsl(var(--gold-soft)),transparent)]" />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {publico.map((text, i) => (
              <div
                key={text}
                className="reveal flex items-start gap-5 rounded-2xl border border-border/60 bg-card p-7 shadow-soft"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-wine font-serif text-lg text-[hsl(var(--gold-light))]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-xl leading-snug text-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIÊNCIA ===== */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-luxe text-[hsl(var(--gold-dark))]">
              Experiência presencial
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-foreground sm:text-5xl">
              Conceito, prática e <span className="italic text-gradient-gold">direcionamento clínico</span>
            </h2>
            <div className="mt-6 h-0.5 w-14 bg-[linear-gradient(90deg,hsl(var(--gold-soft)),transparent)]" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Um curso pensado para unir conceito, prática, demonstração e direcionamento clínico, com foco em aplicação
              real e evolução técnica.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experiencia.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="reveal rounded-2xl border border-border/70 bg-card p-7 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold-soft text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-serif text-2xl text-foreground">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTEÚDO PROGRAMÁTICO ===== */}
      <section id="conteudo" className="bg-secondary/40 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal text-center">
            <p className="text-sm font-semibold uppercase tracking-luxe text-[hsl(var(--gold-dark))]">
              Conteúdo programático
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium text-foreground sm:text-5xl">
              O que você vai <span className="italic text-gradient-gold">aprender</span>
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-16 bg-[linear-gradient(90deg,transparent,hsl(var(--gold-soft)),transparent)]" />
          </div>

          <div className="reveal mt-14 grid grid-cols-1 overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft lg:grid-cols-2">
            {conteudo.map((title, i) => {
              const isLast = i === conteudo.length - 1;
              const isLastRowLg = i >= conteudo.length - 2;
              return (
                <div
                  key={title}
                  className={[
                    "flex items-center gap-5 px-8 py-6 transition-colors hover:bg-[hsl(var(--gold-light)/0.12)]",
                    isLast ? "" : "border-b border-border/50",
                    i % 2 === 0 ? "lg:border-r lg:border-border/50" : "",
                    isLastRowLg ? "lg:border-b-0" : "",
                  ].join(" ")}
                >
                  <span className="min-w-[44px] font-serif text-4xl leading-none text-gradient-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-xl text-foreground">{title}</span>
                </div>
              );
            })}
          </div>

          {/* Ementa — download do PDF */}
          <div className="reveal relative mt-8 flex flex-col items-center gap-6 overflow-hidden rounded-3xl bg-gradient-wine px-8 py-10 text-center shadow-elegant md:flex-row md:justify-between md:text-left">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[hsl(var(--gold)/0.14)] blur-3xl" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-luxe text-[hsl(var(--gold-light))]">
                Ementa completa
              </p>
              <p className="mt-2 font-serif text-2xl text-[hsl(var(--cream))]">
                Leve o conteúdo programático com você
              </p>
              <p className="mt-1.5 text-sm text-[hsl(var(--cream)/0.72)]">
                Todos os módulos e a sequência clínica da imersão, em PDF.
              </p>
            </div>
            <a
              href="/ementa-aurea.pdf"
              download="Ementa-Aurea-Lentes-Naturais.pdf"
              className="relative inline-flex shrink-0 items-center gap-2.5 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary shadow-gold transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-[18px] w-[18px]" />
              Baixar ementa
            </a>
          </div>
        </div>
      </section>

      {/* ===== GALERIA ===== */}
      <section id="galeria" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal text-center">
            <p className="text-sm font-semibold uppercase tracking-luxe text-[hsl(var(--gold-dark))]">Galeria</p>
            <h2 className="mt-4 font-serif text-4xl font-medium text-foreground sm:text-5xl">
              A estética <span className="italic text-gradient-gold">Áurea</span>
            </h2>
            <div className="mx-auto mt-6 h-0.5 w-16 bg-[linear-gradient(90deg,transparent,hsl(var(--gold-soft)),transparent)]" />
          </div>

          <div className="reveal mt-14 columns-2 gap-5 lg:columns-3 [&>figure]:mb-5">
            {galeria.map((g) => (
              <figure
                key={g.src}
                className="bg-photo group relative min-h-[240px] break-inside-avoid overflow-hidden rounded-2xl shadow-soft"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className="block w-full transition-transform duration-500 group-hover:scale-105"
                  onError={hideOnError}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROFESSORA ===== */}
      <section id="professora" className="bg-secondary/40 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div className="reveal flex justify-center lg:justify-start">
            <div className="frame-gold relative w-full max-w-md rounded-[2rem] p-[3px] shadow-elegant">
              <div className="bg-photo relative aspect-[4/5] w-full overflow-hidden rounded-[1.85rem]">
                <img
                  src="/professora-2.jpg"
                  alt="Dra. Eveline Leite"
                  className="h-full w-full object-cover [object-position:50%_16%]"
                  onError={hideOnError}
                />
              </div>
            </div>
          </div>
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-luxe text-[hsl(var(--gold-dark))]">A professora</p>
            <h2 className="mt-4 font-serif text-4xl font-medium text-foreground sm:text-5xl">
              Com quem você vai <span className="italic text-gradient-gold">aprender</span>
            </h2>
            <p className="mt-8 font-serif text-3xl text-foreground">Dra. Eveline Leite</p>
            <p className="text-xs uppercase tracking-luxe text-[hsl(var(--gold-dark))]">CROMG 45408</p>
            <div className="mt-5 h-0.5 w-14 bg-[linear-gradient(90deg,hsl(var(--gold-soft)),transparent)]" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Especialista em transformar sorrisos com naturalidade, estética e excelência, conduzindo alunos em uma
              experiência prática, refinada e aplicável à rotina clínica.
            </p>
            <p className="mt-8 font-script text-4xl leading-none text-[hsl(var(--gold))]">Eveline Leite</p>
            <p className="mt-2 text-xs uppercase tracking-luxe text-foreground/50">Idealizadora · Áurea</p>
          </div>
        </div>
      </section>

      {/* ===== ENCERRAMENTO INSTITUCIONAL ===== */}
      <section className="relative overflow-hidden bg-gradient-wine py-28 lg:py-36">
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(var(--gold)/0.15)] blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <img
            src="/aurea-logo.png"
            alt="Áurea"
            className="logo-coin mx-auto h-20 w-20 shadow-gold"
            onError={hideOnError}
          />
          <p className="mt-8 text-sm font-semibold uppercase tracking-luxe text-[hsl(var(--gold-light))]">
            Áurea Lentes Naturais
          </p>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.05] text-[hsl(var(--cream))] sm:text-6xl">
            Sua próxima evolução na <span className="italic text-[hsl(var(--gold-light))]">estética dental</span> começa
            aqui.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-[hsl(var(--cream)/0.75)]">
            Seja bem-vindo(a) à Áurea. Prepare-se para uma experiência refinada, prática e transformadora — feita para
            elevar o padrão dos seus sorrisos com naturalidade e excelência.
          </p>
          <p className="mt-10 font-script text-5xl text-[hsl(var(--gold-light))]">Eveline Leite</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[hsl(var(--wine-deep))] text-[hsl(var(--cream)/0.8)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <img src="/aurea-logo.png" alt="Áurea" className="logo-coin h-[50px] w-[50px]" onError={hideOnError} />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-[hsl(var(--cream)/0.65)]">
                Curso premium de facetas em resina, com foco em naturalidade e excelência clínica.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-luxe text-[hsl(var(--gold-light))]">Navegação</p>
              <ul className="mt-5 space-y-3 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-[hsl(var(--cream)/0.7)] transition-colors hover:text-[hsl(var(--cream))]">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-luxe text-[hsl(var(--gold-light))]">Contato</p>
              <p className="mt-5 font-serif text-2xl text-[hsl(var(--cream))]">Dra. Eveline Leite</p>
              <p className="text-xs uppercase tracking-luxe text-[hsl(var(--gold-light)/0.8)]">CROMG 45408</p>
              <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--cream)/0.7)]">
                Modelart — R. São João da Boa Vista, 272
                <br />
                Jardim dos Estados · Poços de Caldas, MG
                <br />
                CEP 37701-054
              </p>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="https://instagram.com/draevelineleite"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @draevelineleite"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[hsl(var(--cream)/0.2)] text-[hsl(var(--cream)/0.7)] transition-colors hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/draevelineleite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center rounded-full border border-[hsl(var(--cream)/0.2)] px-4 text-sm text-[hsl(var(--cream)/0.7)] transition-colors hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]"
                >
                  @draevelineleite
                </a>
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[hsl(var(--cream)/0.1)] pt-8 sm:flex-row">
            <p className="text-xs text-[hsl(var(--cream)/0.5)]">
              © 2026 Áurea Lentes Naturais. Todos os direitos reservados.
            </p>
            <span className="font-script text-3xl text-[hsl(var(--gold-light))]">Áurea</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomeAurea;
