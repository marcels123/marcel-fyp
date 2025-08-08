"use client";

import { QuizCarousel } from '@components/features/quiz/QuizCarousel';
import { musicAIQuestions } from '@/data/quizzes/music';
import { motion } from 'framer-motion';
import { CheckIcon, Cross1Icon } from '@radix-ui/react-icons';

const PositiveIcon = () => (
  <CheckIcon className="w-8 h-8 text-green-600" />
);

const NegativeIcon = () => (
  <Cross1Icon className="w-8 h-8 text-red-600" />
);

export default function MusicAI() {

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
            The Application and Effects of AI in Music
          </h1>
          <p className="text-2xl text-center max-w-2xl px-4 text-gray-600 leading-relaxed">
            Music, often regarded as a universal language, is experiencing significant transformation through Artificial Intelligence (AI). Historically confined to human creativity, music production now extensively utilises AI-driven tools that can generate melodies, harmonise vocals, and emulate iconic musical styles.
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
              <h3 className="text-3xl font-semibold mb-4">AI-Driven Composition</h3>
              <p className="text-lg leading-relaxed">
                AI technologies such as OpenAI's MuseNet and Google's Magenta are capable of composing entire musical pieces across diverse genres, effectively integrating classical and contemporary influences. These systems employ deep neural networks trained on extensive databases of existing musical works. A study published in Nature in 2019 revealed that AI-generated music could be indistinguishable from human-created pieces in blind listening tests.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-3xl font-semibold mb-4">Production & Mixing</h3>
              <p className="text-lg leading-relaxed">
                AI-based plugins have become essential in music production, enabling tasks such as audio mixing, mastering, and sound design with high precision. These tools analyse audio tracks to apply optimisations accurately and efficiently. According to a 2020 MIT Technology Review report, prominent recording studios increasingly incorporate AI mastering services to enhance productivity without compromising sound quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-3xl font-semibold mb-4">Artist Collaboration & Personalisation</h3>
              <p className="text-lg leading-relaxed">
                AI facilitates new modes of artistic collaboration and music personalisation. Musicians utilise AI to explore melodic and harmonic ideas beyond their traditional creative processes. Machine learning algorithms also power streaming services' recommendation engines, significantly enhancing user engagement.
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
                  title: 'Easier Music Creation',
                  description: 'AI tools can help you write melodies, chords, and beats in seconds—perfect for getting past writer\'s block or quickly sketching out song ideas.'
                },
                {
                  title: 'Better Sound Quality',
                  description: 'Automated mixing and mastering services use AI to balance levels, add polish, and remove hiss, so even beginners can get a clean, professional-sounding track.'
                },
                {
                  title: 'Personalised Playlists',
                  description: 'Music apps use AI to learn your tastes and mood, then build custom playlists just for you—so you discover new songs you\'ll actually enjoy.'
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
                  title: 'Fewer Jobs for Studio Pros',
                  description:
                    'As AI mixing and mastering get more accurate, freelance engineers and producers may find fewer gigs, since artists can now "self-serve" those tasks.'
                },
                {
                  title: 'Music Can Start to Sound the Same',
                  description:
                    'When many people use the same AI presets and loops, songs risk sounding "cookie-cutter," losing the unique human touch that makes music special.'
                },
                {
                  title: 'Copyright and Credit Confusion',
                  description:
                    'AI often learns from existing songs, so it\'s hard to know if a new AI-generated riff truly belongs to you—or if it\'s accidentally repeating someone else\'s work.'
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
              <QuizCarousel questions={musicAIQuestions} topic="AI in Music" />
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
