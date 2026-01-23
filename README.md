# KI-Team-Challenge
🚗 Wer ist es? – Die KI-Team-Challenge

Workshop Material für das Team BMW EG-940

Willkommen im Repository zum Workshop "Vibecoding & Personality Matching". In diesem Workshop nutzen wir Generative AI, um eine Anwendung zu bauen, die unsere Teammitglieder anhand anonymer Beschreibungen erkennt.

🌟 Was ist "Vibecoding"?

Vibecoding ist der Ansatz, Software nicht durch manuelles Schreiben jeder einzelnen Zeile Code zu erstellen, sondern durch natürliche Sprache.

Traditionelles Coding: Syntax lernen, Semikolons suchen, Debugging.

Vibecoding: Wir beschreiben der KI unsere Vision und Logik. Die KI schreibt den Python-Code.

🎯 Die Mission

Unser Ziel ist es, eine funktionierende "Wer ist es?"-App in Google Colab zu bauen.

Data: Sammeln von anonymen Persönlichkeitsprofilen (Hobbys, Ticks, BMW-Modell).

Code: Erstellung der Logik mit Python und der Gemini API.

Test: Live-Challenge – wer errät die meisten Kollegen?

🛠️ Setup & Voraussetzungen

Wir arbeiten direkt im Browser mit Google Colab. Es ist keine lokale Installation notwendig.

1. API Key erstellen

Um Zugriff auf das Modell zu erhalten, benötigt ihr einen API Key:

Besuche Google AI Studio.

Klicke auf "Get API key".

Speichere den Key in Google Colab unter den "Secrets" (Schlüssel-Icon links) als GOOGLE_API_KEY.

2. Installation im Notebook

In der ersten Zelle eures Colab-Notebooks müsst ihr die Bibliothek installieren:

!pip install -q -U google-generativeai


💻 Anatomie der Lösung

Hier ist ein Grundgerüst, wie eure Lösung aussehen könnte (nutzt dies als Orientierung für eure Prompts an die KI):

Datenstruktur

Eine Liste von Dictionaries hält die "Wahrheit":

team_data = [
    {"name": "Max M.", "desc": "Fährt einen E30, liebt Klettern und trinkt nur Espresso."},
    {"name": "Julia S.", "desc": "Hat immer die neuesten Gadgets und wandert jedes Wochenende."},
    # ... weitere Kollegen
]


Der System Prompt

Das Herzstück der KI-Steuerung:

"Du bist ein KI-Assistent, dessen Aufgabe es ist, einen Mitarbeiter aus einer vorgegebenen Liste zu identifizieren. Der Benutzer wird dir Hobbys und Eigenschaften nennen, und du musst den Namen des Mitarbeiters zurückgeben, der am besten zu diesen Beschreibungen passt. Antworte ausschließlich mit dem Namen."

💡 Prompting-Tipps für die Teams

Damit die KI genau das tut, was ihr wollt, nutzt folgende Strategien:

Kontext setzen: "Erstelle eine Python-Liste team_data mit Namen und Beschreibungen."

Rolle definieren: "Dein fachliches Know-How liegt im Matching von Personenbeschreibungen."

Output steuern: "Wichtig: Die KI soll NUR den Namen ausgeben, keine Erklärungen oder Sätze drumherum."

🏆 Scoring Regeln

Das Spiel wird live moderiert:

Der Moderator präsentiert einen anonymen Text (Input).

Ihr füttert eure App mit diesem Input.

1 Punkt pro korrekt identifiziertem Mitarbeiter.

0 Punkte, wenn es sich um jemanden aus dem eigenen Team handelt.

🚀 Transfer für BMW

Warum machen wir das?

Schnelles Prototyping: Ideen testen ohne jahrelange Coding-Erfahrung.

Automatisierung: Von Excel-Macros bis zu Reporting-Tasks.

Innovation: KI ist ein Werkzeug, das in eurer Hand liegt.

Viel Erfolg beim Coden!
