# 🐛 Bug Report Templates - QA Basic Resources

## 📋 Overview
Kumpulan template bug report yang terstruktur untuk berbagai jenis bug dan tingkat severity. Template ini dapat digunakan di berbagai bug tracking tools seperti JIRA, Trello, GitHub Issues, atau tools lainnya.

---

## 🎯 Standard Bug Report Template

### Template Dasar
```markdown
# Bug Report - [Brief Description]

## Bug Information
**Bug ID**: BUG_[MODULE]_[NUMBER]
**Date Reported**: [DD/MM/YYYY]
**Reported By**: [Your Name]
**Assigned To**: [Developer/Team]

## Summary
[One line summary of the bug - clear and concise]

## Environment Details
- **Application**: [Application Name v1.0]
- **Browser**: [Chrome 120.0.6099.109]
- **Operating System**: [Windows 11 / macOS Ventura / Ubuntu 22.04]
- **Device**: [Desktop / Mobile / Tablet]
- **Screen Resolution**: [1920x1080]
- **URL**: [https://example.com/page]

## Priority & Severity
- **Priority**: [Critical / High / Medium / Low]
- **Severity**: [Critical / High / Medium / Low]
- **Bug Type**: [Functional / UI / Performance / Security / Usability]

## Steps to Reproduce
1. [First step]
2. [Second step]
3. [Third step]
4. [Continue until bug occurs]

## Expected Result
[Describe what should happen]

## Actual Result
[Describe what actually happened]

## Test Data Used
- [Specific data used in testing]
- [Login credentials if applicable]
- [File names, URLs, etc.]

## Attachments
- Screenshot: [bug_screenshot.png]
- Video: [bug_recording.mp4]
- Log files: [error_log.txt]

## Additional Information
- **Frequency**: [Always / Sometimes / Rarely / Once]
- **Workaround Available**: [Yes/No - describe if yes]
- **Related Bugs**: [Reference other bug IDs if related]
- **Browser Console Errors**: [Yes/No - include details if yes]

## Impact Analysis
[Describe how this bug affects users and business]

## Suggested Fix
[If you have suggestions for fixing]
```

---

## 🔴 Critical Bug Report Template

### Template untuk Bug Critical
```markdown
# 🚨 CRITICAL BUG - [Brief Description]

## URGENT - Immediate Attention Required

**Bug ID**: CRIT_BUG_[NUMBER]
**Reported**: [DD/MM/YYYY HH:MM]
**Reporter**: [Your Name]
**Status**: NEW - CRITICAL

## Impact Summary
- **User Impact**: [Number of users affected]
- **Business Impact**: [Revenue/functionality impact]
- **System Impact**: [Performance/availability impact]

## Bug Description
[Detailed description of the critical issue]

## Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [CRITICAL FAILURE OCCURS]

## Evidence
- **Screenshot**: [Attached]
- **Error Messages**: [Exact error text]
- **Console Logs**: [Browser/server logs]
- **Network Logs**: [If applicable]

## Environment
- **Production**: [Yes/No]
- **Browser**: [All browsers / Specific browser]
- **Users Affected**: [All users / Specific user group]

## Immediate Actions Needed
1. [Action 1]
2. [Action 2]
3. [Action 3]

## Workaround
[If available - describe temporary solution]

## Escalation
- **Notify**: [Team lead, Product manager, etc.]
- **Priority**: CRITICAL - Fix immediately
- **ETA Needed**: [Expected resolution time]
```

---

## 🟡 UI/UX Bug Report Template

