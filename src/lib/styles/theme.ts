import { DeepOcean } from './themes/colors/theme.deep-ocean';
import { DefaultTheme } from './themes/colors/theme.default';
import { EmeraldForest } from './themes/colors/theme.emerald-forest';
import { Energized } from './themes/colors/theme.energized';
import { Flatland } from './themes/colors/theme.flatland';
import { HoneyDo } from './themes/colors/theme.honey-do';
import { NeonMadness } from './themes/colors/theme.neon-madness';
import { Pastels } from './themes/colors/theme.pastels';
import { SEO } from './themes/colors/theme.seo';
import { SpringRain } from './themes/colors/theme.spring-rain';
import { StopLight } from './themes/colors/theme.stoplight';
import { SummerBeach } from './themes/colors/theme.summer-beach';
import { Tulip } from './themes/colors/theme.tulip';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface ThemeInterface {
  primary?: string;
  secondary?: string;
  accent?: string;
  info?: string;
  success?: string;
  warn?: string;
  danger?: string;
  dark?: string;
  light?: string;
}

const defaultColors = {
  primary: '#0072C6',
  secondary: '#49306B',
  accent: '#aac24e',
  info: '#00ABEC',
  success: '#89C402',
  warn: '#e1ba2c',
  danger: '#DF3D82',
  dark: '#191E22',
  light: '#f2f2f2'
};

export const COLORS = Object.assign({}, defaultColors, DefaultTheme);
export let INIT_THEME = new InjectionToken<ThemeInterface>('theme.state');

const MyThemes = [
  DeepOcean,
  DefaultTheme,
  EmeraldForest,
  Energized,
  Flatland,
  HoneyDo,
  NeonMadness,
  Pastels,
  SEO,
  SpringRain,
  StopLight,
  SummerBeach,
  Tulip
];

const ThemeNames = [
  'DeepOcean',
  'DefaultTheme',
  'EmeraldForest',
  'Energized',
  'Flatland',
  'HoneyDo',
  'NeonMadness',
  'Pastels',
  'SEO',
  'SpringRain',
  'StopLight',
  'SummerBeach',
  'Tulip'
];

@Injectable()
export class ThemeService {
  
  public activeTheme = new BehaviorSubject<ThemeInterface>(COLORS);
  
  private _myThemes;
  private _themeNames;
  private _defaultColors;
  private _chartTheme;
  
  constructor(@Inject(INIT_THEME) config: ThemeInterface) {
    this._myThemes = MyThemes;
    this._themeNames = ThemeNames;
    this._defaultColors = defaultColors;
    this.setTheme(config);
    
  }
  
  public setTheme = (theme: ThemeInterface) => {
  
    const activeTheme = Object.assign({}, defaultColors, theme);
    this.activeTheme.next(activeTheme);
    this.setChartTheme(activeTheme);
  }
  
  public get myThemes() {
    return this._myThemes;
  }
  
  public get defaultColors() {
    return this._defaultColors;
  }
  
  public get themeNames() {
    return this._themeNames;
  }
  
  public setThemeByIndex = (index: number) => {
    
    this.setTheme(this._myThemes[index]);

  }
  
  public getActiveTheme = () => {
    return this.activeTheme.value;
  }
  
  public getChartTheme = () => {
    return this._chartTheme;
  }
  
