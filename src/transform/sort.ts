import { deepMix } from '@antv/util';
import {
  Primitive,
  groupSort,
  max,
  min,
  sum,
  mean,
  median,
  sort,
  index,
} from 'd3-array';
import { G2Mark, TransformComponent as TC } from '../runtime';
import { columnOf } from './utils/helper';

function createReducer(channel, options, encode): (I: number[]) => any {
  const { by = channel, reducer = 'max' } = options;
  const [V] = columnOf(encode, by);
  if (typeof reducer === 'function') return (GI: number[]) => reducer(GI, V);
  if (reducer === 'max') return (GI: number[]) => max(GI, (i) => +V[i]);
  if (reducer === 'min') return (GI: number[]) => min(GI, (i) => +V[i]);
  if (reducer === 'sum') return (GI: number[]) => sum(GI, (i) => +V[i]);
  if (reducer === 'median') return (GI: number[]) => median(GI, (i) => +V[i]);
  if (reducer === 'mean') return (GI: number[]) => mean(GI, (i) => +V[i]);
  if (reducer === 'first') return (GI: number[]) => V[GI[0]];
  if (reducer === 'last') return (GI: number[]) => V[GI[GI.length - 1]];
  throw new Error(`Unknown reducer: ${reducer}`);
}

function sortIByDomain(
  I: number[],
  sorted: Primitive[],
  original: Primitive[],
): number[] {
  const map = index(sorted, (v) => v);
  return sort(I, (i) => map.get(original[i]));
}

export type SortOptions = {
  by?: string;
  reverse?: boolean;
  channel?: string;
  slice?: number | [number, number];
  strategy?: 'ordinal' | 'quantitative';
  reducer?:
    | 'max'
    | 'min'
    | 'sum'
    | 'first'
    | 'last'
    | 'mean'
    | 'median'
    | ((I: number[], V: Primitive[]) => Primitive);
};

function sortQuantitative(
  I,
  mark,
  options,
  normalizeReducer,
): [number[], G2Mark] {
  const { reverse, slice } = options;
  const sortedI = groupSort(I, normalizeReducer, (i: number) => i);
  if (reverse) sortedI.reverse();
  const s = typeof slice === 'number' ? [0, slice] : slice;
  return [sortedI, mark];
}

function sortOrdinal(I, mark, options, normalizeReducer): [number[], G2Mark] {
  const { reverse, slice, channel } = options;
  const { encode } = mark;
  const [T] = columnOf(encode, channel);
  const sortedDomain = groupSort(I, normalizeReducer, (i: number) => T[i]);
  const sortedI = sortIByDomain(I, sortedDomain, T);
  if (reverse) sortedDomain.reverse();
  const s = typeof slice === 'number' ? [0, slice] : slice;
  const slicedDomain = slice ? sortedDomain.slice(...s) : sortedDomain;
  return [
    sortedI,
    deepMix(mark, {
      scale: {
        [channel]: {
          domain: slicedDomain,
        },
      },
    }),
  ];
}

/**
 * Sort marks groups by groups.
 */
export const Sort: TC<SortOptions> = (options = {}) => {
  const {
    reverse = false,
    slice,
    channel,
    strategy = 'ordinal',
    ...rest
  } = options;
  return (I, mark) => {
    const { encode } = mark;
    const [T] = columnOf(encode, channel);
    const normalizeReducer = createReducer(channel, rest, encode);
    if (strategy === 'quantitative') {
      return sortQuantitative(
        I,
        mark,
        { reverse, slice, channel, strategy, ...rest },
        normalizeReducer,
      );
    }
    return sortOrdinal(I, mark, { reverse, slice, channel }, normalizeReducer);
  };
};

Sort.props = {};
