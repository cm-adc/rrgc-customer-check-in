'use client';

import { Form as UiForm } from '@/components/ui/form';
import type {
  FieldValues,
  FormProviderProps,
} from 'react-hook-form';

const Form = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined
>(
  props: FormProviderProps<TFieldValues, TContext, TTransformedValues>
) => <UiForm {...props} />;

export { Form };
