export const PrivacyPage = () => {
    return (
    <main className="max-w-3xl mx-auto px-4 sm:px-8 py-12">
      <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
        
        {/* Encabezado */}
        <div className="border-b border-white/10 pb-6">
          <h1 className="text-3xl font-bold text-white tracking-tight">Política de Privacidad</h1>
          <p className="text-xs text-gray-500 mt-2">Última actualización: Agosto 2026</p>
        </div>

        {/* Sección 1 */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">1. Información que recopilamos</h2>
          <p>
            En <strong>bennyreyes.dev</strong>, la privacidad de mis visitantes es fundamental. Este sitio web recopila únicamente la información que proporcionas de forma voluntaria a través del formulario de contacto (como tu nombre, correo electrónico y mensaje).
          </p>
        </section>

        {/* Sección 2 */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">2. Uso de la información</h2>
          <p>
            La información recopilada se utiliza exclusivamente para responder a tus consultas, hablar sobre potenciales proyectos o proporcionar los servicios solicitados. No vendo, alquilo ni comparto tu información personal con terceros.
          </p>
        </section>

        {/* Sección 3 */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">3. Cookies y tecnologías de seguimiento</h2>
          <p>
            Este sitio web no utiliza cookies de rastreo publicitario ni almacenamiento de datos invasivos de terceros.
          </p>
        </section>

        {/* Sección 4 */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">4. Contacto</h2>
          <p>
            Si tienes dudas o preguntas sobre esta política de privacidad, puedes ponerte en contacto conmigo a través del formulario de contacto o directamente por correo electrónico.
          </p>
        </section>

      </div>
    </main>
  );
}