/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Employees } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmployeesUpdateFormInputValues = {
    name?: string;
    title?: string;
};
export declare type EmployeesUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmployeesUpdateFormOverridesProps = {
    EmployeesUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmployeesUpdateFormProps = React.PropsWithChildren<{
    overrides?: EmployeesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    employees?: Employees;
    onSubmit?: (fields: EmployeesUpdateFormInputValues) => EmployeesUpdateFormInputValues;
    onSuccess?: (fields: EmployeesUpdateFormInputValues) => void;
    onError?: (fields: EmployeesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: EmployeesUpdateFormInputValues) => EmployeesUpdateFormInputValues;
    onValidate?: EmployeesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EmployeesUpdateForm(props: EmployeesUpdateFormProps): React.ReactElement;
