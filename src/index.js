import './base.css';
import Router from './utils/router.js';
import GroupView from './views/GroupView/GroupView.js';

const app = document.getElementById('app');
const router = new Router(app);

const groupView = new GroupView(app, router, {});

router.addRoute('/group', groupView);

router.open(window.location.pathname);
