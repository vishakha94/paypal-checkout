import * as xcomponent from 'xcomponent/src';

export let CartButton = xcomponent.create({

    tag: 'add-to-cart-button',
    name: 'atcbutton',

    contexts: {
        iframe: true,
        popup: false
    },

    scrolling: false,

    autoResize: {
        width: false,
        height: true,
        element: 'body'
    },

    props: {
        onClick : {

        },
        locale: {

        },

    }
});
