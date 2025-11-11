import { Button as UiButton } from '@/components/ui/button';

type ButtonProps = React.ComponentProps<typeof UiButton>;

const Button = (props: ButtonProps) => <UiButton {...props} />;

export { Button };
