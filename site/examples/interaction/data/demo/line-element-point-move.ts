import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

chart
  .line()
  .data([
    { year: '1991', value: 3, type: 'type1' },
    { year: '1992', value: 4, type: 'type1' },
    { year: '1993', value: 3.5, type: 'type1' },
    { year: '1994', value: 5, type: 'type1' },
    { year: '1995', value: 4.9, type: 'type1' },
    { year: '1996', value: 2, type: 'type1' },
    { year: '1997', value: 7, type: 'type1' },
    { year: '1998', value: 11, type: 'type1' },
    { year: '1999', value: 13, type: 'type1' },
    { year: '1991', value: 6, type: 'type2' },
    { year: '1992', value: 1, type: 'type2' },
    { year: '1993', value: 4, type: 'type2' },
    { year: '1994', value: 9, type: 'type2' },
    { year: '1995', value: 1.9, type: 'type2' },
    { year: '1996', value: 5, type: 'type2' },
    { year: '1997', value: 4, type: 'type2' },
    { year: '1998', value: 6, type: 'type2' },
    { year: '1999', value: 15, type: 'type2' },
  ])
  .interaction({
    legendFilter: false,
    elementPointMove: {
      pointStyle: {
        r: 8,
        strokeWidth: 2,
        activeStroke: '#fff',
      },
      lineDashPathStyle: {
        lineDash: [2, 4],
        stroke: 'red',
      },
      labelStyle: {
        fontSize: 14,
        y: 24,
      },
    },
  })
  .encode('x', 'year')
  .encode('y', 'value')
  .encode('key', 'type')
  .encode('color', 'type');

chart.render().then(() => {
  chart.on('element:select', (v) => {
    const {
      data: { selection },
    } = v;
    console.log(selection, 'selection');
  });

  chart.on('point:moveend', (v) => {
    const {
      data: { changeData, data },
    } = v;
    console.log(changeData, 'changeData');
    console.log(data, 'data');
  });
});

chart.on('afterrender', () => {
  chart.emit('element:select', {
    data: {
      selection: [1, 2],
    },
  });
});
