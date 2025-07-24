import { Target, Users, Lightbulb, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Orientamento ai Risultati",
      description: "Ogni progetto è guidato da obiettivi concreti e misurabili per massimizzare il ROI."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Collaborazione",
      description: "Lavoriamo a stretto contatto con i nostri clienti per creare soluzioni su misura."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Innovazione",
      description: "Utilizziamo le tecnologie più avanzate per restare sempre all'avanguardia."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Velocità",
      description: "Sviluppo agile e deployment rapido per accelerare il time-to-market."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Chi Siamo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TechFlow è un'azienda leader nello sviluppo di soluzioni digitali innovative. 
            Combiniamo creatività, tecnologia e strategia per trasformare le sfide aziendali in opportunità di crescita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              La nostra missione
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Crediamo che ogni azienda meriti soluzioni tecnologiche che non solo risolvono problemi, 
              ma aprono nuove possibilità. Il nostro team di esperti lavora con passione per creare 
              esperienze digitali che fanno la differenza.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dal 2020, abbiamo aiutato oltre 100 aziende a digitalizzare i loro processi, 
              migliorare l'efficienza operativa e raggiungere nuovi livelli di successo.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Progetti Completati</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Clienti Soddisfatti</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Anni di Esperienza</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Supporto Clienti</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-card-hover transition-all duration-300 animate-scale-in border-none shadow-card">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;