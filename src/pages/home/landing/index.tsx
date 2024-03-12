import { memo } from 'react';
import Album from './album';
import Headline from './headline';
import './index.less';
import Knot from './knot';

const Landing = memo(() => (
  <div className='Landing'>
    <div>
      <div className='lace'></div>
      <div className='relative flex min-h-screen flex-1 justify-center pb-52'>
        <Album />
        <div className='flex w-full flex-col pb-36 [&>div]:relative'>
          <Knot />
          <Headline />
        </div>
        <div className='footer'>
          <button>
            <div />
          </button>
          <div className='sponsor' />
        </div>
      </div>
      <div className='lace'></div>
    </div>
  </div>
));
export default Landing;
