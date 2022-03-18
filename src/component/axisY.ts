import { GuideComponentComponent as GCC } from '../runtime';
import { Axis, AxisOptions } from './axis';

export type AxisYOptions = AxisOptions;

export const AxisY: GCC<AxisYOptions> = (options) => {
  return Axis(options);
};

AxisY.props = {
  ...Axis.props,
  defaultPosition: 'left',
};
