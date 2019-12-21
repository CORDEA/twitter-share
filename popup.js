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

const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

const data = {
    loading: false,
    text: ""
}

new Vue({
    el: '#app',
    data: data,
    created: function() {
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
            if (tabs.length > 0) {
                const tab = tabs[0];
                data.text = "👀\n" + tab.title + "\n" + tab.url;
            }
        });
    },
    methods: {
        click: function() {
            data.loading = true;
            client.post('statuses/update', {status: data.text}, function(error, tweet, response) {
                data.loading = false;
                if (error) {
                    // handle
                    return;
                }
                data.text = "";
            });
        }
    }
})
