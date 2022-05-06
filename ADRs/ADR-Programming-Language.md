# Programming Language

## Status

Accepted

## Context

Das Projekt wird mit React programmiert. Das bedeutet neben HTML und CSS wird Javascript oder Typescript als Programmiersprache benötigt. Javascript ist nicht typ-sicher und kann daher schnell zu Bugs führen, welche schwer nachzuvollziehen sind.

## Decision

Das Projekt wird in Typescript geschrieben.

## Consequences

Durch die Wahl von Typescript wird ein Typsystem dem Code hinzugefügt was für Sicherheit sorgt. Typescript erlaubt es einen saubereren Code zu schreiben, was die Lesbarkeit des Codes verbessert. Besonders im Fall von komplexen Sachverhalten.
Genauso kann man gegen Typescript argumentieren und behaupten, dass eine große Menge an Boilerplate Code addiert wird, welche bei kleineren Projekten sich nicht lohnen würde. Durch die Einführung von Typescript wird ebenfalls ein zusätzlicher Build-Schritt hinzugefügt, welcher zu langsameren Bearbeitungs-/Speicherungs-/Neuladezyklen führt.
Aber mit Hinsicht darauf, dass die Codebase für das Projekt noch wachsen wird, bietet sich Typescript an um eine sichere Basis zu bilden.
