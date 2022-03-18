import { DisplayObject, Rect, Path } from '@antv/g';
import { arc } from 'd3-shape';
import { Container } from '../../utils/container';
import { isTranspose, isPolar } from '../../utils/helper';
import { angle, sub, Vector2, dist } from '../../utils/vector';
import { Point, ShapeComponent as SC, Primitive } from '../../runtime';

export type ColorRectOptions = {
  colorAttribute: 'fill' | 'stroke';
};

export const ColorRect: SC<ColorRectOptions> = (options) => {
  const { colorAttribute } = options;
  const lineWidth = colorAttribute === 'stroke' ? 2 : undefined;
  return (points, style, coordinate) => {
    const { color, radius = 0 } = style;
    const [p0, p1, p2, p3] = isTranspose(coordinate)
      ? exchange(points)
      : points;
    if (!isPolar(coordinate)) {
      const [x, y] = p0;
      const [width, height] = sub(p2, p0);
      return Container.of<Rect>(new Rect({}))
        .map(attr, 'lineWidth', lineWidth)
        .map(applyStyle, style)
        .map(attr, 'x', x)
        .map(attr, 'y', y)
        .map(attr, 'width', width)
        .map(attr, 'height', height)
        .map(attr, 'stroke', color)
        .map(attr, colorAttribute, color)
        .value();
    }

    // @todo Replace d3-arc.
    const center = coordinate.getCenter() as Vector2;
    const a1 = angle(sub(p0, center));
    const a2 = angle(sub(p1, center));
    const arcObject = {
      startAngle: a1,
      endAngle: a2 - a1 >= 0 ? a2 : Math.PI * 2 + a2,
      innerRadius: dist(p3, center),
      outerRadius: dist(p0, center),
    };
    const path = arc().cornerRadius(radius as number);

    return Container.of<Path>(new Path({}))
      .map(applyStyle, style)
      .map(attr, 'path', path(arcObject))
      .map(attr, 'transform', `translate(${center[0]}, ${center[1]})`)
      .map(attr, 'stroke', color)
      .map(attr, colorAttribute, color)
      .value();
  };
};

ColorRect.props = {};

function exchange(points: Point[]): Point[] {
  const [p0, p1, p2, p3] = points;
  return [p3, p0, p1, p2];
}

function applyStyle<T extends DisplayObject>(
  shape: T,
  style: Record<string, Primitive>,
) {
  for (const [key, value] of Object.entries(style)) {
    attr(shape, key, value);
  }
  return shape;
}

function attr<T extends DisplayObject>(shape: T, key: string, value: any): T {
  if (value === undefined) return shape;
  shape.style[key] = value;
  return shape;
}
