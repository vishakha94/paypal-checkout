/* @flow */

import { getHost, getPath } from 'paypal-braintree-web-client/src';
import { destroyAll } from 'zoid/src';

let script = document.createElement('script');
script.setAttribute('src', `https://${ getHost() }${ getPath() }`);
script.setAttribute('data-client-token', 'TEST');

let body = document.body;

if (body) {
    body.appendChild(script);
}

window.paypal = {
    ...require('../src/interface/button'),
    ...require('../src/interface/checkout'),
    ...require('../src/interface/common'),
    destroyAll: __TEST__ && destroyAll
};

window.paypal.setupButtons();
window.paypal.setupCheckout();
