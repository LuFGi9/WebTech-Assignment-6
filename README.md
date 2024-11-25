# WebTech-Assignment-6

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/LuFGi9/WebTech-Assignment-6)

## Aufgabe 1

Gegeben ist eine einfache HTML-Seite, wobei die Verlinkung der einzelnen
Unterseiten so modifiziert wurde, dass diese nicht mehr via HTML funktionieren. Zudem ist
die package.json-Datei gegeben.

Die Aufgabe besteht darin einen Node.js Server so zu erstellen, dass er eingehende Anfragen
annehmen und die jeweilige Webseite zurückliefern kann. Die Navigation durch die
Unterseiten soll also durch Anfragen an den Server erfolgen. Legt entsprechende Routen an
und nutzt das Express.js-Framework.

Nutzt den Port 8080 für euren Server und gebt in der Konsole eine Mitteilung aus, wenn der
Server gestartet ist.

**Hinweis:**
Wenn du die Aufgabe außerhalb von GitPod bearbeitest, dann musst du zuvor Node.js auf
deine Rechner installieren, den Projektordner herunterladen und darin mit `npm install` die
node_modules für das Projekt installieren. Anschließend kannst du den lokalen Server mit
node `dateiname.js` starten.
Für die Live-Aktualisierung ist dann zusätzlich das npm package `nodemon` empfohlen.

## Aufgabe 2
Erweitert den Server um eine Post-Route: dabei soll die Anfrage sowohl im Server als auch
beim Client zurückgegeben werden.

**Hinweis:**
Alternatives Vorgehen zum selbst ausprobieren:
1. Installiert Postman (falls noch nicht vorhanden)
2. Erweitert den Server um eine Post-Route: dabei soll die Anfrage sowohl im Server als
   auch beim Client zurückgegeben werden.
   Form der Rückgabe: Folgende Daten erhalten: `<<Daten>>`
3. Nutzt `body-parser` oder `express.json()`.
4. Testet mithilfe von Postman. Die Daten sollen in Form eines JSON-Objekts übergeben
   werden.