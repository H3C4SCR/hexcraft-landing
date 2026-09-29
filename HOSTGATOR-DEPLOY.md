# Publicar a [HEX]CRAFT na HostGator

A homepage é estática: HTML, CSS, JavaScript e SVG. Não há PHP, banco de dados ou formulário processado pelo site. O contato é feito pelo e-mail `contato@hexcraft.com.br`.

## Arquivos públicos

Envie para o document root do domínio, normalmente `public_html/`:

```text
index.html
manifesto.html
.htaccess
robots.txt
sitemap.xml
assets/
css/
js/
```

Não envie `.git/`, `server.log`, `setup-git.sh`, arquivos temporários ou antigos arquivos PHP do projeto.

## Estrutura esperada

```text
public_html/
├── index.html
├── manifesto.html
├── .htaccess
├── robots.txt
├── sitemap.xml
├── assets/
│   └── favicon.svg
├── css/
│   ├── base.css
│   ├── home.css
│   └── style.css
└── js/
    ├── main.js
    └── effects.js
```

`index.html` deve ficar diretamente dentro de `public_html`, não dentro de uma pasta extra.

## E-mail de contato

No cPanel, abra **Contas de e-mail** e crie:

```text
contato@hexcraft.com.br
```

Na homepage, o botão usa um link `mailto:`. Ao clicar, o navegador abre o cliente de e-mail do visitante. O site não recebe, armazena ou encaminha os dados da mensagem.

## Domínio e cPanel

O cPanel é o painel visual da hospedagem. Use **Gerenciador de Arquivos** para enviar os arquivos e **Domínios** para confirmar que `hexcraft.com.br` aponta para a pasta pública correta.

## HTTPS e DNS

1. Aponte o domínio para a hospedagem conforme os dados exibidos pela HostGator.
2. Aguarde o DNS resolver.
3. No cPanel, abra **SSL/TLS Status** e confirme o certificado de `hexcraft.com.br` e `www.hexcraft.com.br`.
4. O `.htaccess` redireciona HTTP para HTTPS.
5. Mantenha os registros MX intactos para não interromper o e-mail do domínio.

Depois de criar a conta de e-mail, teste o webmail e clique no endereço da seção **Abrir portal**.

## Segurança aplicada

- sem endpoint público de formulário;
- sem sessão, banco ou credenciais no site;
- sem armazenamento de dados pessoais;
- HTTPS obrigatório;
- HSTS após o SSL;
- listagem de diretórios desativada;
- `.git` e `private` bloqueados pelo Apache;
- headers contra MIME sniffing, framing e permissões excessivas.
