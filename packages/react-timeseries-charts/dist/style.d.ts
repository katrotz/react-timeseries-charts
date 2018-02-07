import { Event, Key } from "pondjs";
export declare type StyleMode = "normal" | "selected" | "highlighted" | "muted";
export declare type ElementStyle = {
    normal: React.CSSProperties;
    highlighted: React.CSSProperties;
    selected: React.CSSProperties;
    muted: React.CSSProperties;
    [mode: string]: React.CSSProperties;
};
export declare type LineChartChannelStyle = {
    line: ElementStyle;
    [elem: string]: ElementStyle;
};
export declare type LineChartStyle = {
    [channel: string]: LineChartChannelStyle;
};
export declare const defaultLineChartChannelStyle: {
    line: {
        normal: {
            stroke: string;
            fill: string;
            strokeWidth: number;
        };
        highlighted: {
            stroke: string;
            fill: string;
            strokeWidth: number;
        };
        selected: {
            stroke: string;
            fill: string;
            strokeWidth: number;
        };
        muted: {
            stroke: string;
            fill: string;
            opacity: number;
            strokeWidth: number;
        };
    };
};
export declare type AreaChartChannelStyle = {
    line: ElementStyle;
    area: ElementStyle;
};
export declare type AreaChartStyle = {
    [channel: string]: AreaChartChannelStyle;
};
export declare const defaultAreaChartStyle: AreaChartChannelStyle;
export interface BarChartChannelStyle {
    bar: ElementStyle;
    [key: string]: ElementStyle;
}
export declare type BarChartStyle = {
    [channel: string]: BarChartChannelStyle;
};
export declare const defaultBarChartChannelStyle: BarChartChannelStyle;
export declare type LevelStyle = {
    normal: React.CSSProperties;
    highlighted: React.CSSProperties;
    selected: React.CSSProperties;
    muted: React.CSSProperties;
};
export declare type BoxChartChannelStyle = LevelStyle[];
export declare type BoxChartStyle = {
    [channel: string]: BoxChartChannelStyle;
};
export declare const defaultBoxChartStyle: BoxChartChannelStyle;
export declare type ScatterChartChannelStyle = {
    point: ElementStyle;
    [elem: string]: ElementStyle;
};
export declare type ScatterChartStyle = {
    [channel: string]: ScatterChartChannelStyle;
};
export declare const defaultScatterChartChannelStyle: {
    point: {
        normal: {
            fill: string;
            opacity: number;
        };
        highlighted: {
            fill: string;
            opacity: number;
        };
        selected: {
            fill: string;
            opacity: number;
        };
        muted: {
            fill: string;
            opacity: number;
        };
    };
};
export declare type EventChartStyle = (event: Event<Key>, mode: string) => React.CSSProperties;
export declare type BaselineStyle = {
    label: React.CSSProperties;
    line: React.CSSProperties;
};
export declare const baselineDefaultStyle: {
    label: {
        fill: string;
        fontSize: number;
        pointerEvents: string;
    };
    line: {
        stroke: string;
        strokeWidth: number;
        strokeDasharray: string;
        pointerEvents: string;
    };
};
export declare type InfoBoxStyle = {
    text: React.CSSProperties;
    box: React.CSSProperties;
};
export declare const defaultInfoBoxStyle: InfoBoxStyle;
export declare type EventMarkerStyle = InfoBoxStyle & {
    stem: React.CSSProperties;
    marker: React.CSSProperties;
};
export declare const defaultEventMarkerStyle: EventMarkerStyle;
export declare type TimeMarkerStyle = InfoBoxStyle & {
    line: React.CSSProperties;
};
export declare const defaultTimeMarkerStyle: TimeMarkerStyle;
export declare type CategoryStyle = {
    symbol: ElementStyle;
    label: ElementStyle;
    value: ElementStyle;
    [elem: string]: ElementStyle;
};
export declare type LegendStyle = {
    [key: string]: CategoryStyle;
};
export declare const defaultLegendCategoryStyle: CategoryStyle;
