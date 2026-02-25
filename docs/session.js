/**
 * Sesión en el navegador (localStorage). Sin servidor.
 * Clave única para no colisionar con otras apps.
 */
(function () {
    "use strict";
    var KEY = "anibal_user";

    window.getSession = function () {
        try {
            var raw = localStorage.getItem(KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    };

    window.setSession = function (user) {
        if (user && user.email) {
            localStorage.setItem(KEY, JSON.stringify({ email: user.email, name: user.name || user.email }));
        }
    };

    window.clearSession = function () {
        localStorage.removeItem(KEY);
    };
})();
