async function displayMenuAll(name, runtime) {
    const titles = {
        first: '*`State Intelligence Agency of the Republic of Indonesia`*',
        murbug: '*_`地Intelligence Menu神`_*',
        bugown: '*_`地Bug Own Menu神`_*',
        owner: '*_`地Owner Menu神`_*',
        tools: '*_`地Eselon Menu神`_*',
        ddos: '*_`地Exploit Menu神`_*'
    };

    const finishDisplay = `
${titles.first}

*👤 Pengguna*: ${name}
*🎗️ Creator*: PwnOsec Technologies
*🎗️ Contact*: @bin.ri
*💡 Version Bot*: 15.0
*📡 Status*: Online selama ${runtime}

${titles.murbug}
*_🔛_ Invite [ Invite Invisible ]*
*_🔛_ Tocrash [ 15 Msg ]*
*_🔛_ Freeze [ Stuck Logo ]*
*_🔛_ CarouselMsg [ Exploit Carousel ]*
*_🔛_ RequestCall [ Exploit Call ]*
*_🔛_ PayFreeze [ Freeze Kamuflase ]*
*_🔛_ CrashUi1 [ Exploit Ui V1 ]*
*_🔛_ CrashUi2 [ Exploit Ui V2 ]*
*_🔛_ CrashUi3 [ Exploit Ui V3 ]*
*_🔛_ CrashUi4 [ Exploit Ui V4 ]*
*_🔛_ CrashUi5 [ Exploit Ui V5 ]*
*_🔛_ HardUi [ Last Level Ui Exploit ]*
*_🔛_ CrashIphone [ Only Ios ]*
*_🔛_ TypeBug [ List Bug ]*

${titles.bugown}
*❌ TocrashOwn [ Only 15 Msg ]*
*❌ OwnHardUi [ Last Level Ui Bug ]*
*❌ OwnCrashIphone [ Only Ios ]*
*❌ Pairing-Unli [ Only Own ]*

${titles.owner}
*📍 Self*
*📍 Public*
*📍 Murbugcd*
*📍 Delcache*
*📍 Addowner*
*📍 Addmurbug*
*📍 Dellowner*
*📍 Dellmurbug*

${titles.tools}
*🔍 Check Identity Telekomunikasi*
*📲 Tapping Telecommunications*
*👨🏽‍✈️ Print National Identity*
*💳 Goverment Deleted Nationality*


${titles.ddos}
*_📌 Exploitationv1_*`;

    return finishDisplay;
}

async function displayResponeDoneBug(number, command) {
     const responseDone = `*_🤖 Sukses melakukan pengiriman bug ${command} Ke nomor ${number} 🤖_*`
     return responseDone
}

module.exports = { displayMenuAll, displayResponeDoneBug };