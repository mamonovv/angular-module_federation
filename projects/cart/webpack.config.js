const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'cart',

  exposes: {
    './Module': './projects/cart/src/app/app.module.ts',
    './Login': './projects/cart/src/app/components/login/login.component.ts',
    './MiniCart': './projects/cart/src/app/components/mini-cart/mini-cart.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
