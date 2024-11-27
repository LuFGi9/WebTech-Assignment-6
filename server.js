// Aufgabe 1.1 Express einbinden und ein Serverobjekt erstellen
// ===== HERE ===

// Aufgabe 1.2 Body Parser einbinden / JSON aktivieren
// ===== HERE ===


// Aufgabe 1.3 Ergänze diese Route sodass der Inhalt von 'client/startseite.html' ausgeliefert wird, sobald der Client auf
// die URL 'http://localhost:8080/' geht.
// Tipp: send(string) schickt einen string zum Client. Verwende eine Funktion, die stattdessen den Inhalt einer Datei sendet.
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// ===== HERE ===

// Aufgabe 1.4 Dir ist sicher aufgefallen, dass das CSS der Webseite nicht funktioniert. Sorg dafür, dass die
// CSS Datei unter /static/style.css ausgeliefert wird. Implementiere es so, sodass jede weitere Datei, die in
// /static abgelegt wird nach außen verfügbar ist.
// ===== HERE ===

// Aufgabe 1.5 Implementiere eine Middleware um 404 Fehler und eine weitere um alle weiteren Fehler abzufangen.
// Middleware für 404-Fehler
// ===== HERE ===

// Middleware für andere Fehler
// ===== HERE ===

// Aufgabe 2 Erweitert den Server um eine Post-Route: dabei soll die Anfrage sowohl im Server als auch
// beim Client zurückgegeben werden.
// ===== HERE ===

app.listen(8080, () => console.log('App listening on port 8080!'));
