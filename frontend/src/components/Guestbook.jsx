import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Guestbook() {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)
    const [submitting, setSubmitting] = useState(false)
    const [status, setStatus] = useState({ type: '', text: '' })
    const [form, setForm] = useState({ name: '', message: '' })

    // Fetch messages on mount
    useEffect(() => {
        fetchMessages()
    }, [])

    const fetchMessages = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/messages`)
            setMessages(res.data)
        } catch (err) {
            console.error('Failed to fetch messages:', err)
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!form.name.trim() || !form.message.trim()) return

        setSubmitting(true)
        setStatus({ type: '', text: '' })

        try {
            const res = await axios.post(`${API_URL}/api/messages`, {
                name: form.name.trim(),
                message: form.message.trim(),
            })
            setMessages((prev) => [res.data, ...prev])
            setForm({ name: '', message: '' })
            setStatus({ type: 'success', text: '✨ Message sent! It will float when gravity is off.' })
        } catch (err) {
            const errMsg = err.response?.data?.error || 'Failed to send message'
            setStatus({ type: 'error', text: errMsg })
        } finally {
            setSubmitting(false)
        }
    }

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        })
    }

    return (
        <section className="guestbook" id="guestbook">
            <div className="container">
                <div className="section-heading">
                    <h2>Floating Guestbook</h2>
                    <p>Leave a message — it&apos;ll float when gravity is off! 🚀</p>
                </div>

                <div className="guestbook-layout">
                    {/* Form */}
                    <div className="guestbook-form-card" data-physics="true">
                        <h3>✍️ Sign the Guestbook</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="guestName">Your Name</label>
                                <input
                                    id="guestName"
                                    type="text"
                                    placeholder="Jane Doe"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    maxLength={100}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="guestMessage">Your Message</label>
                                <textarea
                                    id="guestMessage"
                                    placeholder="Great portfolio! Love the anti-gravity effect 🚀"
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    maxLength={500}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="form-submit"
                                disabled={submitting}
                            >
                                {submitting ? (
                                    <span className="loading-spinner"></span>
                                ) : (
                                    'Send Message 🚀'
                                )}
                            </button>
                            {status.text && (
                                <p className={`form-status ${status.type}`}>{status.text}</p>
                            )}
                        </form>
                    </div>

                    {/* Messages */}
                    <div className="guestbook-messages">
                        {loading ? (
                            <div className="guestbook-empty">
                                <span className="loading-spinner" style={{ width: 40, height: 40 }}></span>
                                <p>Loading messages...</p>
                            </div>
                        ) : messages.length === 0 ? (
                            <div className="guestbook-empty">
                                <span>📬</span>
                                <p>No messages yet. Be the first to sign!</p>
                            </div>
                        ) : (
                            messages.map((msg) => (
                                <div
                                    className="message-card"
                                    key={msg.id}
                                    data-physics="true"
                                >
                                    <div className="message-header">
                                        <span className="message-author">{msg.name}</span>
                                        <span className="message-date">
                                            {formatDate(msg.created_at)}
                                        </span>
                                    </div>
                                    <p className="message-text">{msg.message}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
