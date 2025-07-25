# TechFlow - Sito Web Corporate con Demo Autosalone

## Panoramica del Progetto

TechFlow è un sito web corporate moderno e professionale che presenta un'azienda tecnologica specializzata in soluzioni digitali innovative. Il sito include una demo interattiva completa di un sistema gestionale per autosalone.

## Scopo e Funzionalità Principali

### Sito Corporate Principale
- **Presentazione aziendale**: Homepage con hero section, informazioni sull'azienda e team
- **Showcasing soluzioni**: Sezione dedicata alle soluzioni tecnologiche offerte
- **Demo interattiva**: Accesso diretto alla demo del sistema autosalone
- **Informazioni di contatto**: Form di contatto e dettagli aziendali

### Demo Sistema Autosalone
- **Catalogo vetture**: Visualizzazione organizzata delle vetture disponibili con filtri di ricerca
- **Pannello amministrativo**: Gestione completa del catalogo (CRUD operazioni, applicazione sconti)
- **Sistema prenotazioni**: Gestione appuntamenti con calendario integrato
- **Autenticazione**: Sistema di login per accesso amministrativo

## Struttura del Progetto

### Pagine Principali (`src/pages/`)

#### `Index.tsx`
- **Ruolo**: Homepage del sito corporate TechFlow
- **Componenti utilizzati**: Navbar, Hero, About, Solutions, Team, Contact, Footer
- **Funzionalità**: Punto di ingresso principale, presenta l'azienda e le sue soluzioni

#### `Showroom.tsx` 
- **Ruolo**: Catalogo vetture della demo autosalone
- **Funzionalità**: 
  - Visualizzazione griglia responsive delle vetture
  - Ricerca per marca/modello
  - Calcolo prezzi scontati
  - Navigazione verso admin e prenotazioni
- **Stato locale**: Lista vetture, termini di ricerca

#### `Admin.tsx`
- **Ruolo**: Pannello di amministrazione autosalone
- **Funzionalità**:
  - Sistema di autenticazione (credenziali: admin/admin123)
  - Gestione CRUD vetture
  - Applicazione/rimozione sconti
  - Dashboard statistiche
- **Stato locale**: Autenticazione, lista vetture, form data

#### `Prenotazioni.tsx`
- **Ruolo**: Sistema di gestione appuntamenti
- **Funzionalità**:
  - Visualizzazione calendario appuntamenti
  - Creazione nuovi appuntamenti (con form)
  - Modifica/eliminazione appuntamenti esistenti
  - Filtraggio per stato appuntamento
- **Stato locale**: Lista appuntamenti, form data, filtri

#### `NotFound.tsx`
- **Ruolo**: Pagina di errore 404
- **Funzionalità**: Gestione route non esistenti con navigazione di ritorno

### Componenti UI (`src/components/`)

#### Componenti Corporate
- **`Navbar.tsx`**: Navigazione principale del sito corporate
- **`Hero.tsx`**: Sezione hero con call-to-action principale
- **`About.tsx`**: Presentazione dell'azienda con statistiche
- **`Solutions.tsx`**: Showcase delle soluzioni con accesso alla demo autosalone
- **`Team.tsx`**: Presentazione del team con foto e ruoli
- **`Contact.tsx`**: Form di contatto con validazione
- **`Footer.tsx`**: Footer con informazioni aziendali e link

#### Componenti UI Base (`src/components/ui/`)
Sistema di design basato su Shadcn/UI con componenti pre-stilizzati:
- **Form components**: `input.tsx`, `button.tsx`, `form.tsx`, `textarea.tsx`
- **Layout components**: `card.tsx`, `separator.tsx`, `badge.tsx`
- **Navigation**: `navigation-menu.tsx`, `tabs.tsx`
- **Feedback**: `toast.tsx`, `alert.tsx`, `progress.tsx`
- **Data display**: `table.tsx`, `calendar.tsx`, `avatar.tsx`

## Interazioni tra Componenti

### Flusso di Navigazione
1. **Homepage** (`Index.tsx`) → **Demo Button** (`Solutions.tsx`) → **Showroom** (`Showroom.tsx`)
2. **Showroom** → **Admin Panel** (`Admin.tsx`) → **Gestione Vetture**
3. **Showroom** → **Prenotazioni** (`Prenotazioni.tsx`) → **Gestione Appuntamenti**

### Gestione dello Stato
- **Stato locale**: Ogni pagina gestisce il proprio stato con `useState`
- **Prop passing**: Dati condivisi tramite props tra componenti parent-child
- **Event handling**: Comunicazione attraverso callback functions

### Routing
```typescript
// App.tsx - Configurazione routing
<Routes>
  <Route path="/" element={<Index />} />           // Homepage corporate
  <Route path="/showroom" element={<Showroom />} /> // Demo autosalone
  <Route path="/admin" element={<Admin />} />       // Pannello admin
  <Route path="/prenotazioni" element={<Prenotazioni />} /> // Gestione appuntamenti
  <Route path="*" element={<NotFound />} />         // 404 fallback
</Routes>
```

