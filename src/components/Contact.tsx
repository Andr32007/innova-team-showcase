import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula invio form
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', company: '', message: '' });
      toast({
        title: "Messaggio inviato!",
        description: "Ti ricontatteremo entro 24 ore.",
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Sede principale",
      details: ["Via dell'Innovazione, 123", "20100 Milano, Italia"]
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Telefono",
      details: ["+39 02 1234 5678", "Lun-Ven: 9:00-18:00"]
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      details: ["info@techflow.it", "support@techflow.it"]
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contattaci
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hai un progetto in mente? Parliamone insieme. Il nostro team è pronto 
            ad ascoltare le tue esigenze e proporre la soluzione migliore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informazioni di contatto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                Perché scegliere TechFlow?
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Consulenza gratuita iniziale</li>
                <li>• Team dedicato per ogni progetto</li>
                <li>• Supporto post-lancio incluso</li>
                <li>• Garanzia di soddisfazione</li>
                <li>• Metodologia agile e trasparente</li>
              </ul>
            </div>
          </div>

          <Card className="border-none shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Richiedi un preventivo
              </CardTitle>
              <p className="text-muted-foreground">
                Compila il form e riceverai una risposta personalizzata entro 24 ore.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="la-tua-email@esempio.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Azienda
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome della tua azienda"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Messaggio *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Descrivi il tuo progetto e le tue esigenze..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full group" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Invio in corso..."
                  ) : (
                    <>
                      Invia messaggio
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;