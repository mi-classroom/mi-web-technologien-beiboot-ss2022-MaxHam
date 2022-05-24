# Zugriff Schutz

## Status

Accepted

## Context

Das Projekt muss über eine simple Art eines Zugriffschutzes verfügen.

## Decision

Ein Express Server mit `express-basic-auth` Middleware wird genutzt.

## Consequences

Durch die Wahl von Heroku als Hosting Service ist es möglich einen Zugriffsschutz über `express-basic-auth` zu nutzen.
