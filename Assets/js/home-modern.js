(function () {
  const availableChapters = {
    Gen: Array.from({ length: 50 }, (_, i) => i + 1), // 摩西五经
    Exod: Array.from({ length: 40 }, (_, i) => i + 1), 
    Lev: Array.from({ length: 27 }, (_, i) => i + 1),
    Num: Array.from({ length: 36 }, (_, i) => i + 1),
    Deut: Array.from({ length: 34 }, (_, i) => i + 1),
    Josh: Array.from({ length: 24 }, (_, i) => i + 1),//历史书
    Judg: Array.from({ length: 21 }, (_, i) => i + 1),
    Ruth: Array.from({ length: 4 }, (_, i) => i + 1),
    //"1Sam": Array.from({ length: 31 }, (_, i) => i + 1),
    //"2Sam": Array.from({ length: 24 }, (_, i) => i + 1),
    //"1Kgs": Array.from({ length: 22 }, (_, i) => i + 1),
    //"2Kgs": Array.from({ length: 25 }, (_, i) => i + 1),
    //"1Chr": Array.from({ length: 29 }, (_, i) => i + 1),
    //"2Chr": Array.from({ length: 36 }, (_, i) => i + 1),
    Ezra: Array.from({ length: 10 }, (_, i) => i + 1),
    Neh: Array.from({ length: 13 }, (_, i) => i + 1),
    Esth: Array.from({ length: 10 }, (_, i) => i + 1),
    Song: Array.from({ length: 8 }, (_, i) => i + 1), //智慧书
    Joel: Array.from({ length: 3 }, (_, i) => i + 1), //小先知书
    Amos: Array.from({ length: 9 }, (_, i) => i + 1),
    Obad: [1],
    Jonah: Array.from({ length: 4 }, (_, i) => i + 1),
    Mic: Array.from({ length: 7 }, (_, i) => i + 1),
    Nah: Array.from({ length: 3 }, (_, i) => i + 1),
    Hab: Array.from({ length: 3 }, (_, i) => i + 1),
    Zeph: Array.from({ length: 3 }, (_, i) => i + 1),
    Hag: Array.from({ length: 2 }, (_, i) => i + 1),
    Mal: Array.from({ length: 4 }, (_, i) => i + 1),
    Matt: Array.from({ length: 28 }, (_, i) => i + 1), //NT
    Mark: Array.from({ length: 16 }, (_, i) => i + 1),
    Luke: Array.from({ length: 24 }, (_, i) => i + 1),
    John: Array.from({ length: 21 }, (_, i) => i + 1),
    Acts: Array.from({ length: 28 }, (_, i) => i + 1),
    Rom: Array.from({ length: 16 }, (_, i) => i + 1),
    "1Cor": Array.from({ length: 16 }, (_, i) => i + 1),
    "2Cor": Array.from({ length: 13 }, (_, i) => i + 1),
    Gal: Array.from({ length: 6 }, (_, i) => i + 1),
    Eph: Array.from({ length: 6 }, (_, i) => i + 1),
    Phil: Array.from({ length: 4 }, (_, i) => i + 1),
    Col: Array.from({ length: 4 }, (_, i) => i + 1),
    "1Thess": Array.from({ length: 5 }, (_, i) => i + 1),
    "2Thess": Array.from({ length: 3 }, (_, i) => i + 1),
    "1Tim": [1, 2, 3, 4, 5, 6],
    "2Tim": [1, 2, 3, 4],
    Titus: [1, 2, 3],
    Phlm: [1],
    Heb: Array.from({ length: 13 }, (_, i) => i + 1),
    Jas: [1, 2, 3, 4, 5],
    "1Pet": [1, 2, 3, 4, 5],
    "2Pet": [1, 2, 3],
    "1John": Array.from({ length: 5 }, (_, i) => i + 1),
    "2John": [1],
    "3John": [1],
    Jude: [1],
    Rev: Array.from({ length: 22 }, (_, i) => i + 1)
  };

  const oldTestament = [
    { short: "创", english: "Genesis", abbr: "Gen", chapters: 50, type: "OT" },
    { short: "出", english: "Exodus", abbr: "Exod", chapters: 40, type: "OT" },
    { short: "利", english: "Leviticus", abbr: "Lev", chapters: 27, type: "OT" },
    { short: "民", english: "Numbers", abbr: "Num", chapters: 36, type: "OT" },
    { short: "申", english: "Deuteronomy", abbr: "Deut", chapters: 34, type: "OT" },
    { short: "书", english: "Joshua", abbr: "Josh", chapters: 24, type: "OT" },
    { short: "士", english: "Judges", abbr: "Judg", chapters: 21, type: "OT" },
    { short: "得", english: "Ruth", abbr: "Ruth", chapters: 4, type: "OT" },
    { short: "撒上", english: "1 Samuel", abbr: "1Sam", chapters: 31, type: "OT" },
    { short: "撒下", english: "2 Samuel", abbr: "2Sam", chapters: 24, type: "OT" },
    { short: "王上", english: "1 Kings", abbr: "1Kgs", chapters: 22, type: "OT" },
    { short: "王下", english: "2 Kings", abbr: "2Kgs", chapters: 25, type: "OT" },
    { short: "代上", english: "1 Chronicles", abbr: "1Chr", chapters: 29, type: "OT" },
    { short: "代下", english: "2 Chronicles", abbr: "2Chr", chapters: 36, type: "OT" },
    { short: "拉", english: "Ezra", abbr: "Ezra", chapters: 10, type: "OT" },
    { short: "尼", english: "Nehemiah", abbr: "Neh", chapters: 13, type: "OT" },
    { short: "斯", english: "Esther", abbr: "Esth", chapters: 10, type: "OT" },
    { short: "伯", english: "Job", abbr: "Job", chapters: 42, type: "OT" },
    { short: "诗", english: "Psalms", abbr: "Ps", chapters: 150, type: "OT" },
    { short: "箴", english: "Proverbs", abbr: "Prov", chapters: 31, type: "OT" },
    { short: "传", english: "Ecclesiastes", abbr: "Eccl", chapters: 12, type: "OT" },
    { short: "歌", english: "Song", abbr: "Song", chapters: 8, type: "OT" },
    { short: "赛", english: "Isaiah", abbr: "Isa", chapters: 66, type: "OT" },
    { short: "耶", english: "Jeremiah", abbr: "Jer", chapters: 52, type: "OT" },
    { short: "哀", english: "Lamentations", abbr: "Lam", chapters: 5, type: "OT" },
    { short: "结", english: "Ezekiel", abbr: "Ezek", chapters: 48, type: "OT" },
    { short: "但", english: "Daniel", abbr: "Dan", chapters: 12, type: "OT" },
    { short: "何", english: "Hosea", abbr: "Hos", chapters: 14, type: "OT" },
    { short: "珥", english: "Joel", abbr: "Joel", chapters: 3, type: "OT" },
    { short: "摩", english: "Amos", abbr: "Amos", chapters: 9, type: "OT" },
    { short: "俄", english: "Obadiah", abbr: "Obad", chapters: 1, type: "OT" },
    { short: "拿", english: "Jonah", abbr: "Jonah", chapters: 4, type: "OT" },
    { short: "弥", english: "Micah", abbr: "Mic", chapters: 7, type: "OT" },
    { short: "鸿", english: "Nahum", abbr: "Nah", chapters: 3, type: "OT" },
    { short: "哈", english: "Habakkuk", abbr: "Hab", chapters: 3, type: "OT" },
    { short: "番", english: "Zephaniah", abbr: "Zeph", chapters: 3, type: "OT" },
    { short: "该", english: "Haggai", abbr: "Hag", chapters: 2, type: "OT" },
    { short: "亚", english: "Zechariah", abbr: "Zech", chapters: 14, type: "OT" },
    { short: "玛", english: "Malachi", abbr: "Mal", chapters: 4, type: "OT" }
  ];

  const newTestament = [
    { short: "太", english: "Matthew", abbr: "Matt", chapters: 28, type: "NT" },
    { short: "可", english: "Mark", abbr: "Mark", chapters: 16, type: "NT" },
    { short: "路", english: "Luke", abbr: "Luke", chapters: 24, type: "NT" },
    { short: "约", english: "John", abbr: "John", chapters: 21, type: "NT" },
    { short: "徒", english: "Acts", abbr: "Acts", chapters: 28, type: "NT" },
    { short: "罗", english: "Romans", abbr: "Rom", chapters: 16, type: "NT" },
    { short: "林前", english: "1 Corinthians", abbr: "1Cor", chapters: 16, type: "NT" },
    { short: "林后", english: "2 Corinthians", abbr: "2Cor", chapters: 13, type: "NT" },
    { short: "加", english: "Galatians", abbr: "Gal", chapters: 6, type: "NT" },
    { short: "弗", english: "Ephesians", abbr: "Eph", chapters: 6, type: "NT" },
    { short: "腓", english: "Philippians", abbr: "Phil", chapters: 4, type: "NT" },
    { short: "西", english: "Colossians", abbr: "Col", chapters: 4, type: "NT" },
    { short: "帖前", english: "1 Thessalonians", abbr: "1Thess", chapters: 5, type: "NT" },
    { short: "帖后", english: "2 Thessalonians", abbr: "2Thess", chapters: 3, type: "NT" },
    { short: "提前", english: "1 Timothy", abbr: "1Tim", chapters: 6, type: "NT" },
    { short: "提后", english: "2 Timothy", abbr: "2Tim", chapters: 4, type: "NT" },
    { short: "多", english: "Titus", abbr: "Titus", chapters: 3, type: "NT" },
    { short: "门", english: "Philemon", abbr: "Phlm", chapters: 1, type: "NT" },
    { short: "来", english: "Hebrews", abbr: "Heb", chapters: 13, type: "NT" },
    { short: "雅", english: "James", abbr: "Jas", chapters: 5, type: "NT" },
    { short: "彼前", english: "1 Peter", abbr: "1Pet", chapters: 5, type: "NT" },
    { short: "彼后", english: "2 Peter", abbr: "2Pet", chapters: 3, type: "NT" },
    { short: "约一", english: "1 John", abbr: "1John", chapters: 5, type: "NT" },
    { short: "约二", english: "2 John", abbr: "2John", chapters: 1, type: "NT" },
    { short: "约三", english: "3 John", abbr: "3John", chapters: 1, type: "NT" },
    { short: "犹", english: "Jude", abbr: "Jude", chapters: 1, type: "NT" },
    { short: "启", english: "Revelation", abbr: "Rev", chapters: 22, type: "NT" }
  ];

  const topicCategories = [
    {
      title: "提前背景",
      abbr: "1Tim",
      desc: "Background",
      image: "url('../../Config/topics.jpg')",
      links: [
        { name: "背景介绍", url: "Topics/1Tim/1TimIntro.html" },
        { name: "保罗行踪", url: "Topics/1Tim/PualRoute/PualRoute.html" },
        { name: "提前后教会光景对比", url: "Topics/1Tim/CompareChurchInTimothy.pdf" }
      ]
    },
    {
      title: "使徒行传拾穗",
      abbr: "Acts",
      desc: "Special Topics",
      image: "url('../../Config/sunrise.jpg')",
      links: [
        { name: "保罗生平年表", url: "Topics/Acts/Paul_Timeline.pdf" },
        { name: "保罗三次布道旅行时间线", url: "Topics/Acts/PaulMinstryTimeline.html" },
        { name: "保罗与主耶稣受审的对比", url: "Topics/Acts/Paul_vs_Jesus.html" }
      ]
    },
    {
      title: "约书亚记点滴",
      abbr: "Josh",
      desc: "Tips",
      image: "url('../../Config/oldbooks.jpg')",
      links: [
        { name: "书8深度研读", url: "Topics/Josh/Josh8_deepThink.html" },
        { name: "书12-21深度研读", url: "Topics/Josh/Josh12_21_deepThink.html" },
        { name: "书12-21深度研读2", url: "Topics/Josh/Josh12_21_deepThink2.html" }
      ]
    },
    {
      title: "读书文摘",
      abbr: "Books",
      desc: "Abstract",
      image: "url('../../Config/oldbooks1.jpg')",
      links: [
        { name: "上海地方教会60年", url: "Topics/Books/shchurch.html" },
        { name: "最后的告别", url: "Topics/Books/BeingMortal.html" },
        { name: "超凡之心", url: "Topics/Books/theHeart.html" },
      ]
    },
    // 复制上面的块来添加新主题，例如：     
    /*{
        title: "专题研究",
        abbr: "Study",
        desc: "Special Topics",
        image: "url('../../Config/oldbooks1.jpg')",
        links: [
            { name: "示例文章", url: "Topics/Sample.html" }
        ]
    },*/
  ];

  const state = {
    query: "",
    books: [...oldTestament, ...newTestament]
  };

  const iconBook = `
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    </svg>`;

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char]));
  }

  function isDarkPreferred() {
    const saved = localStorage.getItem("bibleview-theme");
    if (saved) return saved === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function applyTheme(isDark) {
    document.body.classList.toggle("bv-dark", isDark);
    document.querySelector("[data-theme-label]").textContent = isDark ? "深色" : "浅色";
  }

  function buildLayout() {
    document.body.className = "bv-modern";
    document.body.innerHTML = `
      <div class="bv-page">
        <header class="bv-topbar">
          <nav class="bv-nav" aria-label="主导航">
            <a class="bv-brandmark" href="#top" aria-label="BibleView 首页">
              <span class="bv-brand-icon">${iconBook}</span>
              <span>
                <span class="bv-brand-title">圣经纵览</span>
                <span class="bv-brand-subtitle">BibleView</span>
              </span>
            </a>
            <div class="bv-nav-links">
              <a href="#library">目录</a>
              <a href="Config/disclaimer.html">免责声明</a>
              <a href="Config/Guestbook.html">留言板</a>
            </div>
            <button class="bv-mode-toggle" type="button" data-theme-toggle aria-label="切换浅色或深色模式">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span data-theme-label>浅色</span>
            </button>
          </nav>
        </header>

        <main id="top">
          <section class="bv-shell bv-hero" aria-labelledby="hero-title">
            <div class="bv-hero-copy">
              <p class="bv-kicker">BibleView Study Library</p>
              <h1 id="hero-title">圣经纵览 <span>一卷一章地看见全貌</span></h1>
              <p class="bv-lead">将已整理的旧约、新约与专题资料放在同一个清晰入口中。搜索书卷、查看已完成章节，并快速回到正在研读的内容。</p>
              <div class="bv-actions">
                <a class="bv-button primary" href="#library">${iconBook} 打开目录</a>
                <a class="bv-button" href="Config/Guestbook.html">留言板</a>
              </div>
            </div>
            <div class="bv-hero-panel" aria-label="诗篇 119:105">
              <div class="bv-verse">
                <blockquote>你的话是我脚前的灯，是我路上的光。</blockquote>
                <p>Your word is a lamp to my feet and a light to my path. 诗篇 119:105</p>
              </div>
            </div>
          </section>

          <section class="bv-shell bv-stats" aria-label="站点内容概览">
            <div class="bv-stat"><strong>66</strong><span>圣经书卷索引</span></div>
            <div class="bv-stat"><strong>${completedBookCount()}</strong><span>已有内容书卷</span></div>
            <div class="bv-stat"><strong>${completedChapterCount()}</strong><span>已开放章节</span></div>
            <div class="bv-stat"><strong>${topicCategories.length}</strong><span>专题分类</span></div>
          </section>

          <section class="bv-shell bv-section" id="library">
            <div class="bv-controls">
              <input class="bv-search" type="search" placeholder="搜索：创、Genesis、Matt、约翰..." data-search>
            </div>
            <div class="bv-section-heading">
              <div>
                <p class="bv-kicker">Library</p>
                <h2>目录</h2>
              </div>
              <p>旧约、新约、各类主题为一级目录；展开后在二级菜单中浏览 66 卷书或专题资料。</p>
            </div>
            <div class="bv-primary-menu" data-primary-menu>
              <section class="bv-menu-panel is-open" data-menu-panel="OT">
                <button class="bv-menu-trigger" type="button" data-menu-trigger aria-expanded="true">
                  <span>
                    <strong>旧约</strong>
                    <small>Old Testament · 39 卷</small>
                  </span>
                  <span class="bv-menu-count">${oldTestament.length}</span>
                </button>
                <div class="bv-menu-body">
                  <div class="bv-secondary-list" data-old-books></div>
                </div>
              </section>

              <section class="bv-menu-panel" data-menu-panel="NT">
                <button class="bv-menu-trigger" type="button" data-menu-trigger aria-expanded="false">
                  <span>
                    <strong>新约</strong>
                    <small>New Testament · 27 卷</small>
                  </span>
                  <span class="bv-menu-count">${newTestament.length}</span>
                </button>
                <div class="bv-menu-body">
                  <div class="bv-secondary-list" data-new-books></div>
                </div>
              </section>

              <section class="bv-menu-panel" data-menu-panel="topics">
                <button class="bv-menu-trigger" type="button" data-menu-trigger aria-expanded="false">
                  <span>
                    <strong>各类主题</strong>
                    <small>Topics · 背景、时间线、读书文摘</small>
                  </span>
                  <span class="bv-menu-count">${topicCategories.length}</span>
                </button>
                <div class="bv-menu-body">
                  <div class="bv-topic-menu" data-topic-grid></div>
                </div>
              </section>
            </div>
            <div class="bv-empty-state" data-search-empty hidden>没有找到匹配的书卷。</div>
          </section>
        </main>

        <aside class="bv-chapter-drawer" data-drawer aria-hidden="true">
          <div class="bv-drawer-head">
            <div>
              <h3 data-drawer-title></h3>
              <p data-drawer-subtitle></p>
            </div>
            <button class="bv-close" type="button" data-close aria-label="关闭章节面板">×</button>
          </div>
          <div class="bv-chapters" data-chapters></div>
        </aside>

        <footer class="bv-footer">
          <div class="bv-footer-inner">
            <div>© 2026 圣经纵览 BibleView | 内容仅供学习参考</div>
            <div class="bv-footer-links">
              <a href="Config/disclaimer.html">免责声明</a> ·
              <a href="Config/Guestbook.html">留言板</a> ·
              PV <span id="busuanzi_value_site_pv">—</span>
            </div>
          </div>
        </footer>
      </div>
    `;
  }

  function completedBookCount() {
    return state.books.filter((book) => (availableChapters[book.abbr] || []).length > 0).length;
  }

  function completedChapterCount() {
    return Object.values(availableChapters).reduce((sum, chapters) => sum + chapters.length, 0);
  }

  function progressFor(book) {
    return Math.round(((availableChapters[book.abbr] || []).length / book.chapters) * 100);
  }

  function getFilteredBooks(type) {
    const query = state.query.trim().toLowerCase();
    return state.books.filter((book) => {
      if (type && book.type !== type) return false;
      if (!query) return true;
      return [book.short, book.english, book.abbr].some((value) => value.toLowerCase().includes(query));
    });
  }

  function renderBooks() {
    const renderList = (selector, type) => {
      const grid = document.querySelector(selector);
      const books = getFilteredBooks(type);
      grid.innerHTML = books.map((book) => {
        const readyCount = (availableChapters[book.abbr] || []).length;
        const label = readyCount ? `${readyCount} 章` : "待补充";
        return `
          <button class="bv-book-row ${readyCount ? "" : "is-empty"}" type="button" data-book="${book.abbr}" ${readyCount ? "" : "disabled"} aria-label="${escapeHtml(book.short)} ${escapeHtml(book.english)}">
            <span class="bv-book-main">
              <span class="bv-book-cn">${escapeHtml(book.short)} ${escapeHtml(book.abbr)}</span>
              <span class="bv-book-en">${escapeHtml(book.english)}</span>
            </span>
            <span class="bv-book-status">
              <span>${label}</span>
            </span>
          </button>
        `;
      }).join("");
      return books.length;
    };

    const oldCount = renderList("[data-old-books]", "OT");
    const newCount = renderList("[data-new-books]", "NT");
    document.querySelector("[data-search-empty]").hidden = oldCount + newCount > 0;

    if (state.query.trim()) {
      setMenuPanel("OT", oldCount > 0);
      setMenuPanel("NT", newCount > 0);
    }
  }

  function setMenuPanel(name, isOpen) {
    const panel = document.querySelector(`[data-menu-panel="${name}"]`);
    if (!panel) return;
    panel.classList.toggle("is-open", isOpen);
    panel.querySelector("[data-menu-trigger]").setAttribute("aria-expanded", String(isOpen));
  }

  function renderTopics() {
    const grid = document.querySelector("[data-topic-grid]");
    grid.innerHTML = topicCategories.map((topic) => `
      <details class="bv-topic-group">
        <summary>
          <span>
            <strong>${escapeHtml(topic.title)}</strong>
            <small>${escapeHtml(topic.abbr)} · ${escapeHtml(topic.desc)}</small>
          </span>
        </summary>
        <div class="bv-topic-links">
          ${topic.links.map((link) => `<a href="${link.url}"><span>${escapeHtml(link.name)}</span><span>→</span></a>`).join("")}
        </div>
      </details>
    `).join("");
  }

  function renderBookCards() {
    const grid = document.querySelector("[data-book-grid]");
    if (!grid) return;
    const books = getFilteredBooks();
    grid.innerHTML = books.map((book) => {
      const readyCount = (availableChapters[book.abbr] || []).length;
      const progress = progressFor(book);
      const label = readyCount ? `${readyCount} 章` : "待补充";
      return `
        <article class="bv-book ${readyCount ? "" : "is-empty"}" data-book="${book.abbr}" tabindex="${readyCount ? "0" : "-1"}" aria-label="${escapeHtml(book.short)} ${escapeHtml(book.english)}">
          <div class="bv-book-top">
            <div>
              <div class="bv-book-cn">${escapeHtml(book.short)} ${escapeHtml(book.abbr)}</div>
              <div class="bv-book-en">${escapeHtml(book.english)}</div>
            </div>
            <div class="bv-book-count">${readyCount || "-"}</div>
          </div>
          <div class="bv-progress" aria-hidden="true"><span style="--progress: ${progress}%"></span></div>
          <div class="bv-book-meta"><span>${book.type === "OT" ? "旧约" : "新约"}</span><span>${label}</span></div>
        </article>
      `;
    }).join("");
  }

  function openDrawer(abbr) {
    const book = state.books.find((item) => item.abbr === abbr);
    if (!book) return;
    const readyChapters = availableChapters[book.abbr] || [];
    if (!readyChapters.length) return;

    const drawer = document.querySelector("[data-drawer]");
    document.querySelector("[data-drawer-title]").textContent = `${book.short} ${book.abbr}`;
    document.querySelector("[data-drawer-subtitle]").textContent = `${book.english} · ${readyChapters.length} / ${book.chapters} 章可读`;
    document.querySelector("[data-chapters]").innerHTML = Array.from({ length: book.chapters }, (_, i) => {
      const chapter = i + 1;
      const exists = readyChapters.includes(chapter);
      const href = `${book.type}/${book.abbr}/${book.abbr}${chapter}.html`;
      return `<a class="bv-chapter ${exists ? "exists" : ""}" href="${href}" aria-disabled="${exists ? "false" : "true"}">${chapter}</a>`;
    }).join("");
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
  }

  function closeDrawer() {
    const drawer = document.querySelector("[data-drawer]");
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
  }

  function bindEvents() {
    const themeToggle = document.querySelector("[data-theme-toggle]");
    themeToggle.addEventListener("click", () => {
      const nextIsDark = !document.body.classList.contains("bv-dark");
      localStorage.setItem("bibleview-theme", nextIsDark ? "dark" : "light");
      applyTheme(nextIsDark);
    });

    document.querySelector("[data-search]").addEventListener("input", (event) => {
      state.query = event.target.value;
      renderBooks();
    });

    document.querySelectorAll("[data-menu-trigger]").forEach((button) => {
      button.addEventListener("click", () => {
        const panel = button.closest("[data-menu-panel]");
        const isOpen = panel.classList.toggle("is-open");
        button.setAttribute("aria-expanded", String(isOpen));
      });
    });

    document.querySelector("[data-primary-menu]").addEventListener("click", (event) => {
      const card = event.target.closest("[data-book]");
      if (card) openDrawer(card.dataset.book);
    });

    document.querySelector("[data-close]").addEventListener("click", closeDrawer);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeDrawer();
    });
  }

  function boot() {
    buildLayout();
    applyTheme(isDarkPreferred());
    renderBooks();
    renderTopics();
    bindEvents();

    const busuanzi = document.createElement("script");
    busuanzi.async = true;
    busuanzi.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
    document.body.appendChild(busuanzi);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
}());
