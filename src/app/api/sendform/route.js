import { tpt, mailOptions, compileFeedbackTemplate } from "@/lib/nodemailerClient";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data  = await req.json()
  const {from_name, from_email, message} = data
  
  try {
  const mail = await tpt.sendMail({
        from: from_email,
        to: process.env.NEXT_PUBLIC_NODEMAILER_MAIL,
        replyTo: from_email,
        subject: `Edenmen FeedBack from Website ${from_email}`,
        html:compileFeedbackTemplate(from_name,from_email,message)
    })

    return NextResponse.json({ message: "Success: email was sent" })

} catch (error) {
    console.log(error)
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
}
  
}

export async function GET() {
  // const data = await req.json();
  return NextResponse.json({
    asd: "asd",
  });
}
