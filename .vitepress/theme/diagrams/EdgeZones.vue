<template>
  <figure class="ng-fig">
    <svg viewBox="0 0 640 300" role="img" aria-label="屏幕的 8 个边角区域示意，鼠标移到右上角停留 600 毫秒后执行显示桌面">
      <!-- 显示器 -->
      <rect class="bezel" x="80" y="30" width="480" height="226" rx="10" />
      <rect class="screen" x="92" y="42" width="456" height="196" />
      <rect class="stand" x="290" y="256" width="60" height="14" />
      <rect class="stand" x="256" y="270" width="128" height="6" rx="3" />

      <!-- 四条边 -->
      <rect class="edge" x="132" y="42" width="376" height="6" />
      <rect class="edge" x="132" y="232" width="376" height="6" />
      <rect class="edge" x="92" y="82" width="6" height="116" />
      <rect class="edge" x="542" y="82" width="6" height="116" />
      <!-- 四个角 -->
      <path class="corner" d="M95 82 V45 H132" />
      <path class="corner c-tr" d="M508 45 H545 V82" />
      <path class="corner" d="M545 198 V235 H508" />
      <path class="corner" d="M132 235 H95 V198" />

      <!-- 标签 -->
      <text class="lbl" x="70" y="28" text-anchor="end">左上角</text>
      <text class="lbl" x="320" y="22" text-anchor="middle">上边</text>
      <text class="lbl hot" x="572" y="28">右上角</text>
      <text class="lbl" x="572" y="146">右边</text>
      <text class="lbl" x="572" y="256">右下角</text>
      <text class="lbl" x="200" y="292" text-anchor="middle">下边</text>
      <text class="lbl" x="70" y="256" text-anchor="end">左下角</text>
      <text class="lbl" x="70" y="146" text-anchor="end">左边</text>

      <!-- 尺寸注释 -->
      <text class="note" x="320" y="70" text-anchor="middle">边：最外侧约 3 像素的细线</text>
      <text class="note" x="320" y="92" text-anchor="middle">角：沿两条边各延伸约 32 像素</text>

      <!-- 鼠标移到右上角并停留 -->
      <g class="cur">
        <path d="M0 0 L0 17 L4.5 13 L8 20 L11 18.5 L7.5 12 L13 12 Z" />
      </g>
      <circle class="ring" cx="538" cy="52" r="15" />
      <g class="toast">
        <rect x="372" y="118" width="164" height="34" rx="6" />
        <text x="454" y="140" text-anchor="middle">停留 600ms → 显示桌面</text>
      </g>
    </svg>
    <figcaption>8 个边角区域（橙色）。动画演示：鼠标顶到右上角停住，满 600 毫秒后触发。</figcaption>
  </figure>
</template>

<style scoped>
.bezel { fill: var(--ng-ink); }
.screen { fill: #fbfaf6; }
.stand { fill: var(--ng-ink); }
.edge { fill: var(--ng-accent); opacity: .55; }
.corner { fill: none; stroke: var(--ng-accent); stroke-width: 7; stroke-linecap: square; }
.lbl { font: 600 14px var(--vp-font-family-base); fill: var(--ng-ink); }
.lbl.hot { fill: var(--ng-accent); }
.note { font: 15px var(--ng-zh-hand); fill: var(--ng-muted); }
.cur path { fill: #fff; stroke: var(--ng-ink); stroke-width: 1.4; stroke-linejoin: round; }
.cur { animation: cur 6s ease-in-out infinite; }
.ring {
  fill: none; stroke: var(--ng-accent); stroke-width: 3;
  stroke-dasharray: 95; stroke-dashoffset: 95;
  transform-origin: 538px 52px; transform: rotate(-90deg);
  animation: ring 6s linear infinite;
}
.toast rect { fill: var(--ng-ink); }
.toast text { font: 13px var(--vp-font-family-base); fill: #fff; }
.toast { opacity: 0; animation: toast 6s ease infinite; }
.c-tr { animation: glow 6s ease infinite; }
@keyframes cur {
  0%, 8% { transform: translate(300px, 160px); }
  35%, 90% { transform: translate(538px, 46px); }
  100% { transform: translate(300px, 160px); }
}
@keyframes ring {
  0%, 38% { stroke-dashoffset: 95; opacity: 1; }
  58% { stroke-dashoffset: 0; opacity: 1; }
  66%, 100% { stroke-dashoffset: 0; opacity: 0; }
}
@keyframes toast {
  0%, 58% { opacity: 0; transform: translateY(6px); }
  63%, 88% { opacity: 1; transform: none; }
  95%, 100% { opacity: 0; }
}
@keyframes glow {
  0%, 56% { stroke-width: 7; }
  60%, 85% { stroke-width: 11; }
  100% { stroke-width: 7; }
}
</style>
