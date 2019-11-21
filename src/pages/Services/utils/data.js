//assets
import { colors } from "assets/styles/utils/vars";
import ax from "pages/App/assets/img/skills icon/ax.svg";
import brain from "pages/App/assets/img/skills icon/brain.svg";
import libra from "pages/App/assets/img/skills icon/libra.svg";
import reactIcon from "pages/App/assets/img/skills icon/reactIconLarge.svg";
import skittle from "pages/App/assets/img/skills icon/skittle.svg";
import tower from "pages/App/assets/img/skills icon/tower.svg";

import workplace1 from "pages/Services/assets/img/workplace/workplace1.svg";
import workplace2 from "pages/Services/assets/img/workplace/workplace2.svg";
import workplace3 from "pages/Services/assets/img/workplace/workplace3.svg";

export const awardsArr = [
  { count: "15+", name: "nobel prizes", color: colors.primary },
  { count: "33", name: "nobel prizes", color: colors.lightPurple },
  { count: "12", name: "nobel prizes", color: colors.emerald },
];

export const articles = [
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