### Template untuk Bug UI/UX
```markdown
# 🎨 UI/UX Bug Report - [Component/Page Name]

## Bug Information
**Bug ID**: UI_BUG_[NUMBER]
**Date**: [DD/MM/YYYY]
**Component**: [Button/Form/Navigation/etc.]
**Page**: [Specific page or section]

## Visual Issue Description
[Describe the visual problem clearly]

## Location
- **Page/Section**: [Exact location]
- **Element**: [Specific UI element]
- **Coordinates**: [If applicable]

## Steps to Reproduce
1. Navigate to [specific page]
2. [Perform specific action]
3. Observe the visual issue

## Expected Design
[Describe how it should look]

## Actual Appearance
[Describe how it currently looks]

## Visual Evidence
- **Before/After**: [If applicable]
- **Different Browsers**: [Screenshots from different browsers]
- **Different Devices**: [Mobile/tablet/desktop views]

## Browser/Device Matrix
| Browser | Version | Desktop | Mobile | Status |
|---------|---------|---------|---------|---------|
| Chrome | 120.x | ❌ | ❌ | Bug present |
| Firefox | 119.x | ❌ | ✅ | Bug present desktop only |
| Safari | 17.x | N/A | ❌ | Bug present |
| Edge | 119.x | ❌ | ✅ | Bug present desktop only |

## CSS/Styling Notes
- **Element Inspector**: [CSS properties affected]
- **Responsive Issues**: [Breakpoint information]
- **Accessibility**: [Impact on accessibility]

## User Impact
- **Usability**: [How it affects user experience]
- **Accessibility**: [Impact on disabled users]
- **Brand**: [Impact on brand image]

## Design Reference
- **Mockup/Design**: [Link to original design]
- **Style Guide**: [Reference to style guide]
```

---

## ⚡ Performance Bug Report Template

### Template untuk Bug Performance
```markdown
# ⚡ Performance Bug Report - [Feature/Page Name]

## Performance Issue Summary
**Bug ID**: PERF_BUG_[NUMBER]
**Date**: [DD/MM/YYYY]
**Feature**: [Specific feature or page]

## Performance Metrics
- **Load Time**: [Current: X seconds | Expected: Y seconds]
- **Time to Interactive**: [Current: X seconds | Expected: Y seconds]
- **First Contentful Paint**: [Current: X seconds | Expected: Y seconds]
- **Largest Contentful Paint**: [Current: X seconds | Expected: Y seconds]

## Test Environment
- **Network**: [WiFi/4G/3G/Throttled]
- **Device**: [High-end/Mid-range/Low-end]
- **Browser**: [Chrome/Firefox/Safari/Edge]
- **Cache**: [Cleared/Cached]

## Steps to Reproduce
1. Open browser developer tools (Network tab)
2. Navigate to [specific page/feature]
3. Measure load time
4. Record performance metrics

## Performance Evidence
- **Network Waterfall**: [Screenshot of network tab]
- **Performance Timeline**: [Chrome DevTools performance tab]
- **Lighthouse Report**: [Score and details]
- **PageSpeed Insights**: [Score and recommendations]

## Comparison Data
| Metric | Current | Expected | Difference |
|--------|---------|----------|------------|
| Load Time | 8.5s | 3.0s | +5.5s |
| Bundle Size | 2.5MB | 1.0MB | +1.5MB |
| API Response | 3.2s | 1.0s | +2.2s |

## Root Cause Analysis
- **Large Images**: [Unoptimized images]
- **JavaScript**: [Heavy/blocking scripts]
- **CSS**: [Render-blocking styles]
- **API Calls**: [Slow server responses]
- **Third-party**: [External dependencies]

## Impact Assessment
- **User Experience**: [Bounce rate increase, frustration]
- **SEO**: [Search ranking impact]
- **Business**: [Conversion rate impact]
- **Technical**: [Server load, bandwidth]

## Optimization Suggestions
1. [Specific optimization 1]
2. [Specific optimization 2]
3. [Specific optimization 3]
```

---

## 🔒 Security Bug Report Template

