# Hosting Service

## Status

Accepted

## Context

Das Projekt muss über eine externe URL erreichbar sein. Es gibt mehrere Möglichkeiten eine öffentlich Website verfügbar zu machen. Zu diesen Optionen zählen Github Pages, Heroku, AWS, IBM Cloud, Netlify usw.

## Decision

Heroku wird als Hosting Dienst genutzt.

## Consequences

Da das Projekt einen Passwort Schutz benötigt sind statische Hosting Services schwer zu nutzen, da über diese kein Schutz gewährleister werden kann. Heroku bietet die Möglichkeit einen Web Server zu publizieren und ist daher geeignet für die Einstellung von einer Schutzebene.
Ebenfalls ist Heroku sehr leicht im Umgang und ermöglicht schnelle Bereitstellungen.
