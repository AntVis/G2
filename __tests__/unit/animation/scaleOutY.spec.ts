import { Rect } from '@antv/g';
import { ScaleOutY } from '../../../src/animation';
import { Transpose } from '../../../src/coordinate';
import { mount, createDiv } from '../../utils/dom';
import { applyAnimation, keyframes, timing } from './helper';

describe('ScaleOutY', () => {
  it('ScaleOutY({..}) should change the transform origin and scale', async () => {
    const container = document.createElement('div');
    mount(createDiv(), container);

    const [shape, animation] = await applyAnimation({
      shape: new Rect({
        style: { x: 0, y: 0, width: 50, height: 200, fill: 'red' },
      }),
      animate: ScaleOutY({ fill: 'both', duration: 300 }),
      container,
    });
    expect(shape.style.transformOrigin).toBe('left bottom');
    expect(keyframes(animation, 'transform')).toEqual([
      'scale(1, 1)',
      'scale(1, 0.0001)',
      undefined,
    ]);
    expect(keyframes(animation, 'fillOpacity')).toEqual([undefined, 1, 0]);
    expect(keyframes(animation, 'strokeOpacity')).toEqual([undefined, 1, 0]);
    expect(keyframes(animation, 'opacity')).toEqual([undefined, 1, 0]);
    expect(keyframes(animation, 'offset')).toEqual([null, 0.99, null]);

    await animation.finished;
    expect(shape.style.transformOrigin).toBe('left top');
  });

  it('ScaleOutY({...}) should scale in different origin in transpose coordinate', async () => {
    const container = document.createElement('div');
    mount(createDiv(), container);

    const [shape, animation] = await applyAnimation({
      shape: new Rect({
        style: { x: 0, y: 0, width: 50, height: 200, fill: 'red' },
      }),
      transform: [Transpose()],
      animate: ScaleOutY({ fill: 'both', duration: 300 }),
      container,
    });

    expect(shape.style.transformOrigin).toBe('left top');
    expect(keyframes(animation, 'transform')).toEqual([
      'scale(1, 1)',
      'scale(0.0001, 1)',
      undefined,
    ]);
  });

  it('ScaleOutY(options) should take options as priority among options, style and theme', async () => {
    const container = document.createElement('div');
    mount(createDiv(), container);

    const [, animation] = await applyAnimation({
      shape: new Rect({
        style: { x: 0, y: 0, width: 50, height: 200, fill: 'red' },
      }),
      transform: [Transpose()],
      animate: ScaleOutY({ duration: 300 }),
      defaults: { duration: 200 },
      value: { duration: 100 },
      container,
    });
    expect(timing(animation, 'duration')).toBe(300);
  });

  it('ScaleOutY({...}) should take style as priority among style and theme', async () => {
    const container = document.createElement('div');
    mount(createDiv(), container);

    const [, animation] = await applyAnimation({
      shape: new Rect({
        style: { x: 0, y: 0, width: 50, height: 200, fill: 'red' },
      }),
      transform: [Transpose()],
      animate: ScaleOutY({ duration: undefined }),
      defaults: { duration: 200 },
      value: { duration: 100 },
      container,
    });
    expect(timing(animation, 'duration')).toBe(100);
  });

  it('ScaleOutY({...}) should use theme as default effect timing', async () => {
    const container = document.createElement('div');
    mount(createDiv(), container);

    const [, animation] = await applyAnimation({
      shape: new Rect({
        style: { x: 0, y: 0, width: 50, height: 200, fill: 'red' },
      }),
      transform: [Transpose()],
      animate: ScaleOutY({}),
      defaults: { duration: 200 },
      container,
    });
    expect(timing(animation, 'duration')).toBe(200);
  });
});
