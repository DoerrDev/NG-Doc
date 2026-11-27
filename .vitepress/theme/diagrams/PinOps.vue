<template>
  <figure class="ng-fig">
    <svg viewBox="0 0 640 250" role="img" aria-label="贴图操作：滚轮缩放，单按 Ctrl 折叠成小块再恢复，空格打开编辑工具栏">
      <rect class="desk" x="10" y="10" width="620" height="200" rx="6" />
      <rect class="doc" x="40" y="34" width="250" height="150" />
      <rect v-for="i in 6" :key="i" class="txt" x="58" :y="40 + i * 20" :width="i % 3 ? 200 : 140" height="7" />

      <g class="pin-wrap">
        <g class="pin">
          <rect class="glow" x="-92" y="-56" width="184" height="112" rx="3" />
          <rect class="img" x="-90" y="-54" width="180" height="108" />
          <path class="chart" d="M-70 30 L-40 4 L-10 16 L22 -20 L60 -8" />
          <circle class="dot" cx="22" cy="-20" r="4" />
          <rect class="ann" x="6" y="-36" width="34" height="30" rx="2" />
        </g>
        <text class="zoom" x="-84" y="-62">125%</text>
        <g class="bar">
          <rect x="-90" y="62" width="180" height="22" rx="4" />
          <circle v-for="k in 8" :key="k" :cx="-90 + k * 20" cy="73" r="4" />
        </g>
      </g>

      <g class="caps">
        <text class="cap c1" x="320" y="236" text-anchor="middle">滚轮：以鼠标为中心缩放</text>
        <text class="cap c2" x="320" y="236" text-anchor="middle">单按 Ctrl：折叠成 64 × 64 的小块</text>
        <text class="cap c3" x="320" y="236" text-anchor="middle">再按 Ctrl：恢复</text>
        <text class="cap c4" x="320" y="236" text-anchor="middle">空格：打开编辑工具栏（Esc 完成）</text>
      </g>
    </svg>
  </figure>
</template>

<style scoped>
.desk { fill: #fbfaf6; stroke: var(--ng-ink); stroke-width: 1.8; }
.doc { fill: #fff; stroke: var(--ng-rule); stroke-width: 1.2; }
.txt { fill: #e6e1d6; }
.pin-wrap { transform: translate(450px, 104px); }
.pin { animation: pin 10s ease-in-out infinite; }
.glow { fill: none; stroke: #8fd3ff; stroke-width: 4; opacity: .7; }
.img { fill: #fff; stroke: var(--ng-ink); stroke-width: 1.5; filter: drop-shadow(0 4px 6px rgba(0,0,0,.18)); }
.chart { fill: none; stroke: #4d4dff; stroke-width: 3; stroke-linejoin: round; }
.dot { fill: #4d4dff; }
.ann { fill: none; stroke: #e0312b; stroke-width: 2.4; }
.zoom { font: 700 12px ui-monospace, Consolas, monospace; fill: #fff; paint-order: stroke; stroke: var(--ng-ink); stroke-width: 8px; stroke-linejoin: round; opacity: 0; animation: zoom 10s ease infinite; }
.bar rect { fill: var(--ng-ink); }
.bar circle { fill: #fff; opacity: .85; }
.bar { opacity: 0; animation: bar 10s ease infinite; }
.cap { font: 17px var(--ng-zh-hand); fill: var(--ng-ink); opacity: 0; }
.c1 { animation: c1 10s ease infinite; }
.c2 { animation: c2 10s ease infinite; }
.c3 { animation: c3 10s ease infinite; }
.c4 { animation: c4 10s ease infinite; }
@keyframes pin {
  0%, 4% { transform: scale(1); }
  14%, 22% { transform: scale(1.25); }
  28%, 30% { transform: scale(1); }
  38%, 50% { transform: scale(.36, .59); }
  58%, 100% { transform: scale(1); }
}
@keyframes zoom { 0%, 8% { opacity: 0; } 12%, 24% { opacity: 1; } 28%, 100% { opacity: 0; } }
@keyframes bar { 0%, 72% { opacity: 0; } 76%, 94% { opacity: 1; } 100% { opacity: 0; } }
@keyframes c1 { 0%, 2% { opacity: 0; } 5%, 27% { opacity: 1; } 30%, 100% { opacity: 0; } }
@keyframes c2 { 0%, 30% { opacity: 0; } 33%, 50% { opacity: 1; } 53%, 100% { opacity: 0; } }
@keyframes c3 { 0%, 53% { opacity: 0; } 56%, 68% { opacity: 1; } 71%, 100% { opacity: 0; } }
@keyframes c4 { 0%, 71% { opacity: 0; } 74%, 94% { opacity: 1; } 97%, 100% { opacity: 0; } }
</style>
