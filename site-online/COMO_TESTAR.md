# 🧪 COMO TESTAR O SITE

## 📋 Passos para testar:

### 1. Abra o Console do Navegador
- Pressione **F12** ou **Ctrl+Shift+I**
- Vá na aba **Console**

### 2. Recarregue a página
- Pressione **Ctrl+F5** (recarregar sem cache)
- Você deve ver no console:
  ```
  🚀 Script carregado!
  DOM carregado!
  Entrada configurada
  Botão de música configurado
  Site inicializado!
  ```

### 3. Teste a animação do título
- Olhe para a aba do navegador
- Deve aparecer "HIHIHIHIHIH" animando

### 4. Teste a entrada do site
- Clique no texto "richstyle"
- Deve aparecer no console: "Entrando no site..."
- Depois: "Site aberto!"

### 5. Teste a música
- Clique no botão de música (ícone de volume)
- Deve aparecer no console: "Toggle música chamado"
- Se o player estiver pronto: "Música tocando" ou "Música pausada"

### 6. Teste a tecla espaço
- Pressione **Espaço**
- Deve controlar a música

## 🔧 Se algo não funcionar:

### Problema: Console vazio
- Verifique se o arquivo `script.js` existe
- Verifique se não há erros de JavaScript

### Problema: "Elemento não encontrado"
- Verifique se o `index.html` está correto
- Verifique se os IDs estão certos

### Problema: Música não funciona
- Verifique se o YouTube API carregou
- Deve aparecer: "YouTube API carregada!"

### Problema: Animação do título não funciona
- Verifique se não há bloqueadores de popup
- Tente em outro navegador

## 🚀 Teste rápido:
1. Abra `teste-simples.html` primeiro
2. Clique em "Abrir Site Principal"
3. Compare os resultados

## 📞 Se ainda não funcionar:
- Me envie o que aparece no console
- Me diga qual navegador está usando
- Me diga se há algum erro em vermelho no console 