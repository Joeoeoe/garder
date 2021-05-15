"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xhrAndFetchErrorMount = void 0;
const xhrAndFetchErrorMount = function (plugin) {
    // xhr error
    const protocol = window.location.protocol;
    if (protocol === 'file') {
        return;
    }
    if (!window.XMLHttpRequest) {
        return;
    }
    const xmlhttp = window.XMLHttpRequest;
    const oldSend = xmlhttp.prototype.send;
    const handleEvent = function (event) {
        // TODO message
        plugin.onError({ message: 'xhr error' }, event);
    };
    xmlhttp.prototype.send = function () {
        this.addEventListener('error', handleEvent);
        return oldSend.apply(this, arguments);
    };
    // fetch error
    if (!window.fetch) {
        return;
    }
    const oldFetch = window.fetch;
    window.fetch = function () {
        return oldFetch
            .apply(this, arguments)
            .then((res) => {
            return res;
        })
            .catch((error) => {
            plugin.onError({ message: error }, error);
            throw error;
        });
    };
};
exports.xhrAndFetchErrorMount = xhrAndFetchErrorMount;
