/* @flow */

import globals from '../globals';

export const testGlobals = {
    ...globals,

    __paypal_checkout__: {
        serverConfig: {
            fundingEligibility: {
                bancontact: {
                    eligible: false,
                    branded:  true
                },
                card: {
                    eligible: true,
                    branded:  true,

                    vendors: {
                        visa: {
                            eligible: true
                        },
                        mastercard: {
                            eligible: true
                        },
                        amex: {
                            eligible: true
                        },
                        discover: {
                            eligible: true
                        },
                        hiper: {
                            eligible: false
                        },
                        elo: {
                            eligible: false
                        },
                        jcb: {
                            eligible: false
                        }
                    }
                },
                credit: {
                    eligible: false,
                    branded:  true
                },
                sepa: {
                    eligible: false,
                    branded:  true
                },
                eps: {
                    eligible: false,
                    branded:  true
                },
                giropay: {
                    eligible: false,
                    branded:  true
                },
                ideal: {
                    eligible: false,
                    branded:  true
                },
                mybank: {
                    eligible: false,
                    branded:  true
                },
                p24: {
                    eligible: false,
                    branded:  true
                },
                paypal: {
                    eligible: true,
                    branded:  true
                },
                sofort: {
                    eligible: false,
                    branded:  true
                },
                venmo: {
                    eligible: false,
                    branded:  true
                },
                wechatpay: {
                    eligible: false,
                    branded:  true
                },
                zimpler: {
                    eligible: false,
                    branded:  true
                }
            }
        }
    },
    
    __CLIENT_ID__:      'xyz',
    __MERCHANT_ID__:    'abc',
    __LOCALE_COUNTRY__: 'US',
    __DEFAULT_LANG__:   'en',

    __INTENT__: 'capture',
    __COMMIT__: true,
    __VAULT__:  true,

    __PORT__:       8000,
    __STAGE_HOST__: 'msmaster.qa.paypal.com',
    __HOST__:       'test.paypal.com',
    __HOSTNAME__:   'test.paypal.com',
    __PATH__:       '/sdk/js'
};
