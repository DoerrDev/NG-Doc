<template>
  <figure class="ng-fig">
    <svg viewBox="0 0 720 230" role="img" aria-label="截图流程：触发后画面冻结，拖选或单击吸附选区，标注，最后复制、保存或贴到屏幕">
      <g v-for="(s, i) in steps" :key="i" :transform="`translate(${10 + i * 178} 0)`">
        <text class="num" x="0" y="24">{{ i + 1 }}</text>
        <text class="title" x="22" y="24">{{ s }}</text>
        <rect class="scr" x="0" y="38" width="160" height="104" rx="4" />
      </g>

      <!-- ① 画面冻结 -->
      <g transform="translate(10 0)">
        <rect class="win" x="14" y="52" width="92" height="62" />
        <rect class="win-bar" x="14" y="52" width="92" height="12" />
        <rect class="win" x="70" y="84" width="76" height="46" />
        <rect class="win-bar" x="70" y="84" width="76" height="10" />
        <rect class="freeze" x="0" y="38" width="160" height="104" rx="4" />
        <text class="snow" x="148" y="58" text-anchor="end">❄</text>
      </g>

      <!-- ② 拖选 / 吸附 -->
      <g transform="translate(188 0)">
        <rect class="dim" x="0" y="38" width="160" height="104" rx="4" />
        <rect class="win soft" x="14" y="52" width="92" height="62" />
        <rect class="sel grow" x="30" y="60" width="96" height="62" />
        <path class="cursor-x" d="M0 -7 V7 M-7 0 H7" />
        <text class="tiny" x="80" y="160" text-anchor="middle">拖选，或单击吸附窗口</text>
      </g>

      <!-- ③ 标注 + 工具栏 -->
      <g transform="translate(366 0)">
        <rect class="dim" x="0" y="38" width="160" height="104" rx="4" />
        <rect class="sel-fixed" x="30" y="52" width="100" height="58" />
        <rect class="mark" x="44" y="62" width="40" height="26" rx="2" />
        <path class="arrow-mark" d="M118 98 L92 78 M92 78 l9 1 M92 78 l2 8" />
        <g class="bar"><rect x="30" y="116" width="100" height="18" rx="3" />
          <circle v-for="k in 6" :key="k" :cx="36 + k * 13" cy="125" r="3.2" />
        </g>
        <text class="tiny" x="80" y="160" text-anchor="middle">标注后选区锁定</text>
      </g>

      <!-- ④ 输出 -->
      <g transform="translate(544 0)">
        <g class="out" v-for="(o, i) in outs" :key="o.k" :transform="`translate(10 ${48 + i * 30})`">
          <rect width="140" height="24" rx="4" />
          <text class="key" x="10" y="17">{{ o.k }}</text>
          <text class="what" x="132" y="17" text-anchor="end">{{ o.t }}</text>
        </g>
        <text class="tiny" x="80" y="160" text-anchor="middle">按 Esc 放弃</text>
      </g>

      <path v-for="i in 3" :key="'a' + i" class="flow" :d="`M${10 + i * 178 - 16} 90 h12`" />
      <text class="foot" x="360" y="210" text-anchor="middle">贴出来的图会浮在所有窗口最上层，见「贴图」</text>
    </svg>
  </figure>
</template>

<script setup lang="ts">
const steps = ['触发：画面冻结', '框选区域', '标注', '复制 / 保存 / 贴图']
const outs = [
  { k: 'Ctrl+C', t: '复制并退出' },
  { k: 'Ctrl+S', t: '保存 PNG' },
  { k: 'Ctrl+T', t: '贴到屏幕' },
]
</script>

<style scoped>
.num { font: 700 15px var(--vp-font-family-base); fill: #fff; paint-order: stroke; stroke: var(--ng-accent); stroke-width: 14px; stroke-linejoin: round; }
.title { font: 700 14px var(--vp-font-family-base); fill: var(--ng-ink); }
.scr { fill: #fbfaf6; stroke: var(--ng-ink); stroke-width: 1.8; }
.win { fill: #fff; stroke: var(--ng-rule); stroke-width: 1.4; }
.win.soft { stroke: #4d4dff; stroke-width: 2; animation: hl 4s ease infinite; }
.win-bar { fill: #e6e1d6; }
.freeze { fill: #cfe6ff; opacity: .35; }
.snow { font-size: 16px; fill: #4d8fd8; }
.dim { fill: #1c1b19; opacity: .28; }
.sel, .sel-fixed { fill: #fff; stroke: var(--ng-accent); stroke-width: 2; }
.sel { stroke-dasharray: 5 3; transform-origin: 30px 60px; animation: grow 4s ease-in-out infinite; }
.cursor-x { stroke: var(--ng-ink); stroke-width: 1.6; animation: cx 4s ease-in-out infinite; }
.mark { fill: none; stroke: #e0312b; stroke-width: 2; }
.arrow-mark { fill: none; stroke: #e0312b; stroke-width: 2; stroke-linecap: round; }
.bar rect { fill: var(--ng-ink); }
.bar circle { fill: #fff; opacity: .8; }
.out rect { fill: #fff; stroke: var(--ng-ink); stroke-width: 1.4; }
.key { font: 700 12px ui-monospace, Consolas, monospace; fill: var(--ng-accent); }
.what { font: 12px var(--vp-font-family-base); fill: var(--ng-ink); }
.tiny { font: 14px var(--ng-zh-hand); fill: var(--ng-muted); }
.foot { font: 15px var(--ng-zh-hand); fill: var(--ng-muted); }
.flow { stroke: var(--ng-ink); stroke-width: 2; fill: none; }
@keyframes grow {
  0%, 10% { transform: scale(0); opacity: 0; }
  12% { opacity: 1; }
  45%, 60% { transform: scale(1); opacity: 1; }
  66% { opacity: 0; }
  70%, 100% { opacity: 0; transform: scale(1); }
}
@keyframes cx {
  0%, 10% { transform: translate(30px, 60px); }
  45%, 60% { transform: translate(126px, 122px); }
  70% { transform: translate(60px, 80px); }
  100% { transform: translate(30px, 60px); }
}
@keyframes hl {
  0%, 66% { opacity: 0; }
  72%, 94% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
