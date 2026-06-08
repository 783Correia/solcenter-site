import { supabaseAdmin } from '@/app/lib/supabase-admin'

export const dynamic = 'force-dynamic'

const sourceLabel: Record<string, string> = {
  'site': 'Site',
  'lp-energia': 'LP Energia',
  'lp-agro': 'LP Agro',
  'lp-empresarial': 'LP Empresarial',
  'lp-monitoramento-pro': 'Monitoramento PRO',
}

const sourceBadge: Record<string, string> = {
  'site': '#6366f1',
  'lp-energia': '#FFB100',
  'lp-agro': '#22c55e',
  'lp-empresarial': '#3b82f6',
  'lp-monitoramento-pro': '#f97316',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

export default async function LeadsPage() {
  const { data: leads } = await supabaseAdmin()
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white text-2xl font-bold">Leads</h1>
          <p className="text-gray-500 text-sm mt-0.5">{leads?.length ?? 0} leads no total</p>
        </div>
      </div>

      {(!leads || leads.length === 0) && (
        <div className="text-center py-20 bg-gray-900 rounded-2xl border border-gray-800">
          <p className="text-gray-400 text-lg mb-2">Nenhum lead ainda</p>
          <p className="text-gray-600 text-sm">Os leads aparecerão aqui quando alguém preencher um formulário.</p>
        </div>
      )}

      {leads && leads.length > 0 && (
        <div className="space-y-2">
          {leads.map(lead => (
            <div key={lead.id} className="bg-gray-900 rounded-xl px-5 py-4 flex items-start gap-4 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
                    style={{ background: sourceBadge[lead.source] ?? '#666' }}>
                    {sourceLabel[lead.source] ?? lead.source}
                  </span>
                  <span className="text-gray-600 text-xs">{formatDate(lead.created_at)}</span>
                </div>

                <div className="flex items-center gap-4 flex-wrap mt-1">
                  <p className="text-white font-semibold">{lead.name ?? '—'}</p>
                  {lead.phone && (
                    <a href={`https://wa.me/55${lead.phone.replace(/\D/g, '')}`}
                      target="_blank" rel="noopener noreferrer"
                      className="text-[#25d366] text-sm font-medium hover:underline">
                      {lead.phone}
                    </a>
                  )}
                  {lead.city && (
                    <span className="text-gray-400 text-sm">{lead.city}</span>
                  )}
                </div>

                {lead.extra && Object.keys(lead.extra).length > 0 && (
                  <div className="flex gap-3 mt-1.5 flex-wrap">
                    {Object.entries(lead.extra).map(([k, v]) => (
                      <span key={k} className="text-xs text-gray-500">
                        <span className="text-gray-600">{k}:</span> {String(v)}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {lead.phone && (
                <a href={`https://wa.me/55${lead.phone.replace(/\D/g, '')}`}
                  target="_blank" rel="noopener noreferrer"
                  className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg text-white transition-colors"
                  style={{ background: '#25d366' }}>
                  WhatsApp
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
