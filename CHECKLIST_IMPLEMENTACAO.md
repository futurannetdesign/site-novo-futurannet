# ✅ CHECKLIST DE IMPLEMENTAÇÃO - FUTURANNET

## 📌 Como usar este documento

```
☐ = Não iniciado
🔄 = Em progresso
✅ = Concluído
❌ = Bloqueado/Problema
```

Copie para seu gerenciador de projetos (GitHub Projects, Trello, etc.)

---

# 🚀 FASE 1: LGPD & SEGURANÇA (SEMANA 1) - CRÍTICO

## 1.1 Cookie Banner Granular

- [ ] Criar arquivo: `js/cookie-consent-new.js`
- [ ] Criar arquivo: `css/cookie-consent.css`
- [ ] Copiar código da seção "EXEMPLOS_CODIGO.md"
- [ ] Integrar HTML do banner no `index.html`
- [ ] Testar: Aceitar Tudo
- [ ] Testar: Rejeitar Não-Essenciais
- [ ] Testar: Personalizar (selecionar alguns cookies)
- [ ] Testar: Cookies persistem após reload
- [ ] Testar: Mobile (responsivo)
- [ ] Testar: Acessibilidade (NVDA/VoiceOver)

## 1.2 Validação LGPD no Formulário

- [ ] Adicionar checkbox de privacidade no formulário
  ```html
  <input type="checkbox" name="lgpd-consent" required /> Eu aceito a Política de
  Privacidade
  ```
- [ ] Adicionar validação client-side (deve marcar box)
- [ ] Adicionar validação server-side (FormSubmit)
- [ ] Mensagem de erro clara se não marcar
- [ ] Testar: Enviar form sem marcar → bloqueia
- [ ] Testar: Enviar form com marcado → permite

## 1.3 Configurar Headers de Segurança

- [ ] Criar arquivo: `vercel.json`
- [ ] Adicionar header: `Strict-Transport-Security`
- [ ] Adicionar header: `X-Frame-Options: DENY`
- [ ] Adicionar header: `X-Content-Type-Options: nosniff`
- [ ] Adicionar header: `Content-Security-Policy`
- [ ] Adicionar header: `X-XSS-Protection`
- [ ] Adicionar header: `Referrer-Policy`
- [ ] Testar com: https://securityheaders.com/

## 1.4 Política de Privacidade Melhorada

- [ ] Abrir `privacidade.html`
- [ ] Adicionar seção: Tipos de Cookies (tabela)
- [ ] Adicionar seção: Direitos LGPD (art. 18)
- [ ] Adicionar seção: Retenção de dados
- [ ] Adicionar seção: DPO/Responsável
- [ ] Adicionar seção: Como exercer direitos
- [ ] Adicionar: Data de última atualização
- [ ] Revisar com especialista LGPD (opcional)

## 1.5 Criar Página: Cookie Policy

- [ ] Criar arquivo: `cookie-policy.html`
- [ ] Copiar estrutura de `privacidade.html`
- [ ] Detalhar cada cookie do site:
  - [ ] `cookie-consent` (funcional, 365 dias)
  - [ ] `_ga`, `_gid`, `_gat` (analytics, 2 anos)
  - [ ] Outros cookies terceiros
- [ ] Explicar como deletar cookies
- [ ] Link para Google Ads Settings
- [ ] Link para gerenciar cookies no site

## 1.6 Remover `link-checker.js`

- [ ] Abrir `index.html`
- [ ] Encontrar: `<script src="js/link-checker.js"></script>`
- [ ] **DELETAR essa linha**
- [ ] Salvar arquivo
- [ ] Testar carregamento (deve ser mais rápido)

## 1.7 Migrar FormSubmit → Formspree

- [ ] Criar conta em: https://formspree.io
- [ ] Criar novo formulário para seu email
- [ ] Copiar Form ID (ex: `SUA_FORM_ID`)
- [ ] Atualizar action do form em `index.html`:
  ```html
  <form action="https://formspree.io/f/SUA_FORM_ID" method="POST"></form>
  ```
- [ ] Remover campo: `_next` (redirect automático)
- [ ] Remover campo: `_autoresponse`
- [ ] Remover campo: `_captcha` (Formspree valida automaticamente)
- [ ] Testar: Enviar formulário
- [ ] Testar: Verificar email de confirmação
- [ ] Testar: Honeypot field (vazio, hidden)

