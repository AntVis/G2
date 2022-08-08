import {
  props,
  Area,
  Interval,
  Point,
  Grid,
  Vector,
  Link,
  Polygon,
  Image,
  Text,
  Schema,
  AnnotationText,
  AnnotationBadge,
  AnnotationConnector,
  AnnotationLineX,
  AnnotationLineY,
  AnnotationRange,
  AnnotationRangeX,
  AnnotationRangeY,
} from '../../../src/api/mark/mark';

function setOptions(node) {
  return node
    .data([1, 2, 3])
    .encode('x', 'name')
    .scale('x', { domain: [0, 1] })
    .transform({ type: 'stackY' })
    .style('stroke', 'black')
    .animate('enter', { type: 'scaleInX' })
    .adjust('type', 'pack')
    .facet(true)
    .frame(true)
    .key('mark')
    .class('mark');
}

function getOptions() {
  return {
    data: [1, 2, 3],
    encode: { x: 'name' },
    scale: { x: { domain: [0, 1] } },
    transform: [{ type: 'stackY' }],
    style: { stroke: 'black' },
    animate: { enter: { type: 'scaleInX' } },
    adjust: { type: 'pack' },
    frame: true,
    facet: true,
    key: 'mark',
    class: 'mark',
  };
}

describe('Mark', () => {
  it('Mark should have expected props', () => {
    expect(props).toEqual([
      { name: 'encode', type: 'object' },
      { name: 'scale', type: 'object' },
      { name: 'data', type: 'value' },
      { name: 'key', type: 'value' },
      { name: 'class', type: 'value' },
      { name: 'transform', type: 'array' },
      { name: 'style', type: 'object' },
      { name: 'animate', type: 'object' },
      { name: 'adjust', type: 'object' },
      { name: 'frame', type: 'value' },
      { name: 'facet', type: 'value' },
    ]);
  });

  it('Interval() should specify options by API', () => {
    const node = new Interval();
    expect(node.type).toBe('interval');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('Point() should specify options by API', () => {
    const node = new Point();
    expect(node.type).toBe('point');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('Area() should specify options by API', () => {
    const node = new Area();
    expect(node.type).toBe('area');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('Grid() should specify options by API', () => {
    const node = new Grid();
    expect(node.type).toBe('grid');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('Vector() should specify options by API', () => {
    const node = new Vector();
    expect(node.type).toBe('vector');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('Link() should specify options by API', () => {
    const node = new Link();
    expect(node.type).toBe('link');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('Polygon() should specify options by API', () => {
    const node = new Polygon();
    expect(node.type).toBe('polygon');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('Image() should specify options by API', () => {
    const node = new Image();
    expect(node.type).toBe('image');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('Text() should specify options by API', () => {
    const node = new Text();
    expect(node.type).toBe('text');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('Schema() should specify options by API', () => {
    const node = new Schema();
    expect(node.type).toBe('schema');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('AnnotationText() should specify options by API', () => {
    const node = new AnnotationText();
    expect(node.type).toBe('annotation.text');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('AnnotationBadge() should specify options by API', () => {
    const node = new AnnotationBadge();
    expect(node.type).toBe('annotation.badge');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('AnnotationConnector() should specify options by API', () => {
    const node = new AnnotationConnector();
    expect(node.type).toBe('annotation.connector');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('AnnotationRange() should specify options by API', () => {
    const node = new AnnotationRange();
    expect(node.type).toBe('annotation.range');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('AnnotationRangeX() should specify options by API', () => {
    const node = new AnnotationRangeX();
    expect(node.type).toBe('annotation.rangeX');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('AnnotationRangeY() should specify options by API', () => {
    const node = new AnnotationRangeY();
    expect(node.type).toBe('annotation.rangeY');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('AnnotationLineX() should specify options by API', () => {
    const node = new AnnotationLineX();
    expect(node.type).toBe('annotation.lineX');
    expect(setOptions(node).value).toEqual(getOptions());
  });

  it('AnnotationLineY() should specify options by API', () => {
    const node = new AnnotationLineY();
    expect(node.type).toBe('annotation.lineY');
    expect(setOptions(node).value).toEqual(getOptions());
  });
});
