import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import { useParallax } from 'react-scroll-parallax';
import { twMerge } from 'tailwind-merge';

type T = { row: number; col: number };

import { LegacyRef } from 'react';

const OFFSET = 90;

const PhotoRow = memo(({ children, row }: IReactProps & Omit<T, 'col'>) => {
  const parallax = useParallax({
    speed: row % 2 ? -OFFSET : OFFSET,
  });
  return (
    <div ref={parallax.ref as LegacyRef<HTMLDivElement>} className='w-1/5'>
      {children}
    </div>
  );
});

const Photo = memo(({ row, col }: T) => {
  return (
    <div className='photo'>
      <div className='paper'>
        <div
          className={twMerge(
            'img',
            (col + row) % 2
              ? `i${Math.floor(Math.random() * 7)}`
              : `p${Math.floor(Math.random() * 5)}`,
          )}
        />
        <div className='txt'>something studio</div>
      </div>
    </div>
  );
});

const Album = memo(() => (
  <div className='album'>
    <div className='photos'>
      {[...new Array(6).keys()].map((row) => {
        return (
          <PhotoRow key={`row-${row}`} row={row}>
            {[...new Array(6).keys()].map((col) => {
              return <Photo key={`${row}-${col}`} col={col} row={row} />;
            })}
          </PhotoRow>
        );
      })}
    </div>
  </div>
));
export default Album;
