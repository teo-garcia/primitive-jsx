import '../dist/primitivex.cjs.development.css';
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Layout, Button } from '../.';

function Header() {
  return <header />;
}

function Footer() {
  return <header />;
}

const App = () => {
  return (
    <div>
      <Layout footer={<Footer />}>
        <Button>Hello World</Button>
      </Layout>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
