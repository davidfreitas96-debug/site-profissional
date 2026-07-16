# Relatório de revisão global

**Projeto:** site de David F. Santos  
**Data da revisão:** 15 de julho de 2026  
**Entrega:** `david-f-santos-site-revisao-global-publicacao-2026-07-15.zip`

## Resultado executivo

O projeto foi revisado integralmente e permanece composto apenas por HTML, CSS e JavaScript estáticos, sem processo de build ou dependências novas. Todos os textos, imagens, metadados, links, dados estruturados e a integração existente com o FormSubmit foram preservados.

A versão final passou por uma matriz automatizada de **180 combinações de página e viewport** (12 páginas em 15 cenários), sem rolagem horizontal acidental, elementos interativos fora do contêiner, imagens deformadas, colisões no cabeçalho ou erros de JavaScript no console.

## Correção prioritária do cabeçalho

### Causa do item “Início” deslocado

O problema não era um posicionamento isolado do link. A área útil original do cabeçalho tinha `max-width: 1220px`, mas a soma da marca, navegação, botão de agendamento e espaçamentos precisava de mais largura. Ao mesmo tempo, `.logo-area` e `.navigation` podiam encolher no flexbox, embora seus conteúdos internos continuassem sem quebra e transbordassem visualmente. Em 1366 px, por exemplo, a caixa calculada da marca ficava menor do que o conteúdo real e o link “Início” avançava sobre a área visual da logo. O menu compacto só era ativado em 1240 px, portanto tarde demais para evitar a colisão.

### Solução estrutural

- O contêiner específico do cabeçalho passou a usar até 1280 px de largura.
- O conjunto principal usa `flex-wrap: nowrap`.
- Marca, navegação e CTA não encolhem de maneira independente (`flex-shrink: 0`/base automática).
- A marca e os itens de navegação mantêm largura intrínseca e `white-space: nowrap`.
- Gaps, tipografia e preenchimento do CTA foram equilibrados sem comprometer a leitura.
- O menu compacto entra em ação em `1279px`, antes de faltar espaço para o cabeçalho completo.
- O mesmo breakpoint foi sincronizado no CSS e em `site.js`.
- Nenhum posicionamento absoluto foi usado para mascarar a falha.

Após a correção, o cabeçalho completo permanece em uma única linha a partir de 1280 px. Em larguras menores — inclusive nos equivalentes de zoom a 125% e 150% — aparece somente a versão compacta, sem convivência desorganizada entre menu completo e botão hambúrguer.

### Refinamento solicitado nos prints

No cabeçalho móvel, “David F. Santos” foi centralizado em relação ao bloco da marca e o CRP foi colocado imediatamente abaixo do nome. A repetição do CRP acima do título da seção inicial foi removida apenas na apresentação móvel; o conteúdo continua presente no cabeçalho.

## Passo a passo

A lista de etapas apresentava duas camadas concorrentes de numeração e uma linha vertical que terminava antes de conectar visualmente as etapas. Foram realizados os seguintes ajustes:

- removida a numeração duplicada gerada por um pseudoelemento antigo;
- mantida uma única sequência correta, de 01 a 04;
- reorganizados recuos e espaçamento vertical para melhorar a leitura;
- corrigida a continuidade da linha entre os marcadores;
- encerrada a linha de forma limpa na última etapa;
- preservados todos os títulos e textos do processo.

## Outros problemas encontrados e correções

### Responsividade e CSS

- Eliminado o transbordamento em 320 px causado pela combinação entre `min-width` no `body`, barra de rolagem e a assinatura tipográfica do rodapé.
- Ajustada a assinatura do rodapé com tamanho fluido e possibilidade correta de encolhimento do contêiner.
- A grade da área do cliente passa a empilhar antes que o emblema decorativo exceda o viewport em tablets/notebooks estreitos.
- O emblema do portal recebeu limite de largura para não escapar do contêiner.
- Mantida a cascata do redesign, com consolidação localizada dos seletores conflitantes que afetavam o cabeçalho e os componentes revisados.
- Nenhum novo `!important` foi introduzido. Os existentes continuam restritos ao campo antispam oculto e ao tratamento de movimento reduzido.

### Navegação por âncoras

As seções identificadas por `#inicio`, `#sobre`, `#abordagem`, `#atendimentos`, `#agendamento` e `#contato` receberam margens de rolagem coerentes com as alturas do cabeçalho desktop e móvel. Os títulos não ficam cobertos pelo cabeçalho fixo.

### Menu móvel e acessibilidade

- abertura e fechamento por mouse, toque e teclado;
- bloqueio da rolagem de fundo enquanto aberto;
- rolagem interna em telas de pouca altura;
- fechamento ao selecionar um link;
- fechamento por `Escape`, com retorno do foco ao botão;
- fechamento ao redimensionar ou mudar a orientação;
- sincronização de `aria-expanded`, `aria-hidden`, `inert` e `tabindex`;
- links fechados não permanecem alcançáveis pelo teclado;
- foco inicial lógico no primeiro link;
- áreas de toque de pelo menos 44 px nos controles revisados;
- preservação de `prefers-reduced-motion` e dos indicadores visíveis de foco.

### Formulário, FAQ e ferramentas

