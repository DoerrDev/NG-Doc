<template>
  <figure class="ng-fig">
    <svg viewBox="0 0 640 186" role="img" aria-label="滚轮只记录方向变化：上上上下下会被记录为先上后下两步">
      <text class="lbl" x="20" y="44">实际滚动</text>
      <g v-for="(d, i) in ticks" :key="i" class="tick" :class="{ dup: d.dup }" :style="{ animationDelay: `${i * 0.35}s` }">
        <g :transform="`translate(${130 + i * 62} 22)`">
          <rect width="46" height="34" rx="6" />
          <text x="23" y="24">{{ d.up ? '↑' : '↓' }}</text>
        </g>
      </g>

      <path class="brace" d="M130 66 Q130 80 160 80 H216 Q246 80 246 94 Q246 80 276 80 H332 Q362 80 362 66" />
      <path class="brace" d="M378 66 Q378 80 408 80 H433 Q463 80 463 94 Q463 80 493 80 H518 Q548 80 548 66" />

      <text class="lbl" x="20" y="126">录制结果</text>
      <g class="result">
        <g transform="translate(223 100)"><rect width="46" height="34" rx="6" /><text x="23" y="24">↑</text></g>
        <g transform="translate(440 100)"><rect width="46" height="34" rx="6" /><text x="23" y="24">↓</text></g>
        <text class="note" x="340" y="172">同方向连续滚多格只算一次，方向反转才多记一步</text>
      </g>
    </svg>
  </figure>
</template>

<script setup lang="ts">
const ticks = [
  { up: true, dup: false }, { up: true, dup: true }, { up: true, dup: true }, { up: true, dup: true },
  { up: false, dup: false }, { up: false, dup: true }, { up: false, dup: true },
]
</script>

<style scoped>
.lbl { font: 700 15px var(--vp-font-family-base); fill: var(--ng-ink); }
rect { fill: #fbfaf6; stroke: var(--ng-ink); stroke-width: 1.8; }
text { font: 700 20px var(--vp-font-family-base); fill: var(--ng-ink); text-anchor: middle; }
.lbl { text-anchor: start; }
.note { font: 15px var(--ng-zh-hand); fill: var(--ng-muted); text-anchor: middle; }
.tick { opacity: 0; animation: tick 7s ease infinite; }
.tick.dup { animation-name: tick-dup; }
.brace { fill: none; stroke: var(--ng-rule); stroke-width: 1.5; opacity: 0; animation: result 7s ease infinite; }
.result { opacity: 0; animation: result 7s ease infinite; }
.result rect { fill: #e8e8ff; stroke: #4d4dff; }
@keyframes tick {
  0% { opacity: 0; transform: translateY(-6px); }
  6%, 88% { opacity: 1; transform: none; }
  96%, 100% { opacity: 0; }
}
@keyframes tick-dup {
  0% { opacity: 0; transform: translateY(-6px); }
  6%, 52% { opacity: 1; transform: none; }
  60%, 88% { opacity: .25; }
  96%, 100% { opacity: 0; }
}
@keyframes result {
  0%, 50% { opacity: 0; }
  58%, 88% { opacity: 1; }
  96%, 100% { opacity: 0; }
}
</style>
