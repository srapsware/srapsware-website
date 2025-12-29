# Jekyll Pages Migration Plan

## 📊 Existing Jekyll Pages Inventory

Found **25 Jekyll HTML pages** in `/pages/` directory that need to be migrated to Next.js.

---

## 📄 Pages to Migrate

### **Core Pages** (High Priority)
1. ✅ **Home** - Already implemented in Next.js
2. ⏳ **about-our-company.html** → `/about` page
3. ⏳ **services.html** → `/services` page
4. ⏳ **contact-us.html** → `/contact` page
5. ⏳ **srapsware-portfolio.html** → `/portfolio` page
6. ⏳ **blog.html** → `/blog` page
7. ⏳ **testimonials.html** → `/testimonials` page

### **Service Pages** (Medium Priority)
8. ⏳ **android-app-development.html** → `/services/mobile/android`
9. ⏳ **ios-app-development.html** → `/services/mobile/ios`
10. ⏳ **wordpress-website-development.html** → `/services/web/wordpress`
11. ⏳ **woocommerce-website-development.html** → `/services/web/woocommerce`
12. ⏳ **e-commerce-website-design.html** → `/services/web/ecommerce`
13. ⏳ **responsive-website-design.html** → `/services/web/responsive`
14. ⏳ **mobile-site-design.html** → `/services/web/mobile-site`
15. ⏳ **chrome-extension-development.html** → `/services/web/chrome-extension`
16. ⏳ **firefox-extension-development.html** → `/services/web/firefox-extension`
17. ⏳ **joomla-development.html** → `/services/web/joomla`
18. ⏳ **magento-development.html** → `/services/web/magento`

### **Utility Pages** (Medium Priority)
19. ⏳ **our-process.html** → `/our-process` page
20. ⏳ **search.html** → `/search` page
21. ⏳ **make-payment.html** → `/make-payment` page
22. ⏳ **fix-your-hacked-website-immediately.html** → `/services/security/website-recovery`

### **Legal Pages** (Low Priority - Static)
23. ⏳ **privacy-policy.html** → `/privacy` page
24. ⏳ **terms-conditions.html** → `/terms` page
25. ⏳ **cancellation-refund-policies.html** → `/refund-policy` page

---

## 🎯 Migration Strategy

### Phase 1: Core Pages (This Week)
- [ ] About Us page
- [ ] Contact page with form
- [ ] Services overview page
- [ ] Portfolio listing page
- [ ] Blog listing page

### Phase 2: Service Detail Pages (Next Week)
- [ ] Create service page template
- [ ] Migrate top 5 service pages:
  - Android App Development
  - iOS App Development
  - WordPress Development
  - E-commerce Design
  - Responsive Design

### Phase 3: Utility & Legal Pages (Week 3)
- [ ] Our Process page
- [ ] Testimonials page
- [ ] Make Payment page
- [ ] Privacy Policy
- [ ] Terms & Conditions
- [ ] Refund Policy

### Phase 4: Remaining Service Pages (Week 4)
- [ ] Migrate remaining service pages
- [ ] Setup proper redirects from old URLs

---

## 📋 Content from Jekyll Pages to Extract

### About Page Content:
- ✅ "Hello! This is Srapsware"
- ✅ "A firm that turns ideas into beautiful things"
- ✅ Company description and values
- ✅ Team photos/info
- ✅ Statistics (11+ years, etc.)

### Services Page Content:
- ✅ "OUR FIELD OF EXPERTISE"
- ✅ "Let's look at what we bake with codes and what we serve"
- ✅ Service tabs:
  - Web Development
  - E-Commerce Development
  - Mobile App Development
  - Cloud & DevOps (if exists)

### Contact Page:
- ✅ Contact form fields
- ✅ Office address: E-160, 3rd Floor, Sector 63, Noida
- ✅ Email: sales@srapsware.com
- ✅ Phone: +91-7982377273

---

## 🔄 URL Mapping & Redirects

### Old Jekyll URLs → New Next.js URLs

```
/about-our-company/ → /about
/contact-us/ → /contact
/srapsware-portfolio/ → /portfolio
/services/ → /services
/blog/ → /blog

/android-app-development/ → /services/mobile/android
/ios-app-development/ → /services/mobile/ios
/wordpress-website-development/ → /services/web/wordpress
/woocommerce-website-development/ → /services/web/woocommerce
/e-commerce-website-design/ → /services/web/ecommerce

/privacy-policy/ → /privacy
/terms-conditions/ → /terms
/cancellation-refund-policies/ → /refund-policy
```

**Implementation:** Create `next.config.ts` redirects for SEO preservation.

---

## ✅ Completed Today:
- ✅ Homepage hero section
- ✅ Homepage stats section (improved design)
- ✅ Featured services section
- ✅ Header with mega menu
- ✅ Footer with contact info
- ✅ Design system with brand colors
- ✅ Dark mode support

---

## 🎯 Next Immediate Tasks:

1. **About Page** - Extract content from about-our-company.html
2. **Contact Page** - Build form with validation
3. **Services Overview** - Create services listing
4. **Mobile Menu** - Hamburger menu for mobile
5. **Individual Service Pages** - Template + top 3 services

---

## 📝 Notes:
- Keep URLs as close to original as possible for SEO
- Add proper meta tags from Jekyll frontmatter
- Preserve existing content and images
- Test all redirects before launch
- Update internal links to new URL structure
