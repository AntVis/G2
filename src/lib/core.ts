import {
  Cartesian,
  Polar,
  Transpose,
  Theta,
  Parallel,
  Fisheye,
  Radial,
  Radar,
} from '../coordinate';
import { Constant, Field, Transform, Column } from '../encode';
import {
  Cell,
  Interval,
  Rect,
  Line,
  Point,
  Text,
  Area,
  Image,
  Polygon,
  Box,
  Vector,
  Link,
  LineX,
  LineY,
  Connector,
  Range,
  RangeX,
  RangeY,
  Path,
  Shape,
  Density,
  Heatmap,
} from '../mark';
import { Category10, Category20 } from '../palette';
import {
  Linear as ScaleLinear,
  Ordinal as ScaleOrdinal,
  Band as ScaleBand,
  Identity as ScaleIdentity,
  Point as ScalePoint,
  Time as ScaleTime,
  Log as ScaleLog,
  Pow as ScalePow,
  Threshold as ScaleThreshold,
  Quantile as ScaleQuantile,
  Quantize as ScaleQuantize,
  Sqrt as ScaleSqrt,
  Sequential as ScaleSequential,
  Constant as ScaleConstant,
} from '../scale';
import { Classic, ClassicDark, Academy, Light, Dark } from '../theme';
import {
  AxisX,
  AxisY,
  LegendCategory,
  LegendContinuous,
  TitleComponent,
  SliderX,
  SliderY,
  ScrollbarX,
  ScrollbarY,
  Legends,
} from '../component';
import {
  ScaleInX,
  ScaleOutX,
  ScaleInY,
  ScaleOutY,
  WaveIn,
  FadeIn,
  FadeOut,
  Morphing,
  ZoomIn,
  ZoomOut,
  PathIn,
  GrowInX,
  GrowInY,
} from '../animation';
import {
  ElementHighlight,
  ElementHighlightByX,
  ElementHighlightByColor,
  ElementSelect,
  ElementSelectByX,
  ElementSelectByColor,
  ChartIndex,
  Fisheye as ChartFisheye,
  Tooltip,
  LegendFilter,
  LegendHighlight,
  BrushHighlight,
  BrushXHighlight,
  BrushYHighlight,
  BrushAxisHighlight,
  BrushFilter,
  BrushXFilter,
  BrushYFilter,
  SliderFilter,
  Poptip,
  ScrollbarFilter,
  DrillDown,
} from '../interaction';
import {
  SpaceLayer,
  SpaceFlex,
  FacetRect,
  FacetCircle,
  RepeatMatrix,
  TimingKeyframe,
} from '../composition';
import {
  StackY,
  DodgeX,
  StackEnter,
  NormalizeY,
  Jitter,
  JitterX,
  JitterY,
  SymmetryY,
  DiffY,
  Select,
  SelectX,
  SelectY,
  GroupX,
  Group,
  SortX,
  FlexX,
  SortY,
  GroupY,
  GroupColor,
  SortColor,
  Pack,
  BinX,
  Bin,
  Sample,
  Filter,
} from '../transform';
import {
  Fetch as DataFetch,
  SortBy as DataSortBy,
  Filter as DataFilter,
  Map as DataMap,
  Pick as DataPick,
  Rename as DataRename,
  Fold as DataFold,
  Slice as DataSlice,
  Inline as DataInline,
  Custom as DataCustom,
  Join as DataJoin,
  Sort as DataSort,
  KDE as DataKDE,
  Log as DataLog,
} from '../data';
import {
  OverlapDodgeY,
  OverflowHide,
  ContrastReverse,
  OverlapHide,
} from '../label-transform';

