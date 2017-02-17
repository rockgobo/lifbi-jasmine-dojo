# Coding Dojo - TDD

## Test driven developement - TDD
Zu deutsch auch testgetriebene Entwicklung beschreibt einen Arbeitsablauf, für den vor allem Disziplin verlangt wird, der einen auf der anderen Seite mit einer schnellen Feedbackschleife unterstützt und mitunder auch sehr viel Spaß bereiten kann. An einem recht einfachen Beispiel soll dieser Workflow kennengelernt werden.

## Aufgabenstellung
Auf dem Bildschirm soll eine Raute aus Buchstaben ausgegeben werden, die eine variable Größe haben soll. Gibt der Nutzer zum Beispiel "A" ein wird das kleinste Diamant aus dem Buchstaben "A" ausgegeben. Ansonsten baut sich die Raute rekursiv auf:

### B-Diamant

     A
    B B
     A

### C-Diamant

      A
     B B
    C   C
     B B 
      A

## TDD-Workflow
Der TDD Drill baut sich aus drei Phasen auf:

### Rot-Phase
Zunächst wird ein Test geschrieben, der einen kleinen Schritt zur Lösung hinbeschreibt, zum Beispiel wird das wird das Verhalten des Programms bei der Eingabe von "A" beschrieben. In diesem Fall soll ja "A" auch wieder ausgegeben werden. Dieser erste Test schlägt nun Fehl (Momentan gibt es ja auch noch keine einzige Zeile Code). Die Fehlermeldungen des Testsystem bringen nun aber einige Einsichten, die in der nächsten Phase helfen werden, diesen Test zu bestehen. In dieser Phase sollten zwei Dinge passieren, man beschäftigt sich sehr genau mit dem Problem und deren *Anforderungen* und man legt eine bestimmte *Architektur* für die Umsetzung fest. Ein Test könnte zum Beispiel folgendermaßen aussehen:

    describe ("A Diamond Program", function(){
        it ("should return A, if A is provided", function(){
            var diamond = new Diamond('A')

            expect(Diamond.toString()).toBeEqual('A')
        })
    })

Man kann hier schon erkennen, wie Tests in Jasmine des Verhalten des Programms beschreibt. In mehr oder weniger schlechtem Englisch sagt der Test nichts anderes als: "Describe a diamond program, it should return A, if A is provided.

### Grün-Phase
In dieser Phase versucht man nun das Programm so weit zu verändern (bzw. überhaupt erst einmal zu implementieren), dass der Test auf Grün springt. Dazu ist jedes Mittel recht, hauptsache der Test wird grün, frei nach dem Motto "Fake it, till you make it". Der erste Test kann zum Beispiel damit erfolgreich abgeschlossen werden in dem man eine einfache Methode schreibt, die nur "A" zurück gibt.

### Refactor
In der letzten Phase beschäftigt man sich nun mit der Verbesserung der einfachen Lösung aus der Phase Grün, bis eine schöne, saubere und denoch einfache Lösung gefunden ist, die den Test immer noch grün hält. In dieser Phase kann man auch immer mal wieder den Code seiner Tests verbessern, nur die Form nicht den Inhalt. 

Diese drei Phasen werden nun beliebig oft wiederholt, um in kleinen Schritten bis zu einem fertigen Programm zu gelangen. Schreibt man für alle änderungen zunächst einen Test erreicht man dadurch eine 100% Testabdeckung und kann in der Entwicklung den Code beliebig verbessern in der Gewissheit, dass das Verhalten des Programms durch Tests abgesichert bleibt.

## Dojo
Setze das Diamant-Programm mit Hilfe von TDD um.

### Jasmine-Umgebung
Im Ordner *spec* liegen die Tests und im Ordner *src* die zutestenden Quelldateien. Zum Ausführen der Tests ruft man die Datei SpecRunner.html in einem beliebigen Browser auf. Der Bisherige Code aus dem Dojo liegt im Ordner *dojo1*.

## Verwandte Techniken und Begriffe
* Spezification by Example
* Behavior driven developement (BDD)

## Verweise
[https://jasmine.github.io/] https://jasmine.github.io/


