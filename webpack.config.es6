import path from 'path';

export default  {
    entry: './index.es6',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(jsx|es6)$/,
            use: [ "babel-loader"
            ]
        }],
    },
};