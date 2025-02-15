---
title: 提示信息（Tooltip）
order: 7.5
---

G2 **提示信息（Tooltip）** 可以提供关于数据点的额外信息，帮助用户更好地理解和解释可视化，在可视化中 Tooltip 通常具有以下作用：

- **显示详细信息**：Tooltip 可以显示有关数据点的详细信息，例如具体数值、百分比或其他相关属性。这有助于用户更深入地了解数据。
- **提高可读性**：在复杂的可视化中，Tooltip 可以帮助用户更容易地识别和理解数据点。例如，在散点图中，当数据点密集时，Tooltip 可以显示特定点的详细信息，而无需将鼠标悬停在每个点上。
- **增强交互性**：Tooltip 可以增强可视化的交互性。用户可以通过悬停或点击数据点来查看更多信息，这使得可视化更加动态和有趣。
- **突出显示关键信息**：Tooltip 可以用来突出显示关键信息。例如，在时间序列图中，您可以使用 Tooltip 显示特定时间点的重要事件或突变。

## 配置方式

G2 中可以在通过 `mark.tooltip` 指定该标记需要展示的提示信息。

```js
// Functional API
// 第一种方式
chart.interval().tooltip({
  title: 'name', // 标题
  items: ['genre'], // 数据项
});
// Spec API
// 第二种方式
({
  type: 'interval',
  tooltip: {
    title: 'name', // 标题
    items: ['genre'], // 数据项
  },
});
```

并且结合 `view.interaction.tooltip` 去配置提示信息的渲染和额外配置。

```js
// Functional API
// 第一种方式
chart.interaction('tooltip', { series: true });
// Spec API
// 第二种方式
({
  type: 'view',
  interaction: {
    tooltip: { series: true },
  },
});
```

当该视图中只有一个标记的时候，通过 `mark.interaction.tooltip` 配置提示信息的渲染和额外配置也是可以的。

```js
// Functional API
// 第一种方式
chart.line().interaction('tooltip', { series: true });

// Spec API
// 第二种方式
({
  type: 'line',
  interaction: {
    tooltip: { series: true },
  },
});
```

## 开始使用

<img alt="built-in-tooltip" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*r95yTqow_1EAAAAAAAAAAAAADmJ7AQ/original" width="600" />

```js
chart
  .line()
  .data({
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/indices.json',
  })
  .encode('x', (d) => new Date(d.Date))
  .encode('y', 'Close')
  .encode('color', 'Symbol')
  .encode('key', 'Symbol')
  .scale('y', { type: 'log' })
  .tooltip({
    title: 'Date',
    items: [{ channel: 'y' }],
  });
```

## 设置提示内容

不同的 mark 有不同的默认提示信息，可以通过 `mark.tooltip(tooltipData)` 去覆盖默认的内容。tooltipData 完整的结构如下：

```js
({
  type: 'interval',
  data: [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ],
  tooltip: {
    title: (d) => (d.sold > 150 ? 'high' : 'low'), // 设置 title
    items: [
      'genre', // 第一个 item
      'sold', // 第二个 item
    ],
  },
});
```

在不需要设置 title 的时候，可以直接声明为一个数组：

```js
({
  type: 'interval',
  tooltip: ['genre', 'sold'],
});
```

```js
// API
// 第一种
chart.interval().tooltip('genre').tooltip('sold');

// 第二种
chart.interval().tooltip(['genre', 'sold']);
```

其中完整的 title 和 item 结构如下：

```ts
type Item = {
  color?: string; // marker 的颜色
  name?: string; // item 的名字
  value?: string; // item 的值
};
```

可以通过如下的方式去设置它们。

### 字段

它们的值（value）可以通过来自原始数据，通过字符串或者 `item.field` 指定。

```js
({
  tooltip: {
    title: 'sold',
    items: ['genre'],
  },
});
```

```js
// 等价于
({
  tooltip: {
    title: 'sold',
    items: [{ field: 'genre' }],
  },
});
```

### 通道

它们的值（value）可以来自通道值，通过 `item.channel` 指定，常常用于使用 `mark.transform` 生成新通道的图表。

```js
({
  tooltip: {
    title: { channel: 'x' },
    items: [{ channel: 'y' }],
  },
});
```

### 格式化

可以通过 `item.valueFormatter` 去指定 title 或者 item 的值（value）的展示，`item.valueFormatter` 可以是一个函数，也可以一个 d3-format 支持的字符串。

```js
({
  tooltip: {
    items: [{ channel: 'y', valueFormatter: '.0%' }],
  },
});
```

### 个性化配置

当然对于 title 和 item 还提供了回调去获得最大的个性化配置能力。

```js
({
  tooltip: {
    items: [
      (d, index, data, column) => ({
        color: d.sold > 150 ? 'red' : 'blue', // 指定 item 的颜色
        name: index === 0 ? d.genre : `${d.genre} ${data[i].genre}`, // 指定 item 的名字
        value: column.y.value[i], // 使用 y 通道的值
      }),
    ],
  },
});
```

## 内置 Tooltip

G2 默认打开 Tooltip 交互 ，如果需要配置 Tooltip 属性，可以通过 `chart.interaction.tooltip` 来配置。

```js | ob
(() => {
  const chart = new G2.Chart();

  chart
    .line()
    .data([
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
    ])
    .encode('x', 'year')
    .encode('y', 'value')
    .interaction('tooltip', {
      crosshairsStroke: 'red',
      crosshairsStrokeWidth: 4,
    });

  chart.render();

  return chart.getContainer();
})();
```

