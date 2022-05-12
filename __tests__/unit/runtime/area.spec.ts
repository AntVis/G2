import { G2Spec, render } from '../../../src';
import { createDiv, mount } from '../../utils/dom';
import { SALE_OF_YEAR, SALE_OF_YEAR_WITH_TYPE } from '../../data/sales';

describe('area', () => {
  it('render({...}) should render basic area chart', () => {
    const chart = render<G2Spec>({
      type: 'area',
      data: SALE_OF_YEAR,
      encode: {
        x: 'year',
        y: 'sale',
      },
    });

    mount(createDiv(), chart);
  });

  it('render({...}) should render basic area chart', () => {
    const chart = render<G2Spec>({
      type: 'area',
      data: SALE_OF_YEAR,
      encode: {
        x: 'year',
        y: 'sale',
        shape: 'smoothArea',
      },
    });

    mount(createDiv(), chart);
  });

  it('render({...}) should render stacked area chart', () => {
    const context = {};
    const chart = render<G2Spec>(
      {
        type: 'area',
        data: SALE_OF_YEAR_WITH_TYPE,
        encode: {
          x: 'year',
          y: 'sale',
          color: 'type',
          shape: 'smoothArea',
        },
      },
      context,
    );

    mount(createDiv(), chart);
  });
});
