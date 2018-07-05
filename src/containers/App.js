import React from 'react';
import { injectGlobal } from 'emotion';
import { withContext } from 'cxt';
import { HashRouter as Router } from 'react-router-dom';
import Frame from './Frame';
import Pages from './Pages';
import LoadFadeIn from '@commons/LoadFadeIn';

const styles = ({ theme }) => {
  injectGlobal({
    body: {
      fontFamily: theme.typography.fontFamily,
      backgroundColor: '#fafafa',
      margin: '33px 35px 50px',
      boxSizing: 'border-box',
      overflowX: 'hidden',
      '@media print': { backgroundColor: '#ffffff' },
      [theme.breakpoints.media('tablet')]: {
        margin: '80px 100px 50px 10%'
      },
      [theme.breakpoints.media('desktop')]: {
        maxWidth: 875,
        paddingRight: 50,
        marginLeft: '19%'
      }
    }
  });
};
const App = () => (
  <React.Fragment>
    <LoadFadeIn timeout={10000}>
      <Router>
        <Frame>
          <main>
            <Pages />
          </main>
        </Frame>
      </Router>
    </LoadFadeIn>
  </React.Fragment>
);

export default withContext({ styles })(App);