## 关闭 Tooltip

如果希望不展示该 Mark 的提示信息，可以通过 `mark.tooltip` 实现。

```js
({
  type: 'interval',
  tooltip: false,
});
```

```js
chart.interval().tooltip(false);
```

如果希望图表没有提示信息交互，可以通过 `chart.interaction` 实现。

```js
({
  type: 'view',
  interaction: { tooltip: false },
});
```

```js
chart.interaction('tooltip', false);
```

## 设置 Tooltip CSS 样式

```js | ob
(() => {
  const chart = new G2.Chart();

  chart.options({
    type: 'interval',
    data: {
      type: 'fetch',
      value:
        'https://gw.alipayobjects.com/os/bmw-prod/f129b517-158d-41a9-83a3-3294d639b39e.csv',
      format: 'csv',
    },
    encode: {
      x: 'state',
      y: 'population',
      color: 'age',
    },
    transform: [
      { type: 'sortX', by: 'y', reverse: true, reducer: 'sum', slice: 6 },
      { type: 'dodgeX' },
    ],
    legend: false,
    interaction: {
      tooltip: {
        shared: true,
        mount: 'body',
        css: {
          '.g2-tooltip': {
            background: '#eee',
            'border-radius': ' 0.25em !important',
          },
          '.g2-tooltip-title': {
            'font-size': '20px',
            'font-weight': 'bold',
            'padding-bottom': '0.25em',
          },
          '.g2-tooltip-list-item': {
            background: '#ccc',
            padding: '0.25em',
            margin: '0.25em',
            'border-radius': '0.25em',
          },
          '.g2-tooltip-list-item-name-label': {
            'font-weight': 'bold',
            'font-size': '16px',
          },
          'g2-tooltip-list-item-marker': {
            'border-radius': '0.25em',
            width: '15px',
            height: '15px',
          },
          '.g2-tooltip-list-item-value': {
            'font-weight': 'bold',
            'font-size': '16px',
          },
        },
      },
    },
  });

  chart.render();

  return chart.getContainer();
})();
```

## 自定义 Tooltip

有时候内置的 Tooltip 无法满足需求，这时候可以通过 `mark.interaction.tooltip.render` 或者 `view.interaction.tooltip.render` 的 _render_ 函数来渲染自定义的提示。

该 _render_ 函数接受事件对象 _event_ 和提示数据 _tooltipData_，返回一个 string 或者 DOM 对象。其中 _event_ 是 [@antv/g](https://g.antv.antgroup.com/) 抛出的鼠标对象，_tooltipData_ 是通过 `mark.tooltip` 声明的 title 和 items 数据。如果返回值是一个 string，那么会作为 tooltip 容器的 innerHTML，否则会挂载该返回值。一个提示的 render 函数的定义大概如下：

```js
function render(event, tooltipData) {
  const { title, items } = tooltipData;
  return `<div></div>`;
}
```

下面是一个简单的例子：

```js | ob
(() => {
  const chart = new G2.Chart();

  chart
    .interval()
    .data({
      type: 'fetch',
      value:
        'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
    })
    .transform([{ type: 'sortX', by: 'y', reverse: true }])
    .encode('x', 'letter')
    .encode('y', 'frequency')
    .interaction('tooltip', {
      // render 回调方法返回一个innerHTML 或者 DOM
      render: (event, { title, items }) => `<div>
      <h3 style="padding:0;margin:0">${title}</h3>
      <ul>${items.map(
        (d) =>
          `<li><span style="color: ${d.color}">${d.name}</span> ${d.value}</li>`,
      )}</ul>
      </div>`,
    });

  chart.render();

  return chart.getContainer();
})();
```

## 选项

| 属性  | 描述                                  | 类型          | 默认值 |
| ----- | ------------------------------------- | ------------- | ------ |
| title | 标题，支持一段文本或 innerHTML 字符串 | `TooltipItem` | \-     |
| items | 定义每一个提示项的配置                | `TooltipItem` | \-     |

```ts
type TooltipItem =
  | string
  | false
  | {
      name?: string;
      color?: string;
      channel?: string;
      field?: string;
      value?: string;
      // 格式化 tooltip item 的值（支持 d3-format 对应的字符串）
      valueFormatter?: string | ((d: any) => string);
    };
```

## 案例

### title

```js
mark.tooltip({
  title: 'name', // 字段
});

mark.tooltip({
  title: (d) => (d.value > 100 ? d.name : d.age), // transform
});
```

### item

```js
// 单个字段
mark.tooltip('a');
mark.tooltip({ field: 'a' });

// 单个通道
mark.tooltip({ channel: 'y' });

// transform
mark.tooltip((d) => (d.value > 100 ? d.name : d.age));

// 格式化
mark.tooltip({ channel: 'y', valueFormatter: (d) => d.toFixed(1) });

// d3-format 支持的字符
// https://github.com/d3/d3-format
mark.tooltip({ channel: 'y', valueFormatter: '~s' });

// 完整信息
mark.tooltip({ name: 'name', color: 'red', value: 'color' });

// 回调
mark.tooltip(
  (
    d, // 每一个数据项
    index, // 索引
    data, // 完整数据
    column, // 通道
  ) => ({
    value: `${column.y.value[index]} - ${column.y1.value[index]}`,
  }),
);

// 多个 item
mark.tooltip({ channel: 'y' }).tooltip({ channel: 'x' });
```

### title + item

```js
mark.tooltip({
  title: 'a',
  items: [{ channel: 'x' }, { channel: 'y' }],
});
```

