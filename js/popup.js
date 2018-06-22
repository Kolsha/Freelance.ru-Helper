// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Store CSS data in the "local" storage area.
//
// See note in options.js for rationale on why not to use "sync".
var storage = chrome.storage.local;

var message = document.querySelector('#message');

var optionsUrl = chrome.extension.getURL('html/options.html');
message.innerHTML = '<p><a target="_blank" class="btn btn-primary" href="' +
        optionsUrl + '">Настройте варианты ответов </a></p><p><a target="_blank" class="btn btn-success" href="https://money.yandex.ru/to/410011947722590?comment=Freelance.ru-Helper">Поблагодарить автора</a></p>';



