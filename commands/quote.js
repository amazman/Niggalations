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
        "**Niggalations 98:1**\n> Either thou folds with thy BEST of them or thou shalt fold with the REST of them.",
        "**Niggalations 39:43**\n> If thy girl ever has a gay best friend that nigga better suck thy dick to prove it.",
        "**Niggalations 3:13**\n> We cant build our kingdoms if thy bitch still want attention from the village.",
        "**Niggalations 13:9**\n> Though shall always pass after thy second puff.",
        "**Niggalations 6:14**\n> If her phone wallpaper isn't of her and thine, then she is definitely wasting your time.",
        "**Niggalations 24:11**\n> Those who live and run away, live to simp another day.",
        "**Niggalations 6:1**\n> If them cheeks are fat, like hands they shall clap.",
        "**Niggalations 1:23**\n> If the glove don't fit, it is the fold he did not commit.",
        "**Niggalations 7:38**\n> If she can say ‘lol’ without laughing, then she can say ‘i love you’ without loving you.",
        "**Niggalations 7:32**\n> If thy girl ask for thy password, flip the script and ask for her own.",
        "**Niggalations 10:6**\n> Hearken, take heed to my stipulations! If thou findeth a woman of promiscuous nature, lay not a hand on her nor provoke her to love thee; the LORD has given her to another, and thus in the streets she doth remain.",
        "**Niggalations 3:48**\n> Ain’t nothin gained when a bitch complain.",
        "**Niggalations 8:21**\n> If she has multiple morning streaks then you must hit the streets.",
        "**Niggalations 45:17**\n> If thy Tinder date hath not cum then a ghost you shall become.",
        "**Niggalations 69:31**\n> If thy cows nails are long then she shall please the shlong",
        "**Niggalations 69:32**\n> If thine whore is not of age then thine must enter from backstage.",
        "**Niggalations 12:9**\n> And I say unto you; If she thirst-trap on the ‘gram, you must understand you are not her only man",
        "**Niggalations 4:11**\n> If Lachie thy simp, thy Lachie belongs to the streets",
        "**Niggalations 4:14**\n> If the queen sleeps, the console shall beep",
        "**Niggalations 5:43**\n> If the queen is to remain awake, to turn on the console is a mistake.",
        "**Niggalations 7:20**\n> Thy nigga shall not date a bitch/hoe with an OnlyFans, as you, thy Nigga, shall be her only fan.",
        "**Niggalations 21:23**\n> Thou shalt not place thou faith in thou woman; for thou heart shall one day be shattered.",
        "**Niggalations 21:24**\n> And he said, thy woman shall not be exalted; for differentiation she has not.",
        "**Niggalations 3:15**\n> There is no point using more than wood on a hoe-notch.",
        "**Niggalations 4:16**\n> You can’t put loyalty on a hoe.",
        "**Niggalations 4:7**\n> If thou you art seeking, ask about thine homies, banish thee, wicked harlot! To thou streets you return!",
        "**Niggalations 6:07**\n> If thou bitch does not cleaneth betwixt her cheeks, thou hoe is for thee streets",
        "**Niggalations 9:37**\n> If after you beat with your hoe and she can still walk, nigga you gotta give your meat and yourself a lil talk, cus you suppose to leave her lame and paralyzed but if she still walking after, when you went inside her, nigga she ain't even realised.",
        "**Niggalations 9:08**\n> If thy bird fly amongst a flock, she belongs to thy sidewalk.",
        "**Niggalations 8:14**\n> Never let thine girl complain to another man, for a shoulder to cry on becomes a dick to ride on."
    ];
    let random = Math.floor(Math.random() * (quotes.length - 1) + 1);
    message.channel.send(quotes[random]).catch(err => {
        message.author.send("i cant send messages to that channel")
    })

}
