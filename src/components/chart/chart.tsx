import { Component, h, Prop, Watch } from '@stencil/core';
import { ChartItem } from './chart.types';
import { createRandomString } from '../../util/random-string';

const PERCENT = 100;
const DEFAULT_AXIS_INCREMENT = 10;

/**
 * A chart is a graphical representation of data, in which
 * visual symbols such as such bars, dots, lines, or slices, represent
 * each data point, in comparison to others.
 *
 * @exampleComponent limel-example-chart-stacked-bar
 * @exampleComponent limel-example-chart-orientation
 * @exampleComponent limel-example-chart-max-value
 * @exampleComponent limel-example-chart-type-bar
 * @exampleComponent limel-example-chart-type-scatter
 * @exampleComponent limel-example-chart-type-doughnut
 * @exampleComponent limel-example-chart-type-pie
 * @exampleComponent limel-example-chart-type-gantt
 * @exampleComponent limel-example-chart-multi-axis
 * @exampleComponent limel-example-chart-styling
 * @Beta
 */

@Component({
    tag: 'limel-chart',
    shadow: true,
    styleUrl: 'chart.scss',
})
export class Chart {
    /**
     * List of items in the chart,
     * each representing a data point.
     */
    @Prop()
    public items!: ChartItem[];

    /**
     * Defines how items are visualized in the chart.
     */
    @Prop({ reflect: true })
    public type?: 'bar' | 'stacked-bar' | 'pie' | 'doughnut' | 'scatter' =
        'stacked-bar';

    /**
     * Defines whether the chart is intended to be displayed wide or tall.
     * Does not have any effect on chart types which generate circular forms.
     */
    @Prop({ reflect: true })
    public orientation?: 'landscape' | 'portrait' = 'landscape';

    /**
     * Specifies the range that items' values could be in.
     * This is used in calculation of the size of the items in the chart.
     * When not provided, the sum of all values in the items will be considered as the range.
     */
    @Prop({ reflect: true })
    public maxValue?: number;

    /**
     * Specifies the increment for the axis lines.
     */
    @Prop({ reflect: true })
    public axisIncrement?: number = DEFAULT_AXIS_INCREMENT;

    /**
     *
     */
    @Prop({ reflect: true })
    public legend?: boolean = true;

    private rangeData: {
        minRange: number;
        maxRange: number;
        totalRange: number;
    };

    public componentWillLoad() {
        this.recalculateRangeData();
    }

    public render() {
        if (!this.items || this.items.length === 0) {
            return;
        }

        return (
            <div class="chart">
                {this.renderAxises()}
                {this.renderItems()}
            </div>
        );
    }

    private renderAxises() {
        if (this.type !== 'bar' && this.type !== 'scatter') {
            return;
        }

        const { minRange, maxRange } = this.rangeData;

        const lines = [];

        const adjustedMinRange =
            Math.floor(minRange / this.axisIncrement) * this.axisIncrement;
        const adjustedMaxRange =
            Math.ceil(maxRange / this.axisIncrement) * this.axisIncrement;

        for (
            let value = adjustedMinRange;
            value <= adjustedMaxRange;
            value += this.axisIncrement
        ) {
            lines.push(
                <div
                    class={{
                        'axis-line': true,
                        'zero-line': value === 0,
                    }}
                    role="presentation"
                >
                    <span>{value}</span>
                </div>,
            );
        }

        return (
            <div class="axises" role="presentation">
                {lines}
            </div>
        );
    }

    private renderItems() {
        const { minRange, totalRange } = this.rangeData;

        let cumulativeOffset = 0;

        return this.items.map((item, index) => {
            const itemId = createRandomString();

            const normalizedStart =
                (((item.startValue ?? 0) - minRange) / totalRange) * PERCENT;
            const normalizedEnd =
                ((item.value - minRange) / totalRange) * PERCENT;
            const size = normalizedEnd - normalizedStart;

            let offset = normalizedStart;

            if (this.type === 'pie' || this.type === 'doughnut') {
                offset = cumulativeOffset;
                cumulativeOffset += size;
            }

            return [
                <span
                    style={{
                        '--limel-chart-item-color': item.color,
                        '--limel-chart-item-offset': `${offset}`,
                        '--limel-chart-item-size': `${size}`,
                        '--limel-chart-item-index': `${index + 1}`,
                    }}
                    class={{
                        item: true,
                        'has-start-value': item.startValue !== undefined,
                    }}
                    key={itemId}
                    id={itemId}
                    // data-item-text={item.text}
                    tabIndex={0}
                />,
                this.renderTooltip(
                    itemId,
                    item.text,
                    item.value,
                    size,
                    item.startValue,
                    item.prefix,
                    item.suffix,
                ),
            ];
        });
    }

    private renderTooltip(
        itemId: string,
        text: string,
        value: number,
        size: number,
        startValue?: number,
        prefix: string = '',
        suffix: string = '',
    ) {
        const PERCENT_DECIMAL = 2;
        const noStartValue = `${prefix}${value}${suffix}`;
        const withStartValue = `${prefix}${startValue}${suffix} — ${prefix}${value}${suffix}`;
        const formattedValue =
            startValue !== undefined ? withStartValue : noStartValue;

        const tooltipProps: any = {
            label: `${text}`,
            helperLabel: `${formattedValue}`,
            elementId: itemId,
        };

        if (this.type !== 'bar' && this.type !== 'scatter') {
            tooltipProps.label = `${text} (${size.toFixed(PERCENT_DECIMAL)}%)`;
        }

        return (
            <limel-tooltip
                {...tooltipProps}
                openDirection={
                    this.orientation === 'portrait' ? 'right' : 'top'
                }
            />
        );
    }

    private calculateRange() {
        const minRange = Math.min(
            ...[].concat(
                ...this.items.map((item) => [item.startValue ?? 0, item.value]),
            ),
        );
        const maxRange = Math.max(
            ...[].concat(
                ...this.items.map((item) => [item.startValue ?? 0, item.value]),
            ),
        );

        // Calculate total sum of all item values for pie and doughnut charts
        const totalSum = this.items.reduce((sum, item) => sum + item.value, 0);

        // Determine final max range based on chart type and maxValue prop
        let finalMaxRange;
        if (
            (this.type === 'pie' || this.type === 'doughnut') &&
            !this.maxValue
        ) {
            finalMaxRange = totalSum;
        } else {
            finalMaxRange = this.maxValue ?? maxRange;
        }

        // Adjust finalMaxRange to the nearest multiple of axisIncrement
        const visualMaxRange =
            Math.ceil(finalMaxRange / this.axisIncrement) * this.axisIncrement;

        // Adjust minRange to the nearest multiple of axisIncrement (this is the first axis line)
        const visualMinRange =
            Math.floor(minRange / this.axisIncrement) * this.axisIncrement;

        const totalRange = visualMaxRange - visualMinRange;

        return {
            minRange: visualMinRange, // Use visualMinRange for calculating the offset
            maxRange: visualMaxRange, // Use visualMaxRange for alignment with axis lines
            totalRange: totalRange,
        };
    }

    @Watch('items')
    handleItemsChange() {
        this.recalculateRangeData();
    }

    @Watch('range')
    handleRangeChange() {
        this.recalculateRangeData();
    }

    private recalculateRangeData() {
        this.rangeData = this.calculateRange();
    }
}
