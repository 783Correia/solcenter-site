import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const DEST = 'comercial5@solcenter.com.br'

const sourceLabel: Record<string, string> = {
  'site': 'Site principal',
  'lp-energia': 'LP Energia Residencial',
  'lp-agro': 'LP Agro',
  'lp-empresarial': 'LP Empresarial',
  'lp-monitoramento-pro': 'LP Monitoramento PRO',
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, city, source, ...extras } = body

    const resend = new Resend(process.env.RESEND_API_KEY)
    const origem = sourceLabel[source] ?? source ?? 'Desconhecida'

    const extraLines = Object.entries(extras)
      .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#666;font-size:14px;">${k}</td><td style="padding:6px 12px;font-size:14px;font-weight:600;">${v}</td></tr>`)
      .join('')

    await resend.emails.send({
      from: 'SolCenter <noreply@solcenter.com.br>',
      to: DEST,
      subject: `🔆 Novo lead — ${origem}${name ? `: ${name}` : ''}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;">
          <div style="background:#0a1628;padding:24px 32px;border-radius:12px 12px 0 0;">
            <p style="color:#FFB100;font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;margin:0 0 4px;">Novo Lead</p>
            <h1 style="color:#fff;font-size:22px;font-weight:900;margin:0;">${origem}</h1>
          </div>
          <div style="background:#f8f8f8;padding:24px 32px;border-radius:0 0 12px 12px;border:1px solid #e5e5e5;border-top:none;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:6px 12px;color:#666;font-size:14px;">Nome</td><td style="padding:6px 12px;font-size:14px;font-weight:600;">${name ?? '—'}</td></tr>
              <tr style="background:#fff;"><td style="padding:6px 12px;color:#666;font-size:14px;">WhatsApp</td><td style="padding:6px 12px;font-size:14px;font-weight:600;"><a href="https://wa.me/55${phone?.replace(/\D/g,'')}" style="color:#00a651;">${phone ?? '—'}</a></td></tr>
              <tr><td style="padding:6px 12px;color:#666;font-size:14px;">Cidade</td><td style="padding:6px 12px;font-size:14px;font-weight:600;">${city ?? '—'}</td></tr>
              ${extraLines}
            </table>
            <div style="margin-top:20px;text-align:center;">
              <a href="https://wa.me/55${phone?.replace(/\D/g,'')}" style="display:inline-block;background:#00a651;color:#fff;font-weight:700;padding:12px 28px;border-radius:99px;text-decoration:none;font-size:14px;">Abrir WhatsApp</a>
            </div>
            <p style="margin-top:20px;color:#aaa;font-size:11px;text-align:center;">solcenter.com.br · ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Lead email error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
