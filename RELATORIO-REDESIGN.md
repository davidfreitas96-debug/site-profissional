# Relatório do redesign — David F. Santos

Data: 15 de julho de 2026

## Resultado

O site foi redesenhado mantendo integralmente a estrutura funcional, o conteúdo textual, os links, os formulários e as rotas da versão recebida. A nova direção visual adota uma linguagem editorial e cinematográfica inspirada nas referências fornecidas: fundos profundos, vinho e azul-noturno, acentos champanhe, hierarquia tipográfica marcada, composições assimétricas e grafismos geométricos discretos.

O título da página principal foi atualizado para:

`David F. Santos | Psicólogo em Santa Maria/RS+Online`

## Segurança e preservação do original

- Arquivo original: `david-f-santos-site-publicacao-2026-07-14.zip`
- SHA-256: `D20402250C7D667F99C5E0C90BCAFE5B45FBB26D6C3539EF0EF2A0FCEC307D16`
- Backup integral preservado em `../backup-original-2026-07-15/`.
- O original não foi sobrescrito.

## Arquivos modificados

- `index.html`
- `styles.css`
- `site.js`
- `privacidade.html`
- `obrigado.html`
- `portal.css`
- `agenda/index.html`
- `area-do-cliente/index.html`
- `combinados/index.html`
- `documentos/index.html`
- `login/index.html`
- `materiais/index.html`
- `painel/index.html`
- `preparacao/index.html`
- `registros/index.html`

## Arquivos criados

- `images/brand-art-privacy.svg`
- `images/brand-art-thanks.svg`
- `RELATORIO-REDESIGN.md`

Os dois SVGs são composições abstratas leves, sem texto e sem redesenhar o logotipo. A marca original continua sendo usada separadamente.

## Decisões visuais

- Paleta principal: preto, grafite, azul-noturno, azul-petróleo, vinho, branco quente, champanhe e dourado envelhecido.
- Botões de atendimento, agendamento, WhatsApp e botão flutuante foram unificados em azul-petróleo, evitando associação visual com alerta ou perigo.
- Fotografias receberam tratamento mais claro e controlado; o efeito de foco ao passar o mouse foi mantido sem deixar a imagem escura em repouso.
- O cabeçalho foi refinado em desktop e celular, com bordas sutis, estados de rolagem e menu móvel organizado em linhas independentes.
- O título principal permanece em uma linha no celular, preservando a leitura de “David F. Santos”.
- A linha dourada reta do primeiro quadro foi substituída por um arco geométrico mais harmonioso.
- O portal do cliente recebeu a mesma identidade visual, com prioridade para clareza, sobriedade e leitura funcional.

## Acessibilidade e interação

- Estados de foco visíveis e de alto contraste foram preservados ou reforçados.
- O menu móvel mantém atributos ARIA, trava de rolagem e fechamento por `Escape` com retorno de foco.
- FAQ, formulário, navegação por âncoras e ferramenta de respiração foram testados.
- Há tratamento específico para `prefers-reduced-motion`.
- Textos alternativos e estrutura semântica existentes foram preservados; os novos grafismos possuem descrições adequadas ou são decorativos.

## Validação realizada

- Páginas HTML verificadas: 12.
- Comparação entre original e redesign: nenhum texto do corpo, link, ação de formulário ou campo funcional foi alterado indevidamente.
- Referências relativas verificadas: nenhum arquivo ausente.
- JavaScript validado sintaticamente: `site.js`, `splash.js`, `portal.js`, `portal-tools.js`.
- CSS validado estruturalmente: `styles.css`, `portal.css`.
- SVGs validados como XML.
- Navegação e visualização testadas nas larguras: 360, 390, 430, 768, 1024, 1366 e 1440 px.
- Todas as 12 rotas foram verificadas em 360 e 1440 px.
- Resultado: sem estouro horizontal, sem imagens quebradas e sem erros de console observados.

## Publicação no GitHub Pages

O projeto é estático e não exige compilação.

1. Envie todo o conteúdo desta pasta para a raiz do repositório ou para a pasta configurada no GitHub Pages.
2. Preserve a estrutura de diretórios e os nomes dos arquivos.
3. Em **Settings > Pages**, escolha a branch e a pasta de publicação.
4. Se houver domínio personalizado, configure-o no GitHub e no DNS do provedor.

Não havia arquivo `CNAME` no pacote original. Caso o domínio personalizado exija esse arquivo, crie-o somente com o domínio definitivo. O arquivo `_headers` foi preservado, mas o GitHub Pages pode ignorar regras específicas desse formato.

## Pontos externos a observar

- O formulário continua usando FormSubmit e não foi enviado durante os testes. A primeira publicação pode exigir ativação ou confirmação no serviço externo.
- As fontes do Google Fonts dependem de conexão com a internet.
- A área pública de apoio não foi convertida em prontuário nem recebeu armazenamento de dados clínicos.
- A configuração de domínio, DNS e credenciais externas não faz parte do pacote local.
