import { Car } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Solutions = () => {
  const navigate = useNavigate();

  const solution = {
    id: 'showroom',
    icon: <Car className="w-12 h-12 text-primary" />,
    title: "Sistema Gestionale Autosalone",
    description: "Piattaforma completa per la gestione di un autosalone con catalogo vetture, amministrazione e sistema prenotazioni.",
    features: ["Catalogo Vetture", "Pannello Admin", "Sistema Prenotazioni", "Gestione Sconti"],
  };

  const handleDemoClick = () => {
    navigate('/showroom');
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

        <div className="flex justify-center">
          <Card className="hover:shadow-card-hover transition-all duration-300 border-none shadow-card max-w-2xl w-full">
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
                  onClick={handleDemoClick}
                  className="w-full"
                  size="lg"
                >
                  <Car className="mr-2" size={16} />
                  Accedi alla Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Solutions;