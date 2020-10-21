import { EventEmitter } from '@stencil/core';

export interface ValidationStatus {
    /**
     * True if the form is valid, false otherwise
     *
     * If the form is invalid, any errors can be found on the `errors` property
     */
    valid: boolean;

    /**
     * List of validation errors
     */
    errors?: FormError[];
}

export interface FormError {
    /**
     * Name of the error
     */
    name: string;

    /**
     * Name of the invalid property
     */
    property: string;

    /**
     * Path to the property within the schema
     */
    schemaPath: string;

    /**
     * String describing the error
     */
    message: string;
}

export interface FormComponent<T = any> {
    /**
     * The value of the current property
     */
    value: T;

    /**
     * Whether or not the current property is required
     */
    required?: boolean;

    /**
     * Whether or not the current property is readonly
     */
    readonly?: boolean;

    /**
     * Whether or not the current property is disabled
     */
    disabled?: boolean;

    /**
     * The label of the current property
     */
    label?: string;

    /**
     * The helper text for the current property
     */
    helperText?: string;

    /**
     * Additional contextual information about the form
     */
    formInfo?: FormInfo;

    /**
     * The event to emit when the value of the current property has changed
     */
    change: EventEmitter<T>;
}

export interface FormInfo {
    /**
     * The schema of the current property
     */
    schema?: object;

    /**
     * The schema of the whole form
     */
    rootSchema?: object;

    /**
     * A tree of errors for this property and its children
     */
    errorSchema?: object;

    /**
     * The value of the whole form
     */
    rootValue?: any;

    /**
     * The name of the current property
     */
    name?: string;
}

/**
 * Lime elements specific options that can be specified under the `lime` key in
 * a schema, e.g.
 *
 * ```ts
 * const schema = {
 *     type: 'object',
 *     lime: {
 *         collapsible: true,
 *     },
 * };
 * ```
 */
export interface LimeSchemaOptions {
    /**
     * When specified on an object it will render all sub components inside a
     * collapsible section
     */
    collapsible?: boolean;

    /**
     * Will render the field using the specified component. The component
     * should implement the `FormComponent` interface
     */
    component?: FormComponentOptions;
}

/**
 * Options for a component to be rendered inside a form
 */
export interface FormComponentOptions {
    /**
     * Name of the component
     */
    name?: string;

    /**
     * Extra properties to give the component in addition to the properties
     * specified on the `FormComponent` interface
     */
    props?: Record<string, any>;
}
