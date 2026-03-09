# ✅ VERIFICAÇÃO PRÉ-DEPLOYMENT

> Use este checklist antes de fazer o push para GitHub e deploy no Vercel

---

## 🔍 FASE 1: VERIFICAÇÃO LOCAL

### CSS

```
[ ] 1. Validar css/geral.css
      - [ ] Abrir DevTools > Elements
      - [ ] Procurar por: filter: blur
      - [ ] RESULTADO ESPERADO: Nenhum resultado
      - [ ] Se encontrou: ❌ ERRO - precisa remover

[ ] 2. Verificar css/cookie-consent.css
      - [ ] Arquivo existe em css/
      - [ ] Contém: .cookie-consent, .cookie-options, etc
      - [ ] Pode abrir arquivo no VS Code

[ ] 3. Verificar css/modals.css
      - [ ] Arquivo existe em css/
      - [ ] Contém: modal, overlay, animations
      - [ ] Pode abrir arquivo no VS Code
```

### JavaScript

```
[ ] 4. Validar js/cookie-consent-new.js
      - [ ] Arquivo existe em js/
      - [ ] Contém funções: setCookie, getCookie, initCookieBanner
      - [ ] ~85 linhas
      - [ ] Pode abrir arquivo no VS Code

[ ] 5. Validar js/form-validator.js
      - [ ] Arquivo existe em js/
      - [ ] Contém classe: FormValidator
      - [ ] Métodos: validateField, isValidEmail, isValidPhone
      - [ ] ~115 linhas
      - [ ] Pode abrir arquivo no VS Code

[ ] 6. Validar js/modal-manager.js
      - [ ] Arquivo existe em js/
      - [ ] Contém funções: open, close, trapFocus
      - [ ] ~100 linhas
      - [ ] Pode abrir arquivo no VS Code
```

### HTML Verificações

```
[ ] 7. Verificar index.html - Links CSS
      - [ ] Abrir index.html
      - [ ] Procurar por: <link rel="stylesheet" href="css/cookie-consent.css">
      - [ ] RESULTADO: Deve estar na <head>
      - [ ] Procurar por: <link rel="stylesheet" href="css/modals.css">
      - [ ] RESULTADO: Deve estar na <head>

[ ] 8. Verificar index.html - Scripts
      - [ ] Abrir index.html
      - [ ] Localizar: <script src="js/cookie-consent-new.js"></script>
      - [ ] Localizar: <script src="js/form-validator.js"></script>
      - [ ] Localizar: <script src="js/modal-manager.js"></script>
      - [ ] RESULTADO: Deverão estar antes de </body>

[ ] 9. Verificar index.html - Cookie Banner
      - [ ] Procurar por: id="cookie-consent"
      - [ ] RESULTADO: Deve estar nas <body>
      - [ ] Deve conter: cookie-options, cookie-buttons

[ ] 10. Verificar index.html - Formulário
       - [ ] Procurar por: <form action="https://formspree.io/f/
       - [ ] Verificar: name="url" (honeypot)
       - [ ] RESULTADO ESPERADO: Deve estar lá, hidden
       - [ ] Verificar: name="lgpd-consent"
       - [ ] RESULTADO ESPERADO: Checkbox obrigatório presença
```

### Configuração Vercel

```
[ ] 11. Verificar vercel.json
        - [ ] Arquivo existe na raiz
        - [ ] Contém: buildCommand: null
        - [ ] Contém: "outputDirectory": "."
        - [ ] Contém: headers (security)
        - [ ] Pode abrir arquivo no VS Code

[ ] 12. Verificar .vercelignore
        - [ ] Arquivo existe na raiz
        - [ ] Contém: node_modules/, .git/, .gitignore
```

---

## 🧪 FASE 2: TESTES NO BROWSER

### Teste 1: Cookie Banner

