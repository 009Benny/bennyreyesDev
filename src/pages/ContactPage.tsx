import { useState } from 'react';
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { SocialRow } from '../components/subviews/SocialRow';
import { SocialPlatform } from "../components/helpers/SocialOptions.tsx";

interface ContactInfoCardProps {
    title: string;
    subtitle: string;
}

type FormState = {
    name: string;
    email: string;
    subject: string;
    message: string;
    company: string; // honeypot (hidden from humans)
};

type Status = 'idle' | 'sending' | 'success' | 'error';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactPage = ({
    title = "",
    subtitle = ""
}: ContactInfoCardProps) => {
    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        subject: '',
        message: '',
        company: '',
    });
    const [status, setStatus] = useState<Status>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    // --- Validation ---
    const nameValid = form.name.trim().length >= 2;
    const emailValid = emailRegex.test(form.email);
    const messageValid = form.message.trim().length >= 10;
    const isValid = nameValid && emailValid && messageValid;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setForm((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isValid || status === 'sending') return;

        setStatus('sending');
        setErrorMsg('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || 'Failed to send message.');
            }

            setStatus('success');
            setForm({ name: '', email: '', subject: '', message: '', company: '' });
        } catch (err) {
            setStatus('error');
            setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
        }
    };

    const inputClass =
        "w-full bg-[#161618] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all";

    return (
        <main className="min-h-[80vh] flex items-center justify-center">

            {/* Vertical Container */}
            <div className="flex flex-col items-start justify-center max-w-4xl w-full px-4 sm:px-6 lg:px-8">

                {/* Titles Container */}
                <div className="max-w-xl">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                        {title}<br className="hidden sm:block" />
                    </h2>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {subtitle}
                    </p>
                </div>


                {/* Columns container */}
                <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-8">

                    {/* Form */}
                    <form onSubmit={handleSubmit} noValidate className="col-span-2 md:col-span-2 flex flex-col gap-4">

                        {/* Inputs: Name and email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label htmlFor="name" className="text-xs font-medium text-gray-400 ml-1">Full name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className={inputClass}
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-xs font-medium text-gray-400 ml-1">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="example@mail.com"
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        {/* Input: Subject */}
                        <div className="space-y-1.5">
                            <label htmlFor="subject" className="text-xs font-medium text-gray-400 ml-1">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="Select a topic or write your own..."
                                className={inputClass}
                            />
                        </div>

                        {/* Input: Message */}
                        <div className="space-y-1.5">
                            <label htmlFor="message" className="text-xs font-medium text-gray-400 ml-1">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project, idea or question..."
                                className={`${inputClass} resize-none`}
                            ></textarea>
                        </div>

                        {/* Honeypot: hidden from real users, catches bots */}
                        <input
                            type="text"
                            id="company"
                            value={form.company}
                            onChange={handleChange}
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            className="hidden"
                        />

                        {/* Status messages */}
                        {status === 'success' && (
                            <p className="text-sm text-green-400 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" />
                                Thanks! Your message was sent. I'll get back to you soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="text-sm text-red-400">
                                {errorMsg || 'Could not send your message. Please try again.'}
                            </p>
                        )}

                        {/* Send button */}
                        <button
                            type="submit"
                            disabled={!isValid || status === 'sending'}
                            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/40 disabled:cursor-not-allowed text-white text-sm font-semibold py-3.5 rounded-full transition-all flex items-center justify-center gap-2"
                        >
                            {status === 'sending' ? (
                                <>
                                    Sending...
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                </>
                            ) : (
                                <>
                                    Send message
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="col-span-1 md:col-span-1 flex flex-col gap-3">

                        <SocialRow
                            platform={SocialPlatform.EMAIL}
                            url="mailto:009bennyreyes@gmail.com"
                        />
                        <SocialRow
                            platform={SocialPlatform.LINKEDIN}
                            url="https://www.linkedin.com/in/benny-reyes-sosa/"
                        />
                        <SocialRow
                            platform={SocialPlatform.GITHUB}
                            url="https://github.com/009Benny"
                        />

                    </div>

                </div>

            </div>


        </main>
    );
}
