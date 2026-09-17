# 🚀 Como subir [HEX]CRAFT para o GitHub

Siga estes passos para colocar seu projeto no GitHub:

## ⚙️ **PASSO 1: Instalar e Configurar Git**

Abra o terminal e execute:

```bash
# Instalar Git
sudo apt update
sudo apt install git -y

# Configurar suas informações (substitua pelos seus dados)
git config --global user.name "Seu Nome Aqui"
git config --global user.email "seu.email@gmail.com"
```

## 📁 **PASSO 2: Configurar Repositório Local**

```bash
# Navegar para a pasta do projeto
cd /home/h3c4/KIRO/hexcraft-landing

# Executar script de configuração
./setup-git.sh
```

## 🌐 **PASSO 3: Criar Repositório no GitHub**

1. **Acesse:** https://github.com/new
2. **Nome do repositório:** `hexcraft-landing`
3. **Descrição:** `Landing page moderna para [HEX]CRAFT - Tech meets Magic ✨`
4. **Visibilidade:** Público ✅
5. **NÃO marque:** "Add a README file" (já temos)
6. **Clique em:** "Create repository"

## 🔗 **PASSO 4: Conectar Local ao GitHub**

Depois de criar no GitHub, copie e execute os comandos que aparecem na tela:

```bash
# Conectar ao repositório remoto (substitua SEU-USUARIO pelo seu username)
git remote add origin https://github.com/SEU-USUARIO/hexcraft-landing.git

# Renomear branch para main
git branch -M main

# Enviar código para o GitHub
git push -u origin main
```

## 🎯 **PASSO 5: Ativar GitHub Pages (Hospedagem Grátis)**

1. No GitHub, vá em **Settings** do repositório
2. Clique em **Pages** (menu lateral)
3. Em "Source" selecione: **Deploy from a branch**
4. Branch: **main**
5. Folder: **/ (root)**
6. Clique **Save**

🎉 **Seu site estará disponível em:**
`https://SEU-USUARIO.github.io/hexcraft-landing`

## 🛠️ **Comandos Úteis para o Futuro**

```bash
# Ver status dos arquivos
git status

# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Descrição das mudanças"

# Enviar para GitHub
git push

# Ver histórico
git log --oneline
```

## 📋 **Checklist Final**

- [ ] Git instalado e configurado
- [ ] Repositório local inicializado
- [ ] Repositório criado no GitHub
- [ ] Código enviado (push)
- [ ] GitHub Pages ativado
- [ ] Site funcionando online

## 🆘 **Se der algum erro:**

### **Erro de autenticação:**
- Use Personal Access Token ao invés de senha
- Gere em: Settings → Developer settings → Personal access tokens

### **Erro de permissão:**
```bash
git remote set-url origin https://SEU-USERNAME:SEU-TOKEN@github.com/SEU-USERNAME/hexcraft-landing.git
```

### **Primeiro push com erro:**
```bash
git push -u origin main --force
```

---

**📞 Precisa de ajuda?** Me chame que explico qualquer passo! 😊