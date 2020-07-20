const Discord = require("discord.js");
const config = require("../config.json");

exports.run = async (client, message, args) => {

    const quotes = [
        "**Niggalations 16:61**\n> If thy hoe cheats, she shall sleep on the streets.",
        "**Niggalations 420:1**\n> Shall a nigga pass the blunt to the right, he will follow rules, for thy nigga that passes it to the left, follows the law.",
        "**Niggalations 420:69**\n> If thyne thot obtains a high score on snap, thy nigga shall take a step back, for thyne thot may have crabs.",
        "**Niggalations 6:18**\n> If the fine bitch is really taken, don’t stare at what she has shakin.",
        "**Niggalations 15:49**\n> Always spark up thine nigga, for it is the season to share.",
        "**Niggalations 6:15**\n> Consume not her ass until thee knoweth the lady is the one.",
        "**Niggalations 6:29:**\n> If sheth leaves thee on seen, thy words left sheth speechless.",
        "**Niggalations 420:68**\n> If thy broad says thou is too short remindeth her thy feet shall not matter though It is about thy meat.",
        "**Niggalations 34:12**\n> If thy bitch will cheat to get thy. Thy bitch will cheat on thy too.",
        "**Niggalations 3:05**\n> If tho bitch wants into thy mentions, tho shall have to clean my kitchen's.",
        "**Niggalations 69:23**\n> If he makes her laugh and giggle, he can make her ass clap and jiggle.",
        "**Niggalations 3:12**\n> Thy bitches be needy but all of em got pre owned pussy.",
        "**Niggalations 98:19**\n> If the nigga throweth shade, thy bitch nigga shall catcheth thy fade.",
        "**Niggalations 7:27**\n> She hath no interest in thou she only likes thou attention.",
        "**Niggalations 3:86**\n> Cheateth on thou girls and not on thou curls.",
        "**Niggalations 5.78**\n> Thy reason for why women canth fart and men can is because women are like givers of the shit and man the takers of thier shit.",
        "**Niggalations 3:11**\n> If thy bitch cheat its okay cause you still beat.",
        "**Niggalations 45:1**\n> Thy original name equals thy original fame.",
        "**Niggalations 03:10**\n> If thy hoe has a private story, focus on yourself buddy.",
        "**Niggalations 7:41**\n> If she says she couldn't talk to you because her phone died she was having sex, no girl EVER LETS THEIR PHONE DIE.",
        "**Niggalations 9:14**\n> If she does not choke on thy meat, she belongs to thy streets.",
        "**Niggalations 3:96**\n> The more she laughs at your jokes the more you shall give her a deep strokes.",
        "**Niggalations 1:94**\n> I do not need to mention that if she talks to others she only likes you for your attention.",
        "**Niggalations 9:99**\n> Juice WRLD.",
        "**Niggalations 6:90**\n> She might be the Queen of Spades, but a spade is still a hoe.",
        "**Niggalations 1:92**\n> A nigga shall fucking not remind the teacher of the recurring assignment she was supposed to post this week. If the nigga does, thou shall pull up on his IP address.",
        "**Niggalations 3:45**\n> Thy sexy ass nigga deserves a sexy ass girl",
        "**Niggalations 4:57**\n> A hoe may only cost a dime, but they shall never be worth the time",
        "**Niggalations 90:21**\n> Thou six pack on thou skinny nigga is comparable to thou tiddies on thy fat hoe",
        "**Niggalations 31:12**\n> You didn’t lead her on, thy bitch followed.",
        "**Niggalations 7:77**\n> One plus one is two, if she have a hoe friend than she a hoe too.",
        "**Niggalations 14:03**\n> If they female claims to be a child of god, than thy female has more bodies then a lobby in COD.",
        "**Niggalations 81:4**\n> If thy bitch she shave, thy everyone in thy streets she gave.",
        "**Niggalations 42:7**\n> If the booty jiggles when she walks, then I shall listen when she talks.",
        "**Niggalations 99:99**\n> She is never yours, it’s just your turn.",
        "**Niggalations 3:38**\n> If your dollars she shall Necessitate then her cheeks shall she capitulate.",
        "**Niggalations 12:57**\n> If thou hast taken two of a hit, then thou must pass that shit.",
        "**Niggalations 17:5**\n> Thick thighs make thy dick rise.",
        "**Niggalations 4:53**\n> If she thick, whip out thy stick.",
        "**Niggalations 32:14**\n> If you catching feelings, don't let them catch you.",
        "**Niggalations 13:42**\n> If she cute, then thy can tap her. But if she ain't, then thy can slap her.",
        "**Niggalations 7:03**\n> If thy queen sends streaks thy bitch belong to the streets.",
        "**Niggalations 7:99**\n> If thy queen be asleep, thy meat shall be beat.",
        "**Niggalations 98:1**\n> Either thou folds with thy BEST of them or thou shalt fold with the REST of them."
    ];
    let random = Math.floor(Math.random() * (quotes.length - 1) + 1);
    message.channel.send(quotes[random]).catch(err => {
        message.author.send("i cant send messages to that channel")
    })

}