import { createLibrary } from '../../../src/stdlib';
import { Canvas } from '../../../src/renderer';
import {
  Cartesian,
  Polar,
  Transpose,
  Parallel,
  Fisheye,
  Helix,
  Theta,
  ReflectX,
  ReflectY,
  FisheyeX,
  FisheyeY,
} from '../../../src/coordinate';
import { Constant, Field, Transform, Column } from '../../../src/encode';
import {
  Interval,
  Line,
  Point as PointGeometry,
  Text as TextGeometry,
  Grid,
  Area as AreaGeometry,
  Node as NodeGeometry,
  Edge as EdgeGeometry,
  Image as ImageGeometry,
  Polygon as PolygonGeometry,
  Schema as SchemaGeometry,
  Vector as VectorGeometry,
  Link as LinkGeometry,
} from '../../../src/mark/geometry';
import {
  AnnotationConnector,
  AnnotationLineX,
  AnnotationLineY,
  AnnotationText,
  AnnotationRange,
  AnnotationRangeX,
  AnnotationRangeY,
} from '../../../src/mark/annotation';
import { Category10, Category20 } from '../../../src/palette';
import {
  Linear,
  Ordinal,
  Band,
  Identity,
  Point,
  Time,
  Log,
  Pow,
  Threshold,
  Quantile,
  Quantize,
} from '../../../src/scale';
import {
  Rect as RectShape,
  HollowRect,
  Line as LineShape,
  Smooth,
  HV,
  VH,
  HVH,
  Bowtie,
  Cross,
  Diamond,
  Hexagon,
  HollowBowtie,
  HollowDiamond,
  HollowHexagon,
  HollowPoint,
  HollowSquare,
  HollowTriangle,
  HollowTriangleDown,
  Hyphen,
  LinePoint,
  Plus,
  Point as PointShape,
  Square,
  Tick,
  Triangle,
  TriangleDown,
  Text,
  AnnotationText as AnnotationTextShape,
  AnnotationBadge,
  AnnotationConnector as AnnotationConnectorShape,
  Area,
  SmoothArea,
  Edge,
  SmoothEdge,
  VHVEdge,
  Arc,
  Image,
  Polygon,
  Ribbon,
  Box,
  AnnotationLine as AnnotationLineShape,
  Funnel,
  Pyramid,
  Vector,
  Link,
  PointNode,
  PolygonNode,
  Label,
} from '../../../src/shape';
import { Light } from '../../../src/theme';
import {
  AxisX,
  AxisY,
  LegendCategory,
  LegendContinuous,
  TitleComponent,
} from '../../../src/component';
import {
  ScaleInX,
  ScaleOutX,
  ScaleInY,
  ScaleOutY,
  FadeIn,
  FadeOut,
  Morphing,
} from '../../../src/animation';
import {
  ElementActive,
  ElementSelected,
  Tooltip,
  Fisheye as FisheyeInteraction,
  ElementHighlightByColor,
  ElementHighlightByX,
  ElementHighlight,
  ElementListHighlight,
  LegendActive,
  LegendHighlight,
  Brush,
  BrushHighlight,
  BrushVisible,
  ActiveRegion,
  EllipsisText,
} from '../../../src/interaction';
import {
  Layer,
  Flex,
  Mark,
  View,
  Rect,
  Matrix,
  Circle,
  Keyframe,
} from '../../../src/composition';
import { Pack } from '../../../src/adjust';
import {
  MaybeTitleX,
  MaybeTooltipY,
  MaybeZeroX,
  MaybeZeroY1,
  MaybeStackY,
  MaybeSeries,
  MaybeTooltipPosition,
  MaybeArrayField,
  MaybeZeroY,
  MaybeSize,
  MaybeKey,
  StackY,
  DodgeX,
  StackEnter,
  Fetch,
  SortBy,
  FilterBy,
  Pick,
  Rename,
  Subset,
  Fold,
  WordCloud,
  Voronoi,
  Sankey,
  Arc as ArcTransform,
  Cluster as ClusterTransform,
  Tree as TreeTransform,
  NormalizeY,
  Jitter,
  JitterY,
  SymmetryY,
  Select,
  SelectX,
  SelectY,
  Connector,
  GroupX,
} from '../../../src/transform';

