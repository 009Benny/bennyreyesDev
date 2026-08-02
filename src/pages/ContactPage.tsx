// ArrowRight, Mail, Linkedin, Github
import { ArrowRight } from 'lucide-react';
import { SocialRow } from '../components/subviews/SocialRow';
import { SocialPlatform } from "../components/helpers/SocialOptions.tsx";

interface ContactInfoCardProps {
    title: string;
    subtitle: string;
}

export const ContactPage = ({
    title = "",
    subtitle = ""
}: ContactInfoCardProps) => {
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
                    <form className="col-span-2 md:col-span-2 flex flex-col gap-4">
          
                        {/* Inputs: Name and email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                            <label htmlFor="name" className="text-xs font-medium text-gray-400 ml-1">Full name</label>
                            <input 
                                type="text" 
                                id="name"
                                placeholder="Your name"
                                className="w-full bg-[#161618] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            />
                            </div>
                            
                            <div className="space-y-1.5">
                            <label htmlFor="email" className="text-xs font-medium text-gray-400 ml-1">Email address</label>
                            <input 
                                type="email" 
                                id="email"
                                placeholder="example@mail.com"
                                className="w-full bg-[#161618] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            />
                            </div>
                        </div>

                        {/* Input: Subject */}
                        <div className="space-y-1.5">
                            <label htmlFor="subject" className="text-xs font-medium text-gray-400 ml-1">Subject</label>
                            <input 
                            type="text" 
                            id="subject"
                            placeholder="Select a topic or write your own..."
                            className="w-full bg-[#161618] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Input: Message */}
                        <div className="space-y-1.5">
                            <label htmlFor="message" className="text-xs font-medium text-gray-400 ml-1">Message</label>
                            <textarea 
                            id="message"
                            rows={5}
                            placeholder="Tell me about your project, idea or question..."
                            className="w-full bg-[#161618] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                            ></textarea>
                        </div>

                        {/* Botón de Enviar */}
                        <button 
                            type="button" 
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-3.5 rounded-full transition-all flex items-center justify-center gap-2"
                        >
                            Send message
                            <ArrowRight className="w-4 h-4" />
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
