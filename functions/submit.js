// Cloudflare Pages Function — handles form submissions from get-support.html
// POST /submit -> sends form data as email via SendGrid (or logs it for now)
// See: https://developers.cloudflare.com/pages/functions/

export async function onRequest(context) {
    const { request } = context;

    if (request.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 });
    }

    try {
        const formData = await request.formData();

        const firstName = formData.get('first-name') || '';
        const lastName = formData.get('last-name') || '';
        const phone = formData.get('phone') || '';
        const email = formData.get('email') || '';
        const county = formData.get('county') || '';
        const role = formData.get('role') || '';
        const message = formData.get('message') || '';
        const language = formData.get('language') || '';

        // Basic validation: name required, at least phone or email
        if (!firstName || !lastName) {
            return redirectWithError(request, 'Please provide your name.');
        }
        if (!phone && !email) {
            return redirectWithError(request, 'Please provide a phone number or email so we can follow up.');
        }

        // Build email body
        const body = [
            `New contact form submission from redwoodhorizon.org`,
            ``,
            `Name: ${firstName} ${lastName}`,
            `Phone: ${phone || '—'}`,
            `Email: ${email || '—'}`,
            `County: ${county}`,
            `I am: ${role || '—'}`,
            `Language: ${language}`,
            `Message: ${message || '—'}`,
        ].join('\n');

        // Try to send via SendGrid if API key is configured
        const sendgridKey = context.env.SENDGRID_API_KEY;
        const toEmail = context.env.TO_EMAIL || 'contact@redwoodhorizon.org';

        if (sendgridKey) {
            await fetch('https://api.sendgrid.com/v3/mail/send', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${sendgridKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    personalizations: [{ to: [{ email: toEmail }] }],
                    from: { email: toEmail },
                    replyTo: email ? { email } : undefined,
                    subject: `[Redwood Horizon] Contact from ${firstName} ${lastName}`,
                    content: [{ type: 'text/plain', value: body }],
                }),
            });
        } else {
            // No SendGrid key configured — log to console (visible in Cloudflare dashboard)
            console.log('Form submission (no SendGrid key configured):', body);
            console.log('Set SENDGRID_API_KEY and TO_EMAIL env vars in Cloudflare Pages dashboard.');
        }

        // Redirect back to get-support page with success parameter
        const url = new URL(request.url);
        return Response.redirect(`${url.origin}/get-support.html?success=1`, 302);

    } catch (err) {
        console.error('Form submission error:', err);
        return redirectWithError(request, 'Something went wrong. Please try again or email us directly.');
    }
}

function redirectWithError(request, errorMsg) {
    const url = new URL(request.url);
    return Response.redirect(`${url.origin}/get-support.html?error=${encodeURIComponent(errorMsg)}`, 302);
}
