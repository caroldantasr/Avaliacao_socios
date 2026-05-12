/* DOLF — Dolphin marks
 * One unique pictogram per sócio. Single-color silhouettes drawn from
 * simple curves. They sit on a 200×200 viewBox.
 *
 * Design system: a stylized dolphin glyph whose pose/orientation expresses
 * the sócio's archetype. All marks use the same line weight, the same
 * minimal vocabulary (curve + small eye dot), and read as a small family.
 */

window.DOLPHIN_SVGS = {

  // Leonardo — Sócio-Humano. Calm, ascending arc, head up.
  leonardo: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="currentColor">
        <path d="M30 130 C 60 140, 90 138, 118 120 C 138 108, 152 88, 158 64 L 168 50 L 162 78 C 158 96, 150 112, 138 124 L 150 138 L 132 134 C 110 144, 80 148, 52 144 Z"/>
        <circle cx="146" cy="76" r="3"/>
      </g>
    </svg>`,

  // Felipe — Sócio-Mentor. Strong upward leap.
  felipe: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="currentColor">
        <path d="M40 158 C 50 110, 80 70, 130 48 L 152 30 L 148 54 C 142 78, 132 100, 118 118 C 102 138, 80 150, 56 158 L 70 168 L 50 168 Z"/>
        <circle cx="138" cy="58" r="3"/>
      </g>
    </svg>`,

  // Diego — Sócio-Fortaleza. Diving down — disciplined, into depth.
  diego: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="currentColor">
        <path d="M50 40 C 60 88, 90 128, 130 152 L 152 170 L 134 156 C 110 142, 88 122, 74 96 C 64 78, 56 60, 50 40 Z M 60 38 L 78 44 L 74 60 Z"/>
        <circle cx="138" cy="158" r="3"/>
      </g>
    </svg>`,

  // Bernardo — Sócio-Excelência-com-Fissura. Smooth curve with notch.
  bernardo: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="currentColor">
        <path d="M28 100 C 60 70, 100 60, 140 70 C 156 74, 168 84, 174 96 L 162 92 C 168 102, 168 110, 162 116 L 174 116 C 166 130, 150 140, 130 144 C 92 152, 56 144, 28 122 Z"/>
        <circle cx="158" cy="92" r="3"/>
      </g>
    </svg>`,

  // Victor — Sócio-Equilibrado. Horizontal, balanced, mid-line.
  victor: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="currentColor">
        <path d="M22 102 C 50 86, 88 80, 124 88 C 144 92, 158 102, 168 116 L 178 108 L 174 124 L 188 124 C 178 142, 158 154, 132 156 C 90 160, 50 144, 22 118 Z"/>
        <circle cx="152" cy="106" r="3"/>
      </g>
    </svg>`,

  // Olavo — Sócio-Conversa. Playful curl, looking back.
  olavo: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="currentColor">
        <path d="M58 154 C 30 132, 28 92, 56 70 C 86 46, 132 50, 156 80 L 174 70 L 166 92 L 180 100 C 168 130, 138 152, 102 156 C 88 158, 72 158, 58 154 Z"/>
        <circle cx="64" cy="92" r="3"/>
      </g>
    </svg>`,

  // Bruno — Sócio-Discreto. Reserved arc, low profile.
  bruno: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="currentColor">
        <path d="M22 130 C 50 108, 90 96, 130 102 C 148 104, 162 112, 172 124 L 182 116 L 178 134 C 168 144, 152 152, 132 154 C 88 156, 50 148, 22 136 Z"/>
        <circle cx="158" cy="120" r="2.5"/>
      </g>
    </svg>`,

  // Cid — Sócio-Disponível-Desorganizado. Forward thrust, scattered tail.
  cid: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="currentColor">
        <path d="M30 100 C 50 76, 88 64, 124 72 C 152 78, 170 96, 178 118 L 186 102 L 192 130 L 174 122 C 162 138, 144 148, 122 150 C 84 154, 48 138, 26 114 Z M 36 88 L 22 78 L 26 96 Z M 22 110 L 8 116 L 24 118 Z"/>
        <circle cx="156" cy="98" r="3"/>
      </g>
    </svg>`,

};
