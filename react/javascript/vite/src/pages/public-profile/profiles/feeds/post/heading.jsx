import { DropdownMenu5 } from '@/partials/dropdown-menu/dropdown-menu-5';
import { EllipsisVertical } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Heading = ({ author, avatar, date }) => {
  return (
    <div className="flex justify-between items-center mb-5 p-7.5 pb-0">
      <div className="flex items-center gap-3">
        <Avatar className="size-9">
          <AvatarImage
            src={toAbsoluteUrl(`/media/avatars/${avatar.image}`)}
            alt="image"
          />

          <AvatarFallback>CH</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <Link
            to="#"
            className="text-base font-medium text-mono hover:text-primary-active mb-1"
          >
            {author}
          </Link>
          <time className="text-sm text-secondary-foreground">{date}</time>
        </div>
      </div>
      <DropdownMenu5
        trigger={
          <Button variant="ghost" mode="icon">
            <EllipsisVertical />
          </Button>
        }
      />
    </div>
  );
};

export { Heading };
