# Guia de Publicação: Fiscina Serviços Técnicos no GitHub Pages

## Passo 1: Preparar o Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login com sua conta
2. Clique em **"New"** para criar um novo repositório
3. Preencha os dados:
   - **Repository name:** `fiscina-servicos` (ou `seu-usuario.github.io` se quiser usar como site principal)
   - **Description:** "Site profissional da Fiscina Serviços Técnicos"
   - **Public** (para que fique acessível)
   - NÃO inicialize com README, .gitignore ou license (vamos fazer isso localmente)
4. Clique em **"Create repository"**

## Passo 2: Configurar Git Localmente

Abra o terminal na pasta do projeto (`/home/ubuntu/fiscina-servicos`) e execute:

```bash
# Inicializar git (se ainda não estiver inicializado)
git init

# Adicionar o repositório remoto
git remote add origin https://github.com/SEU_USUARIO/fiscina-servicos.git

# Renomear branch para main (padrão do GitHub)
git branch -M main

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: Site Fiscina Serviços Técnicos com design completo"

# Enviar para o GitHub
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu username do GitHub.**

## Passo 3: Configurar GitHub Pages

1. No repositório do GitHub, vá para **Settings** (engrenagem no topo)
2. Na barra lateral esquerda, clique em **"Pages"**
3. Em **"Source"**, selecione:
   - **Branch:** `main`
   - **Folder:** `/ (root)` ou `/dist` (dependendo da configuração)
4. Clique em **"Save"**

## Passo 4: Build e Deploy

Antes de fazer push, você precisa fazer o build do projeto:

```bash
# Instalar dependências (se não tiver feito)
pnpm install

# Fazer o build para produção
pnpm build

# Adicionar os arquivos buildados
git add .

# Commit
git commit -m "Build: Preparar para produção"

# Push
git push
```

## Passo 5: Acessar o Site

Após alguns minutos (geralmente 1-5 minutos), o site estará disponível em:

- Se o repositório é `fiscina-servicos`: `https://seu-usuario.github.io/fiscina-servicos`
- Se o repositório é `seu-usuario.github.io`: `https://seu-usuario.github.io`

Você pode verificar o status do deploy em **Settings > Pages** no GitHub.

## Passo 6: Usar Domínio Customizado (Opcional)

Se você tiver um domínio próprio (ex: `www.fiscina.com.br`):

1. Em **Settings > Pages**, na seção **"Custom domain"**, insira seu domínio
2. Configure os registros DNS do seu domínio:
   - Adicione um registro `CNAME` apontando para `seu-usuario.github.io`
   - Ou configure registros `A` conforme indicado pelo GitHub
3. Marque a opção **"Enforce HTTPS"**

## Atualizações Futuras

Sempre que você fizer mudanças no site:

```bash
# Fazer as alterações nos arquivos

# Build
pnpm build

# Adicionar e fazer commit
git add .
git commit -m "Descrição das mudanças"

# Push
git push
```

## Troubleshooting

**O site não aparece após 10 minutos?**
- Verifique em Settings > Pages se há alguma mensagem de erro
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Tente acessar em modo incógnito

**As imagens não aparecem?**
- Verifique se os URLs das imagens estão corretos
- As imagens devem estar em um CDN (como estão agora) ou na pasta `/public`

**Erro ao fazer push?**
- Verifique se você tem permissão no repositório
- Autentique com token: `git config --global user.email "seu@email.com"`

## Próximos Passos

Após publicar, você pode:
- Adicionar um formulário de contato funcional (requer backend)
- Integrar com analytics (Google Analytics, Plausible)
- Adicionar mais projetos e case studies
- Otimizar SEO (meta tags, schema markup)
- Implementar blog com notícias da empresa

---

**Dúvidas?** Consulte a [documentação oficial do GitHub Pages](https://docs.github.com/en/pages)
