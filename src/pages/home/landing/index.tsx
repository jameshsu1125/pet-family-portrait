import { memo } from 'react';
import Album from './album';
import Headline from './headline';
import './index.less';
import Knot from './knot';

const Landing = memo(() => (
  <div className='Landing'>
    <div>
      <div className='lace'></div>
      <div className='relative flex min-h-screen flex-1 justify-center'>
        <Album />
        <div className='flex w-full flex-col pb-36 [&>div]:relative'>
          <Knot />
          <Headline />
        </div>
      </div>
      <div className='lace'></div>
    </div>
  </div>
));
export default Landing;
