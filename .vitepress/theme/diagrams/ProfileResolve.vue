<template>
  <figure class="ng-fig">
    <svg viewBox="0 0 640 330" role="img" aria-label="NextGestures 选择手势的顺序：先看前台程序是否交给程序自带手势，再找程序配置组，最后找 Global">
      <defs>
        <marker id="ng-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="#1c1b19" />
        </marker>
      </defs>

      <g class="box start"><rect x="190" y="10" width="260" height="40" rx="20" /><text x="320" y="36">画出手势 / 按下快捷键</text></g>
      <text class="hint" x="470" y="36">以当时的前台程序为准</text>

      <g class="box q"><rect x="150" y="80" width="340" height="42" rx="6" /><text x="320" y="107">这个程序设为「交给程序自带手势」？</text></g>
      <g class="box q"><rect x="150" y="162" width="340" height="42" rx="6" /><text x="320" y="189">它的程序配置组里有匹配的手势？</text></g>
      <g class="box q"><rect x="150" y="244" width="340" height="42" rx="6" /><text x="320" y="271">Global 里有匹配的手势？</text></g>

      <g class="box out off"><rect x="520" y="80" width="110" height="42" rx="6" /><text x="575" y="107">原样交给程序</text></g>
      <g class="box out ok"><rect x="520" y="162" width="110" height="42" rx="6" /><text x="575" y="189">执行它</text></g>
      <g class="box out ok"><rect x="520" y="244" width="110" height="42" rx="6" /><text x="575" y="271">执行它</text></g>
      <g class="box out none"><rect x="10" y="244" width="110" height="42" rx="6" /><text x="65" y="266">什么都不做</text><text class="tiny" x="65" y="280">（短按会补发点击）</text></g>

      <path class="arr" d="M320 50 V78" marker-end="url(#ng-arrow)" />
      <path class="arr" d="M320 122 V160" marker-end="url(#ng-arrow)" />
      <path class="arr" d="M320 204 V242" marker-end="url(#ng-arrow)" />
      <path class="arr" d="M490 101 H518" marker-end="url(#ng-arrow)" />
      <path class="arr" d="M490 183 H518" marker-end="url(#ng-arrow)" />
      <path class="arr" d="M490 265 H518" marker-end="url(#ng-arrow)" />
      <path class="arr" d="M150 265 H122" marker-end="url(#ng-arrow)" />

      <text class="yn" x="326" y="146">否</text>
      <text class="yn" x="326" y="228">否</text>
      <text class="yn" x="496" y="95">是</text>
      <text class="yn" x="496" y="177">是</text>
      <text class="yn" x="496" y="259">是</text>
      <text class="yn" x="130" y="259">否</text>

      <text class="hint" x="20" y="318">程序配置组一旦匹配，就不会再看 Global；两边的手势不会合并比较。</text>
    </svg>
  </figure>
</template>

<style scoped>
.box rect { fill: #fbfaf6; stroke: var(--ng-ink); stroke-width: 1.8; }
.box text { font: 600 14px var(--vp-font-family-base); fill: var(--ng-ink); text-anchor: middle; }
.box .tiny { font: 11px var(--vp-font-family-base); fill: var(--ng-muted); }
.start rect { fill: var(--ng-ink); }
.start text { fill: #fff; }
.ok rect { fill: #dff3ea; stroke: #2f8f62; }
.off rect { fill: #f1e9e4; stroke: var(--ng-muted); }
.none rect { fill: #f1f0ec; stroke: var(--ng-rule); }
.arr { fill: none; stroke: var(--ng-ink); stroke-width: 1.6; }
.yn { font: 15px var(--ng-zh-hand); fill: var(--ng-accent); }
.hint { font: 15px var(--ng-zh-hand); fill: var(--ng-muted); }
</style>
