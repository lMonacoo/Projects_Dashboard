import React, { useEffect, useRef, useState } from 'react';

import { LinearProgress } from '@mui/material';
import { useTheme } from 'styled-components';

interface InfiniteScrollComponentProps<T> {
  children: (quantityToRender: number) => React.ReactNode;
  listParent: React.RefObject<T>;
  totalLength: number;
}

const PAYLOAD_QUANTITY = 15;

export const InfiniteScrollComponent = <T,>({
  children,
  listParent,
  totalLength
}: InfiniteScrollComponentProps<T>): JSX.Element => {
  const { colors } = useTheme();
  const loaderRef = useRef<HTMLDivElement>(null);
  const [quantityToRender, setQuantityToRender] = useState<number>(PAYLOAD_QUANTITY);

  useEffect(() => {
    if (listParent.current && loaderRef.current) {
      const intersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
        const loaderEntry = entries[0];
        if (!loaderRef.current) return;

        if (loaderEntry.isIntersecting) {
          const nextQuantity = PAYLOAD_QUANTITY + quantityToRender;
          if (nextQuantity < totalLength) setQuantityToRender(quantityToRender + PAYLOAD_QUANTITY);
          if (nextQuantity >= totalLength) setQuantityToRender(totalLength);
        }

        if (quantityToRender >= totalLength) {
          loaderRef.current.style.display = 'none';
        } else {
          loaderRef.current.style.display = 'block';
        }
      };

      const observer = new IntersectionObserver(intersectionObserverCallback, {
        rootMargin: '200px',
        root: listParent.current as unknown as HTMLElement
      });

      observer.observe(loaderRef.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [listParent, quantityToRender, totalLength]);

  return (
    <>
      {children(quantityToRender)}

      <LinearProgress
        ref={loaderRef}
        sx={{
          mt: 1,
          height: 8,
          width: '100%',
          backgroundColor: colors.greenPrimary,
          '& .MuiLinearProgress-bar': { backgroundColor: colors.greenTertiary }
        }}
      />
    </>
  );
};
