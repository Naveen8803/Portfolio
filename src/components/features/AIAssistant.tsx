"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
import { aboutData, skillCategories, experiences, projects } from "@/lib/data";

interface Message {
  sender: "bot" | "user";
  text: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am Naveen's AI assistant. Ask me anything about his skills, experience, projects, or background!",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const newMessages = [...messages, { sender: "user", text: userText } as Message];
    setMessages(newMessages);
    setInput("");

    // Generate response
    setTimeout(() => {
      const responseText = getResponse(userText);
      setMessages((prev) => [...prev, { sender: "bot", text: responseText }]);
    }, 800);
  };

  const getResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("skills") || q.includes("languages") || q.includes("programming")) {
      const allSkills = skillCategories
        .map((cat) => `${cat.title}: ${cat.skills.map((s) => s.name).join(", ")}`)
        .join("\n• ");
      return `Naveen's technical expertise spans several domains:\n• ${allSkills}`;
    }

    if (q.includes("project") || q.includes("samvak") || q.includes("food")) {
      const projectList = projects
        .map((p) => `* ${p.shortTitle}: ${p.description}`)
        .join("\n");
      return `Naveen has built several impressive projects:\n${projectList}\n\nYou can click the 'Case Study' button in the Projects section to see complete details!`;
    }

    if (q.includes("experience") || q.includes("internship") || q.includes("work")) {
      const expList = experiences
        .map((e) => `* ${e.title} at ${e.company} (${e.period})`)
        .join("\n");
      return `Naveen has completed multiple internships:\n${expList}`;
    }

    if (q.includes("education") || q.includes("college") || q.includes("university") || q.includes("cgpa")) {
      return `Naveen is pursuing a Master of Computer Applications (MCA) at KL University (2024-2026) with a CGPA of 9.31. Previously, he completed his BSc in Computer Science at Andhra Loyola College (2021-2024) with a CGPA of 8.65.`;
    }

    if (q.includes("contact") || q.includes("email") || q.includes("phone")) {
      return `You can reach Naveen via:\nEmail: naveenvarma8803@gmail.com\nPhone: +91 7901695716\nLinkedIn: https://www.linkedin.com/in/naveen-varma88/`;
    }

    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      return "Hi there! How can I help you learn more about Naveen today?";
    }

    return "I'm not sure about that. Try asking about his 'skills', 'experience', 'projects', 'education', or how to 'contact' him!";
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#7B61FF] text-[#050816] flex items-center justify-center shadow-[0_0_25px_rgba(0,245,255,0.4)] cursor-pointer hover:shadow-[0_0_35px_rgba(0,245,255,0.6)] transition-shadow duration-300"
        aria-label="Open AI Assistant"
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[380px] h-[500px] glass-strong rounded-2xl border border-white/10 flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 bg-white/[0.03] border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center">
                  <Bot size={18} className="text-[#00F5FF]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1">
                    AI Assistant <Sparkles size={12} className="text-[#00FFB2]" />
                  </h3>
                  <span className="text-[10px] text-white/40">Online • Data Analyst Model</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white p-1 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-all"
              >
                <X size={16} />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex gap-2 max-w-[85%] ${
                      msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${
                        msg.sender === "user"
                          ? "bg-[#7B61FF]/20 text-[#7B61FF]"
                          : "bg-[#00F5FF]/20 text-[#00F5FF]"
                      }`}
                    >
                      {msg.sender === "user" ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div
                      className={`rounded-2xl p-3.5 text-sm leading-relaxed whitespace-pre-line ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-[#7B61FF] to-[#00F5FF] text-[#050816] font-medium"
                          : "bg-white/5 text-white/80 border border-white/5"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSend}
              className="p-3 bg-white/[0.02] border-t border-white/5 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects..."
                className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[#00F5FF]/50 transition-all"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#00F5FF] to-[#7B61FF] text-[#050816] flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.2)] hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all cursor-pointer shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