---

# ⚡ FASE 2: PERFORMANCE (SEMANA 1-2)

## 2.1 Remover Animações Pesadas (blur)

- [ ] Abrir `css/geral.css`
- [ ] Encontrar: `.hidden { filter: blur(15px); }`
- [ ] **REMOVER**: `filter: blur(15px);`
- [ ] Encontrar: `.show { filter: blur(0); }`
- [ ] **REMOVER**: `filter: blur(0);`
- [ ] Adicionar: `will-change: opacity, transform;` (GPU acceleration)
- [ ] Testar animações das seções (devem ser suaves)
- [ ] Testar com DevTools: Performance degradation < 20%

## 2.2 Otimizar Imagens para WebP

- [ ] Acessar: https://squoosh.app/
- [ ] Converter: `logo-futurannet.svg` → não precisa (já SVG)
- [ ] Converter: `header-illustration.svg` → não precisa (já SVG)
- [ ] Converter todas as imagens `.png`/`.jpg` em `/images/`:
  - [ ] `services-icon-bg-blue.png`
  - [ ] `services-icon-bg-yellow.png`
  - [ ] `services-icon-bg-red.png`
  - [ ] `details-1.svg`
  - [ ] `details-2.svg`
  - [ ] `invitation-background.jpg`
  - [ ] Todas em `imagens-projetos/`
- [ ] Salvar com formato WebP
- [ ] Atualizar HTML para usar `<picture>` tags
- [ ] Manter fallbacks `.jpg`/`.png`
- [ ] Testar em Chrome (deve carregar WebP)
- [ ] Testar em Firefox (deve fallback PNG)
- [ ] Testar image quality (visual check)

## 2.3 Implementar Lazy Loading

- [ ] Adicionar `loading="lazy"` em todas `<img>` em `index.html`
- [ ] Validar: Imagens abaixo da linha de fold têm lazy loading
- [ ] Testar: Rolar página lentamente, verificar carregamento
- [ ] Testar: DevTools Network, verificar imagens carregam sob demanda

## 2.4 Self-Host Google Fonts

- [ ] Acessar: https://google-webfonts-helper.herokuapp.com/fonts/open-sans
- [ ] Selecionar: 400, 600, 700 (normais e itálicos)
- [ ] Copiar código gerado
- [ ] Criar pasta: `/fonts/`
- [ ] Download WOFF2 files para `/fonts/`
- [ ] Copiar @font-face CSS gerado
- [ ] Adicionar em `css/geral.css` (antes de outros imports)
- [ ] Remover `<link>` do Google Fonts CDN do `<head>`
- [ ] Testar: Fonte carrega local
- [ ] Testar DevTools: Não há requesto para googleapis.com

## 2.5 Monitor.js - Remover console logs

- [ ] Abrir `js/monitor.js`
- [ ] Remover ou comentar: `console.log()` e `console.warn()`
- [ ] OU: Adicionar condição:
  ```javascript
  if (window.location.hostname === 'localhost') {
    console.log(...);
  }
  ```
- [ ] Testar: Console.log não aparece em produção

## 2.6 Minificação de CSS/JS (Opcional mas Recomendado)

- [ ] Instalar Node.js (se ainda não tem)
- [ ] Criar `package.json`:
  ```json
  {
    "name": "futurannet",
    "scripts": {
      "build": "npm run minify:css && npm run minify:js",
      "minify:css": "npx cssnano css/geral.css -o css/geral.min.css",
      "minify:js": "npx terser js/script.js -o js/script.min.js"
    }
  }
  ```
- [ ] Rodar: `npm run build`
- [ ] Verificar arquivos `.min.css` e `.min.js`
- [ ] Atualizar links no HTML para usar `.min` files

---

# 🎨 FASE 3: MODAIS (SEMANA 2-3)

## 3.1 Criar Sistema de Modais

- [ ] Criar arquivo: `js/modal-manager.js`
- [ ] Criar arquivo: `css/modals.css`
- [ ] Copiar código de EXEMPLOS_CODIGO.md
- [ ] Adicionar CSS ao `<head>` do HTML
- [ ] Testar: Abrir/Fechar modal
- [ ] Testar: ESC fecha modal
- [ ] Testar: Clique no overlay fecha modal
- [ ] Testar: Focus trap funciona (Tab navega dentro do modal)

