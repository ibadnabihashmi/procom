var express = require('express');
var router = express.Router();
var Participant = require('../models/Participants');
var _ = require('lodash');


var competitions = {
    motivationalTalk :{
        name:"Motivational talk",
        desc:"Energetic Motivational Talks, where the future Socrates and Hitchens are polished. It is one of the hardest and yet seemingly one of the most elegant tasks; to inspire people in order to accomplish wonders.",
        max:1,
        min:1,
        type:'bba'
    },
    adWars :{
        name:"Ad-Wars",
        desc:"we invite you to participate in Ad War to show your talent to every other competent. and a fascinating chance to experience you never experience before. In Ad War an advertise is made by you and will be introducing it with your respective team members minimum 2 maximum 5 to the judges. The best advertise would be considered as the winner with its team.",
        max:5,
        min:2,
        type:'bba'
    },
    entreeWars :{
        name:"Entree wars",
        desc:"An entree war is a platform where you can capitalize on your imaginative background by channelizing your ingenuity into fruitful plan! We invite you all to an exciting, challenging, and rewarding experience where you will develop your own business Plan and test your innovative entrepreneurial skill. An entree war is designed to give students and young entrepreneurs a real world experience to tune their idea into a business plans and elevator pitches",
        max:5,
        min:2,
        type:'bba'
    },
    marketing :{
        name:"Marketing competition",
        desc:"This competition is all about enriching one's mind to come up with new ideas in the marketing world. Marketing Challenge is a contribution in marketing field, which will help students to understand how to build skills for marketing a real product, providing a great opportunity to learn, experience and expand marketing skills. Participants will be judged on Brand Plan developing marketing strategy. Students will be encouraged to play an active role in resolving and suggesting solutions for the issues faced in the Market. And the competition will be based on 3 rounds.",
        max:5,
        min:2,
        type:'bba'
    },
    i2p :{
        name:"Idea to product(I2P)",
        desc:"Competitions like Idea to Product where the participants are expected to bring their futuristic vision towards the business ventures in practical reality. A real time simulation of all sorts of ideas that undergo various tweaks and improvements, where a polished idea comes into play and is rewarded.",
        max:5,
        min:2,
        type:'bba'
    },
    cdc :{
        name:"Circuit design competition",
        desc:"Circuit Designing Competition provides the participant a chance to test their designing skills to the very limit. If you love to play with electronics, then we provide you a chance to show us your level of skills and expertise.",
        max:3,
        min:2,
        type:'ee'
    },
    microcontroller :{
        name:"Microcontroller interfacing",
        desc:"Think you are logical? Have a craze for wining? Then step into the digital age and join us in Microcontroller Programming and Interfacing competition, and go head-to-head with the top future engineers of Pakistan! This competition encourages the Engineering students to show their talent in the field of Microcontrollers. The competition involves your time management skills, and programming and interfacing skills.",
        max:3,
        min:2,
        type:'ee'
    },
    hardwareExhibition :{
        name:"Hardware exhibition",
        desc:"Showcase your FYPs! Project Exhibition & Competition is the chance for those who want to work on software and hardware both simultaneously and to prove themselves as a team of professional Hardware and Circuit designers. This competition aims to show your idea of hardware designing of different type of project and interfacing with circuit through programming. This competition mainly focuses on the engineering and ingenuity skills portrayed by students in a variety of engineering projects that they have developed during their engineering studies. The ability of a team is judged as a team work and seeks for the better team players of tomorrow in the practical work of the field for our beloved Pakistan and provides them a chance to enhance their ability of competition. We will be testing your programming and interfacing skills of the Hardware. All participants are appreciated.",
        max:4,
        min:2,
        type:'ee'
    },
    networkDesign :{
        name:"Network design",
        desc:"ProCom 2016 brings network simulation to the level of competition. In this competition participants will be required to solve questions regarding networking and to simulate them.",
        max:3,
        min:2,
        type:'ee'
    },
    autocad :{
        name:"AutoCAD design",
        desc:"ProCom 2016 presents the AutoCAD Designing competition to show your talent and capabilities in AutoCAD Design Process and to become the best straight through merit and high quality performance. We welcome all to participate and enlighten your capabilities.",
        max:3,
        min:2,
        type:'ee'
    },
    roboRace :{
        name:"Robo race",
        desc:"An autonomous robot that follows a track without interference from any participant.",
        max:3,
        min:2,
        type:'ee'
    },
    roboWars :{
        name:"Robo wars",
        desc:"Make a manually RC controlled Robot. The robot has to destroy, flap upside down, or push the opponent’s robot out of the court.",
        max:3,
        min:2,
        type:'ee'
    },
    soldering :{
        name:"Soldering competition",
        desc:"Procom 2016 invites you to the biggest event of Pakistan to test your soldering skills and enhance it.",
        max:2,
        min:1,
        type:'ee'
    },
    spc :{
        name:"Speed programming competition",
        desc:"Programming is a logic based activity exhibiting the skill of learning, creating and coding. So are you ready to reveal on your power of building up logics in quick span of time? Speed programming is the essence of PROCOM.NET which acknowledges the “King of Programing”. Participants will be required to solve toughest problems requiring programming solutions and finest creativity skills in a limited time of span.",
        max:3,
        min:2,
        type:'cs'
    },
    speedMobileApp :{
        name:"Mobile application development competition",
        desc:"Smartphones are rapidly ascending to certainly acquire an international place in Pakistan. Procom.Net 2016 guarantees of providing smartphone developers a thriving and sensational environment for competition, where all developers get to have a golden opportunity of recognizing their real potential. Participants will be given the challenge to develop a small application for any development environment within limited time constraint. Different groups and individuals from renowned institutes will come to face each other on one platform through this event. Competing in such an intensive environment will not only provide a productive experience to learn but will also help in realizing and analyzing your shortcomings and advantageous qualities taking you one step ahead towards the success of professional life. Sign up and experience the battle of challenge in this absolute empowering environment.",
        max:3,
        min:2,
        type:'cs'
    },

    speedWebDev :{
        name:"Speed web application development",
        desc:"The Web Development Competition is about honoring excellence in the web profession. The Web Design Contest is also about empowering creative, technically proficient & future business-savvy web professionals. Participate as an individual, or as a team, but when it comes to Web Development, there is no challenging competition better than PROCOM.NET. Multiple teams from renowned institutes participate to test their web development skills and discover and learn about the recent developments in the field. Competing with tough and challenging opponents will help you analyze your weaknesses and strengths in depth. Participants will be required to design and implement their respective website with the required features and functions in a limited time period.",
        max:3,
        min:2,
        type:'cs'
    },
    softwareExhibition :{
        name:"Project exhibition",
        desc:"Software competition is a very prestigious part of PROCOM.Net. The competition provides an opportunity to upcoming software developers to exhibit their software based creations. Participants will be evaluated by highly skilled and competent professionals form the I.T industry.",
        max:4,
        min:2,
        type:'cs'
    },
    debugging :{
        name:"Speed Debugging competition",
        desc:"Programming fanatics, here we present a golden opportunity to exhibit your aptitude! This call is for all those programmers whose skills have surpassed the “Hello World!” phrase and for all those who have learnt to fight against the deadly demons termed as “BUGS”. It is for all those who have banged their head at least once while finding out the bugs that kept them haunting for several hours or days. So do you have the dexterity and efficiency of rectifying the errors in code? And do you possess the capability of eradicating the ambiguities from it? Do you hold the ignition of showcasing your debugging skills along with the coding skills? If you believe that yes you can, then grab this moment as this is the right time and place for you to do so. In this competition, teams will be given some piece of code withholding some errors in it and the participants have to debug it in limited time range. The team who can correct large numbers of error will be declared winner Present the world that you are no less than others!",
        max:3,
        min:1,
        type:'cs'
    },
    databaseDesign :{
        name:"Database design",
        desc:"The Database design competition is the backbone of PROCOM.NET. In this competition, you have to prove your programming and management skills by making a design of database, solve SQL queries and answer some MCQs. But do not forget to keep an eye on the time because it stops for none.",
        max:3,
        min:2,
        type:'cs'
    },
    uiux :{
        name: "UI/UX",
        desc:"Every object that you use in daily life was designed and given meticulous thinking behind its form. Not just sleek tech gadgets like smartphones and laptops, but even the most ordinary thing like the cup you drink coffee from, the hammer and screwdriver in your toolbox, even the nails and screws used with the hammer and screwdriver: every last one had to be carefully, thoughtfully designed by someone who took their job seriously. The same is true for software. These days, interface and design of software is often known as User Experience because the goal of such design work is to support the user in having a positive and productive experience with the software. Often User Experience is abbreviated to UX and UX Designers are important members of software teams. Are you a great designer? And do you want a competitive platform to prove your qualities? PROCOM.NET delivers you just such an opportunity to enroll yourself in a UI/UX Design Competition in which you will design a digital poster of a website or mobile application in a limited time frame.",
        max:2,
        min:1,
        type:'cs'
    },
    codeInDark :{
        name:"Code in the dark",
        desc:"This is the motive pertaining within the minds of Procom developers this year. Happening for the first time in history of Procom.net, participants enrolled for Web designing competition will be revealing up their expertise with the fact of no preview of the code. Code in the Dark is a front-end (HTML, CSS) competition, where each contestant will get an opportunity to implement a website design by being catered with just a screenshot in order to attain an idea of what design we expect from them. The peak point of this challenge is that no previews of the results are allowed during the implementation, and no measuring tools can be used. Participant who will be able to get hold on this challenge successfully will be awarded as winner by the audience.",
        max:1,
        min:1,
        type:'cs'
    },
    gameplayDesign :{
        name:"Gameplay designing competition",
        desc:"Daily life routine problems remain one of the most vexing and complex issues of all time. So who better to tackle this issue than the gaming community who are known for their creativity and collaborative problem solving skills? PROCOM.NET brings you a new designing competition which is inviting on innovators to rescue the world in real life by inspiring creative solutions and novel approaches that foster greater understanding of problems and its related issues and challenges. The challenge invites everyone to conceptualize a game that will engage and educate players about the dynamics of daily life problems. No prior experience or subject matters only expertise is the essential requirement. You supply the idea and design of the game play, and we’ll evaluate how competitive you are in demonstrating game designing.",
        max:3,
        min:1,
        type:'cs'
    },
    hackathon :{
        name:"Hackathon",
        desc:"Attention Programming Innovators, Students, Entrepreneurs and Citizens - If you possess an idea to help solve problems of really important daily life issues, then PROCOM.NET is the place where you should present yourselves! Hackathon is an event in which computer programmers and individuals involved in software development including graphic designers, interface designers and project managers collaborate intensively on software projects. Avail the chance to Win Attractive Prizes, work with experts and mentors, and earn an opportunity of a lifetime to evolve your idea into reality. Present in your creativity to build solutions for one of the problem statements in areas like Law & Security, Education, Health, Transport, Art, Culture etc.",
        max:4,
        min:3,
        type:'cs'
    },
    creativeWriting :{
        name:"Creative writing",
        desc:"Creative writing competition highlights and focuses the skills you’ve acquired in writing prose, stories or poems. This competition is for those whose writing has a profound impact on people or whose writing has the power to move people and maybe even changed the way they think or touched their hearts. English will be the medium in which all the written work will be judged. In this competition, the participants will be given a topic and they will have to write it in a way that best exemplifies beauty, thus the manner and fashion in which you write will be the core elements of evaluating the your piece of writing. This competition is a tribute to Shakespeare’s remarkable work.",
        max:1,
        min:1,
        type:'general'
    },
    scrabble :{
        name:"Scrabble",
        desc:"Scrabble is a word game. Play consists of forming interlocking words, crossword style, on the playing board, using letter tiles with various score values. The object is to get the highest score. Each player competes by using their tiles in combinations and locations that take best advantage of letter values and premium squares on the board.",
        max:1,
        min:1,
        type:'general'
    },
    iqTest :{
        name:"IQ test",
        desc:"Consider yourself intellectual enough to solve some of the most complex and intricate problems just by using your mental abilities? If you think you’re up for the challenge, then this competition gives you a chance to prove your mettle. General and analytical questions will be the heart of the competition. See where you stand amongst the rest of the crowd. Come and be a part of this exhilarating competition, which will test you to your limits.",
        max:2,
        min:1,
        type:'general'
    },
    iquest :{
        name:"IQuest",
        desc:"A competition based on the traditional idea of a treasure hunt. Participants will have to complete tasks which will require them to utilize and exhaust their skills and talents to the best of their abilities. Programming skills, logical thinking, quick reflexes and as a whole, a combination of both physical and mental abilities will be put to the test in this simple but challenging competition. To assist and aid the competitors in their tasks, clues and hints will be spread all over the campus, so that the best within the group can forge their way to victory.",
        max:3,
        min:1,
        type:'general'
    },
    painting :{
        name:"Painting",
        desc:"An artist’s ability is best judged when he expresses his world of emotions and thoughts on a blank canvas. And Painting Competition gives you the opportunity to showcase just that. A brush, canvas and paints along with other materials will help you flaunt you skills whilst you compete with other painters. It’s a platform where you can show off your passion and creativity, and depict how good of painter you truly are, by seeing how far you exceed in your artistic skills.",
        max:1,
        min:1,
        type:'general'
    },
    photography :{
        name:"Photography",
        desc:"The Photography Competition will be based on a particular theme. The judging parameters will be how closely you’ve matched the theme by the mere clicks your camera captured. Photographs have the power to capture a moment in time, and this moment is forever imprinted on a frame. Use this ability imparted by the art of photography to win the competition by perfectly depicting the given theme in your pictures.",
        max:1,
        min:1,
        type:'general'
    },
    shortFilming :{
        name:"Short Filming",
        desc:"One of the main creative competitions of the event with the concept accentuating the craft of filming and theater, The Short Filming Competition will allow entries to be submitted prior to the start of the competition. The entries will be judged on various criteria by the judges to ensure that the best team wins the competition. If you have the creative skills to inspire and innovate people with short films, then this competition is designed for you.",
        max:5,
        min:3,
        type:'general'
    },
    sketching :{
        name:"Sketching",
        desc:"Sketching, which can be considered as a counterpart of Painting, is another useful tool to have in your creative arsenal. In this competition, an object will be provided to you which needs to be sketched on a piece of paper. To win this competition, finesse and expertise will be required as you will be judged on how closely the sketches corresponds to the said object and beautifully aesthetic the sketches are as compared to the objects presented.",
        max:1,
        min:1,
        type:'general'
    },
    spellingBee :{
        name:"Spelling bee",
        desc:"Spelling Bee competition requires you to face challenging words with the aim of getting the words spelled right. The words will be adjusted according to your age and skill level. The more words you spell correctly, the closer you are to becoming a Spelling Bee Champion. Join us by being a part of this healthy contest and see if you’ve got what it takes to win home the competition",
        max:3,
        min:2,
        type:'general'
    },
    nfs :{
        name:"Need For Speed",
        desc:"",
        max:1,
        min:1,
        type:'gaming'
    },
    counterStrike :{
        name:"Counter strike",
        desc:"",
        max:5,
        min:5,
        type:'gaming'
    },
    dota :{
        name:"DOTA 2",
        desc:"",
        max:5,
        min:5,
        type:'gaming'
    },
    fifa :{
        name:"Fifa",
        desc:"",
        max:1,
        min:1,
        type:'gaming'
    }

};

