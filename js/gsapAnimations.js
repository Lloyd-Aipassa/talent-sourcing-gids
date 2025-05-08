gsap.registerPlugin(SplitText);
let split = SplitText.create('h1', {
  type: 'chars, words, lines',
});

gsap.from(split.chars, {
  duration: 0.5,
  opacity: 0,
  y: 80,
  stagger: 0.1,
  ease: 'power2.out',
});
