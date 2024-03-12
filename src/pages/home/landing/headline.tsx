import { IReactProps, TransitionType } from '@/settings/type';
import OnloadProvider from 'lesca-react-onload';
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useEffect, useState } from 'react';

type T = IReactProps & {
  transition: TransitionType;
  delay: number;
};

const HT = memo(({ transition, delay }: T) => {
  const [style, setStyle] = useTween({ y: 110 });
  useEffect(() => {
    if (transition === TransitionType.FadeIn) {
      setStyle({ y: 0 }, { duration: 500, delay });
    }
  }, [transition]);
  return <div style={style} />;
});

const HB = memo(({ transition, delay }: T) => {
  const [style, setStyle] = useTween({ y: -110 });
  useEffect(() => {
    if (transition === TransitionType.FadeIn) {
      setStyle({ y: 0 }, { duration: 500, delay });
    }
  }, [transition]);
  return <div style={style} />;
});

const Symbols = memo(({ transition, delay }: T) => {
  const [style, setStyle] = useTween({ opacity: 0, y: 50 });
  useEffect(() => {
    if (transition === TransitionType.FadeIn) {
      setStyle({ opacity: 1, y: 0 }, { duration: 500, delay, easing: Bezier.inOutBack });
    }
  }, [transition]);
  return <div style={style} />;
});

const W = memo(({ transition, delay, index }: T & { index: number }) => {
  const [style, setStyle] = useTween({
    opacity: 0,
    scale: 0,
    rotate: index % 2 === 0 ? Math.random() * 90 : Math.random() * -90,
  });
  useEffect(() => {
    if (transition === TransitionType.FadeIn) {
      setStyle(
        { opacity: 1, rotate: 0, scale: 1 },
        { duration: 500, delay, easing: Bezier.outBack },
      );
    }
  }, [transition]);
  return <div style={style} />;
});

const Headline = memo(() => {
  const [transition, setTransition] = useState(TransitionType.Unset);

  return (
    <OnloadProvider onload={() => setTransition(TransitionType.FadeIn)}>
      <div className='headline'>
        <div className='content'>
          <div className='logo'>
            <div>
              <HT transition={transition} delay={0} />
              <div>
                {[...Array(6).keys()].map((e) => (
                  <W key={e} transition={transition} delay={500 + e * 100} index={e} />
                ))}
              </div>
              <HB transition={transition} delay={0} />
              <Symbols transition={transition} delay={1100} />
              <Symbols transition={transition} delay={1600} />
            </div>
          </div>
        </div>
      </div>
    </OnloadProvider>
  );
});
export default Headline;
