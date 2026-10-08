import { Link } from 'react-router-dom';
import { LegalDocument, type LegalSection } from './LegalDocument';
import { SAMEHERE, useSameHereLang } from './i18n';

const mail = <a href={`mailto:${SAMEHERE.supportEmail}`}>{SAMEHERE.supportEmail}</a>;

const EN: LegalSection[] = [
    {
        id: 'agreement',
        heading: 'Agreeing to these terms',
        body: (
            <>
                <p>
                    These Terms of Use (“Terms”) are an agreement between you and {SAMEHERE.developer}, the developer of Same Here (“Same Here”, “we”, “us”). They apply when you
                    download the app, create an account — including a guest account — or use it in any way.
                </p>
                <p>
                    The community rules you accept the first time you open the app are part of these Terms. Our <Link to="/samehere/privacy">Privacy Policy</Link> explains
                    what data we handle and why. If you don't agree with these Terms, please don't use Same Here.
                </p>
            </>
        ),
    },
    {
        id: 'eligibility',
        heading: 'Who can use Same Here',
        body: (
            <p>
                You must be at least 13 years old, or older if your country sets a higher minimum age to use online services without a parent's consent. If you are under 18,
                you need permission from a parent or legal guardian, who also agrees to these Terms on your behalf.
            </p>
        ),
    },
    {
        id: 'accounts',
        heading: 'Your account',
        body: (
            <>
                <ul>
                    <li>
                        <strong>Guest accounts.</strong> You can start without an email or password. A guest account is kept only on your iPhone. If you sign out, delete the
                        app or change phones before adding an email, you lose access to it and we can't recover it for you.
                    </li>
                    <li>
                        <strong>Saved accounts.</strong> If you register or add an email to a guest account, you can sign in again on any device. Keep your password private.
                        You can optionally use Face ID to sign in; Face ID is handled by iOS and we never receive your biometric data.
                    </li>
                    <li>You are responsible for what happens under your account. Tell us right away at {mail} if you think someone else is using it.</li>
                    <li>One person, one account: don't create accounts to get around a ban or to manipulate results.</li>
                </ul>
            </>
        ),
    },
    {
        id: 'content',
        heading: 'What you post',
        body: (
            <>
                <p>
                    You own the thoughts and answer options you write (“your content”). When you post them, they are visible to other people who use Same Here, together with
                    the topic you chose.
                </p>
                <p>
                    To run the app we need your permission to store, copy, display and distribute your content inside Same Here. You give us a worldwide, non-exclusive,
                    royalty-free license to do exactly that, only to operate and improve the service. The license ends when you delete the content or your account, except
                    where we must keep something for legal reasons.
                </p>
                <p>
                    When you answer a thought, your answer is added to that thought's results, which everyone sees as totals and percentages. Don't post personal
                    information about yourself or anyone else.
                </p>
                <p>You confirm that you have the right to post your content and that it follows these Terms and the law.</p>
            </>
        ),
    },
    {
        id: 'rules',
        heading: 'Community rules',
        body: (
            <>
                <p>Same Here has zero tolerance for objectionable content and abusive users. You agree not to post or do any of the following:</p>
                <ul>
                    <li>Hate speech, harassment, bullying, threats or content that attacks people for who they are.</li>
                    <li>Sexual content, nudity, or graphic violence.</li>
                    <li>Spam, advertising, scams or repeated identical posts.</li>
                    <li>Other people's private information (names, addresses, phone numbers, photos, etc.) or impersonation of anyone.</li>
                    <li>Anything illegal, or that promotes self-harm, dangerous activities or illegal goods.</li>
                    <li>Attempts to break, overload, scrape or reverse-engineer the service, get around the content filter or access other people's accounts.</li>
                </ul>
            </>
        ),
    },
    {
        id: 'moderation',
        heading: 'Reports, blocking and moderation',
        body: (
            <>
                <ul>
                    <li>Posts containing offensive words are blocked automatically before they are published.</li>
                    <li>You can report any thought. A thought reported by several different people is hidden for everyone while it is reviewed.</li>
                    <li>You can block any user, and you will no longer see their thoughts.</li>
                    <li>We review reports regularly and aim to act on them within 24 hours.</li>
                </ul>
                <p>
                    We may remove any content and suspend or permanently ban any account that breaks these Terms, without prior notice. If you see something that needs urgent
                    attention, email {mail}.
                </p>
            </>
        ),
    },
    {
        id: 'questions',
        heading: 'Questions from Same Here and results',
        body: (
            <>
                <p>
                    To get conversations started, some questions are written by Same Here rather than by other people. They show “Same Here” as their author, are prepared
                    with the help of AI tools, and link to a source on the topic. The results of these questions may include starting sample counts, in addition to the real
                    answers from people using the app.
                </p>
                <p>
                    Results in Same Here are for fun and conversation. They are not a scientific poll and don't represent any population. Links to outside websites are
                    provided for context; we don't control those sites and aren't responsible for them.
                </p>
            </>
        ),
    },
    {
        id: 'deletion',
        heading: 'Deleting your account',
        body: (
            <p>
                You can delete your account at any time from <strong>Profile → Delete account</strong> in the app. This permanently deletes your account, the thoughts you
                posted and your answers, and can't be undone. You can also ask us to do it by writing to {mail}.
            </p>
        ),
    },
    {
        id: 'service',
        heading: 'The service',
        body: (
            <p>
                Same Here is free. We may change, add or remove features, or suspend or stop the service, at any time. The app is provided “as is” and “as available”,
                without warranties of any kind, to the extent the law allows. We do our best to keep it working, but we can't promise it will always be available, secure
                or error-free.
            </p>
        ),
    },
    {
        id: 'liability',
        heading: 'Limitation of liability',
        body: (
            <p>
                To the maximum extent permitted by law, we are not liable for indirect, incidental or consequential damages, or for loss of data, arising from your use of
                Same Here or from content posted by other people. Nothing in these Terms limits rights you have as a consumer that can't be limited by law.
            </p>
        ),
    },
    {
        id: 'apple',
        heading: 'Apple',
        body: (
            <p>
                These Terms are between you and us, not Apple. Apple is not responsible for Same Here or its content, has no obligation to provide maintenance or support
                for it, and is not responsible for any claims relating to the app, including product liability, legal compliance or intellectual property claims. If the
                app fails to conform to any applicable warranty, you may notify Apple and Apple may refund the purchase price (if any); Apple has no other warranty
                obligation. Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you. You confirm you are not located in a
                country subject to a U.S. Government embargo and are not on any U.S. Government list of prohibited or restricted parties.
            </p>
        ),
    },
    {
        id: 'law',
        heading: 'Governing law',
        body: (
            <p>
                These Terms are governed by the laws of Mexico. This does not take away any protection you have under the mandatory consumer laws of the country where you
                live.
            </p>
        ),
    },
    {
        id: 'changes',
        heading: 'Changes to these terms',
        body: (
            <p>
                We may update these Terms as the app changes. When we do, we'll change the date at the top of this page, and for important changes we'll let you know in the
                app. If you keep using Same Here after an update, you accept the new Terms.
            </p>
        ),
    },
    {
        id: 'contact',
        heading: 'Contact',
        body: <p>Questions about these Terms, or anything else about Same Here: {mail}.</p>,
    },
];

