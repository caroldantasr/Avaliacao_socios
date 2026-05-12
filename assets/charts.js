// DOLF charts — sober, brand-aligned

window.DOLF = {};

DOLF.SAMPLE_SIZE = {
  diego: 5, olavo: 4, leonardo: 5, felipe: 5,
  bernardo: 1, bruno: 1, cid: 1, victor: 3
};

DOLF.barRow = ({ label, value, max = 5 }) => {
  const pct = Math.max(0, Math.min(1, value / max)) * 100;
  return `<div class="bar-row">
    <div class="label">${label}</div>
    <div class="track"><div class="fill" style="width:${pct}%"></div></div>
    <div class="val">${value.toFixed(2)}</div>
  </div>`;
};
DOLF.bars = (rows) => `<div class="bars">${rows.map(DOLF.barRow).join('')}</div>`;

DOLF.allbarsRow = ({ label, value }) => {
  const pct = (value/5)*100;
  return `<div class="qrow">
    <div class="l">${label}</div>
    <div class="t"><div class="f" style="width:${pct}%"></div></div>
    <div class="v">${value.toFixed(1)}</div>
  </div>`;
};
DOLF.allbars = (rows) => `<div class="allbars">${rows.map(DOLF.allbarsRow).join('')}</div>`;

DOLF.radar = (data) => {
  const labels = Object.keys(data);
  const values = Object.values(data);
  const N = labels.length;
  const VBW = 600, VBH = 500;
  const cx = VBW/2, cy = VBH/2, R = 150;
  const angle = (i) => (Math.PI*2*i)/N - Math.PI/2;
  const ring = (frac) => 'M ' + labels.map((_,i) => {
    const a = angle(i);
    return [cx+Math.cos(a)*R*frac, cy+Math.sin(a)*R*frac].join(',');
  }).join(' L ') + ' Z';
  const dataPts = values.map((v,i) => {
    const a = angle(i);
    const r = (v/5)*R;
    return [cx+Math.cos(a)*r, cy+Math.sin(a)*r];
  });
  const dataPath = 'M '+dataPts.map(p=>p.join(',')).join(' L ')+' Z';
  const axes = labels.map((_,i) => {
    const a = angle(i);
    return `<line class="axis" x1="${cx}" y1="${cy}" x2="${cx+Math.cos(a)*R}" y2="${cy+Math.sin(a)*R}" />`;
  }).join('');
  const grids = [0.25,0.5,0.75].map(f => `<path class="grid" d="${ring(f)}" />`).join('') +
    `<path class="grid grid-outer" d="${ring(1)}" />`;
  const dots = dataPts.map(p => `<circle class="data-dot" cx="${p[0]}" cy="${p[1]}" r="3.5" />`).join('');
  // Wrap long labels (with " · ") onto two lines using tspan
  const lblNodes = labels.map((lbl,i) => {
    const a = angle(i);
    const lx = cx+Math.cos(a)*(R+30);
    const ly = cy+Math.sin(a)*(R+30);
    const anchor = Math.abs(Math.cos(a))<0.2 ? 'middle' : Math.cos(a)>0 ? 'start' : 'end';
    const parts = lbl.split(' · ');
    let inner;
    if (parts.length === 2) {
      inner = `<tspan x="${lx}" dy="-0.5em">${parts[0]} ·</tspan><tspan x="${lx}" dy="1.1em">${parts[1]}</tspan>`;
    } else {
      inner = lbl;
    }
    return `<text x="${lx}" y="${ly}" text-anchor="${anchor}" dominant-baseline="middle" style="font-weight:500;fill:var(--ink-soft);font-size:12px">${inner}</text>`;
  }).join('');
  return `<svg class="radar" viewBox="0 0 ${VBW} ${VBH}" preserveAspectRatio="xMidYMid meet">${grids}${axes}<path class="data-fill" d="${dataPath}" />${dots}${lblNodes}</svg>`;
};

// Sample size note (no respondent count exposed)
DOLF.sampleNote = (n) => '';

// Verdict + band — monochrome scale (no green/orange/red)
DOLF.band = (v) => {
  if (v >= 4.30) return 'good';
  if (v >= 3.50) return 'neutral';
  if (v >= 2.50) return 'warn';
  return 'bad';
};
DOLF.verdict = (v) => {
  if (v >= 4.30) return { cls: 'good', txt: 'Acelerador' };
  if (v >= 3.50) return { cls: 'neutral', txt: 'Sólido' };
  if (v >= 2.50) return { cls: 'warn', txt: 'Atenção' };
  return { cls: 'bad', txt: 'Gargalo' };
};
