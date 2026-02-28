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

    window.setSession = function (userData) {
        if (userData && userData.email) {
            // Guardamos todo el objeto data que viene del API
            localStorage.setItem(KEY, JSON.stringify(userData));
        }
    };

    window.isSubscriptionActive = function () {
        var user = window.getSession();
        if (!user) return 0;

        // Predominancia de subscriptionPlan
        var plan = String(user.subscriptionPlan).toLowerCase().trim();
        if (plan === "0" || plan === "zero" || plan === "cero") {
            return 0;
        }

        if (!user.subscriptionStartDate || !user.subscriptionDurationDays) {
            return 0;
        }

        // Validación de fechas
        try {
            var rawDate = user.subscriptionStartDate;
            var start;

            if (rawDate.includes("T")) {
                // Es un ISO string, lo parseamos directo
                start = new Date(rawDate);
            } else {
                // Es un YYYY-MM-DD, aplicamos el fix de slash para evitar desfases de zona horaria
                start = new Date(rawDate.replace(/-/g, "/"));
            }

            var duration = parseInt(user.subscriptionDurationDays, 10);
            var now = new Date();

            if (isNaN(start.getTime())) return 0;

            // Calculamos fecha de fin (al final del día de vencimiento)
            var end = new Date(start);
            end.setDate(start.getDate() + duration);

            // Si la fecha inicial no tiene hora (ej: YYYY-MM-DD), 
            // nos aseguramos que 'end' sea el final de ese día.
            if (!rawDate.includes("T")) {
                end.setHours(23, 59, 59, 999);
            }

            // Si hoy es menor o igual a la fecha de fin
            return now <= end ? 1 : 0;
        } catch (e) {
            console.error("Error validando suscripción:", e);
            return 0;
        }
    };

    window.clearSession = function () {
        localStorage.removeItem(KEY);
    };
})();
