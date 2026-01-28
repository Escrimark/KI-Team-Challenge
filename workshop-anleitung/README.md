# Workshop-Anleitung: Vibe-Coding Challenge

Diese Präsentation enthält die vollständige Anleitung für den BMW KI-Team-Challenge Workshop.

## Dateien

| Datei | Beschreibung |
|-------|-------------|
| `index.html` | Standalone HTML-Präsentation - direkt im Browser öffnen |
| `canvas.jsx` | React-Komponente für Integration in React-Projekte |

## Verwendung

### Option 1: Standalone (empfohlen)
Öffne `index.html` direkt in einem modernen Browser. Die Präsentation funktioniert komplett ohne Server.

**Navigation:**
- Pfeiltasten links/rechts zum Blättern
- Oder die Buttons am unteren Bildschirmrand nutzen

### Option 2: React-Integration
Die `canvas.jsx` Datei kann in ein bestehendes React-Projekt eingebunden werden:

```jsx
import WorkshopSlides from './canvas';

function App() {
  return <WorkshopSlides />;
}
```

**Abhängigkeiten:**
- React 18+
- Tailwind CSS
- lucide-react (Icons)

## Inhalt der Präsentation

1. **Titelfolie** - Einführung in die KI-Team-Challenge
2. **Was ist Vibecoding?** - Konzept und Unterschied zu traditionellem Coding
3. **Der Ablauf** - Die drei Phasen der Challenge
4. **Phase 1: Datenbasis** - Anleitung zum Erstellen der Beschreibungen
5. **Phase 2: App programmieren** - Google Colab Setup
6. **Prompting-Tipps** - Hilfestellung für Teams
7. **Live-Challenge** - Scoring und Regeln
8. **Transfer: KI bei BMW** - Praktische Anwendungen
9. **Backup-Folien** - Technische Details und API-Setup

## Verknüpfung mit der Lösung

Die Musterlösung (`Namen raten.ipynb`) und das Evaluation Tool befinden sich im Hauptverzeichnis dieses Repositories.
