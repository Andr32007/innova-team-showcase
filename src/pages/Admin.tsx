import { useState } from 'react';
import { Car, Plus, Edit, Trash2, Percent, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  discount?: number;
  fuel: string;
  transmission: string;
  category: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      id: 1,
      brand: 'BMW',
      model: 'Serie 3',
      year: 2023,
      price: 45000,
      discount: 5,
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
      fuel: 'Diesel',
      transmission: 'Manuale',
      category: 'Berlina'
    }
  ]);

  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newVehicle, setNewVehicle] = useState<Omit<Vehicle, 'id'>>({
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    price: 0,
    fuel: '',
    transmission: '',
    category: ''
  });

  const handleLogin = () => {
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsLoggedIn(true);
      toast({
        title: "Accesso effettuato",
        description: "Benvenuto nel pannello di amministrazione",
      });
    } else {
      toast({
        title: "Errore di accesso",
        description: "Credenziali non valide",
        variant: "destructive",
      });
    }
  };

  const addVehicle = () => {
    const id = Math.max(...vehicles.map(v => v.id)) + 1;
    setVehicles([...vehicles, { ...newVehicle, id }]);
    setNewVehicle({
      brand: '',
      model: '',
      year: new Date().getFullYear(),
      price: 0,
      fuel: '',
      transmission: '',
      category: ''
    });
    setIsAdding(false);
    toast({
      title: "Veicolo aggiunto",
      description: "Il veicolo è stato aggiunto al catalogo",
    });
  };

  const updateVehicle = () => {
    if (editingVehicle) {
      setVehicles(vehicles.map(v => v.id === editingVehicle.id ? editingVehicle : v));
      setEditingVehicle(null);
      toast({
        title: "Veicolo aggiornato",
        description: "Le modifiche sono state salvate",
      });
    }
  };

  const deleteVehicle = (id: number) => {
    setVehicles(vehicles.filter(v => v.id !== id));
    toast({
      title: "Veicolo rimosso",
      description: "Il veicolo è stato rimosso dal catalogo",
    });
  };

  const applyDiscount = (id: number, discount: number) => {
    setVehicles(vehicles.map(v => 
      v.id === id ? { ...v, discount } : v
    ));
    toast({
      title: "Sconto applicato",
      description: `Sconto del ${discount}% applicato al veicolo`,
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Car className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-2xl">Accesso Admin</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                placeholder="admin"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                placeholder="admin123"
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Accedi
            </Button>
            <Button variant="outline" onClick={() => navigate('/showroom')} className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Torna al Catalogo
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-foreground">Pannello Admin</h1>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={() => navigate('/showroom')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Torna al Catalogo
              </Button>
              <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add Vehicle Button */}
        <div className="mb-6">
          <Button onClick={() => setIsAdding(true)} disabled={isAdding}>
            <Plus className="mr-2 h-4 w-4" />
            Aggiungi Veicolo
          </Button>
        </div>

        {/* Add Vehicle Form */}
        {isAdding && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Aggiungi Nuovo Veicolo</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Marca</Label>
                <Input
                  value={newVehicle.brand}
                  onChange={(e) => setNewVehicle({...newVehicle, brand: e.target.value})}
                />
              </div>
              <div>
                <Label>Modello</Label>
                <Input
                  value={newVehicle.model}
                  onChange={(e) => setNewVehicle({...newVehicle, model: e.target.value})}
                />
              </div>
              <div>
                <Label>Anno</Label>
                <Input
                  type="number"
                  value={newVehicle.year}
                  onChange={(e) => setNewVehicle({...newVehicle, year: parseInt(e.target.value)})}
                />
              </div>
              <div>
                <Label>Prezzo (€)</Label>
                <Input
                  type="number"
                  value={newVehicle.price}
                  onChange={(e) => setNewVehicle({...newVehicle, price: parseInt(e.target.value)})}
                />
              </div>
              <div>
                <Label>Carburante</Label>
                <Input
                  value={newVehicle.fuel}
                  onChange={(e) => setNewVehicle({...newVehicle, fuel: e.target.value})}
                />
              </div>
              <div>
                <Label>Trasmissione</Label>
                <Input
                  value={newVehicle.transmission}
                  onChange={(e) => setNewVehicle({...newVehicle, transmission: e.target.value})}
                />
              </div>
              <div className="md:col-span-2">
                <Label>Categoria</Label>
                <Input
                  value={newVehicle.category}
                  onChange={(e) => setNewVehicle({...newVehicle, category: e.target.value})}
                />
              </div>
              <div className="md:col-span-2 flex space-x-2">
                <Button onClick={addVehicle}>Aggiungi</Button>
                <Button variant="outline" onClick={() => setIsAdding(false)}>Annulla</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Vehicles List */}
        <div className="grid gap-4">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id}>
              <CardContent className="p-6">
                {editingVehicle?.id === vehicle.id ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label>Marca</Label>
                      <Input
                        value={editingVehicle.brand}
                        onChange={(e) => setEditingVehicle({...editingVehicle, brand: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>Modello</Label>
                      <Input
                        value={editingVehicle.model}
                        onChange={(e) => setEditingVehicle({...editingVehicle, model: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>Prezzo (€)</Label>
                      <Input
                        type="number"
                        value={editingVehicle.price}
                        onChange={(e) => setEditingVehicle({...editingVehicle, price: parseInt(e.target.value)})}
                      />
                    </div>
                    <div className="md:col-span-3 flex space-x-2">
                      <Button onClick={updateVehicle}>Salva</Button>
                      <Button variant="outline" onClick={() => setEditingVehicle(null)}>Annulla</Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">
                        {vehicle.brand} {vehicle.model} ({vehicle.year})
                      </h3>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-xl font-bold">€{vehicle.price.toLocaleString()}</span>
                        {vehicle.discount && (
                          <Badge variant="destructive">-{vehicle.discount}%</Badge>
                        )}
                        <span className="text-sm text-muted-foreground">{vehicle.category}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const discount = prompt('Inserisci percentuale sconto (0-100):');
                          if (discount) {
                            applyDiscount(vehicle.id, parseInt(discount));
                          }
                        }}
                      >
                        <Percent className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingVehicle(vehicle)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteVehicle(vehicle.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;