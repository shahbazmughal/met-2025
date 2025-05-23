import { SquarePen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { HexagonBadge } from '../common/hexagon-badge';

const CardNotification = ({
  title,
  description,
  button,
  actions,
}) => {
  return (
    <CardContent className="border-b border-border flex items-center justify-between py-4 gap-2.5">
      <div className="flex items-center gap-3.5">
        <HexagonBadge
          size="size-[50px]"
          badge={<Icon size={16} className="text-xl text-muted-foreground" />}
          stroke="stroke-input"
          fill="fill-muted/30"
        />

        <div className="flex flex-col gap-0.5">
          <span className="flex items-center gap-1.5 leading-none font-medium text-sm text-mono">
            {title}
          </span>
          <span className="text-sm text-secondary-foreground">
            {description}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        {button && (
          <Button variant="primary" appearance="ghost" mode="icon">
            <SquarePen />
          </Button>
        )}
        <div className="flex items-center gap-2.5">{actions}</div>
      </div>
    </CardContent>
  );
};

export { CardNotification };
