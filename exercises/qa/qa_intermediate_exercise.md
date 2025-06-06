# 🧪 Quality Assurance - Intermediate Level

## 📋 Gambaran Umum Latihan

Latihan QA tingkat intermediate ini dirancang untuk mengembangkan kemampuan Anda dalam automated testing, API testing, dan strategi pengujian yang lebih kompleks. Anda akan belajar menggunakan tools profesional dan metodologi yang digunakan dalam tim QA enterprise.

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan latihan ini, Anda akan mampu:
- Menulis dan mengeksekusi automated tests menggunakan Selenium WebDriver
- Melakukan comprehensive API testing dengan Postman
- Mengimplementasikan test framework dan reporting
- Melakukan performance testing dasar
- Mengelola test data dan test environment
- Mengintegrasikan testing dalam CI/CD pipeline

## 📚 Pengetahuan Prasyarat

- Menyelesaikan QA Basic Level
- Pemahaman dasar pemrograman (JavaScript/Python)
- Familiarity dengan REST API concepts
- Basic knowledge tentang database (SQL)
- Understanding of version control (Git)

## 🛠 Tools yang Dibutuhkan

- **Programming**: Node.js, Python, atau Java
- **Test Automation**: Selenium WebDriver, Cypress
- **API Testing**: Postman, Newman
- **Test Framework**: Jest, Mocha, atau pytest
- **Performance**: JMeter atau Artillery
- **Database**: MySQL/PostgreSQL client
- **CI/CD**: GitHub Actions atau Jenkins (optional)
- **Reporting**: Allure Report atau Mochawesome

---

## 🤖 Latihan 1: Test Automation Framework

### 📝 Tugas 1.1: Setup Selenium WebDriver Framework
**Durasi**: 90 menit

Buat automated testing framework menggunakan Selenium WebDriver:

