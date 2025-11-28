export const features = [
  {
    description: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
    imgSrc: "/sec2-l1.png",
  },
  {
    description: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
    imgSrc: "/sec2-l2.png",
  },
  {
    description: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt",
    imgSrc: "/sec2-l3.png",
  },
];

export const repeatItems = Array.from({ length: 3 }, () => ({
  title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
  discript: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
  img: "/s3l.png",
}));

export const navLinks = Array.from({ length: 3 }, () => ({ text: 'Lorem ipsum' }));

export const logos = Array.from({ length: 12 }, (_, i) => `/logo${i + 1}.png`);

export const cards = Array.from({ length: 4 }, (_, i) => ({
  title: 'Lorem ipsum dolor sit amet consectetur',
  descp: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
  img: `/s6-${i + 1}.png`,
}));

export const qna = Array(5).fill({
  question: "Lorem ipsum dolor sit amet consectetur?",
  answer:
    "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
})