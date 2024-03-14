function openDoor() {
    document.getElementById("click-door").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}


let noClickCount = 0;

const sadImages = [
    "cry4.gif",
    "cry1.jpeg",
    "cry2.gif",
    "cry3.gif",
    "cry5.jpeg",
    "cry6.jpeg",
    "cry7.jpeg",
    "cry8.gif",
    "cry9.jpeg",
    "cry10.jpeg",
];


function showMessage(response) {
    if (response === "No") {
        const noButton = document.getElementById("no-button");
        const maxWidth = window.innerWidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;

        noClickCount++;

        if(noClickCount <= 5){
            document.getElementsByClassName("image")[0].src = sadImages[noClickCount - 1];
            document.getElementById("question").textContent =
            "Told ya, please be my Wifey ˙◠˙";
            document.getElementById("name").style.display = "none";
            document.getElementsByClassName("image2")[0].style.display = "none";

        } else {
            document.getElementsByClassName("image")[0].src = "cat-cats.gif";
            const questionElement = document.getElementById("question");
            questionElement.textContent =  "Okii Wifey, sorry for insisting so much. Of course I respect your boundaries and I'm sorry if I was being too pushy. I hope you have a fantastic Day! And don't forget to drink water 🥛"
            questionElement.className = "message-text";
            noClickCount = 0;


            document.getElementById("no-button").style.display = "none";
            document.getElementById("yesButton").style.display = "none";
        }

        noButton.style.position = "absolute";

        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";


    }

    if (response === "Yes") {

        document.getElementById("name").remove();
        document.getElementById("no-button").remove();
        document.getElementById("yesButton").remove();

        const yesMessage = document.getElementById("question");
        yesMessage.textContent = "YESSSSS,Thankyouuu!!! btw, Happy 17th Monthsarry my Wifeeeyyy!!🫶🏻  for today po, i am overwhelmed with gratitude and enjoyment , thankyou for everything love, for being by my side thru every ups n downs, for loving me despite my flaws and for choosing me every single day. i know my writings for u its not too much formal since i want to say my feelings for u without any kind of burden or higpit, i want to express as much of my feelings for u po, and i hope u won't mind it, my silly typings hehe.as for today, i thank God for leading u to me, even tho i don't understand  why someone as incredible as u would choose someone like me. u are my light in the dark and my home in the day n night. without u, probably i would feel lost and incomplete ;((  u bring hope to my life, and make every day brighter. u are my first in so many ways po - my first kiss, my first girlfriend, my first to introduce to my family, and many more. everything feels new and special ng dahil sayo. sinasampal ko nga sarili ko iniisip kung nananaginip ba ako or sadyang pinagpala ako because our love is real. i want to apologize for the times we argue and for any moments when i fall short as ur boyfie, i promise to always strive to make u the happiest person in the world, though i may not always have the right words, i hope my actions speak volumes about the depth of my love for u. im sorry if i can't give u the gift i had hoped to today. its not ready yet, but know that it's my way of love, crafted with all of my heart and effort. i can't wait po to see the joy on ur face when u receive it hehe 🤭🤭 let's celebrate our monthsarry properly this weekend po, as my weekdays are packed with pag aaral HAHAHAHA, and please forgive me if i can't give u something that u will appreciate, but i will make it up to u, coz' i love u so much. i love u more than words can express, and i pray that our love will even grow more stronger with each day, remember love na ikaw ang lahat, my chicago😉, my home and my love!! 🫶🏻🫶🏻";
        yesMessage.style.display = "block";
        yesMessage.style.fontStyle = "normal";

        const existingImage = document.getElementsByClassName("image")[0];
        existingImage.parentNode.removeChild(existingImage);
        const existingImage2 = document.getElementsByClassName("image2")[0];
        existingImage2.parentNode.removeChild(existingImage2);
/*         document.getElementsByClassName("image")[0].src = "dance.gif"; */

    }
}
