class PaymentPopup {
    static instance;

    options = {
        recipient: "",
    };

    data = {
        fiat: "EUR",
        customer_email: "",
        amount: "",
    };

    iframe;

    constructor(options) {
        this.options = options;
    }

    static initialize(options) {
        if (!PaymentPopup.instance) {
            PaymentPopup.instance = new PaymentPopup(options);
            PaymentPopup.instance.loadIframe();
        }

        return PaymentPopup.instance;
    }

    open(data) {
        this.data = data;

        if (this.iframe.contentWindow) {
            this.iframe.contentWindow.postMessage({
                data: this.data,
                action: "PaymentPopup:data",
            }, "http://localhost:5001");
        }

        this.iframe.setAttribute(
            "style",
            "position: absolute; left: 0; top: 0; z-index: 100; border: none; outline: none;"
        );
        document.body.setAttribute("overflow-y", "hidden");
        this.iframe.width = "100%";
        this.iframe.height = "100%";
    }

    loadIframe() {
        this.iframe = document.createElement("iframe");
        this.iframe.src = "http://localhost:5001";
        this.iframe.setAttribute(
            "style",
            "position: absolute; left: -100; top: -100; z-index: 100; border: none; outline: none;"
        );
        this.iframe.width = "0";
        this.iframe.height = "0";

        this.iframe.onload = () => {
            if (this.iframe.contentWindow) {
                this.iframe.contentWindow.postMessage({
                    options: this.options,
                    action: "PaymentPopup:options",
                }, "http://localhost:5001");
            }
        };

        document.body.appendChild(this.iframe);
    }
}

// Attach the class to the window object
window.PaymentPopup = PaymentPopup;
