import { Component, h, State } from '@stencil/core';
import { DockItem } from '../dock.types';

/**
 * Using colors
 *
 */

@Component({
    tag: 'limel-example-dock-colors',
    shadow: true,
    styleUrl: 'dock-basic.scss',
})
export class DockColorsExample {
    @State()
    private dockItems: DockItem[] = [
        {
            value: '1',
            label: 'Home',
            selected: true,
            icon: 'home',
        },
        {
            value: '2',
            label: 'Search',
            icon: 'search',
            iconColor: 'rgb(var(--color-blue-light))',
            selectedBackgroundColor: 'rgb(var(--color-blue-light))',
        },
        {
            value: '3',
            label: 'Calls',
            icon: 'phone',
            iconColor: 'rgb(var(--color-lime-default))',
            selectedBackgroundColor: 'rgb(var(--color-lime-dark))',
            selectedTextColor: 'rgb(var(--color-white))',
        },

        {
            value: '4',
            label: 'Chats',
            icon: 'chat',
            iconColor: 'rgb(var(--color-amber-default))',
            selectedBackgroundColor: 'rgb(var(--color-amber-default))',
        },
        {
            isFooterStart: true,

            value: '5',
            label: 'Settings',
            icon: 'settings',
            iconColor: 'rgb(var(--color-pink-default))',
            selectedBackgroundColor: 'rgb(var(--color-pink-default))',
            selectedTextColor: 'rgb(var(--color-white))',
        },
    ];

    public render() {
        return [
            <div class="application">
                <limel-dock
                    dockItems={this.dockItems}
                    onChange={this.handleChange}
                    expanded={true}
                />
            </div>,

            <limel-example-value
                value={this.dockItems.find((i) => i.selected)}
            />,
        ];
    }

    private handleChange = (event: CustomEvent<DockItem>) => {
        this.dockItems = this.dockItems.map((item) => {
            return {
                ...item,
                selected: item.value === event.detail?.value,
            };
        });
    };
}