## 3.2 Modal para Galeria de Projetos

- [ ] Adicionar HTML do modal `projectModal` em `index.html`
- [ ] Modificar seção de projetos:
  - [ ] Remover `<a href>` dos cards
  - [ ] Adicionar `onclick="ModalManager.openProjectModal(...)"`
  - [ ] Adicionar `role="button" tabindex="0"`
  - [ ] Tornar cards clicáveis e acessíveis
- [ ] Adicionar descrição de cada projeto
- [ ] Testar: Clique em projeto abre modal
- [ ] Testar: Modal mostra imagem ampliada
- [ ] Testar: Setas para navegar projetos (opcional)
- [ ] Testar: Mobile (responsivo)

## 3.3 Modal para Formulário (Opcional)

- [ ] Adicionar HTML do modal `formModal`
- [ ] Mover formulário ou criar versão simplificada
- [ ] Botão "Obter Orçamento" abre modal com form
- [ ] Testar: Form dentro do modal funciona
- [ ] Testar: Envio funciona

---

# 🔍 FASE 4: SEO (SEMANA 2-3)

## 4.1 Expandir Schema.org JSON-LD

- [ ] Abrir `index.html`
- [ ] Encontrar `<script type="application/ld+json">` existente
- [ ] Manter Organization schema
- [ ] Adicionar: BreadcrumbList schema em `privacidade.html`
- [ ] Adicionar: BreadcrumbList schema em `termos.html`
- [ ] Adicionar: LocalBusiness schema (com horários/localização)
- [ ] Testar: https://schema.org/validator/

## 4.2 FAQ Schema (Aumenta CTR)

- [ ] Adicionar HTML: Seção de FAQs no `index.html`
  ```html
  <section class="section-faq">
    <h2>Perguntas Frequentes</h2>
    <div class="faq-item" itemscope itemtype="https://schema.org/Question">
      <h3 itemprop="name">Qual é o custo de um site?</h3>
      <p
        itemprop="acceptedAnswer"
        itemscope
        itemtype="https://schema.org/Answer"
      >
        <span itemprop="text"
          >Os preços começam em R$ 1.500 para landing pages...</span
        >
      </p>
    </div>
  </section>
  ```
- [ ] Gerar JSON-LD FAQSchema
- [ ] Testar: Aparecer em "People Also Ask" Google
- [ ] Adicionar CSS `css/section-faq.css`

## 4.3 Meta Descriptions Melhoradas

- [ ] **index.html**: Aumentar para 150-160 caracteres
- [ ] **privacidade.html**: Adicionar meta description
- [ ] **termos.html**: Adicionar meta description
- [ ] **404.html**: Adicionar meta description
- [ ] **sucesso.html**: Adicionar meta description
- [ ] Testar: DevTools > Elements > Meta description tamanho

## 4.4 Open Graph em Todas as Páginas

- [ ] **privacidade.html**: Adicionar og:title, og:description, og:image
- [ ] **termos.html**: Adicionar og:title, og:description, og:image
- [ ] **404.html**: Adicionar og:title, og:description
- [ ] Testar: Compartilhar no Facebook (verificar preview)

## 4.5 Canonical URLs

- [ ] **privacidade.html**: `<link rel="canonical" href="...">`
- [ ] **termos.html**: `<link rel="canonical" href="...">`
- [ ] Testar: Todas páginas têm canonical

## 4.6 Atualizar robots.txt

- [ ] Revisar `/robots.txt` atual
- [ ] Permitir: `/` (homepage)
- [ ] Disallow: `/admin/`, `/private/` (se existir)
- [ ] Allow: `/` para bots importantes
- [ ] Adicionar: `Sitemap: https://futurannet.com.br/sitemap.xml`
- [ ] Testar: https://www.seobility.net/en/seobot/

## 4.7 Atualizar sitemap.xml

- [ ] Abrir `/sitemap.xml`
- [ ] Adicionar todas as páginas:
  ```xml
  <url>
    <loc>https://futurannet.com.br/</loc>
    <lastmod>2026-03-09</lastmod>
    <priority>1.0</priority>
  </url>
  ```