const ES: LegalSection[] = [
    {
        id: 'agreement',
        heading: 'Aceptación de estos términos',
        body: (
            <>
                <p>
                    Estos Términos de uso (“Términos”) son un acuerdo entre tú y {SAMEHERE.developer}, desarrollador de Same Here (“Same Here”, “nosotros”). Aplican cuando
                    descargas la app, creas una cuenta —incluida una cuenta de invitado— o la usas de cualquier forma.
                </p>
                <p>
                    Las reglas de la comunidad que aceptas la primera vez que abres la app forman parte de estos Términos. Nuestro{' '}
                    <Link to="/samehere/privacy">Política de privacidad</Link> explica qué datos tratamos y por qué. Si no estás de acuerdo con estos Términos, por favor no
                    uses Same Here.
                </p>
            </>
        ),
    },
    {
        id: 'eligibility',
        heading: 'Quién puede usar Same Here',
        body: (
            <p>
                Debes tener al menos 13 años, o más si tu país exige una edad mayor para usar servicios en línea sin el consentimiento de tus padres. Si eres menor de 18
                años, necesitas el permiso de tu madre, padre o tutor legal, quien también acepta estos Términos en tu nombre.
            </p>
        ),
    },
    {
        id: 'accounts',
        heading: 'Tu cuenta',
        body: (
            <ul>
                <li>
                    <strong>Cuentas de invitado.</strong> Puedes empezar sin correo ni contraseña. Una cuenta de invitado se guarda solo en tu iPhone. Si cierras sesión,
                    borras la app o cambias de teléfono antes de agregar un correo, pierdes el acceso y no podemos recuperarla.
                </li>
                <li>
                    <strong>Cuentas guardadas.</strong> Si te registras o agregas un correo a tu cuenta de invitado, puedes volver a entrar desde cualquier dispositivo.
                    Mantén tu contraseña en privado. Puedes usar Face ID para iniciar sesión si quieres; Face ID lo gestiona iOS y nunca recibimos tus datos biométricos.
                </li>
                <li>Eres responsable de lo que pase en tu cuenta. Avísanos de inmediato a {mail} si crees que alguien más la está usando.</li>
                <li>Una persona, una cuenta: no crees cuentas para evadir un bloqueo o para manipular resultados.</li>
            </ul>
        ),
    },
    {
        id: 'content',
        heading: 'Lo que publicas',
        body: (
            <>
                <p>
                    Los pensamientos y opciones de respuesta que escribes son tuyos (“tu contenido”). Al publicarlos, son visibles para las demás personas que usan Same Here,
                    junto con el tema que elegiste.
                </p>
                <p>
                    Para operar la app necesitamos tu permiso para guardar, copiar, mostrar y distribuir tu contenido dentro de Same Here. Nos otorgas una licencia mundial,
                    no exclusiva y gratuita para hacer exactamente eso, solo para operar y mejorar el servicio. La licencia termina cuando borras el contenido o tu cuenta,
                    salvo que debamos conservar algo por razones legales.
                </p>
                <p>
                    Cuando respondes un pensamiento, tu respuesta se suma a sus resultados, que todos ven como totales y porcentajes. No publiques información personal tuya
                    ni de otras personas.
                </p>
                <p>Confirmas que tienes derecho a publicar tu contenido y que cumple con estos Términos y con la ley.</p>
            </>
        ),
    },
    {
        id: 'rules',
        heading: 'Reglas de la comunidad',
        body: (
            <>
                <p>Same Here tiene tolerancia cero con el contenido ofensivo y los usuarios abusivos. Te comprometes a no publicar ni hacer nada de lo siguiente:</p>
                <ul>
                    <li>Discursos de odio, acoso, bullying, amenazas o contenido que ataque a las personas por quienes son.</li>
                    <li>Contenido sexual, desnudos o violencia gráfica.</li>
                    <li>Spam, publicidad, estafas o publicaciones repetidas.</li>
                    <li>Información privada de otras personas (nombres, direcciones, teléfonos, fotos, etc.) o suplantar a alguien.</li>
                    <li>Cualquier cosa ilegal, o que promueva autolesiones, actividades peligrosas o productos ilegales.</li>
                    <li>Intentar dañar, saturar, extraer datos o hacer ingeniería inversa del servicio, evadir el filtro de contenido o acceder a cuentas ajenas.</li>
                </ul>
            </>
        ),
    },
    {
        id: 'moderation',
        heading: 'Reportes, bloqueos y moderación',
        body: (
            <>
                <ul>
                    <li>Las publicaciones con palabras ofensivas se bloquean automáticamente antes de publicarse.</li>
                    <li>Puedes reportar cualquier pensamiento. Si varias personas distintas lo reportan, se oculta para todos mientras se revisa.</li>
                    <li>Puedes bloquear a cualquier usuario y dejarás de ver sus pensamientos.</li>
                    <li>Revisamos los reportes con regularidad y buscamos atenderlos en menos de 24 horas.</li>
                </ul>
                <p>
                    Podemos eliminar cualquier contenido y suspender o dar de baja permanentemente cualquier cuenta que incumpla estos Términos, sin previo aviso. Si ves algo
                    que requiere atención urgente, escribe a {mail}.
                </p>
            </>
        ),
    },
    {
        id: 'questions',
        heading: 'Preguntas de Same Here y resultados',
        body: (
            <>
                <p>
                    Para iniciar conversaciones, algunas preguntas las escribe Same Here y no otras personas. Aparecen con “Same Here” como autor, se preparan con ayuda de
                    herramientas de inteligencia artificial e incluyen un enlace a una fuente sobre el tema. Los resultados de estas preguntas pueden incluir conteos
                    iniciales de ejemplo, además de las respuestas reales de las personas que usan la app.
                </p>
                <p>
                    Los resultados en Same Here son para divertirse y conversar. No son una encuesta científica ni representan a ninguna población. Los enlaces a sitios
                    externos se incluyen como contexto; no controlamos esos sitios ni somos responsables de ellos.
                </p>
            </>
        ),
    },
    {
        id: 'deletion',
        heading: 'Eliminar tu cuenta',
        body: (
            <p>
                Puedes eliminar tu cuenta cuando quieras desde <strong>Perfil → Eliminar cuenta</strong> en la app. Esto borra de forma permanente tu cuenta, los
                pensamientos que publicaste y tus respuestas, y no se puede deshacer. También puedes pedirnos que lo hagamos escribiendo a {mail}.
            </p>
        ),
    },
    {
        id: 'service',
        heading: 'El servicio',
        body: (
            <p>
                Same Here es gratuita. Podemos cambiar, agregar o quitar funciones, o suspender o terminar el servicio, en cualquier momento. La app se ofrece “tal cual” y
                “según disponibilidad”, sin garantías de ningún tipo, en la medida que lo permita la ley. Hacemos lo posible para que funcione bien, pero no podemos
                prometer que siempre esté disponible, sea segura o esté libre de errores.
            </p>
        ),
    },
    {
        id: 'liability',
        heading: 'Limitación de responsabilidad',
        body: (
            <p>
                En la máxima medida permitida por la ley, no somos responsables de daños indirectos, incidentales o consecuentes, ni de la pérdida de datos, derivados del uso
                de Same Here o del contenido publicado por otras personas. Nada en estos Términos limita los derechos que tienes como consumidor y que la ley no permite
                limitar.
            </p>
        ),
    },
    {
        id: 'apple',
        heading: 'Apple',
        body: (
            <p>
                Estos Términos son entre tú y nosotros, no con Apple. Apple no es responsable de Same Here ni de su contenido, no tiene obligación de darle mantenimiento ni
                soporte, y no es responsable de ninguna reclamación relacionada con la app, incluidas las de responsabilidad por producto, cumplimiento legal o propiedad
                intelectual. Si la app no cumple con alguna garantía aplicable, puedes notificarlo a Apple y Apple podrá reembolsar el precio de compra (si lo hubo); Apple
                no tiene ninguna otra obligación de garantía. Apple y sus subsidiarias son terceros beneficiarios de estos Términos y pueden hacerlos valer frente a ti.
                Confirmas que no te encuentras en un país sujeto a embargo del Gobierno de EE. UU. ni figuras en ninguna lista de personas restringidas de dicho gobierno.
            </p>
        ),
    },
    {
        id: 'law',
        heading: 'Ley aplicable',
        body: (
            <p>
                Estos Términos se rigen por las leyes de México. Esto no elimina ninguna protección que tengas conforme a las leyes obligatorias de protección al consumidor
                del país donde vives.
            </p>
        ),
    },
    {
        id: 'changes',
        heading: 'Cambios a estos términos',
        body: (
            <p>
                Podemos actualizar estos Términos conforme cambie la app. Cuando lo hagamos, cambiaremos la fecha al inicio de esta página y, si el cambio es importante, te
                avisaremos en la app. Si sigues usando Same Here después de una actualización, aceptas los nuevos Términos.
            </p>
        ),
    },
    {
        id: 'contact',
        heading: 'Contacto',
        body: <p>Dudas sobre estos Términos o cualquier otra cosa de Same Here: {mail}.</p>,
    },
];

export const SameHereTerms = () => {
    const lang = useSameHereLang();
    const es = lang === 'es';

    return (
        <LegalDocument
            lang={lang}
            title={es ? 'Términos de uso' : 'Terms of Use'}
            documentTitle={es ? 'Términos de uso — Same Here' : 'Terms of Use — Same Here'}
            intro={
                <p>
                    {es
                        ? 'Same Here es un lugar para compartir lo que piensas y descubrir quién piensa igual. Estos términos explican las reglas para usarla, en lenguaje claro.'
                        : 'Same Here is a place to share what you think and find out who thinks the same. These terms explain the rules for using it, in plain language.'}
                </p>
            }
            sections={es ? ES : EN}
        />
    );
};
