import React, { memo, useEffect, useRef, useState } from 'react';

interface VirtualizedListProps {
  children: (isIntersecting: boolean) => React.ReactNode;
  rootRef: React.RefObject<HTMLDivElement>;
  as?: React.ElementType;
}

function VirtualizedListDefault({ as: Tag = 'div', children, rootRef }: VirtualizedListProps) {
  const localRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (rootRef.current && localRef.current) {
      const intersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            return;
          }

          setIsIntersecting(false);
        });
      };

      const observer = new IntersectionObserver(intersectionObserverCallback, {
        rootMargin: '200px',
        root: rootRef.current
      });

      observer.observe(localRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [rootRef]);

  return (
    <Tag style={{ display: 'table-row' }} ref={localRef}>
      {children(isIntersecting)}
    </Tag>
  );
}

export const VirtualizedList = memo(VirtualizedListDefault);
