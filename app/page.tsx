import "./globals.css";

const TELEFONO = "+1 809-289-8613";
const WHATSAPP = "https://wa.me/18092898613";
const EMAIL = "sarahrestaurantrrss@gmail.com";
const DIRECCION = "Av. Sarasota 104, Santo Domingo 10112, República Dominicana";
const MAPA_EMBED =
  "https://www.google.com/maps?q=Av.+Sarasota+104,+Santo+Domingo,+10112,+Rep%C3%BAblica+Dominicana&output=embed";

export default function Page() {
  return (
    <>
      <header>
        <nav className="nav">
          <a className="logo" href="#inicio">
            Sarah
          </a>
          <ul className="nav-links">
            <li>
              <a href="#especialidades">Especialidades</a>
            </li>
            <li>
              <a href="#nosotros">Nosotros</a>
            </li>
            <li>
              <a href="#ubicacion">Ubicación</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="hero-inner">
          <p className="eyebrow">Restaurante · Santo Domingo</p>
          <h1>SARAH</h1>
          <p className="sub">Donde la sencillez se convierte en grandeza</p>
          <p className="lead">
            Una experiencia culinaria auténtica en el corazón de la Avenida
            Sarasota: pasta artesanal italiana, bratwurst alemán y cocina
            mediterránea, servidos con calidez en un ambiente ideal para la
            familia.
          </p>
          <div>
            <a className="btn btn-primary" href="#contacto">
              Reserva tu mesa
            </a>
            <a className="btn btn-ghost" href="#especialidades">
              Ver especialidades
            </a>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="especialidades" id="especialidades">
        <div className="wrap">
          <div className="section-title">
            <p className="eyebrow">Nuestra cocina</p>
            <h2>Especialidades de la casa</h2>
            <p>
              Un menú que combina tradiciones italianas y alemanas, con platos
              pensados para compartir y disfrutar en familia.
            </p>
          </div>
          <div className="grid">
            <div className="card">
              <div className="icono">🍝</div>
              <h3>Pasta artesanal</h3>
              <p>
                Pastas elaboradas al estilo italiano, con recetas tradicionales
                y el sabor de lo hecho en casa.
              </p>
            </div>
            <div className="card">
              <div className="icono">🌭</div>
              <h3>Bratwurst alemán</h3>
              <p>
                Auténtica salchicha alemana bien elaborada, uno de los sellos
                distintivos de nuestra cocina.
              </p>
            </div>
            <div className="card">
              <div className="icono">🍕</div>
              <h3>Pizzas</h3>
              <p>
                Pizzas de estilo napolitano, con ingredientes frescos y masa
                preparada con dedicación.
              </p>
            </div>
            <div className="card">
              <div className="icono">🫒</div>
              <h3>Cocina mediterránea</h3>
              <p>
                Platos de inspiración mediterránea, frescos y llenos de sabor,
                para todos los gustos.
              </p>
            </div>
            <div className="card">
              <div className="icono">🎉</div>
              <h3>Salones para eventos</h3>
              <p>
                Salones privados adaptados para actividades de empresa,
                celebraciones familiares y reuniones de trabajo.
              </p>
            </div>
            <div className="card">
              <div className="icono">👨‍👩‍👧‍👦</div>
              <h3>Ambiente familiar</h3>
              <p>
                Un lugar lindo y adecuado para ir con niños, con patio de juego
                y espacios pensados para compartir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="nosotros" id="nosotros">
        <div className="wrap">
          <div className="section-title">
            <p className="eyebrow">Quiénes somos</p>
            <h2>Nuestra historia</h2>
          </div>
          <div className="nosotros-contenido">
            <p>
              En el corazón de la Avenida Sarasota se encuentra Sarah, un
              restaurante que ofrece una experiencia culinaria auténtica, llena
              de sabor, calidez y significado.
            </p>
            <div className="cita">
              <blockquote>
                “En Sarah, más que clientes, recibimos amigos; más que platos,
                servimos momentos para recordar.”
              </blockquote>
            </div>
            <p>
              El nombre Sarah, que en hebreo significa “princesa” y “mujer
              noble”, inspira todo lo que hacemos: honrar lo sencillo, lo
              genuino y lo inolvidable en cada visita.
            </p>
            <div className="badges">
              <span className="badge">Valoración 4.5/5 en Tripadvisor</span>
              <span className="badge">Cocina italiana y alemana</span>
              <span className="badge">Ideal para familias</span>
              <span className="badge">Salones privados</span>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion">
        <div className="wrap">
          <div className="section-title">
            <p className="eyebrow">Encuéntranos</p>
            <h2>Ubicación y horario</h2>
          </div>
          <div className="ubicacion-grid">
            <div className="info-box">
              <h3>Visítanos</h3>
              <div className="info-fila">
                <span className="etiqueta">Dirección</span>
                <span>{DIRECCION}</span>
              </div>
              <div className="info-fila">
                <span className="etiqueta">Teléfono</span>
                <a href={`tel:${TELEFONO.replace(/[^+\d]/g, "")}`}>
                  {TELEFONO}
                </a>
              </div>
              <div className="info-fila">
                <span className="etiqueta">Correo</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="info-fila">
                <span className="etiqueta">Horario</span>
                <span>Lunes a domingo · 7:00 a.m. – 11:00 p.m.</span>
              </div>
              <div className="info-fila">
                <span className="etiqueta">Reservas</span>
                <span>
                  Se aceptan reservas con 24 horas de anticipación para
                  personalizar tu experiencia.
                </span>
              </div>
            </div>
            <div className="mapa">
              <iframe
                title="Mapa de Sarah Restaurante"
                src={MAPA_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="contacto" id="contacto">
        <div className="wrap">
          <div className="section-title">
            <p className="eyebrow">Hablemos</p>
            <h2>Contacto y reservas</h2>
            <p>
              Llámanos, escríbenos por WhatsApp o envíanos un correo. Te
              esperamos en Sarah.
            </p>
          </div>
          <div className="contacto-grid">
            <a className="contacto-card" href={WHATSAPP}>
              <div className="icono">💬</div>
              <h3>WhatsApp</h3>
              <p>{TELEFONO}</p>
            </a>
            <a
              className="contacto-card"
              href={`tel:${TELEFONO.replace(/[^+\d]/g, "")}`}
            >
              <div className="icono">📞</div>
              <h3>Llámanos</h3>
              <p>{TELEFONO}</p>
            </a>
            <a className="contacto-card" href={`mailto:${EMAIL}`}>
              <div className="icono">✉️</div>
              <h3>Correo</h3>
              <p>{EMAIL}</p>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p className="f-logo">Sarah Restaurante</p>
        <p>{DIRECCION}</p>
        <p>
          {TELEFONO} · {EMAIL}
        </p>
      </footer>
    </>
  );
}
