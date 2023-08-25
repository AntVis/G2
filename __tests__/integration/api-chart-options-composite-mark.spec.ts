import { chartOptionsCompositeMark as render } from '../plots/api/chart-options-composite-mark';
import { createDOMGCanvas } from './utils/createDOMGCanvas';
import { sleep } from './utils/sleep';
import './utils/useSnapshotMatchers';

describe('chart.mark()', () => {
  const canvas = createDOMGCanvas(640, 480);

  it('chart.render() should render composite mark.', async () => {
    const { finished } = render({ canvas });
    await finished;
    await sleep(20);
    const dir = `${__dirname}/snapshots/api`;
    await expect(canvas).toMatchDOMSnapshot(dir, render.name);
  });

  afterAll(() => {
    canvas?.destroy();
  });
});
