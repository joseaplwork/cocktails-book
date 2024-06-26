import SearchBar from 'containers/SearchBar';
import List from 'containers/List';

import './app.component.scss';

export default function App() {
  return (
    <div className="c-app u-bg--white-smoke">
      <SearchBar />
      <List />
    </div>
  );
}
