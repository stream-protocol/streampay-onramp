const { SendMailClient } = require("zeptomail");

const sendMailClient = new SendMailClient({
    url: "api.zeptomail.com/",
    token: process.env.ZEPTOMAIL_TOKEN
});

function sendMail(options) {
    return sendMailClient.sendMail({
        from: {
            address: "noreply@streamprotocol.org",
            name: "StreamPay"
        },
        to: [{
            email_address: {
                address: options.to.email,
                name: options.to.name
            }
        }],
        subject: options.subject,
        htmlbody: options.body
    });
}

module.exports = {
    sendWelcome(user) {
        sendMail({
            subject: "Welcome to StreamPay™",
            body: /* HTML content for welcome email */ ,
            to: user
        });
    },

    sendMoneySent(data) {
        sendMail({
            subject: "Funds Sent Notification",
            body: /* HTML content for funds sent notification */ ,
            to: data.user
        }).catch((err) => console.log(err));
    }
};