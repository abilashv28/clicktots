const nodemailer = require('nodemailer');

const sendEmail = async (contactData) => {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('Email configuration is missing. Please check your .env file.');
        return;
    }    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Email content
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.ADMIN_EMAIL,
        subject: 'New Contact Form Submission',
        html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Message:</strong></p>
            <p>${contactData.message}</p>
            <p><strong>Timestamp:</strong> ${new Date(contactData.timestamp).toLocaleString()}</p>
        `
    };    try {
        // Verify SMTP connection configuration
        await transporter.verify();
        
        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email notification sent successfully');
        console.log('Message ID:', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending email notification:', error.message);
        if (error.code === 'EAUTH') {
            console.error('Authentication failed. Please check your email credentials.');
        } else if (error.code === 'ESOCKET') {
            console.error('Connection failed. Please check your EMAIL_HOST and EMAIL_PORT settings.');
        }
        return false;
    }
};

module.exports = sendEmail;
