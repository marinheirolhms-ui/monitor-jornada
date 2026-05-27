# 🚀 Monitor de Jornada — Deploy no GitHub Pages
### Do zero ao app online em 10 minutos

---

## Estrutura de arquivos (o que você vai fazer upload)

```
monitor-jornada/          ← pasta do repositório
├── monitor_jornada_v5.html
├── manifest.json
├── sw.js
└── icons/
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    ├── icon-384.png
    └── icon-512.png
```

---

## PASSO 1 — Criar conta no GitHub

1. Acesse **github.com**
2. Clique em **Sign up**
3. Escolha um username (ex: `lucas-marinheiro` ou nome da empresa)
4. Confirme o e-mail

---

## PASSO 2 — Criar o repositório

1. Clique no **+** no canto superior direito → **New repository**
2. Preencha:
   - **Repository name:** `monitor-jornada`
   - **Description:** Monitor de Jornada de Trabalho
   - **Visibility:** ✅ Public *(obrigatório para GitHub Pages grátis)*
   - **Add a README file:** ✅ marque essa opção
3. Clique em **Create repository**

---

## PASSO 3 — Fazer upload dos arquivos

1. Na página do repositório, clique em **Add file → Upload files**
2. Arraste **todos os arquivos** de uma vez:
   - `monitor_jornada_v5.html`
   - `manifest.json`
   - `sw.js`
   - A pasta `icons/` inteira (com os 8 arquivos .png)
3. Na área de commit (embaixo), deixe a mensagem padrão ou escreva "Versão inicial"
4. Clique em **Commit changes**

> ⚠️ **Importante:** A pasta `icons` precisa estar dentro do repositório como pasta, não os arquivos soltos. O GitHub aceita upload de pasta arrastando no Windows Explorer.

---

## PASSO 4 — Ativar o GitHub Pages

1. No repositório, clique em **Settings** (aba com engrenagem)
2. No menu lateral esquerdo, clique em **Pages**
3. Em **Source**, selecione:
   - Branch: **main**
   - Pasta: **/ (root)**
4. Clique em **Save**
5. Aguarde 1-2 minutos

A URL será gerada automaticamente:
```
https://SEU-USERNAME.github.io/monitor-jornada/monitor_jornada_v5.html
```

---

## PASSO 5 — Testar

1. Acesse a URL gerada
2. O browser deve pedir permissão de notificação → clique **Permitir**
3. No Chrome/Edge desktop, aparece um ícone de instalação na barra de endereços (⊕)
4. Clique para **instalar como app**

---

## Como atualizar o app no futuro

Quando houver uma nova versão do HTML:

1. Acesse o repositório no GitHub
2. Clique no arquivo `monitor_jornada_v5.html`
3. Clique no ícone de lápis ✏️ (Edit)
4. Cole o novo conteúdo (ou use **Upload files** para substituir)
5. Commit → o GitHub Pages atualiza em ~1 minuto

Os usuários receberão a versão nova **automaticamente** na próxima vez que abrirem o app (o Service Worker cuida disso).

---

## Como os 70 colaboradores acessam

**Opção A — Link direto:**
Envie a URL pelo Teams/WhatsApp:
```
https://SEU-USERNAME.github.io/monitor-jornada/monitor_jornada_v5.html
```

**Opção B — QR Code:**
Gere um QR code em qr-code-generator.com com a URL acima e coloque no comunicado interno.

**Opção C — Instalar como app (recomendado):**
1. Colaborador acessa a URL no Chrome/Edge
2. Clica no ícone ⊕ na barra de endereços
3. Clica em "Instalar"
4. Aparece na área de trabalho como app — abre sem barra de URL

---

## Perguntas frequentes

**Os dados dos colaboradores ficam no servidor do GitHub?**
Não. Nenhum dado digitado no app vai para o GitHub. O GitHub só serve o arquivo HTML. Todos os registros ficam no localStorage do browser de cada colaborador.

**Precisa de login para usar?**
Não. Qualquer pessoa com a URL acessa direto.

**Quero restringir o acesso só para funcionários da empresa.**
O GitHub Pages público não tem autenticação. Opções: usar GitHub Pages privado (requer plano pago), ou hospedar no servidor interno da empresa (IIS, Nginx).

**O app funciona sem internet depois de instalado?**
Sim. O Service Worker cacheia todos os arquivos. Após a primeira visita, funciona 100% offline.

**Como atualizar o app nos celulares dos colaboradores?**
Automaticamente. O Service Worker verifica se há nova versão a cada abertura. Se houver, baixa em background e aplica na próxima vez que o app for aberto.

---

## Custos

| Recurso | Custo |
|---|---|
| GitHub conta | Gratuito |
| GitHub Pages | Gratuito |
| Hospedagem | Gratuito |
| Certificado HTTPS | Gratuito (automático) |
| **Total** | **R$ 0,00** |
