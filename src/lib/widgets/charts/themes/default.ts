import { COLORS } from '../../../styles/theme';

export const lightTheme = {
  themeName: 'light',
  AmChart: {
    color: COLORS.dark,
    backgroundColor: COLORS.light
  },
  AmCoordinateChart: {
    colors: [
      COLORS.primary,
      COLORS.warn,
      COLORS.accent,
      COLORS.dark,
      COLORS.secondary,
      COLORS.danger,
      COLORS.success,
      COLORS.info,
      COLORS.light
    ]
  }, AmStockChart: {
    colors: [
      COLORS.primary,
      COLORS.warn,
      COLORS.accent,
      COLORS.dark,
      COLORS.secondary,
      COLORS.danger,
      COLORS.success,
      COLORS.info,
      COLORS.light
    ]
  },
  AmSlicedChart: {
    colors: [
      COLORS.primary,
      COLORS.warn,
      COLORS.accent,
      COLORS.dark,
      COLORS.secondary,
      COLORS.danger,
      COLORS.success,
      COLORS.info,
      COLORS.light
    ],
    outlineAlpha: 1,
    outlineThickness: 2,
    labelTickColor: COLORS.dark,
    labelTickAlpha: 0.3
  },
  AmRectangularChart: {
    zoomOutButtonColor: COLORS.dark,
    zoomOutButtonRollOverAlpha: 0.15,
    zoomOutButtonImage: 'lens'
  },
  AxisBase: {
    axisColor: COLORS.dark,
    axisAlpha: 0.3,
    gridAlpha: 0.1,
    gridColor: COLORS.dark
  },
  ChartScrollbar: {
    backgroundColor: COLORS.dark,
    backgroundAlpha: 0.12,
    graphFillAlpha: 0.5,
    graphLineAlpha: 0,
    selectedBackgroundColor: COLORS.light,
    selectedBackgroundAlpha: 0.4,
    gridAlpha: 0.15
  },
  ChartCursor: {
    cursorColor: COLORS.dark,
    color: COLORS.light,
    cursorAlpha: 0.5
  },
  AmLegend: {
    color: COLORS.dark
  },
  AmGraph: {
    lineAlpha: 0.9
  },
  GaugeArrow: {
    color: COLORS.dark,
    alpha: 0.8,
    nailAlpha: 0,
    innerRadius: '40%',
    nailRadius: 15,
    startWidth: 15,
    borderAlpha: 0.8,
    nailBorderAlpha: 0
  },
  GaugeAxis: {
    tickColor: COLORS.dark,
    tickAlpha: 1,
    tickLength: 15,
    minorTickLength: 8,
    axisThickness: 3,
    axisColor: COLORS.dark,
    axisAlpha: 1,
    bandAlpha: 0.8
  },
  TrendLine: {
    lineColor: COLORS.danger,
    lineAlpha: 0.8
  },
  AreasSettings: {
    alpha: 0.7,
    color: COLORS.success,
    colorSolid: COLORS.success,
    unlistedAreasAlpha: 0,
    unlistedAreasColor: COLORS.dark,
    outlineColor: COLORS.light,
    outlineAlpha: 0,
    outlineThickness: 0,
    rollOverColor: COLORS.primary,
    rollOverOutlineColor: COLORS.light,
    selectedOutlineColor: COLORS.light,
    selectedColor: COLORS.warn,
    unlistedAreasOutlineColor: COLORS.light,
    unlistedAreasOutlineAlpha: 0
  },
  LinesSettings: {
    color: COLORS.dark,
    alpha: 0
  },
  ImagesSettings: {
    alpha: 0.8,
    labelColor: COLORS.dark,
    color: COLORS.dark,
    labelRollOverColor: COLORS.primary
  },
  ZoomControl: {
    buttonFillAlpha: 0.7,
    buttonIconColor: COLORS.light
  },
  SmallMap: {
    mapColor: COLORS.dark,
    rectangleColor: COLORS.warn,
    backgroundColor: COLORS.light,
    backgroundAlpha: 0.7,
    borderThickness: 1,
    borderAlpha: 0.8
  },
  PeriodSelector: {
    color: COLORS.dark
  },
  PeriodButton: {
    color: COLORS.dark,
    background: 'transparent',
    opacity: 0.7,
    border: '1px solid rgba(0, 0, 0, .3)',
    MozBorderRadius: '5px',
    borderRadius: '5px',
    margin: '1px',
    outline: 'none',
    boxSizing: 'border-box'
  },
  PeriodButtonSelected: {
    color: COLORS.dark,
    backgroundColor: COLORS.success,
    border: '1px solid rgba(0, 0, 0, .3)',
    MozBorderRadius: '5px',
    borderRadius: '5px',
    margin: '1px',
    outline: 'none',
    opacity: 1,
    boxSizing: 'border-box'
  },
  PeriodInputField: {
    color: COLORS.dark,
    background: 'transparent',
    border: '1px solid rgba(0, 0, 0, .3)',
    outline: 'none'
  },
  DataSetSelector: {
    color: COLORS.dark,
    selectedBackgroundColor: COLORS.accent,
    rollOverBackgroundColor: COLORS.accent
  },
  DataSetCompareList: {
    color: COLORS.dark,
    lineHeight: '100%',
    boxSizing: 'initial',
    webkitBoxSizing: 'initial',
    border: '1px solid rgba(0, 0, 0, .3)'
  },
  DataSetSelect: {
    border: '1px solid rgba(0, 0, 0, .3)',
    outline: 'none'
  }
};
