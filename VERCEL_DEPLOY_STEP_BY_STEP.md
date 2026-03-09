# 🚀 DEPLOY VERCEL - PASSO A PASSO

> Seu código está no GitHub! Agora vamos colocar ao vivo no Vercel em 5 minutos.

---

## ✅ PRÉ-REQUISITOS

- ✅ Repositório GitHub criado e atualizado → https://github.com/futurannetdesign/site-novo-futurannet
- ✅ Código commitado e pusheado
- ✅ Nenhuma conta Vercel necessária (vamos criar)

---

## 🎯 PASSO 1: Acessar Vercel e Conectar GitHub

### 1.1 Abrir Vercel
```
→ Acesse: https://vercel.com
```

### 1.2 Fazer Login com GitHub
```
Clique: "Continue with GitHub"
┌─────────────────────────────────────┐
│ GitHub Login                        │
│ Autorizar Vercel para acessar seus  │
│ repositórios? [Authorize] [Cancel]  │
└─────────────────────────────────────┘

Clique: "Authorize"

Resultado: Você está logado no Vercel
```

---

## 🎯 PASSO 2: Importar Repositório

### 2.1 Procurar o Repo
```
Dashboard Vercel:
┌─────────────────────────────────────┐
│ Projects                            │
│ [+ Add New...] ▼                    │
└─────────────────────────────────────┘

Clique: "+ Add New..." > "Project"
```

### 2.2 Selecionar Site-Novo-Futurannet
```
┌─────────────────────────────────────┐
│ Import Git Repository               │
│                                     │
│ Conectado como: futurannetdesign    │
│                                     │
│ Selecione um repo:                  │
│ <busque "site-novo-futurannet">     │
│                                     │
│ [site-novo-futurannet] ← CLIQUE     │
└─────────────────────────────────────┘
```

---

## 🎯 PASSO 3: Configurar Deploy

### 3.1 Framework e Build Settings
```
┌─────────────────────────────────────┐
│ Import Project                      │
│                                     │
│ Framework Preset: [Other ▼]         │
│ Root Directory: ./                  │
│ Build Command:  [deixar vazio]      │
│ Output Directory: [deixar vazio]    │
│ Install Command: [deixar vazio]     │
│                                     │
│ [Deploy] ← CLIQUE                   │
└─────────────────────────────────────┘
```

**Por que essas configurações?**
- Framework: "Other" (site estático HTML)
- Build Command: vazio (não precisa de build)
- Output: vazio (raiz do projeto é a saída)

---

## ✅ PASSO 4: Deploying...

Vercel vai:
1. Clonar seu repositório
2. Validar estrutura (30 seg)
3. Fazer build (10 seg)
4. Deploy automático (20 seg)

**Total: ~1 minuto**

Você verá:
```
✓ Ready for Production
  futurannet-abc123.vercel.app
```

---

## 🎉 PASSO 5: Testar Deploy

### 5.1 URL Temporária
```
Seu site está ao vivo em:
→ https://futurannet-abc123.vercel.app
  (ou similar, depende de hash Vercel)

Acesse agora e teste:
✓ Home page carrega
✓ Formulário funciona
✓ Cookie banner aparece
✓ Modais funcionam
✓ Menu responsivo
```

### 5.2 Verificar Performance
```
Acesse: https://pagespeed.web.dev/
Cole: https://futurannet-abc123.vercel.app

Espectativas:
Performance: 75-85 ✅
SEO: 85-95 ✅
Accessibility: 85-95 ✅
Best Practices: 85-95 ✅
```

---

## 📝 PASSO 6: Configurar Domínio (Opcional - depois)

Se quiser usar seu domínio `futurannet.com.br`:

### 6.1 No Vercel Dashboard
```
Project Settings > Domains
+ Add Domain

Nome: futurannet.com.br
```

### 6.2 No seu registrador (Registro.br ou GoDaddy)

Adicionar registro DNS:
```
Tipo: CNAME
Nome: futurannet.com.br
Valor: cname.vercel-dns.com

Tipo: CNAME
Nome: www.futurannet.com.br
Valor: cname.vercel-dns.com
```

Esperar 15-30 minutos e testar em https://futurannet.com.br

---

## ✅ CHECKLIST FINAL

```
[ ] 1. Acessei Vercel.com
[ ] 2. Fiz login com GitHub
[ ] 3. Importei site-novo-futurannet
[ ] 4. Configurei como "Other" framework
[ ] 5. Cliquei Deploy
[ ] 6. Aguardei deploy concluir
[ ] 7. Testei URL temporária
[ ] 8. Formulário recebe dados
[ ] 9. Performance >75
[ ] 10. Tudo funcionando!
```

---

## 🎁 BÔNUS: Automação Futura

Agora que você tem GitHub + Vercel conectados:
- Toda vez que fizer `git push`, Vercel redeploy automático
- Sem necessidade de fazer deploy manual
- Sempre na versão mais atualizada

```
Workflow automático:
git push → GitHub → Webhook → Vercel → Deploy automático
```

---

## 🆘 SE ALGO NÃO FUNCIONAR

### Erro: "Framework not found"
- Solução: Selecione "Other" (não deixe em automático)

### Erro: "Build failed"
- Solução: Verifique se Output Directory está vazio

### Domínio não funciona
- Solução: Aguarde 30 min para DNS propagar
- Verificar: `nslookup futurannet.com.br`

### Formulário não envia
- Solução: Verificar se Formspree Form ID está correto em index.html
- Action deve ser: `https://formspree.io/f/SEU_FORM_ID`

---

## 📊 STATUS

```
✅ Código: Pronto
✅ GitHub: Atualizado
⏳ Vercel: Aguardando seu deployment

Próximo passo: Vá para Vercel e faça deploy!
```

**Time to live:** ~5 minutos  
**Complexity:** ⭐ Muito fácil (5 cliques)  

---

**Boa sorte! 🚀**

Após o deploy, seu site estará:
- ✅ Ao vivo na internet
- ✅ HTTPS automático
- ✅ CDN global
- ✅ Performance otimizada
- ✅ Updates automáticos

Você consegue! 💪
