import { memo } from 'react';
import './index.less';

const Belt = memo(() => (
  <div className='belt'>
    <div className='knot' />
    <div className='relative flex h-full w-full flex-row justify-center space-x-48'>
      <div className='photo'>
        <div className='img i0' />
      </div>
      <div className='photo'>
        <div className='img i1' />
      </div>
    </div>
  </div>
));

const Photo = memo(() => {
  return (
    <div className='paper'>
      <div className='img' />
    </div>
  );
});

const Footer = memo(() => {
  return (
    <div className='footer'>
      <div className='cat-0' />
      <div className='flex flex-1 flex-col items-center justify-center space-y-16 px-5'>
        <div
          className='line'
          onClick={() => {
            window.open('https://lin.ee/hPQbxgG');
          }}
        />
        <div
          className='qr'
          onClick={() => {
            window.open('https://lin.ee/hPQbxgG');
          }}
        />
      </div>
      <div className='cat-1' />
    </div>
  );
});

const Main = memo(() => (
  <div id='start' className='Main'>
    <div>
      <div className='lace'></div>
      <div className='relative flex min-h-screen flex-1 flex-col items-center justify-start bg-backgroundColor pb-8'>
        <div className='title' />
        <Belt />
        <div className='arrow' />
        <Photo />
        <div className='hr' />
        <div className='title-2' />
        <Footer />
      </div>
      <div className='lace'></div>
    </div>
  </div>
));
export default Main;
