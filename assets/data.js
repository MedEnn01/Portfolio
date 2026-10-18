/* ==========================================================
   PORTFOLIO — Mohammed Ennouaim · DONNÉES (modèle 4 « GesTop »)
   ----------------------------------------------------------
   Tout le contenu du site est ici. Modifiez ce fichier puis
   rechargez la page : aucune compilation n'est nécessaire.

   Règle simple : un texte bilingue s'écrit { fr: "...", en: "..." }.
   Un texte identique dans les deux langues peut rester une chaîne.

   Ajouter un projet : copiez un bloc de "projects", changez le
   "slug" (identifiant unique, sans espace) et placez son image
   dans assets/img/projects/.
   "category" doit correspondre à un "id" de "categories".
   "featured": true  -> le projet apparaît en grand en tête.

   "certifications" : date = "AAAA-MM" (affichée automatiquement en FR/EN),
     "expires" optionnel, "id" = numéro de credential, "domain" = id de "certDomains".
   "stats" : pensez à mettre à jour les chiffres si vous ajoutez projets/certifs.

   "timeline" : kind = "job" | "internship" | "education".
   "hero.roles" : les titres qui défilent dans l'en-tête.
   "hero.orbit" : les 6 badges qui tournent autour du bouclier (icône + texte).
   Icônes disponibles (services / skills) : shield, network, check, zap,
   code, headset, server, tool, monitor, programming, keyhole, graph,
   target, rocket, layers, buildings, clipboard, widget, star.
   ========================================================== */
