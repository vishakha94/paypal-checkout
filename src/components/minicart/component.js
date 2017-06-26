import * as xcomponent from 'xcomponent/src';

export let CartComponent = xcomponent.create({

    tag: 'mini-cart',
    name: 'minicart',

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
