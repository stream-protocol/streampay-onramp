const { SendMailClient } = require("zeptomail");

const emailTemplates = {
  welcome: (user) => ({
    subject: "Welcome to StreamPay Onramp",
    body: `
      <table align="center" width="600" bgcolor="#ffffff" cellpadding="0" cellspacing="0" style="border-radius: 8px; margin: 0 auto; padding: 20px;">
        <tr>
            <td align="center">
                <img src="https://streampayments.org/images/streampay-logo.svg" alt="StreamPay Logo" style="display: block; margin: 0 auto; padding: 20px;">
            </td>
        </tr>
        <tr>
            <td style="padding: 20px;">
                <h1>Welcome to StreamPay: Your Gateway to Seamless Solana P2P Ramping</h1>
                <p>Dear ${user.name},</p>
                <p>Welcome to StreamPay: Onramp, your premier platform for seamless peer-to-peer ramping on the Solana network. We are thrilled to have you on board and excited to introduce you to a world of simplified, secure, and efficient ramping.</p>
                <h2>What is StreamPay?</h2>
                <p>StreamPay Onramp is a groundbreaking platform designed to connect Solana enthusiasts like you with trusted peers who can help you securely acquire or dispose of SOL tokens. Our mission is to provide a safe, user-friendly environment for you to transact, ensuring that your experience with Solana is as smooth as possible.</p>
                <h2>Key Features:</h2>
                <ul>
                    <li>Peer-to-Peer Ramping: StreamPay Onramp app facilitates direct transactions between Solana users. No intermediaries, no third-party involvement - just a straightforward ramping experience.</li>
                    <li>Secure Escrow Services: We use an escrow system to ensure that both buyers and sellers are protected throughout the transaction process. Funds are only released once both parties are satisfied.</li>
                    <li>Identity Verification: Your safety is paramount to us. We verify the identities of all users on the platform, giving you the peace of mind you need when conducting transactions.</li>
                    <li>User Reviews: Gain insights into the reputation of your ramping partner through user reviews and ratings. Choose who you want to transact with based on their track record.</li>
                    <li>Instant Notifications: Stay updated with real-time notifications about transaction progress, ensuring you're always in the loop.</li>
                </ul>
                <h2>Getting Started:</h2>
                <ol>
                    <li>Complete Your Profile: Make sure your StreamPay profile is complete and up-to-date. This will help you build trust with other users on the platform.</li>
                    <li>Browse Listings: Search for suitable ramping partners or create your own listings if you're looking to buy or sell SOL tokens.</li>
                    <li>Secure Escrow: Once you find a suitable partner, initiate a transaction and let our secure escrow service handle the rest.</li>
                    <li>Stay Informed: Keep an eye on your dashboard for transaction progress and communicate with your partner through our messaging system.</li>
                </ol>
                <p>StreamPay is designed to make your journey with Solana easier and safer, and we're committed to ensuring that you have the best ramping experience possible.</p>
                <p>If you ever have questions or need assistance, don't hesitate to reach out to our dedicated support team at <a href="mailto:support@streampayments.org">support@streampayments.org</a>. We're here to help you every step of the way.</p>
                <p>Thank you for choosing StreamPay Onramp. We look forward to revolutionizing your Solana experience.</p>
                <p>Happy Ramping!</p>
                <p>Best regards,</p>
                <p>StreamPayments Ltd.</p>
                <a href="https://streampayments.org" style="text-decoration: none; color: #F1F3F5;">www.streampayments.org</a>
            </td>
        </tr>
      </table>`,
    to: user.email,
    name: user.name,
  }),

  moneySent: (data) => ({
    subject: "Funds Sent Notification",
    body: `
      <table align="center" width="600" bgcolor="#ffffff" cellpadding="0" cellspacing="0" style="border-radius: 8px; margin: 0 auto; padding: 20px;">
        <tr>
            <td style="padding: 20px;">
                <h1>Funds Sent Notification</h1>
                <p>Dear ${data.user.name},</p>
                <p>We are pleased to inform you that a customer has sent you funds for the following transaction:</p>
                <table style="width: 100%; margin: 20px 0;">
                    <tr>
                        <td><strong>Fiat Currency:</strong></td>
                        <td>${data.fiat}</td>
                    </tr>
                    <tr>
                        <td><strong>Token:</strong></td>
                        <td>${data.token}</td>
                    </tr>
                    <tr>
                        <td><strong>Amount:</strong></td>
                        <td>${data.amount}</td>
                    </tr>
                </table>
                <p>Please review the transaction details and click the button below to release the token to the customer:</p>
                <a href="${data.link}" style="display: inline-block; background-color: #007BFF; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Release Token</a>
                <p>If you have any questions or need further assistance, please don't hesitate to contact our support team.</p>
                <p>Thank you for using our platform. We appreciate your business.</p>
                <p>Best regards</p>
            </td>
        </tr>
      </table>
`,
    to: data.user.email,
    name: data.user.name,
  }),
};

const sendEmail = async ({ subject, body, to, name }) => {
  const client = new SendMailClient({
    url: process.env.ZEPTOMAIL_URL || "api.zeptomail.com/",
    token: process.env.ZEPTOMAIL_TOKEN,
  });

  try {
    await client.sendMail({
      from: {
        address: "noreply@streampayments.org",
        name: "StreamPay",
      },
      to: [
        {
          email_address: {
            address: to,
            name: name,
          },
        },
      ],
      subject,
      htmlbody: body,
    });
  } catch (err) {
    console.error("Failed to send email:", err);
  }
};

module.exports = {
  sendWelcome: async (user) => {
    const email = emailTemplates.welcome(user);
    await sendEmail(email);
  },

  sendMoneySent: async (data) => {
    const email = emailTemplates.moneySent(data);
    await sendEmail(email);
  },
};