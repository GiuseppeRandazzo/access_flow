# Questo documento visualizza le relazioni tra i modelli definiti in `prisma/schema.prisma`

Questo è uno Snippet del Diagramma ER per ottenerlo stiamo utilizzando Mermaid.js un linguaggio testuale che genera automaticamente i diagrammi. Supportato nativamente da Github e anche dall'anteprima Markdown di VS Code. Se infatti lo si visualliza dentro un file README.md (come in questo caso) lo si vede direttamente come grafico.

```mermaid
erDiagram
    User ||--o{ EnteUser : "is assigned to"
    Ente ||--o{ EnteUser : "has members"
    Ente ||--o{ Scan : "has"
    Scan ||--o{ Issue : "contains"
    Ente ||--o{ Report : "owns"

    User {
        UUID id PK
        String email UK
        String name
        DateTime createdAt
        DateTime updatedAt
    }
    Ente {
        UUID id PK
        String name
        String domain
        DateTime createdAt
        DateTime updatedAt
    }
    EnteUser {
        UUID userId PK, FK
        UUID enteId PK, FK
        String role
    }
    Scan {
        UUID id PK
        UUID enteId FK
        String url
        String status
        Int score
        DateTime createdAt
    }
    Issue {
        UUID id PK
        UUID scanId FK
        String element
        String description
        String impact
        String ruleId
        Boolean resolved
        DateTime createdAt
    }
    Report {
        UUID id PK
        UUID enteId FK
        String title
        String fileUrl
        DateTime createdAt
    }
```