- Contrato do formulário preservado: action do FormSubmit, método POST, nomes de campos, validações obrigatórias, checkbox de privacidade, campos ocultos e antispam.
- Validação nativa testada com os campos vazios, sem realizar envio externo.
- FAQ testado por interação e exibição da resposta.
- Ferramentas de respiração, aterramento, lembrete e notas locais testadas; os dados temporários usados no teste foram apagados.
- Splash testado em sessão limpa, incluindo remoção correta após a animação.

### Imagens e conteúdo

- 26 usos de imagens verificados.
- Nenhuma imagem sem atributo `alt`.
- Nenhuma imagem sem dimensões declaradas.
- Nenhuma imagem deformada na matriz responsiva.
- Oito imagens não essenciais mantêm carregamento tardio.
- Nenhum texto, fotografia, link, metadado ou referência local desapareceu em comparação com o arquivo original.

## Arquivos modificados

1. `index.html` — reorganização semântica da ordem visual do nome e CRP no cabeçalho.
2. `styles.css` — correções estruturais do cabeçalho, menu compacto, âncoras, passo a passo, rodapé e refinamentos móveis.
3. `site.js` — breakpoint sincronizado e saneamento do estado do menu em redimensionamento/orientação.
4. `portal.css` — contenção do emblema e empilhamento antecipado da área do cliente.
5. `RELATORIO-REVISAO-GLOBAL.md` — este relatório, adicionado à entrega.

Os demais arquivos foram preservados. A cópia de segurança integral do ZIP original está em `david-f-santos-site-redesign-publicacao-2026-07-15-BACKUP-ORIGINAL.zip`, fora da pasta publicada.

## Breakpoints efetivos revisados

| Faixa | Uso principal |
|---|---|
| até 1279 px | cabeçalho e navegação compactos |
| até 1100 px | empilhamento das áreas amplas do portal |
| até 1024 px | ajustes intermediários já existentes para tablets |
| até 900/860 px | reorganização de grades e conteúdo editorial |
| até 768 px | adaptações de tablet/celular existentes |
| até 680/640/600 px | composição móvel, formulário e portal |
| até 430/420/390 px | refinamentos para celulares estreitos |
| altura até 480 px em paisagem | navegação e portal em telas de pouca altura |

O breakpoint do cabeçalho foi escolhido a partir da largura real do conjunto marca + menu + CTA, deixando uma margem de segurança antes da colisão.

## Resoluções e cenários testados

Foram testados:

- 320 × 780;
- 360 × 800;
- 375 × 812;
- 390 × 844;
- 430 × 932;
- 600 × 960;
- 667 × 375 (celular em paisagem);
- 768 × 1024;
- 820 × 1180;
- 844 × 390 (paisagem);
- 1024 × 768;
- 1280 × 800;
- 1366 × 768;
- 1440 × 900;
- 1920 × 1080.

Também foram inspecionadas larguras intermediárias progressivas ao redor da transição do cabeçalho, incluindo 1278, 1279, 1280, 1281 e 1300 px. O zoom de 125% e 150% foi simulado pelos viewports CSS efetivos de notebooks de 1366 e 1440 px (1093, 911, 1152 e 960 px); em todos eles o menu compacto foi ativado corretamente.

## Páginas testadas

- `index.html`;
- `privacidade.html`;
- `obrigado.html`;
- `agenda/index.html`;
- `area-do-cliente/index.html`;
- `combinados/index.html`;
- `documentos/index.html`;
- `login/index.html`;
- `materiais/index.html`;
- `painel/index.html`;
- `preparacao/index.html`;
- `registros/index.html`.

## Resultado dos testes

| Verificação | Resultado |
|---|---|
| Matriz de páginas e viewports | 180/180 sem falhas de layout detectadas |
| Erros de console | 0 |
| Referências locais quebradas | 0 |
| Caminhos iniciados por `/` | 0 |
| IDs duplicados | 0 |
| Sintaxe dos quatro arquivos JavaScript | válida (`node --check`) |
| Rolagem horizontal acidental | não detectada |
| Imagens deformadas | não detectadas |
| Cabeçalho em largura intermediária | sem colisão ou quebra |
| Âncoras sob o cabeçalho | nenhuma seção coberta |
| Publicação em subpasta | 18 recursos/rotas verificados com HTTP 200 |

O projeto foi servido e testado tanto na raiz quanto sob a subpasta `/david-f-santos-site-revisao-global/`, reproduzindo o cenário típico do GitHub Pages. Páginas, folhas de estilo, scripts e imagens carregaram pelos caminhos relativos corretos.

## Limitações externas

- Não foi realizado um envio real pelo FormSubmit, para evitar mensagem desnecessária; a configuração e a validação local foram preservadas e verificadas.
- A disponibilidade futura de Google Fonts, WhatsApp, Instagram, LinkedIn, FormSubmit e outros destinos externos depende dos respectivos serviços.
- O zoom foi verificado por equivalência de viewport CSS; testes finais em dispositivos físicos e tecnologias assistivas dedicadas continuam recomendáveis como validação complementar, mas não foi encontrada limitação local bloqueante.

## Estado final

O projeto está pronto para publicação estática no GitHub Pages, com a identidade visual e o conteúdo preservados. O ZIP de entrega contém os arquivos diretamente na raiz do pacote, incluindo este relatório.
