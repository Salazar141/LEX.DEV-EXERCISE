# 🔧 Backend Exercise - Advanced Level

## 🧾 Judul
Arsitektur Skala Enterprise & Sistem Terdistribusi BobaKu

## 📌 Deskripsi Tugas

BobaKu telah berkembang pesat dengan memiliki 25+ cabang di 5 kota besar! Mereka berencana untuk melakukan ekspansi nasional dalam 6 bulan ke depan. Sistem backend lama tidak mampu menangani peningkatan traffic dan kompleksitas bisnis yang semakin tinggi.

### 🌟 Skenario Bisnis
CTO BobaKu memutuskan untuk melakukan refactoring sistem untuk mendukung high-availability, scalability, dan reliability. Sistem baru harus menangani:
- 10.000+ pesanan per hari
- Integrasi dengan multiple payment gateway
- Multi-tenant untuk franchise
- Analitik real-time untuk manajemen
- Supply chain management terintegrasi

### ✨ Fitur Utama:

1. **Arsitektur Mikroservis atau Modular Monolith**
   - Layanan terpisah sesuai domain bisnis
   - API Gateway sebagai single entry point
   - Service discovery & load balancing

2. **Manajemen Transaksi & Pembayaran**
   - Integrasi multi-payment gateway (simulasi)
   - Penanganan transaksi yang fault-tolerant
   - Sistem refund & dispute management

3. **Multi-tenant & Multi-cabang**
   - Data isolation per franchise/cabang
   - Shared configuration & resources
   - Dashboard admin multi-level

4. **Real-time Processing**
   - Notifikasi real-time untuk pesanan baru
   - Tracking status pesanan secara live
   - Event-driven architecture

5. **Performance & Scalability**
   - Caching strategy (Redis/Memcached)
   - Database optimization & indexing
   - Horizontal scaling dengan Docker/Kubernetes

### 🔌 Domain Services & API Examples:

#### Customer Service
- User management & authentication
- Profile & preferences
- Loyalty program

#### Order Service
- Order processing & management
- Kitchen display system
- Order history & analytics

#### Menu Service
- Product catalog & pricing
- Inventory management
- Menu customization & seasonal items

#### Payment Service
- Payment processing
- Refund handling
- Financial reporting

#### Analytics Service
- Business intelligence
- Customer insights
- Sales forecasting

#### Notification Service
- Push notifications
- Email notifications
- In-app alerts

## 🎯 Tujuan Skill
- Desain arsitektur sistem kompleks
- Implementasi patterns: CQRS, Event Sourcing, Saga
- Database optimization & scaling
- Message queuing & event-driven architecture
- Caching strategies & distributed systems
- CI/CD pipeline & deployment automation
- Monitoring, logging & performance testing
- Security di level enterprise

## ✅ Kriteria Penyelesaian
- Arsitektur sistem yang well-documented (diagram & docs)
- Implementasi minimal 3 service domain
- API Gateway yang functional
- Integration testing antar services
- Performance testing dengan hasil konkret
- Implementasi caching & database optimization
- CI/CD pipeline sederhana
- Security best practices (pentest report)
- Dokumentasi API yang komprehensif
- Deployment ke cloud platform (AWS/GCP/Azure)

## 🧰 Teknologi yang Dapat Digunakan

### Core Backend:
- **Node.js**: NestJS, Express + Microservices
- **Python**: FastAPI, Django + Celery
- **Java/Kotlin**: Spring Boot, Micronaut, Quarkus
- **Go**: Go-kit, Micro
- **C#**: ASP.NET Core + Steeltoe
- **Ruby**: Rails + Gruf

### Database & Storage:
- **SQL**: PostgreSQL, MySQL, CockroachDB (distributed SQL)
- **NoSQL**: MongoDB, Cassandra, DynamoDB
- **Cache**: Redis, Memcached
- **Search**: Elasticsearch, Algolia
- **Time-series**: InfluxDB, TimescaleDB

### Message Brokers & Streaming:
- **Kafka**: Event streaming platform
- **RabbitMQ/ActiveMQ**: Message queuing
- **NATS**: Lightweight messaging
- **gRPC**: High-performance RPC

### Infrastructure & DevOps:
- **Containers**: Docker, Kubernetes
- **CI/CD**: GitHub Actions, Jenkins, GitLab CI
- **Monitoring**: Prometheus, Grafana, ELK Stack
- **Tracing**: Jaeger, Zipkin
- **Cloud**: AWS, GCP, Azure

## ⏳ Estimasi Waktu
15–25 jam (dapat dikerjakan dalam beberapa sprint)

