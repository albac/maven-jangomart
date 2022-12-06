/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmployeesCreateFormInputValues = {
    name?: string;
    title?: string;
};
export declare type EmployeesCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmployeesCreateFormOverridesProps = {
    EmployeesCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmployeesCreateFormProps = React.PropsWithChildren<{
    overrides?: EmployeesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmployeesCreateFormInputValues) => EmployeesCreateFormInputValues;
    onSuccess?: (fields: EmployeesCreateFormInputValues) => void;
    onError?: (fields: EmployeesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: EmployeesCreateFormInputValues) => EmployeesCreateFormInputValues;
    onValidate?: EmployeesCreateFormValidationValues;
} & React.CSSProperties>;
export default function EmployeesCreateForm(props: EmployeesCreateFormProps): React.ReactElement;