```
[ ] 13. Abrir index.html em navegador local
        - [ ] DevTools (F12)
        - [ ] Application > Cookies > Delete All (limpar cookies)
        - [ ] Reload página (F5)
        - [ ] RESULTADO ESPERADO:
              ✅ Banner aparece em 1 segundo no rodapé
              ✅ Contém 3 opções (Essencial, Analytics, Marketing)
              ✅ Contém botões: "Aceitar Tudo", "Rejeitar", "Salvar Preferências"

[ ] 14. Testar aceitação de cookies
        - [ ] Clicar em: "Aceitar Tudo"
        - [ ] RESULTADO ESPERADO:
              ✅ Banner desaparece com animação
              ✅ LocalStorage contém: cookie-consent

[ ] 15. Testar rejeição de cookies
        - [ ] Delete All de novo
        - [ ] Reload
        - [ ] Clicar em: "Rejeitar"
        - [ ] RESULTADO ESPERADO:
              ✅ Banner desaparece
              ✅ Apenas essencial salvo
```

### Teste 2: Formulário

```
[ ] 16. Tentar enviar formulário sem marcar LGPD
        - [ ] Preencher todos campos (nome, email, mensagem)
        - [ ] NÃO marcar checkbox "Aceito Política de Privacidade"
        - [ ] Clicar Enviar
        - [ ] RESULTADO ESPERADO:
              ✅ Alerta aparece: "Você deve aceitar a Política de Privacidade"
              ✅ Formulário NÃO envia

[ ] 17. Enviar formulário COM LGPD marcado
        - [ ] Marcar checkbox "Aceito Política de Privacidade"
        - [ ] Clicar Enviar
        - [ ] RESULTADO ESPERADO:
              ✅ Formulário envia (pode chegar em Formspree)
```

### Teste 3: Honeypot

```
[ ] 18. Verificar honeypot no código
        - [ ] DevTools F12 > Elements
        - [ ] CTRL+F, procurar: name="url"
        - [ ] RESULTADO ESPERADO:
              ✅ Campo existe
              ✅ Está hidden (style="display: none")
              ✅ Não aparece visualmente na página
```

### Teste 4: Animações

```
[ ] 19. Verificar performance das animações
        - [ ] DevTools F12 > Performance
        - [ ] Clicar Record
        - [ ] Scroll pela página (para ver animações)
        - [ ] Parar Recording
        - [ ] RESULTADO ESPERADO:
              ✅ FPS >= 50 (constant)
              ✅ Sem yellow/red marks (indica jank)
              ✅ Animações suaves
```

### Teste 5: Modais (se implementados)

```
[ ] 20. Verificar modal system (console test)
        - [ ] DevTools F12 > Console
        - [ ] Colar: ModalManager.open('cookie-banner')
        - [ ] RESULTADO ESPERADO:
              ✅ Sem erros de JavaScript
              ✅ Modal Manager está disponível globalmente
```

---

## 📱 FASE 3: RESPONSIVIDADE

```
[ ] 21. Testar em Mobile (DevTools)
        - [ ] F12 > Device Toolbar (ou CTRL+SHIFT+M)
        - [ ] Mudar para: iPhone 12 Pro
        - [ ] VERIFICAR:
              ✅ Cookie banner responsivo
              ✅ Formulário usa full width
              ✅ Botões clicáveis (>=48px)
              ✅ Texto legível (>=12px)

[ ] 22. Testar em Tablet
        - [ ] Mudar para: iPad Pro
        - [ ] VERIFICAR:
              ✅ Layout correto
              ✅ Sem overflow horizontal
              ✅ Espaçamento apropriado
```

---

## 🔐 FASE 4: SEGURANÇA

```
[ ] 23. Verificar CSP (Content-Security-Policy)
        - [ ] DevTools F12 > Network
        - [ ] Reload
        - [ ] Clicar em: index.html
        - [ ] Headers tab
        - [ ] Procurar: Content-Security-Policy
        - [ ] RESULTADO ESPERADO:
              ✅ Header presente (no vercel.json)

[ ] 24. Verificar HSTS
        - [ ] DevTools F12 > Network
        - [ ] Procurar: Strict-Transport-Security
        - [ ] RESULTADO ESPERADO:
              ✅ max-age=31536000 (31 dias)
```

---

## 📄 FASE 5: DOCUMENTAÇÃO

