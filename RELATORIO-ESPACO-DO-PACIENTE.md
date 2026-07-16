# Relatório — reforma do Espaço do Paciente

Data: 16 de julho de 2026  
Projeto: site estático de David F. Santos — CRP 07/40292

## Resultado

O antigo conjunto de páginas escuras e genéricas foi reconstruído como uma área pública de apoio, editorial, mobile-first e sem aparência de prontuário ou portal autenticado. A entrada agora responde “Como este espaço pode ajudar você hoje?” e encaminha diretamente para nove necessidades reais.

A abertura animada do portal foi mantida, encurtada e ajustada para respeitar `prefers-reduced-motion`. O erro de recorte horizontal da página inicial do site principal também foi corrigido: o título do hero deixa de forçar uma única linha em celulares.

## Diagnóstico da versão anterior

- Arquitetura centrada em nomes internos, exigindo que a pessoa soubesse onde procurar.
- Repetição de cartões escuros com pouca diferenciação funcional.
- Respiração, 5-4-3-2-1, temporizador e bloco de notas persistente ocupavam o centro da experiência, embora fossem pouco específicos ao trabalho apresentado.
- Uso de `localStorage` para relatos, inadequado como padrão para conteúdo potencialmente sensível em dispositivo compartilhado.
- Páginas com aparência de portal privado apesar de não existir autenticação ou backend.
- Pouca separação entre psicoterapia, avaliação psicológica, avaliação neuropsicológica e orientação de carreira.
- Conteúdo teórico e ético insuficiente para sustentar o nome “Espaço do Paciente”.
- Navegação mobile extensa e experiência visual excessivamente escura.
- Regra tardia `white-space: nowrap` no hero do site principal causava o recorte mostrado na captura enviada.

## Arquitetura adotada

1. Início orientado por necessidade.
2. Entenda o cuidado.
3. Psicoterapia.
4. Avaliação psicológica.
5. Avaliação neuropsicológica.
6. Orientação vocacional e de carreira.
7. Reflexões guiadas.
8. Preparação.
9. Perguntas frequentes.
10. Glossário.
11. Fontes e leituras.
12. Contato e urgência.

No celular, cinco destinos ficam visíveis na barra inferior: Início, Entender, Refletir, Dúvidas e Contato. No desktop, a navegação principal expõe os caminhos centrais e agrupa os demais em “Mais”.

## Páginas alteradas

- `area-do-cliente/index.html`: nova entrada por necessidades, comparação de serviços e trechos breves conferidos.
- `painel/index.html`: mapa completo das doze áreas.
- `preparacao/index.html`: preparação para sessão, primeiro encontro, online e avaliações.
- `materiais/index.html`: biblioteca com nove leituras completas, busca e filtros locais.
- `registros/index.html`: nove instrumentos reflexivos com finalidade, limites, tempo, segurança, alternativa em papel e crédito.
- `combinados/index.html`: FAQ extensa por categorias usando `details`/`summary` nativos.
- `documentos/index.html`: rota antiga preservada como página de atalhos.
- `agenda/index.html`: contato administrativo separado de urgência e rede pública.
- `login/index.html`: rota antiga preservada, explicando que o ambiente é público e não tem login.
- `privacidade.html`: política refeita após a reforma, com fluxo real de dados e limites éticos.
- `portal.css`, `portal.js` e `portal-tools.js`: sistema visual, navegação, busca, filtros e instrumentos reescritos.
- `styles.css` e `index.html`: correção do hero mobile e nomenclatura consistente “Espaço do Paciente”.

## Páginas novas

- `entenda/index.html`
- `psicoterapia/index.html`
- `avaliacao-psicologica/index.html`
- `avaliacao-neuropsicologica/index.html`
- `orientacao-carreira/index.html`
- `glossario/index.html`

## Ferramentas removidas do núcleo

- Respiração guiada genérica.
- Técnica 5-4-3-2-1.
- Temporizador de pausa.
- Bloco de notas persistente em `localStorage`.

Esses recursos não foram apenas escondidos: seu código e sua persistência foram retirados do portal reformado.

## Ferramentas adicionadas

1. Linha do tempo de experiências.
2. Meu cenário de vida.
3. Três cenários.
4. Criação de cenários possíveis.
5. Minha experiência em contexto.
6. O que mudou desde o último encontro?
7. Perguntas para levar à sessão.
8. Mapa de apoios e recursos.
9. Explorar caminhos profissionais.

Cada percurso permite pular, voltar, sair e retomar enquanto a página continua aberta. As respostas podem ser organizadas como frase, tópicos, pistas tocáveis, seleção de cartões ou reflexão mental. O resumo não interpreta, não pontua e não diagnostica. “Copiar resumo” só age após toque explícito.

## Decisões de UX e visual