- [ ] Adicionar imagens em sitemap (opcional)
- [ ] Testar: ValidasiSitemap (https://www.xml-sitemaps.com/validate-xml-sitemap.html)

---

# ♿ FASE 5: ACESSIBILIDADE (SEMANA 3)

## 5.1 Adicionar ARIA Labels

- [ ] Buttons sem texto (ícones):
  ```html
  <button aria-label="Fechar menu"><i class="bi bi-x"></i></button>
  ```
- [ ] Links sociais vazios:
  ```html
  <a href="#" aria-label="Instagram da Futurannet"
    ><i class="bi bi-instagram"></i
  ></a>
  ```
- [ ] Form inputs:
  ```html
  <input aria-label="Seu nome completo" name="name" />
  ```
- [ ] Verificar todos: `aria-label` é descritivo e útil

## 5.2 Adicionar Landmarks

- [ ] `<header role="banner">`
- [ ] `<nav role="navigation" aria-label="Principal">`
- [ ] `<main role="main">`
- [ ] `<footer role="contentinfo">`
- [ ] Testar com: NVDA (Windows) ou VoiceOver (Mac)

## 5.3 Skip-to-Content Link

- [ ] Adicionar antes do `<header>`:
  ```html
  <a href="#main" class="sr-only-focusable">Pular para conteúdo principal</a>
  ```
- [ ] Adicionar CSS:
  ```css
  .sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    overflow: auto;
    clip: auto;
  }
  ```
- [ ] Testar: Pressionar TAB, deve aparecer

## 5.4 Verificar Contraste de Cores

- [ ] Usar: https://wave.webaim.org/
- [ ] Testar cada elemento
- [ ] Cores devem ter ratio: 4.5:1 (WCAG AA mínimo)
- [ ] Verificar:
  - [ ] Botões (texto branco em azul)
  - [ ] Links (texto vermelho sobre branco)
  - [ ] Labels de formulário
  - [ ] Alt text readability

## 5.5 Heading Hierarchy

- [ ] `<h1>`: Aparecer uma vez (Futurannet Design)
- [ ] `<h2>`: Seções principais
- [ ] `<h3>`: Subsections
- [ ] Não pular níveis (ex: h1 → h3 é ruim)
- [ ] Testar: Usar "Headings" no DevTools Accessibility

---

# 📝 FASE 6: VALIDAÇÃO FORMULÁRIO (SEMANA 3)

## 6.1 Validação Client-Side Melhorada

- [ ] Criar arquivo: `js/form-validator.js`
- [ ] Copiar classe `FormValidator` de EXEMPLOS_CODIGO.md
- [ ] Integrar no `index.html`
- [ ] Testar validações:
  - [ ] Email: Rejeitar emails inválidos
  - [ ] Telefone: 11 dígitos (Brasil)
  - [ ] Nome: Não vazio
  - [ ] Mensagem: Min 10 caracteres
  - [ ] LGPD: Checkbox obrigatório

## 6.2 Feedback Visual de Erro

- [ ] Adicionar CSS:
  ```css
  input.error {
    border-color: red;
    background: #fff5f5;
  }
  .error-message {
    color: red;
    font-size: 0.85rem;
  }
  ```
- [ ] Testar: Preencher campo errado → mostra erro em vermelho
- [ ] Testar: Corrigir → mostra sucesso em verde

## 6.3 Honeypot Field

- [ ] Adicionar input escondido no form:
  ```html
  <input type="text" name="url" style="display:none;" tabindex="-1" />
  ```
- [ ] Validação: Se preenchido, bloqueia submit
- [ ] Testar: Bots tentarão preencher, serão bloqueados

## 6.4 Rate Limiting (Formspree faz automaticamente)

- [ ] Verificar: Formspree tem rate limiting nativo
- [ ] Documentação: https://formspree.io/help/rate-limiting/
- [ ] Testar: Tentar enviar 10x rapidamente, deve bloquear

---

# 🌐 FASE 7: INFRAESTRUTURA VERCEL (SEMANA 3-4)

## 7.1 Setup GitHub

- [ ] Criar repositório GitHub: `futurannet`
- [ ] Clonar localmente: `git clone https://github.com/seu-usuario/futurannet`
- [ ] Adicionar todos arquivos: `git add .`
- [ ] Commit inicial: `git commit -m "Initial commit"`
- [ ] Push: `git push origin main`
- [ ] Verificar GitHub: Arquivos devem estar lá

## 7.2 Criar vercel.json

- [ ] Criar arquivo: `vercel.json` (root)
- [ ] Copiar conteúdo de EXEMPLOS_CODIGO.md
- [ ] Adicionar headers de segurança:
  - [ ] CSP
  - [ ] HSTS
  - [ ] X-Frame-Options
  - [ ] X-Content-Type-Options
- [ ] Testar com: https://securityheaders.com/

## 7.3 Criar .vercelignore

- [ ] Criar arquivo: `.vercelignore`
- [ ] Adicionar:
  ```
  node_modules/
  .git/
  .gitignore
  *.md
  .env.local
  ```

## 7.4 Deploy em Vercel

- [ ] Acessar: https://vercel.com
- [ ] Fazer login com GitHub
- [ ] Clicar: "Add New..." > "Project"
- [ ] Selecionar: `futurannet` repository
- [ ] Configurar:
  - [ ] Framework Preset: "Other" (HTML estático)
  - [ ] Build Command: (deixar em branco)
  - [ ] Output Directory: (deixar em branco)
- [ ] Deploy
- [ ] Copiar URL temporária (ex: futurannet-abc123.vercel.app)

## 7.5 Configurar Custom Domain

- [ ] Comprar domínio: `futurannet.com.br` (Godaddy, Registro.br, etc.)
- [ ] Em Vercel Dashboard:
  - [ ] Abrir projeto
  - [ ] Settings > Domains
  - [ ] Adicionar: `futurannet.com.br`
  - [ ] Adicionar: `www.futurannet.com.br` (alias)
- [ ] Configurar DNS do registrador:
  - [ ] CNAME: `futurannet.com.br` → `cname.vercel-dns.com.`
  - [ ] CNAME: `www.futurannet.com.br` → `cname.vercel-dns.com.`
- [ ] Esperar: 15-30 minutos (propagação DNS)
- [ ] Testar: Acessar https://futurannet.com.br
- [ ] Verificar: Certificado SSL (automático)

## 7.6 Environment Variables (se necessário)

- [ ] Se usar Analytics ID em env var:
  ```
  VITE_GA_ID=G-SEU_ID
  ```
- [ ] Adicionar em Vercel Dashboard: Settings > Environment Variables
- [ ] Usar em código: `process.env.VITE_GA_ID`

---

# 🧪 FASE 8: TESTES & LAUNCH (SEMANA 4)

## 8.1 Lighthouse Audit

- [ ] Abrir DevTools (F12)
- [ ] Lighthouse > Analyze page load
- [ ] Verificar scores:
  - [ ] Performance: Almejar 90+
  - [ ] Accessibility: Almejar 95+
  - [ ] Best Practices: Almejar 90+
  - [ ] SEO: Almejar 95+
- [ ] Corrigir erros reportados
- [ ] Rodar novamente até atingir metas

## 8.2 GTmetrix Audit

- [ ] Acessar: https://gtmetrix.com/
- [ ] Testar: `futurannet.com.br`
- [ ] Verificar:
  - [ ] Performance Score: 80+
  - [ ] Structure Score: 80+
  - [ ] LCP: < 2.5s
  - [ ] CLS: < 0.1
- [ ] Implementar recomendações

## 8.3 Mobile Testing

- [ ] Chrome Mobile (DevTools)
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Testar:
  - [ ] Responsividade
  - [ ] Cliques em botões
  - [ ] Formulário funciona
  - [ ] Imagens carregam
  - [ ] Sem horizontal scroll

## 8.4 Browser Compatibility

- [ ] Chrome (última versão)
- [ ] Firefox (última versão)
- [ ] Safari (última versão)
- [ ] Edge (última versão)
- [ ] Testar cada:
  - [ ] Layout correto
  - [ ] Animações suaves
  - [ ] Forms funcionam
  - [ ] Imagens WebP com fallback

## 8.5 Google Search Console

- [ ] Acessar: https://search.google.com/search-console/
- [ ] Adicionar propriedade: `futurannet.com.br`
- [ ] Seguir verificação de propriedade (DNS)
- [ ] Esperar: 24-48 horas
- [ ] Submeter sitemap.xml
- [ ] Testar URL em indexação
- [ ] Monitorar: Coverage, Performance, Mobile Usability

## 8.6 Bing Webmaster Tools

- [ ] Acessar: https://www.bing.com/webmasters/
- [ ] Adicionar site
- [ ] Submeter sitemap.xml
- [ ] Verificar: (mesmo método do Search Console)

## 8.7 Testes de Segurança

- [ ] Mozilla Observatory: https://observatory.mozilla.org/
- [ ] Security Headers: https://securityheaders.com/
- [ ] OWASP ZAP: https://www.zaproxy.org/
- [ ] Scores:
  - [ ] Mozilla: Almejar A+
  - [ ] Security Headers: Almejar A
  - [ ] Sem vulnerabilidades críticas

## 8.8 LGPD Compliance Check

- [ ] ✅ Cookie banner com 3 tipos de cookies
- [ ] ✅ Checkbox obrigatório em formulário
- [ ] ✅ Política de Privacidade completa
- [ ] ✅ Página Cookie Policy
- [ ] ✅ HTTPS em todo o site
- [ ] ✅ Headers de segurança
- [ ] ✅ Formulário não salva dados sem consentimento
- [ ] ✅ DPO/Responsável listado

---

# 🚀 LAUNCH CHECKLIST

## Pré-Launch (24h antes)

- [ ] Backup completo do site
- [ ] Testes finais em todos navegadores
- [ ] Performance scores: 90+/100
- [ ] LGPD compliance: ✅ Completo
- [ ] Mobile testing: ✅ Tudo OK
- [ ] Forms funcionando: ✅ Confirmado
- [ ] Analytics configurado: ✅ Com LGPD
- [ ] Google Search Console: ✅ Verificado
- [ ] Backup automático Vercel: ✅ Ativo

## Launch Day

- [ ] Deploy final em produção
- [ ] Verificar: futurannet.com.br carrega
- [ ] Testar: Form envia email
- [ ] Testar: Cookies funcionam
- [ ] Monitorar: Erros em console
- [ ] Verificar: Status page (se tiver)
- [ ] Notificar: Equipe / Stakeholders

## Pós-Launch (1 semana)

- [ ] Monitorar: Google Search Console
- [ ] Monitorar: Lighthouse scores
- [ ] Monitorar: Formulários (spam?)
- [ ] Monitorar: Erros de usuário
- [ ] Coletar: Feedback de usuários
- [ ] Implementar: Quick fixes se necessário
- [ ] Revisar: Analytics (com LGPD compliance)

---

# 📊 METRICS TO TRACK

```
PERFORMANCE:
□ LCP (Largest Contentful Paint): Target < 2.5s
□ FID (First Input Delay): Target < 100ms
□ CLS (Cumulative Layout Shift): Target < 0.1

SEO:
□ Organic traffic: Baseline → +300% em 3 meses
□ Keyword rankings: Top 50 → Top 10 (3-5 keywords)
□ Indexed pages: Baseline → +50%
□ Backlinks: Monitorar crescimento

CONVERSÃO:
□ Form submissions: Baseline → +150%
□ Click-through rate: Carousel > Modal: +40%
□ Bounce rate: Baseline → -30%
□ Time on page: Baseline → +50%

SEGURANÇA:
□ HTTPS: 100% das páginas
□ Security headers: A+ rating
□ LGPD compliance: 100%
□ Spam reduction: -90%
```

---

# 💾 COMMIT MESSAGES (Git)

Quando fizer commits:

```
git commit -m "feat: implement LGPD cookie banner"
git commit -m "perf: remove blur animations for better performance"
git commit -m "feat: add modal system for project gallery"
git commit -m "feat: expand SEO with FAQ schema"
git commit -m "a11y: add ARIA labels and landmarks"
git commit -m "fix: improve form validation"
git commit -m "chore: deploy to production"
```

---

# 📞 SUPPORT CONTACT

Dúvidas durante implementação?

```
Frontend Issues:
- Envie screenshot + DevTools console error

Form Issues:
- Testar em https://formspree.io/dashboard

Performance Issues:
- Usar https://gtmetrix.com/
- Check: DevTools Network tab

LGPD Issues:
- Consultar especialista LGPD (Brasil)

Vercel Issues:
- Documentação: https://vercel.com/docs
```

---

**Status:** Pronto para começar ✅  
**Estimado:** ~55 horas de trabalho  
**Prioridade:** LGPD + Performance (Fase 1) = CRÍTICO

Boa sorte! 🚀