## 💡 Contoh Output dan Format Data

### Service Communication Pattern:

```json
// Event example (Order Created)
{
  "id": "evt-20231015-4582",
  "type": "order.created",
  "timestamp": "2023-10-15T14:30:00Z",
  "version": "1.0",
  "source": "order-service",
  "data": {
    "order_id": "ord-20231015-789",
    "user_id": "u456",
    "outlet_id": "outlet-23",
    "items": [
      {
        "menu_id": "m001",
        "quantity": 2,
        "customizations": {
          "sugar_level": 50,
          "ice_level": 30,
          "toppings": ["t001", "t003"]
        }
      }
    ],
    "total_amount": 76000,
    "payment_method": "gopay",
    "status": "pending_payment"
  },
  "metadata": {
    "correlation_id": "corr-78934",
    "trace_id": "trace-82938"
  }
}

// API Gateway response for GET /api/v1/orders/ord-20231015-789
{
  "status": "success",
  "data": {
    "order": {
      "id": "ord-20231015-789",
      "created_at": "2023-10-15T14:30:00Z",
      "customer": {
        "id": "u456",
        "name": "Rina Wijaya",
        "membership_tier": "gold",
        "current_points": 1230
      },
      "outlet": {
        "id": "outlet-23",
        "name": "BobaKu Gandaria City",
        "address": "Gandaria City Mall Lt. 2",
        "phone": "021-55678923"
      },
      "items": [
        {
          "name": "Brown Sugar Boba Milk Tea",
          "price": 28000,
          "quantity": 2,
          "customizations": {
            "sugar_level": "50%",
            "ice_level": "30%",
            "toppings": [
              {
                "name": "Pearl",
                "price": 5000
              },
              {
                "name": "Cheese Foam",
                "price": 8000
              }
            ]
          },
          "subtotal": 76000
        }
      ],
      "payment": {
        "method": "gopay",
        "status": "completed",
        "transaction_id": "gpy-783240923",
        "paid_at": "2023-10-15T14:32:45Z"
      },
      "status": {
        "current": "being_prepared",
        "history": [
          {
            "status": "pending_payment",
            "timestamp": "2023-10-15T14:30:00Z"
          },
          {
            "status": "payment_completed",
            "timestamp": "2023-10-15T14:32:45Z"
          },
          {
            "status": "being_prepared",
            "timestamp": "2023-10-15T14:33:10Z"
          }
        ],
        "estimated_completion": "2023-10-15T14:45:00Z"
      },
      "loyalty": {
        "points_earned": 76,
        "applied_rewards": []
      }
    }
  }
}
```

## 📁 Struktur Proyek Rekomendasi

```
bobaku-advanced/
├── api-gateway/
│   ├── src/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── proxy/
│   │   └── security/
│   ├── Dockerfile
│   └── package.json
├── services/
│   ├── customer-service/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── repositories/
│   │   │   ├── models/
│   │   │   ├── events/
│   │   │   └── config/
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   └── package.json
│   ├── order-service/
│   │   └── ...
│   ├── menu-service/
│   │   └── ...
│   ├── payment-service/
│   │   └── ...
│   └── notification-service/
│       └── ...
├── shared/
│   ├── models/
│   ├── utils/
│   ├── events/
│   └── constants/
├── infrastructure/
│   ├── docker-compose.yml
│   ├── k8s/
│   │   ├── deployments/
│   │   ├── services/
│   │   └── configmaps/
│   ├── terraform/
│   │   └── main.tf
│   └── monitoring/
│       ├── prometheus/
│       └── grafana/
├── docs/
│   ├── architecture.md
│   ├── api-docs/
│   ├── sequence-diagrams/
│   └── deployment.md
├── scripts/
│   ├── setup.sh
│   ├── seed-data.js
│   └── benchmarks/
└── README.md
```

## 🚀 Tantangan Ekstra (Opsional)
- Implementasi Circuit Breaker dan Bulkhead Patterns
- Blue/Green Deployment Strategy
- A/B Testing Infrastructure
- Multi-region deployment dengan data replication
- Implementasi GraphQL API sebagai alternatif REST
- Chaos Engineering Tests
- Service Mesh Implementation (Istio/Linkerd)
- Business Intelligence Dashboard dengan data warehouse

## 📊 Contoh Arsitektur Sistem

