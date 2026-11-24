# 快速上手

NextGestures 是一个 Windows 鼠标手势工具：按住鼠标按键画一笔、在屏幕边角滚一下滚轮，或者在边角停一会儿，就能打开程序、按下快捷键、打开网页、截图，或者把选中的文字交给 AI 处理。下面用「关闭浏览器当前标签页」做第一个例子。

## 安装

1. 打开 [GitHub Releases](https://github.com/DoerrDev/NextGestures/releases/latest)，下载 Windows 安装包并运行。
2. 启动后，在系统托盘点击 NextGestures 图标打开主窗口。

## 录制第一个手势

1. 在左侧选中「Global」配置组，点击右上角「新增手势」。
2. 填写「手势名称」，例如「关闭标签页」，「触发键」选鼠标右键。
3. 点击录制区，按住右键先向下、再向右画一个「L」，然后松开。
4. 把「动作类型」设为「快捷键」，点击「录制快捷键」后按下 `Ctrl + W`，最后点「保存」。
5. 回到浏览器，打开一个测试标签页，按住右键画出同样的「L」，松开后标签页就会被关闭。

如果手势没有触发，先确认「手势总开关」已打开、这条手势处于「已启用」状态，以及浏览器没有被加入[黑名单](./profiles/blacklist)。

## 一条手势由什么组成

| 组成部分 | 说明 | 详细介绍 |
| --- | --- | --- |
| 触发方式 | 怎样让手势被识别：画轨迹、滚滚轮、在屏幕边角单击或停留 | [手势触发](./triggers/gesture)、[滚轮触发](./triggers/wheel)、[边角触发](./triggers/edge)、[鼠标中键触发](./triggers/middle-button) |
| 动作 | 识别成功后做什么 | [快速打开程序](./actions/launch-app)、[按下快捷键](./actions/hotkey)、[快速截屏与录屏](./actions/screenshot) 等 |
| 触发时机 | 画到就执行，还是松开按键再执行 | [马上执行](./timing/immediate)、[松手执行](./timing/on-release) |
| 配置组 | 这条手势在哪些程序里生效 | [Global 配置组](./profiles/global)、[其他配置组](./profiles/apps) |

## 下一步

- 想让同一个手势在不同软件里做不同的事：看[其他配置组](./profiles/apps)。
- 想用截图、录屏或 AI 文字处理：这些功能默认关闭，需要先在「设置」→「插件」中启用，见[快速截屏与录屏](./actions/screenshot)和[快速翻译](./actions/translate)。
- 临时不想用手势：看[快速开关手势](./settings/toggle)。
- 遇到问题或有新想法：通过[快速反馈](./settings/feedback)直接发给开发者。
