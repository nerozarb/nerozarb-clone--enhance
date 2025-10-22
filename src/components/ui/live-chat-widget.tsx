"use client";

import { useState } from 'react';
import { MessageCircle, X, Send, Phone } from 'lucide-react';

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      // Redirect to WhatsApp with pre-filled message
      const whatsappUrl = `https://wa.me/923266116911?text=${encodeURIComponent(message)}`;
      const isInIframe = window.self !== window.top;
      if (isInIframe) {
        window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: whatsappUrl } }, "*");
      } else {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }
      setMessage('');
      setIsOpen(false);
    }
  };

  const quickMessages = [
    "I want to know about pricing",
    "How does your AI process work?",
    "Can you help with Instagram marketing?",
    "I need a custom quote"
  ];

  const handleQuickMessage = (msg: string) => {
    const whatsappUrl = `https://wa.me/923266116911?text=${encodeURIComponent(msg)}`;
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: whatsappUrl } }, "*");
    } else {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-white to-white/90 shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group"
          aria-label="Open live chat"
        >
          <MessageCircle className="w-7 h-7 text-black" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse"></span>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with us on WhatsApp!
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-white to-white/90 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="text-black font-bold text-sm">Nerozarb Team</h3>
                <p className="text-black/70 text-xs">Usually replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-black/10 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="bg-background p-4 h-[400px] flex flex-col">
            {/* Welcome Message */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-black" />
                </div>
                <div className="flex-1">
                  <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 border border-white/20">
                    <p className="text-white text-sm">
                      👋 Assalam-o-Alaikum! Welcome to Nerozarb. How can we help you today?
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 ml-1">Just now</p>
                </div>
              </div>

              {/* Quick Reply Buttons */}
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-semibold">Quick replies:</p>
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickMessage(msg)}
                    className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 text-white text-sm"
                  >
                    {msg}
                  </button>
                ))}
              </div>

              {/* WhatsApp Direct Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    const whatsappUrl = "https://wa.me/923266116911";
                    const isInIframe = window.self !== window.top;
                    if (isInIframe) {
                      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: whatsappUrl } }, "*");
                    } else {
                      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Chat on WhatsApp
                </button>
              </div>
            </div>

            {/* Input Area */}
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-white/30 transition-colors text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="w-12 h-12 rounded-xl bg-white hover:bg-white/90 flex items-center justify-center transition-all hover:scale-105"
                aria-label="Send message"
              >
                <Send className="w-5 h-5 text-black" />
              </button>
            </div>

            <p className="text-xs text-center text-muted-foreground mt-3">
              ⚡ Last client response time: 47 minutes
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChatWidget;