import { memo } from 'react';

const Headline = memo(() => (
  <div className='headline'>
    <div className='content'>
      <div className='subtitle'>
        {[...new Array(4).keys()].map((e) => {
          return <div key={`t-${e}`} />;
        })}
      </div>
      <div className='title'>
        {[...new Array(4).keys()].map((e) => {
          return <div key={`w-${e}`} />;
        })}
      </div>
    </div>
  </div>
));
export default Headline;
