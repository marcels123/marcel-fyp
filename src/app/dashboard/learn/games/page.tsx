"use client";

import { QuizCarousel } from '@components/features/quiz/QuizCarousel';
import { gamesAIQuestions } from '@/data/quizzes/games';
import { motion } from 'framer-motion';
import { CheckIcon, Cross1Icon } from '@radix-ui/react-icons';

const PositiveIcon = () => (
  <CheckIcon className="w-8 h-8 text-green-600" />
);

const NegativeIcon = () => (
  <Cross1Icon className="w-8 h-8 text-red-600" />
);

export default function GamingAI() {

  return (
    <div className="flex flex-col items-center w-full text-gray-800">
      {/* Hero Section */}
      <section className="w-full py-20 flex flex-col items-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-bold mb-4 max-w-2xl text-center">
            The Application and Effects of AI in Gaming
          </h1>
          <p className="text-xl text-center max-w-2xl px-4 text-gray-600 leading-relaxed">
            Artificial Intelligence (AI) is significantly transforming the gaming industry, revolutionising how games are developed, played, and experienced. The integration of AI within gaming enhances procedural content generation, character behaviour, game difficulty, and more, creating immersive and dynamic gaming experiences.
          </p>
        </motion.div>
      </section>



      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-16">
          {/* Getting Started Section */}
          <div id="getting-started">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-3xl font-semibold mb-4">Procedural Content Generation</h3>
              <p className="text-lg leading-relaxed">
                AI can autonomously create levels, narratives, and even entire game worlds. For instance, games like No Man's Sky use AI-driven algorithms to produce expansive, varied universes, offering unique gameplay experiences each time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-3xl font-semibold mb-4">AI-driven Non-Player Characters (NPCs)</h3>
              <p className="text-lg leading-relaxed">
                AI facilitates adaptive and intelligent behaviours in NPCs, creating characters that react realistically to player actions. Games such as The Last of Us Part II implement advanced AI techniques to deliver responsive, lifelike interactions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-3xl font-semibold mb-4">Dynamic Difficulty Adjustment</h3>
              <p className="text-lg leading-relaxed">
                AI can dynamically scale game difficulty based on player performance to maintain engagement and challenge. The Nemesis System in Middle-earth: Shadow of Mordor exemplifies this by evolving enemy characters who remember past encounters and adapt accordingly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-3xl font-semibold mb-4">Testing and Quality Assurance</h3>
              <p className="text-lg leading-relaxed">
                AI algorithms are now used extensively to automate game testing, identifying bugs and glitches rapidly, thus shortening development cycles significantly.
              </p>
            </motion.div>
          </div>

          {/* Positive Impacts */}
          <section id="positive-impacts">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8 mt-16"
            >
              <PositiveIcon />
              <h2 className="text-3xl font-semibold">Positive Impacts</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Faster Development",
                  description: "AI accelerates game production by automating repetitive tasks such as world-building, character animation, and level design, allowing developers to focus more on creative elements."
                },
                {
                  title: "Innovation and Creativity",
                  description: "AI introduces new tools and techniques that empower developers to explore innovative gameplay mechanics and narratives previously unfeasible due to resource constraints."
                },
                {
                  title: "Enhanced Player Experience",
                  description: "Personalised gaming experiences through AI-driven adaptive systems lead to higher player engagement and satisfaction."
                }
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                >
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-indigo-600 transition-colors">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Negative Impacts */}
          <section id="negative-impacts">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8 mt-16"
            >
              <NegativeIcon />
              <h2 className="text-3xl font-semibold">Negative Impacts</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "AI Biases",
                  description: "AI-generated content can inadvertently perpetuate biases inherent in training datasets, potentially leading to problematic or controversial representations in games."
                },
                {
                  title: "Reduced Human Creativity",
                  description: "Excessive reliance on procedural generation might diminish the unique creativity and personal touch of human designers, resulting in repetitive or formulaic game content."
                },
                {
                  title: "Ensuring User Intent",
                  description: "Ensuring that AI-generated content aligns with user expectations and intent can be challenging, sometimes resulting in experiences that feel disconnected or incoherent to players."
                }
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                >
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-red-600 transition-colors">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Learning Section */}
          <section id="quiz" className="mt-16 border-t pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl font-bold mb-4">Test Your Knowledge</h2>
              <p className="text-lg text-gray-600">Challenge yourself with our interactive quiz on AI in Gaming</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100"
            >
              <QuizCarousel questions={gamesAIQuestions} topic="AI in Games" />
            </motion.div>
          </section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <h3 className="text-2xl font-semibold mb-4">Ready to Explore More?</h3>
            <p className="text-gray-600 mb-6">Discover how AI is transforming other industries</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/dashboard/learn/film"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Explore AI in Film
              </a>
              <a
                href="/dashboard/learn/music"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Explore AI in Music
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
 