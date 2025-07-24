import { Linkedin, Mail, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ceoBg from '@/assets/team-ceo.jpg';
import ctoBg from '@/assets/team-cto.jpg';
import devBg from '@/assets/team-dev.jpg';
import pmBg from '@/assets/team-pm.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: "Marco Rossi",
      role: "CEO & Founder",
      image: ceoBg,
      bio: "Visionario leader con 15 anni di esperienza nel settore tech. Ha guidato la trasformazione digitale di numerose aziende Fortune 500.",
      skills: ["Strategic Planning", "Business Development", "Digital Transformation"],
      social: {
        linkedin: "#",
        email: "marco@techflow.it"
      }
    },
    {
      name: "Sara Bianchi",
      role: "CTO",
      image: ctoBg,
      bio: "Esperta in architetture cloud e AI, con un dottorato in Computer Science e 12 anni di esperienza in multinazionali tech.",
      skills: ["Cloud Architecture", "AI/ML", "Team Leadership"],
      social: {
        linkedin: "#",
        email: "sara@techflow.it",
        github: "#"
      }
    },
    {
      name: "Luca Verdi",
      role: "Lead Developer",
      image: devBg,
      bio: "Full-stack developer specializzato in React e Node.js. Appassionato di clean code e architetture scalabili.",
      skills: ["React", "Node.js", "TypeScript"],
      social: {
        linkedin: "#",
        email: "luca@techflow.it",
        github: "#"
      }
    },
    {
      name: "Elena Neri",
      role: "Product Manager",
      image: pmBg,
      bio: "Product strategist con focus su UX e crescita. Ha lanciato con successo oltre 20 prodotti digitali.",
      skills: ["Product Strategy", "UX Design", "Data Analysis"],
      social: {
        linkedin: "#",
        email: "elena@techflow.it"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Il Nostro Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un team di professionisti esperti e appassionati, uniti dalla missione di creare 
            soluzioni tecnologiche che fanno la differenza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 border-none shadow-card overflow-hidden">
              <div className="relative">
                <div 
                  className="h-64 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${member.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-2">
                      {member.social.linkedin && (
                        <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                          <Linkedin size={16} />
                        </Button>
                      )}
                      {member.social.email && (
                        <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                          <Mail size={16} />
                        </Button>
                      )}
                      {member.social.github && (
                        <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                          <Github size={16} />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">
                    Competenze principali:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block border-none shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Unisciti al nostro team
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Siamo sempre alla ricerca di talenti eccezionali che condividano 
                la nostra passione per l'innovazione.
              </p>
              <Button className="group">
                Vedi le posizioni aperte
                <Mail className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;