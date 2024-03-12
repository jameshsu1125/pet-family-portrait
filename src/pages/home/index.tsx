import { memo, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { HomeContext, HomeState, THomeState } from './config';
import './index.less';
import Landing from './landing';
import Main from './main';

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);

  return (
    <div className='Home'>
      <ParallaxProvider>
        <HomeContext.Provider value={[state, setState]}>
          <Landing />
          <Main />
        </HomeContext.Provider>
      </ParallaxProvider>
    </div>
  );
});

export default Home;
