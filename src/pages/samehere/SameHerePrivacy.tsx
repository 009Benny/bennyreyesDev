import { Link } from 'react-router-dom';
import { LegalDocument, type LegalSection } from './LegalDocument';
import { SAMEHERE, useSameHereLang } from './i18n';

const mail = <a href={`mailto:${SAMEHERE.supportEmail}`}>{SAMEHERE.supportEmail}</a>;

const EN: LegalSection[] = [
    {
        id: 'summary',
        heading: 'The short version',
        body: (
            <ul>
                <li>We collect only what Same Here needs to work: your account, the thoughts you post and the answers you give.</li>
                <li>No ads, no analytics or tracking SDKs, and we never sell your data.</li>
                <li>Other people see your thoughts, but not your email, and your answers only as part of the totals.</li>
                <li>You can delete your account and everything in it from the app at any time.</li>
            </ul>
        ),
    },
    {
        id: 'controller',
        heading: 'Who is responsible for your data',
        body: (
            <p>
                Same Here is developed by {SAMEHERE.developer}, based in Mexico, who is responsible for the personal data described here. You can reach us at {mail}.
            </p>
        ),
    },
    {
        id: 'collect',
        heading: 'What we collect',
        body: (
            <>
                <p>
                    <strong>Account information</strong>
                </p>
                <ul>
                    <li>An account identifier, created for every account, including guest accounts.</li>
                    <li>Your email address — only if you register or add an email to a guest account.</li>
                    <li>A display name: the one you give when registering, or an automatic one like “Anon-3f9a2c”.</li>
                    <li>
                        Your password, which is handled by our authentication provider and stored only in encrypted (hashed) form. We can't see it.
                    </li>
                    <li>Whether the account is a guest account, and when you accepted the community rules.</li>
                </ul>
                <p>
                    <strong>What you do in the app</strong>
                </p>
                <ul>
                    <li>The thoughts you post, their answer options and topic, and when you posted them.</li>
                    <li>The answers you choose on other people's thoughts.</li>
                    <li>Thoughts you report (and the reason you picked) and the people you block.</li>
                </ul>
                <p>
                    <strong>Technical information</strong>
                </p>
                <p>
                    When the app talks to our servers, our hosting provider automatically processes technical data such as your IP address and the time and type of request.
                    This is used to deliver the service, keep it secure and prevent abuse.
                </p>
                <p>
                    <strong>Stored only on your iPhone</strong>
                </p>
                <p>
                    Your sign-in session is kept in the iOS Keychain, and your choice to use Face ID is saved on the device. Face ID itself is handled entirely by iOS — we
                    never receive your face data or any biometric information.
                </p>
            </>
        ),
    },
    {
        id: 'not-collect',
        heading: "What we don't collect",
        body: (
            <p>
                Same Here does not access your location, contacts, photos, camera or microphone, and does not use the advertising identifier. There are no ads, no analytics
                services and no third-party tracking. We don't track you across other apps or websites.
            </p>
        ),
    },
    {
        id: 'use',
        heading: 'How we use it',
        body: (
            <>
                <ul>
                    <li>To create and keep your account, and let you sign in.</li>
                    <li>To publish your thoughts, record your answers and show the results.</li>
                    <li>To keep the community safe: filtering offensive words, handling reports, hiding reported content and banning abusive accounts.</li>
                    <li>To answer you when you contact us.</li>
                    <li>To protect the service and comply with the law.</li>
                </ul>
                <p>
                    If you are in the European Economic Area or the UK, we rely on these legal bases: performing our agreement with you (the{' '}
                    <Link to="/samehere/terms">Terms of Use</Link>), our legitimate interest in keeping Same Here safe and working, and compliance with legal obligations.
                </p>
            </>
        ),
    },
    {
        id: 'visible',
        heading: 'What other people can see',
        body: (
            <ul>
                <li>Thoughts you post, with their options and topic, are visible to everyone using Same Here.</li>
                <li>Your answers are only shown as part of each thought's totals and percentages — nobody sees what you, specifically, answered.</li>
                <li>Your email address is never shown to other people.</li>
                <li>Reports and blocks are private. The person you report or block isn't told.</li>
            </ul>
        ),
    },
    {
        id: 'sharing',
        heading: 'Who we share it with',
        body: (
            <>
                <p>We don't sell or rent your personal data, and we don't share it for advertising. We only share it with:</p>
                <ul>
                    <li>
                        <strong>Supabase</strong>, which provides our database, sign-in and hosting, and processes data on our behalf under its own security and privacy
                        commitments.
                    </li>
                    <li>Authorities, when the law requires it or to protect the safety of people using Same Here.</li>
                    <li>A successor, if Same Here is ever transferred to someone else, who would have to respect this policy.</li>
                </ul>
                <p>
                    Our providers may store data on servers outside your country. When that happens, we rely on them to apply appropriate safeguards required by law.
                </p>
            </>
        ),
    },
    {
        id: 'retention',
        heading: 'How long we keep it',
        body: (
            <>
                <p>
                    We keep your data while your account exists. When you delete your account from <strong>Profile → Delete account</strong>, your account, your thoughts
                    (with all the answers they received), your answers, your reports and your blocks are permanently deleted from our database. Copies may remain in our
                    provider's encrypted backups for a short period before they are overwritten.
                </p>
                <p>
                    If you only sign out of a guest account, you lose access to it but its data stays on our servers. To erase it, use Delete account before signing out, or
                    write to {mail}.
                </p>
            </>
        ),
    },
    {
        id: 'rights',
        heading: 'Your rights',
        body: (
            <>
                <p>
                    Depending on where you live, you can ask to access, correct, delete or receive a copy of your personal data, or object to or limit how we use it. In
                    Mexico these are your ARCO rights; in the EU, UK and several U.S. states, similar rights apply.
                </p>
                <p>
                    You can delete your account directly in the app. For anything else, write to {mail} from the email linked to your account (or include your display name if
                    you are a guest). We'll reply within 20 business days. You can also complain to your local data protection authority.
                </p>
            </>
        ),
    },
    {
        id: 'security',
        heading: 'Security',
        body: (
            <p>
                Data travels encrypted (HTTPS) between the app and our servers. Access to the database is restricted by per-user rules, so an account can only change its own
                data. No system is perfectly secure, but we work to protect your information and will notify you if a breach affects you, as the law requires.
            </p>
        ),
    },
    {
        id: 'children',
        heading: 'Children',
        body: (
            <p>
                Same Here is not meant for children under 13, and we don't knowingly collect their data. If you believe a child under 13 has an account, write to {mail}{' '}
                and we will delete it.
            </p>
        ),
    },
    {
        id: 'changes',
        heading: 'Changes to this policy',
        body: (
            <p>
                If we change this policy, we'll update the date at the top of the page. If the change is important — for example, collecting a new kind of data — we'll tell
                you in the app before it takes effect.
            </p>
        ),
    },
    {
        id: 'contact',
        heading: 'Contact',
        body: <p>Questions about your privacy or this policy: {mail}.</p>,
    },
];