## Dipendenze Esterne

### Core Dependencies
- **React 18.3.1**: Framework principale per UI components
- **React DOM 18.3.1**: Rendering React nel DOM
- **React Router DOM 6.26.2**: Gestione routing SPA
- **TypeScript**: Type safety e developer experience

### UI Framework
- **Tailwind CSS**: Framework CSS utility-first per styling
- **Radix UI**: Libreria componenti accessibili headless
  - `@radix-ui/react-dialog`: Modal e dialoghi
  - `@radix-ui/react-toast`: Notifiche toast
  - `@radix-ui/react-select`: Dropdown selects
  - Altri componenti per form, navigazione, layout

### Utility Libraries
- **Lucide React 0.462.0**: Libreria icone SVG ottimizzate
- **Class Variance Authority**: Gestione varianti componenti CSS
- **clsx & tailwind-merge**: Utility per concatenazione classi CSS
- **date-fns**: Manipolazione e formatting date
- **zod**: Schema validation per form

### State Management & Data Fetching
- **TanStack Query 5.56.2**: Server state management e caching
- **React Hook Form 7.53.0**: Gestione form con validazione

### Development & Build Tools
- **Vite**: Build tool e dev server ultra-veloce
- **ESLint**: Linting e code quality
- **PostCSS**: Processing CSS

## Design System

### Theme Configuration
Il progetto utilizza un design system centralizzato:
- **`src/index.css`**: Variabili CSS custom per colori, spacing, typography
- **`tailwind.config.ts`**: Configurazione tema Tailwind personalizzata
- **Color palette**: Sistema di colori semantici (primary, secondary, accent, etc.)
- **Typography**: Gerarchia tipografica coerente
- **Spacing**: Sistema di spaziature standardizzato

### Responsive Design
- **Mobile-first approach**: Design prioritario per dispositivi mobili
- **Breakpoints**: Standard Tailwind (sm, md, lg, xl)
- **Grid system**: Layout responsive con CSS Grid e Flexbox

## Struttura Dati

### Modelli Dati Principali

#### Vehicle (Vettura)
```typescript
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
```

#### Appointment (Appuntamento)
```typescript
interface Appointment {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  vehicle: string;
  status: 'confermato' | 'in_attesa' | 'completato';
  notes?: string;
}
```

## Security & Authentication

### Admin Access
- **Credenziali demo**: username: `admin`, password: `admin123`
- **Session management**: Stato di autenticazione gestito localmente
- **Route protection**: Controllo accesso alle funzionalità admin

## Performance & Optimization

### Code Splitting
- **Lazy loading**: Componenti caricati on-demand
- **Route-based splitting**: Pagine separate in bundle distinti

### Asset Optimization
- **Image optimization**: Immagini generate con AI ottimizzate per web
- **Tree shaking**: Eliminazione codice non utilizzato
- **Bundle optimization**: Configurazione Vite per bundle ottimali

## Deployment & Build

### Build Process
```bash
npm run build    # Build di produzione
npm run preview  # Preview build locale
npm run dev      # Sviluppo locale
```

### Environment Configuration
- **Vite configuration**: `vite.config.ts` per build e dev server
- **TypeScript config**: Configurazione strict per type safety
- **ESLint rules**: Code quality e best practices

## Estensibilità Futura

### Possibili Miglioramenti
1. **Backend integration**: Connessione a database reale via Supabase
2. **User authentication**: Sistema completo di registrazione/login utenti
3. **Payment integration**: Sistema di pagamento per prenotazioni
4. **Email notifications**: Sistema di notifiche automatiche
5. **Advanced filters**: Filtri avanzati per ricerca vetture
6. **Image upload**: Upload immagini vetture nel pannello admin
7. **Analytics dashboard**: Dashboard con metriche dettagliate

### Architettura Modulare
Il progetto è strutturato per facilitare estensioni future:
- **Componenti riutilizzabili**: UI components modulari
- **Hook personalizzati**: Logic riutilizzabile
- **Type safety**: TypeScript per ridurre bug
- **Design system**: Styling consistente e estendibile

---

## Come modificare questo codice

**Usando Lovable**

Visita il [Progetto Lovable](https://lovable.dev/projects/18b10ae2-a397-4afe-a3f8-f07245407e45) e inizia a scrivere prompt.

**Usando il tuo IDE preferito**

Se vuoi lavorare localmente:

```sh
# Clona il repository
git clone <YOUR_GIT_URL>

# Naviga nella directory del progetto
cd <YOUR_PROJECT_NAME>

# Installa le dipendenze
npm i

# Avvia il server di sviluppo
npm run dev
```

## Deployment

Apri [Lovable](https://lovable.dev/projects/18b10ae2-a397-4afe-a3f8-f07245407e45) e clicca su Share → Publish.

*Questo documento fornisce una panoramica completa del sistema. Per dettagli implementativi specifici, consultare i commenti nel codice e la documentazione delle singole librerie utilizzate.*