router.get('/:type',function(req,res){

    if(competitions.hasOwnProperty(req.params.type)){
        res.render('competition',{
            name:competitions[req.params.type].name,
            rules:competitions[req.params.type].desc,
            max:competitions[req.params.type].max,
            min:competitions[req.params.type].min,
            type:competitions[req.params.type].type
        });
    }else{
        res.render('404yolo');
    }


});
router.post('/reg',function(req,res){



    var participant = new Participant({
        institute:req.body.institute?req.body.institute:undefined,
        phone:req.body.phone?req.body.phone:undefined,
        email:req.body.email?req.body.email:undefined,
        type:req.body.type?req.body.type:undefined,
        mem1:req.body.mem1?req.body.mem1:undefined,
        mem2:req.body.mem2?req.body.mem2:undefined,
        mem3:req.body.mem3?req.body.mem3:undefined,
        mem4:req.body.mem4?req.body.mem4:undefined,
        mem5:req.body.mem5?req.body.mem5:undefined,
        ambassador:req.body.ambassador?req.body.ambassador:undefined,
        teamname:req.body.teamname?req.body.teamname:undefined,
        software:req.body.software?req.body.software:undefined,
        why:req.body.why?req.body.why:undefined
    });
    participant.save(function(err){
        if(err){
            res.send(500);
        }else{
            res.send(200);
        }
    });
});



module.exports = router;