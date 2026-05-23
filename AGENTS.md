## 应用概览
一个展示交互式中国地图的网页，使用 ECharts 实现可缩放、可点击查看详情的地图可视化。

## 需求拆解文档

# 中国地图展示 - 需求拆解文档

## 产品概述

- **产品类型**: 地图可视化展示页
- **场景类型**: prototype
- **目标用户**: 需要查看中国地理信息的用户（商务、教育、旅游等）
- **核心价值**: 提供美观、交互式的中国地图浏览体验
- **界面语言**: 中文
- **主题偏好**: 浅色
- **页面模式**: 单页
- **导航模式**: 无导航（单功能聚焦）

---

## 页面结构

### 单页应用（无导航时）:

| 区块名称 | 区块说明 |
|---------|---------|
| Hero | 标题 + 简介 + 主要交互地图 |
| Stats Section | 省份数量、城市数据等统计信息 |
| Features | 地图交互功能说明 |
| Footer | 版权信息 |

---

## 功能列表

- **页面目标**: 展示可交互的中国地图
- **功能点**:
  - 地图缩放与拖拽浏览
  - 省份悬停高亮显示
  - 点击省份查看详情
  - 统计数据展示
  - 响应式布局适配

---

## 设计文档 (Design Guidelines)

# UI 设计指南

> **场景类型**: `prototype`（单页应用设计）
> **参考模板**: serene-luxury · 静谧奢雅

## 1. Design Archetype (设计原型)

### 1.1 参考模板
- **模板名称**: serene-luxury.md
- **选择理由**: 中国地图展示需要稳重、权威感的设计风格，serene-luxury 的克制品味与大面积留白能突出地图主体，营造专业、可信的视觉氛围
- **调整说明**: 简化页面结构，去除复杂的卡片叠放效果，聚焦地图展示

### 1.2 美学方向
- **Aesthetic Direction**: 新亚洲极简奢华 —— 大面积留白搭配衬线字体，传递从容专业的气质
- **Core Values**: 权威、专业、清晰

---

## 2. Color Palette (配色方案)

### 主色系统

| 角色 | 色值 | 用途 |
|------|------|------|
| **bg** | `#F8FAFC` (slate-50) | 页面背景 |
| **surface** | `#FFFFFF` | 卡片背景 |
| **header** | `#0F172A` (slate-900) | 深色区块、主按钮 |
| **text** | `#0F172A` | 主文本 |
| **textMuted** | `#64748B` (slate-500) | 次要文本 |
| **accent** | `#2563EB` (blue-600) | 强调色、hover态 |
| **border** | `#F1F5F9` (slate-100) | 边框、分隔线 |

### 地图配色

| 用途 | 色值 |
|------|------|
| 地图底色 | `#E2E8F0` (slate-200) |
| 省份填充 | `#94A3B8` (slate-400) ~ `#CBD5E1` (slate-300) |
| 悬停高亮 | `#2563EB` (blue-600) |
| 选中状态 | `#1D4ED8` (blue-700) |

---

## 3. Typography (字体)

- **标题**: Noto Serif SC, serif — 衬线体传递文化感和权威性
- **正文**: Inter, -apple-system, sans-serif — 清晰易读
- **Display**: text-4xl ~ text-6xl, font-light, serif-font
- **正文**: text-lg, font-light, leading-relaxed

---

## 4. Spacing & Layout (间距与布局)

- **页面容器**: max-w-7xl mx-auto px-6 md:px-12
- **区块间距**: py-20 ~ py-32
- **卡片圆角**: rounded-3xl ~ rounded-[3rem]
- **地图容器**: h-[600px] min-h-[500px]

---

## 5. Component Styles (组件样式)

### 地图卡片
- 背景: bg-white
- 圆角: rounded-[3rem]
- 阴影: shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)]
- 内边距: p-6 md:p-10

### 统计卡片
- 背景: bg-white
- 圆角: rounded-3xl
- 阴影: shadow-sm hover:shadow-xl
- 边框: border border-slate-100

---

## 6. Animation (动效)

- 页面加载: 淡入效果
- 卡片hover: translateY(-4px) + shadow增强, duration-300
- 地图交互: ECharts 内置缩放动画
- 统计数字: 计数动画