const ES: LegalSection[] = [
    {
        id: 'summary',
        heading: 'En resumen',
        body: (
            <ul>
                <li>Solo recopilamos lo que Same Here necesita para funcionar: tu cuenta, los pensamientos que publicas y las respuestas que das.</li>
                <li>Sin anuncios, sin SDKs de analítica ni de rastreo, y nunca vendemos tus datos.</li>
                <li>Otras personas ven tus pensamientos, pero no tu correo, y tus respuestas solo como parte de los totales.</li>
                <li>Puedes eliminar tu cuenta y todo lo que contiene desde la app cuando quieras.</li>
            </ul>
        ),
    },
    {
        id: 'controller',
        heading: 'Responsable de tus datos',
        body: (
            <p>
                Same Here es desarrollada por {SAMEHERE.developer}, con domicilio en México, quien es responsable de los datos personales descritos aquí. Puedes
                contactarnos en {mail}.
            </p>
        ),
    },
    {
        id: 'collect',
        heading: 'Qué datos recopilamos',
        body: (
            <>
                <p>
                    <strong>Datos de la cuenta</strong>
                </p>
                <ul>
                    <li>Un identificador de cuenta, que se crea para todas las cuentas, incluidas las de invitado.</li>
                    <li>Tu correo electrónico — solo si te registras o agregas un correo a una cuenta de invitado.</li>
                    <li>Un nombre visible: el que das al registrarte, o uno automático como “Anon-3f9a2c”.</li>
                    <li>Tu contraseña, que gestiona nuestro proveedor de autenticación y se guarda solo cifrada (hash). Nosotros no podemos verla.</li>
                    <li>Si la cuenta es de invitado y cuándo aceptaste las reglas de la comunidad.</li>
                </ul>
                <p>
                    <strong>Lo que haces en la app</strong>
                </p>
                <ul>
                    <li>Los pensamientos que publicas, sus opciones de respuesta, su tema y cuándo los publicaste.</li>
                    <li>Las respuestas que eliges en los pensamientos de otras personas.</li>
                    <li>Los pensamientos que reportas (y el motivo que eliges) y las personas que bloqueas.</li>
                </ul>
                <p>
                    <strong>Información técnica</strong>
                </p>
                <p>
                    Cuando la app se comunica con nuestros servidores, nuestro proveedor de hosting procesa automáticamente datos técnicos como tu dirección IP y la hora y
                    el tipo de solicitud. Se usan para prestar el servicio, mantenerlo seguro y prevenir abusos.
                </p>
                <p>
                    <strong>Guardado solo en tu iPhone</strong>
                </p>
                <p>
                    Tu sesión se guarda en el Llavero (Keychain) de iOS y tu preferencia de usar Face ID se guarda en el dispositivo. Face ID lo gestiona por completo iOS:
                    nunca recibimos datos de tu rostro ni ningún dato biométrico.
                </p>
            </>
        ),
    },
    {
        id: 'not-collect',
        heading: 'Qué no recopilamos',
        body: (
            <p>
                Same Here no accede a tu ubicación, contactos, fotos, cámara ni micrófono, y no usa el identificador de publicidad. No hay anuncios, ni servicios de
                analítica, ni rastreo de terceros. No te rastreamos en otras apps ni sitios web.
            </p>
        ),
    },
    {
        id: 'use',
        heading: 'Para qué los usamos',
        body: (
            <>
                <ul>
                    <li>Para crear y mantener tu cuenta, y permitirte iniciar sesión.</li>
                    <li>Para publicar tus pensamientos, registrar tus respuestas y mostrar los resultados.</li>
                    <li>Para cuidar a la comunidad: filtrar palabras ofensivas, atender reportes, ocultar contenido reportado y dar de baja cuentas abusivas.</li>
                    <li>Para responderte cuando nos contactas.</li>
                    <li>Para proteger el servicio y cumplir con la ley.</li>
                </ul>
                <p>
                    Si estás en el Espacio Económico Europeo o el Reino Unido, nos basamos en: la ejecución de nuestro acuerdo contigo (los{' '}
                    <Link to="/samehere/terms">Términos de uso</Link>), nuestro interés legítimo en mantener Same Here segura y funcionando, y el cumplimiento de
                    obligaciones legales.
                </p>
            </>
        ),
    },
    {
        id: 'visible',
        heading: 'Qué pueden ver otras personas',
        body: (
            <ul>
                <li>Los pensamientos que publicas, con sus opciones y tema, son visibles para todas las personas que usan Same Here.</li>
                <li>Tus respuestas solo se muestran como parte de los totales y porcentajes de cada pensamiento: nadie ve qué respondiste tú en particular.</li>
                <li>Tu correo electrónico nunca se muestra a otras personas.</li>
                <li>Los reportes y bloqueos son privados. A la persona que reportas o bloqueas no se le avisa.</li>
            </ul>
        ),
    },
    {
        id: 'sharing',
        heading: 'Con quién los compartimos',
        body: (
            <>
                <p>No vendemos ni rentamos tus datos personales, y no los compartimos con fines publicitarios. Solo los compartimos con:</p>
                <ul>
                    <li>
                        <strong>Supabase</strong>, que nos da la base de datos, el inicio de sesión y el hosting, y trata los datos por cuenta nuestra bajo sus propios
                        compromisos de seguridad y privacidad.
                    </li>
                    <li>Autoridades, cuando la ley lo exija o para proteger la seguridad de las personas que usan Same Here.</li>
                    <li>Un sucesor, si Same Here llegara a transferirse a alguien más, quien tendría que respetar esta política.</li>
                </ul>
                <p>
                    Nuestros proveedores pueden guardar datos en servidores fuera de tu país. En ese caso, confiamos en que apliquen las garantías adecuadas que exige la ley.
                </p>
            </>
        ),
    },
    {
        id: 'retention',
        heading: 'Cuánto tiempo los conservamos',
        body: (
            <>
                <p>
                    Conservamos tus datos mientras tu cuenta exista. Cuando eliminas tu cuenta desde <strong>Perfil → Eliminar cuenta</strong>, se borran de forma permanente
                    de nuestra base de datos tu cuenta, tus pensamientos (con todas las respuestas que recibieron), tus respuestas, tus reportes y tus bloqueos. Pueden quedar
                    copias en los respaldos cifrados de nuestro proveedor durante un periodo corto antes de sobrescribirse.
                </p>
                <p>
                    Si solo cierras sesión en una cuenta de invitado, pierdes el acceso pero sus datos siguen en nuestros servidores. Para borrarlos, usa Eliminar cuenta antes
                    de cerrar sesión, o escribe a {mail}.
                </p>
            </>
        ),
    },
    {
        id: 'rights',
        heading: 'Tus derechos',
        body: (
            <>
                <p>
                    Según donde vivas, puedes pedir acceder, rectificar, cancelar (eliminar) u oponerte al uso de tus datos personales —tus derechos ARCO en México—, así como
                    recibir una copia o limitar su uso. En la Unión Europea, el Reino Unido y varios estados de EE. UU. aplican derechos similares.
                </p>
                <p>
                    Puedes eliminar tu cuenta directamente en la app. Para cualquier otra solicitud, escribe a {mail} desde el correo asociado a tu cuenta (o incluye tu nombre
                    visible si eres invitado). Te responderemos en un plazo máximo de 20 días hábiles. También puedes acudir a la autoridad de protección de datos de tu país.
                </p>
            </>
        ),
    },
    {
        id: 'security',
        heading: 'Seguridad',
        body: (
            <p>
                Los datos viajan cifrados (HTTPS) entre la app y nuestros servidores. El acceso a la base de datos está restringido por reglas por usuario, de modo que cada
                cuenta solo puede modificar sus propios datos. Ningún sistema es perfectamente seguro, pero trabajamos para proteger tu información y te avisaremos si una
                vulneración te afecta, como lo exige la ley.
            </p>
        ),
    },
    {
        id: 'children',
        heading: 'Menores de edad',
        body: (
            <p>
                Same Here no está pensada para menores de 13 años y no recopilamos sus datos a sabiendas. Si crees que un menor de 13 años tiene una cuenta, escribe a {mail}{' '}
                y la eliminaremos.
            </p>
        ),
    },
    {
        id: 'changes',
        heading: 'Cambios a esta política',
        body: (
            <p>
                Si cambiamos esta política, actualizaremos la fecha al inicio de la página. Si el cambio es importante —por ejemplo, recopilar un nuevo tipo de dato— te lo
                diremos en la app antes de que entre en vigor.
            </p>
        ),
    },
    {
        id: 'contact',
        heading: 'Contacto',
        body: <p>Dudas sobre tu privacidad o esta política: {mail}.</p>,
    },
];

export const SameHerePrivacy = () => {
    const lang = useSameHereLang();
    const es = lang === 'es';

    return (
        <LegalDocument
            lang={lang}
            title={es ? 'Política de privacidad' : 'Privacy Policy'}
            documentTitle={es ? 'Política de privacidad — Same Here' : 'Privacy Policy — Same Here'}
            intro={
                <p>
                    {es
                        ? 'Esta política explica qué datos trata la app Same Here para iOS, para qué y qué control tienes sobre ellos. Aplica solo a la app y a estas páginas; el resto de bennyreyes.dev tiene su propia política.'
                        : 'This policy explains what data the Same Here iOS app handles, why, and the control you have over it. It covers the app and these pages only; the rest of bennyreyes.dev has its own policy.'}
                </p>
            }
            sections={es ? ES : EN}
        />
    );
};
