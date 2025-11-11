import { Input as UiInput } from '@/components/ui/input';

type InputProps = React.ComponentProps<typeof UiInput>;

const Input = (props: InputProps) => <UiInput {...props} />;

export { Input };
