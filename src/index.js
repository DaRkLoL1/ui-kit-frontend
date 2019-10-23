import './index.scss';

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./', true, /\.scss|js$/));
