"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { Play, RotateCcw, CheckCircle, Database, Brain, Cpu, BarChart } from "lucide-react";

interface PipelineStep {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  status: "idle" | "running" | "completed";
  duration: number;
}

export default function Pipeline() {
  const [activeModel, setActiveModel] = useState<"cnn" | "lstm" | "xgboost">("cnn");
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const steps: PipelineStep[] = [
    { name: "Ingest Data", icon: Database, status: "idle", duration: 1500 },
    { name: "Preprocess & Scale", icon: Cpu, status: "idle", duration: 1500 },
    { name: "Train Model", icon: Brain, status: "idle", duration: 3000 },
    { name: "Evaluate Metrics", icon: BarChart, status: "idle", duration: 1500 },
  ];

  const logDatabase: Record<string, string[][]> = {
    cnn: [
      ["[INFO] Initializing Ingestion pipeline...", "[INFO] Loaded 12,450 image records.", "[SUCCESS] Ingestion completed in 1.2s."],
      ["[INFO] Applying data augmentation...", "[INFO] Normalizing pixel tensors: 0 to 1.", "[SUCCESS] Shape checks passed: (batch, 224, 224, 3)"],
      ["[TRAIN] Epoch 1/5 - loss: 0.652 - accuracy: 0.724", "[TRAIN] Epoch 2/5 - loss: 0.412 - accuracy: 0.835", "[TRAIN] Epoch 3/5 - loss: 0.287 - accuracy: 0.901", "[TRAIN] Epoch 4/5 - loss: 0.198 - accuracy: 0.942", "[TRAIN] Epoch 5/5 - loss: 0.124 - accuracy: 0.968", "[SUCCESS] Model weights saved to model.h5"],
      ["[EVAL] Test Accuracy: 95.82%", "[EVAL] Confusion matrix generated.", "[EVAL] F1-Score: 0.957", "[SUCCESS] ML Pipeline execution completed successfully!"]
    ],
    lstm: [
      ["[INFO] Loading iSign sign language text corpus...", "[INFO] Extracted 3D coordinate sequence landmarks.", "[SUCCESS] Loaded 5,200 gesture samples."],
      ["[INFO] Creating sequence paddings...", "[INFO] Padding sequence lengths to 30 frames.", "[SUCCESS] Target shape: (samples, 30, 1662)"],
      ["[TRAIN] Epoch 1/5 - loss: 0.812 - val_loss: 0.785", "[TRAIN] Epoch 2/5 - loss: 0.543 - val_loss: 0.512", "[TRAIN] Epoch 3/5 - loss: 0.322 - val_loss: 0.298", "[TRAIN] Epoch 4/5 - loss: 0.187 - val_loss: 0.174", "[TRAIN] Epoch 5/5 - loss: 0.098 - val_loss: 0.112", "[SUCCESS] Temporal weights optimized."],
      ["[EVAL] Sign Translation Accuracy: 96.1%", "[EVAL] BLEU Score: 0.84", "[SUCCESS] Bidirectional Sign translation model ready!"]
    ],
    xgboost: [
      ["[INFO] Querying SQL database for manufacturing logs...", "[INFO] Merging 21,500 real estate transaction logs.", "[SUCCESS] Data frames merged successfully."],
      ["[INFO] Performing feature selection...", "[INFO] Encoding categorical variables.", "[INFO] Dropping correlated features.", "[SUCCESS] Final dataset size: (21500, 14)"],
      ["[TRAIN] Round 10/50 - train-rmse: 0.354 - val-rmse: 0.392", "[TRAIN] Round 20/50 - train-rmse: 0.212 - val-rmse: 0.264", "[TRAIN] Round 30/50 - train-rmse: 0.114 - val-rmse: 0.182", "[TRAIN] Round 40/50 - train-rmse: 0.082 - val-rmse: 0.141", "[TRAIN] Round 50/50 - train-rmse: 0.061 - val-rmse: 0.125", "[SUCCESS] GBDT booster convergence completed."],
      ["[EVAL] Explained Variance Score: 89.2%", "[EVAL] Mean Absolute Error: ₹12,542", "[SUCCESS] Target feature predictions successfully deployed!"]
    ]
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalLogs]);

  const runPipeline = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStep(0);
    setTerminalLogs(["[SYSTEM] Launching ML Workflow..."]);

    const runStep = async (stepIndex: number) => {
      if (stepIndex >= steps.length) {
        setIsRunning(false);
        return;
      }

      setCurrentStep(stepIndex);
      const step = steps[stepIndex];
      const logGroup = logDatabase[activeModel][stepIndex];

      // Print logs sequentially
      for (const log of logGroup) {
        setTerminalLogs((prev) => [...prev, log]);
        await new Promise((r) => setTimeout(r, step.duration / logGroup.length));
      }

      await runStep(stepIndex + 1);
    };

    await runStep(0);
  };

  const resetPipeline = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setTerminalLogs([]);
  };

  return (
    <section id="pipeline" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="ML Workflow Pipeline" subtitle="// neural simulations" />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Controls & Pipeline Visualization */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <GlassCard className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Workflow Controls
              </h3>

              {/* Model Selector */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "cnn", label: "CNN Model" },
                  { id: "lstm", label: "LSTM Model" },
                  { id: "xgboost", label: "XGBoost" },
                ].map((item) => (
                  <button
                    key={item.id}
                    disabled={isRunning}
                    onClick={() => {
                      setActiveModel(item.id as any);
                      setTerminalLogs([]);
                    }}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer border transition-all ${
                      activeModel === item.id
                        ? "bg-[#00F5FF]/20 border-[#00F5FF]/40 text-[#00F5FF]"
                        : "glass border-transparent text-white/50 hover:text-white"
                    } disabled:opacity-50`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-2">
                <button
                  onClick={runPipeline}
                  disabled={isRunning}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#00F5FF] to-[#7B61FF] text-[#050816] font-bold text-sm cursor-pointer shadow-[0_0_20px_rgba(0,245,255,0.3)] disabled:opacity-50 transition-all hover:scale-[1.02]"
                >
                  <Play size={16} /> Run Pipeline
                </button>
                <button
                  onClick={resetPipeline}
                  className="w-12 h-12 flex items-center justify-center rounded-xl glass hover:border-white/20 cursor-pointer text-white/60 hover:text-white transition-all"
                >
                  <RotateCcw size={16} />
                </button>
              </div>
            </GlassCard>

            {/* Pipeline Visualizer */}
            <div className="space-y-4 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isCompleted = isRunning && currentStep > index;
                const isActive = isRunning && currentStep === index;

                return (
                  <div key={index} className="flex items-center gap-4 relative">
                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-[-20px] w-[2px] bg-white/5">
                        <div
                          className="h-full bg-gradient-to-b from-[#00F5FF] to-[#7B61FF] transition-all duration-500"
                          style={{
                            height: isCompleted ? "100%" : "0%",
                          }}
                        />
                      </div>
                    )}

                    {/* Step Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border z-10 transition-all duration-500 ${
                        isCompleted
                          ? "bg-[#00FFB2]/10 border-[#00FFB2]/50 text-[#00FFB2]"
                          : isActive
                          ? "bg-[#00F5FF]/10 border-[#00F5FF]/50 text-[#00F5FF] animate-pulse-glow"
                          : "glass border-white/5 text-white/30"
                      }`}
                    >
                      {isCompleted ? <CheckCircle size={18} /> : <Icon size={18} />}
                    </div>

                    {/* Text Details */}
                    <div>
                      <h4
                        className={`text-sm font-semibold transition-all ${
                          isActive || isCompleted ? "text-white" : "text-white/40"
                        }`}
                      >
                        {step.name}
                      </h4>
                      <p className="text-[10px] text-white/30 font-mono mt-0.5">
                        {isActive
                          ? "Processing..."
                          : isCompleted
                          ? "Completed"
                          : "Waiting..."}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Terminal Logs Output */}
          <div className="lg:col-span-3">
            <div className="w-full h-[400px] glass rounded-2xl border border-white/10 overflow-hidden flex flex-col font-mono text-xs">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-white/[0.03] border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-white/30 text-[10px]">ml_pipeline_logs.sh</span>
                <span className="w-8" />
              </div>

              {/* Terminal Window Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2.5 custom-scrollbar text-white/80 bg-black/40">
                {terminalLogs.length === 0 ? (
                  <p className="text-white/30 italic">Click &quot;Run Pipeline&quot; to compile and simulate model weights...</p>
                ) : (
                  terminalLogs.map((log, i) => {
                    let color = "text-white/70";
                    if (log.startsWith("[SUCCESS]")) color = "text-[#00FFB2]";
                    else if (log.startsWith("[INFO]")) color = "text-[#00F5FF]/80";
                    else if (log.startsWith("[TRAIN]")) color = "text-[#7B61FF]";
                    else if (log.startsWith("[SYSTEM]")) color = "text-yellow-400";

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.15 }}
                        className={`${color} leading-relaxed`}
                      >
                        {log}
                      </motion.div>
                    );
                  })
                )}
                <div ref={terminalEndRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