  private setChartTheme = (theme: any) => {
    this._chartTheme = {
      themeName: 'light',
      AmChart: {
        color: theme.dark,
        backgroundColor: theme.light
      },
      AmCoordinateChart: {
        colors: [
          theme.primary,
          theme.warn,
          theme.accent,
          theme.dark,
          theme.secondary,
          theme.danger,
          theme.success,
          theme.info,
          theme.light
        ]
      }, AmStockChart: {
        colors: [
          theme.primary,
          theme.warn,
          theme.accent,
          theme.dark,
          theme.secondary,
          theme.danger,
          theme.success,
          theme.info,
          theme.light
        ]
      },
      AmSlicedChart: {
        colors: [
          theme.primary,
          theme.warn,
          theme.accent,
          theme.dark,
          theme.secondary,
          theme.danger,
          theme.success,
          theme.info,
          theme.light
        ],
        outlineAlpha: 1,
        outlineThickness: 2,
        labelTickColor: theme.dark,
        labelTickAlpha: 0.3
      },
      AmRectangularChart: {
        zoomOutButtonColor: theme.dark,
        zoomOutButtonRollOverAlpha: 0.15,
        zoomOutButtonImage: 'lens'
      },
      AxisBase: {
        axisColor: theme.dark,
        axisAlpha: 0.3,
        gridAlpha: 0.1,
        gridColor: theme.dark
      },
      ChartScrollbar: {
        backgroundColor: theme.dark,
        backgroundAlpha: 0.12,
        graphFillAlpha: 0.5,
        graphLineAlpha: 0,
        selectedBackgroundColor: theme.light,
        selectedBackgroundAlpha: 0.4,
        gridAlpha: 0.15
      },
      ChartCursor: {
        cursorColor: theme.dark,
        color: theme.light,
        cursorAlpha: 0.5
      },
      AmLegend: {
        color: theme.dark
      },
      AmGraph: {
        lineAlpha: 0.9
      },
      GaugeArrow: {
        color: theme.dark,
        alpha: 0.8,
        nailAlpha: 0,
        innerRadius: '40%',
        nailRadius: 15,
        startWidth: 15,
        borderAlpha: 0.8,
        nailBorderAlpha: 0
      },
      GaugeAxis: {
        tickColor: theme.dark,
        tickAlpha: 1,
        tickLength: 15,
        minorTickLength: 8,
        axisThickness: 3,
        axisColor: theme.dark,
        axisAlpha: 1,
        bandAlpha: 0.8
      },
      TrendLine: {
        lineColor: theme.danger,
        lineAlpha: 0.8
      },
      AreasSettings: {
        alpha: 0.7,
        color: theme.success,
        colorSolid: theme.success,
        unlistedAreasAlpha: 0,
        unlistedAreasColor: theme.dark,
        outlineColor: theme.light,
        outlineAlpha: 0,
        outlineThickness: 0,
        rollOverColor: theme.primary,
        rollOverOutlineColor: theme.light,
        selectedOutlineColor: theme.light,
        selectedColor: theme.warn,
        unlistedAreasOutlineColor: theme.light,
        unlistedAreasOutlineAlpha: 0
      },
      LinesSettings: {
        color: theme.dark,
        alpha: 0
      },
      ImagesSettings: {
        alpha: 0.8,
        labelColor: theme.dark,
        color: theme.dark,
        labelRollOverColor: theme.primary
      },
      ZoomControl: {
        buttonFillAlpha: 0.7,
        buttonIconColor: theme.light
      },
      SmallMap: {
        mapColor: theme.dark,
        rectangleColor: theme.warn,
        backgroundColor: theme.light,
        backgroundAlpha: 0.7,
        borderThickness: 1,
        borderAlpha: 0.8
      },
      PeriodSelector: {
        color: theme.dark
      },
      PeriodButton: {
        color: theme.dark,
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
        color: theme.dark,
        backgroundColor: theme.success,
        border: '1px solid rgba(0, 0, 0, .3)',
        MozBorderRadius: '5px',
        borderRadius: '5px',
        margin: '1px',
        outline: 'none',
        opacity: 1,
        boxSizing: 'border-box'
      },
      PeriodInputField: {
        color: theme.dark,
        background: 'transparent',
        border: '1px solid rgba(0, 0, 0, .3)',
        outline: 'none'
      },
      DataSetSelector: {
        color: theme.dark,
        selectedBackgroundColor: theme.accent,
        rollOverBackgroundColor: theme.accent
      },
      DataSetCompareList: {
        color: theme.dark,
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
  }
  
}

