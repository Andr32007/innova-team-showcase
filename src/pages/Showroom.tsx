import { useState } from 'react';
import { Search, Car, Calendar, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  discount?: number;
  image: string;
  fuel: string;
  transmission: string;
  category: string;
}

const Showroom = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  const [vehicles] = useState<Vehicle[]>([
    {
      id: 1,
      brand: 'BMW',
      model: 'Serie 3',
      year: 2023,
      price: 45000,
      discount: 5,
      image: '/placeholder.svg',
      fuel: 'Benzina',
      transmission: 'Automatico',
      category: 'Berlina'
    },
    {
      id: 2,
      brand: 'Audi',
      model: 'A4',
      year: 2023,
      price: 42000,
      image: '/placeholder.svg',
      fuel: 'Diesel',
      transmission: 'Manuale',
      category: 'Berlina'
    },
    {
      id: 3,
      brand: 'Mercedes',
      model: 'Classe C',
      year: 2022,
      price: 38000,
      discount: 10,
      image: '/placeholder.svg',
      fuel: 'Ibrida',
      transmission: 'Automatico',
      category: 'Berlina'
    },
    {
      id: 4,
      brand: 'Volkswagen',
      model: 'Golf',
      year: 2023,
      price: 28000,
      image: '/placeholder.svg',
      fuel: 'Benzina',
      transmission: 'Manuale',
      category: 'Compatta'
    },
    {
      id: 5,
      brand: 'Toyota',
      model: 'RAV4',
      year: 2023,
      price: 35000,
      image: '/placeholder.svg',
      fuel: 'Ibrida',
      transmission: 'Automatico',
      category: 'SUV'
    },
    {
      id: 6,
      brand: 'Ford',
      model: 'Focus',
      year: 2022,
      price: 24000,
      discount: 8,
      image: '/placeholder.svg',
      fuel: 'Benzina',
      transmission: 'Manuale',
      category: 'Compatta'
    }
  ]);

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateDiscountedPrice = (price: number, discount?: number) => {
    if (!discount) return price;
    return price - (price * discount / 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="bg-card border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">AutoSalone Demo</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate('/admin')}
                className="flex items-center space-x-2"
              >
                <Settings className="h-4 w-4" />
                <span>Accesso Admin</span>
              </Button>
              
              <Button
                variant="outline"
                onClick={() => navigate('/prenotazioni')}
                className="flex items-center space-x-2"
              >
                <Calendar className="h-4 w-4" />
                <span>Prenotazioni</span>
              </Button>
              
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
              >
                Torna al Sito
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Catalogo Vetture
          </h1>
          <p className="text-xl text-muted-foreground">
            Scopri la nostra selezione di veicoli di qualità
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Cerca per marca o modello..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="hover:shadow-card-hover transition-all duration-300">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 rounded-t-lg flex items-center justify-center">
                  <Car className="h-16 w-16 text-primary/60" />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">
                    {vehicle.brand} {vehicle.model}
                  </CardTitle>
                  <Badge variant="secondary">{vehicle.year}</Badge>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Categoria:</span>
                    <span>{vehicle.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Carburante:</span>
                    <span>{vehicle.fuel}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Cambio:</span>
                    <span>{vehicle.transmission}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  {vehicle.discount ? (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground line-through">
                          €{vehicle.price.toLocaleString()}
                        </span>
                        <Badge variant="destructive">-{vehicle.discount}%</Badge>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        €{calculateDiscountedPrice(vehicle.price, vehicle.discount).toLocaleString()}
                      </div>
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-foreground">
                      €{vehicle.price.toLocaleString()}
                    </div>
                  )}
                </div>

                <Button className="w-full mt-4">
                  Richiedi Informazioni
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <Car className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nessun veicolo trovato
            </h3>
            <p className="text-muted-foreground">
              Prova a modificare i termini di ricerca
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Showroom;