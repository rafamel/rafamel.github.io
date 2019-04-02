import React from 'react';
import { Global } from '@emotion/core';
import { Provider } from '~/utils/cxt';
import LoadFadeIn from '~/components/LoadFadeIn';
import Frame from './Frame';
import context from '~/context';
import media from '~/utils/media';
import Projects from './Projects';

const styles = {
  global: {
    body: {
      fontFamily: context.theme.typography.fontFamily,
      backgroundColor: '#fafafa',
      margin: '33px 35px 50px',
      boxSizing: 'border-box',
      overflowX: 'hidden',
      '@media print': { backgroundColor: '#ffffff' },
      [media('tablet', context.theme)]: {
        margin: '80px 100px 50px 10%'
      },
      [media('desktop', context.theme)]: {
        maxWidth: 875,
        paddingRight: 50,
        marginLeft: '19%'
      }
    }
  }
};

const App = () => (
  <Provider value={context}>
    <React.Fragment>
      <Global styles={styles.global} />
      <LoadFadeIn timeout={10000}>
        <Frame>
          <main>
            <Projects />
          </main>
        </Frame>
      </LoadFadeIn>
    </React.Fragment>
  </Provider>
);

export default App;
