# Hosting Service

## Status

Accepted

## Context

Das Projekt muss über eine externe URL erreichbar sein. Es gibt mehrere Möglichkeiten eine öffentlich Website verfügbar zu machen. Zu diesen Optionen zählen Github Pages, Heroku, AWS, IBM Cloud, Netlify usw.

## Decision

Github Pages wird als Hosting Dienst genutzt.

## Consequences

Github bietet eine integrierte Option ein Repository zu veröffentlichen. Durch die Wahl von Github Pages als Hosting Service wird der Tech Stack kleiner gehalten. Ebenfalls ist der Aufwand für Einrichtung sowie Wartung sehr klein.
Github Pages kann nur statische Websites hosten und ist daher stark eingeschränkt in der Umsetzung von komplexerer Logik.
