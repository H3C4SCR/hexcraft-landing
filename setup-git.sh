#!/bin/bash

echo "🚀 Configurando repositório Git para [HEX]CRAFT"
echo "=============================================="

# Navegar para a pasta do projeto
cd /home/h3c4/KIRO/hexcraft-landing

# Inicializar repositório Git
echo "📁 Inicializando repositório Git..."
git init

# Criar .gitignore
echo "📝 Criando .gitignore..."
cat > .gitignore << EOF
# Logs
*.log
npm-debug.log*

# Dependency directories
node_modules/

# IDE files
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Temporary files
*.tmp
*.temp

# Server logs
server.log
EOF

# Adicionar todos os arquivos
echo "➕ Adicionando arquivos ao Git..."
git add .

# Fazer primeiro commit
echo "💾 Fazendo primeiro commit..."
git status
git commit -m "🎉 Initial commit: [HEX]CRAFT Landing Page

✨ Features:
- Modern responsive landing page
- Tech + Magic theme design
- Interactive animations and effects
- Form validation
- Mobile-friendly navigation
- Particle effects and magical cursor

🛠️ Tech Stack:
- HTML5 semantic structure
- CSS3 with animations and gradients
- Vanilla JavaScript
- Google Fonts (Orbitron + Inter)

🎨 Design:
- Neon color palette (cyan/magenta/purple)
- Futuristic typography
- Smooth animations
- Responsive design"

echo ""
echo "✅ Repositório Git configurado com sucesso!"
echo ""
echo "🌐 Próximos passos:"
echo "1. Crie um repositório no GitHub (https://github.com/new)"
echo "2. Nome sugerido: 'hexcraft-landing'"
echo "3. Execute os comandos que aparecerão na tela do GitHub"
echo ""
echo "💡 Exemplo de comandos para conectar ao GitHub:"
echo "git remote add origin https://github.com/SEU-USUARIO/hexcraft-landing.git"
echo "git branch -M main"
echo "git push -u origin main"