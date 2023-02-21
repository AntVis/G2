import { Canvas } from '@antv/g';
import * as chartTests from '../plots/interaction';
import { disableAnimation } from './utils/disableAnimation';
import { filterTests } from './utils/filterTests';
import { kebabCase } from './utils/kebabCase';
import { renderSpec } from './utils/renderSpec';
import { sleep } from './utils/sleep';
import './utils/useCustomFetch';
import './utils/useSnapshotMatchers';

describe('Interactions', () => {
  const tests = filterTests(chartTests);
  for (const [name, generateOptions] of tests) {
    let gCanvas: Canvas | undefined;
    it(`[Interaction]: ${name}`, async () => {
      try {
        // @ts-ignore
        const { steps: S } = generateOptions;
        if (!S) {
          throw new Error(`Missing steps for ${name}`);
        }

        // Disable animations and delays.
        // @ts-ignore
        const { maxError = 0, preprocess = (d) => d } = generateOptions;
        // @ts-ignore
        generateOptions.preprocess = (d) => disableAnimation(preprocess(d));

        // Render chart.
        const gCanvas = await renderSpec(generateOptions);

        // Asset each state.
        // @ts-ignore
        const steps = S({ canvas: gCanvas });
        const dir = `${__dirname}/snapshots/interaction/${kebabCase(name)}`;
        for (let i = 0; i < steps.length; i++) {
          // Dispatch event and wait for the next tick and rerender.
          // @ts-ignore
          const { changeState, skip } = steps[i];
          await changeState();
          await sleep(100);

          // If do not skip this state, asset it after dispatch the event.
          if (!skip) {
            await expect(gCanvas).toMatchCanvasSnapshot(dir, `step${i}`, {
              maxError,
            });
          }
        }
      } finally {
        gCanvas?.destroy();
      }
    });
  }
});
