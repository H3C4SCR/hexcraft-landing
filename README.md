# [HEX]CRAFT

Homepage experimental para a marca-estúdio [HEX]CRAFT: um laboratório de objetos, arte, código e ideias que não cabem no molde.

## Arquitetura

O projeto é um site estático sem framework, build ou backend. Isso deixa cada camada visível para estudo e funciona muito bem em hospedagem compartilhada:

```text
index.html       # homepage
manifesto.html   # página editorial
css/base.css     # tokens, navegação, acessibilidade e rodapé
css/home.css     # composição visual da homepage
css/style.css    # estilos da página do manifesto
js/main.js       # menu, navegação, foco e reveal
js/effects.js    # efeito visual opcional do hero
assets/favicon.svg
.htaccess        # HTTPS, headers e bloqueios Apache
```

## Como estudar localmente

Para visualizar a versão estática:

```bash
python3 -m http.server 8080
```

Abra `http://localhost:8080`.

O contato é feito pelo link `mailto:contato@hexcraft.com.br`; o site não armazena nem processa mensagens.

## Publicação

1. Envie `index.html`, `manifesto.html`, `.htaccess`, `robots.txt`, `sitemap.xml`, `assets/`, `css/` e `js/` para `public_html`.
2. Crie `contato@hexcraft.com.br` na HostGator.
3. Ative e teste HTTPS.
4. Abra o endereço de e-mail na seção **Abrir portal**.

O passo a passo completo está em `HOSTGATOR-DEPLOY.md`.

## Segurança

Como não existe backend nem coleta de dados, a superfície de ataque é menor: não há sessão, banco de dados, endpoint de formulário, credenciais ou envio automático de e-mail. O `.htaccess` força HTTPS, bloqueia listagem de diretórios e adiciona headers de segurança.
