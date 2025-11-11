import { Checkbox as UiCheckbox } from '@/components/ui/checkbox';

type CheckboxProps = React.ComponentProps<typeof UiCheckbox>;

const Checkbox = (props: CheckboxProps) => <UiCheckbox {...props} />;

export { Checkbox };
