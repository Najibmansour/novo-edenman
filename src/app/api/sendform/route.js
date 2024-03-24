import { tpt, mailOptions } from "@/lib/nodemailerClient";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.body;

  await tpt
    .sendMail({
      ...mailOptions,
      subject: data.subject,
      text: "test text",
      html: "<h1>TEST H!</h1><p>test paragraph</p>",
    })
    .then(() => {
      return res.status(200).json({ success: true });
    })
    .catch((err) => {
      return res.status(400).json({ message: err.message });
    });

  return NextResponse.json(data);
}

export async function GET() {
  // const data = await req.json();
  return NextResponse.json({
    asd: "asd",
  });
}
