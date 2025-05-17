'use client';

import { useState } from 'react';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (form.honeypot) return; // Bot detected

    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      setForm({ name: '', email: '', message: '', honeypot: '' });
    } else {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />
      <div>
        <label htmlFor="name" className="block font-semibold">Name</label>
        <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label htmlFor="message" className="block font-semibold">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange} required className="w-full border rounded px-3 py-2" rows={5} />
      </div>
      {error && <div className="text-red-600">{error}</div>}
      {success && <div className="text-green-600">Thank you! We'll be in touch soon.</div>}
      <button type="submit" className="bg-brand-primary text-white px-6 py-2 rounded" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
} 