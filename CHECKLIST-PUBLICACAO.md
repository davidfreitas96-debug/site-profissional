# Checklist de publicação

Data de preparação: 16 de julho de 2026.

## Antes de enviar

- [x] Arquivos do site estão na raiz da pasta final.
- [x] Site permanece estático, sem etapa de build.
- [x] Links relativos locais foram verificados.
- [x] URLs antigas (`login/`, `documentos/`, `painel/` e demais) continuam funcionais.
- [x] Instrumentos não usam armazenamento, formulário ou requisição de rede.
- [x] Política de Privacidade descreve o comportamento atual.
- [x] Créditos dos instrumentos estão visíveis em `registros/` e `materiais/#fontes`.
- [x] Abertura animada do portal foi preservada.
- [x] Hero do site principal não força linha única no celular.
- [x] Capturas 360, 390, 412, tablet e desktop foram geradas.
- [x] Relatório técnico, fontes e sugestões futuras acompanham a pasta.

## Conferência do responsável

- [ ] Confirmar WhatsApp `+55 55 99100-0971`.
- [ ] Confirmar e-mail `psicologodavidfsantos@gmail.com`.
- [ ] Confirmar CRP `07/40292` e nome profissional.
- [ ] Confirmar regras reais de remarcação antes de acrescentar prazos específicos ao site.
- [ ] Confirmar rotina operacional de descarte de mensagens da caixa de e-mail.
- [ ] Conferir se o endereço de publicação final usa HTTPS.
- [ ] Testar uma submissão real do formulário apenas após publicar e confirmar o destinatário no FormSubmit.
- [ ] Não enviar dados clínicos reais durante o teste do formulário.
- [ ] Revisar a rede de Santa Maria e os links de urgência na data da publicação.

## Publicação em GitHub Pages ou hospedagem estática

1. Descompactar o ZIP.
2. Publicar o **conteúdo interno** da pasta, mantendo `index.html` na raiz.
3. Preservar maiúsculas/minúsculas e nomes de diretórios.
4. Não mover os arquivos HTML para outra subpasta.
5. Limpar cache/CDN ou aguardar propagação; os recursos receberam versões `20260716`.
6. Abrir diretamente as rotas `area-do-cliente/`, `registros/`, `privacidade.html`, `agenda/` e `documentos/`.
7. Verificar se a hospedagem respeita os caminhos sem backend.

Observação: `_headers` é usado por algumas hospedagens, mas GitHub Pages não aplica esse arquivo como configuração de cabeçalhos. Cabeçalhos de segurança devem ser configurados na plataforma efetiva quando houver suporte.

## Teste rápido pós-publicação

- [ ] Abrir o site em celular real e confirmar ausência de rolagem horizontal.
- [ ] Confirmar que o menu da página principal abre e fecha.
- [ ] Abrir o Espaço do Paciente e observar a animação curta.
- [ ] Tocar nos cinco itens da navegação inferior.
- [ ] Concluir “Três cenários”, copiar e limpar um texto fictício.
- [ ] Atualizar no meio de uma reflexão e confirmar que o texto desaparece.
- [ ] Buscar “escore” na biblioteca; deve aparecer uma leitura.
- [ ] Buscar “mediação” no glossário.
- [ ] Abrir uma pergunta da FAQ pelo teclado e por toque.
- [ ] Conferir foco visível e link “Pular para o conteúdo”.
- [ ] Conferir SAMU 192, CVV 188 e link oficial da rede local.
- [ ] Abrir a Política de Privacidade pelo portal e pelo rodapé.
- [ ] Verificar console sem erros 404 ou JavaScript.

## Manutenção recorrente

- [ ] A cada 3 meses: conferir links externos, contatos e horários da rede pública.
- [ ] A cada 6 meses: revisar normas do CFP, política, FormSubmit e Google Fonts.
- [ ] Ao adicionar qualquer ferramenta: revisar privacidade antes da publicação.
- [ ] Nunca adicionar analytics, salvamento ou IA aos relatos sem nova avaliação técnica, ética, jurídica e consentimento apropriado.
- [ ] Registrar data e responsável por cada revisão editorial.