```
[ ] 25. Verificar DEPLOYMENT_VERCEL.md
        - [ ] Arquivo criado na raiz
        - [ ] Contém instruções completas
        - [ ] Contém checklist
        - [ ] Contém próximos passos

[ ] 26. Verificar README.md
        - [ ] Arquivo existe e é atual
        - [ ] Instruções básicas
```

---

## 🎯 FASE 6: CONFIGURAÇÕES CRÍTICAS

```
[ ] 27. Formspree Endpoint
        - [ ] IMPORTANTE: Este endpoint NÃO está ativo
        - [ ] Ação necessária:
              1. Ir para https://formspree.io
              2. Criar conta com: ussanton@hotmail.com
              3. Criar novo formulário (projeto "Futurannet")
              4. Copiar Form ID (ex: mpzedrob)
              5. Atualizar em index.html:
                 <form action="https://formspree.io/f/SEU_FORM_ID" method="POST">
        - [ ] Item será verificado após setup Formspree

[ ] 28. Google Analytics (Opcional mas recomendado)
        - [ ] index.html contém placeholder: G-SEU_ID_AQUI
        - [ ] Ação necessária:
              1. Ir para: https://analytics.google.com
              2. Criar conta GA4
              3. Copiar Measurement ID (G-XXXXXXXXXX)
              4. Atualizar em index.html:
                 gtag("config", "G-SEU_ID_AQUI")
```

---

## ✅ FASE 7: PRONTO PARA DEPLOY?

```
TODOS OS ITENS ACIMA MARCADOS COM [✓]?

SE SIM → Você está pronto para deploy! 🚀

SE NÃO → Revise os itens marcados com [ ]

Passos:
1. [ ] Git init (se não feito)
2. [ ] Git add .
3. [ ] Git commit -m "Initial commit"
4. [ ] Git push para GitHub
5. [ ] Conectar GitHub ao Vercel
6. [ ] Deploy automático! 🎉
```

---

## 🐛 TROUBLESHOOTING

### Cookie banner não aparece

```
CHECKLIST:
[ ] css/cookie-consent.css está linkado no <head>?
[ ] js/cookie-consent-new.js está linkado antes de </body>?
[ ] HTML têm id="cookie-consent"?
[ ] InitCookieBanner() está sendo chamado?

SOLUÇÃO:
Abra DevTools > Console, procure por erros vermelhos
Se houver erro de CSS, verificar path relativo
```

### Formulário não valida LGPD

```
CHECKLIST:
[ ] input[name="lgpd-consent"] existe?
[ ] FormValidator está inicializado?
[ ] Está com required attribute?

SOLUÇÃO:
No console: document.querySelector('input[name="lgpd-consent"]')
Se retorna null: HTML não foi atualizado corretamente
```

### Vercel deploy falhando

```
CHECKLIST:
[ ] vercel.json válido? (JSON syntax check)
[ ] .vercelignore está correto?
[ ] Não há node_modules na raiz?

SOLUÇÃO:
1. Verificar build logs no dashboard Vercel
2. Fazer deploy de uma branch teste
3. Verificar preview URL
```

---

## 📊 RESULTADOS ESPERADOS

### Local (Antes do Deploy)

```
Performance:
  ✅ CSS carrega em <0.5s
  ✅ JS carrega em <1s
  ✅ Nenhum erro no console
  ✅ Animações suaves (60 FPS)

Funcionalidades:
  ✅ Cookie banner aparece
  ✅ Formulário valida LGPD
  ✅ Honeypot oculto
  ✅ Responsivo em mobile

Segurança:
  ✅ Sem avisos de segurança
  ✅ Sem erros de CSP
  ✅ HTTPS funcionará após deploy
```

### Após Vercel Deploy

```
URL: https://futurannet.vercel.app (temporária)
     https://futurannet.com.br (após domain setup)

Performance:
  ✅ Lighthouse: Performance >75
  ✅ LCP: <2.5s
  ✅ FID: <100ms
  ✅ CLS: <0.1

Acessibilidade:
  ✅ Headers de segurança ativas
  ✅ HTTPS com certificado válido
  ✅ Cache otimizado pela Vercel
```

---

**Checklist Criado:** 28 itens (7 seções)  
**Tempo estimado:** 30 minutos  
**Status:** Pronto para começar ✅

Bom trabalho! 🎉
