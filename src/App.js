import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Home = lazy(() =>
  import('views/Home/Home' /* webpackChunkName: "Home" */),
);

const ContactDetailsPage = lazy(() =>
  import(
    'views/ContactDetailsPage/ContactDetailsPage' /* webpackChunkName: "ContactDetailsPage" */
  ),
);
const App = () => {
  return (
    <Suspense
      fallback={
        <BallTriangle
          heigth="100"
          width="100"
          color="#000000"
          arialLabel="loading"
          timeout={3000}
        />
      }
    >
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:contactId">
          <ContactDetailsPage />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default App;
