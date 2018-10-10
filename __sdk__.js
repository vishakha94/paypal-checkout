/* @flow */
/* eslint unicorn/filename-case: 0, import/unambiguous: 0, import/no-commonjs: 0 */

let globals = require('./globals');

module.exports = {

    '__paypal-checkout-components-common__': {
        entry:     './src/interface/common',
        automatic: true
    },
    
    'buttons': {
        entry:           './src/interface/button',
        setupHandler:    'setupButtons',
        staticNamespace: '__paypal_checkout__',
        variables: {

        },
        configQuery:     `
            eligiblePaymentMethods(clientId: $clientID, currency: $currency, country: $country, intent: $intent, commit: $commit, vault: $vault, disableFunding: $disableFunding ) {
            paypal {
                eligible
            }
            card {    
                eligible                                                        
                branded
                vendors {
                    visa {
                        eligible
                    }
                    mastercard {
                        eligible
                    }
                    amex {
                        eligible
                    }
                    discover {
                        eligible
                    }
                    hiper {
                        eligible
                    }
                    elo {
                        eligible
                    }
                    jcb {
                        eligible
                    }
                }                                                 
            }
            credit {
                eligible
            }
            venmo {
                eligible
            }
            sepa {
                eligible
            }
            ideal {
                eligible
            }
            bancontact {
                eligible
            }
            giropay {
                eligible
            }
            eps {
                eligible
            }
            sofort {
                eligible
            }
            mybank {
                eligible
            }
            p24 {
                eligible
            }
            zimpler {
                eligible
            }
            wechatpay {
                eligible
            }
        } `,
        globals
    },

    'checkout': {
        entry:           './src/interface/checkout',
        setupHandler:    'setupCheckout',
        staticNamespace: '__paypal_checkout__',
        configQuery:      `
            eligiblePaymentMethods(clientId: $clientID, currency: $currency, country: $country, intent: $intent, commit: $commit, vault: $vault, disableFunding: $disableFunding ) {
            paypal {
                eligible
            }
            card {    
                eligible                                                        
                branded
                vendors {
                    visa {
                        eligible
                    }
                    mastercard {
                        eligible
                    }
                    amex {
                        eligible
                    }
                    discover {
                        eligible
                    }
                    hiper {
                        eligible
                    }
                    elo {
                        eligible
                    }
                    jcb {
                        eligible
                    }
                }                                                 
            }
            credit {
                eligible
            }
            venmo {
                eligible
            }
            sepa {
                eligible
            }
            ideal {
                eligible
            }
            bancontact {
                eligible
            }
            giropay {
                eligible
            }
            eps {
                eligible
            }
            sofort {
                eligible
            }
            mybank {
                eligible
            }
            p24 {
                eligible
            }
            zimpler {
                eligible
            }
            wechatpay {
                eligible
            }
        } `,
        globals
    }
};