describe('stdlib', () => {
  it('createLibrary() should returns expected builtin', () => {
    expect(createLibrary()).toEqual({
      'transform.fetch': Fetch,
      'transform.sortBy': SortBy,
      'transform.filterBy': FilterBy,
      'transform.pick': Pick,
      'transform.rename': Rename,
      'transform.subset': Subset,
      'transform.fold': Fold,
      'transform.connector': Connector,
      'transform.wordCloud': WordCloud,
      'transform.voronoi': Voronoi,
      'transform.sankey': Sankey,
      'transform.arc': ArcTransform,
      'transform.cluster': ClusterTransform,
      'transform.tree': TreeTransform,
      'transform.maybeZeroY1': MaybeZeroY1,
      'transform.maybeZeroX': MaybeZeroX,
      'transform.maybeStackY': MaybeStackY,
      'transform.maybeTitleX': MaybeTitleX,
      'transform.maybeTooltipY': MaybeTooltipY,
      'transform.maybeTooltipPosition': MaybeTooltipPosition,
      'transform.maybeArrayField': MaybeArrayField,
      'transform.maybeSeries': MaybeSeries,
      'transform.stackY': StackY,
      'transform.dodgeX': DodgeX,
      'transform.jitter': Jitter,
      'transform.jitterY': JitterY,
      'transform.symmetryY': SymmetryY,
      'transform.stackEnter': StackEnter,
      'transform.normalizeY': NormalizeY,
      'transform.select': Select,
      'transform.selectX': SelectX,
      'transform.selectY': SelectY,
      'transform.groupX': GroupX,
      'transform.maybeSize': MaybeSize,
      'transform.maybeZeroY': MaybeZeroY,
      'transform.maybeKey': MaybeKey,
      'renderer.canvas': Canvas,
      'coordinate.cartesian': Cartesian,
      'coordinate.polar': Polar,
      'coordinate.helix': Helix,
      'coordinate.transpose': Transpose,
      'coordinate.theta': Theta,
      'coordinate.reflect': Reflect,
      'coordinate.reflectX': ReflectX,
      'coordinate.reflectY': ReflectY,
      'coordinate.parallel': Parallel,
      'coordinate.fisheye': Fisheye,
      'coordinate.fisheyeX': FisheyeX,
      'coordinate.fisheyeY': FisheyeY,
      'encode.constant': Constant,
      'encode.field': Field,
      'encode.transform': Transform,
      'encode.column': Column,
      'mark.interval': Interval,
      'mark.line': Line,
      'mark.point': PointGeometry,
      'mark.text': TextGeometry,
      'mark.grid': Grid,
      'mark.area': AreaGeometry,
      'mark.node': NodeGeometry,
      'mark.edge': EdgeGeometry,
      'mark.link': LinkGeometry,
      'mark.image': ImageGeometry,
      'mark.polygon': PolygonGeometry,
      'mark.schema': SchemaGeometry,
      'mark.vector': VectorGeometry,
      'mark.annotation.text': AnnotationText,
      'mark.annotation.lineX': AnnotationLineX,
      'mark.annotation.lineY': AnnotationLineY,
      'mark.annotation.connector': AnnotationConnector,
      'mark.annotation.range': AnnotationRange,
      'mark.annotation.rangeX': AnnotationRangeX,
      'mark.annotation.rangeY': AnnotationRangeY,
      'palette.category10': Category10,
      'palette.category20': Category20,
      'scale.linear': Linear,
      'scale.ordinal': Ordinal,
      'scale.band': Band,
      'scale.identity': Identity,
      'scale.point': Point,
      'scale.time': Time,
      'scale.log': Log,
      'scale.pow': Pow,
      'scale.threshold': Threshold,
      'scale.quantile': Quantile,
      'scale.quantize': Quantize,
      'shape.rect': RectShape,
      'shape.hollowRect': HollowRect,
      'shape.funnel': Funnel,
      'shape.pyramid': Pyramid,
      'shape.line': LineShape,
      'shape.pointNode': PointNode,
      'shape.polygonNode': PolygonNode,
      'shape.hv': HV,
      'shape.vh': VH,
      'shape.hvh': HVH,
      'shape.smooth': Smooth,
      'shape.bowtie': Bowtie,
      'shape.cross': Cross,
      'shape.diamond': Diamond,
      'shape.hexagon': Hexagon,
      'shape.hollowBowtie': HollowBowtie,
      'shape.hollowDiamond': HollowDiamond,
      'shape.hollowHexagon': HollowHexagon,
      'shape.hollowPoint': HollowPoint,
      'shape.hollowSquare': HollowSquare,
      'shape.hollowTriangle': HollowTriangle,
      'shape.hollowTriangleDown': HollowTriangleDown,
      'shape.hyphen': Hyphen,
      'shape.linePoint': LinePoint,
      'shape.plus': Plus,
      'shape.point': PointShape,
      'shape.square': Square,
      'shape.tick': Tick,
      'shape.triangle': Triangle,
      'shape.triangleDown': TriangleDown,
      'shape.text': Text,
      'shape.area': Area,
      'shape.smoothArea': SmoothArea,
      'shape.edge': Edge,
      'shape.smoothEdge': SmoothEdge,
      'shape.arc': Arc,
      'shape.vhvEdge': VHVEdge,
      'shape.link': Link,
      'shape.image': Image,
      'shape.polygon': Polygon,
      'shape.ribbon': Ribbon,
      'shape.box': Box,
      'shape.vector': Vector,
      'shape.label': Label,
      'shape.annotation.text': AnnotationTextShape,
      'shape.annotation.badge': AnnotationBadge,
      'shape.annotation.line': AnnotationLineShape,
      'shape.annotation.connector': AnnotationConnectorShape,
      'shape.annotation.range': RectShape,
      'theme.light': Light,
      'component.axisX': AxisX,
      'component.axisY': AxisY,
      'component.legendCategory': LegendCategory,
      'component.legendContinuous': LegendContinuous,
      'component.title': TitleComponent,
      'animation.scaleInX': ScaleInX,
      'animation.scaleOutX': ScaleOutX,
      'animation.scaleInY': ScaleInY,
      'animation.scaleOutY': ScaleOutY,
      'animation.fadeIn': FadeIn,
      'animation.fadeOut': FadeOut,
      'animation.morphing': Morphing,
      'interaction.elementActive': ElementActive,
      'interaction.elementSelected': ElementSelected,
      'interaction.elementHighlight': ElementHighlight,
      'interaction.elementHighlightByX': ElementHighlightByX,
      'interaction.elementHighlightByColor': ElementHighlightByColor,
      'interaction.elementListHighlight': ElementListHighlight,
      'interaction.tooltip': Tooltip,
      'interaction.ellipsisText': EllipsisText,
      'interaction.fisheye': FisheyeInteraction,
      'interaction.legendActive': LegendActive,
      'interaction.legendHighlight': LegendHighlight,
      'interaction.brush': Brush,
      'interaction.brushHighlight': BrushHighlight,
      'interaction.brushVisible': BrushVisible,
      'interaction.activeRegion': ActiveRegion,
      'composition.layer': Layer,
      'composition.flex': Flex,
      'composition.keyframe': Keyframe,
      'composition.mark': Mark,
      'composition.matrix': Matrix,
      'composition.view': View,
      'composition.rect': Rect,
      'composition.circle': Circle,
      'adjust.pack': Pack,
    });
  });
});
