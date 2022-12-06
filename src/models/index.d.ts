import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerEmployees = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Employees, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmployees = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Employees, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Employees = LazyLoading extends LazyLoadingDisabled ? EagerEmployees : LazyEmployees

export declare const Employees: (new (init: ModelInit<Employees>) => Employees) & {
  copyOf(source: Employees, mutator: (draft: MutableModel<Employees>) => MutableModel<Employees> | void): Employees;
}