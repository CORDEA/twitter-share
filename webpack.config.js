/**
 * Copyright 2019 Yoshihiro Tanaka
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Yoshihiro Tanaka <contact@cordea.jp>
 * date  : 2019-12-21
 */

var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './popup.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        modules: ['node_modules'],
        descriptionFiles: ['package.json']
    },
    node: {
        fs: 'empty'
    }
}
