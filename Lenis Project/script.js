const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



document.querySelectorAll(".aspect-square").forEach((square) => {
    let image = square.querySelector("img")
    let tl = gsap.timeline()

  let xTransform = gsap.utils.random(-100,100);

  tl
     .set(image,{
      transformOrigin: `${xTransform < 0 ? 0 : '100%'}% 50%`,
     }, "start")

    tl.to(image,{
      scale: 0,
      ease: "none",
      scrollTrigger: {
        trigger: image,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    }, "start")

    .to(square, {
      xPercent: xTransform,
      ease: "none",
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom ",
        scrub: true,
      }
    })
})
