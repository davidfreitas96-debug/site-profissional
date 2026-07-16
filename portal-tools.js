/*
  Reflexões guiadas. As respostas existem apenas nesta variável em memória.
  Não há armazenamento, envio, pontuação, interpretação ou diagnóstico.
*/
(() => {
  'use strict';

  const tools = {
    timeline: {
      title: 'Linha do tempo de experiências',
      finalQuestion: 'Que parte desta história você gostaria de compreender melhor em uma sessão?',
      steps: [
        ['Tema ou período', 'Que tema ou período você quer observar?', 'Ex.: mudança de cidade, período escolar, início de um trabalho. Você pode escolher algo leve.'],
        ['Acontecimentos', 'Quais acontecimentos, mudanças ou momentos parecem importantes?', 'Use texto, tópicos ou uma ordem aproximada. Não é necessário registrar acontecimentos dolorosos.'],
        ['Pessoas e contextos', 'Quem e quais lugares ou condições estavam presentes?', 'Ex.: família, escola, trabalho, amizades, bairro, recursos disponíveis.'],
        ['Antes e depois', 'O que mudou antes e depois desse período?', 'Você pode observar rotina, relações, sentimentos, atividades ou possibilidades.'],
        ['Recursos e dificuldades', 'O que ajudou, o que foi aprendido e o que permaneceu difícil?', 'Não é preciso transformar tudo em aprendizado. Apenas registre o que fizer sentido.'],
        ['Pergunta para a sessão', 'Que pergunta ficou aberta ao olhar para essa linha do tempo?', 'Ex.: por que essa mudança ainda participa das minhas escolhas?']
      ]
    },
    life: {
      title: 'Meu cenário de vida',
      finalQuestion: 'O que este cenário ajuda você a perceber sobre sua vida hoje?',
      steps: [
        ['Pessoas importantes', 'Quais pessoas são importantes no seu cotidiano hoje?', 'Você não precisa identificar ninguém por nome. Pode escrever “uma amiga”, “família” ou “colega”.'],
        ['Lugares importantes', 'Quais lugares fazem parte da sua vida?', 'Casa, trabalho, escola, universidade, rua, serviço de saúde, espaços culturais ou outros.'],
        ['Atividades', 'Quais atividades ocupam sua rotina?', 'Inclua trabalho de cuidado, descanso, deslocamentos e tarefas invisíveis, se forem importantes.'],
        ['Apoios', 'Quais relações, serviços, lugares ou atividades oferecem algum apoio?', 'Apoio não precisa vir apenas de amigos ou familiares.'],
        ['Consumo de energia', 'Que situações vêm consumindo mais energia?', 'Você pode responder de forma ampla, sem relatar detalhes íntimos.'],
        ['Aproximar', 'O que está distante, mas você gostaria de aproximar?', 'Pode ser uma pessoa, atividade, direito, serviço, possibilidade ou parte de você.'],
        ['Reorganizar', 'O que está próximo, mas você gostaria de reorganizar?', 'Não é preciso decidir agora como mudar.']
      ]
    },
    three: {
      title: 'Três cenários',
      finalQuestion: 'Qual conversa pode ajudar a transformar o cenário possível em experiência?',
      steps: [
        ['Cenário atual', 'O que você tem feito hoje diante desta situação?', 'Descreva o que acontece sem se julgar.'],
        ['Cenário ideal', 'Como seria uma situação perfeita, mesmo que ainda distante?', 'O ideal ajuda a enxergar desejos; ele não vira uma obrigação.'],
        ['Cenário possível', 'Qual mudança pequena e realista está entre o atual e o ideal?', 'Este é o centro do exercício: algo diferente, porém possível nas condições de hoje.'],
        ['Recursos', 'De que recursos concretos essa mudança precisaria?', 'Tempo, informação, dinheiro, transporte, descanso ou outro recurso.'],
        ['Apoio', 'Que apoio já existe ou precisa ser construído?', 'Pessoas, serviços, direitos, espaços ou conhecimentos.'],
        ['Primeiro passo', 'Qual poderia ser um primeiro passo observável?', 'Escolha uma ação pequena, sem promessa de resultado.'],
        ['Dificuldade previsível', 'O que provavelmente pode dificultar esse passo?', 'Antecipar uma barreira não é pessimismo; ajuda a planejar.'],
        ['Plano alternativo', 'Se o primeiro plano não funcionar, que alternativa respeitaria suas condições?', 'Uma alternativa pode ser pausar, pedir ajuda ou diminuir o passo.']
      ]
    },
    possible: {
      title: 'Criação de cenários possíveis',
      finalQuestion: 'Que possibilidade merece ser discutida com mais cuidado, sem virar uma resposta automática?',
      steps: [
        ['Situação', 'O que torna esta situação difícil?', 'Descreva apenas o necessário para pensar.'],
        ['Pensamentos', 'O que você costuma pensar quando ela acontece?', 'Registre palavras ou frases que aparecem, sem avaliar se estão “certas”.'],
        ['Sentimentos', 'O que você sente ou percebe no corpo?', 'Se nomear for difícil, você pode escrever apenas “não sei ainda”.'],
        ['Ações', 'O que você costuma fazer?', 'Observe ações, silêncios, afastamentos ou tentativas de resolver.'],
        ['Ajuda parcial', 'O que ajuda um pouco?', 'Pequenos alívios e apoios também contam.'],
        ['Apoio possível', 'Quem ou o que poderia oferecer apoio?', 'Inclua serviços e condições, não somente pessoas próximas.'],
        ['Outra ação', 'Qual outra forma de agir poderia ser experimentada?', 'Não procure uma solução perfeita; pense em uma experiência segura.'],
        ['Avanço pequeno', 'O que seria um avanço pequeno, mas real?', 'Um avanço pode ser compreender melhor, conversar ou organizar um recurso.']
      ]
    },
    context: {
      title: 'Minha experiência em contexto',
      finalQuestion: 'O que pode mudar em você, nas relações ou nas condições ao redor?',
      steps: [
        ['Minha experiência', 'O que aconteceu com você e como isso foi vivido?', 'Fale a partir do seu ponto de vista, sem precisar provar nada.'],
        ['Relações e condições', 'Quem, quais lugares, atividades e condições participam disso?', 'Observe proximidades, recursos, barreiras e relações de poder.'],
        ['Mundo mais amplo', 'Que normas, expectativas, desigualdades ou formas de viver aparecem nessa experiência?', 'Ex.: expectativas sobre trabalho, gênero, sucesso, família ou produtividade.'],
        ['Possibilidades de mudança', 'O que poderia mudar em você, nas relações ou nas condições ao redor?', 'Nem toda mudança depende apenas de esforço individual.']
      ]
    },
    since: {
      title: 'O que mudou desde o último encontro?',
      finalQuestion: 'Qual desses pontos você gostaria de priorizar na próxima sessão?',
      steps: [
        ['Situações', 'Que situações importantes aconteceram desde o último encontro?', 'Use tópicos curtos, se preferir.'],
        ['Sentimentos', 'Que sentimentos você percebeu?', 'Não é necessário nomear tudo com precisão.'],
        ['Pensamentos', 'Que pensamentos retornaram com frequência?', 'Registre apenas os que parecem importantes para conversar.'],
        ['Rotina', 'O que mudou na rotina?', 'Sono, alimentação, trabalho, estudo, descanso, relações ou deslocamentos.'],
        ['Algo que ajudou', 'O que ajudou, mesmo que um pouco?', 'Inclua recursos internos, pessoas, lugares, serviços e condições.'],
        ['Algo que piorou', 'O que deixou as coisas mais difíceis?', 'Você pode pular esta pergunta.'],
        ['Compreender', 'O que você deseja compreender melhor?', 'Uma situação, repetição, conflito, emoção ou escolha.'],
        ['Pergunta', 'Que pergunta você quer levar para a próxima sessão?', 'Não é necessário encontrar a resposta agora.']
      ]
    },
    questions: {
      title: 'Perguntas para levar à sessão',
      finalQuestion: 'Qual pergunta parece mais importante para começar a conversa?',
      steps: [{
        label: 'Seleção de perguntas',
        question: 'Quais perguntas você gostaria de levar à sessão?',
        help: 'Marque quantas quiser. Somente as perguntas selecionadas entram no resumo.',
        type: 'choices',
        choices: [
          'Por que esta situação se repete?',
          'Quando isso começou a fazer sentido para mim?',
          'Em quais contextos isso fica mais intenso?',
          'O que muda quando estou com determinadas pessoas?',
          'O que venho tentando fazer?',
          'O que já ajudou em algum momento?',
          'O que parece impossível hoje?',
          'Que apoio está faltando?',
          'Que contradição estou vivendo?',
          'O que desejo transformar?',
          'O que ainda não consegui dizer?'
        ]
      }]
    },
    supports: {
      title: 'Mapa de apoios e recursos',
      finalQuestion: 'Qual apoio já pode ser acionado e qual ainda precisa ser construído?',
      steps: [
        ['Pessoas', 'Que pessoas podem oferecer algum tipo de apoio?', 'Não use nomes completos em dispositivo compartilhado.'],
        ['Serviços', 'Que serviços fazem ou poderiam fazer parte da sua rede?', 'UBS, CAPS, escola, assistência social, espaços jurídicos ou outros.'],
        ['Lugares', 'Em quais lugares você encontra segurança, pertencimento ou possibilidade?', 'Podem ser lugares públicos ou comunitários.'],
        ['Atividades', 'Que atividades ajudam a sustentar sua vida?', 'Trabalho, arte, esporte, espiritualidade, descanso, estudo, cuidado ou outras.'],
        ['Conhecimentos', 'Que conhecimentos ou informações funcionam como recurso?', 'Informações sobre direitos, saúde, território ou uma habilidade prática.'],
        ['Direitos', 'Que direitos podem ser importantes nesta situação?', 'Se não souber, registre o que gostaria de pesquisar ou perguntar.'],
        ['Recursos materiais', 'Que recursos materiais existem ou fazem falta?', 'Renda, moradia, transporte, alimentação, tecnologia, tempo.'],
        ['Capacidades', 'Que capacidades você já desenvolveu?', 'Algo aprendido em outras situações pode voltar a ajudar.'],
        ['Construir', 'Que apoio ainda precisa ser construído?', 'Pense em um primeiro contato ou pergunta possível.']
      ]
    },
    career: {
      title: 'Explorar caminhos profissionais',
      finalQuestion: 'Que experiência pequena pode produzir informação real sobre um caminho?',
      steps: [
        ['Curiosidade', 'Que atividades despertam curiosidade?', 'Não precisa ser uma profissão; observe tarefas e temas.'],
        ['Desgaste', 'Que atividades costumam causar desgaste?', 'Diferencie o conteúdo da atividade das condições em que ela acontece, se possível.'],
        ['Valores', 'O que é importante para você numa vida de estudo e trabalho?', 'Ex.: estabilidade, criação, contribuição social, autonomia, tempo.'],
        ['Experiências', 'Que experiências profissionais, escolares ou de vida foram marcantes?', 'Inclua experiências informais e trabalho de cuidado.'],
        ['Habilidades atuais', 'Que habilidades você já desenvolveu?', 'Habilidades são construídas; não são destinos naturais.'],
        ['Habilidades futuras', 'O que você gostaria de aprender ou desenvolver?', 'Considere tempo e acesso necessários.'],
        ['Condições concretas', 'Quais são as condições concretas atuais?', 'Tempo, renda, local, transporte, cuidado de outras pessoas, acesso a estudo.'],
        ['Expectativas', 'Que expectativas de outras pessoas participam da escolha?', 'Você pode reconhecer expectativas sem precisar aceitá-las.'],
        ['Possibilidades', 'Que possibilidades você gostaria de conhecer melhor?', 'Liste cursos, áreas, pessoas, instituições ou formas de trabalho.'],
        ['Experiência pequena', 'Que pequena experiência pode aproximar você de uma possibilidade?', 'Conversar com alguém da área, visitar um local, fazer uma aula aberta ou pesquisar uma rotina.'],
        ['Pergunta aberta', 'Que pergunta permanece aberta?', 'Escolher não é adivinhar o futuro; projetos podem ser revistos.']
      ]
    }
  };

  const starters = {
    timeline: ['um começo', 'uma mudança', 'alguém importante', 'algo que ajudou'],
    life: ['família', 'trabalho ou estudo', 'um lugar', 'uma atividade', 'um serviço'],
    three: ['o que faço hoje', 'o que desejo', 'o que cabe agora', 'um apoio'],
    possible: ['quando acontece', 'o que pesa', 'o que ajuda', 'uma alternativa'],
    context: ['minha história', 'uma relação', 'uma condição concreta', 'uma expectativa social'],
    since: ['algo novo', 'algo que se repetiu', 'uma pequena mudança', 'uma dúvida'],
    supports: ['já existe', 'preciso aproximar', 'preciso pesquisar', 'posso pedir ajuda'],
    career: ['curiosidade', 'experiência', 'condição real', 'barreira', 'próximo teste']
  };

  const workspace = document.querySelector('[data-tool-workspace]');
  if (!workspace) return;

  const cards = document.querySelector('[data-tool-list]');
  const title = workspace.querySelector('[data-tool-title]');
  const progress = workspace.querySelector('[data-tool-progress]');
  const progressText = workspace.querySelector('[data-tool-progress-text]');
  const questionArea = workspace.querySelector('[data-tool-question-area]');
  const summary = workspace.querySelector('[data-tool-summary]');
  const back = workspace.querySelector('[data-tool-back]');
  const skip = workspace.querySelector('[data-tool-skip]');
  const next = workspace.querySelector('[data-tool-next]');
  const exit = workspace.querySelector('[data-tool-exit]');
  const copy = workspace.querySelector('[data-tool-copy]');
  const clear = workspace.querySelector('[data-tool-clear]');
  const status = workspace.querySelector('[data-tool-status]');

  let state = null;

  const stepObject = (step) => Array.isArray(step)
    ? { label: step[0], question: step[1], help: step[2], type: 'text' }
    : step;

  const saveCurrent = () => {
    if (!state || state.finished) return;
    const step = stepObject(tools[state.id].steps[state.index]);
    if (step.type === 'choices') {
      state.answers[state.index] = Array.from(questionArea.querySelectorAll('input:checked')).map((input) => input.value);
    } else {
      state.answers[state.index] = questionArea.querySelector('textarea')?.value || '';
    }
  };

  const renderQuestion = () => {
    const tool = tools[state.id];
    const step = stepObject(tool.steps[state.index]);
    state.finished = false;
    title.textContent = tool.title;
    progress.style.width = `${((state.index + 1) / tool.steps.length) * 100}%`;
    progressText.textContent = `Etapa ${state.index + 1} de ${tool.steps.length}`;
    summary.hidden = true;
    questionArea.hidden = false;
    copy.hidden = true;
    clear.hidden = true;
    back.disabled = state.index === 0;
    skip.hidden = false;
    next.textContent = state.index === tool.steps.length - 1 ? 'Ver resumo' : 'Continuar';
    questionArea.replaceChildren();
    questionArea.className = 'portal-question-stage';

    const label = document.createElement('label');
    label.className = 'portal-question';
    label.id = 'tool-question-label';
    label.textContent = step.question;
    questionArea.append(label);
    if (step.help) {
      const help = document.createElement('p');
      help.className = 'portal-question-help';
      help.id = 'tool-question-help';
      help.textContent = step.help;
      questionArea.append(help);
    }

    if (step.type === 'choices') {
      const list = document.createElement('div');
      list.className = 'portal-choice-list';
      const selected = new Set(state.answers[state.index] || []);
      step.choices.forEach((choice, choiceIndex) => {
        const choiceLabel = document.createElement('label');
        choiceLabel.className = 'portal-choice';
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.value = choice;
        input.checked = selected.has(choice);
        input.id = `tool-choice-${choiceIndex}`;
        const text = document.createElement('span');
        text.textContent = choice;
        choiceLabel.append(input, text);
        list.append(choiceLabel);
      });
      questionArea.append(list);
      list.querySelector('input')?.focus();
    } else {
      label.htmlFor = 'tool-answer';
      const modes = document.createElement('div');
      modes.className = 'portal-response-modes';
      modes.setAttribute('aria-label', 'Escolha como prefere responder');
      const modeOptions = [
        ['frase', 'Uma frase'],
        ['topicos', 'Em tópicos'],
        ['mental', 'Só pensar']
      ];
      modeOptions.forEach(([mode, modeLabel], index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'portal-response-mode';
        button.dataset.responseMode = mode;
        button.setAttribute('aria-pressed', String(index === 0));
        button.textContent = modeLabel;
        modes.append(button);
      });
      questionArea.append(modes);

      const textarea = document.createElement('textarea');
      textarea.id = 'tool-answer';
      textarea.value = state.answers[state.index] || '';
      textarea.setAttribute('aria-describedby', step.help ? 'tool-question-help' : '');
      textarea.placeholder = 'Resposta opcional. Você pode pular esta etapa.';
      const promptOptions = starters[state.id] || [];
      if (promptOptions.length) {
        const promptLabel = document.createElement('p');
        promptLabel.className = 'portal-prompt-label';
        promptLabel.textContent = 'Se ajudar a começar, toque em uma pista opcional:';
        const chips = document.createElement('div');
        chips.className = 'portal-prompt-chips';
        promptOptions.forEach((prompt) => {
          const chip = document.createElement('button');
          chip.type = 'button';
          chip.className = 'portal-prompt-chip';
          chip.textContent = prompt;
          chip.addEventListener('click', () => {
            const addition = textarea.value.trim() ? `\n• ${prompt}: ` : `${prompt}: `;
            textarea.value += addition;
            textarea.hidden = false;
            textarea.focus();
            textarea.setSelectionRange(textarea.value.length, textarea.value.length);
          });
          chips.append(chip);
        });
        questionArea.append(promptLabel, chips);
      }
      questionArea.append(textarea);
      const mentalNote = document.createElement('p');
      mentalNote.className = 'portal-mental-note';
      mentalNote.hidden = true;
      mentalNote.textContent = 'Tudo bem apenas pensar. Esta etapa ficará marcada no resumo como realizada sem registro.';
      questionArea.append(mentalNote);

      modes.querySelectorAll('[data-response-mode]').forEach((button) => {
        button.addEventListener('click', () => {
          modes.querySelectorAll('[data-response-mode]').forEach((candidate) => candidate.setAttribute('aria-pressed', String(candidate === button)));
          const mode = button.dataset.responseMode;
          mentalNote.hidden = mode !== 'mental';
          textarea.hidden = mode === 'mental';
          if (mode === 'mental') textarea.value = 'Reflexão feita mentalmente, sem registro.';
          if (mode === 'topicos') {
            if (textarea.value === 'Reflexão feita mentalmente, sem registro.') textarea.value = '';
            if (!textarea.value.trim()) textarea.value = '• ';
            textarea.placeholder = '• Primeiro ponto\n• Outro ponto';
            textarea.hidden = false;
            textarea.focus();
          }
          if (mode === 'frase') {
            if (textarea.value === 'Reflexão feita mentalmente, sem registro.') textarea.value = '';
            textarea.placeholder = 'Escreva uma frase ou algumas palavras. Resposta opcional.';
            textarea.hidden = false;
            textarea.focus();
          }
        });
      });
      textarea.addEventListener('keydown', (event) => {
        const topicMode = modes.querySelector('[data-response-mode="topicos"]').getAttribute('aria-pressed') === 'true';
        if (topicMode && event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          const start = textarea.selectionStart;
          textarea.setRangeText('\n• ', start, textarea.selectionEnd, 'end');
        }
      });
      textarea.focus();
    }
    status.textContent = '';
  };

  const buildSummaryText = () => {
    const tool = tools[state.id];
    const lines = [tool.title, ''];
    tool.steps.forEach((rawStep, index) => {
      const step = stepObject(rawStep);
      const answer = state.answers[index];
      const value = Array.isArray(answer) ? answer.join('\n- ') : answer;
      lines.push(`${step.label}:`);
      lines.push(value ? `${Array.isArray(answer) ? '- ' : ''}${value}` : '— questão pulada —');
      lines.push('');
    });
    lines.push(`Pergunta para levar à sessão: ${tool.finalQuestion}`);
    lines.push('');
    lines.push('Este resumo foi produzido no seu navegador e não foi enviado ao psicólogo.');
    return lines.join('\n');
  };

  const renderSummary = () => {
    const tool = tools[state.id];
    state.finished = true;
    title.textContent = `${tool.title}: seu resumo`;
    progress.style.width = '100%';
    progressText.textContent = 'Reflexão concluída';
    questionArea.hidden = true;
    summary.hidden = false;
    summary.replaceChildren();
    summary.className = `portal-summary portal-summary--${state.id}`;

    tool.steps.forEach((rawStep, index) => {
      const step = stepObject(rawStep);
      const item = document.createElement('div');
      item.className = 'portal-summary-item';
      if (state.id === 'three' && step.label === 'Cenário possível') item.classList.add('is-key');
      const heading = document.createElement('strong');
      heading.textContent = step.label;
      const value = document.createElement('p');
      const answer = state.answers[index];
      value.textContent = Array.isArray(answer) ? (answer.join('\n• ') ? `• ${answer.join('\n• ')}` : 'Questão pulada.') : (answer || 'Questão pulada.');
      item.append(heading, value);
      summary.append(item);
    });

    const finalItem = document.createElement('div');
    finalItem.className = 'portal-summary-item';
    const finalHeading = document.createElement('strong');
    finalHeading.textContent = 'Pergunta para levar à sessão';
    const finalText = document.createElement('p');
    finalText.textContent = tool.finalQuestion;
    finalItem.append(finalHeading, finalText);
    summary.append(finalItem);

    const privacy = document.createElement('p');
    privacy.className = 'portal-tool-safety';
    privacy.textContent = 'Este material não foi enviado ao psicólogo. Ao atualizar ou fechar a página, ele desaparece.';
    summary.append(privacy);

    back.disabled = false;
    skip.hidden = true;
    next.textContent = 'Voltar às ferramentas';
    copy.hidden = false;
    clear.hidden = false;
    summary.focus({ preventScroll: true });
  };

  const openTool = (id) => {
    if (!tools[id]) return;
    if (!state || state.id !== id) state = { id, index: 0, answers: [], finished: false };
    cards.hidden = true;
    workspace.hidden = false;
    workspace.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (state.finished) renderSummary();
    else renderQuestion();
  };

  document.querySelectorAll('[data-start-tool]').forEach((button) => {
    button.addEventListener('click', () => openTool(button.dataset.startTool));
  });

  next.addEventListener('click', () => {
    if (state.finished) {
      workspace.hidden = true;
      cards.hidden = false;
      cards.focus({ preventScroll: true });
      cards.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    saveCurrent();
    if (state.index < tools[state.id].steps.length - 1) {
      state.index += 1;
      renderQuestion();
    } else renderSummary();
  });

  back.addEventListener('click', () => {
    if (state.finished) {
      state.finished = false;
      state.index = tools[state.id].steps.length - 1;
      renderQuestion();
      return;
    }
    saveCurrent();
    if (state.index > 0) {
      state.index -= 1;
      renderQuestion();
    }
  });

  skip.addEventListener('click', () => {
    state.answers[state.index] = stepObject(tools[state.id].steps[state.index]).type === 'choices' ? [] : '';
    if (state.index < tools[state.id].steps.length - 1) {
      state.index += 1;
      renderQuestion();
    } else renderSummary();
  });

  exit.addEventListener('click', () => {
    saveCurrent();
    workspace.hidden = true;
    cards.hidden = false;
    const resume = document.querySelector(`[data-start-tool="${state.id}"]`);
    resume.textContent = 'Retomar reflexão';
    resume.focus({ preventScroll: true });
    status.textContent = 'Reflexão pausada. As respostas permanecem somente nesta página até ela ser atualizada ou fechada.';
  });

  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(buildSummaryText());
      status.textContent = 'Resumo copiado. Revise antes de colar em qualquer lugar.';
    } catch (error) {
      status.textContent = 'O navegador não permitiu copiar. Selecione manualmente o resumo acima.';
    }
  });

  clear.addEventListener('click', () => {
    const id = state.id;
    state = { id, index: 0, answers: [], finished: false };
    document.querySelector(`[data-start-tool="${id}"]`).textContent = 'Começar reflexão';
    status.textContent = 'Tudo foi limpo desta página.';
    renderQuestion();
  });
})();
