# 3D Visualisierung

## Status

Accepted

## Context

Das Projekt verlangt die Darstellung der Cranach Werke in einer 3D Visualisierung.

## Decision

Es wurde sich für three.js entschieden, insbesondere die React Libraries, welche erlauben three.js in diesem Framework zu verwenden. Durch vorherige Auswahl des Frameworks war die Auswahl für die 3D Visualisierung beschränkt. In Frage kamen three.js und p5.js. Ich habe mich im Endeffekt für three.js entschieden, da die Einbindung in das React Framework leichter erschien und besser gepflegt wird. Ich habe anhand der Weekly Downloads abgeleitet, welche Library mehr genutzt wird und diese dann ausgewählt. Ebenfalls scheint three.js sich auf drei dimensionalen Raum zu spezialieren, während p5.js auch viele 2D Optionen bietet.

## Consequences

Durch die Wahl von three.js sind mehrere Dependencies entstanden und die Größe des Projekts gewachsen. Dies wäre mit der Wahl einer anderen Library geringer gewesen.