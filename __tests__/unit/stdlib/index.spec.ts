import { createLibrary } from '../../../src/stdlib';
import {
  Cartesian,
  Polar,
  Transpose,
  Parallel,
  Fisheye,
  Helix,
  Theta,
  Reflect,
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
  Image as ImageGeometry,
  Polygon as PolygonGeometry,
  Box as BoxGeometry,
  Vector as VectorGeometry,
  Link as LinkGeometry,
  LineX,
  LineY,
  Range,
  RangeX,
  RangeY,
  Connector,
} from '../../../src/mark';
import {
  Category10,
  Category20,
  SequentialBlue,
  SequentialDarkBlue,
  SequentialGreen,
  SequentialDarkGreen,
  SequentialGrey,
  SequentialOrange,
  SequentialPink,
  SequentialRed,
  SequentialYellow,
  SequentialPurple,
  SequentialYellowOrange,
  SequentialYellowGreen,
  SequentialPinkPurple,
  SequentialGreenBlue,
  DivergingGreenYellow,
  DivergingRedBlue,
  DivergingGreenRed,
  DivergingRedPurple,
} from '../../../src/palette';
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
  MaybeZeroY,
  MaybeSize,
  MaybeKey,
  StackY,
  DodgeX,
  StackEnter,
  NormalizeY,
  Jitter,
  JitterY,
  SymmetryY,
  Select,
  SelectX,
  SelectY,
  GroupX,
  SortX,
  FlexX,
} from '../../../src/transform';
import {
  Fetch,
  SortBy,
  FilterBy,
  Map,
  Pick,
  Rename,
  Subset,
  Fold,
  Inline,
  Custom,
  Cluster,
  Tree,
  Sankey,
  Arc as ArcTransform,
} from '../../../src/data';
import { HideOverlap } from '../../../src/labelLayout';

describe('stdlib', () => {
  it('createLibrary() should returns expected builtin', () => {
    expect(createLibrary()).toEqual({
      'data.fetch': Fetch,
      'data.inline': Inline,
      'data.sortBy': SortBy,
      'data.filterBy': FilterBy,
      'data.map': Map,
      'data.pick': Pick,
      'data.rename': Rename,
      'data.subset': Subset,
      'data.fold': Fold,
      'data.custom': Custom,
      'data.cluster': Cluster,
      'data.tree': Tree,
      'data.sankey': Sankey,
      'data.arc': ArcTransform,
      // 'transform.wordCloud': WordCloud,
      // 'transform.voronoi': Voronoi,
      // 'transform.connector': Connector,
      'transform.maybeZeroY1': MaybeZeroY1,
      'transform.maybeZeroX': MaybeZeroX,
      'transform.maybeStackY': MaybeStackY,
      'transform.maybeTitleX': MaybeTitleX,
      'transform.maybeTooltipY': MaybeTooltipY,
      'transform.maybeTooltipPosition': MaybeTooltipPosition,
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
      'transform.sortX': SortX,
      'transform.flexX': FlexX,
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
      'mark.link': LinkGeometry,
      'mark.image': ImageGeometry,
      'mark.polygon': PolygonGeometry,
      'mark.box': BoxGeometry,
      'mark.vector': VectorGeometry,
      'mark.lineX': LineX,
      'mark.lineY': LineY,
      'mark.connector': Connector,
      'mark.range': Range,
      'mark.rangeX': RangeX,
      'mark.rangeY': RangeY,
      'palette.category10': Category10,
      'palette.category20': Category20,
      'palette.sequentialBlue': SequentialBlue,
      'palette.sequentialDarkBlue': SequentialDarkBlue,
      'palette.sequentialGreen': SequentialGreen,
      'palette.sequentialDarkGreen': SequentialDarkGreen,
      'palette.sequentialGrey': SequentialGrey,
      'palette.sequentialOrange': SequentialOrange,
      'palette.sequentialPink': SequentialPink,
      'palette.sequentialRed': SequentialRed,
      'palette.sequentialYellow': SequentialYellow,
      'palette.sequentialPurple': SequentialPurple,
      'palette.sequentialYellowOrange': SequentialYellowOrange,
      'palette.sequentialYellowGreen': SequentialYellowGreen,
      'palette.sequentialPinkPurple': SequentialPinkPurple,
      'palette.sequentialGreenBlue': SequentialGreenBlue,
      'palette.divergingGreenYellow': DivergingGreenYellow,
      'palette.divergingRedBlue': DivergingRedBlue,
      'palette.divergingGreenRed': DivergingGreenRed,
      'palette.divergingRedPurple': DivergingRedPurple,
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
      'shape.text': AnnotationTextShape,
      'shape.area': Area,
      'shape.smoothArea': SmoothArea,
      'shape.smoothEdge': SmoothEdge,
      'shape.vhvEdge': VHVEdge,
      'shape.arc': Arc,
      'shape.link': Link,
      'shape.image': Image,
      'shape.polygon': Polygon,
      'shape.ribbon': Ribbon,
      'shape.box': Box,
      'shape.vector': Vector,
      'shape.label': Label,
      'shape.badge': AnnotationBadge,
      'shape.linkLine': AnnotationLineShape,
      'shape.connector': AnnotationConnectorShape,
      'shape.range': RectShape,
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
      'interaction.legendActive': LegendActive,
      'interaction.legendHighlight': LegendHighlight,
      'interaction.tooltip': Tooltip,
      'interaction.fisheye': FisheyeInteraction,
      'interaction.brush': Brush,
      'interaction.brushHighlight': BrushHighlight,
      'interaction.brushVisible': BrushVisible,
      'interaction.activeRegion': ActiveRegion,
      'interaction.ellipsisText': EllipsisText,
      'composition.layer': Layer,
      'composition.flex': Flex,
      'composition.mark': Mark,
      'composition.view': View,
      'composition.rect': Rect,
      'composition.matrix': Matrix,
      'composition.circle': Circle,
      'composition.keyframe': Keyframe,
      'adjust.pack': Pack,
      'labelLayout.hideOverlap': HideOverlap,
    });
  });
});
