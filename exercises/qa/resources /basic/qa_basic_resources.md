# 🧪 QA Basic Level - Learning Resources

## 📚 Resource Overview

Kumpulan lengkap resources untuk mendukung pembelajaran QA Basic Level, termasuk templates, examples, checklists, dan reference materials yang akan membantu Anda menyelesaikan semua exercises dengan sukses.

---

## 📝 Templates & Formats

### 1. Test Case Template (Excel/Google Sheets)

```
Test Case ID | Test Case Title | Module | Preconditions | Test Steps | Expected Result | Test Data | Priority | Status | Notes
TC_001 | Valid Login with Email | Login | User is on login page | 1. Enter valid email 2. Enter valid password 3. Click Login | User successfully logged in | email: test@example.com, password: Test123! | High | Not Executed | -
```

**Download Template**: [Basic Test Case Template](https://docs.google.com/spreadsheets/d/example)

### 2. Bug Report Template

```markdown
# Bug Report Template

**Bug ID**: BUG_[MODULE]_[NUMBER]
**Date**: [DD/MM/YYYY]
**Reported By**: [Your Name]

## Summary
[Brief description of the bug in 1-2 sentences]

## Environment
- **Browser**: Chrome 120.0.6099.109
- **OS**: Windows 11 / macOS Ventura / Ubuntu 22.04
- **Screen Resolution**: 1920x1080
- **Device**: Desktop/Mobile

## Priority & Severity
- **Priority**: Critical/High/Medium/Low
- **Severity**: Critical/High/Medium/Low

## Steps to Reproduce
1. Navigate to [URL]
2. Click on [Element]
3. Enter [Data] in [Field]
4. Click [Button]
5. Observe the result

## Expected Result
[What should happen]

## Actual Result
[What actually happened]

## Screenshots/Videos
![Bug Screenshot](path/to/screenshot.png)

## Additional Information
- Console errors: [Yes/No - include details]
- Network issues: [Yes/No - include details]
- Reproducibility: Always/Sometimes/Once
- Workaround available: [Yes/No - describe if yes]

## Impact
[How this affects users/business]
```

### 3. Test Plan Template

```markdown
# Test Plan Template

## 1. Test Plan Overview
- **Project Name**: [Application Name]
- **Version**: [Version Number]
- **Test Plan ID**: TP_[PROJECT]_[VERSION]
- **Date**: [DD/MM/YYYY]
- **Prepared By**: [Your Name]

## 2. Objective
[Clear statement of what you want to achieve with testing]

## 3. Scope
### In Scope
- [Feature 1]
- [Feature 2]
- [Feature 3]

### Out of Scope
- [Feature A]
- [Feature B]
- [Feature C]

## 4. Test Approach
- **Testing Types**: Manual Testing, Functional Testing, UI Testing
- **Testing Levels**: System Testing, Integration Testing
- **Testing Methods**: Black Box Testing, Positive/Negative Testing

## 5. Test Environment
### Hardware Requirements
- Device: Desktop/Mobile
- Memory: Minimum 8GB RAM
- Storage: 100MB free space

### Software Requirements
- Browser: Chrome 120+, Firefox 115+, Safari 16+
- OS: Windows 10+, macOS 12+, Ubuntu 20.04+
- Network: Stable internet connection

## 6. Test Schedule
| Phase | Start Date | End Date | Duration |
|-------|------------|----------|----------|
| Test Planning | [Date] | [Date] | [X days] |
| Test Case Development | [Date] | [Date] | [X days] |
| Test Execution | [Date] | [Date] | [X days] |
| Bug Reporting | [Date] | [Date] | [X days] |
| Test Closure | [Date] | [Date] | [X days] |

## 7. Entry & Exit Criteria
### Entry Criteria
- [ ] Application deployed to test environment
- [ ] Test cases reviewed and approved
- [ ] Test environment is stable
- [ ] Test data is prepared

### Exit Criteria
- [ ] All test cases executed
- [ ] 90% pass rate achieved
- [ ] All critical bugs resolved
- [ ] Test summary report completed

## 8. Deliverables
- Test cases document
- Test execution report
- Bug reports
- Test summary report

## 9. Risk Assessment
| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Environment instability | High | Medium | Have backup environment |
| Incomplete requirements | High | Low | Regular communication with stakeholders |
| Time constraints | Medium | High | Prioritize critical test cases |

## 10. Approval
- **Test Lead**: [Name] - [Signature] - [Date]
- **Project Manager**: [Name] - [Signature] - [Date]
```

---

## 🎯 Practice Applications

### 1. Recommended Testing Websites

#### **Beginner Friendly**
- **[TodoMVC](https://todomvc.com/examples/react/#/)**
  - Simple todo application
  - Perfect for basic CRUD testing
  - Multiple framework implementations

- **[The Internet - Herokuapp](https://the-internet.herokuapp.com/)**
  - Collection of common web testing scenarios
  - Includes forms, authentication, file upload, etc.
  - Specifically designed for testing practice

- **[Automation Practice](http://automationpractice.com/index.php)**
  - E-commerce simulation
  - Complex workflows for testing
  - User registration, shopping cart, payment

#### **Intermediate Practice**
- **[Parabank](https://parabank.parasoft.com/parabank/index.htm)**
  - Banking application simulator
  - Financial transactions testing
  - User account management

- **[Swag Labs](https://www.saucedemo.com/)**
  - E-commerce demo application
  - Multiple user roles
  - Shopping cart functionality

### 2. Broken/Buggy Applications for Bug Hunting

- **[Buggy Calculator](https://testsheepnz.github.io/BasicCalculator.html)**
- **[Selenium Testing Playground](http://the-internet.herokuapp.com/challenging_dom)**
- **[Bad SSL](https://badssl.com/)** - For security testing practice

---

## 📋 Checklists & Guidelines

### 1. Manual Testing Checklist

#### **Functional Testing**
- [ ] All links work correctly
- [ ] Forms submit properly
- [ ] Validation messages appear
- [ ] Error handling works
- [ ] Navigation is logical
- [ ] Search functionality works
- [ ] User authentication works
- [ ] Data persistence works

#### **UI/UX Testing**
- [ ] Layout is consistent across pages
- [ ] Colors and fonts are consistent
- [ ] Images load properly
- [ ] Text is readable
- [ ] Buttons are clickable
- [ ] Forms are user-friendly
- [ ] Error messages are clear
- [ ] Success messages appear

#### **Responsive Testing**
- [ ] Mobile view (320px - 768px)
- [ ] Tablet view (768px - 1024px)
- [ ] Desktop view (1024px+)
- [ ] Landscape/Portrait modes
- [ ] Touch interactions work
- [ ] Scrolling is smooth

#### **Browser Compatibility**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

### 2. Test Case Writing Guidelines

#### **Good Test Case Characteristics**
- **Clear and Concise**: Easy to understand
- **Specific**: Exact steps and expected results
- **Reusable**: Can be executed multiple times
- **Independent**: Doesn't depend on other test cases
- **Traceable**: Linked to requirements

#### **Test Case Writing Tips**
1. **Use Active Voice**: "Click the Submit button" vs "The Submit button should be clicked"
2. **Be Specific**: "Enter 'test@example.com'" vs "Enter email"
3. **Include Prerequisites**: State the starting condition
4. **Number Steps**: Use numbered lists for clarity
5. **Verify Results**: Always include expected outcome

### 3. Bug Priority & Severity Matrix

| Priority | Severity | Description | Example |
|----------|----------|-------------|---------|
| **High** | **Critical** | System crash, data loss | Application won't start |
| **High** | **High** | Major feature broken | Login not working |
| **Medium** | **High** | Feature partially working | Some validation missing |
| **Medium** | **Medium** | Minor functional issue | Spelling mistake |
| **Low** | **Low** | Cosmetic issue | Color slightly off |

---

## 🛠️ Tools & Setup Guides

### 1. Browser Developer Tools Guide

#### **Chrome DevTools Essentials**
```
Console Tab:
- View JavaScript errors
- Execute JavaScript commands
- Debug application issues

Network Tab:
- Monitor API calls
- Check response times
- Identify failed requests

Elements Tab:
- Inspect HTML structure
- Modify CSS for testing
- Check responsive design

Application Tab:
- View cookies and storage
- Check PWA features
- Analyze performance
```

#### **Firefox Developer Tools**
```
Inspector:
- Similar to Chrome Elements
- 3D view for layout debugging
- Flexbox/Grid inspector

Console:
- Error logging
- JavaScript execution
- Network monitoring

Responsive Design Mode:
- Test different screen sizes
- Touch simulation
- Network throttling
```

### 2. Screenshot & Screen Recording Tools

#### **Built-in Tools**
- **Windows**: Snipping Tool, Print Screen
- **macOS**: Command+Shift+3/4, Screenshot app
- **Linux**: gnome-screenshot, Spectacle

#### **Third-party Tools**
- **[Lightshot](https://app.prntscr.com/)**: Free, easy annotation
- **[Greenshot](https://getgreenshot.org/)**: Open source, powerful
- **[Snagit](https://www.techsmith.com/screen-capture.html)**: Professional (paid)

#### **Screen Recording**
- **[OBS Studio](https://obsproject.com/)**: Free, professional
- **[Loom](https://www.loom.com/)**: Quick screen recording
- **[Camtasia](https://www.techsmith.com/video-editor.html)**: Professional (paid)

### 3. Bug Tracking Tools Setup

#### **JIRA (Recommended)**
```
1. Sign up for free trial at atlassian.com
2. Create new project (Bug Tracking template)
3. Configure issue types:
   - Bug
   - Task
   - Story
4. Set up custom fields:
   - Browser
   - OS
   - Environment
   - Steps to Reproduce
```

#### **Trello (Alternative)**
```
1. Create free account at trello.com
2. Create board: "QA Bug Tracking"
3. Create lists:
   - To Test
   - In Progress
   - Bug Found
   - Fixed
   - Verified
4. Create card template with bug fields
```

#### **GitHub Issues (Simple)**
```
1. Create repository for your project
2. Use Issues tab for bug tracking
3. Create issue templates:
   - Bug Report
   - Feature Request
   - Test Case
4. Use labels for categorization
```

---

## 📖 Reference Materials

### 1. QA Fundamentals Quick Reference

#### **Testing Types**
- **Functional Testing**: Verifies software functions as expected
- **Non-Functional Testing**: Performance, usability, security
- **Manual Testing**: Human-executed testing
- **Automated Testing**: Tool-executed testing

#### **Testing Levels**
- **Unit Testing**: Individual components
- **Integration Testing**: Component interactions
- **System Testing**: Complete system
- **Acceptance Testing**: User requirements

#### **Test Design Techniques**
- **Equivalence Partitioning**: Group similar inputs
- **Boundary Value Analysis**: Test edge cases
- **Decision Table Testing**: Complex business rules
- **State Transition Testing**: State changes

### 2. Common Web Testing Scenarios

#### **Form Testing**
```
Positive Cases:
- Valid data submission
- Required field validation
- Format validation (email, phone)
- Character limits

Negative Cases:
- Empty required fields
- Invalid data formats
- Exceeding character limits
- Special character handling
- SQL injection attempts
```

#### **Login Testing**
```
Positive Cases:
- Valid credentials
- Remember me functionality
- Password visibility toggle
- Forgot password flow

Negative Cases:
- Invalid username/password
- Empty fields
- Account lockout
- Session timeout
- Password complexity
```

#### **E-commerce Testing**
```
Product Catalog:
- Product search
- Filtering and sorting
- Product details
- Image gallery

Shopping Cart:
- Add/remove items
- Quantity updates
- Price calculations
- Checkout process

Payment:
- Payment methods
- Address validation
- Order confirmation
- Email notifications
```

### 3. Bug Classification Examples

#### **Critical Bugs**
- Application crashes on startup
- Data corruption or loss
- Security vulnerabilities
- Payment processing failures

#### **High Priority Bugs**
- Core functionality not working
- User cannot complete main tasks
- Performance issues affecting usability
- Incorrect calculations

#### **Medium Priority Bugs**
- Minor functionality issues
- Inconsistent UI elements
- Missing validation messages
- Slow response times

#### **Low Priority Bugs**
- Cosmetic issues
- Spelling/grammar errors
- Minor UI alignment issues
- Feature enhancements

---

## 💡 Best Practices & Tips

### 1. Effective Test Case Writing

#### **DO's**
- Write clear, concise steps
- Use specific test data
- Include preconditions
- Make test cases independent
- Review and update regularly

#### **DON'Ts**
- Don't assume user knowledge
- Don't write vague steps
- Don't skip expected results
- Don't make test cases dependent
- Don't forget to update after changes

### 2. Bug Reporting Excellence

#### **Essential Elements**
1. **Clear Summary**: Descriptive title
2. **Detailed Steps**: Reproducible instructions
3. **Expected/Actual**: What should vs. what did happen
4. **Environment**: Browser, OS, device details
5. **Evidence**: Screenshots, videos, logs

#### **Common Mistakes to Avoid**
- Vague descriptions
- Missing reproduction steps
- No screenshots
- Incorrect priority/severity
- Duplicate reports

### 3. Test Execution Tips

#### **Before Testing**
- [ ] Understand requirements
- [ ] Review test cases
- [ ] Prepare test data
- [ ] Set up test environment
- [ ] Clear browser cache

#### **During Testing**
- [ ] Follow test cases exactly
- [ ] Document deviations
- [ ] Take screenshots for evidence
- [ ] Note any observations
- [ ] Log issues immediately

#### **After Testing**
- [ ] Update test case status
- [ ] Report all bugs found
- [ ] Document lessons learned
- [ ] Clean up test data
- [ ] Archive test evidence

---

## 🎓 Study Materials

### 1. Essential Reading List

#### **Beginner Books**
- "A Practitioner's Guide to Software Test Design" by Lee Copeland
- "The Art of Software Testing" by Glenford Myers
- "Software Testing: A Craftsman's Approach" by Paul C. Jorgensen

#### **Online Resources**
- [ISTQB Foundation Level Syllabus](https://www.istqb.org/certifications/foundation-level)
- [Software Testing Help](https://www.softwaretestinghelp.com/)
- [Ministry of Testing](https://www.ministryoftesting.com/)

### 2. Video Tutorials

#### **YouTube Channels**
- **Software Testing Mentor**: Comprehensive testing tutorials
- **QA Automation Expert**: Practical examples
- **Test Automation University**: Structured courses

#### **Online Courses**
- **Coursera**: Software Testing Courses
- **Udemy**: Manual Testing Courses
- **edX**: Software Testing Fundamentals

### 3. Practice Exercises

#### **Daily Practice Routine**
1. **Week 1**: Focus on test case writing
2. **Week 2**: Practice bug reporting
3. **Week 3**: Complete test planning
4. **Week 4**: End-to-end testing practice

#### **Progressive Difficulty**
- **Day 1-3**: Simple forms and navigation
- **Day 4-7**: Complex workflows
- **Day 8-14**: Full application testing
- **Day 15+**: Advanced scenarios

---

## 🔍 Troubleshooting Guide

### 1. Common Issues & Solutions

#### **Test Environment Problems**
```
Issue: Application not loading
Solutions:
- Check internet connection
- Clear browser cache
- Try different browser
- Check URL spelling
- Verify server status
```

#### **Test Execution Issues**
```
Issue: Test case fails unexpectedly
Solutions:
- Verify preconditions
- Check test data
- Review recent changes
- Execute in different environment
- Compare with previous results
```

#### **Bug Reporting Problems**
```
Issue: Bug not reproducible
Solutions:
- Document exact steps
- Include environment details
- Try different browsers
- Check user permissions
- Record video evidence
```

### 2. FAQ Section

**Q: How many test cases should I write?**
A: Focus on quality over quantity. Cover all main scenarios, edge cases, and error conditions. 10-15 well-written test cases are better than 50 poorly written ones.

**Q: What's the difference between Priority and Severity?**
A: Severity is the impact on the system, Priority is the urgency to fix. A cosmetic bug might have low severity but high priority if it's on the homepage.

**Q: How do I know if a bug is worth reporting?**
A: If it deviates from expected behavior, affects user experience, or could cause issues, report it. When in doubt, report it.

**Q: Should I test on all browsers?**
A: For basic level, focus on Chrome and one other browser. Test on mobile view as well. Advanced testing covers more browsers.

**Q: How detailed should test steps be?**
A: Detailed enough that someone else can execute them without asking questions. Include specific data and expected results.

---

## 📊 Progress Tracking Templates

### 1. Daily Testing Log

```markdown
# Daily Testing Log - [Date]

## Test Session Information
- **Tester**: [Your Name]
- **Application**: [App Name]
- **Environment**: [Browser/OS]
- **Duration**: [Start Time] - [End Time]

## Test Cases Executed
| Test Case ID | Status | Notes |
|--------------|--------|-------|
| TC_001 | Pass | - |
| TC_002 | Fail | Bug BUG_001 reported |
| TC_003 | Blocked | Environment issue |

## Bugs Found
| Bug ID | Severity | Status | Description |
|--------|----------|--------|-------------|
| BUG_001 | High | New | Login button not working |

## Notes & Observations
- [Any additional observations]
- [Suggestions for improvement]
- [Areas needing more testing]

## Tomorrow's Plan
- [ ] Retest fixed bugs
- [ ] Execute remaining test cases
- [ ] Focus on [specific area]
```

### 2. Weekly Summary Report

```markdown
# Weekly Testing Summary - Week [X]

## Overview
- **Period**: [Start Date] - [End Date]
- **Total Testing Hours**: [X hours]
- **Applications Tested**: [List]

## Test Execution Summary
- **Total Test Cases**: [X]
- **Passed**: [X] ([X]%)
- **Failed**: [X] ([X]%)
- **Blocked**: [X] ([X]%)

## Bug Summary
- **Total Bugs Found**: [X]
- **Critical**: [X]
- **High**: [X]
- **Medium**: [X]
- **Low**: [X]

## Key Achievements
- [Achievement 1]
- [Achievement 2]
- [Achievement 3]

## Challenges Faced
- [Challenge 1 and how resolved]
- [Challenge 2 and how resolved]

## Learnings
- [What you learned this week]
- [Skills improved]
- [New techniques tried]

## Next Week Goals
- [ ] [Goal 1]
- [ ] [Goal 2]
- [ ] [Goal 3]
```

---

## 🚀 Ready to Start?

With these comprehensive resources, you're well-equipped to tackle the QA Basic exercises. Remember:

1. **Start with fundamentals** - Master the basics before moving to complex scenarios
2. **Practice consistently** - Regular practice builds muscle memory
3. **Document everything** - Good documentation is a QA's best friend
4. **Learn from mistakes** - Every bug is a learning opportunity
5. **Stay curious** - Always ask "what if" and "why"

Good luck with your QA journey! 🧪✨

---

*This resource guide is designed to be your comprehensive companion throughout the QA Basic level exercises. Bookmark it, refer to it often, and don't hesitate to dive deeper into any topic that interests you.*