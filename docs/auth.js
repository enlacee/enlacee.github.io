(function () {
    "use strict";

    // --- Modal Logic ---
    const modal = document.getElementById("login-modal");
    const openBtn = document.getElementById("header-login-btn");
    const closeBtn = document.getElementById("close-modal");

    function toggleModal(show) {
        if (show) {
            modal.style.display = "flex";
            setTimeout(() => modal.classList.add("active"), 10);
            window.activeAuthContext = 'modal'; // Set context for Google callback
        } else {
            modal.classList.remove("active");
            setTimeout(() => modal.style.display = "none", 300);
            // Reset context after some time or on close
        }
    }

    // Expose so index.html can close modal after successful Google sign-in
    window.closeLoginModal = function () { toggleModal(false); };

    if (openBtn) openBtn.onclick = () => toggleModal(true);
    if (closeBtn) closeBtn.onclick = () => toggleModal(false);

    window.onclick = (e) => {
        if (e.target === modal) toggleModal(false);
    };

    // --- Frontend-only Google Sign-In Logic ---
    function decodeJwt(token) {
        const payload = token.split(".")[1];
        return JSON.parse(
            decodeURIComponent(
                atob(payload)
                    .split("")
                    .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
                    .join("")
            )
        );
    }

    // Render the button in the modal
    // Note: We assume google.accounts.id is already initialized by the main script
    // or we will wait for it.
    window.renderModalAuth = function () {
        if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
            google.accounts.id.renderButton(
                document.getElementById("modal-google-btn"),
                { theme: "outline", size: "large", width: 320, logo_alignment: "center", text: "continue_with" }
            );
        } else {
            // Retry if SDK not yet loaded
            setTimeout(window.renderModalAuth, 100);
        }
    };

})();
