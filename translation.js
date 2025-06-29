// --- THIS IS THE FINAL MASTER DICTIONARY FOR THE ENTIRE WEBSITE ---

// Make the dictionary and the main function globally accessible
let translations = {};
let setLanguage; 

document.addEventListener('DOMContentLoaded', () => {
    // Fill the global object with the translations
    translations = {
        // --- Shared (Navbar / Footer / Common Buttons) ---
        navHome: { en: 'Home', th: 'หน้าหลัก' },
        navProducts: { en: 'Products', th: 'ผลิตภัณฑ์' },
        login: { en: 'Log In', th: 'เข้าสู่ระบบ' },
        signup: { en: 'Sign Up', th: 'สมัครสมาชิก' },
        menu: { en: 'MENU', th: 'เมนู' },
        footer: { en: '© 2025 GamiCon. All rights reserved.', th: '© 2025 GamiCon สงวนลิขสิทธิ์' },
        back: { en: 'BACK', th: 'กลับ' },
        skip: { en: 'SKIP >>', th: 'ข้าม >>' },
        backToHome: { en: '.. Back to Home', th: '.. กลับหน้าหลัก' },
        select: { en: 'SELECT', th: 'เลือก' },

        // --- index.html ---
        heroSubtitle: { en: 'Buddy Finder for Thai Gamers! Connect via traits, vibes, and games.', th: 'แอปหาเพื่อนเล่นเกมสำหรับคนไทย! เชื่อมต่อผ่านลักษณะนิสัย สไตล์ และเกมที่ใช่' },
        getStarted: { en: 'Get Started Now', th: 'เริ่มเลยตอนนี้' },
        howItWorks: { en: 'How It Works', th: 'วิธีการทำงาน' },
        step1Title: { en: '1. SELECT TRAITS', th: '1. เลือกลักษณะนิสัย' },
        step1Desc: { en: 'Choose your gaming style, vibe, and play times.', th: 'เลือกสไตล์การเล่นเกม สไตล์ส่วนตัว และเวลาที่เล่น' },
        step2Title: { en: '2. MATCH & SWIPE', th: '2. จับคู่และปัด' },
        step2Desc: { en: 'See a list of people who match your traits.', th: 'ดูรายชื่อคนที่ตรงกับลักษณะของคุณ' },
        step3Title: { en: '3. CHAT & GAME', th: '3. แชทและเล่น' },
        step3Desc: { en: 'Jump into games and build lasting squads.', th: 'เริ่มเล่นเกมและสร้างทีมที่ยั่งยืน' },
        ctaTitle: { en: 'Ready to find your buddy?', th: 'พร้อมหาเพื่อนเล่นเกมหรือยัง?' },
        ctaSubtitle: { en: 'Sign up for early access!', th: 'สมัครเพื่อเข้าใช้งานก่อนใคร!' },

        // --- products.html ---
        productsTitle: { en: 'SUBSCRIPTION PLANS', th: 'แพ็กเกจสมาชิก' },
        productsSubtitle: { en: 'Unlock a premium experience with an ad-free environment, exclusive cosmetics, and special perks from our game partners.', th: 'ปลดล็อกประสบการณ์พรีเมียม ไร้โฆษณา รับของตกแต่งพิเศษ และสิทธิประโยชน์จากพาร์ทเนอร์เกมของเรา' },
        planFortnight: { en: 'FORTNIGHT', th: 'สองสัปดาห์' },
        plan1Month: { en: '1 MONTH', th: '1 เดือน' },
        plan3Months: { en: '3 MONTHS', th: '3 เดือน' },
        plan6Months: { en: '6 MONTHS', th: '6 เดือน' },
        plan12Months: { en: '12 MONTHS', th: '12 เดือน' },
        baht: { en: 'baht', th: 'บาท' },
        week: { en: '/week', th: '/สัปดาห์' },
        bestValue: { en: '★BEST VALUE★', th: '★คุ้มที่สุด★' },

        // --- index2.html ---
        joinHeader: { en: 'Join GamiCon', th: 'เข้าร่วม GamiCon' },
        joinSubtitle: { en: 'Create your account to start', th: 'สร้างบัญชีเพื่อเริ่มต้น' },
        loginHeader: { en: 'Welcome Back', th: 'ยินดีต้อนรับกลับ' },
        loginSubtitle: { en: 'Log in to continue', th: 'เข้าสู่ระบบเพื่อไปต่อ' },
        emailLabel: { en: 'Email', th: 'อีเมล' },
        emailPlaceholder: { en: 'player@email.com', th: 'player@email.com' },
        loginEmailLabel: { en: 'Email / Username', th: 'อีเมล / ชื่อผู้ใช้' },
        loginEmailPlaceholder: { en: 'your_email / username', th: 'อีเมลของคุณ / ชื่อผู้ใช้' },
        usernameLabel: { en: 'Username', th: 'ชื่อผู้ใช้' },
        usernamePlaceholder: { en: 'PlayerOne', th: 'ผู้เล่นหนึ่ง' },
        birthdayLabel: { en: 'Birthday', th: 'วันเกิด' },
        genderLabel: { en: 'Gender', th: 'เพศ' },
        genderPlaceholder: { en: 'Select your gender...', th: 'เลือกเพศของคุณ...' },
        genderMale: { en: 'Male', th: 'ชาย' },
        genderFemale: { en: 'Female', th: 'หญิง' },
        genderNonBinary: { en: 'Non-binary', th: 'ไม่ระบุ' },
        passwordLabel: { en: 'Password', th: 'รหัสผ่าน' },
        passwordPlaceholder: { en: '********', th: '********' },
        confirmPasswordLabel: { en: 'Confirm Password', th: 'ยืนยันรหัสผ่าน' },
        confirmPasswordNote: { en: '*must match password*', th: '*ต้องเหมือนกับรหัสผ่าน*' },
        showPasswordLabel: { en: 'Show Password', th: 'แสดงรหัสผ่าน' },
        errorRequired: { en: '* This field is required *', th: '* กรุณากรอกข้อมูล *' },
        errorEmailRequired: { en: '* Email is required *', th: '* กรุณากรอกอีเมล *' },
        errorUsernameRequired: { en: '* Username is required *', th: '* กรุณากรอกชื่อผู้ใช้ *' },
        errorPasswordMatch: { en: '* Passwords do not match *', th: '* รหัสผ่านไม่ตรงกัน *' },
        errorAge: { en: '* Must be 18 or older *', th: '* ต้องมีอายุ 18 ปีขึ้นไป *' },

        // --- loading.html ---
        loading: { en: 'LOADING...', th: 'กำลังโหลด...' },
        complete: { en: 'COMPLETE!', th: 'เสร็จสิ้น!' },

        // --- tos.html ---
        welcomeTo: { en: 'Welcome to GamiCon', th: 'ยินดีต้อนรับสู่ GamiCon' },
        welcomeUser: { en: 'Welcome,', th: 'ยินดีต้อนรับ,' },
        communityRules: { en: 'COMMUNITY RULES', th: 'กฎของชุมชน' },
        rule1Title: { en: 'BE YOURSELF.', th: 'แสดงตัวตนของคุณ' },
        rule1Desc: { en: 'Make sure your profile, games, and bio are true to who you are.', th: 'ตรวจสอบให้แน่ใจว่าโปรไฟล์ เกม และข้อมูลของคุณเป็นความจริง' },
        rule2Title: { en: 'STAY SAFE.', th: 'ปลอดภัยไว้ก่อน' },
        rule2Desc: { en: "Don't be too quick to give out personal information. Play smart.", th: 'อย่ารีบให้ข้อมูลส่วนตัว เล่นอย่างชาญฉลาด' },
        rule3Title: { en: 'PLAY IT COOL.', th: 'ใจเย็นๆ' },
        rule3Desc: { en: 'Respect other players. No toxicity, rage-quitting, or spamming.', th: 'ให้เกียรติผู้เล่นอื่น ไม่ใช้คำพูดรุนแรง ไม่หัวร้อนออกจากเกม หรือสแปม' },
        rule4Title: { en: 'BE PROACTIVE.', th: 'ช่วยกันสอดส่อง' },
        rule4Desc: { en: 'Always report bad behaviour to keep the community fun.', th: 'รายงานพฤติกรรมที่ไม่เหมาะสมเสมอเพื่อรักษาชุมชนให้น่าอยู่' },
        iAgree: { en: 'I AGREE', th: 'ฉันยอมรับ' },

        // --- index3.html ---
        linkStart: { en: 'LINK START!', th: 'เริ่มการเชื่อมต่อ!' },
        linkSubtitle: { en: 'Link your profiles to find better matches.', th: 'เชื่อมต่อโปรไฟล์เพื่อการจับคู่ที่ดีกว่า' },
        connectSteam: { en: 'Continue with Steam', th: 'เชื่อมต่อด้วย Steam' },
        connectRiot: { en: 'Continue with Riot', th: 'เชื่อมต่อด้วย Riot' },
        connectDiscord: { en: 'Continue with Discord', th: 'เชื่อมต่อด้วย Discord' },

        // --- traits.html ---
        traitsTitle: { en: 'SELECT YOUR TRAITS', th: 'เลือกลักษณะของคุณ' },
        traitsSubtitle: { en: 'This helps us find your perfect squad.', th: 'สิ่งนี้จะช่วยให้เราหาทีมที่สมบูรณ์แบบให้คุณ' },
        gamesHeader: { en: 'GAMES', th: 'เกม' },
        gamesSubheader: { en: '(Select any)', th: '(เลือกกี่อย่างก็ได้)' },
        vibeHeader: { en: 'VIBE', th: 'ฟีลในการเล่น' },
        vibeSubheader: { en: '(Pick up to 2)', th: '(เลือกได้สูงสุด 2 อย่าง)' },
        hoursHeader: { en: 'PLAY HOURS', th: 'เวลาเล่น' },
        hoursSubheader: { en: '(Up to 2)', th: '(สูงสุด 2 อย่าง)' },
        commHeader: { en: 'COMMUNICATION', th: 'การสื่อสาร' },
        commSubheader: { en: '(Pick one)', th: '(เลือกวิธีสื่อสาร 1 อย่าง)' },
        traitTagMoba: { en: 'MOBA', th: 'MOBA' },
        traitTagFps: { en: 'FPS', th: 'FPS' },
        traitTagRpg: { en: 'RPG', th: 'RPG' },
        traitTagStrategy: { en: 'Strategy', th: 'วางแผน' },
        traitTagSandbox: { en: 'Sandbox', th: 'Sandbox' },
        traitTagHorror: { en: 'Horror', th: 'สยองขวัญ' },
        traitTagCasual: { en: 'Casual', th: 'สบายๆ' },
        traitTagCompetitive: { en: 'Competitive', th: 'แข่งขัน' },
        traitTagTryhard: { en: 'Try-hard', th: 'เอาจริง' },
        traitTagChill: { en: 'Chill', th: 'ชิลๆ' },
        traitTagFunny: { en: 'Funny', th: 'ตลก' },
        traitTagFocused: { en: 'Focused', th: 'มุ่งมั่น' },
        traitTagWeekdays: { en: 'Weekdays', th: 'วันธรรมดา' },
        traitTagWeekends: { en: 'Weekends', th: 'สุดสัปดาห์' },
        traitTagLateNight: { en: 'Late Night', th: 'ดึกๆ' },
        traitTagMornings: { en: 'Mornings', th: 'ตอนเช้า' },
        traitTagAnytime: { en: 'Anytime', th: 'ได้ตลอด' },
        traitTagVoice: { en: 'Voice Chat', th: 'คุยเสียง' },
        traitTagPings: { en: 'Pings Only', th: 'ใช้ Pings' },
        traitTagText: { en: 'Text Chat', th: 'พิมพ์แชท' },
        traitTagQuiet: { en: 'Quiet', th: 'เงียบๆ' },
        yourTraits: { en: 'YOUR TRAITS', th: 'ลักษณะของคุณ' },
        noTraits: { en: 'No traits selected', th: 'ยังไม่ได้เลือกลักษณะ' },
        finishSetup: { en: 'FINISH SETUP', th: 'ตั้งค่าเสร็จสิ้น' },
        errorMax2: { en: 'MAX 2!', th: 'เลือกได้ 2 อย่าง!' },
        errorPick1: { en: 'PICK 1', th: 'เลือก 1 อย่าง' },
        errorPickAtLeast1: { en: 'PICK AT LEAST 1', th: 'เลือกอย่างน้อย 1 อย่าง' },
        animProcessing: { en: "WE'RE PROCESSING . . .", th: "กำลังประมวลผล . . ." },
        animCompleting: { en: "COMPLETING YOUR PROFILE . . .", th: "กำลังสร้างโปรไฟล์ . . ." },
        animFusion: { en: 'FUSION!', th: 'รวมร่าง!' },

        // --- main1.html (Dashboard) ---
        dashDashboard: { en: 'Dashboard', th: 'แดชบอร์ด' },
        dashChat: { en: 'Chat', th: 'แชท' },
        dashWelcome: { en: 'CHOOSE YOUR MISSION,', th: 'เลือกภารกิจของคุณ,' },
        dashSubtitle: { en: 'What are you looking for today?', th: 'วันนี้คุณมองหาอะไรอยู่?' },
        dashLongTerm: { en: 'Find a Long-Term Buddy', th: 'หาเพื่อนเล่นระยะยาว' },
        dashLongTermDesc: { en: 'Swipe through profiles to find your perfect gaming partner.', th: 'ปัดโปรไฟล์เพื่อค้นหาคู่หูเล่นเกมที่สมบูรณ์แบบของคุณ' },
        dashStartSwiping: { en: 'START SWIPING', th: 'เริ่มปัดเลย' },
        dashPlayNow: { en: 'Play Now', th: 'เล่นทันที' },
        dashPlayNowDesc: { en: 'Jump into the action immediately. Browse or create a room.', th: 'เข้าสู่การต่อสู้ทันที ค้นหาหรือสร้างห้อง' },
        dashJoinRoom: { en: 'JOIN A ROOM', th: 'เข้าร่วมห้อง' },
        
        // --- Status Popup in main1.html ---
        statusOnline: { en: 'Online', th: 'ออนไลน์' },
        statusIdle: { en: 'Idle', th: 'ไม่ว่าง' },
        statusDnd: { en: 'Do Not Disturb', th: 'ห้ามรบกวน' },
        statusInvisible: { en: 'Invisible', th: 'ซ่อนตัว' },
        popupEditProfile: { en: 'Edit Profile', th: 'แก้ไขโปรไฟล์' },
        popupSettings: { en: 'Settings', th: 'ตั้งค่า' },
        popupLogout: { en: 'Log Out', th: 'ออกจากระบบ' },

        // --- settings.html ---
        settingsTitle: { en: 'SETTINGS', th: 'การตั้งค่า' },
        settingsSubtitle: { en: 'Customize your experience.', th: 'ปรับแต่งประสบการณ์ของคุณ' },
        settingsAppearance: { en: 'Appearance', th: 'ลักษณะ' },
        settingsThemeLight: { en: 'Light', th: 'สว่าง' },
        settingsThemeDefault: { en: 'Default', th: 'ค่าเริ่มต้น' },
        settingsThemeDark: { en: 'Dark', th: 'มืด' },
        settingsAccount: { en: 'Account', th: 'บัญชี' },
        settingsPrivacy: { en: 'Privacy & Safety', th: 'ความเป็นส่วนตัวและความปลอดภัย' },
        settingsComingSoon: { en: 'Coming Soon...', th: 'เร็วๆ นี้...' },
        settingsLanguage: { en: 'Language', th: 'ภาษา' },
        settingsLangEn: { en: 'English', th: 'อังกฤษ' },
        settingsLangTh: { en: 'Thai', th: 'ไทย' },
        esc: { en: 'ESC', th: 'ESC' },
    };

    // Define the main function in the global scope
    setLanguage = (lang) => {
        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const key = el.dataset.translateKey;
            const translation = translations[key]?.[lang];
            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else if (el.tagName === 'OPTION') {
                    el.textContent = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('gamicon_lang', lang);

        // This part is for the simple text-swap button on the landing pages, not used on settings page
        const toggleButtons = document.querySelectorAll('.lang-toggle');
        toggleButtons.forEach(button => {
            button.textContent = lang === 'en' ? 'ไทย' : 'EN';
        });
    };

    const langToggleHandler = () => {
        const currentLang = localStorage.getItem('gamicon_lang') || 'en';
        const newLang = currentLang === 'en' ? 'th' : 'en';
        setLanguage(newLang);
    };

    document.querySelectorAll('.lang-toggle').forEach(button => {
        button.addEventListener('click', langToggleHandler);
    });

    const initialLang = localStorage.getItem('gamicon_lang') || 'en';
    setLanguage(initialLang);
});
