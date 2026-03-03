import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { slug } = data;

    if (!slug) {
        return new Response(JSON.stringify({ error: 'Missing slug' }), { status: 400 });
    }

    // Send the email
    await resend.emails.send({
      from: 'Book Delivery <onboarding@resend.dev>', // Update this to your verified domain later
      to: import.meta.env.MY_EMAIL_ADDRESS,
      subject: `Someone visited ${slug} on ClosersPress.com`,
      html: `<p>Someone visited ${slug} on ClosersPress.com</p>`
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to send' }), { status: 500 });
  }
}