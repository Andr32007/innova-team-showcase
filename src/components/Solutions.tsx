import { useState } from 'react';
import { Smartphone, Globe, Database, Brain, Play, Pause } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Solutions = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState([
    { role: 'bot', message: 'Ciao! Come posso aiutarti oggi?' }
  ]);
  const [dashboardData, setDashboardData] = useState({
    users: 1247,
    revenue: 45320,
    orders: 89
  });

  const solutions = [
    {
      id: 'mobile',
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "App Mobile Native",
      description: "Sviluppo di applicazioni mobile native per iOS e Android con performance ottimali e UX eccezionale.",
      features: ["React Native", "Flutter", "Kotlin", "Swift"],
      demo: "mobile"
    },
    {
      id: 'web',
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Piattaforme Web",
      description: "Applicazioni web moderne, scalabili e responsive costruite con le migliori tecnologie frontend e backend.",
      features: ["React", "Node.js", "Python", "AWS"],
      demo: "web"
    },
    {
      id: 'data',
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "Analisi Dati",
      description: "Soluzioni di Business Intelligence e Data Analytics per trasformare i dati in insights strategici.",
      features: ["Power BI", "Tableau", "Python", "SQL"],
      demo: "dashboard"
    },
    {
      id: 'ai',
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Intelligenza Artificiale",
      description: "Integrazione di AI e Machine Learning per automatizzare processi e migliorare l'efficienza aziendale.",
      features: ["ChatGPT", "TensorFlow", "Computer Vision", "NLP"],
      demo: "chatbot"
    }
  ];

  const startDemo = (demoType: string) => {
    setActiveDemo(demoType);
    
    if (demoType === 'dashboard') {
      const interval = setInterval(() => {
        setDashboardData(prev => ({
          users: prev.users + Math.floor(Math.random() * 5),
          revenue: prev.revenue + Math.floor(Math.random() * 100),
          orders: prev.orders + Math.floor(Math.random() * 3)
        }));
      }, 2000);
      
      setTimeout(() => {
        clearInterval(interval);
        setActiveDemo(null);
      }, 8000);
    }
    
    if (demoType === 'chatbot') {
      setTimeout(() => {
        setChatMessages(prev => [...prev, 
          { role: 'user', message: 'Mostrami i dati di vendita' },
          { role: 'bot', message: 'Ecco un riepilogo delle vendite del mese corrente: +25% rispetto al mese precedente con 340 ordini completati.' }
        ]);
      }, 1000);
      
      setTimeout(() => {
        setActiveDemo(null);
        setChatMessages([{ role: 'bot', message: 'Ciao! Come posso aiutarti oggi?' }]);
      }, 6000);
    }
  };

  const MobileMockup = () => (
    <div className="bg-gray-900 rounded-3xl p-2 w-64 mx-auto">
      <div className="bg-white rounded-2xl h-96 p-4 flex flex-col">
        <div className="h-2 bg-gray-200 rounded mb-4"></div>
        <div className="flex-1 space-y-3">
          <div className="h-16 bg-primary/10 rounded-lg flex items-center px-4">
            <div className="w-8 h-8 bg-primary rounded-full mr-3"></div>
            <div className="space-y-1">
              <div className="h-3 bg-gray-300 rounded w-20"></div>
              <div className="h-2 bg-gray-200 rounded w-16"></div>
            </div>
          </div>
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-8 bg-gray-100 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );

  const WebMockup = () => (
    <div className="bg-gray-100 rounded-lg p-4 w-full max-w-md mx-auto">
      <div className="bg-white rounded shadow-sm">
        <div className="h-8 bg-gray-200 rounded-t flex items-center px-3 space-x-1">
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        </div>
        <div className="p-4 space-y-3">
          <div className="h-4 bg-primary/20 rounded w-3/4"></div>
          <div className="space-y-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-3 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
          <div className="h-8 bg-primary rounded w-24"></div>
        </div>
      </div>
    </div>
  );

  const DashboardMockup = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 w-full max-w-md mx-auto">
      <h4 className="font-semibold mb-4">Analytics Dashboard</h4>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{dashboardData.users.toLocaleString()}</div>
          <div className="text-xs text-gray-500">Utenti</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">€{dashboardData.revenue.toLocaleString()}</div>
          <div className="text-xs text-gray-500">Ricavi</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{dashboardData.orders}</div>
          <div className="text-xs text-gray-500">Ordini</div>
        </div>
      </div>
      <div className="h-20 bg-gradient-to-r from-primary/20 to-primary/40 rounded flex items-end justify-center pb-2">
        <div className="text-xs text-primary font-medium">Real-time updates</div>
      </div>
    </div>
  );

  const ChatbotMockup = () => (
    <div className="bg-white rounded-lg shadow-sm w-full max-w-md mx-auto">
      <div className="bg-primary text-white p-3 rounded-t-lg">
        <h4 className="font-semibold">AI Assistant</h4>
      </div>
      <div className="p-4 h-40 overflow-y-auto space-y-2">
        {chatMessages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs p-2 rounded-lg text-sm ${
              msg.role === 'user' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {msg.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDemo = (demoType: string) => {
    switch (demoType) {
      case 'mobile':
        return <MobileMockup />;
      case 'web':
        return <WebMockup />;
      case 'dashboard':
        return <DashboardMockup />;
      case 'chatbot':
        return <ChatbotMockup />;
      default:
        return null;
    }
  };

  return (
    <section id="solutions" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Le Nostre Soluzioni
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Offriamo una gamma completa di servizi tecnologici per accompagnare la tua azienda 
            nella trasformazione digitale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card key={solution.id} className="hover:shadow-card-hover transition-all duration-300 border-none shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {solution.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">
                      {solution.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {solution.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    variant={activeDemo === solution.demo ? "destructive" : "default"}
                    onClick={() => activeDemo === solution.demo ? setActiveDemo(null) : startDemo(solution.demo)}
                    className="w-full mb-4"
                  >
                    {activeDemo === solution.demo ? (
                      <>
                        <Pause className="mr-2" size={16} />
                        Stop Demo
                      </>
                    ) : (
                      <>
                        <Play className="mr-2" size={16} />
                        Avvia Demo
                      </>
                    )}
                  </Button>
                  
                  {activeDemo === solution.demo && (
                    <div className="animate-scale-in">
                      {renderDemo(solution.demo)}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;