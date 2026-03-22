export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ПОДВАЛ*</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">Атмосфера</a>
          <a href="#">Галерея</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ГЛУБЖЕ
              <br />
              ЗНАЧИТ <span>ЛУЧШЕ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Кальянная «Подвал» — место, где время течёт по-другому. Тёмная атмосфера, отборный табак и настоящий отдых без суеты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Забронировать место
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              СВЕЖИЙ
              <br />
              ТАБАК
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ПОДВАЛ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              АТМОСФЕРА
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ОТБОРНЫЙ ТАБАК * ТЁМНАЯ АТМОСФЕРА * ОТКРЫТЫ ДО 3:00 * ЖИВАЯ МУЗЫКА * ЛУЧШИЙ КАЛЬЯН В ГОРОДЕ *
            ОТБОРНЫЙ ТАБАК * ТЁМНАЯ АТМОСФЕРА * ОТКРЫТЫ ДО 3:00 * ЖИВАЯ МУЗЫКА * ЛУЧШИЙ КАЛЬЯН В ГОРОДЕ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">МЕНЮ КАЛЬЯНОВ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит вечера</span>
              <img
                src="https://images.unsplash.com/photo-1559181567-c3190bead3e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Классический кальян"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Классика Подвала</h3>
                  <span className="price">1 500 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Двойная забивка, отборный табак, ледяной охладитель. Базис, который не подведёт.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)", color: "white" }}>
                Новинка
              </span>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Фруктовый кальян"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Фруктовая Бомба</h3>
                  <span className="price">2 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Смесь экзотических вкусов в чаше из свежего фрукта. Яркий и насыщенный дым.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                VIP
              </span>
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="VIP кальян"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Dark Room</h3>
                  <span className="price">3 500 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Премиальный табак, колба с охлаждением, персональный мастер весь вечер.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">АТМОСФЕРА ПОДВАЛА.</h2>
            <p className="vibe-text">
              Спустись вниз — и забудь о суете наверху. Низкое освещение, живые плейлисты, кожаные диваны и дым, который
              создаёт настроение. Здесь не торопят и не смотрят на часы.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О нас
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @PODVAL.HOOKAH
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Атмосфера 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Атмосфера 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Атмосфера 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Атмосфера 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ПОДВАЛ*</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Кальянная с характером. Место, куда хочется возвращаться снова. Открыты каждый день до 3:00.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню кальянов
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Атмосфера
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Галерея
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Чт: 15:00 – 2:00</li>
            <li>Пт–Вс: 14:00 – 3:00</li>
            <li>Без выходных</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>+7 (000) 000-00-00</li>
            <li>ул. Подвальная, 1</li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Instagram
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
