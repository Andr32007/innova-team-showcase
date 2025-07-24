import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, ArrowLeft, Plus, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface Appointment {
  id: number;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  date: string;
  time: string;
  service: string;
  notes: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

const Prenotazioni = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(null);
  
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      clientName: 'Mario Rossi',
      clientPhone: '339 123 4567',
      clientEmail: 'mario.rossi@email.com',
      date: '2024-02-15',
      time: '10:00',
      service: 'Test Drive BMW Serie 3',
      notes: 'Interessato al modello ibrido',
      status: 'confirmed'
    },
    {
      id: 2,
      clientName: 'Giulia Bianchi',
      clientPhone: '347 987 6543',
      clientEmail: 'giulia.bianchi@email.com',
      date: '2024-02-16',
      time: '14:30',
      service: 'Valutazione usato Audi A4',
      notes: '',
      status: 'pending'
    }
  ]);

  const [newAppointment, setNewAppointment] = useState<Omit<Appointment, 'id' | 'status'>>({
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  const services = [
    'Test Drive',
    'Consulenza finanziaria',
    'Valutazione usato',
    'Consegna veicolo',
    'Assistenza post-vendita'
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: 'secondary',
      confirmed: 'default',
      completed: 'default',
      cancelled: 'destructive'
    } as const;
    
    return <Badge variant={variants[status as keyof typeof variants]}>{status}</Badge>;
  };

  const addAppointment = () => {
    const id = Math.max(...appointments.map(a => a.id)) + 1;
    setAppointments([...appointments, { ...newAppointment, id, status: 'pending' }]);
    setNewAppointment({
      clientName: '',
      clientPhone: '',
      clientEmail: '',
      date: '',
      time: '',
      service: '',
      notes: ''
    });
    setShowAddForm(false);
    toast({
      title: "Prenotazione aggiunta",
      description: "L'appuntamento è stato prenotato con successo",
    });
  };

  const updateAppointment = () => {
    if (editingAppointment) {
      setAppointments(appointments.map(a => 
        a.id === editingAppointment.id ? editingAppointment : a
      ));
      setEditingAppointment(null);
      toast({
        title: "Appuntamento aggiornato",
        description: "Le modifiche sono state salvate",
      });
    }
  };

  const deleteAppointment = (id: number) => {
    setAppointments(appointments.filter(a => a.id !== id));
    toast({
      title: "Appuntamento eliminato",
      description: "L'appuntamento è stato rimosso",
    });
  };

  const updateStatus = (id: number, status: Appointment['status']) => {
    setAppointments(appointments.map(a => 
      a.id === id ? { ...a, status } : a
    ));
    toast({
      title: "Status aggiornato",
      description: `Appuntamento marcato come ${status}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-foreground">Sistema Prenotazioni</h1>
            <div className="flex space-x-2">
              <Button 
                variant={isAdminMode ? "default" : "outline"}
                onClick={() => setIsAdminMode(!isAdminMode)}
              >
                {isAdminMode ? 'Modalità Cliente' : 'Modalità Admin'}
              </Button>
              <Button variant="outline" onClick={() => navigate('/showroom')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Torna al Catalogo
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add Appointment Button */}
        <div className="mb-6">
          <Button onClick={() => setShowAddForm(true)} disabled={showAddForm}>
            <Plus className="mr-2 h-4 w-4" />
            Nuova Prenotazione
          </Button>
        </div>

        {/* Add Appointment Form */}
        {showAddForm && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Nuova Prenotazione</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Nome Cliente</Label>
                <Input
                  value={newAppointment.clientName}
                  onChange={(e) => setNewAppointment({...newAppointment, clientName: e.target.value})}
                />
              </div>
              <div>
                <Label>Telefono</Label>
                <Input
                  value={newAppointment.clientPhone}
                  onChange={(e) => setNewAppointment({...newAppointment, clientPhone: e.target.value})}
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={newAppointment.clientEmail}
                  onChange={(e) => setNewAppointment({...newAppointment, clientEmail: e.target.value})}
                />
              </div>
              <div>
                <Label>Servizio</Label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newAppointment.service}
                  onChange={(e) => setNewAppointment({...newAppointment, service: e.target.value})}
                >
                  <option value="">Seleziona servizio</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label>Data</Label>
                <Input
                  type="date"
                  value={newAppointment.date}
                  onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                />
              </div>
              <div>
                <Label>Ora</Label>
                <Input
                  type="time"
                  value={newAppointment.time}
                  onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
                />
              </div>
              <div className="md:col-span-2">
                <Label>Note</Label>
                <Textarea
                  value={newAppointment.notes}
                  onChange={(e) => setNewAppointment({...newAppointment, notes: e.target.value})}
                  placeholder="Note aggiuntive..."
                />
              </div>
              <div className="md:col-span-2 flex space-x-2">
                <Button onClick={addAppointment}>Prenota</Button>
                <Button variant="outline" onClick={() => setShowAddForm(false)}>Annulla</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Appointments List */}
        <div className="grid gap-4">
          {appointments.map((appointment) => (
            <Card key={appointment.id}>
              <CardContent className="p-6">
                {editingAppointment?.id === appointment.id ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Nome</Label>
                      <Input
                        value={editingAppointment.clientName}
                        onChange={(e) => setEditingAppointment({...editingAppointment, clientName: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>Telefono</Label>
                      <Input
                        value={editingAppointment.clientPhone}
                        onChange={(e) => setEditingAppointment({...editingAppointment, clientPhone: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>Data</Label>
                      <Input
                        type="date"
                        value={editingAppointment.date}
                        onChange={(e) => setEditingAppointment({...editingAppointment, date: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>Ora</Label>
                      <Input
                        type="time"
                        value={editingAppointment.time}
                        onChange={(e) => setEditingAppointment({...editingAppointment, time: e.target.value})}
                      />
                    </div>
                    <div className="md:col-span-2 flex space-x-2">
                      <Button onClick={updateAppointment}>Salva</Button>
                      <Button variant="outline" onClick={() => setEditingAppointment(null)}>Annulla</Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-start">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-lg font-semibold">{appointment.clientName}</h3>
                        {getStatusBadge(appointment.status)}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>{appointment.clientPhone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span>{appointment.clientEmail}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{appointment.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                      
                      <div className="text-sm">
                        <strong>Servizio:</strong> {appointment.service}
                      </div>
                      
                      {appointment.notes && (
                        <div className="text-sm text-muted-foreground">
                          <strong>Note:</strong> {appointment.notes}
                        </div>
                      )}
                    </div>
                    
                    {isAdminMode && (
                      <div className="flex flex-col space-y-2 ml-4">
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setEditingAppointment(appointment)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => deleteAppointment(appointment.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex flex-col space-y-1">
                          {['confirmed', 'completed', 'cancelled'].map(status => (
                            <Button
                              key={status}
                              variant="ghost"
                              size="sm"
                              onClick={() => updateStatus(appointment.id, status as Appointment['status'])}
                              disabled={appointment.status === status}
                            >
                              {status}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {appointments.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nessun appuntamento trovato
            </h3>
            <p className="text-muted-foreground">
              Inizia aggiungendo una nuova prenotazione
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prenotazioni;