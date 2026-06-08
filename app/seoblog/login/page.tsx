'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/seoblog/posts')
    } else {
      const data = await res.json()
      setError(data.error || 'Erro ao entrar')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-sm border border-gray-800">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4" style={{ background: 'rgba(255,177,0,.1)' }}>
            <span className="font-black text-xl" style={{ color: '#FFB100' }}>S</span>
          </div>
          <h1 className="text-white text-xl font-bold">SolCenter Blog Admin</h1>
          <p className="text-gray-500 text-sm mt-1">Entre para gerenciar os posts</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
            autoFocus
            className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 outline-none placeholder-gray-600"
            style={{ border: '1px solid transparent' }}
            onFocus={e => (e.currentTarget.style.boxShadow = '0 0 0 2px #FFB100')}
            onBlur={e => (e.currentTarget.style.boxShadow = 'none')}
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full font-bold py-3 rounded-xl transition-colors disabled:opacity-50 text-gray-950"
            style={{ background: '#FFB100' }}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
