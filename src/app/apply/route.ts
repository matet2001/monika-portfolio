import nodemailer from "nodemailer";

type ApplyRequestBody = {
  firstName: string;
  lastName: string;
  email: string;
  type: string;
};

export async function POST(
  req: Request,
) {
  const { firstName, lastName, email, type } = await req.json() as ApplyRequestBody;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    // Email to applicant
    await transporter.sendMail({
      from: `"Mónika" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Jelentkezés visszaigazolás",
      text: `Kedves ${firstName},\n\nKöszönöm a jelentkezésed a(z) ${type} családállításra! Hamarosan keresni foglak.\n\nÜdvözlettel,\nMónika`,
    });

    // Email to Monika
    await transporter.sendMail({
      from: `"Mónika" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "Új jelentkezés",
      text: `Új jelentkező:\n\nNév: ${firstName} ${lastName}\nEmail: ${email}\nTípus: ${type}`,
    });

    return new Response("Email sent succesfully", {
      headers: {"Content-type": "application/json"},
      status: 201
    })
  } catch (error) {
    console.error("Error sending emails:", error);
    return new Response("Failed to send email", {
      headers: { "Content-type": "application/json" },
      status: 500,
    });
  }
}