```
┌────────────────┐     ┌────────────────┐
│                │     │                │
│  Mobile App    │     │  Web Frontend  │
│                │     │                │
└───────┬────────┘     └────────┬───────┘
        │                       │
        │    ┌─────────────┐    │
        └────►             ◄────┘
             │  API Gateway │
             │             │
             └──────┬──────┘
                    │
       ┌────────────┼─────────────┐
       │            │             │
┌──────▼─────┐ ┌────▼───────┐ ┌───▼────────┐
│            │ │            │ │            │
│  Customer  │ │   Order    │ │   Menu     │
│  Service   │ │  Service   │ │  Service   │
│            │ │            │ │            │
└──────┬─────┘ └────┬───────┘ └───┬────────┘
       │            │             │
       └────────────┼─────────────┘
                    │
       ┌────────────┼─────────────┐
       │            │             │
┌──────▼─────┐ ┌────▼───────┐ ┌───▼────────┐
│            │ │            │ │            │
│  Payment   │ │Notification│ │ Analytics  │
│  Service   │ │  Service   │ │  Service   │
│            │ │            │ │            │
└──────┬─────┘ └────┬───────┘ └───┬────────┘
       │            │             │
       └────────────┼─────────────┘
                    │
             ┌──────▼──────┐
             │             │
             │   Message   │
             │   Broker    │
             │  (Kafka)    │
             │             │
             └─────────────┘
```

## 📚 Referensi Belajar

### Video Tutorials
- 📹 [Microservices Architectural Pattern](https://www.youtube.com/watch?v=o36vWQCRrp0) - System Design
- 📹 [Microservices Communication Patterns](https://www.youtube.com/watch?v=0UTOLRTwOX0) - Hussein Nasser
- 📹 [CQRS & Event Sourcing](https://www.youtube.com/watch?v=ysxgpVfyeNA) - CodeOpinion
- 📹 [Domain-Driven Design](https://www.youtube.com/watch?v=pMuiVlnGqjk) - Eric Evans
- 📹 [Kafka in Microservices](https://www.youtube.com/watch?v=ah7oXHsYdfo) - TechWorld with Nana
- 📹 [Docker & Kubernetes Full Course](https://www.youtube.com/watch?v=Wf2eSG3owoA) - FreeCodeCamp

### Dokumentasi & Artikel
- 📖 [Microservices Pattern](https://microservices.io/patterns/index.html) - Chris Richardson
- 📖 [Designing Data-Intensive Applications](https://dataintensive.net/) - Martin Kleppmann 
- 📖 [Kubernetes Documentation](https://kubernetes.io/docs/home/)
- 📖 [Spring Cloud](https://spring.io/projects/spring-cloud)
- 📖 [NestJS Microservices](https://docs.nestjs.com/microservices/basics)
- 📖 [Kafka Documentation](https://kafka.apache.org/documentation/)
- 📖 [Redis as a Microservices Cache](https://redis.com/solutions/use-cases/microservices/)
- 📖 [API Gateway Pattern](https://microservices.io/patterns/apigateway.html)

### Books
- 📚 [Building Microservices](https://www.oreilly.com/library/view/building-microservices/9781491950340/) - Sam Newman
- 📚 [Domain-Driven Design](https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215) - Eric Evans
- 📚 [Microservice Patterns](https://www.manning.com/books/microservices-patterns) - Chris Richardson
- 📚 [Cloud Native Patterns](https://www.manning.com/books/cloud-native-patterns) - Cornelia Davis

### Courses
- 🎓 [Microservices Architecture](https://www.udemy.com/course/microservices-architecture/) - Udemy
- 🎓 [Domain Driven Design & Microservices](https://www.pluralsight.com/courses/domain-driven-design-microservices) - Pluralsight
- 🎓 [Event-Driven Microservices](https://www.linkedin.com/learning/event-driven-microservices) - LinkedIn Learning

### GitHub Repositories
- 🔧 [Microservices Demo](https://github.com/GoogleCloudPlatform/microservices-demo) - Google Cloud Platform
- 🔧 [eShop on Containers](https://github.com/dotnet-architecture/eShopOnContainers) - Microsoft
- 🔧 [Spring Cloud Microservices Example](https://github.com/spring-petclinic/spring-petclinic-microservices)
- 🔧 [NestJS Microservices Example](https://github.com/nestjs/nest/tree/master/sample/03-microservices)

### Conferences & Communities
- 🌐 [Microservices.io](https://microservices.io/) - Resource center
- 🌐 [Domain-Driven Design Community](https://dddcommunity.org/)
- 🌐 [CNCF (Cloud Native Computing Foundation)](https://www.cncf.io/)

---

📝 Simpan hasilmu di folder `submission/backend/[namamu]/backend-advanced/` dan pastikan untuk menyertakan dokumentasi arsitektur, API, dan deployment yang lengkap.
