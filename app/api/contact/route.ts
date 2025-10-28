import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'すべてのフィールドを入力してください' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      );
    }

    // TODO: Implement actual email sending
    // Example using Resend, SendGrid, or Nodemailer
    // For now, just log the data
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending
    // await resend.emails.send({
    //   from: 'noreply@peach-llc.com',
    //   to: 'peach.2023.7.19@gmail.com',
    //   subject: `お問い合わせ: ${subject}`,
    //   html: `
    //     <h2>新しいお問い合わせ</h2>
    //     <p><strong>お名前:</strong> ${name}</p>
    //     <p><strong>メールアドレス:</strong> ${email}</p>
    //     <p><strong>件名:</strong> ${subject}</p>
    //     <p><strong>メッセージ:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: 'お問い合わせを受け付けました' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
