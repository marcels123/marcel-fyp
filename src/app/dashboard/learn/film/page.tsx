"use client";

import { QuizCarousel } from '@components/features/quiz/QuizCarousel';
import { filmAIQuestions } from '@/data/quizzes/film';
import { motion } from 'framer-motion';
import { CheckIcon, Cross1Icon } from '@radix-ui/react-icons';

const PositiveIcon = () => (
  <CheckIcon className="w-8 h-8 text-green-600" />
);

const NegativeIcon = () => (
  <Cross1Icon className="w-8 h-8 text-red-600" />
);

export default function FilmAI() {

  return (
    <div className="flex flex-col items-center w-full text-gray-800">
      {/* Hero Section */}
      <section className="w-full py-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4 max-w-2xl text-center">
            The Application and Effects of AI in Film
          </h1>
          <p className="text-2xl text-center max-w-2xl px-4 text-gray-600 leading-relaxed">
            Artificial Intelligence (AI) is significantly transforming the film industry, enhancing everything from production processes to post-production effects. As filmmakers increasingly integrate AI-driven technologies, the creative and practical landscape of film production continues to evolve.
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
              <h3 className="text-3xl font-semibold mb-4">Deepfake Detection</h3>
              <p className="text-lg leading-relaxed">
                AI tools such as Deeptrace and Sensity can detect manipulated video content, preserving authenticity and combating misinformation. According to MIT Technology Review (2020), AI detection software has become crucial as deepfake technology becomes more sophisticated and accessible.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-3xl font-semibold mb-4">AI-assisted Video Upscaling</h3>
              <p className="text-lg leading-relaxed">
                AI algorithms, like those employed by Topaz Labs, enhance resolution and image quality, making it possible to upscale older films or lower-quality footage effectively. The Verge (2021) highlights this technology as a cost-effective method of preserving and revitalising classic cinema.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-3xl font-semibold mb-4">AI-generated Special Effects</h3>
              <p className="text-lg leading-relaxed">
                Companies like Industrial Light & Magic leverage AI for generating complex visual effects, significantly reducing production time and costs. Forbes (2021) reports that AI-driven visual effects not only accelerate production schedules but also open creative possibilities previously unattainable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-3xl font-semibold mb-4">AI-assisted Editing and Post-production</h3>
              <p className="text-lg leading-relaxed">
                AI-powered software tools can analyse footage, automatically suggesting optimal edits and transitions, drastically speeding up the editing workflow. Adobe's Sensei platform exemplifies this.
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
                  title: 'Improved Efficiency',
                  description:
                    'AI significantly speeds up film production processes, allowing filmmakers to focus more on creativity and less on technical burdens.'
                },
                {
                  title: 'Cost Reduction',
                  description:
                    'Automation of tasks like special effects and video editing significantly lowers the financial barriers to producing high-quality film content.'
                },
                {
                  title: 'Enhanced Creative Possibilities',
                  description:
                    'AI opens up new creative possibilities that were previously unattainable, allowing filmmakers to explore innovative visual effects and storytelling techniques.'
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
                  title: 'Detecting AI-generated Misinformation',
                  description:
                    'While AI can detect misinformation, the technology also makes sophisticated deception (like deepfakes) more accessible, creating challenges in distinguishing authentic content from manipulated media.'
                },
                {
                  title: 'Ethical Concerns – Deepfakes, Copyright',
                  description:
                    'The proliferation of AI-generated content has sparked debates on intellectual property rights and consent, posing ethical challenges.'
                },
                {
                  title: 'Diminishing Merits and Authenticity',
                  description:
                    'Over-reliance on AI-generated content risks reducing originality and creative authenticity in film, raising concerns among filmmakers about the potential loss of the human artistic touch.'
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100"
            >
              <QuizCarousel questions={filmAIQuestions} topic="AI in Film" />
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
 