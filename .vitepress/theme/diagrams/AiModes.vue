<template>
  <figure class="ng-fig">
    <svg viewBox="0 0 680 270" role="img" aria-label="AI 动作的两种结果处理：替换选中文字会直接改写原文并弹出说明；气泡显示把结果放在选区旁的卡片里">
      <!-- 左：替换选中文字 -->
      <text class="title" x="20" y="28">替换选中文字</text>
      <text class="sub" x="140" y="28">例如「AI 润色」</text>
      <rect class="editor" x="20" y="42" width="310" height="96" rx="5" />
      <rect class="editor-bar" x="20" y="42" width="310" height="16" rx="5" />
      <g class="src-r">
        <rect class="hl" x="34" y="74" width="282" height="24" />
        <text class="txt" x="40" y="91">i want to ask u about the 会议</text>
      </g>
      <text class="txt new" x="40" y="91">I want to ask you about the meeting</text>
      <rect class="caret" x="301" y="76" width="2" height="20" />
      <g class="spin s1"><circle cx="322" cy="66" r="7" /></g>
      <g class="notes">
        <rect x="70" y="150" width="260" height="96" rx="6" />
        <text class="ntitle" x="84" y="172">修改說明</text>
        <text class="nline" x="84" y="194">「u」→「you」：正式书写用完整拼写</text>
        <text class="nline" x="84" y="214">「会议」→「meeting」</text>
        <text class="nfoot" x="84" y="236">已替换原文 · Esc 关闭</text>
      </g>

      <!-- 右：气泡显示 -->
      <text class="title" x="360" y="28">气泡显示</text>
      <text class="sub" x="444" y="28">例如「AI 翻译」</text>
      <rect class="editor" x="360" y="42" width="300" height="96" rx="5" />
      <rect class="editor-bar" x="360" y="42" width="300" height="16" rx="5" />
      <rect class="hl" x="374" y="74" width="270" height="24" />
      <text class="txt" x="380" y="91">Where is the nearest station?</text>
      <g class="spin s2"><circle cx="652" cy="66" r="7" /></g>
      <g class="bubble">
        <path d="M410 150 h250 a6 6 0 0 1 6 6 v84 a6 6 0 0 1 -6 6 h-250 a6 6 0 0 1 -6 -6 v-84 a6 6 0 0 1 6 -6 z M440 150 l10 -10 l10 10" />
        <text class="ntitle" x="420" y="172">AI 结果</text>
        <text class="nline type" x="420" y="198">最近的车站在哪里？</text>
        <text class="nfoot" x="420" y="236">可复制结果 · Esc 关闭</text>
        <g transform="translate(600 220)"><rect class="copy" width="52" height="22" rx="4" /><text class="copyt" x="26" y="15">复制</text></g>
      </g>
    </svg>
    <figcaption>替换时如果选区不能写入（网页正文、只读文档等），会自动改为右边的卡片显示。</figcaption>
  </figure>
</template>

<style scoped>
.title { font: 700 16px var(--vp-font-family-base); fill: var(--ng-ink); }
.sub { font: 13px var(--vp-font-family-base); fill: var(--ng-muted); }
.editor { fill: #fff; stroke: var(--ng-ink); stroke-width: 1.8; }
.editor-bar { fill: #e6e1d6; }
.hl { fill: #b9d7ff; }
.txt { font: 14px var(--vp-font-family-base); fill: var(--ng-ink); }
.src-r { animation: src 8s ease infinite; }
.new { opacity: 0; animation: newt 8s ease infinite; }
.caret { fill: var(--ng-ink); opacity: 0; animation: newt 8s steps(1) infinite; }
.spin circle { fill: none; stroke: var(--ng-accent); stroke-width: 2.5; stroke-dasharray: 30 14; }
.spin { opacity: 0; }
.s1 { transform-origin: 322px 66px; animation: spin1 8s linear infinite; }
.s2 { transform-origin: 652px 66px; animation: spin1 8s linear infinite; }
.notes rect, .bubble path { fill: #fff; stroke: var(--ng-ink); stroke-width: 1.6; filter: drop-shadow(0 3px 5px rgba(0,0,0,.12)); }
.ntitle { font: 700 14px var(--vp-font-family-base); fill: var(--ng-ink); }
.nline { font: 13px var(--vp-font-family-base); fill: var(--ng-ink); }
.nfoot { font: 12px var(--vp-font-family-base); fill: var(--ng-muted); }
.copy { fill: var(--ng-ink); }
.copyt { font: 12px var(--vp-font-family-base); fill: #fff; text-anchor: middle; }
.notes, .bubble { opacity: 0; }
.notes { animation: card 8s ease infinite; }
.bubble { animation: card 8s ease infinite; }
@keyframes src { 0%, 38% { opacity: 1; } 42%, 92% { opacity: 0; } 100% { opacity: 1; } }
@keyframes newt { 0%, 40% { opacity: 0; } 44%, 92% { opacity: 1; } 100% { opacity: 0; } }
@keyframes spin1 {
  0%, 12% { opacity: 0; transform: rotate(0); }
  14% { opacity: 1; }
  38% { opacity: 1; transform: rotate(720deg); }
  40%, 100% { opacity: 0; transform: rotate(720deg); }
}
@keyframes card {
  0%, 42% { opacity: 0; transform: translateY(8px); }
  48%, 90% { opacity: 1; transform: none; }
  97%, 100% { opacity: 0; }
}
</style>
