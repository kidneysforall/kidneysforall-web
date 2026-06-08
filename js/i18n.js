// js/i18n.js

const translations = {
    en: {
        brand: "🤝 Kidneys For All",
        back_home: "← Back to Homepage",
        back_home_short: "← Back to Home",
        nav_home: "Home",
        nav_support: "Get Support",
        nav_volunteer: "Volunteer Registry",
        nav_resources: "Resources",
        nav_contact: "Contact & Info",
        res_visit: "Visit",
        lbl_fullname: "Full Name",
        lbl_email: "Email Address",
        lbl_phone: "Telephone Number",

        // index.html
        hero_title: "Nobody Should Navigate Kidney Disease Alone.",
        hero_subtitle: "We build community networks, match localized treatment companions, and organize grassroots advocacy loops for chronic kidney patients handling complex recovery cycles.",
        btn_need_support: "I Need Social Support",
        btn_want_volunteer: "I Want to Volunteer / Advocate",
        pillar_title: "Our Social Infrastructure Channels",
        pillar_subtitle: "Clinical treatment handles the physical disease, but patients still require robust, boots-on-the-ground support pods to manage daily logic and maintain emotional health.",
        card1_title: "Treatment Companions",
        card1_text: "We match screened local volunteers with patients to assist with medical transportation, sit with them through lengthy dialysis sessions, or provide essential presence during difficult clinical visits.",
        card2_title: "Grassroots Advocacy",
        card2_text: "Navigating donor campaigns can feel impossible when dealing with chronic fatigue. Our advocates build awareness pools and share patient stories safely to assist in finding living kidney donors.",
        card3_title: "Localized Care Pods",
        card3_text: "Organizing logistical support networks to help with post-op grocery drop-offs, prescription delivery, and house check-ins so patients can focus completely on physical recovery.",
        cta_title: "Be the Safety Net Someone Desperately Needs",
        cta_text: "Whether you can spare a few hours a week to drive a patient to local appointments, help build a digital donor search campaign, or support someone's post-op recovery timeline, there is a vital role for you inside our network.",
        cta_btn: "Register with Us Today",
        footer_about: "A community-driven platform focused entirely on providing social infrastructure, connection, and grassroots advocacy for kidney patients navigating chronic illness without a traditional localized support system.",
        footer_systems_header: "Support Systems",
        nav_support_alt: "Request a Companion",
        nav_volunteer_alt: "Volunteer Training",
        nav_resources_alt: "Educational Resources",
        nav_circle_alt: "General Form / Inquiries",

        // join-circle.html
        circle_title: "Join the Support Circle",
        circle_subtitle: "Lend your time, your voice, or your skills to ensure no kidney patient has to navigate chronic illness alone.",
        lbl_interest: "Area of Interest",
        opt_vol_comp: "Volunteer Treatment Companion",
        opt_grass_adv: "Grassroots Advocacy / Awareness Builder",
        opt_post_pod: "Localized Post-Op Support Pods",
        btn_submit_circle: "Submit Circle Registration",

        // need-support.html
        sup_title: "Request Social Support",
        sup_subtitle: "If you or a loved one are navigating kidney disease without a localized support system, let us help build your care circle.",
        lbl_need: "Primary Support Needed",
        opt_comp_trans: "Treatment Companionship / Transport",
        opt_surr_adv: "Surrogate Advocacy / Donor Campaigning",
        opt_post_op: "Post-Op Prep Circle (Recovery Assistance)",
        opt_general: "General Peer Support Network",
        btn_submit_sup: "Submit Support Request",

        // volunteer.html
        vol_title: "Join the Core Care Circle Network",
        vol_subtitle: "Your advocacy helps construct decoupled healthcare networks. Register your specialized capabilities profile to automatically trigger intersection matching algorithms for regional support circles.",
        lbl_track: "Primary Capability Track",
        opt_companion: "Patient Peer Companion",
        opt_driver: "Logistics & Transport Driver",
        opt_advocate: "Digital Community Advocate",
        btn_submit_vol: "Submit Registration",

        // resources.html
        res_title: "Educational & Patient Resources",
        res_subtitle: "Access critical national toolkits, clinical registries, and organizational frameworks to help navigate chronic illness and transplantation pathways.",
        sec_orgs: "Major National Kidney Organizations",
        sec_transplant: "Transplantation & Organ Registries",
        sec_gov: "Government & Clinical Data Centers",
        disclaimer_title: "Medical Disclaimer Notice:",
        disclaimer_text: " The third-party resources and data curated above are provided strictly for educational informational purposes. This organization does not offer medical advice, diagnostic paths, or clinical treatments. Always consult directly with a qualified healthcare provider or nephrologist regarding specific clinical care frameworks.",
        footer_desc: "A national community focused entirely on providing social infrastructure, connection, and grassroots advocacy for kidney patients navigating chronic illness without a traditional support system.",
        footer_systems: "Support Systems",
        footer_companion: "Request a Companion",
        footer_training: "Volunteer Training",
        footer_edu: "Educational Resources",
        footer_inquiries: "General Form / Inquiries"
    },
    es: {
        brand: "🤝 Riñones Para Todos",
        back_home: "← Volver a la página de inicio",
        back_home_short: "← Volver al inicio",
        nav_home: "Inicio",
        nav_support: "Obtener Apoyo",
        nav_volunteer: "Registro de Voluntarios",
        nav_resources: "Recursos",
        nav_contact: "Contacto e Información",
        res_visit: "Visitar",
        lbl_fullname: "Nombre Completo",
        lbl_email: "Correo Electrónico",
        lbl_phone: "Número de Teléfono",

        // index.html
        hero_title: "Nadie debería afrontar la enfermedad renal solo.",
        hero_subtitle: "Creamos redes comunitarias, asignamos acompañantes de tratamiento locales y organizamos circuitos de apoyo comunitario para pacientes renales crónicos que atraviesan ciclos complejos de recuperación.",
        btn_need_support: "Necesito Apoyo Social",
        btn_want_volunteer: "Quiero ser Voluntario / Apoyar",
        pillar_title: "Nuestros Canales de Infraestructura Social",
        pillar_subtitle: "El tratamiento clínico se encarga de la enfermedad física, pero los pacientes aún requieren grupos de apoyo locales y sólidos para gestionar la logística diaria y mantener la salud emocional.",
        card1_title: "Acompañantes de Tratamiento",
        card1_text: "Asignamos voluntarios locales previamente evaluados a pacientes para ayudar con el transporte médico, acompañarlos durante las largas sesiones de diálisis o brindar una presencia esencial durante las visitas clínicas difíciles.",
        card2_title: "Apoyo Comunitario",
        card2_text: "Gestionar campañas de búsqueda de donantes puede parecer imposible cuando se lidia con fatiga crónica. Nuestros colaboradores crean redes de difusión y comparten historias de pacientes de forma segura para ayudar a encontrar donantes de riñón vivos.",
        card3_title: "Grupos de Cuidado Localizados",
        card3_text: "Organizamos redes de apoyo logístico para ayudar con la entrega de compras postoperatorias, entrega de medicamentos y visitas de control en el hogar para que los pacientes puedan enfocarse completamente en su recuperación física.",
        cta_title: "Sé la red de seguridad que alguien necesita desesperadamente",
        cta_text: "Ya sea que puedas dedicar unas pocas horas a la semana para llevar a un paciente a sus citas locales, ayudar a crear una campaña digital de búsqueda de donantes o apoyar el proceso de recuperación postoperatoria de alguien, hay un papel vital para ti en nuestra red.",
        cta_btn: "Regístrate con Nosotros Hoy",
        footer_about: "Una plataforma impulsada por la comunidad y enfocada enteramente en proporcionar infraestructura social, conexión y apoyo comunitario para pacientes renales que navegan por enfermedades crónicas sin un sistema de apoyo local tradicional.",
        footer_systems_header: "Sistemas de Apoyo",
        nav_support_alt: "Solicitar un Acompañante",
        nav_volunteer_alt: "Capacitación de Voluntarios",
        nav_resources_alt: "Recursos Educativos",
        nav_circle_alt: "Formulario General / Consultas",

        // join-circle.html
        circle_title: "Únete al Círculo de Apoyo",
        circle_subtitle: "Ofrece tu tiempo, tu voz o tus habilidades para garantizar que ningún paciente renal tenga que navegar solo por una enfermedad crónica.",
        lbl_interest: "Área de Interés",
        opt_vol_comp: "Voluntario de Acompañamiento en Tratamiento",
        opt_grass_adv: "Apoyo Comunitario / Creador de Conciencia",
        opt_post_pod: "Grupos Locales de Apoyo Postoperatorio",
        btn_submit_circle: "Enviar Registro del Círculo",

        // need-support.html
        sup_title: "Solicitar Apoyo Social",
        sup_subtitle: "Si tú o un ser querido están lidiando con una enfermedad renal sin un sistema de apoyo local, déjanos ayudarte a construir tu círculo de cuidado.",
        lbl_need: "Soporte Principal Necesitado",
        opt_comp_trans: "Acompañamiento en Tratamiento / Transporte",
        opt_surr_adv: "Apoyo para Campañas de Donantes",
        opt_post_op: "Círculo de Preparación Postoperatoria (Asistencia en Recuperación)",
        opt_general: "Red General de Apoyo Entre Pares",
        btn_submit_sup: "Enviar Solicitud de Apoyo",

        // volunteer.html
        vol_title: "Únete a la Red Central de Círculos de Cuidado",
        vol_subtitle: "Tu apoyo ayuda a construir redes de salud independientes. Registra tu perfil de habilidades especializadas para activar automáticamente los algoritmos de emparejamiento para los círculos de apoyo regionales.",
        lbl_track: "Línea de Capacidad Principal",
        opt_companion: "Acompañante de Pacientes",
        opt_driver: "Conductor de Logística y Transporte",
        opt_advocate: "Defensor Comunitario Digital",
        btn_submit_vol: "Enviar Registro",

        // resources.html
        res_title: "Recursos Educativos y para Pacientes",
        res_subtitle: "Accede a herramientas nacionales críticas, registros clínicos y marcos organizacionales para ayudarte a navegar por los caminos de las enfermedades crónicas y los trasplantes.",
        sec_orgs: "Principales Organizaciones Nacionales del Riñón",
        sec_transplant: "Registros de Trasplantes y Órganos",
        sec_gov: "Centros de Datos Clínicos y Gubernamentales",
        disclaimer_title: "Aviso de Descargo de Responsabilidad Médica:",
        disclaimer_text: " Los recursos y datos de terceros seleccionados anteriormente se proporcionan estrictamente con fines informativos y educativos. Esta organización no ofrece consejos médicos, diagnósticos ni tratamientos clínicos. Consulta siempre directamente con un proveedor de atención médica calificado o nefrólogo con respecto a los marcos específicos de atención clínica.",
        footer_desc: "Una comunidad nacional enfocada enteramente en proporcionar infraestructura social, conexión y apoyo comunitario para pacientes renales que navegan por enfermedades crónicas sin un sistema de apoyo tradicional.",
        footer_systems: "Sistemas de Apoyo",
        footer_companion: "Solicitar un Acompañante",
        footer_training: "Capacitación de Voluntarios",
        footer_edu: "Recursos Educativos",
        footer_inquiries: "Formulario General / Consultas"
    }
};

function applyTranslations() {
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.innerText = translations[currentLang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', applyTranslations);