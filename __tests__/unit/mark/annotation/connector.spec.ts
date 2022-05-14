import { Connector } from '../../../../src/mark/annotation/connector';
import { Band } from '../../../../src/scale';
import { plot } from '../../geometry/helper';

describe('Connector', () => {
  it('Connector has expected props', () => {
    expect(Connector.props).toEqual({
      defaultShape: 'annotation.connector',
      channels: [
        { name: 'enterType' },
        { name: 'enterDelay' },
        { name: 'enterDuration' },
        { name: 'enterEasing' },
        { name: 'key', scale: 'identity' },
        { name: 'x', required: true },
        { name: 'y', required: true },
        { name: 'd' },
        { name: 'shape' },
      ],
      infer: [{ type: 'maybeTuple' }],
      shapes: ['annotation.connector'],
    });
  });

  it('Connector() returns a function draw basic annotation', () => {
    const [I, P] = plot({
      mark: Connector({}),
      index: [0, 1],
      channel: {
        x: [
          [0.1, 0.9],
          [0.2, 0.8],
        ],
        y: [
          [0.1, 0.9],
          [0.2, 0.8],
        ],
      },
    });

    expect(I).toEqual([0, 1]);
    expect(P).toEqual([
      [
        [60, 40],
        [540, 360],
      ],
      [
        [120, 80],
        [480, 320],
      ],
    ]);
  });

  it('Connector() returns a function draw connector annotation with bandScale', () => {
    const [I, P] = plot({
      mark: Connector({}),
      index: [0],
      scale: {
        x: Band({
          domain: ['a', 'b', 'c'],
          range: [0, 1],
        }),
      },
      channel: {
        x: [[0, 1 / 3]],
        y: [[0.1, 0.9]],
      },
    });

    expect(I).toEqual([0]);
    expect(P).toEqual([
      [
        [100, 40],
        [300, 360],
      ],
    ]);
  });
});
