/* ==================================================================
   PORTFOLIO CONTENT — Skills & Certifications
   ------------------------------------------------------------------
   Edit ONLY this file to add, remove or reorder skills and
   certificates. The page (index.html) builds the cards, the tech
   ticker and the stats counters from this data automatically.

   Rules of thumb
   - Keep the commas: every { ... } entry ends with a comma.
   - Text is plain text (use "&" normally, no HTML needed).
   - Save the file and refresh the browser to see changes.
   ================================================================== */

window.PORTFOLIO_DATA = {

  /* ----------------------------------------------------------------
     SKILLS
     ----------------------------------------------------------------
     One object per category card.
       category : card title
       icon     : one of  code | monitor | server | database | cloud | chart | tool
       items    : the skill chips in that card
         name     : label shown on the chip
         short    : 2–4 letter badge on the chip (e.g. "JS")
         color    : brand colour of the badge (any CSS colour)
         featured : true  -> also scrolls in the tech ticker under the hero

     ADD A SKILL      -> copy one { name: ... } line into the right card.
     ADD A CATEGORY   -> copy a whole { category: ... } block.
     ---------------------------------------------------------------- */
  skills: [
    {
      category: 'Languages',
      icon: 'code',
      items: [
        { name: 'JavaScript', short: 'JS',  color: '#f7df1e', featured: true },
        { name: 'TypeScript', short: 'TS',  color: '#3178c6', featured: true },
        { name: 'Python',     short: 'Py',  color: '#4b8bbe', featured: true },
        { name: 'SQL',        short: 'SQL', color: '#e38c00' },
      ],
    },
    {
      category: 'Frontend',
      icon: 'monitor',
      items: [
        { name: 'React.js', short: 'Re',   color: '#149eca', featured: true },
        { name: 'Next.js',  short: 'Nx',   color: '#52525b', featured: true },
        { name: 'HTML',     short: 'HTML', color: '#e34f26' },
        { name: 'CSS',      short: 'CSS',  color: '#1572b6' },
      ],
    },
    {
      category: 'Backend',
      icon: 'server',
      items: [
        { name: 'Node.js',    short: 'Nd',   color: '#5fa04e', featured: true },
        { name: 'Express.js', short: 'Ex',   color: '#9d9da8', featured: true },
        { name: 'MERN Stack', short: 'MERN', color: '#8b5cf6' },
        { name: 'MEAN Stack', short: 'MEAN', color: '#d946ef' },
        { name: 'FastAPI',    short: 'Fa',   color: '#009688', featured: true },
        { name: 'REST APIs',  short: 'API',  color: '#f43f5e' },
      ],
    },
    {
      category: 'Databases',
      icon: 'database',
      items: [
        { name: 'MySQL',      short: 'My',  color: '#4479a1', featured: true },
        { name: 'PostgreSQL', short: 'Pg',  color: '#336791', featured: true },
        { name: 'MongoDB',    short: 'Mo',  color: '#47a248', featured: true },
        { name: 'Oracle SQL', short: 'Ora', color: '#ef4444' },
        { name: 'Prisma ORM', short: 'Pr',  color: '#5a67d8', featured: true },
      ],
    },
    {
      category: 'Cloud / DevOps',
      icon: 'cloud',
      items: [
        { name: 'AWS S3',     short: 'S3',  color: '#ff9900', featured: true },
        { name: 'Docker',     short: 'Dk',  color: '#2496ed', featured: true },
        { name: 'CI/CD',      short: 'CI',  color: '#34d399', featured: true },
        { name: 'Linux',      short: 'Lx',  color: '#e0a800' },
        { name: 'Oracle DBA', short: 'DBA', color: '#ef4444' },
      ],
    },
    {
      category: 'Data Analysis',
      icon: 'chart',
      items: [
        { name: 'NumPy',      short: 'Np',  color: '#4dabcf' },
        { name: 'Pandas',     short: 'Pd',  color: '#e70488' },
        { name: 'Matplotlib', short: 'Mpl', color: '#3b82c4' },
      ],
    },
    {
      category: 'Tools',
      icon: 'tool',
      items: [
        { name: 'Git',            short: 'Git', color: '#f05032', featured: true },
        { name: 'GitHub Actions', short: 'GH',  color: '#2088ff' },
        { name: 'Postman',        short: 'Pm',  color: '#ff6c37' },
        { name: 'VS Code',        short: 'VS',  color: '#007acc' },
        { name: 'MS Excel',       short: 'XL',  color: '#217346' },
        { name: 'Claude CLI',     short: 'Cl',  color: '#d97757' },
      ],
    },
  ],

  /* ----------------------------------------------------------------
     CERTIFICATIONS
     ----------------------------------------------------------------
     Cards are sorted automatically, newest first (by "date").
       title  : course / certificate name
       issuer : who issued it
       date   : 'YYYY-MM'  (shown as e.g. "Mar 2026")
       images : one or more files in images/certificates/
                (2+ images -> the viewer gets next / previous arrows)
       verify : (optional) public link to verify the certificate

     ADD A CERTIFICATE
       1. Save the image as images/certificates/<name>.jpg
       2. Copy one { title: ... } block below and edit it.
     ---------------------------------------------------------------- */
  certificates: [
    {
      title: 'Introduction to Linux',
      issuer: 'LinkedIn Learning',
      date: '2026-07',
      images: ['images/certificates/intro-to-linux.jpg'],
      verify: 'https://www.linkedin.com/learning/certificates/eb9f0cdd651ccaa7dfde34093c4ced37049a687ff9fa67f3abc0a01b734b9560',
    },
    {
      title: 'Introduction to DevOps and DevSecOps',
      issuer: 'Simplilearn SkillUp',
      date: '2026-04',
      images: ['images/certificates/devops-devsecops-simplilearn.jpg'],
    },
    {
      title: 'Fundamentals of Prompt Engineering with Claude',
      issuer: 'AWS Training & Certification',
      date: '2026-03',
      images: ['images/certificates/aws-prompt-engineering.jpg'],
    },
    {
      title: 'Complete Database Course: SQL, MySQL, PostgreSQL & MongoDB',
      issuer: 'Udemy',
      date: '2026-03',
      images: ['images/certificates/sql.jpg'],
    },
    {
      title: 'Prisma ORM Crash Course for Web Developers',
      issuer: 'Udemy',
      date: '2026-03',
      images: ['images/certificates/prisma-orm.jpg'],
    },
    {
      title: 'Master Python Programming: Beginner to Advanced',
      issuer: 'Udemy',
      date: '2025-03',
      images: ['images/certificates/python-programming.jpg'],
    },
    {
      title: 'MS Excel',
      issuer: 'GUVI · HCL',
      date: '2025-03',
      images: ['images/certificates/ms-excel.jpg'],
    },
    {
      title: 'FastAPI',
      issuer: 'GUVI · HCL',
      date: '2025-01',
      images: ['images/certificates/fastapi-guvi.jpg'],
    },
    {
      title: 'JavaScript — Complete Course & Certificate of Excellence',
      issuer: 'Udemy · Scaler Topics',
      date: '2025-01',
      images: [
        'images/certificates/javascript.jpg',
        'images/certificates/javascript-2.jpg',
      ],
    },
  ],
};