### Template untuk Bug Security
```markdown
# 🔒 Security Bug Report - [Vulnerability Type]

## ⚠️ CONFIDENTIAL - SECURITY ISSUE

**Bug ID**: SEC_BUG_[NUMBER]
**Date**: [DD/MM/YYYY]
**Severity**: [Critical/High/Medium/Low]
**CVSS Score**: [If applicable]

## Vulnerability Summary
[Brief description of security vulnerability]

## Vulnerability Type
- **Category**: [XSS / SQL Injection / CSRF / Authentication / Authorization]
- **OWASP Top 10**: [Reference if applicable]
- **CWE**: [Common Weakness Enumeration ID]

## Risk Assessment
- **Confidentiality**: [High/Medium/Low]
- **Integrity**: [High/Medium/Low]
- **Availability**: [High/Medium/Low]
- **Exploitability**: [Easy/Medium/Hard]

## Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Security vulnerability exploited]

## Proof of Concept
[Detailed exploitation steps - BE CAREFUL]

## Affected Components
- **URLs**: [List affected URLs]
- **Parameters**: [Vulnerable parameters]
- **User Roles**: [Which users can exploit]

## Potential Impact
- **Data Breach**: [What data could be accessed]
- **User Impact**: [How users could be affected]
- **System Impact**: [System compromise possibilities]

## Evidence
- **Screenshots**: [Redacted screenshots]
- **Request/Response**: [HTTP requests showing vulnerability]
- **Logs**: [Relevant log entries]

## Remediation Recommendations
1. **Immediate**: [Quick fixes]
2. **Short-term**: [Temporary solutions]
3. **Long-term**: [Permanent solutions]

## References
- [OWASP Guidelines]
- [Security Best Practices]
- [Relevant CVE numbers]

## Disclosure
- **Responsible Disclosure**: [Yes/No]
- **External Reporting**: [If reported to security team]
```

---

## 📱 Mobile Bug Report Template

### Template untuk Bug Mobile
```markdown
# 📱 Mobile Bug Report - [Feature/Issue Name]

## Device Information
**Bug ID**: MOB_BUG_[NUMBER]
**Date**: [DD/MM/YYYY]
**App Version**: [Version number]

## Device Details
- **Device Model**: [iPhone 14 Pro / Samsung Galaxy S23]
- **OS Version**: [iOS 17.1 / Android 14]
- **Screen Size**: [6.1" / 6.8"]
- **Resolution**: [1179x2556 / 1440x3088]
- **Orientation**: [Portrait / Landscape]

## App Environment
- **App Type**: [Native / Web App / Hybrid]
- **Browser**: [Safari / Chrome / Samsung Internet]
- **Network**: [WiFi / 4G / 5G]
- **Battery**: [High / Medium / Low]

## Bug Description
[Describe the mobile-specific issue]

## Steps to Reproduce
1. Open app on [device]
2. [Touch/swipe/gesture action]
3. [Observe mobile-specific behavior]

## Expected Behavior
[What should happen on mobile]

## Actual Behavior
[What actually happens on mobile]

## Touch/Gesture Issues
- **Touch Targets**: [Too small / Overlapping]
- **Gestures**: [Swipe / Pinch / Rotate issues]
- **Scrolling**: [Choppy / Stuck / Wrong direction]

## Visual Evidence
- **Portrait Mode**: [Screenshot]
- **Landscape Mode**: [Screenshot]
- **Screen Recording**: [Video of the issue]

## Cross-Device Testing
| Device | OS | Browser | Status |
|---------|-----|---------|---------|
| iPhone 14 | iOS 17 | Safari | ❌ Bug present |
| Pixel 7 | Android 13 | Chrome | ✅ Works fine |
| Samsung S23 | Android 14 | Samsung | ❌ Bug present |

## Performance Impact
- **App Crash**: [Yes/No]
- **Memory Usage**: [High/Normal]
- **Battery Drain**: [Excessive/Normal]
- **Heat Generation**: [Yes/No]

## Accessibility Impact
- **Screen Reader**: [VoiceOver/TalkBack compatibility]
- **Text Size**: [Dynamic type support]
- **Color Contrast**: [Visibility issues]
- **Motor Impairment**: [Touch target accessibility]
```

