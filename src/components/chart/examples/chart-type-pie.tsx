import { Component, h, Host, State } from '@stencil/core';
import { chartItems } from './chart-stacked-bar-items';

/**
 * Pie chart
 *
 * @sourceFile chart-stacked-bar-items.ts
 */
@Component({
    tag: 'limel-example-chart-type-pie',
    shadow: true,
    styleUrl: 'chart-resizable-container.scss',
})
export class ChartTypePieExample {
    @State()
    private maxValue = 300;

    public render() {
        const defaultMaxValue = `${this.maxValue}`;

        return (
            <Host class="large row-layout">
                <limel-chart
                    items={chartItems}
                    type="pie"
                    maxValue={this.maxValue}
                />
                <limel-example-controls>
                    <limel-input-field
                        type="number"
                        label="MaxValue"
                        value={defaultMaxValue}
                        onChange={this.handleMaxValueChange}
                    />
                </limel-example-controls>
            </Host>
        );
    }
    private handleMaxValueChange = (event) => {
        this.maxValue = +event.detail;
    };
}
