import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';
import BackgroundVideo from '../components/layout/background-video';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <BackgroundVideo />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