---

## 🔧 Integration Bug Report Template

### Template untuk Bug Integration/API
```markdown
# 🔧 Integration Bug Report - [API/Service Name]

## Integration Details
**Bug ID**: INT_BUG_[NUMBER]
**Date**: [DD/MM/YYYY]
**Service**: [API/Third-party service name]
**Endpoint**: [Specific API endpoint]

## API Information
- **Method**: [GET/POST/PUT/DELETE]
- **URL**: [https://api.example.com/endpoint]
- **Version**: [API version]
- **Authentication**: [Bearer token/API key/OAuth]

## Request Details
```json
{
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer token"
  },
  "body": {
    "key": "value"
  }
}
```

## Expected Response
```json
{
  "status": 200,
  "data": {
    "expected": "response"
  }
}
```

## Actual Response
```json
{
  "status": 500,
  "error": {
    "message": "Internal server error"
  }
}
```

## Error Analysis
- **Status Code**: [Actual vs Expected]
- **Response Time**: [Actual vs Expected]
- **Error Message**: [Detailed error description]
- **Stack Trace**: [If available]

## Integration Flow
1. [Frontend action]
2. [API call made]
3. [Backend processing]
4. [Error/unexpected response]
5. [Frontend handling]

## Impact Assessment
- **User Experience**: [How it affects end users]
- **Data Integrity**: [Data consistency issues]
- **System Reliability**: [Service availability]

## Logs & Evidence
- **Request Logs**: [Full request details]
- **Response Logs**: [Full response details]
- **Network Logs**: [Browser network tab]
- **Server Logs**: [Backend error logs]
```

---

## 📊 Bug Report Tracking Template

### Status Tracking Template
```markdown
# Bug Lifecycle Tracking

## Bug Status History
| Date | Status | Assigned To | Comments |
|------|--------|-------------|----------|
| 01/01/2024 | New | QA Team | Initial report |
| 02/01/2024 | Assigned | Dev Team | Assigned to developer |
| 03/01/2024 | In Progress | John Doe | Fix in development |
| 05/01/2024 | Ready for Test | QA Team | Ready for verification |
| 06/01/2024 | Verified | QA Team | Fix confirmed |
| 07/01/2024 | Closed | - | Bug resolved |

## Resolution Details
- **Fix Applied**: [Description of fix]
- **Code Changes**: [Files/functions modified]
- **Testing Notes**: [Verification steps]
- **Deployment**: [When/where deployed]
```

---

## 💡 Bug Report Best Practices

### ✅ Good Bug Report Characteristics
- **Clear Title**: Describes the issue concisely
- **Detailed Steps**: Anyone can reproduce the bug
- **Evidence**: Screenshots, videos, logs
- **Environment**: Complete technical details
- **Impact**: Business and user impact clearly stated

### 🎯 Priority Guidelines
- **Critical**: System crash, data loss, security breach
- **High**: Major feature broken, affects many users
- **Medium**: Feature partially working, affects some users
- **Low**: Minor issue, cosmetic problems

### 📝 Writing Tips
1. **Be Specific**: Use exact error messages and numbers
2. **Be Objective**: Stick to facts, avoid assumptions
3. **Be Complete**: Include all relevant information
4. **Be Concise**: Clear and to the point
5. **Be Professional**: Maintain professional tone

### 🔍 Common Mistakes to Avoid
- ❌ Vague descriptions
- ❌ Missing reproduction steps
- ❌ No screenshots or evidence
- ❌ Incorrect priority/severity
- ❌ Duplicate reports
- ❌ Missing environment details

---

*These templates provide a structured approach to bug reporting across different types of issues. Choose the appropriate template based on the type of bug you're reporting and customize as needed for your specific context.*