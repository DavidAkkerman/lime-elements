import { Component, h, Prop } from '@stencil/core';
import {
    ObjectFieldTemplateProps,
    ObjectFieldProperty,
} from '../form/templates/types';

@Component({
    tag: 'limel-comparison-expression',
    shadow: true,
    styleUrl: 'engage-filter-form.scss',
})
export class ComparisionExpressionComponent {
    @Prop()
    public templateProps: ObjectFieldTemplateProps;

    render() {
        return (
            <limel-flex-container
                direction="vertical"
                class="flex-1 no-wrap node"
                align="stretch"
            >
                <react-render content={this.getProperty('left').content} />
                <react-render
                    content={this.getProperty('comparator').content}
                />
                <react-render content={this.getProperty('right').content} />
            </limel-flex-container>
        );
    }

    private getProperty(name: string): ObjectFieldProperty {
        for (const property of this.templateProps.properties) {
            if (property.name === name) {
                return property;
            }
        }

        throw new Error('Property not found: ' + name);
    }
}
