/**
 * useGuestbook.js
 * Handles fetching and posting guestbook messages to the Flask backend.
 */
import { ref } from 'vue'

const API = import.meta.env.VITE_API_URL || 'https://personal-website-finals-1.onrender.com'

export function useGuestbook() {
    const messages = ref([])
    const loading = ref(true)
    const status = ref(null) // { text: string, type: 'success'|'error' }

    function escHtml(s) {
        const d = document.createElement('div')
        d.textContent = s
        return d.innerHTML
    }

    function fmtDate(d) {
        return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }

    async function loadMessages() {
        loading.value = true
        try {
            const r = await fetch(`${API}/api/messages`)
            if (!r.ok) throw new Error()
            messages.value = await r.json()
        } catch {
            messages.value = null // signals offline
        } finally {
            loading.value = false
        }
    }

    async function postMessage(name, message) {
        status.value = null
        try {
            const r = await fetch(`${API}/api/messages`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, message })
            })
            const data = await r.json()
            if (!r.ok) throw new Error(data.error || 'Error')
            if (Array.isArray(messages.value)) messages.value.unshift(data)
            status.value = { text: '✨ Message sent! It will float when gravity is off.', type: 'success' }
            return true
        } catch (err) {
            status.value = { text: '⚠️ ' + err.message, type: 'error' }
            return false
        }
    }

    return { messages, loading, status, loadMessages, postMessage, escHtml, fmtDate }
}