export function corelib() {
  return {
    'data.fetch': DataFetch,
    'data.inline': DataInline,
    'data.sortBy': DataSortBy,
    'data.sort': DataSort,
    'data.filter': DataFilter,
    'data.pick': DataPick,
    'data.rename': DataRename,
    'data.fold': DataFold,
    'data.slice': DataSlice,
    'data.custom': DataCustom,
    'data.map': DataMap,
    'data.join': DataJoin,
    'data.kde': DataKDE,
    'data.log': DataLog,
    'transform.stackY': StackY,
    'transform.binX': BinX,
    'transform.bin': Bin,
    'transform.dodgeX': DodgeX,
    'transform.jitter': Jitter,
    'transform.jitterX': JitterX,
    'transform.jitterY': JitterY,
    'transform.symmetryY': SymmetryY,
    'transform.diffY': DiffY,
    'transform.stackEnter': StackEnter,
    'transform.normalizeY': NormalizeY,
    'transform.select': Select,
    'transform.selectX': SelectX,
    'transform.selectY': SelectY,
    'transform.groupX': GroupX,
    'transform.groupY': GroupY,
    'transform.groupColor': GroupColor,
    'transform.group': Group,
    'transform.sortX': SortX,
    'transform.sortY': SortY,
    'transform.sortColor': SortColor,
    'transform.flexX': FlexX,
    'transform.pack': Pack,
    'transform.sample': Sample,
    'transform.filter': Filter,
    'coordinate.cartesian': Cartesian,
    'coordinate.polar': Polar,
    'coordinate.transpose': Transpose,
    'coordinate.theta': Theta,
    'coordinate.parallel': Parallel,
    'coordinate.fisheye': Fisheye,
    'coordinate.radial': Radial,
    'coordinate.radar': Radar,
    'encode.constant': Constant,
    'encode.field': Field,
    'encode.transform': Transform,
    'encode.column': Column,
    'mark.interval': Interval,
    'mark.rect': Rect,
    'mark.line': Line,
    'mark.point': Point,
    'mark.text': Text,
    'mark.cell': Cell,
    'mark.area': Area,
    'mark.link': Link,
    'mark.image': Image,
    'mark.polygon': Polygon,
    'mark.box': Box,
    'mark.vector': Vector,
    'mark.lineX': LineX,
    'mark.lineY': LineY,
    'mark.connector': Connector,
    'mark.range': Range,
    'mark.rangeX': RangeX,
    'mark.rangeY': RangeY,
    'mark.path': Path,
    'mark.shape': Shape,
    'mark.density': Density,
    'mark.heatmap': Heatmap,
    'palette.category10': Category10,
    'palette.category20': Category20,
    'scale.linear': ScaleLinear,
    'scale.ordinal': ScaleOrdinal,
    'scale.band': ScaleBand,
    'scale.identity': ScaleIdentity,
    'scale.point': ScalePoint,
    'scale.time': ScaleTime,
    'scale.log': ScaleLog,
    'scale.pow': ScalePow,
    'scale.sqrt': ScaleSqrt,
    'scale.threshold': ScaleThreshold,
    'scale.quantile': ScaleQuantile,
    'scale.quantize': ScaleQuantize,
    'scale.sequential': ScaleSequential,
    'scale.constant': ScaleConstant,
    'theme.classic': Classic,
    'theme.classicDark': ClassicDark,
    'theme.academy': Academy,
    'theme.light': Light,
    'theme.dark': Dark,
    'component.axisX': AxisX,
    'component.axisY': AxisY,
    'component.legendCategory': LegendCategory,
    'component.legendContinuous': LegendContinuous,
    'component.legends': Legends,
    'component.title': TitleComponent,
    'component.sliderX': SliderX,
    'component.sliderY': SliderY,
    'component.scrollbarX': ScrollbarX,
    'component.scrollbarY': ScrollbarY,
    'animation.scaleInX': ScaleInX,
    'animation.scaleOutX': ScaleOutX,
    'animation.scaleInY': ScaleInY,
    'animation.scaleOutY': ScaleOutY,
    'animation.waveIn': WaveIn,
    'animation.fadeIn': FadeIn,
    'animation.fadeOut': FadeOut,
    'animation.zoomIn': ZoomIn,
    'animation.zoomOut': ZoomOut,
    'animation.pathIn': PathIn,
    'animation.morphing': Morphing,
    'animation.growInX': GrowInX,
    'animation.growInY': GrowInY,
    'interaction.elementHighlight': ElementHighlight,
    'interaction.elementHighlightByX': ElementHighlightByX,
    'interaction.elementHighlightByColor': ElementHighlightByColor,
    'interaction.elementSelect': ElementSelect,
    'interaction.elementSelectByX': ElementSelectByX,
    'interaction.elementSelectByColor': ElementSelectByColor,
    'interaction.fisheye': ChartFisheye,
    'interaction.chartIndex': ChartIndex,
    'interaction.tooltip': Tooltip,
    'interaction.legendFilter': LegendFilter,
    'interaction.legendHighlight': LegendHighlight,
    'interaction.brushHighlight': BrushHighlight,
    'interaction.brushXHighlight': BrushXHighlight,
    'interaction.brushYHighlight': BrushYHighlight,
    'interaction.brushAxisHighlight': BrushAxisHighlight,
    'interaction.brushFilter': BrushFilter,
    'interaction.brushXFilter': BrushXFilter,
    'interaction.brushYFilter': BrushYFilter,
    'interaction.sliderFilter': SliderFilter,
    'interaction.scrollbarFilter': ScrollbarFilter,
    'interaction.poptip': Poptip,
    'interaction.drillDown': DrillDown,
    'composition.spaceLayer': SpaceLayer,
    'composition.spaceFlex': SpaceFlex,
    'composition.facetRect': FacetRect,
    'composition.repeatMatrix': RepeatMatrix,
    'composition.facetCircle': FacetCircle,
    'composition.timingKeyframe': TimingKeyframe,
    'labelTransform.overlapHide': OverlapHide,
    'labelTransform.overlapDodgeY': OverlapDodgeY,
    'labelTransform.overflowHide': OverflowHide,
    'labelTransform.contrastReverse': ContrastReverse,
  } as const;
}
