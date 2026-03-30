"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronRight,
  Globe,
  Mic,
  Pause,
  Play,
  Sparkles,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const logoPlaceholders = [
  "TechCorp",
  "VoiceFlow",
  "AudioAI",
  "SoundLab",
  "ToneWorks",
  "WaveGen",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* Glowing Background Mesh */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-800/20 rounded-full blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">Volent</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <Button
            variant="ghost"
            className="text-slate-300 hover:text-white hidden md:flex"
          >
            Features
          </Button>
          <Button
            variant="ghost"
            className="text-slate-300 hover:text-white hidden md:flex"
          >
            Pricing
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6">
            Sign In
          </Button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-12 pt-16 pb-24 max-w-7xl mx-auto">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <Badge
              variant="secondary"
              className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 mb-6"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              Now in Public Beta
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
          >
            Give your brand a{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              voice that resonates.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
          >
            Clone any voice in seconds with AI. Create ultra-realistic
            text-to-speech that captures every nuance, emotion, and inflection.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-full px-8 py-6 text-lg"
            >
              Get Started Free
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white rounded-full px-8 py-6 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Live Preview Mockup */}
      <section className="relative z-10 px-6 md:px-12 pb-24 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
            <CardContent className="p-6 md:p-8">
              {/* Mockup Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-sm text-slate-500">
                  Volent Studio
                </span>
              </div>

              {/* Waveform Visualization */}
              <div className="h-16 flex items-center justify-center gap-1 mb-6">
                {[...Array(40)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-gradient-to-t from-indigo-500 to-violet-500 rounded-full"
                    animate={{
                      height: [8, Math.random() * 40 + 20, 8],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.05,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Input Area */}
              <div className="space-y-4">
                <Textarea
                  placeholder="Enter the text you want to convert to speech..."
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 min-h-[120px] resize-none"
                />

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Select>
                      <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
                        <SelectValue placeholder="Select Voice" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="custom" className="text-white">
                          My Custom Clone
                        </SelectItem>
                        <SelectItem value="professional" className="text-white">
                          Professional Narrator
                        </SelectItem>
                        <SelectItem value="casual" className="text-white">
                          Casual Conversational
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8">
                    <Play className="w-4 h-4 mr-2" />
                    Generate
                  </Button>
                </div>
              </div>

              {/* Audio Player Preview */}
              <div className="mt-6 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-indigo-400 hover:text-indigo-300"
                    >
                      <Play className="w-5 h-5" />
                    </Button>
                    <div className="flex-1 max-w-md">
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "65%" }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-slate-500">
                        <span>0:12</span>
                        <span>0:35</span>
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-indigo-500/20 text-indigo-300"
                  >
                    98% Match
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why choose Volent?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Enterprise-grade voice cloning technology, accessible to everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Mic,
              title: "Professional Cloning",
              description:
                "Upload a 30-second audio sample and our AI captures every nuance, tone, and emotion with 98% accuracy.",
            },
            {
              icon: Zap,
              title: "Zero Latency Streaming",
              description:
                "Stream generated audio in real-time with our optimized pipeline. Perfect for live applications and customer service.",
            },
            {
              icon: Globe,
              title: "Multi-lingual Support",
              description:
                "Generate speech in 50+ languages with native-level fluency. Your cloned voice speaks every language fluently.",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-indigo-500/30 transition-all duration-300 h-full group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 px-6 md:px-12 py-16 border-y border-white/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-8">
            Trusted by innovative teams worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
            {logoPlaceholders.map((logo) => (
              <span key={logo} className="text-xl font-semibold text-slate-400">
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Footer */}
      <section className="relative z-10 px-6 md:px-12 py-24 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800/50 border border-indigo-500/30 rounded-2xl overflow-hidden relative">
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-purple-500/20" />
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 opacity-50" />

            <CardContent className="relative p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to find your voice?
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                Join thousands of creators and businesses already using Volent
                to bring their brand to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-full px-8 py-6 text-lg">
                  Start Free Trial
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
                <Button
                  variant="ghost"
                  className="text-slate-400 hover:text-white"
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  No credit card required
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-semibold">Volent</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2026 Volent. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