- Superfícies de leitura em marfim quente, texto grafite, azul-petróleo, vinho e dourado envelhecido como acento.
- Um objetivo principal por etapa nos instrumentos.
- Títulos responsivos com quebra permitida e `overflow-wrap`.
- Áreas de ação principais com no mínimo 44 px e botões em largura total nos celulares menores.
- Barra inferior fixa com `safe-area-inset-bottom` e espaço reservado no corpo.
- Sem interação obrigatoriamente dependente de hover ou arrastar e soltar.
- Abertura animada curta, sem repetição persistente e com alternativa de movimento reduzido.
- URLs antigas mantidas para evitar favoritos quebrados.

## Decisões éticas

- O ambiente é identificado como público, sem login, prontuário ou agenda individual.
- O conteúdo não cria vínculo terapêutico, não substitui atendimento e não oferece resposta imediata.
- Não há testes psicológicos, itens protegidos, escores, quizzes diagnósticos ou promessa de resultado.
- Avaliação e neuropsicologia são explicadas como processos integrativos, não como resultado de um teste isolado.
- WhatsApp e e-mail aparecem como canais administrativos, nunca como plantão.
- Urgência diferencia SAMU/UPA/pronto-socorro, apoio emocional do CVV e cuidado territorial em CAPS/UBS.
- Adolescentes são apresentados como participantes do processo, preservando comunicação do essencial aos responsáveis.
- As inspirações do livro aparecem junto de cada instrumento e em seção específica de créditos.

## Decisões de privacidade

- Respostas dos instrumentos existem somente no estado JavaScript da página aberta.
- Não há `localStorage`, `sessionStorage`, cookies, `fetch`, XHR, beacon, WebSocket, formulário ou parâmetro de URL nos instrumentos.
- Atualizar a página descarta a reflexão; isso foi confirmado no navegador.
- O botão de cópia usa a área de transferência somente após ação explícita.
- Busca, filtros e checklists do portal também são locais e não persistentes.
- A política distingue o portal das integrações do site principal: FormSubmit, e-mail, WhatsApp e Google Fonts.

## Testes realizados

- Sintaxe: `node --check` em `portal.js`, `portal-tools.js`, `site.js` e `splash.js`.
- 18 documentos HTML verificados com um `h1` e um landmark `main`.
- Links relativos, imagens, CSS e JavaScript locais: nenhum alvo quebrado.
- IDs duplicados: nenhum.
- Console do navegador após navegação: nenhum erro ou aviso.
- Matriz responsiva: 43 combinações de rota/largura, sem overflow horizontal.
- Dispositivos obrigatórios: 320×568, 360×800, 375×812, 390×844 e 412×915; tablet e desktop também verificados.
- Barra inferior: dentro do viewport e com 66 px nos cinco celulares testados.
- Zoom: verificação responsiva equivalente a 200% em 640 CSS px, sem overflow.
- Instrumento “Três cenários”: preencher, voltar, preservar resposta, mudar para tópicos, pular, concluir, copiar e destacar cenário possível.
- Instrumento de perguntas: seleção, síntese e limpeza completa.
- Sair/retomar: resposta preservada apenas enquanto a página permanece aberta.
- Atualizar: retorno a “Começar reflexão”, confirmando descarte da memória.
- Busca da biblioteca: “escore” retornou um resultado e não alterou a URL.
- JavaScript desativado: conteúdo essencial, finalidades, limites e créditos estão no HTML; a área interativa possui `noscript` com alternativa em papel/mental.
- Auditoria estática de rede e persistência: nenhuma chamada ou armazenamento no portal.
- Foco: etapa nova direciona foco ao campo; síntese recebe foco; foco visível de 3 px; FAQ usa elementos nativos.
- Movimento reduzido: regras CSS e ramo `matchMedia('(prefers-reduced-motion: reduce)')` verificados.
- Tamanho: pasta final antes do ZIP em torno de 2 MB, sem framework ou biblioteca de interface.
- Lighthouse em `area-do-cliente/`: desempenho 98, acessibilidade 100, boas práticas 100 e SEO 100; FCP 1,8 s, LCP 2,0 s, CLS 0,012 e TBT 0 ms.

Os relatórios bruto HTML e JSON do Lighthouse estão em `auditorias/`.

## Limitações restantes

- Google Fonts ainda é carregado externamente. Auto-hospedar as fontes reduziria compartilhamento técnico e dependência de rede.
- O formulário institucional continua dependendo do FormSubmit e da conta de e-mail; a retenção operacional deve ser revisada periodicamente.
- Contatos e horários da rede pública podem mudar. A página prioriza links oficiais e registra a data de consulta.
- O site permanece público e estático; não deve receber documentos, laudos, devolutivas ou registros clínicos.
- A política é uma implementação técnica/editorial responsável, não um parecer jurídico.
- Auditorias automáticas não substituem teste com pessoas reais, leitores de tela variados e dispositivos físicos.

