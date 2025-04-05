import { Button, ButtonProps } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

export function LoadingButton({
  loading,
  children,
  className,
  disabled,
  ...props
}: LoadingButtonProps) {
  return (
    <Button className={className} disabled={loading || disabled} {...props}>
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : children}
    </Button>
  );
}
