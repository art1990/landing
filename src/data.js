/* === assets === */
import { colors } from "assets/styles/utils/vars";
//avatar
import avatar1 from "assets/img/avatarTestimonials/1.png";
import avatar2 from "assets/img/avatarTestimonials/2.png";
import avatar3 from "assets/img/avatarTestimonials/3.png";
import avatar4 from "assets/img/avatarTestimonials/4.png";
import avatar5 from "assets/img/avatarTestimonials/5.png";
import avatar6 from "assets/img/avatarTestimonials/6.png";
import avatar7 from "assets/img/avatarTestimonials/7.png";

import feMale from "assets/img/avatarTestimonials/defaultFemale.png";
import male from "assets/img/avatarTestimonials/defaultMale.png";

import photoAndrei from "assets/img/photoAndrei.png";
//our team photo
import photo1 from "assets/img/avatarTeam/photo1.png";
import photo2 from "assets/img/avatarTeam/photo2.png";
import photo3 from "assets/img/avatarTeam/photo3.png";
import photo4 from "assets/img/avatarTeam/photo4.png";
import photo5 from "assets/img/avatarTeam/photo5.png";
import photo6 from "assets/img/avatarTeam/photo6.png";
//social icon
import codepen from "assets/img/icon/social/codepan2.svg";
import twitter2 from "assets/img/icon/social/twitter2.svg";
import ball from "assets/img/icon/social/ball.svg";
import ax from "assets/img/icon/skills icon/ax.svg";
import brain from "assets/img/icon/skills icon/brain.svg";
import libra from "assets/img/icon/skills icon/libra.svg";
import reactIcon from "assets/img/icon/skills icon/reactIconLarge.svg";
import skittle from "assets/img/icon/skills icon/skittle.svg";
import tower from "assets/img/icon/skills icon/tower.svg";
import twitter from "assets/img/icon/social/twiter.svg";
import facebook from "assets/img/icon/social/facebook.svg";
import instagram from "assets/img/icon/social/instagram.svg";
import youtube from "assets/img/icon/social/youtube.svg";
import m from "assets/img/icon/social/m.svg";
//home photo
import benefitsHome from "assets/img/benefitsHome.png";
import benefitsApartament from "assets/img/benefitsApartament.png";
//workplace photo
import workplace1 from "assets/img/workplace1.png";
import workplace2 from "assets/img/workplace2.png";
import workplace3 from "assets/img/workplace3.png";

export const avatarArr = [
  avatar1,
  avatar2,
  avatar3,
  male,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
];

//Footer
export const footerData = [
  { menu: ["Home", "About", "Services", "News", "Gallery", "Contact"] },
  { services: ["Lorem", "Ipsum", "Dolor", "Sit Amet"] },
  { "contact us": ["contact@lop.com", "856-693-456"] },
  {
    "follow us": [
      [twitter, "https://twitter.com/?lang=ru"],
      [facebook, "https://www.facebook.com/"],
      [instagram, "https://www.instagram.com/?hl=ru"],
      [youtube, "https://www.youtube.com/"],
      [m, "https://www.youtube.com/"],
    ],
  },
];

//Home page
export const articlesHomePage = [
  {
    heading: "Webdesign",

    article:
      "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
  },
  {
    heading: "Webdev",

    article:
      "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
  },
  {
    heading: "Marketing",

    article:
      "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
  },
  {
    heading: "Marketing",

    article:
      "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
  },
  {
    heading: "Webdesign",

    article:
      "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
  },
  {
    heading: "Webdev",

    article:
      "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
  },
];

export const quoteHomePage = [
  {
    quoteText:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    author: "Andrew Slomka",
    company: "Some Company",
    photo: photoAndrei,
  },
];

export const benefits = {
  text: {
    regularBold:
      "Eget nunc scelerisque viverra mauris in aliquam. Dignissim sodales ut eu sem integer vitae. Libero nunc consequat interdum varius.",
    list: [
      "Magna sit amet purus gravida. Sit amet porttitor eget dolor morbi non.",
      "Lectus vestibulum mattis ullamcorper velit sed ullamcorper.",
      "Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Dui faucibus in ornare quam viverra.",
      "Posuere ac ut consequat semper viverra.",
    ],
  },
  imgArr: [benefitsHome, benefitsApartament],
};

export const clients = {
  list: [
    "Nisl condimentum id venenatis a. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Sollicitudin tempor id eu nisl nunc. ",
    "Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.",
    "Massa massa ultricies mi quis hendrerit dolor magna. Egestas dui id ornare arcu odio..",
  ],
};

export const cards = [
  {
    title: "01",
    heading: "Research",
    text:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. ",
  },
  {
    title: "02",
    heading: "Marketing",
    text:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. ",
  },
  {
    title: "03",
    heading: "Results",
    text:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. ",
  },
];

//Services page
export const awardsArr = [
  { count: "15+", name: "nobel prizes", color: colors.primary },
  { count: "33", name: "nobel prizes", color: colors.lightPurple },
  { count: "12", name: "nobel prizes", color: colors.emerald },
];

