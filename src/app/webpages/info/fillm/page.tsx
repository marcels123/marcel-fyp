export default function FilmAI() {
    return (
        <div className="flex flex-col items-center w-full text-gray-800">
        {/* Hero Section */}
        <section className="w-full py-20 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 max-w-2xl text-center">
            The application and effects of AI in Film and its industry
          </h1>
          <p className="text-xl text-center max-w-xl">
            This project explores the effects and applications of AI in different forms of digital media.
          </p>
        </section>
  
        {/* Aim Section */}
        <section className="w-full py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6">The Aim</h2>
            <p className="text-lg mb-4">
            This project explores the impact and applications of AI in various forms of digital media, including music, film, gaming, etc. Through interactive learning, AI-driven demos, and hands-on experimentation, users can discover how artificial intelligence is transforming digital media.
            </p>
            <p className="text-lg">
            By offering interactive AI tools and structured learning experiences, this platform enables users to explore the transformative role of AI in digital media. Whether generating music, enhancing film production, or creating game content, users can engage with AI technologies to understand their impact on creative industries and digital media as a whole.          </p>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="w-full py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Learn More?</h2>
            <p className="text-lg mb-8">
            Sign up today to explore AI-driven music generation, film editing, and game content creation with interactive tools and educational resources.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </section>
      </div>
    );
}
 