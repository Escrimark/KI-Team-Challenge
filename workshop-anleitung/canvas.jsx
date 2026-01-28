import React, { useState, useEffect } from 'react';
// Re-initializing to resolve environment error
import { 
  ChevronLeft, 
  ChevronRight, 
  Cpu, 
  Code2, 
  Database, 
  Trophy, 
  Lightbulb, 
  Settings, 
  Key, 
  Users, 
  Play,
  Monitor,
  Car,
  Github // Added Github Icon
} from 'lucide-react';

const slides = [
  {
    id: 1,
    type: 'title',
    title: 'Wer ist es? – Die KI-Team-Challenge',
    subtitle: 'Vibecoding & Personality Matching in Google Colab',
    context: 'BMW EG-940 Team Workshop',
    icon: <Car className="w-16 h-16 text-blue-500" />
  },
  {
    id: 2,
    type: 'content',
    title: 'Was ist eigentlich "Vibecoding"?',
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    items: [
      { label: 'Traditionelles Coding', text: 'Syntax lernen, Semikolons suchen, Fehlermeldungen debuggen.' },
      { label: 'Vibecoding', text: 'Wir beschreiben der KI in natürlicher Sprache, was wir erreichen wollen.' },
      { label: 'KI als Werkzeug', text: 'Die KI schreibt den Python-Code – wir steuern die Logik und die Vision.' }
    ]
  },
  {
    id: 3,
    type: 'process',
    title: 'Der Ablauf (The Mission)',
    steps: [
      { num: '01', title: 'Data', desc: 'Team-Wissen sammeln' },
      { num: '02', title: 'Code', desc: 'App in Colab bauen' },
      { num: '03', title: 'Test', desc: 'Live-Challenge & Scoring' }
    ]
  },
  {
    id: 4,
    type: 'content',
    title: 'Phase 1: Unsere Datenbasis',
    icon: <Database className="w-8 h-8 text-blue-400" />,
    items: [
      { label: 'Eure Aufgabe', text: 'Schreibt 3-5 Sätze über euch (Hobbys, Ticks, BMW-Modell) in eine .txt Datei.' },
      { label: 'Anonymität', text: 'Nennt euren Namen NICHT im Text.' },
      { label: 'Prozess', text: 'Schickt die Datei an den Moderator. Diese Texte werden am Ende für den Wettbewerb verwendet.' }
    ]
  },
  {
    id: 5,
    type: 'content',
    title: 'Phase 2: Die App programmieren',
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
    items: [
      { label: 'Werkzeug', text: 'Google Colab (Python direkt im Browser nutzen) https://colab.google.com/.' },
      { label: 'Datenstruktur', text: 'Wir definieren eine Liste mit Namen und Beschreibungen im Code.' },
      { label: 'Input', text: 'Ein einfaches Eingabefeld [input()] nimmt später die Rätsel-Texte auf.' }
    ]
  },
  {
    id: 6,
    type: 'code-tips',
    title: 'Prompting-Tipps für die Teams',
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
    prompts: [
      '"Startet mit einer konkreten Beschreibung der Aufgabe in Summe."',
      '"Euer \'fachliches\' Know How liegt in der Erstellung möglichst passender Beschreibung eurer Kollegen."',
      '"Nutze die Gemini API, um den Input mit den Beschreibungen zu vergleichen."'
    ]
  },
  {
    id: 7,
    type: 'scoring',
    title: 'Die Live-Challenge (Scoring)',
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    details: [
      'Der Moderator präsentiert nacheinander die Texte der Mitspieler.',
      'Teams kopieren den Text per Copy & Paste in ihr Programm.',
      'Vergleich mit der Auflösung des Moderators.'
    ],
    points: '1 Punkt pro korrekt identifiziertem Mitarbeiter. 0 Punkte falls es sich um ein eigenes Teammitgleid handelt.'
  },
  {
    id: 8,
    type: 'content',
    title: 'Transfer: KI bei BMW',
    icon: <Lightbulb className="w-8 h-8 text-blue-400" />,
    items: [
      { label: 'Schnelle Prototypen', text: 'Datenanalysen ohne tiefes Coding-Wissen.' },
      { label: 'Automatisierung', text: 'Excel-Aufgaben oder Reporting via KI-Skripten.' },
      { label: 'Fazit', text: 'KI ist ein mächtiges Werkzeug in eurer Hand – nutzt es für Innovation.' }
    ]
  },
  {
    id: 9,
    type: 'backup',
    title: 'Backup: Anatomie der Lösung',
    icon: <Settings className="w-8 h-8 text-slate-400" />,
    content: [
      { label: 'Datenstruktur', text: 'Liste von Dictionaries (employees_data) für saubere Trennung.' },
      { label: 'System Prompt', text: '"Du bist ein KI-Assistent, dessen Aufgabe es ist, einen Mitarbeiter aus einer vorgegebenen Liste zu identifizieren. Der Benutzer wird dir Hobbys und Eigenschaften nennen, und du musst den Namen des Mitarbeiters zurückgeben, der am besten zu diesen Beschreibungen passt. Antworte ausschließlich mit dem Namen des Mitarbeiters und nichts anderem.\n\nHier ist die Liste der Mitarbeiter mit ihren Beschreibungen:\n"' },
      { label: 'Workflow', text: 'System-Prompt + Liste = Kontext. Benutzer-Input = Anfrage.' }
    ]
  },
  {
    id: 10,
    type: 'backup',
    title: 'Backup: Module & Installation',
    icon: <Settings className="w-8 h-8 text-slate-400" />,
    content: [
      { label: 'Library', text: 'google-generai für die Gemini-Anbindung.' },
      { label: 'Installation', text: '!pip install -U google-genai' },
      { label: 'Helper', text: 'os für API-Keys, exceptions für Error-Handling.' }
    ]
  },
  {
    id: 11,
    type: 'backup',
    title: 'Setup: Google API Key',
    icon: <Key className="w-8 h-8 text-slate-400" />,
    steps: [
      'Portal: aistudio.google.com besuchen.',
      'Key erstellen: "Get API key" klicken.',
      'Colab Secrets: Über das Schlüssel-Icon links "GOOGLE_API_KEY" hinterlegen.'
    ]
  },
  {
    id: 12,
    type: 'content',
    title: 'Ressourcen & Downloads',
    icon: <Github className="w-8 h-8 text-white" />,
    items: [
      { label: 'GitHub Repository', text: 'https://github.com/Escrimark/KI-Team-Challenge/' },
      { label: 'Musterlösung', text: 'Namen raten.ipynb – Die Referenz-Implementierung als Jupyter Notebook.' },
      { label: 'Evaluation Tool', text: 'Vibe Coding Challenge Evaluation.xlsx – Zur Auswertung der Challenge.' }
    ]
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-800/20 blur-[120px] rounded-full" />
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div 
          className="h-full bg-blue-500 transition-all duration-300" 
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Container */}
      <main className="relative flex flex-col items-center justify-center min-h-screen p-8 md:p-16">
        <div className="w-full max-w-5xl transition-all duration-500 transform translate-y-0 opacity-100">
          
          {slide.type === 'title' && (
            <div className="text-center space-y-8 py-12">
              <div className="flex justify-center mb-6">{slide.icon}</div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <div className="pt-12 inline-flex items-center space-x-4">
                <span className="h-px w-12 bg-blue-500" />
                <span className="text-sm tracking-[0.3em] uppercase text-blue-500 font-semibold">{slide.context}</span>
                <span className="h-px w-12 bg-blue-500" />
              </div>
            </div>
          )}

          {slide.type === 'content' && (
            <div className="space-y-12">
              <div className="flex items-center space-x-4 border-b border-slate-800 pb-6">
                {slide.icon}
                <h2 className="text-4xl font-semibold text-white">{slide.title}</h2>
              </div>
              <div className="grid grid-cols-1 gap-8">
                {slide.items.map((item, i) => (
                  <div key={i} className="group bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-colors backdrop-blur-sm">
                    <h3 className="text-blue-400 font-bold mb-2 uppercase tracking-wider text-sm">{item.label}</h3>
                    {/* Updated render logic to handle links */}
                    {item.text.startsWith('http') ? (
                      <a 
                        href={item.text} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-lg text-blue-400 hover:text-blue-300 underline leading-relaxed break-all"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-lg text-slate-300 leading-relaxed">{item.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === 'process' && (
            <div className="space-y-16 text-center">
              <h2 className="text-4xl font-semibold text-white">{slide.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {slide.steps.map((step, i) => (
                  <div key={i} className="relative group">
                    <div className="text-8xl font-black text-slate-800/50 absolute -top-12 left-1/2 -translate-x-1/2 group-hover:text-blue-600/20 transition-colors">
                      {step.num}
                    </div>
                    <div className="relative pt-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === 'code-tips' && (
            <div className="space-y-10">
              <div className="flex items-center space-x-4 border-b border-slate-800 pb-6">
                {slide.icon}
                <h2 className="text-4xl font-semibold text-white">{slide.title}</h2>
              </div>
              <div className="space-y-6">
                {slide.prompts.map((p, i) => (
                  <div key={i} className="bg-black/50 border-l-4 border-blue-600 p-6 rounded-r-xl font-mono text-blue-200">
                    <span className="text-slate-500 mr-2 opacity-50">&gt;</span> {p}
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === 'scoring' && (
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-10 backdrop-blur-md">
              <div className="flex items-center space-x-4 mb-8">
                {slide.icon}
                <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  {slide.details.map((d, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <p className="text-slate-300 text-lg">{d}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/20 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                  <div className="text-yellow-500 mb-4"><Trophy size={48} /></div>
                  <h3 className="text-yellow-500 font-bold text-xl uppercase tracking-widest mb-2">Punktesystem</h3>
                  <p className="text-white text-2xl font-semibold">{slide.points}</p>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'backup' && (
            <div className="space-y-8">
              <div className="flex items-center space-x-4 border-b border-slate-700 pb-6">
                <div className="bg-slate-800 p-3 rounded-lg">{slide.icon}</div>
                <div>
                  <h2 className="text-3xl font-semibold text-white">{slide.title}</h2>
                  <p className="text-slate-500 text-sm uppercase tracking-widest">Technisches Backup</p>
                </div>
              </div>
              
              {slide.content && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {slide.content.map((item, i) => (
                    <div key={i} className="bg-slate-900/80 p-6 rounded-xl border border-slate-800">
                      <h4 className="text-blue-500 text-xs font-bold uppercase mb-2">{item.label}</h4>
                      <p className="text-slate-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {slide.steps && (
                <div className="bg-black/30 p-8 rounded-2xl space-y-6 border border-slate-800">
                  {slide.steps.map((step, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-400">
                        {i + 1}
                      </div>
                      <p className="text-slate-300">{step}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Navigation Controls */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-6 z-50">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-4 rounded-full bg-slate-900/80 border border-slate-800 hover:border-blue-500 disabled:opacity-30 disabled:hover:border-slate-800 transition-all text-white"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="bg-slate-900/80 border border-slate-800 px-6 py-2 rounded-full text-sm font-medium text-slate-400 backdrop-blur-md">
          <span className="text-white">{currentSlide + 1}</span> / {slides.length}
        </div>

        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-4 rounded-full bg-slate-900/80 border border-slate-800 hover:border-blue-500 disabled:opacity-30 disabled:hover:border-slate-800 transition-all text-white"
        >
          <ChevronRight size={24} />
        </button>
      </nav>

      {/* Slide Counter (Alternative View) */}
      <div className="fixed bottom-10 right-10 hidden md:block">
        <div className="text-[10px] tracking-[0.5em] uppercase text-slate-600 font-bold rotate-90 origin-right">
          BMW AI WORKSHOP 2026
        </div>
      </div>
    </div>
  );
}