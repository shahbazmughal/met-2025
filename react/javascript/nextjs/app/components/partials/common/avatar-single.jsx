'use client';

import { toAbsoluteUrl } from '@/lib/helpers';
import { cn } from '@/lib/utils';

const AvatarSingle = ({
  image,
  fallback,
  icon: Icon,
  iconClass,
  badgeClass,
  className,
  imageClass,
}) => {
  return (
    <div className={cn(className && className)}>
      {image && (
        <img
          src={toAbsoluteUrl(`/media/avatars/${image}`)}
          className={cn(imageClass && imageClass)}
          alt="image"
        />
      )}
      {!image && fallback && fallback}
      {!image && !fallback && Icon && (
        <Icon size={16} className={cn(iconClass && iconClass)} />
      )}
      {badgeClass && <div className={cn(badgeClass && badgeClass)}></div>}
    </div>
  );
};

export { AvatarSingle };
