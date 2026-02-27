"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows, PerspectiveCamera, Stage, Bounds } from "@react-three/drei";
import { Suspense, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Box, Layers, Settings, Share2, Info } from "lucide-react";
import { DentalImplant, Crown } from "../../components/3d/Models";
import { motion, AnimatePresence } from "framer-motion";

export default function ViewerPage() {
    const [activeModel, setActiveModel] = useState<"implant" | "crown">("implant");
    const [showInfo, setShowInfo] = useState(true);

    return (
        <main className="w-full h-screen bg-neutral-100 overflow-hidden relative selection:bg-dentalGold/30">

            {/* HEADER / NAVIGATION */}
            <header className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-start pointer-events-none">
                <Link
                    href="/"
                    className="pointer-events-auto flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-800 hover:text-dentalForest transition-colors bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-white/50"
                >
                    <ArrowLeft size={16} />
                    Back
                </Link>

                <div className="pointer-events-auto flex gap-2">
                    <button className="p-3 bg-white/80 backdrop-blur-md rounded-full text-gray-700 hover:text-dentalForest hover:shadow-md transition-all border border-white/50 shadow-sm" title="Settings">
                        <Settings size={20} />
                    </button>
                    <button className="p-3 bg-dentalForest text-white rounded-full hover:bg-dentalForest/90 hover:shadow-md transition-all shadow-sm" title="Share">
                        <Share2 size={20} />
                    </button>
                </div>
            </header>

            {/* MAIN 3D CANVAS */}
            <div className="absolute inset-0 z-0">
                <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, preserveDrawingBuffer: true }}>
                    <Suspense fallback={null}>
                        <PerspectiveCamera makeDefault position={[4, 2, 5]} fov={50} />

                        {/* Lighting Setup */}
                        <ambientLight intensity={0.4} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                        <Environment preset="city" />

                        {/* Model Stage */}
                        <Bounds fit clip observe margin={1.2}>
                            <Stage
                                intensity={0.5}
                                environment="city"
                                shadows={{ type: "accumulative", color: "#dabba1", colorBlend: 2, opacity: 0.5 }}
                                adjustCamera={false}
                            >
                                {activeModel === "implant" && <DentalImplant animated={false} />}
                                {activeModel === "crown" && <Crown animated={false} />}
                            </Stage>
                        </Bounds>

                        <OrbitControls
                            makeDefault
                            minPolarAngle={0}
                            maxPolarAngle={Math.PI / 1.75}
                        />
                    </Suspense>
                </Canvas>
            </div>

            {/* MODEL SELECTOR (Reference: Sketchfab/Marmoset viewer style) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-lg p-2 rounded-2xl shadow-elevated border border-white/50 flex gap-2">
                <button
                    onClick={() => setActiveModel("implant")}
                    className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${activeModel === "implant"
                        ? "bg-dentalForest text-white shadow-lg scale-105"
                        : "hover:bg-gray-100 text-gray-600"
                        }`}
                >
                    <Layers size={16} />
                    Implant
                </button>
                <button
                    onClick={() => setActiveModel("crown")}
                    className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${activeModel === "crown"
                        ? "bg-dentalForest text-white shadow-lg scale-105"
                        : "hover:bg-gray-100 text-gray-600"
                        }`}
                >
                    <Box size={16} />
                    Crown
                </button>
            </div>

            {/* INFO PANEL */}
            <AnimatePresence>
                {showInfo && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute top-24 right-6 z-40 w-80"
                    >
                        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 relative overflow-hidden">
                            <button
                                onClick={() => setShowInfo(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
                            >
                                ×
                            </button>

                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Live Preview</span>
                            </div>

                            <h2 className="text-2xl font-black text-gray-900 mb-2">
                                {activeModel === "implant" ? "Titanium Implant" : "Zirconia Crown"}
                            </h2>

                            <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                {activeModel === "implant"
                                    ? "Grade 5 Titanium alloy fixture with aggressive thread design for high primary stability. Sandblasted and acid-etched surface."
                                    : "High-translucency multi-layered zirconia. milled with 0.01mm precision for perfect marginal fit and natural aesthetics."
                                }
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Material</p>
                                    <p className="text-sm font-bold text-gray-800">
                                        {activeModel === "implant" ? "Ti-6Al-4V" : "3Y-TZP"}
                                    </p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Standard</p>
                                    <p className="text-sm font-bold text-gray-800">ISO 13485</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Info Button (if closed) */}
            {!showInfo && (
                <button
                    onClick={() => setShowInfo(true)}
                    className="absolute top-24 right-6 z-40 p-4 bg-white/90 backdrop-blur rounded-full shadow-lg hover:bg-white text-dentalForest transition-all"
                >
                    <Info size={24} />
                </button>
            )}

        </main>
    );
}
