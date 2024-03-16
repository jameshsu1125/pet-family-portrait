import { memo } from 'react';
import Album from './album';
import Headline from './headline';
import Div100vh from 'react-div-100vh';
import './index.less';
import Knot from './knot';
import Gtag from 'lesca-gtag';

const Landing = memo(() => (
  <Div100vh>
    <div className='Landing'>
      <div>
        <div className='lace'></div>
        <div className='relative flex h-full flex-1 justify-center pb-44 md:pb-12'>
          <Album />
          <div className='flex w-full flex-col pb-36 [&>div]:relative'>
            <Knot />
            <Headline />
          </div>
          <div className='footer'>
            <button
              onClick={() => {
                window.location.href = '#start';
                Gtag.event('landing', '算出命定的毛小孩');
              }}
            >
              <div />
            </button>
            <div className='sponsor' />
          </div>
        </div>
        <div className='lace'></div>
      </div>
    </div>
  </Div100vh>
));
export default Landing;
