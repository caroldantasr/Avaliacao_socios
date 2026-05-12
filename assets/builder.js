// DOLF — Deck builder v4 (4-slide consolidated, typographic letterhead)

window.DOLF.SAMPLE_SIZE = {diego:5,olavo:4,leonardo:5,felipe:5,bernardo:1,bruno:1,cid:1,victor:3};

window.DOLF.buildDeck = function(slug) {
  const d = DOLF_DATA[slug];
  if (!d) throw new Error('Unknown partner: '+slug);
  const n = DOLF.SAMPLE_SIZE[slug] || 0;
  const isPrelim = n <= 1;
  const catRows = Object.entries(d.cats).sort((a,b)=>b[1]-a[1]).map(([label, value]) => ({ label, value }));
  const an = window.DOLF_ANALYSIS && window.DOLF_ANALYSIS[slug];

  // Reusable letterhead chrome — uses actual DOLF logomark
  const lh = (right) => `
    <div class="chrome-top">
      <span class="chrome-mark">DOLF<span class="chrome-mark-small">Avaliação 2026.1</span></span>
      <span class="chrome-meta">${right}</span>
    </div>`;
  const ft = (label) => `
    <div class="chrome-foot">
      <span class="chrome-firm">DOLF Advogados · 2026.1</span>
      <span>${d.name}</span>
      <span>${label}</span>
    </div>`;

  // === 01 · Capa ===
  // Personality-themed image slots (one per partner — user drops a playful image)
  const personality = {
    diego:    { tag: 'jiu-jitsuca',         drop: 'Foto / caricatura no jiu-jitsu' },
    olavo:    { tag: 'pé na areia',         drop: 'Foto / caricatura na praia' },
    leonardo: { tag: 'beach tênis',         drop: 'Foto / caricatura no beach tênis' },
    felipe:   { tag: 'IA · Bitcoin',        drop: 'Foto / caricatura nerd de tecnologia' },
    bernardo: { tag: 'baterista',           drop: 'Foto / caricatura na bateria' },
    bruno:    { tag: 'galo no peito',       drop: 'Foto / caricatura torcida Atlético-G' },
    cid:      { tag: 'microfone na mão',    drop: 'Foto / caricatura cantando' },
    victor:   { tag: 'orador · OAB',        drop: 'Foto / caricatura discursando' }
  }[slug] || { tag: '', drop: 'Foto / caricatura' };

  const cover = `
    <div class="cover cover-portrait">
      <div class="cover-portrait-pane">
        <div class="portrait-frame">
          <image-slot
            id="portrait-${slug}"
            class="portrait-slot"
            shape="rect"
            placeholder="${personality.drop}"></image-slot>
          <div class="portrait-foot">
            <span>DOLF · ADVOGADOS</span>
            <span>${personality.tag.toUpperCase()}</span>
          </div>
        </div>
      </div>
      <div class="cover-band">
        <div class="cover-mark">DOLF<span class="cover-mark-small">Avaliação 2026.1</span></div>
        <div class="cover-meta">Diagnóstico individual</div>
      </div>
      <div class="cover-center cover-center-portrait">
        <div class="deck-kind">Sócio · Diagnóstico individual</div>
        <h1><span class="full-name">${d.firstName} <em>${d.lastName}</em></span></h1>
        <div class="subtitle">${d.archetype} — ${d.archetypeDesc}</div>
      </div>
      <div class="cover-bottom">
        <div class="seal">DOLF · 2026.1</div>
        <div>Diagnóstico individual</div>
      </div>
    </div>`;

  // === 02 · Quantitativo (radar + 21 indicadores na mesma página) ===
  const quant = `
    <div class="slide">
      ${lh('02 · Leitura quantitativa')}
      <p class="eyebrow">02 · Leitura quantitativa</p>
      <h1 class="slide-title">Distribuição <em>por bloco</em> e <em>por indicador</em></h1>
      <div class="quant-split">
        <div class="quant-left">
          <h3 class="kicker">Seis blocos avaliativos</h3>
          ${DOLF.radar(d.cats)}
          <div class="bars">${DOLF.bars(catRows)}</div>
        </div>
        <div class="quant-right">
          <h3 class="kicker">Vinte e um indicadores</h3>
          ${an ? DOLF.allbars(an.perQuestion.map(p => ({ label: p.label, value: p.avg }))) : '<p class="body small">Detalhamento indisponível.</p>'}
        </div>
      </div>
      ${ft('02')}
    </div>`;

  // === 03 · Diagnóstico integrado (forças + fragilidades + padrões + Hoje/Evolução) ===
  const diag = `
    <div class="slide warm">
      ${lh('03 · Diagnóstico integrado')}
      <p class="eyebrow">03 · Diagnóstico integrado</p>
      <h1 class="slide-title">Leitura <em>integrada</em></h1>
      <div class="diag-page">
        <div class="col">
          <h4>Como aparece</h4>
          <p>${d.sintese.aparece}</p>
          <h4>Forças a preservar</h4>
          <ul>${d.forcas.slice(0,4).map(f=>`<li><b>${f.t}.</b> ${f.d}</li>`).join('')}</ul>
        </div>
        <div class="col">
          <h4>Pontos de atenção</h4>
          <ul>${d.fragilidades.slice(0,4).map(f=>`<li><b>${f.t}.</b> ${f.d}</li>`).join('')}</ul>
          <h4>Padrões qualitativos</h4>
          <ul>${d.qualPatterns.map(p=>`<li><b>${p.tema}.</b> ${p.txt.split('.')[0]}.</li>`).join('')}</ul>
        </div>
      </div>
      <div class="hoje-evol">
        <div class="he-item">
          <div class="he-tag">Hoje</div>
          <div class="he-text">${d.hoje}</div>
        </div>
        <div class="he-item next">
          <div class="he-tag">Evolução</div>
          <div class="he-text">${d.futuro}</div>
        </div>
      </div>
      ${ft('03')}
    </div>`;

  // === 04 · Pontos de melhora ===
  const plano = `
    <div class="slide">
      ${lh('04 · Pontos de melhora')}
      <p class="eyebrow">04 · Pontos de melhora</p>
      <h1 class="slide-title">Pontos de <em>melhora</em></h1>
      <p class="body" style="max-width:1100px;margin-top:-12px;margin-bottom:18px">Quatro frentes de desenvolvimento — sugestões práticas, organizadas por prioridade. Não há prazo rígido: cabe ao sócio compor a ordem que faça sentido com sua agenda.</p>
      <div class="weeks">
        ${d.plan.map((w,i)=>`
          <div class="week">
            <div class="num">0${i+1}</div>
            <div class="label">Frente ${i+1}</div>
            <div class="focus">${w.focus}</div>
            <ul>${w.items.map(it=>`<li>${it}</li>`).join('')}</ul>
          </div>`).join('')}
      </div>
      ${ft('04')}
    </div>`;

  const slides = [
    { html: cover, label: '01 Capa' },
    { html: quant, label: '02 Quantitativo' },
    { html: diag,  label: '03 Diagnóstico' },
    { html: plano, label: '04 Plano' },
  ];
  return slides.map(s => `<section data-screen-label="${s.label}">${s.html}</section>`).join('\n');
};