**Target Application**: [Sauce Demo](https://www.saucedemo.com/)

**Requirements**:
1. **Project Structure**:
```
selenium-framework/
├── src/
│   ├── pages/           # Page Object Model
│   ├── tests/           # Test scripts
│   ├── utils/           # Helper functions
│   └── config/          # Configuration files
├── reports/             # Test reports
├── screenshots/         # Failure screenshots
├── package.json         # Dependencies
└── README.md           # Setup instructions
```

2. **Page Object Model Implementation**:
   - LoginPage class
   - ProductPage class
   - CartPage class
   - CheckoutPage class

3. **Test Configuration**:
   - Support multiple browsers (Chrome, Firefox)
   - Configurable test environment
   - Test data management

**Test Scenarios to Automate**:
- User login with valid/invalid credentials
- Product browsing and filtering
- Add/remove items from cart
- Complete checkout process
- Logout functionality

**Kriteria Penerimaan**:
- Clean, maintainable code structure
- Proper use of Page Object Model
- Configurable test settings
- Comprehensive test coverage
- Proper error handling and logging

### 📝 Tugas 1.2: Advanced Test Scenarios
**Durasi**: 60 menit

Implementasikan test scenarios yang lebih kompleks:

**Cross-Browser Testing**:
- Jalankan tests di Chrome dan Firefox
- Dokumentasikan perbedaan behavior antar browser

**Data-Driven Testing**:
- Buat CSV/JSON file dengan multiple test data
- Implementasikan parameterized tests

**Test Reporting**:
- Generate HTML test reports
- Include screenshots untuk failed tests
- Test execution metrics dan trends

**Kriteria Penerimaan**:
- Tests berjalan di multiple browsers
- Data-driven approach implemented
- Professional test reports generated

---

## 🌐 Latihan 2: API Testing & Automation

### 📝 Tugas 2.1: Comprehensive API Testing dengan Postman
**Durasi**: 75 menit

Lakukan testing pada REST API menggunakan [JSONPlaceholder](https://jsonplaceholder.typicode.com/):

**API Endpoints to Test**:
- GET /posts
- POST /posts
- PUT /posts/{id}
- DELETE /posts/{id}
- GET /users
- GET /comments

**Testing Requirements**:
1. **Functional Testing**:
   - Verify response status codes
   - Validate response data structure
   - Test request/response headers
   - Data integrity checks

2. **Postman Collection Structure**:
```
API Test Collection/
├── Authentication/
├── Posts Management/
│   ├── Get All Posts
│   ├── Get Single Post
│   ├── Create Post
│   ├── Update Post
│   └── Delete Post
├── Users Management/
└── Comments Management/
```

3. **Environment Variables**:
   - Base URL
   - Auth tokens
   - Test data variables

4. **Pre-request Scripts & Tests**:
   - Dynamic data generation
   - Response validation
   - Error handling

### 📝 Tugas 2.2: API Test Automation
**Durasi**: 45 minum

Automate API tests menggunakan Newman atau coding approach:

**Newman Automation**:
- Export Postman collection
- Create Newman test runner
- Generate HTML reports
- Integrate with CI/CD

**Alternative: Code-based Approach**:
```javascript
// Example structure for API testing
describe('Posts API Tests', () => {
  test('Should create a new post', async () => {
    // API test implementation
  });
  
  test('Should validate post data structure', async () => {
    // Schema validation
  });
});
```

**Kriteria Penerimaan**:
- Comprehensive API test coverage
- Automated test execution
- Professional test reports
- Error scenarios properly handled

---

## 🏋️ Latihan 3: Performance Testing

### 📝 Tugas 3.1: Load Testing dengan JMeter
**Durasi**: 60 minum

Lakukan performance testing pada web application:

**Target**: [HTTPBin](https://httpbin.org/) atau aplikasi pilihan Anda

**Test Scenarios**:
1. **Load Testing**:
   - 50 concurrent users
   - 5 minutes duration
   - Measure response time, throughput

2. **Stress Testing**:
   - Gradually increase load to 200 users
   - Identify breaking point
   - Monitor system behavior

3. **Spike Testing**:
   - Sudden load increase
   - System recovery testing

**Metrics to Collect**:
- Average Response Time
- 95th Percentile Response Time
- Requests per Second
- Error Rate
- Resource Utilization

### 📝 Tugas 3.2: Performance Test Analysis
**Durasi**: 30 menit

Analyze performance test results:

**Analysis Report Should Include**:
- Performance metrics summary
- Bottleneck identification
- Recommendations for improvement
- Graphs and charts
- Comparison with industry standards

**Kriteria Penerimaan**:
- Complete performance test execution
- Professional analysis report
- Actionable recommendations
- Clear visualization of results

---

## 🎭 Latihan 4: Advanced Testing Strategies

### 📝 Tugas 4.1: Test Strategy Document
**Durasi**: 45 menit

Buat comprehensive test strategy untuk e-commerce application:

**Test Strategy Components**:
1. **Test Scope & Objectives**
2. **Testing Types & Levels**:
   - Unit Testing approach
   - Integration Testing strategy
   - System Testing plan
   - User Acceptance Testing

3. **Test Environment Strategy**:
   - Environment requirements
   - Data management
   - Environment refresh strategy

4. **Automation Strategy**:
   - Automation pyramid
   - Tool selection rationale
   - ROI calculation

5. **Risk Assessment**:
   - Technical risks
   - Business risks
   - Mitigation strategies

### 📝 Tugas 4.2: Regression Testing Suite
**Durasi**: 60 menit

Design dan implement regression testing strategy:

**Requirements**:
- Identify critical user journeys
- Create regression test suite
- Automate high-priority scenarios
- Establish execution schedule

**Test Suite Categories**:
- Smoke Tests (Critical functionality)
- Sanity Tests (Basic functionality)
- Full Regression (Comprehensive coverage)

**Kriteria Penerimaan**:
- Well-structured test strategy document
- Practical regression testing approach
- Clear execution guidelines
- Maintenance procedures defined

---

## 🔧 Latihan 5: CI/CD Integration

### 📝 Tugas 5.1: Continuous Testing Setup
**Durasi**: 75 menit

Integrate automated tests dengan CI/CD pipeline:

**Platform Options**:
- GitHub Actions
- Jenkins
- GitLab CI

**Pipeline Requirements**:
1. **Build Stage**:
   - Code compilation
   - Dependency installation

2. **Test Stages**:
   - Unit tests execution
   - API tests execution
   - UI tests execution (parallel execution)

3. **Reporting Stage**:
   - Test results aggregation
   - Failure notifications
   - Report publishing

**Sample GitHub Actions Workflow**:
```yaml
name: QA Pipeline
on: [push, pull_request]
jobs:
  api-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run API Tests
        run: newman run collection.json
  
  ui-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run UI Tests
        run: npm test
```

**Kriteria Penerimaan**:
- Working CI/CD pipeline
- Automated test execution
- Proper reporting and notifications
- Pipeline optimization for speed

---

## 🎯 Deliverables Akhir

Struktur submission Anda:

```
submission/qa/[nama_anda]/intermediate/
├── README.md
├── 01_automation_framework/
│   ├── selenium-framework/         # Complete framework
│   ├── test_reports/              # Generated reports
│   └── documentation.md           # Framework documentation
├── 02_api_testing/
│   ├── postman_collections/       # Postman collections
│   ├── newman_reports/           # Newman reports
│   └── api_test_analysis.md      # API testing summary
├── 03_performance_testing/
│   ├── jmeter_scripts/           # JMeter test plans
│   ├── performance_reports/      # Performance results
│   └── performance_analysis.md   # Analysis document
├── 04_test_strategy/
│   ├── test_strategy.md          # Comprehensive strategy
│   └── regression_suite.md       # Regression approach
├── 05_cicd_integration/
│   ├── .github/workflows/        # CI/CD configurations
│   └── pipeline_documentation.md # Pipeline guide
└── project_reflection.md         # Overall learnings
```

## ✅ Kriteria Kelulusan

Untuk lulus dari latihan Intermediate QA:

- [ ] **Automation Framework**: Working Selenium framework dengan POM
- [ ] **API Testing**: Comprehensive API test coverage
- [ ] **Performance Testing**: Complete performance analysis
- [ ] **Test Strategy**: Professional test strategy document
- [ ] **CI/CD Integration**: Working automated pipeline
- [ ] **Code Quality**: Clean, maintainable code
- [ ] **Documentation**: Comprehensive documentation
- [ ] **Best Practices**: Following industry standards

## 📈 Langkah Selanjutnya

Persiapan untuk Advanced Level:
1. **Advanced Automation**: BDD, TDD approaches
2. **Security Testing**: OWASP testing, penetration testing basics
3. **Mobile Testing**: Appium, mobile-specific testing
4. **Test Leadership**: Test planning, team management
5. **Specialized Tools**: Docker, Kubernetes, cloud testing

## 🔗 Sumber Belajar Tambahan

### 📚 Technical Resources
- [Selenium WebDriver Documentation](https://selenium-python.readthedocs.io/)
- [Postman Learning Center](https://learning.postman.com/)
- [JMeter User Manual](https://jmeter.apache.org/usermanual/)
- [Test Automation University](https://testautomationu.applitools.com/)

### 🎥 Advanced Video Courses
- [API Testing with Postman](https://www.youtube.com/playlist?list=PLhW3qG5bs-L-oT0GenwPLcJAPD_SiFK3C)
- [Selenium WebDriver Full Course](https://www.youtube.com/playlist?list=PLUDwpEzHYYLt_rvOtHp0bWru_4ju3X37W)
- [Performance Testing with JMeter](https://www.youtube.com/playlist?list=PLhW3qG5bs-L-X0jaNyAC5jl_VGsHyWZks)

### 🏆 Certification Paths
- ISTQB Advanced Level Test Automation Engineer
- Postman API Testing Certification
- Selenium WebDriver Certification

---

**Keep pushing your limits in QA! 🚀**

*Estimated Total Time: 8-12 hours*