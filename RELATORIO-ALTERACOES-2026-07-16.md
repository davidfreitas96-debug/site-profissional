# Relatório de alterações — 16/07/2026

## Arquivos alterados

- `index.html`: conteúdo institucional, semântica, links, metadados e dados estruturados.
- `styles.css`: distribuição das caixas, ajustes tipográficos, responsividade, botões, passos e FAQ.
- `RELATORIO-ALTERACOES-2026-07-16.md`: este relatório de entrega.

## Mudanças realizadas

- Atualização integral dos textos solicitados na seção inicial, Sobre mim, trabalho clínico, público do atendimento, início do atendimento, contato, FAQ e rodapé.
- Preservação das imagens, identidade visual, serviços, formulário, aviso de urgência, links profissionais, área do cliente, páginas internas, splash e animações existentes.
- Atualização dos dois botões principais de WhatsApp com o endereço e o texto predefinido informados.
- Atualização do botão “Ver canais de contato” para `#contato`.
- Revisão de `<title>`, meta description, Open Graph, Twitter Cards e JSON-LD para manter consistência com os serviços e modalidades apresentados.
- Manutenção de uma única hierarquia `h1`, seguida por títulos `h2` e `h3` coerentes.

## Ajustes responsivos

- Seção “Quando o atendimento psicológico pode fazer sentido?” em grade 2 + 2 + 1 no desktop, com a quinta caixa centralizada e largura equivalente a uma coluna.
- Duas colunas mantidas em tablet quando há espaço suficiente e uma coluna abaixo de 640 px.
- Altura natural das caixas, com equilíbrio por linha e sem corte de conteúdo.
- Passos numerados de 1 a 4 com melhor distribuição em desktop, tablet e celular.
- Botões em largura integral no celular, campos com fonte de 16 px e área de toque adequada.
- Proteção contra transbordamento em títulos, botões e perguntas longas da FAQ.
- Ajustes de largura de leitura, espaçamento e tipografia para os novos textos extensos.

## Testes executados

- Revisão responsiva em 320, 360, 390, 430, 768, 1024, 1280, 1440 e 1920 px.
- Confirmação de ausência de rolagem horizontal, cortes de títulos, transbordamento de botões e conteúdo comprimido.
- Verificação visual da grade 2 + 2 + 1 no desktop e da coluna única no celular.
- Teste do menu móvel e da navegação interna em desktop.
- Abertura das sete perguntas frequentes e conferência do indicador visual.
- Teste do botão “Ver canais de contato” e validação de todos os destinos internos.
- Validação dos dois links solicitados de WhatsApp e confirmação de resposta HTTP 200 no destino.
- Teste de preenchimento dos campos, seleção de serviço e consentimento de privacidade, sem envio do formulário.
- Verificação de metadados, JSON-LD, arquivos locais, imagens, páginas preservadas e sintaxe dos arquivos JavaScript.
- Verificação do console do navegador sem erros ou avisos.
- Confirmação de regras para `prefers-reduced-motion` e foco visível.

## Limitações

- O formulário não foi submetido ao serviço externo e nenhuma mensagem de WhatsApp foi enviada, evitando transmissões reais durante a validação. Os campos, controles, links e destinos foram testados sem envio.
- A publicação não foi realizada em um provedor; o ZIP foi preparado com `index.html` na raiz para hospedagem estática, incluindo GitHub Pages.
