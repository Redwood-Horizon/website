// Cloudflare Pages Function — handles form submissions for the redesign.
// POST /submit with URL-encoded FormData -> sends email via SendGrid (or logs if no key).
// Returns JSON with a status code so the client-side fetch in site.js can react.
// Route: functions/submit.js is served at /submit (legacy Pages Function layout).

export async function onRequest(context) {
    const { request } = context;

    if (request.method !== 'POST') {
        return json({ ok: false, error: 'Method not allowed' }, 405);
    }

    try {
        const formData = await request.formData();

        const firstName = formData.get('first_name') || formData.get('first-name') || '';
        const lastName = formData.get('last_name') || formData.get('last-name') || '';
        const phone = formData.get('phone') || '';
        const email = formData.get('email') || '';
        const county = formData.get('county') || '';
        const role = formData.get('role') || '';
        const topic = formData.get('topic') || '';
        const message = formData.get('message') || '';
        const language = formData.get('preferred_language') || formData.get('language') || '';

        // Basic validation
        if (!firstName || !lastName) {
            return json({ ok: false, error: 'Please provide your name.' }, 400);
        }
        if (!phone && !email) {
            return json({ ok: false, error: 'Please provide a phone number or email so we can follow up.' }, 400);
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
            topic ? `Topic: ${topic}` : `Language: ${language || '—'}`,
            `Message: ${message || '—'}`,
        ].join('\n');

        // Send via SendGrid if an API key is configured
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

        return json({ ok: true }, 200);
    } catch (err) {
        console.error('Form submission error:', err);
        return json({ ok: false, error: 'Something went wrong. Please try again or email us directly.' }, 500);
    }
}

function json(payload, status) {
    return new Response(JSON.stringify(payload), {
        status,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}