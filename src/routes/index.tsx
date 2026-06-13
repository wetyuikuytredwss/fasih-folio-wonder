import { motion } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: FullPortfolio,
});

function FullPortfolio() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* 1. Hero Section */}
      <section className="h-screen flex items-center justify-center p-6 bg-gradient-to-b from-stone-900 to-background">
        <div className="max-w-4xl grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-6xl font-bold">Muhammad Fasih Ur Rehman</h1>
            <p className="mt-6 text-xl text-muted-foreground italic">
              Deputy Head Boy, Leader, and Software Enthusiast.
            </p>
          </motion.div>
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            src="/IMG_20260525_153634_2.jpg" 
            alt="Fasih Portrait" 
            className="rounded-2xl shadow-2xl border border-white/10"
          />
        </div>
      </section>

      {/* 2. The Dumbo Project Section */}
      <section className="py-24 px-6 bg-stone-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Project: Dumbo</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img 
              src="/Screenshot_20260613-172749_2.jpg" 
              alt="Dumbo Project Screenshot" 
              className="rounded-xl shadow-lg border border-primary/20"
            />
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                This project focuses on clean architecture and efficient state management. 
                The "Dumbo" module handles core logic, ensuring that complex data streams are 
                processed without latency.
              </p>
              <div className="flex gap-4">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">React</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Experience Gallery */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Moments & Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.02 }} className="col-span-1 md:col-span-2">
            <img src="/IMG_20260609_184315.jpg_2.jpeg" alt="Campus" className="w-full h-80 object-cover rounded-xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <img src="/retouch_2026030619031767.jpg_2.jpg" alt="Profile" className="w-full h-80 object-cover rounded-xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <img src="/IMG-20251023-WA0088.jpg_2.jpeg" alt="Event" className="w-full h-80 object-cover rounded-xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <img src="/IMG_20251023_130447.jpg_2.jpg" alt="Action Shot" className="w-full h-80 object-cover rounded-xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <img src="/IMG_6279_2.jpg" alt="Awards" className="w-full h-80 object-cover rounded-xl" />
          </motion.div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Muhammad Fasih Ur Rehman. All rights reserved.</p>
      </footer>
    </div>
  );
}
