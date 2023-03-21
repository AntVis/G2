import { G2Spec } from '../../../src';
import { question8 } from '../../data/question8';

export function question8IntervalRadialGradientColor(): G2Spec {
  return {
    type: 'interval',
    data: question8,
    scale: {
      color: {
        range: '#BAE7FF-#1890FF-#0050B3',
      },
    },
    legend: {
      color: {
        position: 'bottom',
        length: 300,
        tick: false,
        labelFilter: (datum, index, data) =>
          index === 0 || index === data.length - 1,
        layout: {
          justifyContent: 'center',
        },
        labelTransform: [{ type: 'hide' }, { type: 'ellipsis' }],
        style: {
          labelTransform: '',
        },
      },
    },
    axis: {
      y: { tickFilter: (d, i) => i !== 0 },
    },
    coordinate: { type: 'radial', innerRadius: 0.1, endAngle: Math.PI },
    encode: {
      x: 'question',
      y: 'percent',
      color: 'percent',
    },
  };
}