window.PORTFOLIO = {
  "person": {
    "name": "Mohammed Ennouaim",
    "email": "ennouaim159@gmail.com",
    "phone": "+212 6 68 48 60 31",
    "phone_href": "+212668486031",
    "linkedin": "https://www.linkedin.com/in/med-ennouaim/",
    "linkedin_label": "linkedin.com/in/med-ennouaim",
    "website": "https://www.gestop.ma",
    "website_label": "www.gestop.ma",
    "x": "https://x.com/MEnnouaim",
    "facebook": "https://www.facebook.com/Med.Ennouaim/",
    "instagram": "https://www.instagram.com/med_ennouaim/",
    "firstName": "Mohammed",
    "lastName": "Ennouaim",
    "photo": "assets/img/profile-img.jpg",
    "role": {
      "fr": "Ingénieur en Cybersécurité",
      "en": "Cybersecurity Engineer"
    },
    "focus": {
      "fr": "Audit SSI · Réseaux · GRC",
      "en": "IT Security Audit · Networks · GRC"
    },
    "location": {
      "fr": "Rabat, Maroc",
      "en": "Rabat, Morocco"
    },
    "available": true,
    "availability": {
      "fr": "Disponible pour missions freelance & postes",
      "en": "Available for freelance missions & roles"
    },
    "cv": {
      "fr": "assets/cv/CV_Mohammed_Ennouaim.pdf",
      "en": "assets/cv/CV_Mohammed_Ennouaim_EN.pdf"
    }
  },
  "meta": {
    "title": {
      "fr": "Mohammed Ennouaim | Ingénieur en Cybersécurité",
      "en": "Mohammed Ennouaim | Cybersecurity Engineer"
    },
    "description": {
      "fr": "Portfolio de Mohammed Ennouaim, ingénieur en cybersécurité à Rabat : audit SSI, réseaux, conformité ISO 27001, automatisation et développement sécurisé.",
      "en": "Portfolio of Mohammed Ennouaim, cybersecurity engineer based in Rabat: IT security audit, networks, ISO 27001 compliance, automation and secure development."
    }
  },
  "hero": {
    "orbit": [
      {
        "icon": "check",
        "label": "ISO 27001"
      },
      {
        "icon": "shield",
        "label": {
          "fr": "Audit SSI",
          "en": "IT audit"
        }
      },
      {
        "icon": "graph",
        "label": "SIEM"
      },
      {
        "icon": "keyhole",
        "label": "Firewall"
      },
      {
        "icon": "server",
        "label": "Linux"
      },
      {
        "icon": "programming",
        "label": "Python"
      }
    ],
    "roles": [
      {
        "fr": "Ingénieur en Cybersécurité",
        "en": "Cybersecurity Engineer"
      },
      {
        "fr": "Auditeur SSI",
        "en": "IT Security Auditor"
      },
      {
        "fr": "Consultant ISO 27001",
        "en": "ISO 27001 Consultant"
      },
      {
        "fr": "Développeur Full-Stack",
        "en": "Full-Stack Developer"
      }
    ],
    "pitch": {
      "fr": "Audits de sécurité, analyse de vulnérabilités et systèmes sécurisés — appuyés par quatre ans de projets freelance en développement et réseaux.",
      "en": "Security audits, vulnerability analysis and secure systems — backed by four years of freelance development and network work."
    }
  },
  "stats": [
    {
      "value": "18",
      "label": {
        "fr": "projets réalisés",
        "en": "projects delivered"
      }
    },
    {
      "value": "18",
      "label": {
        "fr": "certifications",
        "en": "certifications"
      }
    },
    {
      "value": "4+",
      "label": {
        "fr": "ans d'expérience",
        "en": "years of experience"
      }
    },
    {
      "value": "3",
      "label": {
        "fr": "langues parlées",
        "en": "languages spoken"
      }
    }
  ],
  "about": {
    "title": {
      "fr": "Ingénieur Cybersécurité & Développeur Full-Stack.",
      "en": "Cybersecurity Engineer & Full-Stack Developer."
    },
    "text": {
      "fr": "Je suis titulaire d'un Master Universitaire Spécialisé en Sécurité des Systèmes d'Information (ENSA Kénitra). Mon parcours en développement logiciel m'aide à comprendre comment les applications sont construites — et comment elles cèdent. Depuis 2022, je réalise des projets freelance pour des entreprises et des organismes publics, des plateformes web et mobiles aux outils de reconnaissance réseau, tout en intervenant sur des audits, des architectures réseau et du support IT.",
      "en": "I hold a specialised Master's degree in Information Systems Security (ENSA Kénitra). My background in software development helps me understand how applications are built — and how they break. Since 2022 I have delivered freelance projects for companies and public organisations, from web and mobile platforms to network reconnaissance tools, while working on audits, network architecture and IT support."
    },
    "goal": {
      "fr": "Je m'intéresse aux métiers de l'audit SSI, du SOC et de la gouvernance, ainsi qu'à la poursuite d'un Master 2 international en cybersécurité.",
      "en": "I am interested in IT security audit, SOC and governance roles, and in pursuing an international Master 2 in cybersecurity."
    },
    "degree": {
      "fr": "Master SSI — ENSA Kénitra",
      "en": "Master's in IS Security — ENSA Kénitra"
    }
  },
  "services": [
    {
      "icon": "shield",
      "title": {
        "fr": "Audit de sécurité",
        "en": "Security audit"
      },
      "text": {
        "fr": "Audits réseau, systèmes et applications, analyse de vulnérabilités et rapport clair avec correctifs priorisés.",
        "en": "Network, system and application audits, vulnerability analysis and a clear report with prioritised fixes."
      }
    },
    {
      "icon": "network",
      "title": {
        "fr": "Architecture réseau",
        "en": "Network architecture"
      },
      "text": {
        "fr": "Conception et sécurisation de réseaux : segmentation, règles de pare-feu, supervision et documentation.",
        "en": "Design and hardening of networks: segmentation, firewall rules, monitoring and documentation."
      }
    },
    {
      "icon": "check",
      "title": {
        "fr": "Conformité ISO 27001",
        "en": "ISO 27001 compliance"
      },
      "text": {
        "fr": "Analyse d'écarts par rapport à ISO 27001 et rédaction de la documentation SMSI attendue par les auditeurs.",
        "en": "Gap analysis against ISO 27001 and writing of the ISMS documentation your auditors expect."
      }
    },
    {
      "icon": "zap",
      "title": {
        "fr": "Automatisation sécurité",
        "en": "Security automation"
      },
      "text": {
        "fr": "Scripts Python et Bash qui automatisent les contrôles de sécurité, les inventaires et le reporting.",
        "en": "Python and Bash scripts that automate security checks, inventories and reporting."
      }
    },
    {
      "icon": "code",
      "title": {
        "fr": "Développement web & API sécurisés",
        "en": "Secure web & API development"
      },
      "text": {
        "fr": "Plateformes web et API REST avec authentification, contrôle d'accès et journalisation intégrés.",
        "en": "Web platforms and REST APIs with authentication, access control and logging built in."
      }
    },
    {
      "icon": "headset",
      "title": {
        "fr": "Support IT & réseaux",
        "en": "IT & network support"
      },
      "text": {
        "fr": "Support de niveau 2 et appui aux équipes N1 sur environnements télécom et IP : fibre, ADSL, VoIP, 4G/5G.",
        "en": "Level-2 support and assistance to the L1 teams on telecom and IP environments: fibre, ADSL, VoIP, 4G/5G."
      }
    }
  ],
  "categories": [
    {
      "id": "*",
      "label": {
        "fr": "Tous",
        "en": "All"
      }
    },
    {
      "id": "security",
      "label": {
        "fr": "Cybersécurité & Réseaux",
        "en": "Cybersecurity & Networks"
      }
    },
    {
      "id": "web",
      "label": {
        "fr": "Web & Mobile",
        "en": "Web & Mobile"
      }
    },
    {
      "id": "ai",
      "label": {
        "fr": "IA & Chatbots",
        "en": "AI & Chatbots"
      }
    },
    {
      "id": "data",
      "label": {
        "fr": "Data & Automatisation",
        "en": "Data & Automation"
      }
    }
  ],
  "projects": [
    {
      "slug": "gestop-recon",
      "category": "security",
      "year": "2025",
      "featured": true,
      "title": {
        "fr": "Plateforme de reconnaissance & supervision réseau",
        "en": "Network Reconnaissance & Monitoring Platform"
      },
      "summary": {
        "fr": "Plateforme d'audit : scans réseau, analyse de la surface d'attaque et cartographie de l'infrastructure.",
        "en": "Security-audit platform: network scans, attack-surface analysis and infrastructure mapping."
      },
      "client": {
        "fr": "GesTop Services, Rabat",
        "en": "GesTop Services, Rabat"
      },
      "period": {
        "fr": "Mars 2025 – Oct. 2025",
        "en": "Mar. 2025 – Oct. 2025"
      },
      "role": {
        "fr": "Analyste cybersécurité (freelance / PFE)",
        "en": "Cybersecurity analyst (freelance / final-year project)"
      },
      "type": {
        "fr": "Outillage d'audit de sécurité",
        "en": "Security audit tooling"
      },
      "overview": {
        "fr": "Une plateforme qui donne aux auditeurs une vision claire et à jour d'un réseau : quels équipements sont actifs, quels services ils exposent, et où se trouvent les points faibles.",
        "en": "A platform that gives auditors a clear, up-to-date picture of a network: which devices are alive, which services they expose, and where the weak points are."
      },
      "context": {
        "fr": "Un audit de sécurité démarre souvent à l'aveugle : l'inventaire du client est incomplet et la surface d'attaque réelle est inconnue. GesTop avait besoin d'un outil pour automatiser la phase de reconnaissance et transformer les résultats bruts des scans en informations lisibles par l'auditeur comme par le client.",
        "en": "Security audits often start blind: the client's inventory is incomplete and the real attack surface is unknown. GesTop needed a tool to automate the reconnaissance phase and turn raw scan results into something an auditor — and the client — can read."
      },
      "work": {
        "fr": [
          "Réalisation de scans réseau pour découvrir les équipements actifs, les ports ouverts et les services exposés.",
          "Analyse de la surface d'attaque et mise en évidence des expositions à risque.",
          "Participation à l'identification de vulnérabilités courantes sur les actifs découverts.",
          "Cartographie et visualisation de l'infrastructure réseau.",
          "Rédaction de rapports d'audit synthétisant les constats et les correctifs recommandés."
        ],
        "en": [
          "Ran network scans to discover active devices, open ports and exposed services.",
          "Analysed the attack surface and highlighted risky exposures.",
          "Helped identify common vulnerabilities on the discovered assets.",
          "Built the network mapping and visualisation of the infrastructure.",
          "Wrote audit reports summarising findings and recommended fixes."
        ]
      },
      "results": {
        "fr": [
          "Une cartographie visuelle de l'infrastructure auditée.",
          "Une phase de reconnaissance plus rapide et reproductible.",
          "Des rapports d'audit exploitables par des lecteurs techniques et non techniques."
        ],
        "en": [
          "A visual map of the audited infrastructure.",
          "Faster, repeatable reconnaissance phase for audits.",
          "Audit reports usable by technical and non-technical readers."
        ]
      },
      "stack": {
        "fr": [
          "Python",
          "Bash",
          "Linux",
          "Nmap",
          "SQLmap",
          "Wireshark",
          "MySQL",
          "Docker"
        ],
        "en": [
          "Python",
          "Bash",
          "Linux",
          "Nmap",
          "SQLmap",
          "Wireshark",
          "MySQL",
          "Docker"
        ]
      },
      "image": "assets/img/projects/gestop-recon-art.svg"
    },
    {
      "slug": "pentest-ctf",
      "category": "security",
      "year": "En cours",
      "featured": false,
      "title": {
        "fr": "Pentest & CTF – Sécurité offensive",
        "en": "Pentest & CTF – Offensive Security"
      },
      "summary": {
        "fr": "Tests d'intrusion sur HackerOne et challenges CTF sur Root-Me, Hack The Box, TryHackMe et SecDojo pour pratiquer la sécurité offensive.",
        "en": "Penetration testing on HackerOne and CTF challenges on Root-Me, Hack The Box, TryHackMe and SecDojo to practise offensive security."
      },
      "client": {
        "fr": "Pratique personnelle",
        "en": "Personal practice"
      },
      "period": {
        "fr": "En cours",
        "en": "Ongoing"
      },
      "role": {
        "fr": "Pentester / joueur CTF",
        "en": "Pentester / CTF player"
      },
      "type": {
        "fr": "Sécurité offensive",
        "en": "Offensive security"
      },
      "overview": {
        "fr": "Une pratique continue de la sécurité offensive : des tests d'intrusion sur la plateforme HackerOne et la résolution de challenges CTF sur Root-Me, Hack The Box, TryHackMe et SecDojo.",
        "en": "An ongoing offensive-security practice: penetration testing on the HackerOne platform and CTF challenge solving on Root-Me, Hack The Box, TryHackMe and SecDojo."
      },
      "context": {
        "fr": "Compléter la formation en sécurité des systèmes d'information par de la pratique réelle : tester des cibles dans un cadre autorisé et progresser sur des challenges d'attaque et de défense.",
        "en": "Complement the information-security training with real practice: test targets within an authorised scope and progress on attack and defence challenges."
      },
      "work": {
        "fr": [
          "Tests d'intrusion sur HackerOne, dans le périmètre autorisé par chaque programme.",
          "Résolution de challenges CTF sur Root-Me, Hack The Box, TryHackMe et SecDojo.",
          "Mise en pratique des techniques de reconnaissance, d'analyse de vulnérabilités et d'exploitation.",
          "Documentation des méthodes et des résultats obtenus."
        ],
        "en": [
          "Penetration testing on HackerOne, within the scope authorised by each programme.",
          "Solved CTF challenges on Root-Me, Hack The Box, TryHackMe and SecDojo.",
          "Applied reconnaissance, vulnerability analysis and exploitation techniques.",
          "Documented the methods and the results obtained."
        ]
      },
      "results": {
        "fr": [
          "Une pratique régulière du pentest sur des plateformes reconnues.",
          "Des compétences offensives qui complètent les audits réalisés en entreprise."
        ],
        "en": [
          "Regular pentest practice on well-known platforms.",
          "Offensive skills that complement the audits carried out for companies."
        ]
      },
      "stack": {
        "fr": [
          "HackerOne",
          "Root-Me",
          "Hack The Box",
          "TryHackMe",
          "SecDojo",
          "Pentest",
          "CTF"
        ],
        "en": [
          "HackerOne",
          "Root-Me",
          "Hack The Box",
          "TryHackMe",
          "SecDojo",
          "Pentest",
          "CTF"
        ]
      },
      "image": "assets/img/projects/pentest-ctf-art.svg"
    },
    {
      "slug": "optimatic-network",
      "category": "security",
      "year": "2023",
      "featured": true,
      "title": {
        "fr": "Architecture réseau sécurisée – OPTIMATIC",
        "en": "Secure Network Architecture – OPTIMATIC"
      },
      "summary": {
        "fr": "Conception et sécurisation de bout en bout du réseau d'une entreprise, alignées sur ISO 27001.",
        "en": "End-to-end design and hardening of a company network, aligned with ISO 27001."
      },
      "client": {
        "fr": "OPTIMATIC, Rabat",
        "en": "OPTIMATIC, Rabat"
      },
      "period": {
        "fr": "Fév. 2023 – Sept. 2023",
        "en": "Feb. 2023 – Sept. 2023"
      },
      "role": {
        "fr": "Stagiaire cybersécurité (membre de l'équipe)",
        "en": "Cybersecurity intern (team member)"
      },
      "type": {
        "fr": "Architecture & sécurité réseau",
        "en": "Network architecture & security"
      },
      "overview": {
        "fr": "Conception et mise en œuvre, au sein d'une équipe, de l'architecture réseau complète d'une entreprise, avec la sécurité intégrée dès le départ.",
        "en": "Design and implementation, as part of a team, of the complete network architecture of a company, with security built in from the start."
      },
      "context": {
        "fr": "L'entreprise avait besoin d'un réseau à la fois performant et sécurisé, et d'une documentation solide dans une démarche ISO 27001.",
        "en": "The company needed a network that was both efficient and secure, and documentation that would stand up to an ISO 27001 approach."
      },
      "work": {
        "fr": [
          "Conception de l'architecture réseau avec l'équipe et planification de la configuration de chaque composant (switch et routeur fédérateur Cisco, pare-feu Fortinet).",
          "Configuration des pare-feux Fortinet et segmentation du réseau (VLAN et DMZ) pour limiter les mouvements latéraux.",
          "Participation aux audits de sécurité de l'infrastructure.",
          "Application des exigences ISO 27001 et rédaction de la documentation SSI.",
          "Développement d'une application liée à la solution réseau pour automatiser la configuration et les tests de l'infrastructure."
        ],
        "en": [
          "Designed the network architecture with the team and planned the configuration of each component (Cisco switch and core router, Fortinet firewall).",
          "Configured the Fortinet firewalls and segmented the network (VLANs and DMZ) to limit lateral movement.",
          "Took part in the infrastructure's security audits.",
          "Applied ISO 27001 requirements and wrote the ISMS documentation.",
          "Developed an application tied to the network solution to automate infrastructure configuration and testing."
        ]
      },
      "results": {
        "fr": [
          "Un réseau segmenté, documenté et sécurisé.",
          "Une documentation SMSI alignée sur ISO 27001.",
          "Un outil interne qui automatise une partie des opérations réseau."
        ],
        "en": [
          "A segmented, documented and secured network.",
          "ISMS documentation aligned with ISO 27001.",
          "An internal tool that automates part of the network operations."
        ]
      },
      "stack": {
        "fr": [
          "Fortinet",
          "Cisco",
          "VLAN",
          "DMZ",
          "Windows Server",
          "Wireshark",
          "GNS3",
          "Packet Tracer",
          "Nmap",
          "ISO 27001"
        ],
        "en": [
          "Fortinet",
          "Cisco",
          "VLAN",
          "DMZ",
          "Windows Server",
          "Wireshark",
          "GNS3",
          "Packet Tracer",
          "Nmap",
          "ISO 27001"
        ]
      },
      "image": "assets/img/projects/optimatic-network-art.svg"
    },
    {
      "slug": "optimatic-website",
      "category": "web",
      "year": "2023",
      "featured": false,
      "title": {
        "fr": "OPTIMATIC – Site web & espace client professionnel",
        "en": "OPTIMATIC – Website & Professional Customer Portal"
      },
      "summary": {
        "fr": "Site web présentant l'activité de la société, avec un espace client professionnel pour envoyer des tickets selon le produit souscrit.",
        "en": "Website presenting the company's activity, with a professional customer area to submit tickets by product."
      },
      "client": {
        "fr": "OPTIMATIC, Rabat",
        "en": "OPTIMATIC, Rabat"
      },
      "period": {
        "fr": "2023",
        "en": "2023"
      },
      "role": {
        "fr": "Développeur full-stack",
        "en": "Full-stack developer"
      },
      "type": {
        "fr": "Site web + espace client",
        "en": "Website + customer portal"
      },
      "overview": {
        "fr": "Un site web qui explique ce que fait la société, avec un espace client professionnel où chaque client envoie des tickets selon le produit qu'il utilise avec la société.",
        "en": "A website that explains what the company does, with a professional customer area where each client submits tickets according to the product they use with the company."
      },
      "context": {
        "fr": "La société voulait présenter clairement son activité en ligne et recevoir les demandes de support de ses clients professionnels de façon structurée, produit par produit.",
        "en": "The company wanted to present its activity clearly online and receive support requests from its professional customers in a structured way, product by product."
      },
      "work": {
        "fr": [
          "Conception et développement du site présentant l'activité et les produits de la société.",
          "Création d'un espace client professionnel.",
          "Formulaire de tickets adapté au produit utilisé par chaque client.",
          "Mise en ligne et maintenance du site."
        ],
        "en": [
          "Designed and developed the website presenting the company's activity and products.",
          "Built a professional customer area.",
          "Ticket form tailored to the product each customer uses.",
          "Deployed and maintained the website."
        ]
      },
      "results": {
        "fr": [
          "Une vitrine claire de l'activité de la société.",
          "Des demandes de support envoyées par les clients selon le produit concerné."
        ],
        "en": [
          "A clear showcase of the company's activity.",
          "Support requests submitted by customers according to the product concerned."
        ]
      },
      "stack": {
        "fr": [
          "Django",
          "PostgreSQL",
          "Hostinger"
        ],
        "en": [
          "Django",
          "PostgreSQL",
          "Hostinger"
        ]
      },
      "image": "assets/img/projects/optimatic-website-art.svg"
    },
    {
      "slug": "mybpo-support",
      "category": "security",
      "year": "2026",
      "featured": false,
      "title": {
        "fr": "Support Help Desk N2 – Appui aux équipes N1",
        "en": "L2 Help Desk Support – Assisting the L1 Teams"
      },
      "summary": {
        "fr": "Support de niveau 2 pour les clients professionnels de Paritel France : appui aux équipes N1 et résolution des incidents réseau escaladés.",
        "en": "Level-2 support for Paritel France's business customers: assisting the L1 teams and resolving escalated network incidents."
      },
      "client": {
        "fr": "My BPO, Rabat (client : Paritel France)",
        "en": "My BPO, Rabat (client: Paritel France)"
      },
      "period": {
        "fr": "Juin 2026 – Présent",
        "en": "June 2026 – Present"
      },
      "role": {
        "fr": "Technicien Help Desk N2",
        "en": "Help Desk Technician L2"
      },
      "type": {
        "fr": "Support télécom & réseaux",
        "en": "Telecom & network support"
      },
      "overview": {
        "fr": "Au sein de My BPO, j'assure le support de niveau 2 sur des environnements télécom et réseaux pour les clients professionnels de l'opérateur français Paritel. J'aide les équipes N1 : chaque niveau a son propre travail et son propre périmètre, et j'interviens en renfort sur les cas qui dépassent le leur.",
        "en": "At My BPO, I provide level-2 support on telecom and network environments for the business customers of the French operator Paritel. I assist the L1 teams: each level has its own job and scope, and I step in on the cases that go beyond theirs."
      },
      "context": {
        "fr": "Les équipes N1 traitent les demandes courantes. Lorsqu'un incident réseau devient plus complexe, il est escaladé vers le niveau 2, qui l'analyse en profondeur tout en laissant chaque équipe dans son périmètre.",
        "en": "The L1 teams handle day-to-day requests. When a network incident becomes more complex, it is escalated to level 2, which analyses it in depth while letting each team stay within its own scope."
      },
      "work": {
        "fr": [
          "Appui aux équipes N1 : chacune garde son travail et son périmètre, et j'interviens uniquement sur les cas qui nécessitent un second niveau.",
          "Diagnostic avancé et résolution des incidents escaladés sur les environnements Télécom, IP et Réseaux (Fibre, ADSL, VoIP, 4G/5G).",
          "Accompagnement des techniciens N1 dans leurs tâches.",
          "Suivi de l'incident, de la qualification de l'anomalie à la clôture du ticket."
        ],
        "en": [
          "Support for the L1 teams: each keeps its own job and scope, and I step in only on the cases that need a second level.",
          "Advanced diagnosis and resolution of escalated incidents on telecom, IP and network environments (fibre, ADSL, VoIP, 4G/5G).",
          "Guidance for L1 technicians in their tasks.",
          "Incident follow-up, from qualifying the issue to closing the ticket."
        ]
      },
      "results": {
        "fr": [
          "Des incidents escaladés diagnostiqués et résolus.",
          "Des équipes N1 accompagnées, chacune gardant son périmètre de travail."
        ],
        "en": [
          "Escalated incidents diagnosed and resolved.",
          "L1 teams supported, each keeping its own scope of work."
        ]
      },
      "stack": {
        "fr": [
          "Fibre",
          "ADSL",
          "VoIP",
          "4G/5G",
          "TCP/IP",
          "Diagnostic réseau"
        ],
        "en": [
          "Fibre",
          "ADSL",
          "VoIP",
          "4G/5G",
          "TCP/IP",
          "Network diagnosis"
        ]
      },
      "image": "assets/img/projects/mybpo-support-art.svg"
    },
    {
      "slug": "sms-platform",
      "category": "security",
      "year": "2022–2025",
      "featured": false,
      "title": {
        "fr": "Plateforme d'envoi de SMS & d'alertes de sécurité",
        "en": "SMS Sending & Security Alerting Platform"
      },
      "summary": {
        "fr": "Envoi de SMS à une personne, un département ou tout le personnel, et alertes sur attaque, équipement déconnecté ou manipulation non autorisée.",
        "en": "SMS to one person, a department or all staff, plus alerts on attacks, disconnected equipment or unauthorised manipulation."
      },
      "client": {
        "fr": "Client freelance",
        "en": "Freelance client"
      },
      "period": {
        "fr": "2022 – 2025",
        "en": "2022 – 2025"
      },
      "role": {
        "fr": "Développeur full-stack",
        "en": "Full-stack developer"
      },
      "type": {
        "fr": "Plateforme web",
        "en": "Web platform"
      },
      "overview": {
        "fr": "Une plateforme web pour envoyer des SMS à une personne, à un département ou à l'ensemble du personnel afin de diffuser les actualités, et pour envoyer des alertes en cas d'attaque, d'équipement déconnecté ou de manipulation non autorisée par le personnel.",
        "en": "A web platform to send SMS to one person, a department or all staff to share news, and to send alerts when there is an attack, a disconnected piece of equipment or an unauthorised manipulation by staff."
      },
      "context": {
        "fr": "Le client avait besoin d'un seul outil pour deux usages : informer le personnel au quotidien, et s'assurer que les bonnes personnes sont prévenues immédiatement en cas d'incident de sécurité ou d'exploitation.",
        "en": "The client needed one tool for two jobs: keeping staff informed day to day, and making sure the right people are notified immediately when a security or operational incident occurs."
      },
      "work": {
        "fr": [
          "Développement d'une interface intuitive pour envoyer des SMS instantanément ou programmer des envois.",
          "Envoi ciblé : à une personne, à un département ou à l'ensemble du personnel, pour diffuser les actualités.",
          "Gestion des contacts et de répertoires de messages prédéfinis pour les envois groupés.",
          "Alertes SMS automatiques en cas d'attaque, d'équipement déconnecté ou de manipulation non autorisée, détectés par des scripts exécutés toutes les 10 secondes et par des outils de supervision.",
          "Intégration d'un modem GSM physique avec la bibliothèque Gammu et des scripts personnalisés, avec suivi de son état et de sa disponibilité.",
          "Envoi et réception par e-mail (SMTP/POP3) et tâches asynchrones avec Celery.",
          "Outils de suivi et de reporting : taux de délivrance, statistiques d'usage et rapports exportables."
        ],
        "en": [
          "Built an intuitive interface to send SMS instantly or schedule future sends.",
          "Targeted sending: to one person, a department or all staff, to share news.",
          "Managed contacts and predefined message directories for bulk sends.",
          "Automatic SMS alerts for attacks, disconnected equipment and unauthorised manipulation, detected by scripts running every 10 seconds and by monitoring tools.",
          "Integrated a physical GSM modem using the Gammu library and custom scripts, monitoring its status and availability.",
          "E-mail sending and receiving (SMTP/POP3) and asynchronous tasks with Celery.",
          "Added tracking and reporting: delivery rates, usage statistics and exportable reports."
        ]
      },
      "results": {
        "fr": [
          "Information du personnel par SMS, ciblée par personne, département ou ensemble des équipes.",
          "Responsables alertés par SMS dès qu'une attaque, une déconnexion d'équipement ou une manipulation non autorisée est détectée.",
          "Visibilité sur la santé des modems et les performances d'envoi."
        ],
        "en": [
          "Staff informed by SMS, targeted by person, department or the whole organisation.",
          "Managers alerted by SMS as soon as an attack, an equipment disconnection or an unauthorised manipulation is detected.",
          "Visibility on modem health and delivery performance."
        ]
      },
      "stack": {
        "fr": [
          "Angular",
          "Django",
          "MySQL",
          "Celery",
          "Gammu",
          "Modem GSM",
          "SMTP / POP3",
          "Serveur local"
        ],
        "en": [
          "Angular",
          "Django",
          "MySQL",
          "Celery",
          "Gammu",
          "GSM modem",
          "SMTP / POP3",
          "Local server"
        ]
      },
      "image": "assets/img/projects/sms-platform-art.svg"
    },
    {
      "slug": "taxi-nantes",
      "category": "web",
      "year": "2022–2025",
      "featured": true,
      "title": {
        "fr": "Taxi Sur Nantes – Site & application de réservation",
        "en": "Taxi Sur Nantes – Booking Website & Mobile App"
      },
      "summary": {
        "fr": "Site web et application mobile de réservation de taxis avec suivi en temps réel, tableau de bord dispatcher et tickets support.",
        "en": "Taxi booking website and mobile app with real-time tracking, dispatcher dashboard and support tickets."
      },
      "client": {
        "fr": "Société de taxis, Nantes (France)",
        "en": "Taxi company, Nantes (France)"
      },
      "period": {
        "fr": "2022 – 2025",
        "en": "2022 – 2025"
      },
      "role": {
        "fr": "Développeur full-stack & mobile",
        "en": "Full-stack & mobile developer"
      },
      "type": {
        "fr": "Site web + application mobile",
        "en": "Website + mobile app"
      },
      "overview": {
        "fr": "Un site web et une application mobile qui permettent aux clients de réserver un taxi en quelques clics, de suivre leur chauffeur en temps réel et d'obtenir de l'aide si besoin.",
        "en": "A website and a mobile application that let customers book a taxi in a few taps, follow their driver in real time and get support when needed."
      },
      "context": {
        "fr": "Le client souhaitait passer les réservations en ligne et offrir aux dispatchers un espace unique pour gérer chaque course, chauffeur et demande client.",
        "en": "The client wanted to move bookings online and give dispatchers a single place to manage every ride, driver and customer request."
      },
      "work": {
        "fr": [
          "Développement du site et de l'application mobile de réservation avec disponibilité des taxis en temps réel et plusieurs types de courses.",
          "Mise en place du suivi en temps réel pour que le client suive le taxi qui lui est attribué.",
          "Création d'un tableau de bord dispatcher : gestion des réservations, suivi des courses actives, disponibilité des chauffeurs et optimisation des itinéraires.",
          "Intégration d'un système de tickets pour que les clients signalent un problème et obtiennent une réponse rapide."
        ],
        "en": [
          "Developed the booking website and mobile app with real-time taxi availability and several ride types.",
          "Implemented real-time tracking so customers can follow their assigned taxi.",
          "Built a dispatcher dashboard to manage bookings, follow active trips, monitor driver availability and optimise routes.",
          "Integrated a support-ticket system so customers can report issues and get a quick answer."
        ]
      },
      "results": {
        "fr": [
          "Réservation en ligne disponible sur web et mobile.",
          "Plus de transparence pour les clients grâce au suivi en direct.",
          "Opérations centralisées pour les dispatchers."
        ],
        "en": [
          "Online booking available on web and mobile.",
          "More transparency for customers thanks to live tracking.",
          "Centralised operations for dispatchers."
        ]
      },
      "stack": {
        "fr": [
          "Angular",
          "React Native",
          "Django",
          "MySQL",
          "Google Maps",
          "VPS IONOS"
        ],
        "en": [
          "Angular",
          "React Native",
          "Django",
          "MySQL",
          "Google Maps",
          "VPS IONOS"
        ]
      },
      "image": "assets/img/projects/taxi-nantes-art.svg"
    },
    {
      "slug": "smart-agriculture",
      "category": "web",
      "year": "2022",
      "featured": false,
      "title": {
        "fr": "Agriculture connectée – Suivi de l'humidité et de la fertilité du sol",
        "en": "Smart Agriculture – Soil Moisture & Fertility Monitoring"
      },
      "summary": {
        "fr": "Interface web et application mobile pour visualiser l'humidité du sol et son enrichissement en matières premières et en eau, alimentées par des cartes électroniques conçues avec NETMAR.",
        "en": "Web interface and mobile app to visualise soil moisture and how well the soil is enriched with raw materials and water, fed by electronic boards designed with NETMAR."
      },
      "client": {
        "fr": "NETMAR, Rabat (collaboration)",
        "en": "NETMAR, Rabat (collaboration)"
      },
      "period": {
        "fr": "2022",
        "en": "2022"
      },
      "role": {
        "fr": "Développeur web, mobile & systèmes embarqués",
        "en": "Web, mobile & embedded-systems developer"
      },
      "type": {
        "fr": "IoT, web & mobile",
        "en": "IoT, web & mobile"
      },
      "overview": {
        "fr": "Une interface qui permet de visualiser le taux d'humidité de la terre et de savoir si le sol est bien enrichi en matières premières et en eau. Les cartes électroniques de mesure sont créées par nous, en collaboration avec la société NETMAR : chaque carte se connecte à un Raspberry qui envoie les données vers le cloud.",
        "en": "An interface to visualise the soil moisture level and check whether the soil is well enriched with raw materials and water. The electronic measurement boards are designed by us in collaboration with the company NETMAR: each board connects to a Raspberry that sends the data to the cloud."
      },
      "context": {
        "fr": "Il fallait suivre à distance l'état du sol d'une exploitation agricole à partir de mesures réelles prises sur le terrain, et les rendre lisibles par l'exploitant.",
        "en": "The goal was to monitor the soil of a farm remotely from real field measurements and make them readable for the farmer."
      },
      "work": {
        "fr": [
          "Création, en collaboration avec NETMAR, de la carte électronique de mesure demandée par la société, avec des capteurs de sol.",
          "Programmation en Python du Raspberry, qui envoie les données en HTTP vers le cloud (AWS).",
          "Développement de l'interface web (Laravel 10) et d'une application mobile Android (Java) pour visualiser l'humidité du sol et son niveau d'enrichissement en matières premières et en eau.",
          "Stockage des données dans MongoDB et déploiement de la solution sur un VPS OVH."
        ],
        "en": [
          "Designed, in collaboration with NETMAR, the electronic measurement board requested by the company, with soil sensors.",
          "Programmed the Raspberry in Python to send the data over HTTP to the cloud (AWS).",
          "Developed the web interface (Laravel 10) and an Android mobile app (Java) to visualise soil moisture and its enrichment level in raw materials and water.",
          "Stored the data in MongoDB and deployed the solution on an OVH VPS."
        ]
      },
      "results": {
        "fr": [
          "Un suivi à distance de l'humidité du sol.",
          "Des mesures de terrain remontées vers le cloud et consultables dans une interface.",
          "Une solution déployée en conditions réelles.",
          "Une application mobile Android en complément de l'interface web."
        ],
        "en": [
          "Remote monitoring of soil moisture.",
          "Field measurements sent to the cloud and viewable in an interface.",
          "A solution deployed in real conditions.",
          "An Android mobile app alongside the web interface."
        ]
      },
      "stack": {
        "fr": [
          "Laravel 10",
          "Python",
          "Android (Java)",
          "MongoDB",
          "AWS",
          "HTTP",
          "Raspberry Pi",
          "Capteurs de sol",
          "VPS OVH"
        ],
        "en": [
          "Laravel 10",
          "Python",
          "Android (Java)",
          "MongoDB",
          "AWS",
          "HTTP",
          "Raspberry Pi",
          "Soil sensors",
          "OVH VPS"
        ]
      },
      "image": "assets/img/projects/smart-agriculture-art.svg"
    },
    {
      "slug": "asset-management",
      "category": "web",
      "year": "2022–2025",
      "featured": false,
      "title": {
        "fr": "Système de gestion des actifs avec QR codes",
        "en": "Asset Management System with QR Codes"
      },
      "summary": {
        "fr": "Suivi des inventaires : QR code par produit, affectation à une personne avec documents de prise en charge, vérification de l'emplacement et du statut (perdu, en maintenance, hors service).",
        "en": "Inventory tracking: a QR code per product, assignment to a person with handover documents, location checks and status (lost, in maintenance, out of service)."
      },
      "client": {
        "fr": "Client freelance (organisation)",
        "en": "Freelance client (organisation)"
      },
      "period": {
        "fr": "2022 – 2025",
        "en": "2022 – 2025"
      },
      "role": {
        "fr": "Développeur full-stack & formateur",
        "en": "Full-stack developer & trainer"
      },
      "type": {
        "fr": "Application web métier",
        "en": "Business web application"
      },
      "overview": {
        "fr": "Une application web de suivi des inventaires. Elle génère un QR code pour chaque produit, permet de l'affecter à une personne avec la génération des documents de prise en charge, et indique si le produit est au bon endroit, perdu, en maintenance ou hors service.",
        "en": "A web application for inventory tracking. It generates a QR code for each product, lets you assign it to a person with the handover documents generated, and shows whether the product is in the right place, lost, in maintenance or out of service."
      },
      "context": {
        "fr": "Les actifs étaient suivis dans des fichiers dispersés, ce qui rendait les audits, la planification de la maintenance et les décisions de remplacement lents et peu fiables.",
        "en": "Assets were tracked in scattered files, which made audits, maintenance planning and replacement decisions slow and unreliable."
      },
      "work": {
        "fr": [
          "Création d'un système d'inventaire pour suivre la disponibilité, l'emplacement et l'état des actifs.",
          "Génération d'un QR code pour chaque produit afin de l'identifier rapidement.",
          "Affectation d'un produit à une personne, avec génération automatique des documents de prise en charge.",
          "Vérification de l'emplacement : savoir si le produit est au bon endroit.",
          "Suivi du statut de chaque produit : en place, perdu, en maintenance ou hors service.",
          "Suivi du cycle de vie avec plannings de maintenance et amortissement.",
          "Analyses de données et rapports de conformité pour les parties prenantes.",
          "Formation des utilisateurs pour garantir l'adoption du nouveau système.",
          "Développement avec Laravel 10 et MySQL, déployé sur le serveur local de l'entreprise."
        ],
        "en": [
          "Built an inventory system to monitor asset availability, location and condition.",
          "Generated a QR code for each product for quick identification.",
          "Assigned products to a person, with handover documents generated automatically.",
          "Location check: knowing whether a product is in the right place.",
          "Status tracking for each product: in place, lost, in maintenance or out of service.",
          "Lifecycle tracking with maintenance schedules and depreciation.",
          "Analytics and compliance reports for stakeholders.",
          "Trained staff on the new system to make sure it was adopted.",
          "Developed with Laravel 10 and MySQL, deployed on the company's local server."
        ]
      },
      "results": {
        "fr": [
          "Un inventaire unique et fiable, avec un QR code par produit.",
          "Chaque produit affecté à une personne, avec ses documents de prise en charge.",
          "Une vue claire des produits mal placés, perdus, en maintenance ou hors service.",
          "Des rapports prêts à l'emploi pour les audits et la direction."
        ],
        "en": [
          "A single, reliable inventory with a QR code per product.",
          "Every product assigned to a person, with its handover documents.",
          "A clear view of misplaced, lost, in-maintenance or out-of-service products.",
          "Ready-to-use reports for audits and management."
        ]
      },
      "stack": {
        "fr": [
          "Laravel 10",
          "MySQL",
          "QR codes",
          "Serveur local"
        ],
        "en": [
          "Laravel 10",
          "MySQL",
          "QR codes",
          "Local server"
        ]
      },
      "image": "assets/img/projects/asset-management-art.svg"
    },
    {
      "slug": "awnibot",
      "category": "ai",
      "year": "2025",
      "featured": false,
      "title": {
        "fr": "AwnIbot – Assistant conversationnel pour CDG",
        "en": "AwnIbot – Conversational Assistant for CDG"
      },
      "summary": {
        "fr": "Assistant conversationnel qui informe les employés et les usagers sur l'état de leur dossier, les aide à le finaliser et les accompagne selon le cas.",
        "en": "Conversational assistant that tells employees and users where their file stands, helps them complete it and assists them case by case."
      },
      "client": {
        "fr": "CDG",
        "en": "CDG"
      },
      "period": {
        "fr": "2025",
        "en": "2025"
      },
      "role": {
        "fr": "Développeur",
        "en": "Developer"
      },
      "type": {
        "fr": "Chatbot",
        "en": "Chatbot"
      },
      "overview": {
        "fr": "AwnIbot (de « awn », l'aide) est un assistant conversationnel conçu pour aider les employés et les usagers à connaître la situation de leur dossier (accidents du travail et autres types de dossiers), à le finaliser et à être accompagnés selon leur cas.",
        "en": "AwnIbot (from “awn”, help) is a conversational assistant designed to help employees and users check the status of their file (work accidents and other file types), complete it and get assistance depending on their case."
      },
      "context": {
        "fr": "CDG souhaitait offrir à ses employés et usagers un moyen simple de suivre l'avancement de leurs dossiers et d'être guidés pour les compléter.",
        "en": "CDG wanted to give its employees and users a simple way to follow the progress of their files and be guided to complete them."
      },
      "work": {
        "fr": [
          "Analyse des besoins et des types de dossiers à couvrir (dont les accidents du travail).",
          "Conception des scénarios de conversation selon les cas.",
          "Consultation de la situation du dossier directement dans l'assistant.",
          "Accompagnement de l'utilisateur pour finaliser son dossier et assistance adaptée à chaque cas.",
          "Développement du backend (Django, LLM) et d'un site web Angular relié au backend.",
          "Tests, mise en production et ajustement selon l'usage réel."
        ],
        "en": [
          "Analysed the needs and the file types to cover (including work accidents).",
          "Designed conversation scenarios by case.",
          "Let users check their file status directly in the assistant.",
          "Guided users to complete their file and provided assistance adapted to each case.",
          "Developed the backend (Django, LLM) and an Angular website connected to it.",
          "Tested, deployed and adjusted based on real use."
        ]
      },
      "results": {
        "fr": [
          "Des employés et usagers informés de la situation de leur dossier.",
          "Un accompagnement pour finaliser les dossiers."
        ],
        "en": [
          "Employees and users informed about the status of their file.",
          "Guidance to help complete files."
        ]
      },
      "stack": {
        "fr": [
          "LLM",
          "Django",
          "Angular",
          "MySQL",
          "Celery",
          "Serveur local"
        ],
        "en": [
          "LLM",
          "Django",
          "Angular",
          "MySQL",
          "Celery",
          "Local server"
        ]
      },
      "image": "assets/img/projects/awnibot-art.svg"
    },
    {
      "slug": "chatbot",
      "category": "ai",
      "year": "2026",
      "featured": false,
      "title": {
        "fr": "ChatBot de support technique client",
        "en": "Technical Customer-Support ChatBot"
      },
      "summary": {
        "fr": "Chatbot qui aide les clients à résoudre leurs problèmes techniques, demande des photos des équipements, consulte la configuration à distance et passe la main à un agent si besoin.",
        "en": "Chatbot that helps customers solve technical problems, asks for photos of the equipment, checks configuration remotely and hands over to an agent when needed."
      },
      "client": {
        "fr": "Client freelance",
        "en": "Freelance client"
      },
      "period": {
        "fr": "2026",
        "en": "2026"
      },
      "role": {
        "fr": "Développeur",
        "en": "Developer"
      },
      "type": {
        "fr": "Chatbot",
        "en": "Chatbot"
      },
      "overview": {
        "fr": "Un chatbot de support client qui aide à résoudre des problèmes techniques : il demande des images des équipements, indique les étapes à suivre, accède à distance à la configuration et aux informations, et redirige vers un agent humain pour les autres étapes.",
        "en": "A customer-support chatbot that helps solve technical problems: it asks for pictures of the equipment, gives the steps to follow, remotely accesses the configuration and information, and redirects to a human agent for any further steps."
      },
      "context": {
        "fr": "Le client recevait de nombreuses demandes techniques et voulait diagnostiquer plus vite, tout en gardant un agent humain pour les cas qui dépassent le chatbot.",
        "en": "The client received many technical requests and wanted to diagnose faster while keeping a human agent for the cases beyond the chatbot."
      },
      "work": {
        "fr": [
          "Identification des problèmes techniques récurrents à traiter.",
          "Conception des parcours de dialogue : demande d'images des équipements puis étapes de résolution à suivre.",
          "Accès à distance, via API, aux configurations et informations de l'équipement pour affiner le diagnostic.",
          "Redirection vers un agent humain par chat lorsque la résolution nécessite d'autres étapes.",
          "Suivi des conversations après le lancement et amélioration des réponses."
        ],
        "en": [
          "Identified the recurring technical problems to handle.",
          "Designed dialogue flows: requesting pictures of the equipment, then the resolution steps to follow.",
          "Remote access, through an API, to the equipment's configuration and information to refine the diagnosis.",
          "Redirection to a human agent through chat when resolution requires further steps.",
          "Monitored conversations after launch and improved the answers."
        ]
      },
      "results": {
        "fr": [
          "Des clients guidés pas à pas pour résoudre leurs problèmes techniques.",
          "Un agent humain mobilisé uniquement lorsque le chatbot ne suffit plus."
        ],
        "en": [
          "Customers guided step by step to solve their technical problems.",
          "A human agent engaged only when the chatbot is not enough."
        ]
      },
      "stack": {
        "fr": [
          "LLM",
          "Django",
          "MongoDB",
          "Celery",
          "API",
          "Chat en direct",
          "Serveur local"
        ],
        "en": [
          "LLM",
          "Django",
          "MongoDB",
          "Celery",
          "API",
          "Live chat",
          "Local server"
        ]
      },
      "image": "assets/img/projects/chatbot-art.svg"
    },
    {
      "slug": "n8n-automation",
      "category": "data",
      "year": "2025",
      "featured": false,
      "title": {
        "fr": "Automatisation des processus métier avec n8n et agents IA locaux",
        "en": "Business Process Automation with n8n & Local AI Agents"
      },
      "summary": {
        "fr": "Workflows n8n couplés à des agents IA locaux et à des applications internes pour supprimer les tâches manuelles et alerter les équipes.",
        "en": "n8n workflows combined with local AI agents and internal applications to remove manual tasks and alert teams."
      },
      "client": {
        "fr": "Client freelance",
        "en": "Freelance client"
      },
      "period": {
        "fr": "2025",
        "en": "2025"
      },
      "role": {
        "fr": "Développeur automatisation",
        "en": "Automation developer"
      },
      "type": {
        "fr": "Automatisation & intégration",
        "en": "Automation & integration"
      },
      "overview": {
        "fr": "Une plateforme d'automatisation basée sur n8n, associée à des agents IA exécutés en local et connectée aux applications internes, qui prend en charge les tâches répétitives : collecte des demandes, mise à jour des données, notifications et rapports.",
        "en": "An n8n-based automation platform, paired with locally-run AI agents and connected to internal applications, that handles repetitive work: collecting requests, updating data, sending notifications and reports."
      },
      "context": {
        "fr": "Le client perdait un temps important à recopier des informations entre plusieurs outils (emails, formulaires, tableurs) et réagissait trop tard aux demandes et incidents. L'objectif était de fiabiliser ces flux et de libérer du temps aux équipes.",
        "en": "The client was losing significant time copying information between tools (email, forms, spreadsheets) and reacted too late to requests and incidents. The goal was to make these flows reliable and free up the team's time."
      },
      "work": {
        "fr": [
          "Analyse des processus existants et identification des tâches à automatiser.",
          "Conception de workflows n8n (déclencheurs webhook, planifiés et sur événement).",
          "Mise en place d'agents IA locaux avec une bibliothèque personnalisée qui combine plusieurs agents (Everything Claude Code), intégrés aux workflows n8n.",
          "Intégration de l'API Telegram, de la messagerie e-mail et des applications internes.",
          "Notifications et alertes automatiques (e-mail, Telegram) avec gestion des erreurs et relances.",
          "Sécurisation des identifiants, journalisation des exécutions et documentation des workflows."
        ],
        "en": [
          "Analysed the existing processes and identified the tasks worth automating.",
          "Designed n8n workflows (webhook, scheduled and event-based triggers).",
          "Set up local AI agents using a custom library that combines several agents (Everything Claude Code), embedded in the n8n workflows.",
          "Integrated the Telegram API, e-mail and internal applications.",
          "Automatic notifications and alerts (e-mail, Telegram) with error handling and retries.",
          "Secured credentials, logged executions and documented every workflow."
        ]
      },
      "results": {
        "fr": [
          "Des tâches manuelles répétitives supprimées et moins d'erreurs de saisie.",
          "Des agents IA locaux intégrés aux applications internes.",
          "Des équipes alertées en temps réel au lieu de vérifier manuellement.",
          "Des workflows documentés et faciles à faire évoluer."
        ],
        "en": [
          "Repetitive manual tasks removed and fewer data-entry errors.",
          "Local AI agents integrated with internal applications.",
          "Teams alerted in real time instead of checking manually.",
          "Documented workflows that are easy to extend."
        ]
      },
      "stack": {
        "fr": [
          "n8n",
          "Python",
          "API Telegram",
          "E-mail",
          "MySQL",
          "Agents IA",
          "Serveur"
        ],
        "en": [
          "n8n",
          "Python",
          "Telegram API",
          "E-mail",
          "MySQL",
          "AI agents",
          "Server"
        ]
      },
      "image": "assets/img/projects/n8n-automation-art.svg"
    },
    {
      "slug": "powerbi-dashboard",
      "category": "data",
      "year": "2025",
      "featured": false,
      "title": {
        "fr": "Tableaux de bord Power BI pour un organisme marocain",
        "en": "Power BI Dashboards for a Moroccan Organisation"
      },
      "summary": {
        "fr": "Collecte, nettoyage et modélisation des données d'un organisme marocain, restituées dans des tableaux de bord Power BI interactifs pour le pilotage.",
        "en": "Collecting, cleaning and modelling a Moroccan organisation's data, delivered as interactive Power BI dashboards for decision-making."
      },
      "client": {
        "fr": "Organisme marocain",
        "en": "Moroccan organisation"
      },
      "period": {
        "fr": "2025",
        "en": "2025"
      },
      "role": {
        "fr": "Analyste data / BI",
        "en": "Data / BI analyst"
      },
      "type": {
        "fr": "Business Intelligence",
        "en": "Business Intelligence"
      },
      "overview": {
        "fr": "Une solution de visualisation qui transforme des données dispersées en indicateurs clairs, consultables par les responsables en quelques clics.",
        "en": "A visualisation solution that turns scattered data into clear indicators that managers can explore in a few clicks."
      },
      "context": {
        "fr": "Les données de l'organisme étaient réparties dans plusieurs fichiers et sources, ce qui rendait le suivi des activités long et peu fiable. Il fallait une vue consolidée et à jour pour suivre les indicateurs et appuyer les décisions.",
        "en": "The organisation's data was spread across several files and sources, making activity tracking slow and unreliable. A consolidated, up-to-date view was needed to follow indicators and support decisions."
      },
      "work": {
        "fr": [
          "Recueil des besoins et définition des indicateurs clés (KPI) avec les responsables.",
          "Connexion aux sources (Excel, SQL Server) et nettoyage des données avec Power Query.",
          "Construction d'un modèle de données en étoile et des mesures DAX.",
          "Conception de tableaux de bord interactifs : filtres par période, région et activité, cartes et tendances.",
          "Publication sur Power BI Service, mise en place de l'actualisation des données et accompagnement des utilisateurs."
        ],
        "en": [
          "Gathered requirements and defined the key indicators (KPIs) with managers.",
          "Connected the sources (Excel, SQL Server) and cleaned the data with Power Query.",
          "Built a star-schema data model and DAX measures.",
          "Designed interactive dashboards: filters by period, region and activity, maps and trends.",
          "Published on Power BI Service, set up data refresh and supported the users."
        ]
      },
      "results": {
        "fr": [
          "Une vue unique et à jour des indicateurs de l'organisme.",
          "Des rapports produits en quelques minutes au lieu de plusieurs jours.",
          "Des décisions appuyées sur des données fiables et partagées."
        ],
        "en": [
          "A single, up-to-date view of the organisation's indicators.",
          "Reports produced in minutes instead of days.",
          "Decisions based on reliable, shared data."
        ]
      },
      "stack": {
        "fr": [
          "Power BI",
          "Power Query",
          "DAX",
          "SQL Server",
          "Power BI Service",
          "Power Apps",
          "Power Automate",
          "Microsoft Lists",
          "Planner"
        ],
        "en": [
          "Power BI",
          "Power Query",
          "DAX",
          "SQL Server",
          "Power BI Service",
          "Power Apps",
          "Power Automate",
          "Microsoft Lists",
          "Planner"
        ]
      },
      "image": "assets/img/projects/powerbi-dashboard-art.svg"
    },
    {
      "slug": "evidence",
      "category": "security",
      "year": "2022–2025",
      "featured": false,
      "title": {
        "fr": "Evidence – Plateforme de gestion de preuves numériques",
        "en": "Evidence – Digital Evidence Management Platform"
      },
      "summary": {
        "fr": "Plateforme de gestion de preuves numériques alignée sur ISO 27001 / 27005, PCI DSS et la DNSSI (DGSSI, Maroc).",
        "en": "Digital evidence management platform aligned with ISO 27001 / 27005, PCI DSS and the DNSSI (DGSSI, Morocco)."
      },
      "client": {
        "fr": "Client freelance",
        "en": "Freelance client"
      },
      "period": {
        "fr": "2022 – 2025",
        "en": "2022 – 2025"
      },
      "role": {
        "fr": "Développeur full-stack (sécurité & conformité)",
        "en": "Full-stack developer (security & compliance)"
      },
      "type": {
        "fr": "Plateforme sécurisée & conformité",
        "en": "Secure platform & compliance"
      },
      "overview": {
        "fr": "Evidence est une plateforme de gestion de preuves numériques que j'ai créée en l'alignant sur les référentiels ISO 27001 / ISO 27005, PCI DSS et la DNSSI (Directive Nationale de la Sécurité des Systèmes d'Information, DGSSI – Maroc).",
        "en": "Evidence is a digital evidence management platform I created and aligned with ISO 27001 / ISO 27005, PCI DSS and the DNSSI (Morocco’s National Information Systems Security Directive, DGSSI)."
      },
      "context": {
        "fr": "L'alignement d'une plateforme de gestion de preuves numériques sur ISO 27001 / ISO 27005, PCI DSS (Payment Card Industry Data Security Standard) et la DNSSI impose des exigences strictes en matière de gouvernance des risques, de contrôles techniques et de conformité réglementaire.",
        "en": "Aligning a digital evidence management platform with ISO 27001 / ISO 27005, PCI DSS (Payment Card Industry Data Security Standard) and the DNSSI imposes strict requirements on risk governance, technical controls and regulatory compliance."
      },
      "work": {
        "fr": [
          "Création de la plateforme de gestion de preuves numériques, de l'analyse du besoin à la mise en production.",
          "Alignement de la plateforme sur ISO 27001 / ISO 27005, PCI DSS et la DNSSI (DGSSI, Maroc).",
          "Prise en compte des exigences de gouvernance des risques, de contrôles techniques et de conformité réglementaire.",
          "Développement avec React et Django : authentification multifacteur (MFA), contrôle d'accès, chiffrement, hachage des preuves et journalisation.",
          "Déploiement sur serveur local et maintenance de l'application."
        ],
        "en": [
          "Created the digital evidence management platform, from needs analysis to production.",
          "Aligned the platform with ISO 27001 / ISO 27005, PCI DSS and the DNSSI (DGSSI, Morocco).",
          "Addressed requirements on risk governance, technical controls and regulatory compliance.",
          "Developed with React and Django: multi-factor authentication (MFA), access control, encryption, evidence hashing and logging.",
          "Deployed on a local server and maintained the application."
        ]
      },
      "results": {
        "fr": [
          "Une plateforme de gestion de preuves numériques alignée sur ISO 27001 / 27005, PCI DSS et la DNSSI.",
          "Une application centralisée et sécurisée, avec contrôle d'accès et journalisation."
        ],
        "en": [
          "A digital evidence platform aligned with ISO 27001 / 27005, PCI DSS and the DNSSI.",
          "A centralised, secure application with access control and logging."
        ]
      },
      "stack": {
        "fr": [
          "React",
          "Django",
          "MySQL",
          "Chiffrement",
          "Hachage des preuves",
          "MFA",
          "Journalisation",
          "ISO 27001 / 27005",
          "PCI DSS",
          "DNSSI"
        ],
        "en": [
          "React",
          "Django",
          "MySQL",
          "Encryption",
          "Evidence hashing",
          "MFA",
          "Logging",
          "ISO 27001 / 27005",
          "PCI DSS",
          "DNSSI"
        ]
      },
      "image": "assets/img/projects/evidence-art.svg"
    },
    {
      "slug": "oxair",
      "category": "web",
      "year": "2022–2025",
      "featured": false,
      "title": {
        "fr": "OXAIR – Plateforme SaaS de gestion interne",
        "en": "OXAIR – Internal Management SaaS Platform"
      },
      "summary": {
        "fr": "Plateforme SaaS qui regroupe le suivi des interventions SAV, les demandes RH, les achats et le suivi des plans d'action des services.",
        "en": "SaaS platform combining after-sales intervention tracking, HR requests, purchasing and action-plan follow-up across departments."
      },
      "client": {
        "fr": "OXAIR",
        "en": "OXAIR"
      },
      "period": {
        "fr": "2022 – 2025",
        "en": "2022 – 2025"
      },
      "role": {
        "fr": "Développeur full-stack",
        "en": "Full-stack developer"
      },
      "type": {
        "fr": "Plateforme SaaS",
        "en": "SaaS platform"
      },
      "overview": {
        "fr": "Une plateforme SaaS qui permet de suivre les interventions SAV, de faciliter les tâches RH (demandes de congé, documents, etc.), de gérer le service achats et de suivre l'avancement des plans d'action des services.",
        "en": "A SaaS platform to track after-sales (SAV) interventions, simplify HR tasks (leave requests, documents and more), manage purchasing and follow the progress of each department’s action plans."
      },
      "context": {
        "fr": "OXAIR avait besoin de remplacer des suivis dispersés par une plateforme unique couvrant le SAV, les ressources humaines, les achats et le pilotage des plans d'action.",
        "en": "OXAIR needed a single platform covering after-sales, HR, purchasing and action-plan tracking in place of scattered follow-ups."
      },
      "work": {
        "fr": [
          "Analyse des besoins de chaque service et définition des modules.",
          "Module de suivi des interventions SAV.",
          "Module RH : demandes de congé, demandes de documents et autres démarches.",
          "Module achats pour gérer le service d'achat.",
          "Suivi de l'avancement des plans d'action des services.",
          "Authentification, génération de documents et notifications intégrées à la plateforme.",
          "Mise en ligne et gestion des mises à jour."
        ],
        "en": [
          "Analysed each department’s needs and defined the modules.",
          "Built the after-sales (SAV) intervention tracking module.",
          "HR module: leave requests, document requests and other procedures.",
          "Purchasing module to manage the purchasing department.",
          "Progress tracking of each department’s action plans.",
          "Authentication, document generation and notifications built into the platform.",
          "Deployed the platform and handled updates."
        ]
      },
      "results": {
        "fr": [
          "Une seule plateforme pour le SAV, les RH, les achats et les plans d'action.",
          "Des démarches RH (congés, documents) réalisées en ligne."
        ],
        "en": [
          "One platform for after-sales, HR, purchasing and action plans.",
          "HR procedures (leave, documents) handled online."
        ]
      },
      "stack": {
        "fr": [
          "Angular",
          "Django",
          "MySQL",
          "Docker"
        ],
        "en": [
          "Angular",
          "Django",
          "MySQL",
          "Docker"
        ]
      },
      "image": "assets/img/projects/oxair-art.svg"
    },
    {
      "slug": "pag",
      "category": "web",
      "year": "2024",
      "featured": false,
      "title": {
        "fr": "PAG – Gestion du parc auto, des actifs et des stocks",
        "en": "PAG – Fleet, Asset & Stock Management"
      },
      "summary": {
        "fr": "Application de gestion du parc automobile, des actifs et des stocks, avec droits d'accès par profil et tableaux de bord.",
        "en": "Application to manage the vehicle fleet, assets and stock, with role-based access and dashboards."
      },
      "client": {
        "fr": "Client freelance",
        "en": "Freelance client"
      },
      "period": {
        "fr": "2024",
        "en": "2024"
      },
      "role": {
        "fr": "Développeur full-stack",
        "en": "Full-stack developer"
      },
      "type": {
        "fr": "Application métier",
        "en": "Business application"
      },
      "overview": {
        "fr": "PAG est une application de gestion qui regroupe trois domaines : le parc automobile, les actifs (assets) et la gestion des stocks.",
        "en": "PAG is a management application covering three areas: the vehicle fleet, assets and stock management."
      },
      "context": {
        "fr": "Le client gérait ses processus manuellement et souhaitait une application unique pour les suivre et en rendre compte.",
        "en": "The client managed its processes manually and wanted a single application to follow them and report on them."
      },
      "work": {
        "fr": [
          "Analyse des processus existants avec le client.",
          "Conception de la base de données et des écrans.",
          "Développement des modules : parc automobile, gestion des actifs et gestion des stocks.",
          "Gestion des rôles pour adapter les accès à chaque profil utilisateur.",
          "Livraison, déploiement et accompagnement des utilisateurs."
        ],
        "en": [
          "Analysed the existing processes with the client.",
          "Designed the database and the screens.",
          "Developed the modules: vehicle fleet, asset management and stock management.",
          "Role management to adapt access to each user profile.",
          "Delivered, deployed and supported the users."
        ]
      },
      "results": {
        "fr": [
          "Parc auto, actifs et stocks suivis au même endroit.",
          "Des accès adaptés à chaque profil utilisateur."
        ],
        "en": [
          "Fleet, assets and stock tracked in one place.",
          "Access adapted to each user profile."
        ]
      },
      "stack": {
        "fr": [
          "Angular",
          "Django",
          "MySQL",
          "VM locale"
        ],
        "en": [
          "Angular",
          "Django",
          "MySQL",
          "Local VM"
        ]
      },
      "image": "assets/img/projects/pag-art.svg"
    },
    {
      "slug": "ecommerce-sites",
      "category": "web",
      "year": "2022–2025",
      "featured": false,
      "title": {
        "fr": "12+ sites e-commerce pour indépendants",
        "en": "12+ E-commerce Websites for Independent Sellers"
      },
      "summary": {
        "fr": "Plus de douze sites web réalisés pour des freelances e-commerce afin de vendre leurs produits en ligne.",
        "en": "More than twelve websites built for freelance e-commerce sellers to sell their products online."
      },
      "client": {
        "fr": "Clients freelance e-commerce",
        "en": "Freelance e-commerce clients"
      },
      "period": {
        "fr": "2022 – 2025",
        "en": "2022 – 2025"
      },
      "role": {
        "fr": "Développeur web",
        "en": "Web developer"
      },
      "type": {
        "fr": "Sites e-commerce",
        "en": "E-commerce websites"
      },
      "overview": {
        "fr": "Plus de douze sites web que j'ai réalisés pour des freelances e-commerce, pour leur permettre de vendre leurs produits en ligne.",
        "en": "More than twelve websites I built for freelance e-commerce sellers so they can sell their products online."
      },
      "context": {
        "fr": "Des freelances et petits vendeurs avaient besoin d'un site à eux pour présenter et vendre leurs produits.",
        "en": "Freelancers and small sellers needed a website of their own to present and sell their products."
      },
      "work": {
        "fr": [
          "Recueil du besoin de chaque vendeur et définition de la structure de sa boutique.",
          "Mise en place du catalogue de produits et des pages produit.",
          "Parcours d'achat : panier et commande.",
          "Design responsive pour mobile, tablette et ordinateur.",
          "Mise en ligne et livraison de chaque site."
        ],
        "en": [
          "Gathered each seller's needs and defined the structure of their shop.",
          "Set up the product catalogue and product pages.",
          "Purchase flow: cart and checkout.",
          "Responsive design for mobile, tablet and desktop.",
          "Deployed and delivered each website."
        ]
      },
      "results": {
        "fr": [
          "Plus de douze boutiques en ligne livrées.",
          "Chaque vendeur dispose de son propre site pour vendre ses produits."
        ],
        "en": [
          "More than twelve online shops delivered.",
          "Each seller has their own website to sell their products."
        ]
      },
      "stack": {
        "fr": [
          "WordPress",
          "Laravel",
          "Stripe",
          "PayPal"
        ],
        "en": [
          "WordPress",
          "Laravel",
          "Stripe",
          "PayPal"
        ]
      },
      "image": "assets/img/projects/ecommerce-sites-art.svg"
    },
    {
      "slug": "vitrine-sites",
      "category": "web",
      "year": "2022–2025",
      "featured": false,
      "title": {
        "fr": "Sites vitrines pour petites et moyennes entreprises",
        "en": "Showcase Websites for Small & Medium Businesses"
      },
      "summary": {
        "fr": "Sites vitrines professionnels pour présenter l'activité, les services et les coordonnées de petites et moyennes entreprises.",
        "en": "Professional showcase websites presenting the activity, services and contact details of small and medium businesses."
      },
      "client": {
        "fr": "Petites et moyennes entreprises",
        "en": "Small and medium businesses"
      },
      "period": {
        "fr": "2022 – 2025",
        "en": "2022 – 2025"
      },
      "role": {
        "fr": "Développeur web",
        "en": "Web developer"
      },
      "type": {
        "fr": "Sites vitrines",
        "en": "Showcase websites"
      },
      "overview": {
        "fr": "Des sites vitrines que j'ai réalisés pour des petites et moyennes entreprises, afin de présenter leur activité et de leur donner une présence en ligne.",
        "en": "Showcase websites I built for small and medium businesses to present their activity and give them an online presence."
      },
      "context": {
        "fr": "Ces entreprises avaient besoin d'un site professionnel, clair et adapté à leur activité, pour se faire connaître en ligne.",
        "en": "These businesses needed a professional, clear website adapted to their activity to make themselves known online."
      },
      "work": {
        "fr": [
          "Recueil du besoin et des contenus de chaque entreprise.",
          "Conception d'un site vitrine adapté à son activité et à son image.",
          "Développement d'un site responsive.",
          "Mise en ligne et livraison."
        ],
        "en": [
          "Gathered each business's needs and content.",
          "Designed a showcase website adapted to its activity and image.",
          "Developed a responsive website.",
          "Deployed and delivered the website."
        ]
      },
      "results": {
        "fr": [
          "Des entreprises présentes en ligne avec un site professionnel.",
          "Des sites lisibles sur mobile, tablette et ordinateur."
        ],
        "en": [
          "Businesses present online with a professional website.",
          "Websites readable on mobile, tablet and desktop."
        ]
      },
      "stack": {
        "fr": [
          "Site vitrine",
          "Design responsive",
          "Mise en ligne"
        ],
        "en": [
          "Showcase website",
          "Responsive design",
          "Deployment"
        ]
      },
      "image": "assets/img/projects/vitrine-sites-art.svg"
    }
  ],
  "timeline": [
    {
      "kind": "job",
      "period": {
        "fr": "Juin 2026 – Présent",
        "en": "June 2026 – Present"
      },
      "title": {
        "fr": "Technicien Help Desk N2 – Appui aux équipes N1 – Télécom & Réseaux",
        "en": "Help Desk Technician L2 – Supporting the L1 teams – Telecom & Networks"
      },
      "org": {
        "fr": "My BPO, Rabat (client : Paritel France)",
        "en": "My BPO, Rabat (client: Paritel France)"
      },
      "current": true,
      "points": {
        "fr": [
          "Assistance technique et support réseau pour les clients professionnels de l'opérateur français Paritel.",
          "Appui aux équipes N1 : chaque niveau a son propre périmètre de travail et j'interviens en renfort sur les cas qui dépassent le leur.",
          "Diagnostic avancé et résolution des incidents escaladés sur les environnements Télécom, IP et Réseaux (Fibre, ADSL, VoIP, 4G/5G).",
          "Accompagnement des techniciens N1 dans leurs tâches, chacun gardant son propre travail.",
          "Gestion de la relation client, de la qualification de l'anomalie à la clôture du ticket."
        ],
        "en": [
          "Technical and network support for business customers of the French telecom operator Paritel.",
          "Support for the L1 teams: each level has its own scope of work and I step in on the cases that go beyond theirs.",
          "Advanced diagnosis and resolution of escalated incidents on telecom, IP and network environments (fibre, ADSL, VoIP, 4G/5G).",
          "Guidance for L1 technicians in their tasks, each keeping their own work.",
          "Customer relationship handling, from qualifying the issue to closing the ticket."
        ]
      }
    },
    {
      "kind": "job",
      "period": {
        "fr": "Mars 2025 – Oct. 2025",
        "en": "Mar. 2025 – Oct. 2025"
      },
      "title": {
        "fr": "Analyste Cybersécurité (Freelance / Projet de Fin d'Études)",
        "en": "Cybersecurity Analyst (Freelance / Final-year project)"
      },
      "org": {
        "fr": "GesTop Services, Rabat",
        "en": "GesTop Services, Rabat"
      },
      "points": {
        "fr": [
          "Contribution à une plateforme de reconnaissance et de supervision réseau dans un contexte d'audit de sécurité.",
          "Réalisation de scans réseau (ports, services, équipements actifs) et analyse de la surface d'attaque.",
          "Participation à l'identification de vulnérabilités courantes et à la rédaction de rapports d'audit.",
          "Cartographie et visualisation de l'infrastructure réseau pour améliorer la visibilité sécurité."
        ],
        "en": [
          "Contributed to a network reconnaissance and monitoring platform used in security audits.",
          "Ran network scans (ports, services, active devices) and analysed the attack surface.",
          "Helped identify common vulnerabilities and wrote audit reports.",
          "Mapped and visualised the network infrastructure to improve security visibility."
        ]
      }
    },
    {
      "kind": "job",
      "period": {
        "fr": "Fév. 2024 – Mars 2025",
        "en": "Feb. 2024 – Mar. 2025"
      },
      "title": {
        "fr": "Analyste Cybersécurité – Projets indépendants",
        "en": "Cybersecurity Analyst – Independent projects"
      },
      "org": {
        "fr": "Freelance",
        "en": "Freelance"
      },
      "points": {
        "fr": [
          "Participation à des audits de sécurité (réseau, systèmes, applications).",
          "Analyse des risques, identification de vulnérabilités et recommandations correctives.",
          "Automatisation de contrôles de sécurité via scripts Python et Bash.",
          "Rédaction de rapports techniques et de synthèses sécurité."
        ],
        "en": [
          "Took part in security audits (network, systems, applications).",
          "Risk analysis, vulnerability identification and remediation recommendations.",
          "Automated security checks with Python and Bash scripts.",
          "Wrote technical reports and security summaries."
        ]
      }
    },
    {
      "kind": "job",
      "period": {
        "fr": "Janv. 2022 – Fév. 2024",
        "en": "Jan. 2022 – Feb. 2024"
      },
      "title": {
        "fr": "Développeur Full-Stack – Projets indépendants",
        "en": "Full-Stack Developer – Independent projects"
      },
      "org": {
        "fr": "Freelance",
        "en": "Freelance"
      },
      "points": {
        "fr": [
          "Développement d'API et d'applications sécurisées (authentification, contrôle d'accès, journalisation) pour des entreprises et organismes publics.",
          "Utilisation du développement comme levier d'amélioration de la sécurité opérationnelle."
        ],
        "en": [
          "Built secure APIs and applications (authentication, access control, logging) for companies and public organisations.",
          "Used development as a lever to improve operational security."
        ]
      }
    },
    {
      "kind": "internship",
      "period": {
        "fr": "Fév. 2023 – Sept. 2023",
        "en": "Feb. 2023 – Sept. 2023"
      },
      "title": {
        "fr": "Stagiaire Cybersécurité",
        "en": "Cybersecurity Intern"
      },
      "org": {
        "fr": "OPTIMATIC, Rabat",
        "en": "OPTIMATIC, Rabat"
      },
      "points": {
        "fr": [
          "Conception et sécurisation d'architectures réseau.",
          "Configuration de pare-feux, segmentation réseau et audits de sécurité.",
          "Application des exigences ISO 27001 et rédaction de documentation SSI."
        ],
        "en": [
          "Design and hardening of network architectures.",
          "Firewall configuration, network segmentation and security audits.",
          "Applied ISO 27001 requirements and wrote ISMS documentation."
        ]
      }
    },
    {
      "kind": "internship",
      "period": {
        "fr": "Sept. 2022 – Janv. 2023",
        "en": "Sept. 2022 – Jan. 2023"
      },
      "title": {
        "fr": "Stagiaire Développement Odoo",
        "en": "Odoo Development Intern"
      },
      "org": {
        "fr": "S4U, Rabat",
        "en": "S4U, Rabat"
      },
      "points": {
        "fr": [
          "Développement, configuration et administration d'Odoo.",
          "Analyse des besoins métiers et implémentation de solutions adaptées."
        ],
        "en": [
          "Development, configuration and administration of Odoo.",
          "Business needs analysis and implementation of tailored solutions."
        ]
      }
    },
    {
      "kind": "internship",
      "period": {
        "fr": "Fév. 2022 – Juil. 2022",
        "en": "Feb. 2022 – July 2022"
      },
      "title": {
        "fr": "Stagiaire Développement Web",
        "en": "Web Development Intern"
      },
      "org": {
        "fr": "NETMAR, Rabat",
        "en": "NETMAR, Rabat"
      },
      "points": {
        "fr": [
          "Applications web et mobiles connectées à des systèmes embarqués (Raspberry Pi) pour une station météo installée dans une ferme à Azrou.",
          "Déploiement de la solution en environnement réel."
        ],
        "en": [
          "Web and mobile applications connected to embedded systems (Raspberry Pi) for a weather station on a farm in Azrou.",
          "Deployment of the solution in a real environment."
        ]
      }
    },
    {
      "kind": "education",
      "period": {
        "fr": "Sept. 2023 – Juil. 2025",
        "en": "Sept. 2023 – July 2025"
      },
      "title": {
        "fr": "Master Universitaire Spécialisé – Sécurité des Systèmes d'Information",
        "en": "Specialised University Master – Information Systems Security"
      },
      "org": {
        "fr": "École Nationale des Sciences Appliquées (ENSA), Kénitra",
        "en": "National School of Applied Sciences (ENSA), Kénitra"
      },
      "text": {
        "fr": "Formation de niveau Master (équivalent M1/M2) centrée sur la sécurité des systèmes d'information.",
        "en": "Master's-level programme (M1/M2 equivalent) focused on information systems security."
      }
    },
    {
      "kind": "education",
      "period": {
        "fr": "Sept. 2022 – Avr. 2023",
        "en": "Sept. 2022 – Apr. 2023"
      },
      "title": {
        "fr": "Licence Universitaire Professionnelle – Ingénierie Systèmes, Réseaux et Sécurité",
        "en": "Professional Bachelor – Systems, Networks & Security Engineering"
      },
      "org": {
        "fr": "Faculté des Sciences et Techniques, Settat",
        "en": "Faculty of Science and Technology, Settat"
      },
      "text": {
        "fr": "Licence professionnelle en ingénierie des systèmes, réseaux et sécurité.",
        "en": "Professional university degree in systems, networks and security engineering."
      }
    },
    {
      "kind": "education",
      "period": {
        "fr": "Sept. 2020 – Juil. 2022",
        "en": "Sept. 2020 – July 2022"
      },
      "title": {
        "fr": "Diplôme de Technicien Spécialisé en Développement Informatique",
        "en": "Specialised Technician Diploma – Software Development"
      },
      "org": {
        "fr": "ISTA NTIC, Rabat",
        "en": "ISTA NTIC, Rabat"
      },
      "text": {
        "fr": "Programmation orientée objet, événementielle et client-serveur, développement web, bases de données (SQL, PL/SQL, MySQL, PostgreSQL) et développement mobile.",
        "en": "Object-oriented, event-driven and client-server programming, web development, databases (SQL, PL/SQL, MySQL, PostgreSQL) and mobile development."
      }
    },
    {
      "kind": "education",
      "period": {
        "fr": "Sept. 2018 – Juin 2019",
        "en": "Sept. 2018 – June 2019"
      },
      "title": {
        "fr": "Baccalauréat International Sciences Expérimentales (option française)",
        "en": "International Baccalaureate – Experimental Sciences (French option)"
      },
      "org": {
        "fr": "Lycée des Sciences Expérimentales, Témara",
        "en": "High School of Experimental Sciences, Témara"
      }
    }
  ],
  "skills": [
    {
      "icon": "shield",
      "group": {
        "fr": "Cybersécurité & GRC",
        "en": "Cybersecurity & GRC"
      },
      "items": {
        "fr": [
          "Audit SSI",
          "GRC",
          "Analyse de vulnérabilités",
          "ISO 27001",
          "ISO 27005",
          "PCI DSS",
          "DNSSI",
          "Firewall",
          "SSL/TLS",
          "Gestion des preuves numériques"
        ],
        "en": [
          "IT security audit",
          "GRC",
          "Vulnerability assessment",
          "ISO 27001",
          "ISO 27005",
          "PCI DSS",
          "DNSSI",
          "Firewall",
          "SSL/TLS",
          "Digital evidence management"
        ]
      }
    },
    {
      "icon": "target",
      "group": {
        "fr": "Pentest & Red Team",
        "en": "Pentest & Red Team"
      },
      "items": {
        "fr": [
          "Pentest",
          "Kali Linux",
          "Nmap",
          "Burp Suite",
          "Metasploit",
          "SQLmap",
          "Wireshark",
          "OWASP Top 10",
          "Reconnaissance (OSINT)",
          "Exploitation web",
          "Élévation de privilèges",
          "Bug bounty",
          "CTF"
        ],
        "en": [
          "Pentesting",
          "Kali Linux",
          "Nmap",
          "Burp Suite",
          "Metasploit",
          "SQLmap",
          "Wireshark",
          "OWASP Top 10",
          "Reconnaissance (OSINT)",
          "Web exploitation",
          "Privilege escalation",
          "Bug bounty",
          "CTF"
        ]
      }
    },
    {
      "icon": "lock",
      "group": {
        "fr": "SOC & Blue Team",
        "en": "SOC & Blue Team"
      },
      "items": {
        "fr": [
          "SOC",
          "SIEM",
          "Wazuh",
          "Splunk",
          "ELK Stack",
          "IDS/IPS",
          "Suricata",
          "Snort",
          "Analyse de logs",
          "Réponse aux incidents",
          "Threat hunting",
          "Forensique (DFIR)"
        ],
        "en": [
          "SOC",
          "SIEM",
          "Wazuh",
          "Splunk",
          "ELK Stack",
          "IDS/IPS",
          "Suricata",
          "Snort",
          "Log analysis",
          "Incident response",
          "Threat hunting",
          "Forensics (DFIR)"
        ]
      }
    },
    {
      "icon": "keyhole",
      "group": {
        "fr": "Purple Team",
        "en": "Purple Team"
      },
      "items": {
        "fr": [
          "MITRE ATT&CK",
          "Émulation d’adversaire",
          "Ingénierie de détection",
          "Règles Sigma",
          "Threat intelligence",
          "Collaboration Red / Blue",
          "Tests de détection"
        ],
        "en": [
          "MITRE ATT&CK",
          "Adversary emulation",
          "Detection engineering",
          "Sigma rules",
          "Threat intelligence",
          "Red / Blue collaboration",
          "Detection testing"
        ]
      }
    },
    {
      "icon": "rocket",
      "group": {
        "fr": "DevSecOps",
        "en": "DevSecOps"
      },
      "items": {
        "fr": [
          "Sécurité CI/CD",
          "GitHub Actions",
          "GitLab CI",
          "SAST / DAST",
          "SonarQube",
          "Trivy",
          "Sécurité Docker",
          "Gestion des secrets",
          "Infrastructure as Code",
          "Revue de code sécurisée"
        ],
        "en": [
          "CI/CD security",
          "GitHub Actions",
          "GitLab CI",
          "SAST / DAST",
          "SonarQube",
          "Trivy",
          "Docker security",
          "Secrets management",
          "Infrastructure as Code",
          "Secure code review"
        ]
      }
    },
    {
      "icon": "network",
      "group": {
        "fr": "Réseaux & télécoms",
        "en": "Networks & telecom"
      },
      "items": {
        "fr": [
          "TCP/IP",
          "DNS",
          "DHCP",
          "VLAN",
          "DMZ",
          "Segmentation",
          "Supervision",
          "Fortinet",
          "Cisco",
          "GNS3",
          "Packet Tracer",
          "Fibre",
          "ADSL",
          "VoIP"
        ],
        "en": [
          "TCP/IP",
          "DNS",
          "DHCP",
          "VLAN",
          "DMZ",
          "Segmentation",
          "Monitoring",
          "Fortinet",
          "Cisco",
          "GNS3",
          "Packet Tracer",
          "Fibre",
          "ADSL",
          "VoIP"
        ]
      }
    },
    {
      "icon": "server",
      "group": {
        "fr": "Systèmes & conteneurs",
        "en": "Systems & containers"
      },
      "items": {
        "fr": [
          "Ubuntu",
          "CentOS",
          "Red Hat",
          "Windows Server",
          "Ligne de commande Linux",
          "Machines virtuelles",
          "Docker"
        ],
        "en": [
          "Ubuntu",
          "CentOS",
          "Red Hat",
          "Windows Server",
          "Linux command line",
          "Virtual machines",
          "Docker"
        ]
      }
    },
    {
      "icon": "zap",
      "group": {
        "fr": "Automatisation",
        "en": "Automation"
      },
      "items": {
        "fr": [
          "Python",
          "Bash",
          "n8n",
          "Agents IA",
          "Webhooks",
          "Celery",
          "API Telegram"
        ],
        "en": [
          "Python",
          "Bash",
          "n8n",
          "AI agents",
          "Webhooks",
          "Celery",
          "Telegram API"
        ]
      }
    },
    {
      "icon": "code",
      "group": {
        "fr": "Développement",
        "en": "Development"
      },
      "items": {
        "fr": [
          "Django",
          "Laravel",
          "Angular",
          "React",
          "React Native",
          "Java (Android)",
          "JavaScript",
          "API REST"
        ],
        "en": [
          "Django",
          "Laravel",
          "Angular",
          "React",
          "React Native",
          "Java (Android)",
          "JavaScript",
          "REST APIs"
        ]
      }
    },
    {
      "icon": "layers",
      "group": {
        "fr": "Données & déploiement",
        "en": "Data & deployment"
      },
      "items": {
        "fr": [
          "MySQL",
          "PostgreSQL",
          "SQL Server",
          "MongoDB",
          "VPS (OVH, IONOS)",
          "AWS",
          "Hostinger",
          "Serveur local"
        ],
        "en": [
          "MySQL",
          "PostgreSQL",
          "SQL Server",
          "MongoDB",
          "VPS (OVH, IONOS)",
          "AWS",
          "Hostinger",
          "Local server"
        ]
      }
    },
    {
      "icon": "graph",
      "group": {
        "fr": "BI & Power Platform",
        "en": "BI & Power Platform"
      },
      "items": {
        "fr": [
          "Power BI",
          "Power Query",
          "DAX",
          "Power BI Service",
          "Power Apps",
          "Power Automate",
          "Microsoft Lists",
          "Planner",
          "Excel"
        ],
        "en": [
          "Power BI",
          "Power Query",
          "DAX",
          "Power BI Service",
          "Power Apps",
          "Power Automate",
          "Microsoft Lists",
          "Planner",
          "Excel"
        ]
      }
    },
    {
      "icon": "tool",
      "group": {
        "fr": "Outils",
        "en": "Tools"
      },
      "items": {
        "fr": [
          "Git (GitHub, GitLab)",
          "Postman",
          "Swagger",
          "Jira",
          "Confluence",
          "VS Code",
          "JetBrains"
        ],
        "en": [
          "Git (GitHub, GitLab)",
          "Postman",
          "Swagger",
          "Jira",
          "Confluence",
          "VS Code",
          "JetBrains"
        ]
      }
    }
  ],
  "proficiency": [
    {
      "label": {
        "fr": "Audit de sécurité & analyse de vulnérabilités",
        "en": "Security audit & vulnerability analysis"
      },
      "level": 90
    },
    {
      "label": {
        "fr": "Réseaux (TCP/IP, DNS, DHCP, segmentation)",
        "en": "Networks (TCP/IP, DNS, DHCP, segmentation)"
      },
      "level": 90
    },
    {
      "label": {
        "fr": "Linux & Windows Server",
        "en": "Linux & Windows Server"
      },
      "level": 85
    },
    {
      "label": {
        "fr": "Automatisation Python & Bash",
        "en": "Python & Bash automation"
      },
      "level": 85
    },
    {
      "label": {
        "fr": "Django · Laravel · Angular · React · API REST",
        "en": "Django · Laravel · Angular · React · REST APIs"
      },
      "level": 85
    },
    {
      "label": {
        "fr": "ISO 27001 & documentation SMSI",
        "en": "ISO 27001 & ISMS documentation"
      },
      "level": 80
    }
  ],
  "certifications": [
    {
      "name": "Oracle Cloud Infrastructure 2025 Certified Networking Professional",
      "issuer": "Oracle",
      "date": "2026-05",
      "id": "327668731OCI25NWOCP",
      "domain": "cloud"
    },
    {
      "name": "Oracle Linux 8 Advanced System Administration",
      "issuer": "Oracle",
      "date": "2026-04",
      "id": "327668731LIN8OCP",
      "domain": "cloud"
    },
    {
      "name": "Google Cybersecurity Professional Certificate",
      "issuer": "Google",
      "date": "2026-04",
      "id": "FUWUD17LFUJT",
      "domain": "security"
    },
    {
      "name": "IBM and ISC2 Cybersecurity Specialist Professional Certificate",
      "issuer": "ISC2",
      "date": "2026-02",
      "id": "6W6OS4J5D3CH",
      "domain": "security"
    },
    {
      "name": "Fortinet Network Security Expert (NSE) 2 : The Evolution of Cybersecurity",
      "issuer": "Fortinet",
      "domain": "security"
    },
    {
      "name": "Fortinet Network Security Expert (NSE) 1 : Information Security Awareness",
      "issuer": "Fortinet",
      "domain": "security"
    },
    {
      "name": "Oracle Cloud Infrastructure 2024 Certified Data Science Professional",
      "issuer": "Oracle",
      "date": "2025-01",
      "expires": "2027-01",
      "domain": "cloud"
    },
    {
      "name": "Oracle Cloud Infrastructure 2024 Certified DevOps Professional",
      "issuer": "Oracle",
      "date": "2024-12",
      "expires": "2026-12",
      "domain": "cloud"
    },
    {
      "name": "Cybersecurity Certification: From Beginner to Expert 2024 (+30h)",
      "issuer": "Udemy",
      "date": "2024-12",
      "domain": "security"
    },
    {
      "name": "Ethical Hacker",
      "issuer": "Cisco",
      "date": "2024-12",
      "domain": "security"
    },
    {
      "name": "Oracle Certified Professional, MySQL 8.0 Database Administrator",
      "issuer": "Oracle",
      "date": "2024-12",
      "domain": "dev"
    },
    {
      "name": "Oracle Database Administration 2019 Certified Professional",
      "issuer": "Oracle",
      "date": "2024-12",
      "domain": "dev"
    },
    {
      "name": "Oracle Certified Professional: Java SE 17 Developer",
      "issuer": "Oracle",
      "date": "2024-12",
      "domain": "dev"
    },
    {
      "name": "Python Essentials 2",
      "issuer": "Cisco",
      "date": "2024-02",
      "domain": "dev"
    },
    {
      "name": "Google IT Support Professional Certificate",
      "issuer": "Google",
      "date": "2023-07",
      "domain": "cloud"
    },
    {
      "name": "Introduction to Cybersecurity",
      "issuer": "Cisco",
      "date": "2022-05",
      "domain": "security"
    },
    {
      "name": "Microsoft Office Specialist: Microsoft Excel 2016",
      "issuer": "Microsoft",
      "date": "2022-05",
      "id": "wY8aX-22X8",
      "domain": "dev"
    },
    {
      "name": "Cisco IT Essentials: PC Hardware and Software",
      "issuer": "Cisco",
      "date": "2021-03",
      "domain": "cloud"
    }
  ],
  "languages": [
    {
      "name": {
        "fr": "Arabe",
        "en": "Arabic"
      },
      "level": {
        "fr": "Langue maternelle",
        "en": "Native"
      },
      "value": 100
    },
    {
      "name": {
        "fr": "Français",
        "en": "French"
      },
      "level": {
        "fr": "Courant (C1 – TCF certifié)",
        "en": "Fluent (C1 – TCF certified)"
      },
      "value": 85
    },
    {
      "name": {
        "fr": "Anglais",
        "en": "English"
      },
      "level": {
        "fr": "Courant (B2)",
        "en": "Fluent (B2)"
      },
      "value": 70
    }
  ],
  "contact": {
    "title": {
      "fr": "Un audit, un projet ou un poste ? Parlons-en.",
      "en": "An audit, a project or a role? Let's talk."
    },
    "text": {
      "fr": "Audit, réseau, application sécurisée ou mission freelance — écrivez-moi et je vous réponds rapidement.",
      "en": "Audit, network, secure application or freelance mission — reach out and I'll get back to you quickly."
    }
  },
  "certDomains": [
    {
      "id": "*",
      "label": {
        "fr": "Toutes",
        "en": "All"
      }
    },
    {
      "id": "security",
      "label": {
        "fr": "Cybersécurité",
        "en": "Cybersecurity"
      }
    },
    {
      "id": "cloud",
      "label": {
        "fr": "Cloud, systèmes & réseaux",
        "en": "Cloud, systems & networks"
      }
    },
    {
      "id": "dev",
      "label": {
        "fr": "Data & développement",
        "en": "Data & development"
      }
    }
  ]
};