export const articlesServices = [
  {
    heading: "Webdesign",
    icon: ax,
    article:
      "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
    articleHeaderColor: colors.lightEmerald,
  },
  {
    heading: "Webdev",
    icon: reactIcon,
    article:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. ",
    articleHeaderColor: colors.primary,
  },
  {
    heading: "Marketing",
    icon: tower,
    article:
      "Eu augue ut lectus arcu bibendum at. Pellentesque nec nam aliquam sem et tortor consequat. ",
    articleHeaderColor: colors.gold,
  },
  {
    heading: "Marketing",
    icon: libra,
    article:
      "Id venenatis a condimentum vitae. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Tortor dignissim convallis aenean et.",
    articleHeaderColor: colors.gold,
  },
  {
    heading: "Webdesign",
    icon: skittle,
    article:
      "Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Malesuada fames ac turpis egestas sed.",
    articleHeaderColor: colors.lightEmerald,
  },
  {
    heading: "Webdev",
    icon: brain,
    article:
      "Integer quis auctor elit sed vulputate mi. Semper auctor neque vitae tempus. Vulputate odio ut enim blandit volutpat maecenas volutpat.",
    articleHeaderColor: colors.primary,
  },
];

export const workplace = {
  imgArr: [workplace1, workplace2, workplace3],
  cards: [
    {
      title: "01",
      heading: "Upper prior hundred links approach reedy",
      text:
        "Upper prior hundred links approach reedy, was to the than and the ever somehow surprised known for every by of there until road, ",
    },
    {
      title: "02",
      heading: "Upper prior hundred links approach reedy",
      text:
        "Upper prior hundred links approach reedy, was to the than and the ever somehow surprised known for every by of there until road, ",
    },
    {
      title: "03",
      heading: "Upper prior hundred links approach reedy",
      text:
        "Upper prior hundred links approach reedy, was to the than and the ever somehow surprised known for every by of there until road, ",
    },
  ],
};

//Team page
export const personArr = [
  {
    img: photo1,
    firstName: "Kerry",
    lastName: "Lorem",
    profession: "Designer",
    linkArr: [
      { resourceName: "twitter", link: "https://twitter.com/" },
      { resourceName: "ball", link: "https://twitter.com/" },
      { resourceName: "codepen", link: "https://codepen.io/" },
    ],
  },
  {
    img: photo2,
    firstName: "Kerry",
    lastName: "Lorem",
    profession: "Designer",
    linkArr: [
      { resourceName: "twitter", link: "https://twitter.com/" },
      { resourceName: "ball", link: "https://twitter.com/" },
      { resourceName: "codepen", link: "https://codepen.io/" },
    ],
  },
  {
    img: photo3,
    firstName: "Kerry",
    lastName: "Lorem",
    profession: "Designer",
    linkArr: [
      { resourceName: "twitter", link: "https://twitter.com/" },
      { resourceName: "ball", link: "https://twitter.com/" },
      { resourceName: "codepen", link: "https://codepen.io/" },
    ],
  },
  {
    img: photo4,
    firstName: "Kerry",
    lastName: "Lorem",
    profession: "Designer",
    linkArr: [
      { resourceName: "twitter", link: "https://twitter.com/" },
      { resourceName: "ball", link: "https://twitter.com/" },
      { resourceName: "codepen", link: "https://codepen.io/" },
    ],
  },
  {
    img: photo5,
    firstName: "Kerry",
    lastName: "Lorem",
    profession: "Designer",
    linkArr: [
      { resourceName: "twitter", link: "https://twitter.com/" },
      { resourceName: "ball", link: "https://twitter.com/" },
      { resourceName: "codepen", link: "https://codepen.io/" },
    ],
  },
  {
    img: photo6,
    firstName: "Kerry",
    lastName: "Lorem",
    profession: "Designer",
    linkArr: [
      { resourceName: "twitter", link: "https://twitter.com/" },
      { resourceName: "ball", link: "https://twitter.com/" },
      { resourceName: "codepen", link: "https://codepen.io/" },
    ],
  },
];

export const quote = [
  {
    quoteText:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    author: "Andrew Slomka",
    company: "Some Company",
    photo: male,
  },
  {
    quoteText:
      "Lectus arcu bibendum at varius. Adipiscing diam donec adipiscing tristique y.",
    author: "Kerry Johnes",
    company: "Some Company",
    photo: feMale,
  },
  {
    quoteText:
      "Lectus arcu bibendum at varius. Adipiscing diam donec adipiscing tristique 123.",
    author: "Key Johnes",
    company: "Some Company",
    photo: male,
  },
  {
    quoteText:
      "Lectus arcu bibendum at varius. Adipiscing diam donec adipiscing tristique 123.",
    author: "Key Johnes",
    company: "Some Company",
    photo: feMale,
  },
  {
    quoteText:
      "Lectus arcu bibendum at varius. Adipiscing diam donec adipiscing tristique 123.",
    author: "Key Johnes",
    company: "Some Company",
    photo: male,
  },
  {
    quoteText:
      "Lectus arcu bibendum at varius. Adipiscing diam donec adipiscing tristique y.",
    author: "Kerry Johnes",
    company: "Some Company",
    photo: feMale,
  },
];

export const socialIcon = {
  twitter: twitter2,
  ball,
  codepen,
};
