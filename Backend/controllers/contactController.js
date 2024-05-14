import nodemailer from "nodemailer";

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, telephone, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: "email@example.com",
        pass: "password",
      },
    });

    const mailOptions = {
      from: "email@example.com",
      to: "email@example.com",
      subject: "New Contact Form Submission",
      html: `
    <h2 style="text-align:center">Contact Form Submission</h2>
    <p><strong style="color: red;">Name:</strong> ${name}</p>
    <p><strong style="color: red;">Email:</strong> ${email}</p>
    <p><strong style="color: red;">Telephone:</strong> ${telephone}</p>
    <p><strong style="color: red;"> Message:</strong></p>
    <p style="font-style: italic;">${message}</p>
  `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
