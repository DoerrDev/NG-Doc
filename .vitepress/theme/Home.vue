<script setup lang="ts">
import { ref } from 'vue'
import { withBase } from 'vitepress'

const replay = ref(0)
const releases = 'https://github.com/DoerrDev/NextGestures/releases/latest'
const cursor = 'M0 0 L0 17 L4.6 12.8 L7.6 19.6 L10.4 18.4 L7.4 11.8 L13 11.6 Z'

const more = [
  { text: '快速打开程序', link: '/guide/actions/launch-app' },
  { text: '按下快捷键', link: '/guide/actions/hotkey' },
  { text: '录制键盘动作', link: '/guide/actions/key-sequence' },
  { text: '鼠标中键触发', link: '/guide/triggers/middle-button' },
  { text: '马上执行 / 松手执行', link: '/guide/timing/immediate' },
  { text: '按程序配置', link: '/guide/profiles/apps' },
  { text: '黑名单', link: '/guide/profiles/blacklist' },
  { text: '快速开关手势', link: '/guide/settings/toggle' },
]
</script>

<template>
  <main class="ng-home">
    <div class="ng-shell">
      <section class="ng-hero">
        <div class="ng-intro">
          <h1>画一笔，<br><em>事就办了。</em></h1>
          <p class="ng-lede">按住鼠标右键画一段轨迹，或者在屏幕边角滚一下滚轮，就能关闭标签页、打开程序、截图贴图，或者把选中的文字交给 AI 翻译。一个 Windows 小工具，不打扰，随叫随到。</p>
          <div class="ng-actions">
            <a class="ng-primary" :href="releases"><span aria-hidden="true">↓</span> 下载 Windows 版</a>
            <a class="ng-secondary" :href="withBase('/guide/')">五分钟上手 <span aria-hidden="true">→</span></a>
          </div>
          <p class="ng-build">开源 · 通过 GitHub Releases 发布</p>
        </div>

        <figure class="ng-sketch" :key="replay" @click="replay++" title="点击重播">
          <svg viewBox="0 0 600 440" role="img" aria-label="演示：按住右键向下再向右，松开后关闭当前标签页">
            <text class="ng-note ng-n1" x="182" y="92">① 按住右键</text>
            <path class="ng-stroke" pathLength="1" d="M150 80 C147 150 154 232 150 300 C250 305 372 296 462 302" />
            <path class="ng-arrow" d="M436 280 L466 302 L436 324" />
            <circle class="ng-dot" cx="150" cy="80" r="15" />
            <text class="ng-note ng-n2" x="20" y="205">② 向下</text>
            <text class="ng-note ng-n3" x="250" y="355">③ 再向右</text>
          </svg>
          <div class="ng-callout" aria-hidden="true">
            <small>④ 松开右键</small>
            <strong>关闭当前标签页</strong>
            <kbd>Ctrl</kbd><kbd>W</kbd>
          </div>
        </figure>
      </section>

      <section class="ng-features" aria-labelledby="ng-features-title">
        <div class="ng-sect-head">
          <h2 id="ng-features-title">不止画一笔</h2>
          <span>六个常用玩法，看一眼就会</span>
        </div>

        <div class="ng-grid">
          <!-- 01 边角触发 -->
          <a class="ng-demo" :href="withBase('/guide/triggers/edge')">
            <div class="ng-stage">
              <svg viewBox="0 0 320 200" role="img" aria-label="演示：鼠标移到屏幕左边滚动滚轮，切换浏览器标签页">
                <rect class="d-chrome" x="0" y="0" width="320" height="34" />
                <rect class="d-tab" x="34" y="9" width="72" height="25" rx="4" />
                <rect class="d-tab" x="112" y="9" width="72" height="25" rx="4" />
                <rect class="d-tab" x="190" y="9" width="72" height="25" rx="4" />
                <rect class="d-line" x="46" y="19" width="40" height="5" />
                <rect class="d-line" x="124" y="19" width="34" height="5" />
                <rect class="d-line" x="202" y="19" width="44" height="5" />
                <rect class="a-ind" x="34" y="31" width="72" height="3" />
                <rect class="d-line" x="40" y="56" width="180" height="7" />
                <rect class="d-line" x="40" y="74" width="240" height="7" />
                <rect class="d-line" x="40" y="92" width="210" height="7" />
                <rect class="d-line" x="40" y="110" width="120" height="7" />
                <rect class="a-edge" x="0" y="34" width="6" height="166" />
                <g class="a-wheel"><path class="d-chev" d="M22 118 l6 6 l6 -6 M22 128 l6 6 l6 -6" /></g>
                <g class="a-cur"><path class="d-cur" :d="cursor" /></g>
                <text class="d-hand" x="306" y="186" text-anchor="end">左边 · 滚轮 → 切换标签</text>
              </svg>
            </div>
            <span class="ng-tag">触发方式</span>
            <h3>边角触发</h3>
            <p>鼠标顶到屏幕边角，滚一下滚轮、单击或停一会儿就能执行，不用按住任何键。</p>
          </a>

          <!-- 02 滚轮触发 -->
          <a class="ng-demo" :href="withBase('/guide/triggers/wheel')">
            <div class="ng-stage">
              <svg viewBox="0 0 320 200" role="img" aria-label="演示：按住右键向下滚动滚轮，最小化当前窗口">
                <g transform="translate(36 30)">
                  <rect class="d-mouse" x="0" y="0" width="76" height="118" rx="38" />
                  <path class="b-rb" d="M38 0 A38 38 0 0 1 76 38 V46 H38 Z" />
                  <path class="d-thin" d="M38 0 V46 M0 46 H76" />
                  <rect class="d-mouse" x="33" y="14" width="10" height="22" rx="5" />
                  <g class="b-wh"><path class="d-chev" d="M32 58 l6 6 l6 -6 M32 68 l6 6 l6 -6" /></g>
                </g>
                <text class="d-hand" x="22" y="186">按住右键 + 向下滚</text>
                <g class="b-win">
                  <rect class="d-card" x="150" y="40" width="150" height="104" rx="4" />
                  <rect class="d-chrome" x="151" y="41" width="148" height="16" />
                  <rect class="d-line" x="164" y="72" width="110" height="6" />
                  <rect class="d-line" x="164" y="88" width="124" height="6" />
                  <rect class="d-line" x="164" y="104" width="80" height="6" />
                </g>
                <rect class="d-chrome" x="184" y="170" width="128" height="24" />
                <rect class="b-ico" x="234" y="175" width="24" height="14" rx="2" />
                <g class="b-key"><text class="d-key" x="300" y="26" text-anchor="end">Win + ↓ 最小化</text></g>
              </svg>
            </div>
            <span class="ng-tag">触发方式</span>
            <h3>滚轮触发</h3>
            <p>按住触发键再滚动滚轮。上滚、下滚、先上后下，各是一个手势，也能和轨迹组合。</p>
          </a>

          <!-- 03 截图置顶 -->
          <a class="ng-demo" :href="withBase('/guide/actions/screenshot')">
            <div class="ng-stage">
              <svg viewBox="0 0 320 200" role="img" aria-label="演示：框选屏幕区域，变成置顶的贴图">
                <rect class="d-line" x="20" y="18" width="120" height="7" />
                <rect class="d-line" x="20" y="34" width="80" height="7" />
                <rect class="d-bar" x="92" y="100" width="18" height="40" />
                <rect class="d-bar" x="118" y="80" width="18" height="60" />
                <rect class="d-bar is-hot" x="144" y="94" width="18" height="46" />
                <rect class="d-bar" x="170" y="66" width="18" height="74" />
                <path class="d-thin" d="M82 140 H200" />
                <rect class="c-dim" x="0" y="0" width="320" height="200" />
                <rect class="c-sel" x="76" y="56" width="136" height="92" />
                <g class="c-pin">
                  <rect class="d-shadow" x="81" y="61" width="136" height="92" />
                  <rect class="d-card" x="76" y="56" width="136" height="92" />
                  <rect class="d-bar" x="92" y="100" width="18" height="40" />
                  <rect class="d-bar" x="118" y="80" width="18" height="60" />
                  <rect class="d-bar is-hot" x="144" y="94" width="18" height="46" />
                  <rect class="d-bar" x="170" y="66" width="18" height="74" />
                  <path class="d-thin" d="M82 140 H200" />
                  <g class="c-bar">
                    <rect class="d-ink" x="80" y="156" width="128" height="20" rx="3" />
                    <circle class="d-dot" cx="94" cy="166" r="3.5" />
                    <rect class="d-paper" x="106" y="162" width="9" height="8" />
                    <rect class="d-paper" x="124" y="162" width="9" height="8" />
                    <rect class="d-paper" x="142" y="162" width="9" height="8" />
                    <rect class="d-paper" x="176" y="162" width="9" height="8" />
                    <rect class="d-paper" x="192" y="162" width="9" height="8" />
                  </g>
                </g>
                <text class="d-hand c-note" x="20" y="186">浮在最上层，可标注</text>
              </svg>
            </div>
            <span class="ng-tag">动作</span>
            <h3>截图并置顶</h3>
            <p>拖选一块区域，变成浮在所有窗口上方的贴图，可以标注、复制、保存，调透明度。</p>
          </a>

          <!-- 04 AI 翻译 -->
          <a class="ng-demo" :href="withBase('/guide/actions/translate')">
            <div class="ng-stage">
              <svg viewBox="0 0 320 200" role="img" aria-label="演示：选中英文句子，卡片中逐字出现中文译文">
                <defs>
                  <clipPath id="ng-d-clip"><rect class="d-type" x="30" y="108" width="196" height="30" /></clipPath>
                </defs>
                <rect class="d-hl d-hl1" x="18" y="22" width="184" height="24" />
                <rect class="d-hl d-hl2" x="18" y="48" width="140" height="24" />
                <text class="d-text" x="22" y="40" textLength="176" lengthAdjust="spacingAndGlyphs">Where is the nearest</text>
                <text class="d-text" x="22" y="66" textLength="132" lengthAdjust="spacingAndGlyphs">subway station?</text>
                <g class="d-pop">
                  <rect class="d-shadow" x="24" y="96" width="280" height="90" />
                  <rect class="d-card" x="20" y="92" width="280" height="90" />
                  <text class="d-zh" x="34" y="130" textLength="190" lengthAdjust="spacingAndGlyphs" clip-path="url(#ng-d-clip)">最近的地铁站在哪里？</text>
                  <text class="d-small d-busy" x="34" y="168">正在翻译 · Esc 取消</text>
                  <g class="d-done">
                    <rect class="d-ink" x="246" y="155" width="42" height="20" rx="3" />
                    <text class="d-btn" x="267" y="169" text-anchor="middle">复制</text>
                  </g>
                </g>
              </svg>
            </div>
            <span class="ng-tag">动作 · AI</span>
            <h3>翻译、润色、粤拼</h3>
            <p>选中文字画个手势，译文在卡片里逐字出现；也能把英文改得更地道，或给中文标注粤拼。</p>
          </a>

          <!-- 05 选中即搜 -->
          <a class="ng-demo" :href="withBase('/guide/actions/open-url')">
            <div class="ng-stage">
              <svg viewBox="0 0 320 200" role="img" aria-label="演示：选中一个词再画手势，浏览器打开该词的搜索结果">
                <defs>
                  <clipPath id="ng-e-clip"><rect class="e-type" x="34" y="78" width="250" height="16" /></clipPath>
                </defs>
                <rect class="d-hl e-hl" x="56" y="24" width="128" height="24" />
                <text class="d-text" x="22" y="42">试试</text>
                <text class="d-text" x="60" y="42" textLength="120" lengthAdjust="spacingAndGlyphs">NextGestures</text>
                <text class="d-text" x="190" y="42">吧</text>
                <path class="e-stroke" pathLength="1" d="M120 164 C122 140 119 112 121 92 C160 90 210 94 250 92" />
                <circle class="e-dot" cx="120" cy="164" r="6" />
                <g class="e-br">
                  <rect class="d-shadow" x="18" y="68" width="292" height="122" />
                  <rect class="d-card" x="14" y="64" width="292" height="122" />
                  <rect class="d-chrome" x="15" y="65" width="290" height="34" />
                  <rect class="d-addr" x="26" y="74" width="270" height="18" rx="9" />
                  <text class="d-mono" x="38" y="87" clip-path="url(#ng-e-clip)">google.com/search?q=NextGestures</text>
                  <g class="e-res">
                    <rect class="d-link" x="30" y="114" width="150" height="7" />
                    <rect class="d-line" x="30" y="128" width="240" height="6" />
                    <rect class="d-link" x="30" y="150" width="120" height="7" />
                    <rect class="d-line" x="30" y="164" width="210" height="6" />
                  </g>
                </g>
              </svg>
            </div>
            <span class="ng-tag">动作</span>
            <h3>选中就搜</h3>
            <p>网址里写上 <code>{selection}</code>，选中的文字会被自动带进去，一笔打开搜索结果。</p>
          </a>

          <!-- 06 区域录屏 -->
          <a class="ng-demo" :href="withBase('/guide/actions/screenshot#区域录屏')">
            <div class="ng-stage">
              <svg viewBox="0 0 320 200" role="img" aria-label="演示：框选区域开始录屏，停止后导出 MP4 或 GIF">
                <rect class="d-line" x="80" y="56" width="150" height="7" />
                <rect class="d-line" x="80" y="74" width="110" height="7" />
                <rect class="d-line" x="80" y="92" width="136" height="7" />
                <g class="f-rec">
                  <circle class="f-ball" cx="100" cy="122" r="9" />
                  <rect class="f-sel" x="60" y="34" width="200" height="112" />
                  <rect class="d-ink" x="96" y="154" width="128" height="24" rx="3" />
                  <text class="d-btn f-start" x="160" y="170" text-anchor="middle">开始录制</text>
                  <text class="d-btn f-stop" x="160" y="170" text-anchor="middle">停止录制</text>
                  <g class="f-time">
                    <circle class="f-red" cx="232" cy="22" r="5" />
                    <text class="d-small f-t1" x="242" y="26">00:01</text>
                    <text class="d-small f-t2" x="242" y="26">00:02</text>
                    <text class="d-small f-t3" x="242" y="26">00:03</text>
                  </g>
                </g>
                <g class="f-files">
                  <rect class="d-shadow" x="68" y="76" width="84" height="40" />
                  <rect class="d-card" x="64" y="72" width="84" height="40" />
                  <text class="d-file" x="106" y="97" text-anchor="middle">录屏.mp4</text>
                  <rect class="d-shadow" x="172" y="76" width="84" height="40" />
                  <rect class="d-card" x="168" y="72" width="84" height="40" />
                  <text class="d-file" x="210" y="97" text-anchor="middle">录屏.gif</text>
                </g>
              </svg>
            </div>
            <span class="ng-tag">动作</span>
            <h3>区域录屏</h3>
            <p>框选区域就能录，结束后导出 MP4 或 GIF。不用另装 ffmpeg，只录画面不录声音。</p>
          </a>
        </div>
      </section>

      <section class="ng-more" aria-labelledby="ng-more-title">
        <h2 id="ng-more-title">还可以</h2>
        <div class="ng-chips">
          <a v-for="item in more" :key="item.link" class="ng-chip" :href="withBase(item.link)">{{ item.text }}</a>
        </div>
      </section>

      <footer class="ng-footer">
        <span>NextGestures</span>
        <a href="https://github.com/DoerrDev/NextGestures">GitHub ↗</a>
      </footer>
    </div>
  </main>
</template>
