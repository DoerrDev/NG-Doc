<template>
  <figure class="ng-fig">
    <svg viewBox="0 0 640 300" role="img" aria-label="对比松开后执行与画到即执行：同样画一个 L，画到即执行在拐弯后立刻触发，松开后执行要等松开右键">
      <g v-for="(row, i) in rows" :key="row.key" :transform="`translate(0 ${i * 150})`" :class="row.key">
        <text class="title" x="20" y="34">{{ row.title }}</text>
        <text class="sub" x="20" y="56">{{ row.sub }}</text>

        <rect class="pad" x="190" y="12" width="200" height="124" rx="6" />
        <path class="ghost" d="M250 30 V112 H340" />
        <path class="stroke" d="M250 30 V112 H340" pathLength="100" />

        <!-- 鼠标：按住时右键变色 -->
        <g transform="translate(420 40)">
          <rect class="mouse" x="0" y="0" width="44" height="66" rx="22" />
          <path class="mouse-line" d="M22 0 V26 M0 26 H44" />
          <path class="rbtn" d="M22 0 A22 22 0 0 1 44 22 V26 H22 Z" />
          <text class="state press" x="22" y="88" text-anchor="middle">按住右键</text>
          <text class="state release" x="22" y="88" text-anchor="middle">松开</text>
        </g>

        <g class="badge">
          <rect x="500" y="50" width="122" height="40" rx="6" />
          <text x="561" y="76" text-anchor="middle">关闭标签页 ✓</text>
        </g>
      </g>
      <line class="sep" x1="20" y1="148" x2="620" y2="148" />
    </svg>
    <figcaption>同一条「L」手势：上面要等松开右键才执行；下面一画到足够相似就执行，之后继续画、松开都不会再执行。</figcaption>
  </figure>
</template>

<script setup lang="ts">
const rows = [
  { key: 'rel', title: '松开后', sub: '默认 · 看完整轨迹' },
  { key: 'imm', title: '画到即执行', sub: '更快 · 无法反悔' },
]
</script>

<style scoped>
.title { font: 700 18px var(--vp-font-family-base); fill: var(--ng-ink); }
.sub { font: 15px var(--ng-zh-hand); fill: var(--ng-muted); }
.pad { fill: #fbfaf6; stroke: var(--ng-rule); stroke-width: 1.5; stroke-dasharray: 5 4; }
.ghost { fill: none; stroke: var(--ng-rule); stroke-width: 3; stroke-dasharray: 2 6; stroke-linecap: round; }
.stroke {
  fill: none; stroke: #4d4dff; stroke-width: 5; stroke-linecap: round; stroke-linejoin: round;
  stroke-dasharray: 100; stroke-dashoffset: 100;
  filter: drop-shadow(0 0 4px #00caf2);
  animation: draw 5s ease-in-out infinite;
}
.mouse { fill: #fff; stroke: var(--ng-ink); stroke-width: 2; }
.mouse-line { stroke: var(--ng-ink); stroke-width: 2; fill: none; }
.rbtn { fill: var(--ng-accent); opacity: 0; animation: press 5s step-end infinite; }
.state { font: 14px var(--ng-zh-hand); fill: var(--ng-ink); }
.press { animation: press 5s step-end infinite; }
.release { opacity: 0; animation: release 5s step-end infinite; }
.badge rect { fill: var(--ng-ink); }
.badge text { font: 600 14px var(--vp-font-family-base); fill: #fff; }
.badge { opacity: 0; }
.rel .badge { animation: fire-rel 5s ease infinite; }
.imm .badge { animation: fire-imm 5s ease infinite; }
.sep { stroke: var(--ng-rule); stroke-width: 1; }
@keyframes draw {
  0%, 6% { stroke-dashoffset: 100; opacity: 1; }
  46% { stroke-dashoffset: 0; opacity: 1; }
  88% { stroke-dashoffset: 0; opacity: 1; }
  96%, 100% { stroke-dashoffset: 0; opacity: 0; }
}
@keyframes press { 0% { opacity: 1; } 54% { opacity: 0; } 92% { opacity: 1; } }
@keyframes release { 0% { opacity: 0; } 54% { opacity: 1; } 92% { opacity: 0; } }
@keyframes fire-rel {
  0%, 54% { opacity: 0; transform: scale(.9); }
  58%, 86% { opacity: 1; transform: none; }
  94%, 100% { opacity: 0; }
}
@keyframes fire-imm {
  0%, 33% { opacity: 0; transform: scale(.9); }
  37%, 86% { opacity: 1; transform: none; }
  94%, 100% { opacity: 0; }
}
.badge { transform-origin: 561px 70px; }
</style>
