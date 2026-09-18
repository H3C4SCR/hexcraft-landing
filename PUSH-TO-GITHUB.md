# 🚀 Como fazer Push para o GitHub

Seu repositório está **quase pronto**! Só falta a autenticação para enviar os arquivos.

## 🔐 **Opção 1: Push via Browser (Mais Fácil)**

Execute este comando no terminal:

```bash
cd /home/h3c4/KIRO/hexcraft-landing
git push -u origin main
```

Quando pedir **Username** e **Password**:
- **Username**: `H3C4SCR`
- **Password**: Use um **Personal Access Token** (não a senha da conta)

### Como criar Personal Access Token:

1. Vá em: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. **Note**: "HEX CRAFT Push"
4. **Expiration**: 90 days
5. **Scopes**: Marque apenas `repo` ✅
6. Click **"Generate token"**
7. **COPIE O TOKEN** (aparece só uma vez!)

## 🔐 **Opção 2: Upload Manual (Super Fácil)**

Se der problema com a autenticação:

1. **No GitHub**, abra seu repositório: https://github.com/H3C4SCR/hexcraft-landing
2. Click **"uploading an existing file"**
3. **Arraste todos os arquivos** da pasta `/home/h3c4/KIRO/hexcraft-landing/`
4. **Commit message**: "🎉 Initial upload - HEX CRAFT Landing Page"
5. Click **"Commit changes"**

### Arquivos para fazer upload:
```
✅ index.html
✅ README.md
✅ css/style.css
✅ js/script.js
✅ images/ (pasta vazia)
✅ .gitignore
```

## 🌐 **Ativar GitHub Pages (Hospedagem Grátis)**

Depois de subir os arquivos:

1. No repositório, vá em **Settings**
2. Clique em **Pages** (menu lateral esquerdo)
3. **Source**: Deploy from a branch
4. **Branch**: main
5. **Folder**: / (root)
6. Click **Save**

🎉 **Seu site estará em**: https://H3C4SCR.github.io/hexcraft-landing

## ✅ **Status Atual**

- [x] ✅ Repositório Git inicializado
- [x] ✅ Arquivos commitados localmente
- [x] ✅ Remote origin configurado
- [ ] ⏳ Push para GitHub (precisa fazer)
- [ ] ⏳ GitHub Pages ativado

## 🆘 **Se der erro no push:**

```bash
# Forçar push (use apenas se necessário)
git push -u origin main --force
```

---

**🎯 Recomendação:** Use a **Opção 2** (upload manual) se for a primeira vez. É mais simples! 😊