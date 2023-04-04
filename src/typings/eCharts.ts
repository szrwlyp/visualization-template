/**
 * eCharts基本配置
 * @param width 图表宽度
 * @param height 图表高度
 * @param chartsId 图表ID
 * @param setOptionsData 图表实例的配置项和数据
 */
export interface chartBaseOptionsType {
  width?: string;
  height?: string;
  chartsId: string;
  setOptionsData: object;
}
