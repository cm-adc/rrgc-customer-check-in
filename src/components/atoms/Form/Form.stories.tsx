import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Form } from './Form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/atoms/Input';
import { Checkbox } from '@/components/atoms/Checkbox';
import { Button } from '@/components/atoms/Button';

type ExampleValues = {
  name: string;
  email: string;
  agree: boolean;
};

const meta = {
  title: 'Atoms/Form',
  component: Form,
} satisfies Meta<typeof Form>;

type Story = StoryObj<typeof Form>;

const ExampleForm = () => {
  const form = useForm<ExampleValues>({
    defaultValues: {
      name: '',
      email: '',
      agree: false,
    },
  });

  const onSubmit = (values: ExampleValues) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          rules={{ required: 'Please enter your name.' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Jane Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          rules={{ required: 'Email is required.' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="jane@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agree"
          rules={{ required: 'Please accept the terms to continue.' }}
          render={({ field }) => (
            <FormItem className="space-y-0 rounded-md border p-4">
              <div className="flex items-center space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-label="Terms agreement"
                  />
                </FormControl>
                <FormLabel className="font-normal">
                  I agree to the terms
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export const Default: Story = {
  render: () => <ExampleForm />,
};

export default meta;
